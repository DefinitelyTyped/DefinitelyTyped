// Type definitions for raspi-pwm 6.0
// Project: https://github.com/nebrius/raspi-pwm
// Definitions by: Bryan Hughes <https://github.com/nebrius>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { Peripheral } from 'raspi-peripheral';
export interface Config {
    pin?: number | string;
    frequency?: number;
}
export class PWM extends Peripheral {
    private _frequencyValue;
    private _dutyCycleValue;
    private _pwmPort;
    private _pwm;
    readonly frequency: number;
    readonly dutyCycle: number;
    constructor(config?: number | string | Config);
    destroy(): void;
    write(dutyCycle: number): void;
}
