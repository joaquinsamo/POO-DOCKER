import { Request, Response } from "express";
import { Aeroplano } from "../models/Aeroplano";

let aeroplanos: Aeroplano[] = [];

// GET ALL
export const getAeroplanos = (req:Request,res:Response)=>{
    res.json(aeroplanos);
};

// GET BY ID
export const getAeroplano = (req:Request,res:Response)=>{
    const id = Number(req.params.id);
    const aero = aeroplanos.find(a=>a.id === id);
    res.json(aero);
};

// POST
export const createAeroplano = (req:Request,res:Response)=>{
    const nuevo = req.body;
    aeroplanos.push(nuevo);
    res.json(nuevo);
};

// PUT
export const updateAeroplano = (req:Request,res:Response)=>{
    const id = Number(req.params.id);
    const index = aeroplanos.findIndex(a=>a.id === id);

    if(index !== -1){
        aeroplanos[index] = req.body;
        res.json(aeroplanos[index]);
    } else {
        res.status(404).send("No encontrado");
    }
};

// DELETE
export const deleteAeroplano = (req:Request,res:Response)=>{
    const id = Number(req.params.id);
    aeroplanos = aeroplanos.filter(a=>a.id !== id);
    res.send("Eliminado");
};