const mongoose = require('mongoose');
const Schema= mongoose.Schema
const shortenerSchema = new Schema({
  oriUrl: String,
  shortUrl: String
})

module.exports = mongoose.model('shortener', shortenerSchema)