import {Request, Response } from "express";
import { Starships, IStarships } from "../models/models";

//http://localhost:3000/starships?name=Value1&model=Value2
const getStarships = async (req: Request, res: Response) => {
    try {
      const { name, model } = req.query;
      const filter: { [key: string]: any } = {};

      if (name) filter.name = name;
      if (model) filter.model = model;
      const speciesFound: IStarships[] | null = await Starships.find(filter);
      
      if (speciesFound && speciesFound.length > 0) {
        res.status(200).json(speciesFound);
      } else {
        res.status(404).send({ mensaje: "Starship not found" });
      }
    } catch (error: any) {
      console.error('Error al obtener Starship:', error);
      res.status(500).send('Error interno del servidor');
    }
  };

export default{
    getStarships
}