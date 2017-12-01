var mongoose = require('mongoose')

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


module.exports = {
    ZipCode: ZipCode,
    FirstFrost: FirstFrost,
    LastFrost: LastFrost
}