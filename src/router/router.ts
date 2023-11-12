import { Router } from "express";
import {People,Films,Planets,Species,Vehicles,Starships,} from "../models/models";

export const router = Router()


router.get('/people', async (req, res) => {
  try {
    const peopleFound = await People.find();
    if (peopleFound){
        res.json(peopleFound)
        res.status(200)
    } else{
        res.status(404).send({mensaje: "Alumno no encontrado"})
    }
  } catch (error) {
    console.error('Error al obtener personas:', error);
    res.status(500).send('Error interno del servidor');
  }
});


export default router;
