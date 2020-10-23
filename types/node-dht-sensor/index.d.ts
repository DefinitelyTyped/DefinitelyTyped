// Type definitions for node-dht-sensor 0.4
// Project: https://github.com/momenso/node-dht-sensor
// Definitions by: Manuel Schächinger <https://github.com/schaechinger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface SensorData {
    temperature: number;
    humidity: number;
}

export function initialize(type: 22 | 11, pin: number): boolean;
// for faked test values only
export function initialize(testOptions: { test: { fake: SensorData } }): void;

export function read(
    type: 22 | 11,
    pin: number,
    callback: (err: NodeJS.ErrnoException | null, temperature: number, humidity: number) => void,
): void;
export function read(type?: 22 | 11, pin?: number): SensorData;

export function setMaxRetries(maxRetries: number): void;

export namespace promises {
    function initialize(type: 22 | 11, pin: number): boolean;
    function initialize(testOptions: { test: { fake: SensorData } }): void;
    function readSync(type?: 22 | 11, pin?: number): SensorData;
    function read(type?: 22 | 11, pin?: number): Promise<SensorData>;
    function setMaxRetries(maxRetries: number): void;
}
