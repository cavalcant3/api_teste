"use strict";
// importando os modulos
const app = require("../src/app");
const http = require("http");
const debug = require("debug")("nodestr:server");
const express = require("express");

// criando portas

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// criando o servidor e rotas
const server = http.createServer(app);
const router = express.Router();

// configurando a rota
const route = router.get("/", (req, res, next) => {
  res.status(200).send({
    title: "Node Store API",
    version: "0.0.1",
  });
});
app.use("/", route);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
console.log("API rodando na porta " + port);

//função normalizando a porta
function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

//tratamento de erro simples
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "Pipe " + port : "Pipe " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + "is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

//function debug
function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
