const express = require('express')

const exphbs = require('express-handlebars')
const routes = require('./routes') // 引用路由器

const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

require('./config/mongoose') // 引用 mongoose

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(routes)

// 設定 handlebars
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs'})) // 建立 hbs 模版並引入參數
app.set('view engine', 'hbs') // 啟用樣板引擎 hbs

app.listen(PORT, () => {
  console.log(`url-shortener is running on http://localhost:${PORT}`)
})