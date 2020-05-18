type EventHandler = (event: Event) => void;

declare class Sensor extends EventTarget {
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
    frequency?: number
}

type AccelerometerLocalCoordinateSystem = "device" | "screen";

interface AccelerometerSensorOptions extends SensorOptions {
  referenceFrame?: AccelerometerLocalCoordinateSystem // defaults to "device". IDK how to type this
}

export declare class Accelerometer extends Sensor {
    constructor(options?: AccelerometerSensorOptions);
    readonly x: number;
    readonly y: number;
    readonly z: number;
}

export declare class LinearAccelerationSensor extends Accelerometer {
    constructor (options?: AccelerometerSensorOptions);
}

export declare class GravitySensor extends Accelerometer {
    constructor (options?: AccelerometerSensorOptions);
}

interface GyroscopeSensorOptions {
    referenceFrame?: GyroscopeLocalCoordinateSystem // defauts to "device"
}

type GyroscopeLocalCoordinateSystem = "device" | "screen";

export declare class Gyroscope extends Sensor {
    constructor (options: GyroscopeSensorOptions);
    readonly x: number;
    readonly y: number;
    readonly z: number;
}

type OrientationSensorLocalCoordinateSystem = "device" | "screen"

interface OrientationSensorOptions extends SensorOptions {
    referenceFrame?: OrientationSensorLocalCoordinateSystem; // defaults to "device"
}

type RotationMatrixType = Float32Array | Float64Array | DOMMatrix;

declare class OrientationSensor extends Sensor {
    readonly quaternion: [ number, number, number, number ]
    populateMatrix(matrix: RotationMatrixType): void
}

export declare class RelativeOrientationSensor extends OrientationSensor {
    constructor(options?: OrientationSensorOptions);
}

export declare class AbsoluteOrientationSensor extends OrientationSensor {
    constructor (options?: OrientationSensorOptions);
}
