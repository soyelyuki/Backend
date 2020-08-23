'use strict'

//cargar Modulos de node para crear el servidor 
var express = require('express');
var bodyParser = require('body-parser');


//Ejecutar express (http)
var app= express();


//cargar ficheros y rutas

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cors

//Añadir prefijos a rutas


// RUta o metodo de prueba para el API Rest
app.get('/probando', (req,res)   =>  {
    console.log("hola mundo");
});
//Exportar modulo (Fichero actual)
module.exports = app;
