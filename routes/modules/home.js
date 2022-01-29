const express = require('express')
const router = express.Router()

const urlMd = require('../../models/urlMd') // 載入 shortener model
const shortenUrl = require('../../utils/shortenUrl')
const urlArray = [] // 已使用 url code 

// 首頁路由
router.get('/', (req, res) => {
  res.render('index')
})

// 點擊縮址路由
router.post('/', (req, res) => {
  if (!req.body.url) {
    return res.redirect("/")
  }

  urlMd.findOne({ oriUrl: req.body.url }) // 查詢資料庫是否曾收錄輸入網址
    .then(data => { // 輸入網址不存在則新增 輸入網址、縮址 
      if (data) {
        return data
      } else {
        const shortUrl = shortenUrl(5) // 產出 url code
        while (urlArray.includes(shortUrl)) { // 檢查 url code 是否重複
          shortUrl = shortenUrl(5)
        }
        urlArray.push(shortUrl) // 將為使用過的 url code 加入 已使用 rul code array
        return urlMd.create({ oriUrl: req.body.url, shortUrl }) // urlMd collection 添加
      }
    })
    
    .then(data =>
      res.render('index', {
        basicUrl: req.headers.origin,
        oriUrl: req.body.url,
        shortUrl: data.shortUrl
      }),
    )

    .catch(error => {
      console.error(error) 
      res.render('index', { errorMsg: "There is a problem with the function, please contact the administrator" }) // 功能錯誤提示使用者
    })
})

router.get('/:short_Url', (req, res) => {``
  const short_Url = req.params.short_Url 
  console.log(req.headers.host)
  return urlMd.findOne({ shortUrl: short_Url }) // params 與 資料庫分別儲存 short_Url、shortUrl，需分別處理
    .then(item => {
      if (!item) {
        return res.render('index', {
        errorMsg: "Can't found URL \"" + req.headers.host + "/" + short_Url + "\""// 錯誤訊息提供使用者
        })
      }
      res.redirect(item.oriUrl)
    })
    .catch(error => console.error(error))
})

module.exports = router // 匯出路由模組