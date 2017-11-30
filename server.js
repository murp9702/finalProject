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

var lastFrostSchema = mongoose.Schema({
    stationID: String,
    lastFrost: String
})

// mongoose models
var ZipCode = mongoose.model('zipcode', zipcodeSchema, 'zipcode')
var FirstFrost = mongoose.model('firstFrost', firstFrostSchema, 'firstFrost')
var LastFrost = mongoose.model('lastFrost', lastFrostSchema, 'lastFrost')

// route for homepage
router.get('/', function (req, res) {
    res.sendFile("./html/index.html", {
        root: "./public"
    })
})


router.post('/postData', function (req, res) {
    console.log("req.body:", req.body.zipCode)

    var firstAndLastObject = {
        zipcode: '',
        city: '',
        stationID: '',
        firstFrostDate: '',
        lastFrostDate: ''
    }
    // get station id based on user zipcode input
    ZipCode.findOne({
            zipcode: Number(req.body.zipCode)
        },
        function (err, zipCodeObject) {
            console.log('zipcode:', zipCodeObject.zipcode)
            console.log('city:', zipCodeObject.city)
            console.log('stationID:', zipCodeObject.stationID)
            firstAndLastObject.zipcode = zipCodeObject.zipcode
            firstAndLastObject.city = zipCodeObject.city
            firstAndLastObject.stationID = zipCodeObject.stationID

            FirstFrost.findOne({
                    stationID: zipCodeObject.stationID
                },
                function (err, firstFrostObject) {
                    console.log('firstFrostObject:', firstFrostObject)
                    firstAndLastObject.firstFrostDate = firstFrostObject.firstFrost
                })
            LastFrost.findOne({
                    stationID: zipCodeObject.stationID
                },
                function (err, lastFrostObject) {
                    console.log('lastFrostObject:', lastFrostObject)
                    firstAndLastObject.lastFrostDate = lastFrostObject.lastFrost
                    console.log('complete', firstAndLastObject)

                    res.send(firstAndLastObject)
                })



        })

})

module.exports = router