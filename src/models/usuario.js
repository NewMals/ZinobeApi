let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let usuarioSchema = new Schema(
  {
    Id: {type: Number},
    Cedula: { type: String },
    Nombre: { type: String },
    Email: { type: String },
  },
  { versionKey: false }
);

let Usuario = mongoose.model("usuarios", usuarioSchema);

module.exports = Usuario;