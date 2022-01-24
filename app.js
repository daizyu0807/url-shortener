const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000

// 設定資料庫路徑
mongoose.connect('mongodb://localhost/url-shortener')

// 取得資料庫連線狀態
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected')
})
app.get('/', (req, res) => {
  res.send('index test')
})

app.listen(PORT, () => {
  console.log(`url-shortener is running on http://localhost:${PORT}`)
})