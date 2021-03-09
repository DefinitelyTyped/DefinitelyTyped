import CameraPhoto, { FACING_MODES, IMAGE_TYPES, CaptureConfigOption } from 'jslib-html5-camera-photo';

const videoElement = document.createElement('video');

// pass the video element to the constructor.
const cameraPhoto = new CameraPhoto(videoElement);

// default camera and resolution
cameraPhoto
    .startCamera()
    .then(stream => {
        /* ... */
    })
    .catch(error => {
        /* ... */
    });

// environment (camera point to environment)
cameraPhoto
    .startCamera(FACING_MODES.ENVIRONMENT, {})
    .then(stream => {
        /* ... */
    })
    .catch(error => {
        /* ... */
    });

// OR user (camera point to the user)
cameraPhoto
    .startCamera(FACING_MODES.USER, {})
    .then(stream => {
        /* ... */
    })
    .catch(error => {
        /* ... */
    });

// example of ideal resolution 640 x 480
cameraPhoto
    .startCamera(FACING_MODES.ENVIRONMENT, { width: 640, height: 480 })
    .then(stream => {
        /* ... */
    })
    .catch(error => {
        /* ... */
    });

// example of resultion with non-numeric width and height
cameraPhoto
    .startCamera(FACING_MODES.ENVIRONMENT, { width: { ideal: 3840 }, height: { ideal: 2160 } })
    .then(stream => {
        /* ... */
    })
    .catch(error => {
        /* ... */
    });

// It will try the best to get the maximum resolution with the specified facingMode
cameraPhoto
    .startCameraMaxResolution(FACING_MODES.ENVIRONMENT)
    .then(stream => {
        /* ... */
    })
    .catch(error => {
        /* ... */
    });

// Use all the default value
const config1: CaptureConfigOption = {};
// $ExpectType string
const dataUri1 = cameraPhoto.getDataUri(config1);

const config2: CaptureConfigOption = {
    sizeFactor: 1,
    imageType: IMAGE_TYPES.JPG,
    imageCompression: 0.95,
    isImageMirror: false,
};
// $ExpectType string
const dataUri2 = cameraPhoto.getDataUri(config2);

const cameraSettings = cameraPhoto.getCameraSettings();
if (cameraSettings) {
    const { aspectRatio, frameRate, height, width } = cameraSettings;
    const settingsStr =
        `aspectRatio:${aspectRatio} ` + `frameRate: ${frameRate} ` + `height: ${height} ` + `width: ${width}`;
    console.log(settingsStr);
}

// $ExpectType MediaDeviceInfo[]
const inputVideoDeviceInfos = cameraPhoto.getInputVideoDeviceInfos();
inputVideoDeviceInfos.forEach(inputVideoDeviceInfo => {
    const { kind, label, deviceId } = inputVideoDeviceInfo;
    const inputVideoDeviceInfoStr = `
        kind: ${kind}
        label: ${label}
        deviceId: ${deviceId}
    `;
    console.log(inputVideoDeviceInfoStr);
});

// Stop the camera
cameraPhoto
    .stopCamera()
    .then(() => {
        /* ... */
    })
    .catch(error => {
        /* ... */
    });

if (cameraPhoto.mediaDevices) {
    cameraPhoto.mediaDevices.getUserMedia();
}
