// Type definitions for raspi-gpio 5.0
// Project: https://github.com/nebrius/raspi-gpio
// Definitions by: Bryan Hughes <https://github.com/nebrius>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { Peripheral } from 'raspi-peripheral';
export interface Config {
    pin: number | string;
    pullResistor?: number;
}
export const LOW = 0;
export const HIGH = 1;
export const PULL_NONE: number;
export const PULL_DOWN: number;
export const PULL_UP: number;
export class DigitalOutput extends Peripheral {
    private _output;
    private _currentValue;
    readonly value: number;
    constructor(config: number | string | Config);
    write(value: number): void;
}
export class DigitalInput extends Peripheral {
    private _input;
    private _currentValue;
    readonly value: number;
    constructor(config: number | string | Config);
    destroy(): void;
    read(): number;
}
