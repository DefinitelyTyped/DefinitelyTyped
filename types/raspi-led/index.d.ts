// Type definitions for raspi-led 2.0
// Project: https://github.com/nebrius/raspi-led
// Definitions by: Bryan Hughes <https://github.com/nebrius>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { Peripheral } from 'raspi-peripheral';
export const OFF = 0;
export const ON = 1;
export class LED extends Peripheral {
    constructor();
    hasLed(): boolean;
    read(): 0 | 1;
    write(value: 0 | 1): void;
}
