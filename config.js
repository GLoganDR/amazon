'use strict';

var config = {};

config.twitter = {
  apiKey      : 'r2pzcfBLTAl5O5M278akBdSks',
  apiSecret   : process.env.TWITTER_SECRET,
  callbackURL : 'http://loganvm.com:3334/auth/twitter/callback'
};

config.github = {
  clientID     : '60674517c1d95466beef',
  clientSecret : process.env.GITHUB_SECRET,
  callbackURL  : 'http://loganvm.com:3334/auth/github/callback'
};

config.google = {
  clientID     : '1087279288457-938rv5vlkeos3vfan60op2plv41b5kr9.apps.googleusercontent.com',
  clientSecret : process.env.GOOGLE_SECRET,
  callbackURL  : 'http://loganvm.com:3334/auth/google/callback'
};

config.facebook = {
  clientID     : '297151127134724',
  clientSecret : process.env.FACEBOOK_SECRET,
  callbackURL  : 'http://loganvm.com:3334/auth/facebook/callback'
};

config.stripe = {
  publishKey : 'pk_test_KQUFelKtQf1ncNDKEvtY9ICl',
  secretKey : process.env.STRIPE_SECRET
};

module.exports = config;
