const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')

const adminDate = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const rootDir = require('./util/path')

const app = express()
const PORT = 3000

app.use(express.static(path.join(rootDir, 'public')))
app.use(bodyParser.urlencoded({
  extended: false,
}))
app.use(shopRoutes)
app.use('/admin', adminDate.routes)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

app.listen(PORT, () => {
  console.log(`Servser listen http://localhost:${PORT}`)
})