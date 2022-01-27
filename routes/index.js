const express = require('express')
const home = require('./modules/home')
const router = express.Router() // 引入路由模組

router.use('/', home)

module.exports = router // 匯出路由模組