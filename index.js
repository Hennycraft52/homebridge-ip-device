const IPDevicePlatform = require('./lib/IPDevicePlatform');

module.exports = (api) => {
  api.registerPlatform('homebridge-ip-device', 'IPDevicePlatform', IPDevicePlatform);
};
