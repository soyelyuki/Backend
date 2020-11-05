'use strict'

//cargar Modulos de node para crear el servidor 
var express = require('express');
var bodyParser = require('body-parser');


//Ejecutar express (http)
var app = express();


//cargar ficheros y rutas
var article_routes = require('./routes/article');
//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cors

//Añadir prefijos a rutas // cargar rutas
app.use('/api', article_routes);

// RUta o metodo de prueba para el API Rest

//Exportar modulo (Fichero actual)
module.exports = app;
