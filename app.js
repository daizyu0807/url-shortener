const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const routes = require('./routes') // 引用路由器

const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(routes)

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

// 設定 handlebars
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs'})) // 建立 hbs 模版並引入參數
app.set('view engine', 'hbs') // 啟用樣板引擎 hbs

app.listen(PORT, () => {
  console.log(`url-shortener is running on http://localhost:${PORT}`)
})