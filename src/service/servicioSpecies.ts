/**
 * Servicios relacionados con la entidad Species.
 * obtener listado de todas las especies o filtradas por nombre y/o designation
 * http://localhost:3000/species?name=Value1&designation=Value2
*/

import {Request, Response } from "express";
import { Species, ISpecies } from "../models/models";



const getSpecies = async (req: Request, res: Response) => {
    try {
      const { name, designation } = req.query;
      const filter: { [key: string]: any } = {};

      if (name) filter.name = name;
      if (designation) filter.designation = designation;
      const speciesFound: ISpecies[] | null = await Species.find(filter);
      
      if (speciesFound && speciesFound.length > 0) {
        res.status(200).json(speciesFound);
      } else {
        res.status(404).send({ mensaje: "Specie inexistente! (404) no se encontro" });
      }
    } catch (error: any) {
      console.error('Error al obtener Species:', error);
      res.status(500).send('Error interno del servidor');
    }
  };
  


export default{
    getSpecies
}