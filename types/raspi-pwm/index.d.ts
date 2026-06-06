import { Peripheral } from "raspi-peripheral";
export interface Config {
    pin?: number | string | undefined;
    frequency?: number | undefined;
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
