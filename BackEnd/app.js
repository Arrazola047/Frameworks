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
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Añadimos los prefijos a rutas / cargar rutas
app.use('/api', article_routes);

// Exportamos el modulo (fichero actual)
module.exports = app;