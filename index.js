import express from "express";
import cancionesRouter from "./src/routes/canciones.routes.js";

const PORT = 3000;

const app = express();
app.use (express.json())


app.use("/", cancionesRouter);


app.listen(PORT, console.log(`Servidor activo http://localhost:${PORT}`));
