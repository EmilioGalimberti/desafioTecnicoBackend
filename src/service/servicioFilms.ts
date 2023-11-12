import {Request, Response } from "express";
import { Films, IFilms } from "../models/models";


const getFilms = async (req: Request, res: Response) => {
    try {
      const filmsFound: IFilms[] = await Films.find();
      if (filmsFound.length > 0){
          res.json(filmsFound)
          res.status(200)
      } else{
          res.status(404).send({mensaje: "films not found"})
      }
    } catch (error: any) {
      console.error('Error al obtener Films:', error);
      res.status(500).send('Error interno del servidor');
    }
}

const getFilmByidEpisode = async (req: Request, res: Response)=>{
    try{
        const {episode_id} = req.params
        const filmFound: IFilms | null = await Films.findOne({episode_id})
        if(filmFound){
            res.json(filmFound)
            res.status(200)
        }else{
            res.status(404).send({mensaje: "film not found"})
        }
    }
    catch(error: any){
        res.status(500).send({mensaje: "Error interno!"})
    }
}


export default{
    getFilms,
    getFilmByidEpisode
}