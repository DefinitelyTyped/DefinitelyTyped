/*
* Copyright (c) 2022 Richard Lea
*
*   This file is part of the Moddable SDK Tools.
*
*   The Moddable SDK Tools is free software: you can redistribute it and/or modify
*   it under the terms of the GNU General Public License as published by
*   the Free Software Foundation, either version 3 of the License, or
*   (at your option) any later version.
*
*   The Moddable SDK Tools is distributed in the hope that it will be useful,
*   but WITHOUT ANY WARRANTY; without even the implied warranty of
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*   GNU General Public License for more details.
*
*   You should have received a copy of the GNU General Public License
*   along with the Moddable SDK Tools.  If not, see <http://www.gnu.org/licenses/>.
*
*/

type ManufacturerSpec = {
    /**
     * The `identifier` property is a number corresponding to the
     * _Company Identifier Code_.
     */
    identifier: string | number,

    /**
     * The `data` property is an array of numbers corresponding
     * to additional manufacturer specific data.
     */
    data: number[],
};

declare module "bleclient" {

    import { GAP } from "gap";
    import { Client, Characteristic } from "gatt";
    import { IOCapability } from "sm";

    type gapScanFilterPolicies =
        typeof GAP.ScanFilterPolicy.NONE |
        typeof GAP.ScanFilterPolicy.NOT_RESOLVED_DIRECTED |
        typeof GAP.ScanFilterPolicy.WHITELIST |
        typeof GAP.ScanFilterPolicy.WHITELIST_NOT_RESOLVED_DIRECTED;

    /**
     * The `BLEClient` class provides access to the BLE client features.
     */
    export class BLEClient {

        securityParameters: {
            encryption?: boolean,
            bonding?: boolean,
            mitm?: boolean,
            ioCapability?: IOCapability,
        };

        /**
         * Applications must wait for the `onReady` callback before calling
         * other `BLEClient` functions
         */
        onReady(): void;

        /**
         * The `startScanning` function enables scanning for nearby peripherals.
         *
         * @param params If params is not provided, the default scan properties are used.
         * @url https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/network/ble/ble.md#startscanningparams
         */
        startScanning(params?: {
            active: boolean,
            duplicates: boolean,
            filterPolicy: gapScanFilterPolicies,
            interval: number,
            window: number,
        }): void;

        /**
         * Called when one or more times for each peripheral device discovered.
         * @param device
         * @url https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/network/ble/ble.md#ondiscovereddevice
         */
        onDiscovered(device: Client): void;

        /**
         * Disables scanning for nearby peripherals.
         */
        stopScanning(): void;

        /**
         * Initiates a connection request between the `BLEClient` and a target peripheral `device`.
         * @param device
         */
        connect(device: Client): void;

        onConnected(device: Client): void;

        onDisconnected(): void;

        onCharacteristicNotification(characteristic: Characteristic, buffer: number[]): void;
    }

    export { BLEClient as default };
}

declare module "bleserver" {

    import { GAP } from "gap";
    import { Bytes } from "btutils";
    import { Characteristic, Client } from "gatt";
    import { IOCapability } from "sm";

    type gapScanFilterPolicies =
        typeof GAP.ScanFilterPolicy.NONE |
        typeof GAP.ScanFilterPolicy.NOT_RESOLVED_DIRECTED |
        typeof GAP.ScanFilterPolicy.WHITELIST |
        typeof GAP.ScanFilterPolicy.WHITELIST_NOT_RESOLVED_DIRECTED;

    type AdvertisementData = {

        /**
         * The advertised flags value.
         */
        flags?: number;
        /**
         * Array of UUID objects corresponding to _Incomplete List
         * of 16 bit Service UUIDs_
         */
        incompleteUUID16List?: Bytes[],

        /**
         * Array of UUID objects corresponding to _Complete List of
         * 16 bit Service UUIDs_
         */
        completeUUID16List?: Bytes[],

        /**
         * Array of UUID objects corresponding to _Incomplete List of
         * 128 bit Service UUIDs_
         */
        incompleteUUID128List?: Bytes[],

        /**
         * Array of UUID objects corresponding to _Complete List of
         * 128 bit Service UUIDs_
         */
        completeUUID128List?: Bytes[],

        /**
         * String corresponding to the _Shortened Local Name_.
         */
        shortName?: string,

        /**
         * String corresponding to the _Complete Local Name_.
         */
        completeName?: string,

        /**
         * Object corresponding to the _Manufacturer Specific Data_.
         */
        manufacturerSpecific?: ManufacturerSpec,

        /**
         * Number corresponding to the TX Power Level.
         */
        txPowerLevel?: number,

        /**
         * Object corresponding to the _Slave Connection Interval Range_.
         */
        connectionInterval?: {
            /**
             * A number corresponding to the minimum connection interval value.
             */
            intervalMin: number,

            /**
             * A number corresponding to the maximum connection interval value.
             */
            intervalMax: number,
        },

        /**
         * Array of UUID objects corresponding to the _List of 16 bit Service
         * Solicitation UUIDs_.
         */
        solicitationUUID16List?: Bytes[],

        /**
         * Array of UUID objects corresponding to the _List of 128 bit Service
         * Solicitation UUIDs_.
         */
        solicitationUUID128List?: Bytes[],

        /**
         * Object corresponding to the _Service Data - 16 bit UUID_.
         */
        serviceDataUUID16?: {
            /**
             * An object corresponding to the 16-bit Service UUID.
             */
            uuid: Bytes,

            /**
             * An array of numbers corresponding to additional service data.
             */
            data: number[],
        },

        /**
         * Object corresponding to the _Service Data - 128 bit UUID_.
         */
        serviceDataUUID128?: {
            /**
             * An object corresponding to the 128-bit Service UUID.
             */
            uuid: Bytes,

            /**
             * An array of numbers corresponding to additional service data.
             */
            data: number[],
        },

        /**
         * Number corresponding to the _Appearance_.
         */
        appearance?: number,

        /**
         * Address object corresponding to the _Public Target Address_.
         */
        publicAddress?: Bytes,

        /**
         * Address object corresponding to the _Random Target Address_.
         */
        randomAddress?: Bytes,

        /**
         * Number corresponding to the _Advertising Interval_.
         */
        advertisingInterval?: number,

        /**
         * Number corresponding to the _LE Role_.
         */
        role?: number,

        /**
         * String corresponding to the _Uniform Resource Identifier_.
         */
        uri?: string,
    };

    /**
     * Provides access to the BLE server features.
     */
    export class BLEServer {

        /**
         * Configures the device security requirements and I/O capabilities.
         */
        set securityParameters(params: {
            encryption?: boolean,
            bonding?: boolean,
            mitm?: boolean,
            ioCapability?: IOCapability,
        });

        /**
         * set/get the Bluetooth peripheral device name.
         */
        deviceName: string;

        /**
         * The Bluetooth peripheral's local address as a
         * `Bytes` object.
         *
         * @url https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/network/ble/ble.md#localaddress
         */
        readonly localAddress: Bytes;

        /**
         * Applications must wait for the `onReady` callback
         * before calling other `BLEServer` functions.
         */
        onReady(): void;

        /**
         * Starts broadcasting advertisement and scan response packets.
         * The function is also used to configure discoverable and connectable modes.
         *
         * @param params
         * @url https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/network/ble/ble.md#startadvertisingparams
         */
        startAdvertising(params: {
            advertisingData: AdvertisementData,
            connectable?: boolean,
            discoverable?: boolean,
            fast?: boolean,
            filterPolicy?: gapScanFilterPolicies,
            scanResponseData?: any,
        }): void;

        /**
         * Stops broadcasting Bluetooth advertisements.
         *
         * @url https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/network/ble/ble.md#stopadvertising
         */
        stopAdvertising(): void;

        /**
         * Send a characteristic value change notification to the connected client.
         *
         * @param characteristic
         * @param value
         * @url https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/network/ble/ble.md#notifyvaluecharacteristic-value
         */
        notifyValue(characteristic: Characteristic, value: any): void;

        /**
         * Called when a client enables notifications on the `characteristic`.
         *
         * @param characteristic
         */
        onCharacteristicNotifyEnabled(characteristic: Characteristic): void;

        /**
         * Called when a client writes a service characteristic value on demand.
         *
         * @param characteristic
         * @param value
         * @url https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/network/ble/ble.md#oncharacteristicwrittencharacteristic-value
         */
        onCharacteristicWritten(characteristic: Characteristic, value: any): void;

        /**
         * Called when a client reads a service characteristic value on demand.
         *
         * @param characteristic
         * @url https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/network/ble/ble.md#oncharacteristicreadcharacteristic
         */
        onCharacteristicRead(characteristic: Characteristic): Uint8Array | number[] | number | void;

        /**
         * Terminate the BLE client connection.
         */
        disconnect(): void;

        /**
         * Called when a client connects to the `BLEServer`.
         *
         * @param device
         * @url https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/network/ble/ble.md#ondisconnecteddevice-1
         */
        onConnected(device: Client): void;

        /**
         * Called when the client connection is closed.
         *
         * @param device
         */
        onDisconnected(device: Client): void;

        /**
         * Terminate any BLE client connection and release all BLE resources.
         */
        close(): void;
    }

    export { BLEServer as default };
}

declare module "btutils" {

    export interface Bytes extends ArrayBuffer {
        /**
         * The `equals` function returns `true` if the instance
         * ArrayBuffer data equals the data contained in `buffer`.
         *
         * @param bytes
         * @url https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/network/ble/ble.md#equalsbuffer
         */
        equals(bytes: Bytes): boolean;
    }

    /**
     * Provides Accessor functions to read common advertisement and
     * scan response data types as JavaScript properties.
     *
     * @url https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/network/ble/ble.md#class-advertisement
     */
    export interface Advertisement {

        /**
         * Contains the raw advertisement data bytes.
         */
        buffer: ArrayBuffer;

        /**
         * The advertised complete local name.
         */
        completeName: string;

        /**
         * The advertised shortened local name.
         */
        shortName: string;

        /**
         * An object containing the advertised manufacturer specific data.
         */
        manufacturerSpecific: ManufacturerSpec;

        /**
         * The advertised flags value.
         */
        flags: number;

        /**
         * The advertised complete 16-bit UUID list.
         */
        completeUUID16List: Array<string | number>;

        /**
         * The advertised incomplete 16-bit UUID list.
         */
        incompleteUUID16List: Array<string | number>;
    }

    /**
     * Convert a Bluetooth UUID expressed as a hex string to a `Bytes` instance.
     * @param strings
     */
    export function uuid(...strings: string[]): Bytes;

    /**
     * Convert a Bluetooth address expressed as a hex string to a `Bytes` instance.
     * @param strings
     */
    export function address(...strings: string[]): Bytes;
}

declare module "gatt" {

    import { Bytes, Advertisement } from "btutils";
    import { GAP } from "gap";

    type getAddressType = (typeof GAP.AddressType);

    export interface Client {
        connection: number;
        address: Bytes;
        addressType: getAddressType;
        scanResponse: Advertisement;
        rssi: number;

        /**
         * Read the connected peripheral's signal strength.
         *
         * @url https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/network/ble/ble.md#readrssi
         */
        readRSSI(): void;

        /**
         * Discover a single GATT primary service by UUID.
         *
         * @param uuid
         */
        discoverPrimaryService(uuid: Bytes): void;

        /**
         * Discover all the peripheral's GATT primary services.
         * Discovered services are returned to the `onServices` callback.
         */
        discoverAllPrimaryServices(): void;

        /**
         * Finds and returns the service identified by `uuid`.
         *
         * @param uuid
         */
        findServiceByUUID(uuid: Bytes): void;

        /**
         * Called when service discovery completes.
         * If `findServiceByUUID` was called to find a single service,
         * the `services` array contains the single service found.
         *
         * @param services
         */
        onServices(services: Service[]): void;

        /**
         * Terminates the peripheral function.
         */
        close(): void;
    }

    /**
     * A single Peripheral GATT service.
     */
    export interface Service {
        connection: number;
        uuid: Bytes;
        start: number;
        end: number;
        characteristics: Characteristic[];

        /**
         * Discover all the service characteristics. Discovered characteristics
         * are returned to the `onCharacteristics` callback.
         */
        discoverAllCharacteristics(): void;

        /**
         * Discover a single service characteristic by UUID.
         *
         * @param uuid
         * @url https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/network/ble/ble.md#discovercharacteristicuuid
         */
        discoverCharacteristic(uuid: Bytes): void;

        /**
         * Called when characteristic discovery completes.
         * If `findCharacteristicByUUID` was called to find a single characteristic,
         * the `characteristics` array contains the single characteristic found.
         *
         * @param characteristics
         */
        onCharacteristics(characteristics: Characteristic[]): void;
    }

    /**
     * A single service Characteristic.
     *
     * @url https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/network/ble/ble.md#class-characteristic
     */
    export interface Characteristic {
        connection: number;
        uuid: Bytes;
        service: Service;
        handle: number;
        name: string;
        type: string;
        descriptors: Descriptor[];

        /**
         * Discover all the characteristic's descriptors.
         * Discovered descriptors are returned to the `onDescriptors` callback.
         */
        discoverAllDescriptors(): void;

        /**
         * Called when descriptor discovery completes.
         *
         * @param descriptors
         */
        onDescriptors(descriptors: Descriptor[]): void;

        /**
         * Enable characteristic value change notifications.
         *
         * @url https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/network/ble/ble.md#enablenotifications
         */
        disableNotifications(): void;
    }

    /**
     * A single Characteristic descriptor.
     *
     * @url https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/network/ble/ble.md#class-descriptor
     */
    export interface Descriptor {
        connection: number;
        uuid: string;
        characteristic: Characteristic;
        handle: number;
        name: string;
        type: string;

        /**
         * Read a descriptor value on demand.
         *
         * @param auth
         * @url https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/network/ble/ble.md#readvalueauth-1
         */
        readValue(auth?: number): void;
    }
}

declare module "connection" {
    export class Connection {
        disconnect(): void;
    }
}

declare module "gap" {

    enum gapAddressTypes {
        PUBLIC = 0,
        RANDOM = 1,
        RPA_PUBLIC = 2,
        RPA_RANDOM = 3,
    }

    export const GAP: {
        readonly SCAN_FAST_INTERVAL: 0x0030,    // TGAP(scan_fast_interval) 30ms to 60ms
        readonly SCAN_FAST_WINDOW: 0x0030,    // TGAP(scan_fast_window)    30ms
        readonly SCAN_SLOW_INTERVAL1: 0x0800,    // TGAP(scan_slow_interval1)  1.28s
        readonly SCAN_SLOW_WINDOW1: 0x0012,      // TGAP(scan_slow_window1)    11.25ms
        readonly SCAN_SLOW_INTERVAL2: 0x1000,    // TGAP(scan_slow_interval2)  2.56s
        readonly SCAN_SLOW_WINDOW2: 0x0024,      // TGAP(scan_slow_window2)    22.5ms
        readonly ADV_FAST_INTERVAL1: {           // TGAP(adv_fast_interval1)    30ms to 60ms
            min: 0x0030,
            max: 0x0060
        },
        readonly ADV_FAST_INTERVAL2: {           // TGAP(adv_fast_interval2)    100ms to 150ms
            min: 0x00A0,
            max: 0x00F0,
        },
        readonly ADV_SLOW_INTERVAL: {           // TGAP(adv_slow_interval)    1s to 1.2s
            min: 0x0640,
            max: 0x0780,
        },
        readonly ADType: {
            /* Service UUID */
            INCOMPLETE_UUID16_LIST: 0x02,
            COMPLETE_UUID16_LIST: 0x03,
            INCOMPLETE_UUID128_LIST: 0x06,
            COMPLETE_UUID128_LIST: 0x07,
            /* Local Name */
            SHORTENED_LOCAL_NAME: 0x08,
            COMPLETE_LOCAL_NAME: 0x09,
            /* Flags */
            FLAGS: 0x01,
            /* Manufacturer Specific Data */
            MANUFACTURER_SPECIFIC_DATA: 0xFF,
            /* TX Power Level */
            TX_POWER_LEVEL: 0x0A,
            SLAVE_CONNECTION_INTERVAL_RANGE: 0x12,
            /* Service Solicitation */
            SOLICITATION_UUID16_LIST: 0x14,
            SOLICITATION_UUID128_LIST: 0x15,
            /* Service Data */
            SERVICE_DATA_UUID16: 0x16,
            SERVICE_DATA_UUID128: 0x21,
            /* Appearance */
            APPEARANCE: 0x19,
            /* Public Target Address */
            PUBLIC_TARGET_ADDRESS: 0x17,
            /* Random Target Address */
            RANDOM_TARGET_ADDRESS: 0x18,
            /* Advertising Interval */
            ADVERTISING_INTERVAL: 0x1A,
            /* LE Bluetooth Device Address */
            LE_BLUETOOTH_DEVICE_ADDRESS: 0x1B,
            /* LE Role */
            LE_ROLE: 0x1C,
            /* URI */
            URI: 0x24,
        },
        MAX_AD_LENGTH: 31,
        ADFlag: {
            LE_LIMITED_DISCOVERABLE_MODE: 0x01,
            LE_GENERAL_DISCOVERABLE_MODE: 0x02,
            NO_BR_EDR: 0x04,
            LE_BR_EDR_CONTROLLER: 0x08,
            LE_BR_EDR_HOST: 0x10,
        },
        AddressType: typeof gapAddressTypes,
        ScanFilterPolicy: {
            NONE: 0,
            WHITELIST: 1,
            NOT_RESOLVED_DIRECTED: 2,
            WHITELIST_NOT_RESOLVED_DIRECTED: 3,
        },
        AdvFilterPolicy: {
            NONE: 0,
            WHITELIST_SCANS: 1,
            WHITELIST_CONNECTIONS: 2,
            WHITELIST_SCANS_CONNECTIONS: 3
        },
    };
    export { GAP as default };
}

declare module "sm" {

    import { GAP } from "gap";

    type getAddressType = (typeof GAP.AddressType);

    /**
     * @url https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/network/ble/ble.md#class-sm
     */
    export enum IOCapability {
        NoInputNoOutput = 0,
        DisplayOnly = 1,
        KeyboardOnly = 2,
        KeyboardDisplay = 3,
        DisplayYesNo = 4,
    }

    /**
     * Provides objects used to configure BLE client and server security requirements
     * and device capabilities.
     */
    export class SM {


        /**
         * Delete all bonding information and encryption keys
         * from persistent storage.
         *
         * https://github.com/Moddable-OpenSource/moddable/blob/public/documentation/network/ble/ble.md#deleteallbondings
         */
        static deleteAllBondings(): void;

        /**
         * Delete stored bonding information for the peer device with the provided
         * `address` and `addressType`.
         *
         * @param address Contains peer device Bluetooth address
         * @param addressType Peer device Bluetooth address type.
         */
        static deleteBonding(address: ArrayBuffer, addressType: getAddressType): void;
    }
}
