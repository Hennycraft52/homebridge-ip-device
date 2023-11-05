class IPDevicePlatform {
  constructor(log, config, api) {
    this.log = log;
    this.config = config;
    this.api = api;
    this.accessories = [];

    if (this.config && this.config.devices) {
      this.config.devices.forEach((deviceConfig) => {
        this.addDevice(deviceConfig);
      });
    }
  }

  addDevice(deviceConfig) {
    if (deviceConfig.type === 'Bildquelle' && deviceConfig.refreshInterval) {
      const cameraAccessory = new CameraAccessory(this.log, deviceConfig);
      this.accessories.push(cameraAccessory);
    }
    // Add logic for other device types as needed.
  }

  configureAccessory(accessory) {
    this.accessories.push(accessory);
  }
}

module.exports = IPDevicePlatform;
