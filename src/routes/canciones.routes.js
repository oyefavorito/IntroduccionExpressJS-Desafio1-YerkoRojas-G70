import { Router } from "express";
import {
  getHtml,
  getCanciones,
  postCanciones,
  deleteCanciones,
  editCanciones
} from "../controllers/cancionescontroller.js";

const router = Router();

router.get("/", getHtml);
router.get("/canciones", getCanciones);
router.post ("/canciones", postCanciones);
router.delete("/canciones/:id", deleteCanciones)
router.put("/canciones/:id", editCanciones)

export default router;
