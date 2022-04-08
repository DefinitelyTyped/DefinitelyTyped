// Type definitions for raspi-peripheral 2.0
// Project: https://github.com/nebrius/raspi-peripheral
// Definitions by: Bryan Hughes <https://github.com/nebrius>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />
import { EventEmitter } from 'events';
export class Peripheral extends EventEmitter {
    private _alive;
    readonly alive: boolean;
    private _pins;
    readonly pins: number[];
    constructor(pins: string | number | Array<string | number>);
    destroy(): void;
    validateAlive(): void;
}
