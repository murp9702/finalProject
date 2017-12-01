var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var Database = require('./database')



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
    Database.ZipCode.findOne({
            zipcode: Number(req.body.zipCode)
        },
        function (err, zipCodeObject) {
            console.log('zipcode:', zipCodeObject.zipcode)
            console.log('city:', zipCodeObject.city)
            console.log('stationID:', zipCodeObject.stationID)
            firstAndLastObject.zipcode = zipCodeObject.zipcode
            firstAndLastObject.city = zipCodeObject.city
            firstAndLastObject.stationID = zipCodeObject.stationID

            Database.FirstFrost.findOne({
                    stationID: zipCodeObject.stationID
                },
                function (err, firstFrostObject) {
                    console.log('firstFrostObject:', firstFrostObject)
                    firstAndLastObject.firstFrostDate = firstFrostObject.firstFrost
                })
            Database.LastFrost.findOne({
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