// Type definitions for motion-sensors-polyfill 0.3
// Project: https://github.com/kenchris/lit-element
// Definitions by: Kevin Wylder <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export {};

type EventHandler = (event: Event) => void;

export class Sensor extends EventTarget {
    readonly activated: boolean;
    readonly hasReading: boolean;
    readonly timestamp?: DOMHighResTimeStamp;
    start(): void;
    stop(): void;
    onreading: EventHandler;
    onactivate: EventHandler;
    onerror: EventHandler;
}

interface SensorOptions {
    frequency?: number;
}

type AccelerometerLocalCoordinateSystem = "device" | "screen";

interface AccelerometerSensorOptions extends SensorOptions {
  referenceFrame?: AccelerometerLocalCoordinateSystem; // defaults to "device". IDK how to type this
}

export class Accelerometer extends Sensor {
    constructor(options?: AccelerometerSensorOptions);
    readonly x: number;
    readonly y: number;
    readonly z: number;
}

export class LinearAccelerationSensor extends Accelerometer {
    constructor(options?: AccelerometerSensorOptions);
}

export class GravitySensor extends Accelerometer {
    constructor(options?: AccelerometerSensorOptions);
}

interface GyroscopeSensorOptions {
    referenceFrame?: GyroscopeLocalCoordinateSystem; // defauts to "device"
}

type GyroscopeLocalCoordinateSystem = "device" | "screen";

export class Gyroscope extends Sensor {
    constructor(options?: GyroscopeSensorOptions);
    readonly x: number;
    readonly y: number;
    readonly z: number;
}

type OrientationSensorLocalCoordinateSystem = "device" | "screen";

interface OrientationSensorOptions extends SensorOptions {
    referenceFrame?: OrientationSensorLocalCoordinateSystem; // defaults to "device"
}

type RotationMatrixType = Float32Array | Float64Array | DOMMatrix;

export class OrientationSensor extends Sensor {
    readonly quaternion: [ number, number, number, number ];
    populateMatrix(matrix: RotationMatrixType): void;
}

export class RelativeOrientationSensor extends OrientationSensor {
    constructor(options?: OrientationSensorOptions);
}

export class AbsoluteOrientationSensor extends OrientationSensor {
    constructor(options?: OrientationSensorOptions);
}
