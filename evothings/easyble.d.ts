// Type definitions for evothings 1.2
// Project: https://github.com/evothings/evothings-examples/tree/master/resources/libs/evothings
// Definitions by: Tijmen van Gulik <https://github.com/tijmenvangulik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module evothings {

    export module easyble {

        interface FailCallback {
            (errorString:string) :void;
        }

        interface EmptyCallback {
            () :void;
        }

        export module error {


            /**
             * @description BLE device was disconnected.
             */
            export var DISCONNECTED : string;

            /**
             * @description BLE service was not found.
             */
            export var SERVICE_NOT_FOUND : string;

            /**
             * @description BLE characteristic was not found.
             */
            export var CHARACTERISTIC_NOT_FOUND : string;

            /**
             * @description BLE descriptor was not found.
             */
            export var DESCRIPTOR_NOT_FOUND : string;
        }

        /**
         * Set whether to report devices once or continuously during scan.
         * The default is to report continously.
         * @param {boolean} reportOnce - Set to true to report found devices only once.
         * Set to false to report continuously.
         * @public
         */
        export function reportDeviceOnce(reportOnce : boolean);

        /**
         * Set to an Array of UUID strings to enable filtering of devices
         * found by startScan().
         * @param services - Array of UUID strings. Set to false to disable filtering.
         * The default is no filtering. An empty array will cause no devices to be reported.
         * @public
         */
        export function filterDevicesByService(services : string[]);


        /**
         * Start scanning for devices.
         * @param {evothings.easyble.scanCallback} success function called when a device is found.
         * Format: success({@link evothings.easyble.EasyBLEDevice}).
         * @param {evothings.easyble.failCallback} fail - Error callback: fail(error).
         * @public
         * @example
         *   evothings.easyble.startScan(
         *     function(device)
         *     {
	 *       console.log('BLE Found device: ' + device.name);
	 *     },
         *     function(error)
         *     {
	 *       console.log('BLE Scan error: ' + error);
	 *     });
         */
        export function startScan(success : (device : EasyBLEDevice) => void, fail : FailCallback);


        /**
         * Stop scanning for devices.
         * @example
         *   evothings.easyble.stopScan();
         */
        export function stopScan();

        /**
         * Disconnect and close all connected BLE devices.
         * @example
         *   evothings.easyble.closeConnectedDevices();
         */
        export function closeConnectedDevices();




        interface EasyBLEDevice extends ble.DeviceInfo {

            hasName(name:string) : boolean;

            /**
             * Connect to the device.
             * @param {evothings.easyble.connectCallback} success -
             * Called when connected: success(device).
             * @param {evothings.easyble.failCallback} fail -
             * Called on error and if a disconnect happens.
             * Format: error(errorMessage)
             * @public
             * @instance
             * @example
             *   device.connect(
             *     function(device)
             *     {
		 *       console.log('BLE device connected.');
		 *       // TODO: Read services here.
		 *     },
             *     function(errorCode)
             *     {
		 *       console.log('BLE connect error: ' + errorCode);
		 *     });
             */
            connect(success:(device:EasyBLEDevice)=>void, fail:FailCallback);

            /**
             * Close the device. This disconnects from the BLE device.
             * @public
             * @instance
             * @example
             * device.close();
             */
            close();

            /**
             * Read devices RSSI. DeviceInfo must be connected.
             * @param {evothings.easyble.rssiCallback} success - Called with RSSI value: success(rssi).
             * @param {evothings.easyble.failCallback} fail - Called on error: fail(error).
             * @public
             * @instance
             */
            readRSSI(success:(rssi:number)=>void, fail:FailCallback);

            /**
             * Read services, characteristics and descriptors for the
             * specified service UUIDs.
             * <strong>Services must be read be able to access characteristics and
             * descriptors</strong>. Call this function before reading and writing
             * characteristics/descriptors.
             * @param serviceUUIDs - array of UUID strings, if null all
             * services are read (this can be time-consuming compared to
             * reading selected services).
             * @param {evothings.easyble.servicesCallback} success -
             * Called when services are read: success(device).
             * @param {evothings.easyble.failCallback} fail - error callback: error(errorMessage)
             * @public
             * @instance
             * @example
             *   device.readServices(
             *     null, // Read all services
             *     function(device)
             *     {
		 *       console.log('BLE Services available.');
		 *       // TODO: Read/write/enable notifications here.
		 *     },
             *     function(errorCode)
             *     {
		 *       console.log('BLE readServices error: ' + errorCode);
		 *     });
             */
            readServices(serviceUUIDs:string[], success:(device:EasyBLEDevice)=>void, fail:FailCallback);

            /**
             * Read value of characteristic.
             * @param {string} characteristicUUID - UUID of characteristic to read.
             * @param {evothings.easyble.dataCallback} success - Success callback: success(data).
             * @param {evothings.easyble.failCallback} fail - Error callback: fail(error).
             * @public
             * @instance
             * @example
             *   device.readCharacteristic(
             *     characteristicUUID,
             *     function(data)
             *     {
		 *       console.log('BLE characteristic data: ' + evothings.ble.fromUtf8(data));
		 *     },
             *     function(errorCode)
             *     {
		 *       console.log('BLE readCharacteristic error: ' + errorCode);
		 *     });
             * @public
             * @instance
             */
            readCharacteristic(characteristicUUID:string, success:(data:ArrayBuffer) =>void, fail:FailCallback);

            /**
             * Read value of a specific characteristic.
             * @param {string} serviceUUID - UUID of service in which the characteristic is found.
             * @param {string} characteristicUUID - UUID of characteristic to read.
             * @param {evothings.easyble.dataCallback} success - Success callback: success(data).
             * @param {evothings.easyble.failCallback} fail - Error callback: fail(error).
             * @public
             * @instance
             * @example
             *   device.readServiceCharacteristic(
             *     serviceUUID,
             *     characteristicUUID,
             *     function(data)
             *     {
		*       console.log('BLE characteristic data: ' + evothings.ble.fromUtf8(data));
		*     },
             *     function(errorCode)
             *     {
		*       console.log('BLE readServiceCharacteristic error: ' + errorCode);
		*     });
             */
            readServiceCharacteristic(serviceUUID:string, characteristicUUID:string, success:(data:ArrayBuffer) =>void, fail:FailCallback);

            /**
             * Read value of descriptor.
             * @param {string} characteristicUUID - UUID of characteristic for descriptor.
             * @param {string} descriptorUUID - UUID of descriptor to read.
             * @param {evothings.easyble.dataCallback} success - Success callback: success(data).
             * @param {evothings.easyble.failCallback} fail - Error callback: fail(error).
             * @public
             * @instance
             * @example
             *   device.readDescriptor(
             *     characteristicUUID,
             *     descriptorUUID,
             *     function(data)
             *     {
		 *       console.log('BLE descriptor data: ' + evothings.ble.fromUtf8(data));
		 *     },
             *     function(errorCode)
             *     {
		 *       console.log('BLE readDescriptor error: ' + errorCode);
		 *     });
             */
            readDescriptor(characteristicUUID:string, descriptorUUID:string, success:(data:ArrayBuffer) =>void, fail:FailCallback);

            /**
             * Read value of a specific descriptor.
             * @param {string} serviceUUID - UUID of service in which the characteristic is found.
             * @param {string} characteristicUUID - UUID of characteristic for descriptor.
             * @param {string} descriptorUUID - UUID of descriptor to read.
             * @param {evothings.easyble.dataCallback} success - Success callback: success(data).
             * @param {evothings.easyble.failCallback} fail - Error callback: fail(error).
             * @public
             * @instance
             * @example
             *   device.readServiceDescriptor(
             *     serviceUUID,
             *     characteristicUUID,
             *     descriptorUUID,
             *     function(data)
             *     {
		*       console.log('BLE descriptor data: ' + evothings.ble.fromUtf8(data));
		*     },
             *     function(errorCode)
             *     {
		*       console.log('BLE readServiceDescriptor error: ' + errorCode);
		*     });
             */
            readServiceDescriptor(serviceUUID:string, characteristicUUID:string, descriptorUUID:string,  success:(data:ArrayBuffer) =>void, fail : FailCallback)

            /**
             * Write value of characteristic.
             * @param {string} characteristicUUID - UUID of characteristic to write to.
             * @param {ArrayBufferView} value - Value to write.
             * @param {evothings.easyble.emptyCallback} success - Success callback: success().
             * @param {evothings.easyble.failCallback} fail - Error callback: fail(error).
             * @public
             * @instance
             * @example
             *   device.writeDescriptor(
             *     characteristicUUID,
             *     new Uint8Array([1]), // Write byte with value 1.
             *     function()
             *     {
		 *       console.log('BLE characteristic written.');
		 *     },
             *     function(errorCode)
             *     {
		 *       console.log('BLE writeDescriptor error: ' + errorCode);
		 *     });
             */
            writeCharacteristic(characteristicUUID:string, data:ArrayBufferView, success:EmptyCallback, fail:FailCallback);

            /**
             * Write value of a specific characteristic.
             * @param {string} serviceUUID - UUID of service in which the characteristic is found.
             * @param {string} characteristicUUID - UUID of characteristic to write to.
             * @param {ArrayBufferView} value - Value to write.
             * @param {evothings.easyble.emptyCallback} success - Success callback: success().
             * @param {evothings.easyble.failCallback} fail - Error callback: fail(error).
             * @public
             * @instance
             * @example
             *   device.writeServiceCharacteristic(
             *     serviceUUID,
             *     characteristicUUID,
             *     new Uint8Array([1]), // Write byte with value 1.
             *     function()
             *     {
		*       console.log('BLE characteristic written.');
		*     },
             *     function(errorCode)
             *     {
		*       console.log('BLE writeServiceCharacteristic error: ' + errorCode);
		*     });
             */
            writeServiceCharacteristic(serviceUUID:string, characteristicUUID:string, value:ArrayBufferView, success:EmptyCallback, fail:FailCallback);

            /**
             * Write value of descriptor.
             * @param {string} characteristicUUID - UUID of characteristic for descriptor.
             * @param {string} descriptorUUID - UUID of descriptor to write to.
             * @param {ArrayBufferView} value - Value to write.
             * @param {evothings.easyble.emptyCallback} success - Success callback: success().
             * @param {evothings.easyble.failCallback} fail - Error callback: fail(error).
             * @public
             * @instance
             * @example
             *   device.writeDescriptor(
             *     characteristicUUID,
             *     descriptorUUID,
             *     new Uint8Array([1]), // Write byte with value 1.
             *     function()
             *     {
		 *       console.log('BLE descriptor written.');
		 *     },
             *     function(errorCode)
             *     {
		 *       console.log('BLE writeDescriptor error: ' + errorCode);
		 *     });
             */
            writeDescriptor(characteristicUUID:string, descriptorUUID:string, value:ArrayBufferView, success:EmptyCallback, fail:FailCallback);

            /**
             * Write value of a specific descriptor.
             * @param {string} serviceUUID - UUID of service in which the characteristic is found.
             * @param {string} characteristicUUID - UUID of characteristic for descriptor.
             * @param {string} descriptorUUID - UUID of descriptor to write to.
             * @param {ArrayBufferView} value - Value to write.
             * @param {evothings.easyble.emptyCallback} success - Success callback: success().
             * @param {evothings.easyble.failCallback} fail - Error callback: fail(error).
             * @public
             * @instance
             * @example
             *   device.writeServiceDescriptor(
             *     serviceUUID,
             *     characteristicUUID,
             *     descriptorUUID,
             *     new Uint8Array([1]), // Write byte with value 1.
             *     function()
             *     {
		*       console.log('BLE descriptor written.');
		*     },
             *     function(errorCode)
             *     {
		*       console.log('BLE writeServiceDescriptor error: ' + errorCode);
		*     });
             */
            writeServiceDescriptor(serviceUUID:string, characteristicUUID:string, descriptorUUID:string,value:ArrayBufferView, success:EmptyCallback, fail:FailCallback)

            /**
             * Subscribe to characteristic value updates. The success function
             * will be called repeatedly whenever there is new data available.
             * @param {string} characteristicUUID - UUID of characteristic to subscribe to.
             * @param {evothings.easyble.dataCallback} success - Success callback: success(data).
             * @param {evothings.easyble.failCallback} fail - Error callback: fail(error).
             * @public
             * @instance
             * @example
             * device.enableNotification(
             *   characteristicUUID,
             *   function(data)
             *   {
		 *     console.log('BLE characteristic data: ' + evothings.ble.fromUtf8(data));
		 *   },
             *   function(errorCode)
             *   {
		 *     console.log('BLE enableNotification error: ' + errorCode);
		 *   });
             */
            enableNotification(characteristicUUID:string, success:(data:ArrayBuffer) =>void, fail:FailCallback);

            enableServiceNotification(serviceUUID :string, characteristicUUID:string, success:(data:ArrayBuffer) =>void, fail:FailCallback);

            /**
             * Unsubscribe from characteristic updates to stop notifications.
             * @param characteristicUUID - UUID of characteristic to unsubscribe from
             * @param {evothings.easyble.emptyCallback} success - Success callback: success()
             * @param {evothings.easyble.failCallback} fail - Error callback: fail(error)
             * @public
             * @instance
             * @example
             *  device.disableNotification(
             *    characteristicUUID,
             *    function()
             *    {
		 *      console.log('BLE characteristic notification disabled');
		 *    },
             *    function(errorCode)
             *    {
		 *      console.log('BLE disableNotification error: ' + errorCode);
		 *    });
             */
            disableNotification(characteristicUUID:string, success:EmptyCallback, fail:FailCallback);

            disableServiceNotification(serviceUUID:string, characteristicUUID:string, success:EmptyCallback, fail:FailCallback)

        }


        /**
         * Reset the BLE hardware. Can be time consuming.
         * @public
         */
        export function reset();
    }
}
