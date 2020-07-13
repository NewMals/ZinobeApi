let Usuario = require("../models/usuario");


function Get(req, res) {
  Usuario.find().then((usuarios) => {
    return res.status(200).send(usuarios);
  });
}

function Set(req, res) {
  let request = req.body.Usuario;

  let newUsuario = new Usuario({ 
    Cedula: request.Cedula,
    Nombre: request.Nombre,
    Email: request.Email
  });

  newUsuario.save((error) =>{
    if (error) {
      return res
        .status(500)
        .send(
          `Error al registrar el usuario: ${JSON.stringify(error)}`
        );
    } else {
      return res.status(200).send(true);
    }
  });

  Usuario.find().then((usuarios) => {
    return res.status(200).send(usuarios);
  });
}
module.exports = {
  Get,
};