'use strict'
var validator =require('validator');
var Article = require('../models/article');

var controller = {
    datosCurso: (req,res)   =>  {
        
        var hola = req.body.hola;
    
        return res.status(200).send({
            curso: 'Master en Framework JS',
            autor:'Nicolas Miranda',
            url:'www.nicomiranda.cl',
            hola
        });
    },

    test: (req,res) => {
        return res.status(200).send({
            message:'Soy la accion de test de mi controlador de articulos'
        });
    },

    save:(req,res) =>{
        //Recoger parametros por post
        var params = req.body;

        //validar datos (validator)
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        }catch(err){
            return res.status(200).send({
                message:'Faltan datos por enviar'
            });
        }
        if(validate_title && validate_content){
            return res.status(200).send({
                message:"validacion correcta"
            });
        }
        //Crear el objeto a guardar

        //Asignar valores

        //guardar el articulo.

        //devolver una respuesta
        return res.status(200).send({
            article:params
        });
    },

};  // end controller

module.exports = controller;