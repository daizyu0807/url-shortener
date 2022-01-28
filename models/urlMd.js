const mongoose = require('mongoose');
const Schema= mongoose.Schema
const urlMdSchema = new Schema({ // 原始、縮網址皆需獨立並不可為 null
  oriUrl: { type: String, required: true, unique: true },
  shortUrl:  { type: String, required: true, unique: true },
})

module.exports = mongoose.model('urlMd', urlMdSchema)
