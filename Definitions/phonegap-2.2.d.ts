// Type definitions for PhoneGap 2.2
// Project: http://phonegap.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface Acceleration {
    x: number;
    y: number;
    z: number;
    timestamp: number; //DOMTimeStamp;
}

interface AccelerometerOptions {
    frequency?: number;
}

interface Accelerometer {
    getCurrentAcceleration(accelerometerSuccess: (acceleration: Acceleration) => void , accelerometerError: () => void ): void;
    watchAcceleration(accelerometerSuccess: (acceleration: Acceleration) => void , accelerometerError: () => void , accelerometerOptions?: AccelerometerOptions): void;
    clearWatch(watchID: number): void;
}

interface CameraPopoverOptions {
    x: number;
    y: number;
    width: number;
    height: number;
    arrowDir: number;
}

interface CameraOptions {
    quality?: number;
    destinationType?: number;
    sourceType?: number;
    allowEdit?: bool;
    encodingType?: number;
    targetWidth?: number;
    targetHeight?: number;
    mediaType?: number;
    correctOrientation?: bool;
    saveToPhotoAlbum?: bool;
    popoverOptions?: number;
}

interface Camera {
    getPicture(cameraSuccess: (imageData: string) => void , cameraError: (message: string) => void , cameraOptions?: CameraOptions): void;
    cleanup(cameraSuccess: (imageData: string) => void , cameraError: (message: string) => void ): void;
}

interface NavigatorPhonegap {
    accelerometer: Accelerometer;
    camera: Camera;
}