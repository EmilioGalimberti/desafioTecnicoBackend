
import mongoose from "../data/configdbMongoose"; 

export interface IPeople extends mongoose.Document{
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: string,
  films: string[],
  species: string[],
  vehicles: string[],
  starships: string[],
  created: Date,
  edited: Date,
  url: string,
}

const peopleSchema = new mongoose.Schema({
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: String,
  films: [String],
  species: [String],
  vehicles: [String],
  starships: [String],
  created: Date,
  edited: Date,
  url: String,
});

export interface IPlanets extends mongoose.Document{
  name: string,
  rotation_period: string,
  orbital_period: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
  residents: string[],
  films: string[],
  created: Date,
  edited: Date,
  url: string,
}

const planetsSchema = new mongoose.Schema({
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  population: String,
  residents: [String],
  films: [String],
  created: Date,
  edited: Date,
  url: String,
});

export interface IFilms extends mongoose.Document{
  title: string,
  episode_id: Number,
  opening_crawl: string,
  director: string,
  producer: string,
  release_date: Date,
  characters: string[],
  planets: string[],
  starships: string[],
  vehicles: string[],
  species: string[],
  created: Date,
  edited: Date,
  url: string
}

const filmSchema = new mongoose.Schema({
  title: String,
  episode_id: Number,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: Date,
  characters: [String],
  planets: [String],
  starships: [String],
  vehicles: [String],
  species: [String],
  created: Date,
  edited: Date,
  url: String
});

export interface ISpecies extends mongoose.Document{
  name: string,
  classification: string,
  designation: string,
  average_height: string,
  skin_colors: string,
  hair_colors: string,
  eye_colors: string,
  average_lifespan: string,
  homeworld: string,
  language: string,
  people: string[],
  films: string[],
  created: Date,
  edited: Date,
  url: string,
}

const speciesSchema = new mongoose.Schema({
  name: String,
  classification: String,
  designation: String,
  average_height: String,
  skin_colors: String,
  hair_colors: String,
  eye_colors: String,
  average_lifespan: String,
  homeworld: String,
  language: String,
  people: [String],
  films: [String],
  created: Date,
  edited: Date,
  url: String,
});

export interface IVehicles extends mongoose.Document{
  name: string,
  vehicleModel: string,
  manufacturer: string,
  cost_in_credits: string,
  length: string,
  max_atmosphering_speed: string,
  crew: string,
  passengers: string,
  cargo_capacity: string,
  consumables: string,
  vehicle_class: string,
  pilots: string[],
  films: string[],
  created: Date,
  edited: Date,
  url: string,
}

const vehiclesSchema = new mongoose.Schema({
  name: String,
  model: String,
  manufacturer: String,
  cost_in_credits: String,
  length: String,
  max_atmosphering_speed: String,
  crew: String,
  passengers: String,
  cargo_capacity: String,
  consumables: String,
  vehicle_class: String,
  pilots: [String],
  films: [String],
  created: Date,
  edited: Date,
  url: String,
});

export interface IStarships extends mongoose.Document{
  name: string,
  starshipModel: string,
  manufacturer: string,
  cost_in_credits: string,
  length: string,
  max_atmosphering_speed: string,
  crew: string,
  passengers: string,
  cargo_capacity: string,
  consumables: string,
  hyperdrive_rating: string,
  MGLT: string,
  starship_class: string,
  pilots: string[],
  films: string[],
  created: Date,
  edited: Date,
  url: string,
}

const starshipsSchema = new mongoose.Schema({
  name: String,
  model: String,
  manufacturer: String,
  cost_in_credits: String,
  length: String,
  max_atmosphering_speed: String,
  crew: String,
  passengers: String,
  cargo_capacity: String,
  consumables: String,
  hyperdrive_rating: String,
  MGLT: String,
  starship_class: String,
  pilots: [String],
  films: [String],
  created: Date,
  edited: Date,
  url: String,
});

export const People = mongoose.model<IPeople>('People', peopleSchema);
export const Planets = mongoose.model<IPlanets>('Planets', planetsSchema);
export const Films = mongoose.model<IFilms>("Films", filmSchema);
export const Species = mongoose.model<ISpecies>('Species', speciesSchema);
export const Vehicles = mongoose.model<IVehicles>('Vehicles', vehiclesSchema);
export const Starships = mongoose.model<IStarships>('Starships', starshipsSchema);
