/**
 * Servicios relacionados con la entidad Planets.
 * obtener listado de todas las planetas o filtradas por clima
*/

import {Request, Response } from "express";
import { Planets, IPlanets } from "../models/models";


const getPlanets = async (req: Request, res: Response) => {
    try {
      const planetsFound: IPlanets[] = await Planets.find();
      if (planetsFound.length > 0){
          res.json(planetsFound)
          res.status(200)
      } else{
          res.status(404).send({mensaje: "planets not found"})
      }
    } catch (error: any) {
      console.error('Error al obtener Planets:', error);
      res.status(500).send('Error interno del servidor');
    }
}

const getPlanetByClimate = async (req: Request, res: Response)=>{
    try{
        const {climate} = req.params
        const planetsFound: IPlanets[] | null = await Planets.find({climate})
        if(planetsFound.length > 0){
            res.json(planetsFound)
            res.status(200)
        }else{
            res.status(404).send({mensaje: "planets inexistente! (404) no se encontro"})
        }
    }
    catch(error: any){
        res.status(500).send({mensaje: "Error interno!"})
    }
}

export default{
    getPlanets,
    getPlanetByClimate

}