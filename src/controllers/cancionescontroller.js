// en este archivo irán todas las funciones
import fs from "fs";
import path from "path";

const getHtml = (req, res) => {
  const filePath = path.resolve("index.html");
  res.sendFile(filePath);
};

// PRIMERA PARTE: GET
const getCanciones = (req, res) => {
  try {
    const canciones = JSON.parse(fs.readFileSync("repertorio.json", "utf8"));
    res.status(200).json(canciones);
  } catch (error) {
    res.status(500).json({ message: "Hay un error" });
  }
};

// SEGUNDA PARTE: POST

const postCanciones = (req, res) => {
  try {
    const cancion = req.body;
    const canciones = JSON.parse(fs.readFileSync("repertorio.json", "utf8"));
    canciones.push(cancion);
    fs.writeFileSync("repertorio.json", JSON.stringify(canciones));
    res.status(201).send("Canción creada con éxito");
  } catch (error) {
    res.status(500).json({ message: "El recurso de post no está disponible" });
  }
};

// TERCERA PARTE: DELETE

const deleteCanciones = (req, res) => {
  try {
    const { id } = req.params;
    const canciones = JSON.parse(fs.readFileSync("repertorio.json"));
    const index = canciones.findIndex((p) => p.id == id);
    canciones.splice(index, 1);
    fs.writeFileSync("repertorio.json", JSON.stringify(canciones));
    res.status(201).send("Canción eliminada con éxito");
  } catch (error) {
    res
      .status(500)
      .json({ message: "El recurso de eliminar no se ejecutó correctamente" });
  }
};

// CUARTA PARTE: EDITAR

const editCanciones = (req, res) => {
  try {
    const { id } = req.params;
    const cancion =req.body;
    const canciones = JSON.parse(fs.readFileSync("repertorio.json"));
    const index = canciones.findIndex((p) => p.id == id);
    canciones[index] = cancion;
    fs.writeFileSync("repertorio.json", JSON.stringify(canciones));
    res.status(201).send("Canción editada con éxito");
  } catch (error) {
    res
      .status(500)
      .json({ message: "El recurso de editar no se ejecutó correctamente" });
  }
}


export { getHtml, getCanciones, postCanciones, deleteCanciones, editCanciones };
