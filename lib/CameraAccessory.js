const { CameraStreamingDelegate, FFMPEGCodecType } = require('homebridge-camera-ffmpeg');

class CameraAccessory {
  constructor(log, config) {
    this.log = log;
    this.name = config.name;
    this.mjpegUrl = config.ip; // MJPEG-Stream-URL
    this.username = config.username; // Benutzername (falls erforderlich)
    this.password = config.password; // Passwort (falls erforderlich)

    this.cameraSource = new CameraStreamingDelegate({
      streamingOptions: {
        source: '-re -i ' + this.mjpegUrl + ' -q:v 2 -vf fps=15 -update 1 -',
        codec: FFMPEGCodecType.MJPEG,
      },
      // Optional: Benutzername und Passwort
      username: this.username,
      password: this.password,
    });
  }

  getServices() {
    return [this.cameraSource.service];
  }
}

module.exports = (api) => {
  api.registerAccessory('CameraAccessory', 'CameraAccessory', CameraAccessory);
};
