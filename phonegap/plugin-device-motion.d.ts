interface Acceleration {
    x: number;
    y: number;
    z: number;
    timestamp: number; //DOMTimeStamp;
}
declare var Acceleration: {
    new(): Acceleration;
}

interface AccelerometerOptions {
    frequency?: number;
}

interface Accelerometer {
    getCurrentAcceleration(accelerometerSuccess: (acceleration: Acceleration) => void , accelerometerError: () => void ): void;
    watchAcceleration(accelerometerSuccess: (acceleration: Acceleration) => void , accelerometerError: () => void , accelerometerOptions?: AccelerometerOptions): void;
    clearWatch(watchID: number): void;
}

interface Navigator {
    accelerometer: Accelerometer;
}