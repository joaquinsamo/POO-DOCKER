import { Router } from "express";
import {
    getAeroplanos,
    getAeroplano,
    createAeroplano,
    updateAeroplano,
    deleteAeroplano
} from "../controllers/aeroplano.controller";

const router = Router();

router.get("/", getAeroplanos);
router.get("/:id", getAeroplano);
router.post("/", createAeroplano);
router.put("/:id", updateAeroplano);
router.delete("/:id", deleteAeroplano);

export default router;