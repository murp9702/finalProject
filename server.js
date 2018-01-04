var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')




// route for homepage
router.get('/', function (req, res) {
    res.sendFile("./index.html", {
        root: "./dist"
    })
})
