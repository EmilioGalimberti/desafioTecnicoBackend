/**
 * Definición de las rutas de la API usando Express Router.

*/

import { Router, Request, Response } from "express";
import servicioPeople from "../service/servicioPeople"
import servicioFilms from "../service/servicioFilms";
import servicioPlanets from "../service/servicioPlanets";
import servicioSpecies from "../service/servicioSpecies";
import servicoVehicles from "../service/servicoVehicles";
import servicioStarships from "../service/servicioStarships";

export const router = Router()

router.get('/people', servicioPeople.getPeople);
router.get("/people/:name", servicioPeople.getPeopleByName );
router.get('/films', servicioFilms.getFilms);   
router.get("/films/:episode_id" , servicioFilms.getFilmByidEpisode);
router.get('/planets', servicioPlanets.getPlanets);
router.get("/planets/:climate" , servicioPlanets.getPlanetByClimate)
router.get("/species", servicioSpecies.getSpecies)
router.get('/vehicles', servicoVehicles.getVehicles);
router.get('/starships', servicioStarships.getStarships);

export default router;
