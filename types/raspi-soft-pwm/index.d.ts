// Type definitions for raspi-soft-pwm 5.0
// Project: https://github.com/nebrius/raspi-soft-pwm, https://github.com/tralves/raspi-soft-pwm
// Definitions by: Bryan Hughes <https://github.com/nebrius>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { Peripheral } from 'raspi-peripheral';
export interface Config {
    pin: number | string;
    frequency?: number;
    range?: number;
}
export class SoftPWM extends Peripheral {
    private _pwm;
    private _frequency;
    private _range;
    private _dutyCycle;
    readonly frequency: number;
    readonly range: number;
    readonly dutyCycle: number;
    constructor(config: number | string | Config);
    write(dutyCycle: number): void;
}
