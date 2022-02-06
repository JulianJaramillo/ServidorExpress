const express = require("express");
const contenedorProductos = require('./contenedor');
const productos = new contenedorProductos("./productos.txt")
const PORT = process.env.PORT || 3000;
const app = express();

app.get("/productos", (req, res) => {
    productos.getAll().then((value) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(value, null, 3));
  });
});

app.get("/productoRandom", (req, res) => {
    productos.random().then((value) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(value, null, 3));
  });
});

app.listen(PORT, () => {
  console.log(`Servidor activo y escuchando en el puerto : ${PORT}`);
});
