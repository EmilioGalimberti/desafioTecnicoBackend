import axios, { AxiosResponse } from "axios";
import cron from "node-cron";
import {People,Films,Planets,Species,Vehicles,Starships} from "../models/models";

// Programa un cron job para sincronizar datos
export const sincronizarDB = cron.schedule('* * * * *', async () => {
  try {
    console.log("Sincronizando db con api");
    const peopleData = await getAllResources('https://swapi.dev/api/people/');
    const planetsData = await getAllResources('https://swapi.dev/api/planets/');
    const filmsData = await getAllResources('https://swapi.dev/api/films/');
    const speciesData = await getAllResources('https://swapi.dev/api/species/');
    const vehiclesData = await getAllResources('https://swapi.dev/api/vehicles/');
    const starshipsData = await getAllResources('https://swapi.dev/api/starships/');

    // Guarda los datos nuevos en la base de datos
    await createInDb(peopleData, People);
    await createInDb(planetsData, Planets);
    await createInDb(filmsData, Films);
    await createInDb(speciesData, Species);
    await createInDb(vehiclesData, Vehicles);
    await createInDb(starshipsData, Starships);

  } catch (error) {
    console.error('Error al sincronizar datos:', error);
  }
});

async function getAllResources<T>(apiUrl: string): Promise<T[]> {
  let allResources: T[] = [];
  let currentPage = 1;

  while (apiUrl) {
    try {
      const response: AxiosResponse = await axios.get(apiUrl, {
        params: { page: currentPage },
      });

      allResources = allResources.concat(response.data.results);
      
      // Actualiza la URL para la próxima página
      apiUrl = response.data.next;

      currentPage++;
    } catch (error: any) {
      console.error('Error fetching data:', error);
      break;
    }
  }

  return allResources;
}

async function createInDb<T>(data: T[], Model: any) {
  const dataIterable = data;
  let countResources = 0;

  for (const dataVariable of dataIterable) {
    const existingResource = await Model.findOne({ url: (dataVariable as any).url });
    
    if (!existingResource) {
      // Si no existe, guárdalo en la base de datos
      await Model.create(dataVariable);
      countResources++;
    }
  }

  console.log("sincronizacion de Modelo con exito ", Model, " modelos creados ", countResources);
}
