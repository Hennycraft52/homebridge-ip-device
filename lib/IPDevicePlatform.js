class IPDevicePlatform {
  constructor(log, config, api) {
    this.log = log;
    this.config = config;
    this.api = api;
    this.cameraAccessories = [];

    this.api.on('didFinishLaunching', () => {
      // Initialisierung und Konfiguration der Kameras und Camera Accessories
      this.configureCameras();
    });
  }

  configureCameras() {
    // Hier konfigurierst du die Kameras und erstellst Camera Accessories entsprechend der Konfiguration
    this.config.cameras.forEach((cameraConfig) => {
      const cameraAccessory = new CameraAccessory(this.log, cameraConfig);
      this.cameraAccessories.push(cameraAccessory);
    });
  }

  accessories(callback) {
    callback(this.cameraAccessories);
  }
}

module.exports = IPDevicePlatform;
