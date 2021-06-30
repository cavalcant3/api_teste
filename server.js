"use strict";
// importando os modulos
const http = require("http");
const debug = require("debug")("nodestr:server");
const express = require("express");

// criando portas
const app = express();
const port = 3000;
app.set("port", port);

// criando o servidor e rotas
const server = http.createServer(app);
const router = express.Router();

// configurando a rota
