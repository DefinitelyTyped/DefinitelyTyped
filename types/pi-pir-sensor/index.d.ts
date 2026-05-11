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
