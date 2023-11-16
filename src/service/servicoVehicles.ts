/**
 * Servicios relacionados con la entidad Vehicles.
 * obtener listado de todas las vehicles o filtradas por nombre y/o modelo
 * http://localhost:3000/vehicles?name=Value1&model=Value2
*/
import {Request, Response } from "express";
import { Vehicles, IVehicles } from "../models/models";

const getVehicles = async (req: Request, res: Response) => {
    try {
      const { name, model } = req.query;
      const filter: { [key: string]: any } = {};

      if (name) filter.name = name;
      if (model) filter.model = model;
      const speciesFound: IVehicles[] | null = await Vehicles.find(filter);
      
      if (speciesFound && speciesFound.length > 0) {
        res.status(200).json(speciesFound);
      } else {
        res.status(404).send({ mensaje: "vehicles not found" });
      }
    } catch (error: any) {
      console.error('Error al obtener vehicles:', error);
      res.status(500).send('Error interno del servidor');
    }
  };
  


export default{
    getVehicles
}