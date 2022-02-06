const fs = require("fs");

class Contenedor {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    getAll = async () => {
      try {
        const productos = await fs.promises.readFile(this.nombre, "utf-8");
        const arrayProductos = JSON.parse(productos);
        return arrayProductos;
      } catch (err) {
        console.log(`Hubo un error: ${err.message}`);
      }
    };
  
    random = async () => {
      try {
        const productos = await fs.promises.readFile(this.nombre, "utf-8");
        const arrayProductos = JSON.parse(productos);
        const randIndex = Math.floor(Math.random() * arrayProductos.length);
        return arrayProductos[randIndex];
      } catch (err) {
        console.log(`Hubo un error: ${err.message}`);
      }
    };
   
  }

  module.exports = Contenedor;

