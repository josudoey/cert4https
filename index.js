module.exports = require('./ssl-cert-snakeoil.json');
if (!module.exports) {
  module.exports = require('./self-signed')();
}

