// Type definitions for node-hid 1.3
// Project: https://github.com/node-hid/node-hid#readme
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
//                 Robert Kiss <https://github.com/ert78gb>
//                 Rob Moran <https://github.com/thegecko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events';

export interface Device {
    vendorId: number;
    productId: number;
    path?: string;
    serialNumber?: string;
    manufacturer?: string;
    product?: string;
    release: number;
    interface: number;
    usagePage?: number;
    usage?: number;
}

export class HID extends EventEmitter {
    constructor(path: string);
    constructor(vid: number, pid: number);
    close(): void;
    pause(): void;
    read(callback: (err: any, data: number[]) => void): void;
    readSync(): number[];
    readTimeout(time_out: number): number[];
    sendFeatureReport(data: number[] | Buffer): number;
    getFeatureReport(report_id: number, report_length: number): number[];
    resume(): void;
    write(values: number[] | Buffer): number;
    setNonBlocking(no_block: boolean): void;
}
export function devices(vid: number, pid: number): Device[];
export function devices(): Device[];
export function setDriverType(type: 'hidraw' | 'libusb'): void;
