// Type definitions for bleno 0.4
// Project: https://github.com/sandeepmistry/bleno
// Definitions by: Manuel Francisco Naranjo <naranjo.manuel@gmail.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Characteristic {
    uuid: any;
    properties: any;
    secure: any;
    value: any;
    descriptors: any;

    constructor(options: any);

    onIndicate(): void;

    onNotify(): void;

    onReadRequest(offset: any, callback: any): void;

    onSubscribe(maxValueSize: any, updateValueCallback: any): void;

    onUnsubscribe(): void;

    onWriteRequest(data: any, offset: any, withoutResponse: any, callback: any): void;

    toString(): any;

    static RESULT_ATTR_NOT_LONG: number;

    static RESULT_INVALID_ATTRIBUTE_LENGTH: number;

    static RESULT_INVALID_OFFSET: number;

    static RESULT_SUCCESS: number;

    static RESULT_UNLIKELY_ERROR: number;
}

export class Descriptor {
    uuid: any;
    value: any;

    constructor(options: any);

    toString(): any;
}

export class PrimaryService {
    uuid: any;
    characteristics: any;

    constructor(options: any);

    toString(): any;
}

export const address: string;

export const domain: any;

export const mtu: number;

export const platform: string;

export const rssi: number;

export const state: string;

export function addListener(type: any, listener: any): any;

export function disconnect(): void;

export function emit(type: any, ...args: any[]): any;

export function eventNames(): any;

export function getMaxListeners(): any;

export function listenerCount(type: any): any;

export function listeners(type: any): any;

export function on(type: any, listener: any): any;

export function onAccept(clientAddress: any): void;

export function onAddressChange(address: any): void;

export function onAdvertisingStart(error: any): void;

export function onAdvertisingStop(): void;

export function onDisconnect(clientAddress: any): void;

export function onMtuChange(mtu: any): void;

export function onPlatform(platform: any): void;

export function onRssiUpdate(rssi: any): void;

export function onServicesSet(error: any): void;

export function onStateChange(state: any): void;

export function once(type: any, listener: any): any;

export function prependListener(type: any, listener: any): any;

export function prependOnceListener(type: any, listener: any): any;

export function removeAllListeners(type: any, ...args: any[]): any;

export function removeListener(type: any, listener: any): any;

export function setMaxListeners(n: any): any;

export function setServices(services: any, callback: any): void;

export function startAdvertising(name: any, serviceUuids: any, callback: any): void;

export function startAdvertisingIBeacon(uuid: any, major: any, minor: any, measuredPower: any, callback: any): void;

export function startAdvertisingWithEIRData(advertisementData: any, scanData: any, callback: any): void;

export function stopAdvertising(callback: any): void;

export function updateRssi(callback: any): void;
