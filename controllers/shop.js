const Product = require('../models/Product');

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {products, pageTitle: 'Shop', path: '/'})
  })
}

exports.getProducts = (req , res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {products, pageTitle: 'Products', path: '/products'})
  })
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Cart',
    path: '/shop/cart'
  })
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'Your Orders',
    path: '/shop/orders'
  })
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path: '/shop/checkout'
  })
}
