// Type definitions for non-npm package W3C Generic Sensor API 1.0
// Project: https://www.w3.org/TR/generic-sensor/
// Definitions by: Kenneth Rohde Christiansen <https://github.com/kenchris>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

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
    readonly timestamp?: number | undefined; // Should be DOMHighResTimeStamp.
    start(): void;
    stop(): void;

    onreading: (this: this, ev: Event) => any;
    onactivate: (this: this, ev: Event) => any;
    onerror: (this: this, ev: SensorErrorEvent) => any;

    addEventListener(
        type: 'reading' | 'activate',
        listener: (this: this, ev: Event) => any,
        useCapture?: boolean,
    ): void;
    addEventListener(type: 'error', listener: (this: this, ev: SensorErrorEvent) => any, useCapture?: boolean): void;
}

interface SensorOptions {
    frequency?: number | undefined;
}

interface MotionSensorOptions extends SensorOptions {
    referenceFrame?: 'device' | 'screen' | undefined;
}

// Accelerometer: https://www.w3.org/TR/accelerometer/

declare class Accelerometer extends Sensor {
    constructor(options?: MotionSensorOptions);
    readonly x?: number | undefined;
    readonly y?: number | undefined;
    readonly z?: number | undefined;
}

declare class LinearAccelerationSensor extends Accelerometer {
    constructor(options?: MotionSensorOptions);
}

declare class GravitySensor extends Accelerometer {
    constructor(options?: MotionSensorOptions);
}

// Gyroscope: https://www.w3.org/TR/gyroscope/

declare class Gyroscope extends Sensor {
    constructor(options?: MotionSensorOptions);
    readonly x?: number | undefined;
    readonly y?: number | undefined;
    readonly z?: number | undefined;
}

// Magnetometer: https://www.w3.org/TR/magnetometer/

declare class Magnetometer extends Sensor {
    constructor(options?: MotionSensorOptions);
    readonly x?: number | undefined;
    readonly y?: number | undefined;
    readonly z?: number | undefined;
}

declare class UncalibratedMagnetometer extends Sensor {
    constructor(options?: MotionSensorOptions);
    readonly x?: number | undefined;
    readonly y?: number | undefined;
    readonly z?: number | undefined;
    readonly xBias?: number | undefined;
    readonly yBias?: number | undefined;
    readonly zBias?: number | undefined;
}

// Orientation Sensor: https://www.w3.org/TR/orientation-sensor/

type RotationMatrixType = Float32Array | Float64Array | DOMMatrix;

declare class OrientationSensor extends Sensor {
    readonly quaternion?: number[] | undefined;
    populateMatrix(targetMatrix: RotationMatrixType): void;
}

declare class AbsoluteOrientationSensor extends OrientationSensor {
    constructor(options?: MotionSensorOptions);
}

declare class RelativeOrientationSensor extends OrientationSensor {
    constructor(options?: MotionSensorOptions);
}

// Ambient Light Sensor: https://www.w3.org/TR/ambient-light/

declare class AmbientLightSensor extends Sensor {
    constructor(options?: SensorOptions);
    readonly illuminance?: number | undefined;
}
