var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

// mongoose schemas
var firstFrostSchema = mongoose.Schema({
    stationID: String,
    firstFrost: String
})
var zipcodeSchema = mongoose.Schema({
    stationID: String,
    zipcode: Number,
    city: String
})

// mongoose models
var ZipCode = mongoose.model('zipcode', zipcodeSchema, 'zipcode')
var FirstFrost = mongoose.model('firstFrost', firstFrostSchema, 'firstFrost')

// route for homepage
router.get('/', function (req, res) {
    res.sendFile("./html/index.html", {
        root: "./public"
    })
})


router.post('/postData', function (req,res){
    console.log("req.body:", req.body.zipCode)

    ZipCode.findOne({zipcode: Number(req.body.zipCode)}, function (err, zipCodeObject){
        console.log('zipcode:', zipCodeObject.zipcode)
        console.log('city:', zipCodeObject.city)
        console.log('stationID:', zipCodeObject.stationID)
        
    })

    FirstFrost.findOne({stationID: 'USC00018438'}, function (err, firstFrostObject) {
        console.log('stationID', firstFrostObject.stationID)
    })    
    res.send("heading your way")
})

module.exports = router
