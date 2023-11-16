/**
 * Servicios relacionados con la entidad People.
 * obtener listado de todas las personas o filtradas por nombre
*/

import {Request, Response } from "express";
import { People, IPeople } from "../models/models";


const getPeople = async (req: Request, res: Response) => {
    try {
      const peopleFound: IPeople[] = await People.find();
      if (peopleFound.length > 0){
          res.json(peopleFound)
          res.status(200)
      } else{
          res.status(404).send({mensaje: "peolple not found"})
      }
    } catch (error: any) {
      console.error('Error al obtener peolple:', error);
      res.status(500).send('Error interno del servidor');
    }
  }

const getPeopleByName = async (req: Request, res: Response)=>{
    try{
        const {name} = req.params
        const personFound: IPeople | null = await People.findOne({name})
        if(personFound){
            res.json(personFound)
            res.status(200)
        }else{
            res.status(404).send({mensaje: "Person inexistente! (404) no se encontro"})
        }
    }
    catch(error: any){
        res.status(500).send({mensaje: "Error interno!"})
    }
}

  export default{
    getPeople,
    getPeopleByName
  }