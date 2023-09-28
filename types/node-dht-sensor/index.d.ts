// Type definitions for node-dht-sensor 0.4
// Project: https://github.com/momenso/node-dht-sensor
// Definitions by: Manuel Schächinger <https://github.com/schaechinger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export type DHT11 = 11;
export type DHT22 = 22;
export type SensorType = DHT11 | DHT22;

export interface SensorData {
    temperature: number;
    humidity: number;
}

export function initialize(type: SensorType, pin: number): boolean;
// for faked test values only
export function initialize(testOptions: { test: { fake: SensorData } }): void;

export function read(
    type: SensorType,
    pin: number,
    callback: (err: NodeJS.ErrnoException | null, temperature: number, humidity: number) => void,
): void;
export function read(type?: SensorType, pin?: number): SensorData;

export function setMaxRetries(maxRetries: number): void;

export namespace promises {
    function initialize(type: SensorType, pin: number): boolean;
    function initialize(testOptions: { test: { fake: SensorData } }): void;
    function readSync(type?: SensorType, pin?: number): SensorData;
    function read(type?: SensorType, pin?: number): Promise<SensorData>;
    function setMaxRetries(maxRetries: number): void;
}
