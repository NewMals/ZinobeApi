const { Router } = require("express");
const router = Router();
//dataacces
const repoUsuario = require("../repositories/RepoUsuario");

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "content-type");
  next();
});


router.get("/usuarios/obtenerUsuarios/", repoUsuario.Get);

module.exports = router;