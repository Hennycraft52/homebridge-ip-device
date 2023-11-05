const IPDevicePlatform = require('./lib/IPDevicePlatform');

module.exports = (api) => {
  api.registerPlatform('homebridge-my-camera-plugin', 'IPDevicePlatform', IPDevicePlatform);
};
