// Type definitions for raspi-onewire 1.0
// Project: https://github.com/nebrius/raspi-onewire
// Definitions by: Bryan Hughes <https://github.com/nebrius>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />
import { Peripheral } from 'raspi-peripheral';
export class OneWire extends Peripheral {
    private _deviceIdMapping;
    constructor();
    private _convertIDToMappingKey(deviceID);
    private _getNameFromID(deviceID);
    searchForDevices(cb: (readErr: string | Error | undefined, devices: number[][] | undefined) => void): void;
    read(deviceID: number[], numBytesToRead: number, cb: (err: string | Error | undefined, data: Buffer | undefined) => void): void;
    readAllAvailable(deviceID: number[], cb: (err: string | Error | undefined, data: Buffer | undefined) => void): void;
}
