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
                status: 'error',
                message:'Faltan datos por enviar'
            });
        }
        if(validate_title && validate_content){
            
            //Crear el objeto a guardar
            var article= new Article();

            //Asignar valores

            article.title = params.title;
            article.content = params.content;
            article.image = null;

            //guardar el articulo.

            article.save((err, articleStored) =>{
                if(err || !articleStored){
                    return res.status(404).send({
                        status:'error',
                        message :'El articulo no se ha guardado'
                    });
                }
                //devolver una respuesta

                return res.status(200).send({
                    status:'success',
                    article: articleStored
                });
            }
        }else{
                return res.status(200).send({
                    status: 'error',
                    message:'los datos no son validos !!!'
                    
                });
        }
        

        getArticles: (req,res) => {
            //find 
            Article.find({}).exec((err, articles)=>{

                if(err){
                return res.status(500).send({
                    status: 'error',
                    message:'error al devolver los articulos'
                });
            }

                if(!articles){
                return res.status(404).send({
                    status: 'error',
                    message:'No hay articulos para Mostrar!'
                });
        
            }
            return res.status(200).send({
                status: 'error',
                message:'No hay articulos para Mostrar!'
            });
            });
};     
 // end controller

module.exports = controller;