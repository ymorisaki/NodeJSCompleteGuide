const path = require('path');
const express = require('express')
const adminData = require('./admin');

const router = express.Router()

router.get('/', (req  , res, next) => {
  const {products} = adminData

  console.log(products)
  res.render('shop', {products, pageTitle: 'Shop'})
})

module.exports = router
