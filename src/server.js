const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 7000;

//configuraciones
app.set("port", PORT);
let bodyParser = require("body-parser");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//controllers
app.use(require("./controllers/ControllerUsuario.js"));


//Conecion BD
require("./db/conexion");

//iniciando servidor
app.listen(app.get("port"), (error) => {
  console.log("Servidor arriba :", app.get("port"));
});