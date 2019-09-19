// Type definitions for cordova-plugin-ble-central 1.2.2
// Project: https://github.com/don/cordova-plugin-ble-central
// Definitions by: Gidon Junge <https://github.com/gjunge>
//                 Philip Peitsch <https://github.com/peitschie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace BLECentralPlugin {

    interface PeripheralCharacteristic {
        service: string;
        characteristic: string;
        properties: string[];
        descriptors?: any[];
    }

    interface PeripheralData {
        name: string;
        id: string;
        rssi: number
        advertising: ArrayBuffer|any;
    }


    interface PeripheralDataExtended  extends PeripheralData{
            services: string[];
            characteristics: PeripheralCharacteristic[]
    }


    interface BLEError {
      name: string;
      id: string;
      errorMessage: string;
    }


    interface StartScanOptions {
        reportDuplicates?: boolean;
    }

    export interface BLECentralPluginStatic {
        scan(services: string[], seconds: number, success : (data: PeripheralData) => any, failure? : (error: string) => any): void;

        startScan(services: string[], success: (data: PeripheralData) => any, failure?: (error: string|BLEError) => any): void;

        startScanWithOptions(services: string[], options: StartScanOptions, success: (data: PeripheralData) => any, failure?: (error: string) => any): void;

        stopScan(): void;
        stopScan(success: () => any, failure?: () => any): void;

        connect(device_id:string, success: (data: PeripheralDataExtended) => any, failure: (error: string|BLEError) => any): void;

        /* Automatically connect to a device when it is in range of the phone
           [iOS] background notifications on ios must be enabled if you want to run in the background
           [Android] this relies on the autoConnect argument of BluetoothDevice.connectGatt(). Not all Android devices implement this feature correctly. */
        autoConnect(device_id:string, success: (data: PeripheralDataExtended) => any, failure: (error: string|BLEError) => any): void;

        disconnect(device_id:string, success?: () => any, failure?: (error: string|BLEError) => any): void;

        read(device_id: string, service_uuid:string, characteristic_uuid:string, success?: (rawData: ArrayBuffer) => any, failure?: (error: string|BLEError) => any): void;

        write(device_id: string, service_uuid:string, characteristic_uuid:string, data: ArrayBuffer, success?: () => any, failure?: (error: string|BLEError) => any): void;

        /* Writes data to a characteristic without a response from the peripheral. You are not notified if the write fails in the BLE stack.
        The success callback is be called when the characteristic is written.*/
        writeWithoutResponse(device_id: string, service_uuid:string, characteristic_uuid:string, data: ArrayBuffer, success?: () => any, failure?: (error: string) => any): void;

        /* Register to be notified when the value of a characteristic changes. */
        startNotification(device_id: string, service_uuid:string, characteristic_uuid:string, success: (rawData: ArrayBuffer) => any, failure?: (error: string|BLEError) => any): void;

        stopNotification(device_id: string, service_uuid:string, characteristic_uuid:string, success?: () => any, failure?: (error: string|BLEError) => any): void;

        /* Reports if bluetooth is enabled. */
        isEnabled(success: () => any , failure: (error: string) => any): void;

        /* Calls the success callback when the peripheral is connected and the failure callback when not connected. */
        isConnected(device_id: string, success: () => any, failure?: (error: string) => any): void;

        /* May be used to request (on Android) a larger MTU size to be able to send more data at once
           [iOS] requestMtu is not supported on iOS. */
        requestMtu(device_id: string, mtu: number, success?: () => any, failure?: () => any): void;

        /* Clears cached services and characteristics info for some poorly behaved devices. Uses an undocumented API,
        so it is not guaranteed to work.
           [iOS] refreshDeviceCache is not supported on iOS. */
        refreshDeviceCache(device_id: string, timeout_millis: number, success?: (data: PeripheralDataExtended) => any, failure?: (error: string|BLEError) => any): void;

        startStateNotifications(success: (state: string) => any, failure?: (error: string) => any): void;

        stopStateNotifications(success?: () => any, failure?: () => any): void;

        /* Opens the Bluetooth settings for the operating systems.
           [iOS] showBluetoothSettings is not supported on iOS. */
        showBluetoothSettings(success: () => any, failure: () => any): void;

        /* Enable Bluetooth on the device.
           [iOS] enable is not supported on iOS. */
        enable(success: () => any, failure: (error: string) => any): void;

        readRSSI(device_id:string, success: (rssi: number) => any, failure?: (error: string) => any): void;

        /* Find connected peripherals offering the listed service UUIDs.
        This function wraps CBCentralManager.retrieveConnectedPeripheralsWithServices.
           [Android] peripheralsWithIdentifiers is not supported on Android. */
        connectedPeripheralsWithServices(services: string[], success: (data: PeripheralData[]) => any, failure: () => any): void;

        /* Find known (but not necessarily connected) peripherals offering the listed service UUIDs.
        This function wraps CBCentralManager.retrievePeripheralsWithIdentifiers
           [Android] peripheralsWithIdentifiers is not supported on Android. */
        peripheralsWithIdentifiers(services: string[], success: (data: PeripheralData[]) => any, failure: () => any): void;

        /* Find the bonded devices.
           [iOS] bondedDevices is not supported on iOS. */
        bondedDevices(success: (data: PeripheralData[]) => any, failure: () => any): void;
    }
}

declare var ble: BLECentralPlugin.BLECentralPluginStatic;
