express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('index test')
})

app.listen(PORT, () => {
  console.log(`url-shortener is running on http://localhost:${PORT}`)
})