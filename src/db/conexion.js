
let mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://zinobe:<password>@zinobeapi.tas3t.mongodb.net/<dbname>?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

mongoose.connection.on("connected", () => {
  console.log("Conectado a bd");
});

module.exports = mongoose;