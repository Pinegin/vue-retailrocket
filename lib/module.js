const {resolve} = require('path');

function retailRocket(options) {
  // Don't include on dev mode
  if (this.options.dev && process.env.NODE_ENV !== 'production') {
    return
  }


  // Add retailRocket script to head
  this.options.head.script.push({
    src: '//cdn.retailrocket.ru/content/javascript/tracking.js',
    async: ''
  });

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'retailrocket.js',
    options,
    ssr: false
  })
}

module.exports = retailRocket;
module.exports.meta = require('../package.json');
