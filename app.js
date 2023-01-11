const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const errorController = require('./controllers/error')

const rootDir = require('./util/path')

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.static(path.join(rootDir, 'public')))
app.use(bodyParser.urlencoded({
  extended: false,
}))
app.use(shopRoutes)
app.use('/admin', adminRoutes)

app.use(errorController.get404)

app.listen(PORT, () => {
  console.log(`Servser listen http://localhost:${PORT}`)
})