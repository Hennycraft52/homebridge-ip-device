const { CameraStreamingDelegate, FFMPEGCodecType } = require('homebridge-camera-ffmpeg');

class CameraAccessory {
  constructor(log, config) {
    this.log = log;
    this.name = config.name;
    this.mjpegUrl = config.ip;
    this.username = config.username;
    this.password = config.password;

    this.cameraSource = new CameraStreamingDelegate({
      streamingOptions: {
        source: '-re -i ' + this.mjpegUrl + ' -q:v 2 -vf fps=15 -update 1 -',
        codec: FFMPEGCodecType.MJPEG,
      },
      username: this.username,
      password: this.password,
    });
  }

  getServices() {
    return [this.cameraSource.service];
  }
}

module.exports = CameraAccessory;
