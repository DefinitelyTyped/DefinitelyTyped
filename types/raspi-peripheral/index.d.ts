/// <reference types="node" />
import { EventEmitter } from "events";
export class Peripheral extends EventEmitter {
    private _alive;
    readonly alive: boolean;
    private _pins;
    readonly pins: number[];
    constructor(pins: string | number | Array<string | number>);
    destroy(): void;
    validateAlive(): void;
}
