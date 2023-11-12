import {Request, Response } from "express";
import { Species, ISpecies } from "../models/models";


//http://localhost:3000/species?name=Value1&designation=Value2
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
        res.status(404).send({ mensaje: "Species no encontradas" });
      }
    } catch (error: any) {
      console.error('Error al obtener Species:', error);
      res.status(500).send('Error interno del servidor');
    }
  };
  


export default{
    getSpecies
}