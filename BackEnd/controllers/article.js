'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');
var Article = require('../models/article');
const article = require('../models/article');
//const article = require('../models/article');


var controller = {
    datosCurso: ('/datos-curso', (req, res) => {
        var hola = req.body.hola;
        console.log(hola)
        return res.status(200).send({
            curso: 'Master en Frameworks JS',
            autor: 'Ramon Arrazola',
            url: 'NoTengo.com',
            hola
        });
    }),

    test: (req, res) =>{
        return res.status(200).send({
            message: 'Soy la acción Test de mi controlador de articulos'
        });
    },

    save:(req, res) =>{        
            //Recoger parametros por post
            var params = req.body;
            console.log(params);

            //validar datos (validator) 
            try{
                var validateTitle = !validator.isEmpty(params.title);
                var validateContent = !validator.isEmpty(params.content);
                
            }
            catch(err){
                
                return res.status(200).send({
                    status: 'error',
                    message: 'Faltan datos por enviar'
                })
            }

            if (validateTitle && validateContent){
            // Crear el objeto a guardar
                var article = new Article();
            // Asignamos valores al objeto
                article.title = params.title;
                article.content = params.content;
                article.image = null;
            //Guardamos el articulo
                article.save((err, articleStored) =>{
                    if(err || !articleStored){
                        return res.status(404).send({
                            status: 'error',
                            message: 'El articulo no se guardó'
                        })
                    }
                    //Devolvemos una respuesta
                    return res.status(200).send({
                        status: 'success',
                        article: articleStored
                    });
                })
            
        }
        else{
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos!'
            });
        }
    },

    getArticles: (req, res) =>{
        var query = Article.find({});
        var last = req.params.last;

        if(last || last != undefined){
            query.limit(5);
        }

        //Find
        query.sort('-_id').exec((err, articles) =>{
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos'
                });
            }

            if(!articles){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se encontraron articulos'
                });
            }
            return res.status(200).send({
                status: 'success',
                articles
            });
        });
    },

        //Buscar el articulo
    getArticle: (req, res) => {
        //Recoger el id de la url
        var articleId = req.params.id;

        //Comporbar que existe
        if(!Article || articleId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo'
            });
        }

        Article.findById(articleId, (err, article) =>{
            if(err || !article){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el articulo'
                });
            }

            //Devolverlo en JSON
            return res.status(200).send({
                status: 'success',
                article
            });
        })
    },

    Update: (req, res) =>{
        // Recoger el id del articulo por la url
        var articleId = req.params.id;


        // Recoger los datos que llegan por put
        var params = req.body;

        // Validar los datos
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        }
        catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }

        if(validate_title && validate_content){
            // Find and Update
            Article.findOneAndUpdate({_id: articleId}, params, {new:true}, (err, articleUpdated) => {
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar'
                    });
                }
                if(!articleUpdated){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el articulo'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
            });
        }
        else{
            //Devolver una respuesta
            return res.status(200).send({
                status: 'error',
                message: 'La validación no es correcta'
            });
        }  
    },

    Delete: (req, res) => {
        //Recoger el Id de la url
        var articleId = req.params.id;
        // Find and Delete
        Article.findOneAndDelete({_id: articleId}, (err, articleRemoved) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar'
                });
            }
            if(!articleRemoved){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se encontro el articulo a borrar'
                });
            }

            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            });
        });
    },

    Upload: (req, res) => {
        //Configurar el modulo connect MultiParty router/article.js (DONE)

        // Recogemos el fichero de la peticion
        var fileName = 'Imagen no subida..';
        
        if(!req.files){
            return res.status(404).send ({
                status: 'error',
                message: fileName
            });
        }
        // Conseguir el nombre y la extension del archivo
        var file_path = req.files.file0.path;
        var file_split = file_path.split('\\');

            // ADVERTENCIA * EN LINUX O MAC debemos sustituir la linea de arriba por esta:
            //var file_split = file_path.split('/');

        // Nombre del archivo
        var fileName = file_split[2];

        //Extencion del fichero
        var extensión_split = fileName.split('\.');
        var file_ext = extensión_split[1];

        // Comporbar la extensión, solo se aceptan imagenes, si es valida borrar el fichero
        if(file_ext != 'png' && file_ext!= 'jpg' && file_ext != 'jpeg' && file_ext != 'gif'){
            // Borrar el archivo subido
            fs.unlink(file_path, (err) => {
                return res.status(200).send ({
                    status: 'error',
                    message: 'Extensión no valida'
                });
            });
        }
        else{
            // Si todo es valido, sacamos el id de la url
            var articleId = req.params.id;
            // Buscar el articulo, asignarle un nombre y actualizarlo
            Article.findOneAndUpdate({_id: articleId}, {image: fileName}, {new:true}, (err, articleUpdated) =>{
                if(err || !articleUpdated){
                    return res.status(200).send ({
                        status: 'error',
                        message: 'Error al guardar la imagen de articulo'
                    });
                }

                return res.status(200).send ({
                    status: 'success',
                    articleUpdated
                });
            });
            
        }
    }, //End upload File

    getImage: (req, res) =>{
        var file = req.params.img;
        var path_file = './upload/articles/'+file;

        fs.exists(path_file, (exists) =>{
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }
            else{
                return res.status(404).send ({
                    status: 'error',
                    message: 'No se encontro la imagen ' + file
                });
            }
        }); 
    },

    search: (req, res) =>{
        // Sacar el string a buscar
        var searchString = req.params.search;

        // Find or
        Article.find({ "$or": [
            {"title": {"$regex": searchString, "$options": "i"}},
            {"content": {"$regex": searchString, "$options": "i"}}
        ]})

        .sort([['date', 'descending']])
        
        .exec((err, articles) =>{
            if(err){
                return res.status(500).send ({
                    status: 'error',
                    message: 'Error en la petición'
                });
            }
            if(!articles || articles.length <=0){
                return res.status(404).send ({
                    status: 'error',
                    message: 'No se encontró el articulo'
                });
            }
            return res.status(200).send ({
                status: 'success',
                articles
            });
        })  
    }
};

//End controller

module.exports = controller;