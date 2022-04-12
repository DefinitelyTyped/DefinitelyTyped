// Type definitions for pi-pir-sensor 0.0
// Project: https://github.com/opedromiranda/pi-pir-sensor
// Definitions by: Mario Murrent <https://github.com/meecodebymariomurrent>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function Sensor(configuration: Sensor.SensorConfiguration): void;

declare namespace Sensor {
    class Sensor {
        lastMovement: Date;

        constructor(sensorConfiguration: SensorConfiguration);

        start(): void;

        stop(): boolean;

        on(event: string, callback: () => void): void;
    }

    interface SensorConfiguration {
        pin: number;
        loop?: number;
    }
}

export = Sensor;
