"use strict";

const express = require("express");
//const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

//aqui é convertido o código para json, substituido o bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//carregar rotas
const IndexRoute = require("./routes/Index_routes");
const productRoute = require("./routes/product_routes");

app.use("/", IndexRoute);
app.use("/products", productRoute);

module.exports = app;
