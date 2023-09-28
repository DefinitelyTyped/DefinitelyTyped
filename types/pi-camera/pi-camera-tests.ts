import PiCamera = require("pi-camera");

declare const log: (msg: PiCamera.ConfigValue) => void;

// $ExpectType PiCamera
new PiCamera();

const camera = new PiCamera({
    mode: "photo",
    output: "./test.jpg",
    width: 1920,
    height: 1080,
    nopreview: true,
});

const camera2 = new PiCamera({
    mode: "video",
    output: "./video.h264",
    width: 1920,
    height: 1080,
    timeout: 5000, // Record for 5 seconds
    nopreview: true,
});

const camera3 = new PiCamera({
    mode: "photo",
    width: 1920,
    height: 1080,
    nopreview: true,
});

camera
    .snap()
    .then(result => {
        log(`Your picture was captured ${result}`);
    })
    .catch((error: Error) => {
        log(`error happened while taking picture, message: ${error}`);
    });

camera2
    .record()
    .then(result => {
        log(`Your video was captured ${result}`);
    })
    .catch((error: Error) => {
        log(`error happened while taking picture, message: ${error}`);
    });

camera3
    .snapDataUrl()
    .then(result => {
        log(`Your picture was captured ${result}`);
    })
    .catch((error: Error) => {
        log(`error happened while taking picture, message: ${error}`);
    });

camera3
    .snapDataUrl(1_024 * 1_024 * 10)
    .then(result => {
        log(`Your picture was captured ${result}`);
    })
    .catch((error: Error) => {
        log(`error happened while taking picture, message: ${error}`);
    });

const widthValue = camera.get("width");
log(widthValue);

// @ts-expect-error
camera.get("fsp");
