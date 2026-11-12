import express from "express"
import router from './src/router/Clientes.js'
import database from './src/config/database.js';
import e from "express";

const app = express();
app.use(express.json())

app.use("/api", router)

database.database
.sync({ force: false})
.then ((_) => {
   app.listen( 3000, () => {
    console.log("Servidor ouvindo na porta 3000")
    })
  }) 
.catch((e) => {
console.log(e)
  })