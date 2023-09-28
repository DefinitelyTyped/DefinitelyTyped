// Type definitions for pi-pir-sensor 0.0
// Project: https://github.com/opedromiranda/pi-pir-sensor
// Definitions by: Mario Murrent <https://github.com/meecodebymariomurrent>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare class Sensor {
    lastMovement: Date;

    constructor(sensorConfiguration: Sensor.SensorConfiguration);

    start(cb?: (err: Error) => void): void;

    stop(): boolean;

    on(event: string, callback: () => void): void;
}

declare namespace Sensor {
    interface SensorConfiguration {
        pin: number;
        loop?: number;
    }
}

export = Sensor;
