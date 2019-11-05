const { resolve } = require('path');

module.exports = function nuxtVueRetailRocket(options) {
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'vue-retailrocket.js',
    options,
    ssr: false,
  });
};

module.exports.meta = require('../package.json');
