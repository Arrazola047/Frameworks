'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.Promise = global.Promise;
// Para poder usar useFindAndModify tuve que desinstalar la version de mongoose que tenia e instalar la version 5.12.1, ya que la version actual de mongoose
// ya no es compatible con esta linea de comandos y provocaba que nodemon se crasheara
// Esta solucion es solamente temporal y tengo que investigar en un futuro como solucionarlo sin hacer un downgrade de mongoose 
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

/* Se soluciono un error al momento de conectar el backend cambiando la linea 7 de esto: 

    mongoose.connect('mongodb://localhost:27017/api_rest_blog', {useNewUrlParser: true}).then(() => {
        console.log("La conexion a la BD fue exitosa");
    });

    a esto: 

    mongoose.connect('mongodb://127.0.0.1:27017/api_rest_blog', {useNewUrlParser: true}).then(() => {
        console.log("La conexion a la BD fue exitosa");
    });
 */

mongoose.connect('mongodb://127.0.0.1:27017/api_rest_blog', {useNewUrlParser: true}).then(() => {
    console.log("La conexion a la BD fue exitosa");
    //Crear servidor y escuchar peticiones HTTP
    app.listen(port, () => {
        console.log('Servidor coriendo en http://localhost:' + port)});
});