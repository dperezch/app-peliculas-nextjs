const { peliculas } = require("./datos.json");

export default function handler(req, res) {
  const pelicula = peliculas.filter(
    peli => peli.enlaceUrl === req.query.enlaceUrl
  )

  if (req.method === "GET") {
    res.status(200).json(pelicula);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Método ${req.method} no permitido` });
  }
}
