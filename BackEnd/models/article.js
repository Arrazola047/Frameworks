/*Este es el modelo que vamos a crear para trabajar con la app en concreto */
'use strict' 
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = Schema({
    title: String, 
    content: String,
    date: {type: Date, default: Date.now},
    image: String
});

module.exports = mongoose.model('Article', articleSchema);
//articles --> Guarda documentos de este tipo y con esta estructura dentro de la colección
