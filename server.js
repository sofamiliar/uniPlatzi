console.log("Inicializando servidor node.js");

var express = require("express");
var parcero = require("body-parser");
var web = express();
var servidor;

web.use(parcero.urlencoded({extended: true}));
servidor = web.listen(8080, function(){
	console.log("¡Servidor listo!");
});

web.get("/", function(req, res){
	res.sendfile("index.html");
});
