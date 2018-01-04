// bring in dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = require('./server');
var path = require('path');
// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));




// serve static files
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
    res.sendFile("/index.html", {
        root: "./dist"
    })
})

// listen on port 8080
app.listen(5000, function () {
    console.log('Express app listening on port 5000');
});
