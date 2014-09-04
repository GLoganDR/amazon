'use strict';

var Product = require('../models/product');

exports.add = function(req, res){
  Product.findById(req.body.productId, function(err, product){
    req.session.cart = req.session.card || [];
    req.session.card.push(product);
    res.redirect('/cart');
  });
};

exports.index = function(req, res){
  res.render('cart/index', {cart:req.session.cart || []});
};
