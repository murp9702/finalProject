var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

// route for homepage
router.get('/', function (req, res) {
    res.sendFile("./html/index.html", {
        root: "./public"
    })
})


router.get('/getData', function (req,res){
    
    var firstFrostSchema = mongoose.Schema({
        name: String
    })


    // what is the first argument doing here? the third argument gives access to the existing database.
    var FirstFrost = mongoose.model('firstFrost', firstFrostSchema, 'firstFrost')


    FirstFrost.findOne({stationID: 'USC00018438'}, function (err, firstFrostObject) {
        // can access firstFrostObject, object is returned
        console.log(firstFrostObject)
        // firstFrostObject.stationID & .firstFrost return undefined
        console.log(firstFrostObject.stationID)
    })

    
    
    
    res.send("heading your way")
})

module.exports = router