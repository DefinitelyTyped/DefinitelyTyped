// Type definitions for raspi-serial 5.0
// Project: https://github.com/nebrius/raspi-serial
// Definitions by: Bryan Hughes <https://github.com/nebrius>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />
import { Peripheral } from 'raspi-peripheral';
export const PARITY_NONE = "none";
export const PARITY_EVEN = "even";
export const PARITY_ODD = "odd";
export const PARITY_MARK = "mark";
export const PARITY_SPACE = "space";
export const DEFAULT_PORT = "/dev/ttyAMA0";
export interface Options {
    portId?: string;
    baudRate?: 115200 | 57600 | 38400 | 19200 | 9600 | 4800 | 2400 | 1800 | 1200 | 600 | 300 | 200 | 150 | 134 | 110 | 75 | 50 | number;
    dataBits?: 8 | 7 | 6 | 5;
    stopBits?: 1 | 2;
    parity?: 'none' | 'even' | 'mark' | 'odd' | 'space';
}
export type Callback = () => void;
export type ErrorCallback = (err: Error | string) => void;
export class Serial extends Peripheral {
    private _portId;
    private _options;
    private _portInstance;
    private _isOpen;
    constructor({ portId, baudRate, dataBits, stopBits, parity }?: Options);
    readonly port: string;
    readonly baudRate: number;
    readonly dataBits: number;
    readonly stopBits: number;
    readonly parity: string;
    destroy(): void;
    open(cb?: Callback): void;
    close(cb?: ErrorCallback): void;
    write(data: Buffer | string, cb?: Callback): void;
    flush(cb?: ErrorCallback): void;
}
