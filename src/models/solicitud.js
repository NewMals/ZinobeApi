let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let solicitudSchema = new Schema(
  {
    Numero: {type: Number},
    Usuario: {type: Number},
    ValorSolicitado: {type: Number},
    EstadoCredito: {type: Boolean},
    PagoCredito: {type: Boolean}
  },
  { versionKey: false }
);

let Solicitud = mongoose.model("usuarios", solicitudSchema);

module.exports = Solicitud;