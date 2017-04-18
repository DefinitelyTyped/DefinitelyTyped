// Type definitions for evothings 1.2
// Project: https://github.com/evothings/evothings-examples/tree/master/resources/libs/evothings
// Definitions by: Tijmen van Gulik <https://github.com/tijmenvangulik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module evothings {

    export module ble {

        /** Information extracted from a scanRecord. Some or all of the fields may be undefined. This varies between BLE devices.
         * Depending on OS version and BLE device, additional fields, not documented here, may be present.
         * @typedef {Object} AdvertisementData
         * @property {string} kCBAdvDataLocalName - The device's name. Equal to DeviceInfo.name.
         * @property {number} kCBAdvDataChannel - A positive integer, the BLE channel on which the device listens for connections. Ignore this number.
         * @property {boolean} kCBAdvDataIsConnectable - True if the device accepts connections. False if it doesn't.
         * @property {array} kCBAdvDataServiceUUIDs - Array of strings, the UUIDs of services advertised by the device. Formatted according to RFC 4122, all lowercase.
         * @property {string} kCBAdvDataManufacturerData - Base-64-encoded binary data. This field is used by BLE devices to advertise custom data that don't fit into any of the other fields.
         */
        interface AdvertisementData {
            kCBAdvDataLocalName : string;
            kCBAdvDataChannel : number;
            kCBAdvDataIsConnectable : boolean;
            kCBAdvDataServiceUUIDs : string[];
            kCBAdvDataManufacturerData : string;
        }

        interface TranslationList {[index: number] : string
        }

        /** Info about a BLE device.
         * @typedef {Object} DeviceInfo
         //* @property {string} address - Has the form xx:xx:xx:xx:xx:xx, where x are hexadecimal characters.
         * @property {string} address - Uniquely identifies the device. Pass this to connect().
         * The form of the address depends on the host platform.
         * @property {number} rssi - A negative integer, the signal strength in decibels.
         * @property {string} name - The device's name, or nil.
         * @property {string} scanRecord - Base64-encoded binary data. Its meaning is device-specific. Not available on iOS.
         * @property {AdvertisementData} advertisementData - Object containing some of the data from the scanRecord. Available natively on iOS. Available on Android by parsing the scanRecord, which is implemented in the library {@link https://github.com/evothings/evothings-examples/tree/master/resources/libs/evothings/easyble|easyble.js}.
         */
        interface DeviceInfo {
            address : string;
            rssi : number;
            name : string;
            scanRecord : string;
            advertisementData : AdvertisementData;
        }

        interface FailCallback {
            (errorString:string) :void;
        }

        interface EmptyCallback {
            () :void;
        }

        enum ConnectionState  {
            STATE_DISCONNECTED,
            STATE_CONNECTING,
            STATE_CONNECTED,
            STATE_DISCONNECTING,
        }

        /** Info about connection events and state.
         * @typedef {Object} ConnectInfo
         * @property {number} deviceHandle - Handle to the device. Save it for other function calls.
         * @property {number} state - One of the {@link connectionState} keys.
         */
        interface ConnectInfo {
            deviceHandle : number;
            state : ConnectionState;
        }
        enum ServiceType  {
            SERVICE_TYPE_PRIMARY,
            SERVICE_TYPE_SECONDARY
        }

        enum WriteType {
            WRITE_TYPE_NO_RESPONSE = 1,
            WRITE_TYPE_DEFAULT = 2,
            WRITE_TYPE_SIGNED = 4,
        }

        enum Permission {
            PERMISSION_READ = 1,
            PERMISSION_READ_ENCRYPTED = 2,
            PERMISSION_READ_ENCRYPTED_MITM = 4,
            PERMISSION_WRITE = 16,
            PERMISSION_WRITE_ENCRYPTED = 32,
            PERMISSION_WRITE_ENCRYPTED_MITM = 64,
            PERMISSION_WRITE_SIGNED = 128,
            PERMISSION_WRITE_SIGNED_MITM = 256,
        }


        /** Describes a GATT service.
         * @typedef {Object} Service
         * @property {number} handle
         * @property {string} uuid - Formatted according to RFC 4122, all lowercase.
         * @property {serviceType} type
         */
        interface Service {
            handle : number;
            uuid : string;
            type : ServiceType;
        }
        /** Describes a GATT descriptor.
         * @typedef {Object} Descriptor
         * @property {number} handle
         * @property {string} uuid - Formatted according to RFC 4122, all lowercase.
         * @property {permission} permissions - Bitmask of zero or more permission flags.
         *
         */
        interface Descriptor {
            handle : number;
            uuid : string;
            permission : number;

        }
        /** Describes a GATT characteristic.
         * @typedef {Object} Characteristic
         * @property {number} handle
         * @property {string} uuid - Formatted according to RFC 4122, all lowercase.
         * @property {permission} permissions - Bitmask of zero or more permission flags.
         * @property {property} properties - Bitmask of zero or more property flags.
         * @property {writeType} writeType
         */
        interface Characteristic {
            handle : number;
            uuid : string;
            permission : number;
            properties : number;
            writeType : WriteType;
        }
        interface CharacteristicExtended extends Characteristic {
            descriptors : Descriptor[];
        }
        interface ServiceExtended extends Service {
            characteristics : CharacteristicExtended[];
        }
        /**
         * @callback serviceCallback
         * @param {Array} services - Array of {@link Service} objects.
         */


        interface ServiceCallback {
            (services:Service[]) : void
        }
        /** @module com.evothings.ble */

        /** Starts scanning for devices.
         * <p>Found devices and errors will be reported to the supplied callbacks.</p>
         * <p>Will keep scanning indefinitely until you call stopScan().</p>
         * To conserve energy, call stopScan() as soon as you've found the device you're looking for.
         * <p>Calling this function while scanning is in progress has no effect?</p>
         *
         * @param {scanCallback} win
         * @param {failCallback} fail
         *
         * @example
         evothings.ble.startScan(
         function(device)
         {
            console.log('BLE startScan found device named: ' + device.name);
        },
         function(errorCode)
         {
            console.log('BLE startScan error: ' + errorCode);
        }
         );
         */
        export function startScan(win:(device:DeviceInfo) => void, fail:FailCallback);

        /** This function is a parameter to startScan() and is called when a new device is discovered.
         * @callback scanCallback
         * @param {DeviceInfo} device
         */


        /** This function is called when an operation fails.
         * @callback failCallback
         * @param {string} errorString - A human-readable string that describes the error that occurred.
         */

        /** Stops scanning for devices.
         *
         * @example
         evothings.ble.stopScan();
         */

        export function stopScan();

        /** Connect to a remote device.
         * @param {string} address - From scanCallback.
         * @param {connectCallback} win
         * @param {failCallback} fail
         * @example
         evothings.ble.connect(
         address,
         function(info)
         {
            console.log('BLE connect status for device: '
                + info.deviceHandle
                + ' state: '
                + info.state);
        },
         function(errorCode)
         {
            console.log('BLE connect error: ' + errorCode);
        }
         );
         */
        export function connect(address:string, win:(info:ConnectInfo) =>void, fail:FailCallback);

        /** Will be called whenever the device's connection state changes.
         * @callback connectCallback
         * @param {ConnectInfo} info
         */

        /** Info about connection events and state.
         * @typedef {Object} ConnectInfo
         * @property {number} deviceHandle - Handle to the device. Save it for other function calls.
         * @property {number} state - One of the {@link connectionState} keys.
         */

        /** A number-string map describing possible connection states.
         * @global
         * @readonly
         * @enum {string}
         */
        /*
         interface ConnectionState  {
         0: 'STATE_DISCONNECTED';
         1: 'STATE_CONNECTING';
         2: 'STATE_CONNECTED';
         3: 'STATE_DISCONNECTING';
         };

         */

        export var connectionState:TranslationList;

        /** Close the connection to a remote device.
         * <p>Frees any native resources associated with the device.
         * <p>Does not cause any callbacks to the function passed to connect().

         * @param {number} deviceHandle - A handle from {@link connectCallback}.
         * @example
         evothings.ble.close(deviceHandle);
         */
        export function close(deviceHandle);

        /** Fetch the remote device's RSSI (signal strength).
         * @param {number} deviceHandle - A handle from {@link connectCallback}.
         * @param {rssiCallback} win
         * @param {failCallback} fail
         * @example
         evothings.ble.rssi(
         deviceHandle,
         function(rssi)
         {
            console.log('BLE rssi: ' + rssi);
        },
         function(errorCode)
         {
            console.log('BLE rssi error: ' + errorCode);
        }
         );
         */
        export function rssi(deviceHandle:number, win, fail:FailCallback);

        /** This function is called with an RSSI value.
         * @callback rssiCallback
         * @param {number} rssi - A negative integer, the signal strength in decibels.
         */

        /** Fetch information about a remote device's services.
         * @param {number} deviceHandle - A handle from {@link connectCallback}.
         * @param {serviceCallback} win - Called with array of {@link Service} objects.
         * @param {failCallback} fail
         * @example
         evothings.ble.services(
         deviceHandle,
         function(services)
         {
            for (var i = 0; i < services.length; i++)
            {
                var service = services[i];
                console.log('BLE service: ');
                console.log('  ' + service.handle);
                console.log('  ' + service.uuid);
                console.log('  ' + service.serviceType);
            }
        },
         function(errorCode)
         {
            console.log('BLE services error: ' + errorCode);
        });
         */
        export function services(deviceHandle:number, win:ServiceCallback, fail:FailCallback) ;


        /** A number-string map describing possible service types.
         * @global
         * @readonly
         * @enum {string}
         */

        /*

         serviceType =  {
         0: 'SERVICE_TYPE_PRIMARY',
         1: 'SERVICE_TYPE_SECONDARY',
         };

         */
        export var serviceType:TranslationList;

        /** Fetch information about a service's characteristics.
         * @param {number} deviceHandle - A handle from {@link connectCallback}.
         * @param {number} serviceHandle - A handle from {@link serviceCallback}.
         * @param {characteristicCallback} win - Called with array of {@link Characteristic} objects.
         * @param {failCallback} fail
         * @example
         evothings.ble.characteristics(
         deviceHandle,
         service.handle,
         function(characteristics)
         {
            for (var i = 0; i < characteristics.length; i++)
            {
                var characteristic = characteristics[i];
                console.log('BLE characteristic: ' + characteristic.uuid);
            }
        },
         function(errorCode)
         {
            console.log('BLE characteristics error: ' + errorCode);
        });
         */
        export function characteristics(deviceHandle:number, serviceHandle : number, win, fail:FailCallback);

        /**
         * @callback characteristicCallback
         * @param {Array} characteristics - Array of {@link Characteristic} objects.
         */

        /** Describes a GATT characteristic.
         * @typedef {Object} Characteristic
         * @property {number} handle
         * @property {string} uuid - Formatted according to RFC 4122, all lowercase.
         * @property {permission} permissions - Bitmask of zero or more permission flags.
         * @property {property} properties - Bitmask of zero or more property flags.
         * @property {writeType} writeType
         */

        /** A number-string map describing possible permission flags.
         * @global
         * @readonly
         * @enum {string}
         */
        /*
         permission = {
         1: 'PERMISSION_READ',
         2: 'PERMISSION_READ_ENCRYPTED',
         4: 'PERMISSION_READ_ENCRYPTED_MITM',
         16: 'PERMISSION_WRITE',
         32: 'PERMISSION_WRITE_ENCRYPTED',
         64: 'PERMISSION_WRITE_ENCRYPTED_MITM',
         128: 'PERMISSION_WRITE_SIGNED',
         256: 'PERMISSION_WRITE_SIGNED_MITM',
         }

         */
        export var permission:TranslationList;

        /** A number-string map describing possible property flags.
         * @global
         * @readonly
         * @enum {string}
         */
        /*
         interface Property = {
         1: 'PROPERTY_BROADCAST',
         2: 'PROPERTY_READ',
         4: 'PROPERTY_WRITE_NO_RESPONSE',
         8: 'PROPERTY_WRITE',
         16: 'PROPERTY_NOTIFY',
         32: 'PROPERTY_INDICATE',
         64: 'PROPERTY_SIGNED_WRITE',
         128: 'PROPERTY_EXTENDED_PROPS',
         };
         */
        export var property:TranslationList;


        /** A number-string map describing possible write types.
         * @global
         * @readonly
         * @enum {string}
         */

        export var writeType:TranslationList;

        /** Fetch information about a characteristic's descriptors.
         * @param {number} deviceHandle - A handle from {@link connectCallback}.
         * @param {number} characteristicHandle - A handle from {@link characteristicCallback}.
         * @param {descriptorCallback} win - Called with array of {@link Descriptor} objects.
         * @param {failCallback} fail
         * @example
         evothings.ble.descriptors(
         deviceHandle,
         characteristic.handle,
         function(descriptors)
         {
            for (var i = 0; i < descriptors.length; i++)
            {
                var descriptor = descriptors[i];
                console.log('BLE descriptor: ' + descriptor.uuid);
            }
        },
         function(errorCode)
         {
            console.log('BLE descriptors error: ' + errorCode);
        });
         */
        export function descriptors(deviceHandle:number, characteristicHandle:number, win, fail:FailCallback);

        /**
         * @callback descriptorCallback
         * @param {Array} descriptors - Array of {@link Descriptor} objects.
         */


// TODO: What is read* ?
// read*: fetch and return value in one op.
// values should be cached on the JS side, if at all.

        /**
         * @callback dataCallback
         * @param {ArrayBuffer} data
         */

        /** Reads a characteristic's value from a remote device.
         * @param {number} deviceHandle - A handle from {@link connectCallback}.
         * @param {number} characteristicHandle - A handle from {@link characteristicCallback}.
         * @param {dataCallback} win
         * @param {failCallback} fail
         * @example
         evothings.ble.readCharacteristic(
         deviceHandle,
         characteristic.handle,
         function(data)
         {
            console.log('BLE characteristic data: ' + evothings.ble.fromUtf8(data));
        },
         function(errorCode)
         {
            console.log('BLE readCharacteristic error: ' + errorCode);
        });
         */
        export function readCharacteristic(deviceHandle:number, characteristicHandle:number, win:(data:ArrayBuffer) =>void, fail:FailCallback);

        /** Reads a descriptor's value from a remote device.
         * @param {number} deviceHandle - A handle from {@link connectCallback}.
         * @param {number} descriptorHandle - A handle from {@link descriptorCallback}.
         * @param {dataCallback} win
         * @param {failCallback} fail
         * @example
         evothings.ble.readDescriptor(
         deviceHandle,
         descriptor.handle,
         function(data)
         {
            console.log('BLE descriptor data: ' + evothings.ble.fromUtf8(data));
        },
         function(errorCode)
         {
            console.log('BLE readDescriptor error: ' + errorCode);
        });
         */
        export function readDescriptor(deviceHandle:number, descriptorHandle:number, win:(data:ArrayBuffer) =>void, fail:FailCallback);

        /**
         * @callback emptyCallback - Callback that takes no parameters.
         This callback indicates that an operation was successful,
         without specifying and additional information.
         */

        /** Write a characteristic's value to the remote device.
         * @param {number} deviceHandle - A handle from {@link connectCallback}.
         * @param {number} characteristicHandle - A handle from {@link characteristicCallback}.
         * @param {ArrayBufferView} data - The value to be written.
         * @param {emptyCallback} win
         * @param {failCallback} fail
         * @example TODO: Add example.
         */
        export function writeCharacteristic(deviceHandle:number, characteristicHandle:number, data:ArrayBufferView, win:EmptyCallback, fail:FailCallback) ;

        /** Write a descriptor's value to a remote device.
         * @param {number} deviceHandle - A handle from {@link connectCallback}.
         * @param {number} descriptorHandle - A handle from {@link descriptorCallback}.
         * @param {ArrayBufferView} data - The value to be written.
         * @param {emptyCallback} win
         * @param {failCallback} fail
         * @example TODO: Add example.
         */
        export function writeDescriptor(deviceHandle:number, descriptorHandle:number, data:ArrayBufferView, win:EmptyCallback, fail:FailCallback)

        /** Request notification on changes to a characteristic's value.
         * This is more efficient than polling the value using readCharacteristic().
         *
         * <p>To activate notifications,
         * some (all?) devices require you to write a special value to a separate configuration characteristic,
         * in addition to calling this function.
         * Refer to your device's documentation.
         *
         * @param {number} deviceHandle - A handle from {@link connectCallback}.
         * @param {number} characteristicHandle - A handle from {@link characteristicCallback}.
         * @param {dataCallback} win - Called every time the value changes.
         * @param {failCallback} fail
         * @example
         evothings.ble.enableNotification(
         deviceHandle,
         characteristic.handle,
         function(data)
         {
            console.log('BLE characteristic data: ' + evothings.ble.fromUtf8(data));
        },
         function(errorCode)
         {
            console.log('BLE enableNotification error: ' + errorCode);
        });
         */
        export function enableNotification(deviceHandle:number, characteristicHandle:number, win:(data:ArrayBuffer) =>void, fail:FailCallback);

        /** Disable notification of changes to a characteristic's value.
         * @param {number} deviceHandle - A handle from {@link connectCallback}.
         * @param {number} characteristicHandle - A handle from {@link characteristicCallback}.
         * @param {emptyCallback} win
         * @param {failCallback} fail
         * @example
         evothings.ble.disableNotification(
         deviceHandle,
         characteristic.handle,
         function()
         {
            console.log('BLE characteristic notification disabled');
        },
         function(errorCode)
         {
            console.log('BLE disableNotification error: ' + errorCode);
        });
         */
        export function disableNotification(deviceHandle:number, characteristicHandle:number, win:EmptyCallback, fail);

        /** i is an integer. It is converted to byte and put in an array[1].
         * The array is returned.
         * <p>assert(string.charCodeAt(0) == i).
         *
         * @param {number} i
         * @param {dataCallback} win - Called every time the value changes.
         */
        export function testCharConversion(i:number, win:(data:ArrayBuffer) =>void);

        /** Resets the device's Bluetooth system.
         * This is useful on some buggy devices where BLE functions stops responding until reset.
         * Available on Android 4.3+. This function takes 3-5 seconds to reset BLE.
         * On iOS this function stops any ongoing scan operation and disconnects
         * all connected devices.
         *
         * @param {emptyCallback} win
         * @param {failCallback} fail
         */
        export function reset(win:EmptyCallback, fail:FailCallback);

        /** Converts an ArrayBuffer containing UTF-8 data to a JavaScript String.
         * @param {ArrayBuffer} a
         * @returns string
         */
        export function fromUtf8(a:ArrayBuffer):string;

        /** Converts a JavaScript String to an Uint8Array containing UTF-8 data.
         * @param {string} s
         * @returns Uint8Array
         */
        export function toUtf8(s:string):Uint8Array;


        /** Fetch information about a remote device's services,
         * as well as its associated characteristics and descriptors.
         *
         * This function is an easy-to-use wrapper of the low-level functions
         * ble.services(), ble.characteristics() and ble.descriptors().
         *
         * @param {number} deviceHandle - A handle from {@link connectCallback}.
         * @param {serviceCallback} win - Called with array of {@link Service} objects.
         * Those Service objects each have an additional field "characteristics", which is an array of {@link Characteristic} objects.
         * Those Characteristic objects each have an additional field "descriptors", which is an array of {@link Descriptor} objects.
         * @param {failCallback} fail
         */
        export function readAllServiceData(deviceHandle:number, win:(services:ServiceExtended[])=>void, fail:FailCallback);

    }
}
