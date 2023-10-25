const IPDevicePlatform = require('./lib/IPDevicePlatform');

module.exports = (api) => {
  api.registerPlatform('homebridge-ip-device', 'IPDevicePlatform', IPDevicePlatform);
};

// Hier könnten Sie auch Hilfsfunktionen oder Konstanten definieren, die Sie in Ihrem Plugin verwenden möchten.
