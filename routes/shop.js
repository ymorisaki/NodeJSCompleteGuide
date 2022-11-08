const path = require('path');
const express = require('express')
const adminDate = require('./admin');

const router = express.Router()

router.get('/', (req  , res, next) => {
  console.log(adminDate.products)
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
})

module.exports = router
