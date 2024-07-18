// Available in nodejs

import { NodeWebcam, WebcamOptions } from "node-webcam";

// Default options

const opts: WebcamOptions = {
    // Picture related

    width: 1280,

    height: 720,

    quality: 100,

    // Number of frames to capture
    // More the frames, longer it takes to capture
    // Use higher framerate for quality. Ex: 60

    frames: 60,

    // Delay in seconds to take shot
    // if the platform supports miliseconds
    // use a float (0.1)
    // Currently only on windows
    delay: 0,

    // Save shots in memory
    saveShots: true,

    // [jpeg, png] support varies
    // Webcam.OutputTypes
    output: "jpeg",

    // Which camera to use
    // Use Webcam.list() for results
    // false for default device
    device: false,

    // [location, buffer, base64]
    // Webcam.CallbackReturnTypes
    callbackReturn: "base64",

    // Logging
    verbose: false,
};

// Creates webcam instance

const Webcam = NodeWebcam.create(opts);

// Will automatically append location output type

Webcam.capture("test_picture", (err, data) => {
    console.info("data", data);
});

// Also available for quick use

NodeWebcam.capture("test_picture", opts, (err, data) => {
    if (!err) {
        data.includes("base64");
    }
});

// Get list of cameras

Webcam.list(list => {
    // Use another device

    const cam = NodeWebcam.Factory.create({ ...opts, device: list[0] }, "linux");
    cam.capture("pictures/picture_" + new Date().getTime(), (err, data) => {
        data && console.info("data", data);
        err && console.error("err", err);
    });
});

NodeWebcam.list(list => {
    // Use another device
    console.info("list", list);
    const camera = NodeWebcam.Factory.create({ ...opts, device: list[0] }, "linux");

    camera.capture("pictures/picture_" + new Date().getTime(), (err, data) => {
        data && console.info("data", data);
        err && console.error("err", err);
    });
});
