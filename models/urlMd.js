const mongoose = require('mongoose');
const Schema= mongoose.Schema
const urlMdSchema = new Schema({
  oriUrl: String,
  shortUrl: String,
})

module.exports = mongoose.model('urlMd', urlMdSchema)
