var express = require("express");
var app = express();
var server = app.listen(3000, function () {

    app.use(express.static('.'));
    console.log("Ecoute sur port 3000");
});