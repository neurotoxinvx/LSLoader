var webpack = require('webpack');
var webpackConfig = require('../config/webpack.config')
var lsLoader = require('./lsloader_es6');
var addCombo = require('./addCombo');

lsLoader.run()

console.log('> LSLoader Success');

webpack(webpackConfig, function() {
  console.log('> WebPack Success');
  addCombo.run()
  console.log('> AddCombo Success');
})