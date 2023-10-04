'use strict'

const express = require('express');
var multiparty = require('connect-multiparty');

const articleController = require('../controllers/article');

var router = express.Router()
var md_upload = multiparty({uploadDir: './upload/articles'});

//Rutas de prueba
router.post('/test-de-controlador', articleController.test);
router.get('/datos-curso', articleController.datosCurso);

// Rutas utiles
router.post('/save', articleController.save);
router.get('/articles/:last?', articleController.getArticles);
router.get('/article/:id', articleController.getArticle);
router.put('/article/:id', articleController.Update);
router.delete('/article/:id', articleController.Delete);
router.post('/upload-img/:id', md_upload, articleController.Upload);
router.get('/getImg/:img', articleController.getImage);
router.get('/search/:search', articleController.search);
module.exports = router;