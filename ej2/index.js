const express = require("express");
const app = express();
const PORT = 3000; 

app.use(express.json())

app.get("/", (req, res) => {
    res.send("<h1>Wellcome</h1>");
  });

  
app.get("/Productos", (req, res) => {
    res.send("listado de productos");
  });

  app.post("/Productos", (req, res) => {
    res.send("Crear un producto");
  });
  
  app.put("/Productos", (req, res) => {
    res.send("Actualizar un producto");
  });

  app.delete("/Productos", (req, res) => {
    res.send("Borrar un producto");
  });

  app.get("/Usuarios", (req, res) => {
    res.send("Listado de usuarios");
  });

  app.post("/Usuarios", (req, res) => {
    res.send("Crear de usuarios");
  });

  app.put("/Usuarios", (req, res) => {
    res.send("Actualizar de usuarios");
  });

  app.delete("/Usuarios", (req, res) => {
    res.send("Borrar de usuario");
  });


  app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));