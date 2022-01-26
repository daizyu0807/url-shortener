const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

const urlMd = require('./models/urlMd') // 載入 shortener model
const shortenUrl = require('./utils/shortenUrl')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

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

// 首頁路由
app.get('/', (req, res) => {
  res.render('index')
})


// 點擊縮址路由
app.post('/', (req, res) => {
  if (!req.body.url) return res.redirect("/")
  const shortUrl = shortenUrl(5) // 產生隨機5碼 URL code

  urlMd.findOne({ oriUrl: req.body.url }) // 查詢資料庫是否曾收錄輸入網址
    .then(data => { // 輸入網址不存在則新增 輸入網址、縮址 
      return data ? data : urlMd.create({ oriUrl: req.body.url, shortUrl })
    })
    
    .then(data =>
      res.render('index', {
        oriUrl: req.body.url,
        shortUrl: data.shortUrl
      })
    ) 
    .catch(error => console.error(error)) //錯誤處理
})

app.post('/:url', (req, res) => {``
  const oriUrl = req.params.oriUrl
  return Shortener.find(oriUrl)
    .lean()
    .then
})
  

app.listen(PORT, () => {
  console.log(`url-shortener is running on http://localhost:${PORT}`)
})