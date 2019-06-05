// Explainer: https://www.w3.org/TR/motion-sensors/

declare class SensorErrorEvent extends Event {
    constructor(type: string, errorEventInitDict: SensorErrorEventInit);
    readonly error: Error;
}

interface SensorErrorEventInit extends EventInit {
    error: Error;
}

declare class Sensor extends EventTarget {
    readonly activated: boolean;
    readonly timestamp?: number; // Should be DOMHighResTimeStamp.
    start(): void;
    stop(): void;

    onreading: (this: this, ev: Event) => any;
    onactivate: (this: this, ev: Event) => any;
    onerror: (this: this, ev: SensorErrorEvent) => any;

    addEventListener(type: "reading" | "activate", listener: (this: this, ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (this: this, ev: SensorErrorEvent) => any, useCapture?: boolean): void;
}

interface SensorOptions {
    frequency?: number;
}

// Accelerometer: https://www.w3.org/TR/accelerometer/

declare class Accelerometer extends Sensor {
  constructor(options?: SensorOptions);
  readonly x?: number;
  readonly y?: number;
  readonly z?: number;
}

declare class LinearAccelerationSensor extends Accelerometer {
    constructor(options?: SensorOptions);
}

declare class GravitySensor extends Accelerometer {
    constructor(options?: SensorOptions);
}

// Gyroscope: https://www.w3.org/TR/gyroscope/

declare class Gyroscope extends Sensor {
    constructor(options?: SensorOptions);
    readonly x?: number;
    readonly y?: number;
    readonly z?: number;
}

// Magnetometer: https://www.w3.org/TR/magnetometer/

declare class Magnetometer extends Sensor {
    constructor(options?: SensorOptions);
    readonly x?: number;
    readonly y?: number;
    readonly z?: number;
}

declare class UncalibratedMagnetometer extends Sensor {
    constructor(options?: SensorOptions);
    readonly x?: number;
    readonly y?: number;
    readonly z?: number;
    readonly xBias?: number;
    readonly yBias?: number;
    readonly zBias?: number;
}

// Orientation Sensor: https://www.w3.org/TR/orientation-sensor/

type RotationMatrixType = Float32Array | Float64Array | DOMMatrix;

declare class OrientationSensor extends Sensor {
    readonly quaternion?: number[];
    populateMatrix(targetMatrix: RotationMatrixType): void;
}

declare class AbsoluteOrientationSensor extends OrientationSensor {
    constructor(options?: SensorOptions);
}

declare class RelativeOrientationSensor extends OrientationSensor {
    constructor(options?: SensorOptions);
}
