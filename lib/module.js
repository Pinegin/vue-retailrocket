const {resolve} = require('path');

function retailRocket(options) {
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'retailrocket.js',
    options,
    ssr: false
  })
}

module.exports = retailRocket;
module.exports.meta = require('../package.json');
