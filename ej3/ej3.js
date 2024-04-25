const express = require("express");
const app = express();
const PORT = 3000; 

const productos ={
    description: 'Productos',
    items: [
      { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
      { id: 2, nombre: 'FIFA 23 PS5' , precio: 1000},
      {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
      {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
      {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
      {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
    ]
  }
  

app.use(express.json())

app.get("/products", (req, res) => {
    res.send(productos);
  });

  app.post("/product", (req, res) => {
      const itemsObjectId= productos.items.length+1
      const newItem=req.body
      newItem.id=itemsObjectId;
      productos.items.push(newItem)
      res.send(productos);
  });

  app.put("/product/:id",(req,res)=>{
    console.log('holaaa : ',req.body)
    console.log('holaaa2 : ',req.params.id)
    const found = productos.items.some(product => product.id == req.params.id)
    //res.send("OK")
     if(found){
        productos.items.forEach(product =>{
             if(product.id == req.params.id){
                 // member.name =req.body.name || member.name
                 product.nombre =req.body.nombre ?req.body.nombre: product.nombre
                 product.precio =req.body.precio || product.precio
             }
         })
         res.send(productos)
     }else{
         res.status(404).send(`Product with id ${req.params.id} not found`)
     }
})

app.put("/product/:id",(req,res)=>{
    const found = productos.items.some(product => product.id == req.params.id)
    //res.send("OK")
     if(found){
        productos.items.forEach(product =>{
             if(product.id == req.params.id){
                 // member.name =req.body.name || member.name
                 product.nombre =req.body.nombre ?req.body.nombre: product.nombre
                 product.precio =req.body.precio || product.precio
             }
         })
         res.send(productos)
     }else{
         res.status(404).send(`Product with id ${req.params.id} not found`)
     }
})

app.delete("/product/:id",(req,res)=>{
    const found = productos.items.some(product => product.id == req.params.id)
    if(found){
        productos.items = productos.items.filter(product => product.id != req.params.id)
        res.send(productos)
    }else{
        res.status(404).send(`Product with id ${req.params.id} not found`)
    }
})

app.get("/products/precio/:precio", (req, res) => {
    const found = productos.items.some(product => product.precio == req.params.precio)
    if(found){
        const productosPrecio = productos.items.filter(product => product.precio == req.params.precio)
        res.send(productosPrecio)
    }else{
        res.status(404).send(`Product with price ${req.params.precio} not found`)
    }
  });

  //llamar con get(localhost:3000/products/filtroprecio?preciomax=250&preciomin=50)
  app.get("/products/filtroprecio", (req, res) => {
    const preciomax = req.query.preciomax
    const preciomin = req.query.preciomin
    const found = productos.items.some(product => product.precio <= preciomax && product.precio >= preciomin)
    
     if(found){
         const productosPrecio = productos.items.filter(product => product.precio <= preciomax && product.precio >= preciomin)
         res.send(productosPrecio)
     }else{
         res.status(404).send(`Product with price ${preciomin} - ${preciomax} not found`)
     }
  });
  
  app.get("/products/id/:id", (req, res) => {
    const found = productos.items.some(product => product.id == req.params.id)
    if(found){
        const productosId = productos.items.filter(product => product.id == req.params.id)
        res.send(productosId[0])
    }else{
        res.status(404).send(`Product with id ${req.params.id} not found`)
    }
  });

  app.get("/products/nombre/:nombre", (req, res) => {
    const found = productos.items.some(product => product.nombre == req.params.nombre)
    if(found){
        const productosNombre = productos.items.filter(product => product.nombre == req.params.nombre)
        res.send(productosNombre)
    }else{
        res.status(404).send(`Product with id ${req.params.id} not found`)
    }
  });


app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));