// Type definitions for pi-pir-sensor 0.0
// Project: https://github.com/opedromiranda/pi-pir-sensor
// Definitions by: Mario Murrent <https://github.com/meecodebymariomurrent>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
export class Sensor {
    lastMovement: Date;

    constructor(sensorConfiguration: SensorConfiguration);

    start(): void;

    stop(): void;

    on(event: string, callback: () => void): void;
}

export interface SensorConfiguration {
    pin: number;
    loop?: number;
}
