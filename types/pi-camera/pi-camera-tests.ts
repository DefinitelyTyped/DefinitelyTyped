import PiCamera = require('pi-camera');

declare function log(msg: string | number | boolean): string;

const camera = new PiCamera({
    mode: 'photo',
    output: './test.jpg',
    width: 1920,
    height: 1080,
    nopreview: true
});

const camera2 = new PiCamera({
    mode: 'video',
    output: './video.h264',
    width: 1920,
    height: 1080,
    timeout: 5000, // Record for 5 seconds
    nopreview: true,
});

camera.snap().then((result) => {
    log(`Your picture was captured ${result}`);
}).catch((error: Error) => {
    log(`error happened while taking picture, message: ${error}`);
});

camera2.record().then((result) => {
    log(`Your video was captured ${result}`);
}).catch((error: Error) => {
    log(`error happened while taking picture, message: ${error}`);
});

const widthValue = camera.get('width');
log(widthValue);

camera.set('fps', 25);

const fpsValue = camera.get('width');
log(fpsValue);
