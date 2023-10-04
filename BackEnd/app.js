'use strict'

// Cargamos los modulos de Node para crear el servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutamos express (HTTP)
const app = require('express')();

// Cargar ficheros rutas 
var article_routes = require('./routes/article');

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS 


// Añadimos los prefijos a rutas / cargar rutas
app.use('/api', article_routes);

// Exportamos el modulo (fichero actual)
module.exports = app;