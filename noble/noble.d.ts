// Type definitions for noble
// Project: https://github.com/sandeepmistry/noble
// Definitions by: Seon-Wook Park <https://github.com/swook>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "noble" {
    import events = require("events");

    export function startScanning(): void;
    export function startScanning(serviceUUIDs: string[]): void;
    export function startScanning(serviceUUIDs: string[], allowDuplicates: boolean): void;
    export function stopScanning(): void;

    export function on(event: string, listener: Function): events.EventEmitter;
    export function on(event: "stateChange", listener: (state: string) => void): events.EventEmitter;
    export function on(event: "scanStart", listener: () => void): events.EventEmitter;
    export function on(event: "scanStop", listener: () => void): events.EventEmitter;
    export function on(event: "discover", listener: (peripheral: Peripheral) => void): events.EventEmitter;

    export class Peripheral extends events.EventEmitter {
        uuid:          string;
        advertisement: Advertisement;
        rssi:          number;
        services:      string[];
        state:         string;

        connect(callback?: (error: string) => void): void;
        disconnect(callback?: () => void): void;
        updateRssi(callback?: (error: string, rssi: number) => void): void;
        discoverServices(serviceUUIDs: string[], callback?: (error: string, services: Service[]) => void): void;
        discoverAllServicesAndCharacteristics(callback?: (error: string, services: Service[], characteristics: Characteristic[]) => void): void;
        discoverSomeServicesAndCharacteristics(serviceUUIDs: string[], characteristicUUIDs: string[], callback?: (error: string, services: Service[], characteristics: Characteristic[]) => void): void;

        readHandle(handle: NodeBuffer, callback: (error: string, data: NodeBuffer) => void): void;
        writeHandle(handle: NodeBuffer, data: NodeBuffer, withoutResponse: boolean, callback: (error: string) => void): void;
        toString(): string;

        on(event: string, listener: Function): events.EventEmitter;
        on(event: "connect", listener: (error: string) => void): events.EventEmitter;
        on(event: "disconnect", listener: (error: string) => void): events.EventEmitter;
        on(event: "rssiUpdate", listener: (rssi: number) => void): events.EventEmitter;
        on(event: "servicesDiscover", listener: (services: Service[]) => void): events.EventEmitter;
    }

    export interface Advertisement {
        localName:        string;
        serviceData:      NodeBuffer;
        txPowerLevel:     number;
        manufacturerData: NodeBuffer;
        serviceUuids:     string[];
    }

    export class Service extends events.EventEmitter {
        uuid:                 string;
        name:                 string;
        type:                 string;
        includedServiceUuids: string[];
        characteristics:      Characteristic[];

        discoverIncludedServices(serviceUUIDs: string[], callback?: (error: string, includedServiceUuids: string[]) => void): void;
        discoverCharacteristics(characteristicUUIDs: string[], callback?: (error: string, characteristics: Characteristic[]) => void): void;
        toString(): string;

        on(event: string, listener: Function): events.EventEmitter;
        on(event: "includedServicesDiscover", listener: (includedServiceUuids: string[]) => void): events.EventEmitter;
        on(event: "characteristicsDiscover", listener: (characteristics: Characteristic[]) => void): events.EventEmitter;
    }

    export class Characteristic extends events.EventEmitter {
        uuid:        string;
        name:        string;
        type:        string;
        properties:  string[];
        descriptors: Descriptor[];

        read(callback?: (error: string, data: NodeBuffer) => void): void;
        write(data: NodeBuffer, notify: boolean, callback?: (error: string) => void): void;
        broadcast(broadcast: boolean, callback?: (error: string) => void): void;
        notify(notify: boolean, callback?: (error: string) => void): void;
        discoverDescriptors(callback?: (error: string, descriptors: Descriptor[]) => void): void;
        toString(): string;

        on(event: string, listener: Function): events.EventEmitter;
        on(event: string, option: boolean, listener: Function): events.EventEmitter;
        on(event: "read", listener: (data: NodeBuffer, isNotification: boolean) => void): events.EventEmitter;
        on(event: "write", withoutResponse: boolean, listener: (error: string) => void): events.EventEmitter;
        on(event: "broadcast", listener: (state: string) => void): events.EventEmitter;
        on(event: "notify", listener: (state: string) => void): events.EventEmitter;
        on(event: "descriptorsDiscover", listener: (descriptors: Descriptor[]) => void): events.EventEmitter;
    }

    export class Descriptor extends events.EventEmitter {
        uuid: string;
        name: string;
        type: string;

        readValue(callback?: (error: string, data: NodeBuffer) => void): void;
        writeValue(data: NodeBuffer, callback?: (error: string) => void): void;
        toString(): string;

        on(event: string, listener: Function): events.EventEmitter;
        on(event: "valueRead", listener: (error: string, data: NodeBuffer) => void): events.EventEmitter;
        on(event: "valueWrite", listener: (error: string) => void): events.EventEmitter;
    }
}

