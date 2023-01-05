const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const rootDir = require('./util/path')

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.static(path.join(rootDir, 'public')))
app.use(bodyParser.urlencoded({
  extended: false,
}))
app.use(shopRoutes)
app.use('/admin', adminData.routes)

app.use((req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
  })
})

app.listen(PORT, () => {
  console.log(`Servser listen http://localhost:${PORT}`)
})