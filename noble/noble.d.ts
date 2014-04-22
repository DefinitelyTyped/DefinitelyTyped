// Type definitions for noble
// Project: https://github.com/sandeepmistry/noble
// Definitions by: Seon-Wook Park <https://github.com/swook>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "noble" {
    export function startScanning(): void;
    export function startScanning(serviceUUIDs: string[]): void;
    export function startScanning(serviceUUIDs: string[], allowDuplicates: boolean): void;
    export function stopScanning(): void;

    export function on(event: string, callback: Function): void;
    export function on(event: "stateChange", callback: (state: string) => void): void;
    export function on(event: "scanStart", callback: () => void): void;
    export function on(event: "scanStop", callback: () => void): void;
    export function on(event: "discover", callback: (peripheral: Peripheral) => void): void;

    export class Peripheral {
        uuid:          string;
        advertisement: Advertisement;
        rssi:          number;
        services:      string[];

        connect(callback: (error: string) => void): void;
        disconnect(callback: () => void): void;
        discoverServices(serviceUUIDs: string[], callback: (error: string, services: Service[]) => void): void;
        discoverAllServicesAndCharacteristics(callback: (error: string, services: Service[], characteristics: Characteristic[]) => void): void;
        discoverSomeServicesAndCharacteristics(serviceUUIDs: string[], characteristicUUIDs: string[], callback: (error: string, services: Service[], characteristics: Characteristic[]) => void): void;

        readHandle(handle: NodeBuffer, callback: (error: string, data: NodeBuffer) => void): void;
        writeHandle(handle: NodeBuffer, data: NodeBuffer, withoutResponse: boolean, callback: (error: string) => void): void;
        toString(): string;

        on(event: string, callback: Function): void;
        on(event: "connect", callback: (error: string) => void): void;
        on(event: "disconnect", callback: (error: string) => void): void;
        on(event: "rssiUpdate", callback: (rssi: number) => void): void;
        on(event: "servicesDiscover", callback: (services: Service[]) => void): void;
    }

    export interface Advertisement {
        localName:        string;
        serviceData:      NodeBuffer;
        txPowerLevel:     number;
        manufacturerData: NodeBuffer;
        serviceUuids:     string[];
    }

    export class Service {
        uuid:                 string;
        name:                 string;
        type:                 string;
        includedServiceUuids: string[];
        characteristics:      Characteristic[];

        discoverIncludedServices(serviceUUIDs: string[], callback: (error: string, includedServiceUuids: string[]) => void): void;
        discoverCharacteristics(characteristicUUIDs: string[], callback: (error: string, characteristics: Characteristic[]) => void): void;
        toString(): string;

        on(event: string, callback: Function): void;
        on(event: "includedServicesDiscover", callback: (includedServiceUuids: string[]) => void): void;
        on(event: "characteristicsDiscover", callback: (characteristics: Characteristic[]) => void): void;
    }

    export class Characteristic {
        uuid:        string;
        name:        string;
        type:        string;
        properties:  string[];
        descriptors: Descriptor[];

        read(callback: (error: string, data: NodeBuffer) => void): void;
        write(data: NodeBuffer, notify: boolean, callback: (error: string) => void): void;
        broadcast(broadcast: boolean, callback: (error: string) => void): void;
        notify(notify: boolean, callback: (error: string) => void): void;
        discoverDescriptors(callback: (error: string, descriptors: Descriptor[]) => void): void;
        toString(): string;

        on(event: string, callback: Function): void;
        on(event: string, option: boolean, callback: Function): void;
        on(event: "read", callback: (data: NodeBuffer, isNotification: boolean) => void): void;
        on(event: "write", withoutResponse: boolean, callback: (error: string) => void): void;
        on(event: "broadcast", callback: (state: string) => void): void;
        on(event: "notify", callback: (state: string) => void): void;
        on(event: "descriptorsDiscover", callback: (descriptors: Descriptor[]) => void): void;
    }

    export class Descriptor {
        uuid: string;
        name: string;
        type: string;

        readValue(callback: (error: string, data: NodeBuffer) => void): void;
        writeValue(data: NodeBuffer, callback: (error: string) => void): void;
        toString(): string;

        on(event: string, callback: Function): void;
        on(event: "valueRead", callback: (error: string, data: NodeBuffer) => void): void;
        on(event: "valueWrite", callback: (error: string) => void): void;
    }
}

// vim expandtab shiftwidth=4
