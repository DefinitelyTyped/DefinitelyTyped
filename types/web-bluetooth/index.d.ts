// Type definitions for Web Bluetooth
// Project: https://webbluetoothcg.github.io/web-bluetooth/
// Definitions by: Uri Shaked <https://github.com/urish>
//                    Xavier Lozinguez <http://github.com/xlozinguez>
//                    Rob Moran <https://github.com/thegecko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type BluetoothServiceUUID = number | string;
type BluetoothCharacteristicUUID = number | string;
type BluetoothDescriptorUUID = number | string;

interface BluetoothRequestDeviceFilter {
    services?: BluetoothServiceUUID[];
    name?: string;
    namePrefix?: string;
    manufacturerId?: number;
    serviceDataUUID?: BluetoothServiceUUID;
}

type RequestDeviceOptions = {
    filters: BluetoothRequestDeviceFilter[];
    optionalServices?: BluetoothServiceUUID[];
} | {
    acceptAllDevices: boolean;
    optionalServices?: BluetoothServiceUUID[];
};

type BluetoothManufacturerData = Map<number, DataView>;
type BluetoothServiceData = Map<BluetoothServiceUUID, DataView>;

interface BluetoothDataFilter {
    readonly dataPrefix: DataView;
    readonly mask: DataView;
}

interface BluetoothManufacturerDataFilter {
    readonly [manufacturerId: number]: BluetoothDataFilter;
}

type BluetoothServiceDataFilter = {
    readonly [serviceUUID in BluetoothServiceUUID]: BluetoothDataFilter;
};

interface BluetoothLEScanFilter {
    readonly name?: string;
    readonly namePrefix?: string;
    readonly services?: BluetoothServiceUUID[];
    readonly manufacturerData?: BluetoothManufacturerDataFilter;
    readonly serviceData?: BluetoothServiceDataFilter;
}

interface RequestLEScanOptions {
    readonly filters?: BluetoothLEScanFilter[];
    readonly keepRepeatedDevices?: boolean;
    readonly acceptAllAdvertisements?: boolean;
}

interface BluetoothLEScan extends RequestLEScanOptions {
    active: boolean;
    stop: () => void;
}

interface BluetoothAdvertisementEvent extends Event {
    device: BluetoothDevice;
    rssi: number;
    txPower: number;
    manufacturerData?: BluetoothManufacturerData;
    serviceData?: BluetoothServiceData;
    uuids?: BluetoothServiceUUID[];
}

interface BluetoothRemoteGATTDescriptor {
    readonly characteristic: BluetoothRemoteGATTCharacteristic;
    readonly uuid: string;
    readonly value?: DataView;
    readValue(): Promise<DataView>;
    writeValue(value: BufferSource): Promise<void>;
}

interface BluetoothCharacteristicProperties {
    readonly broadcast: boolean;
    readonly read: boolean;
    readonly writeWithoutResponse: boolean;
    readonly write: boolean;
    readonly notify: boolean;
    readonly indicate: boolean;
    readonly authenticatedSignedWrites: boolean;
    readonly reliableWrite: boolean;
    readonly writableAuxiliaries: boolean;
}

interface CharacteristicEventHandlers {
    oncharacteristicvaluechanged: (this: this, ev: Event) => any;
}

interface BluetoothRemoteGATTCharacteristic extends EventTarget, CharacteristicEventHandlers {
    readonly service?: BluetoothRemoteGATTService;
    readonly uuid: string;
    readonly properties: BluetoothCharacteristicProperties;
    readonly value?: DataView;
    getDescriptor(descriptor: BluetoothDescriptorUUID): Promise<BluetoothRemoteGATTDescriptor>;
    getDescriptors(descriptor?: BluetoothDescriptorUUID): Promise<BluetoothRemoteGATTDescriptor[]>;
    readValue(): Promise<DataView>;
    writeValue(value: BufferSource): Promise<void>;
    writeValueWithResponse(value: BufferSource): Promise<void>;
    writeValueWithoutResponse(value: BufferSource): Promise<void>;
    startNotifications(): Promise<BluetoothRemoteGATTCharacteristic>;
    stopNotifications(): Promise<BluetoothRemoteGATTCharacteristic>;
    addEventListener(type: "characteristicvaluechanged", listener: (this: this, ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

interface ServiceEventHandlers {
    onserviceadded: (this: this, ev: Event) => any;
    onservicechanged: (this: this, ev: Event) => any;
    onserviceremoved: (this: this, ev: Event) => any;
}

interface BluetoothRemoteGATTService extends EventTarget, CharacteristicEventHandlers, ServiceEventHandlers {
    readonly device: BluetoothDevice;
    readonly uuid: string;
    readonly isPrimary: boolean;
    getCharacteristic(characteristic: BluetoothCharacteristicUUID): Promise<BluetoothRemoteGATTCharacteristic>;
    getCharacteristics(characteristic?: BluetoothCharacteristicUUID): Promise<BluetoothRemoteGATTCharacteristic[]>;
    getIncludedService(service: BluetoothServiceUUID): Promise<BluetoothRemoteGATTService>;
    getIncludedServices(service?: BluetoothServiceUUID): Promise<BluetoothRemoteGATTService[]>;
    addEventListener(type: "serviceadded", listener: (this: this, ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "servicechanged", listener: (this: this, ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "serviceremoved", listener: (this: this, ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

interface BluetoothRemoteGATTServer {
    readonly device: BluetoothDevice;
    readonly connected: boolean;
    connect(): Promise<BluetoothRemoteGATTServer>;
    disconnect(): void;
    getPrimaryService(service: BluetoothServiceUUID): Promise<BluetoothRemoteGATTService>;
    getPrimaryServices(service?: BluetoothServiceUUID): Promise<BluetoothRemoteGATTService[]>;
}

interface BluetoothDeviceEventHandlers {
    onadvertisementreceived: (this: this, ev: Event) => any;
    ongattserverdisconnected: (this: this, ev: Event) => any;
}

interface BluetoothDevice extends EventTarget, BluetoothDeviceEventHandlers, CharacteristicEventHandlers, ServiceEventHandlers {
    readonly id: string;
    readonly name?: string;
    readonly gatt?: BluetoothRemoteGATTServer;
    readonly uuids?: string[];
    watchAdvertisements(): Promise<void>;
    unwatchAdvertisements(): void;
    readonly watchingAdvertisements: boolean;
    addEventListener(type: "gattserverdisconnected", listener: (this: this, ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "advertisementreceived", listener: (this: this, ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

interface Bluetooth extends EventTarget, BluetoothDeviceEventHandlers, CharacteristicEventHandlers, ServiceEventHandlers {
    getDevices(): Promise<BluetoothDevice[]>;
    getAvailability(): Promise<boolean>;
    onavailabilitychanged: (this: this, ev: Event) => any;
    readonly referringDevice?: BluetoothDevice;
    requestDevice(options?: RequestDeviceOptions): Promise<BluetoothDevice>;
    requestLEScan(options?: RequestLEScanOptions): Promise<BluetoothLEScan>;
    addEventListener(type: "availabilitychanged", listener: (this: this, ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "advertisementreceived", listener: (this: this, ev: BluetoothAdvertisementEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

interface Navigator {
    bluetooth: Bluetooth;
}
