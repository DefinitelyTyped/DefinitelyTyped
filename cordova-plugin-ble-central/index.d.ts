// Type definitions for cordova-plugin-ble-central 1.1.2
// Project: https://github.com/don/cordova-plugin-ble-central
// Definitions by: Gidon Junge <https://github.com/gjunge>
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

  


    interface StartScanOptions {
        reportDuplicates?: boolean;
    }

    export interface BLECentralPluginStatic {
        scan(services: string[], seconds: number, success : (data: PeripheralData) => any): void;
        scan(services: string[], seconds: number, success : (data: PeripheralData) => any, failure : () => any): void;
        
        startScan(services: string[], success: (data: PeripheralData) => any): void;
        startScan(services: string[], success: (data: PeripheralData) => any, failure: () => any): void;

        startScanWithOptions(services: string[], options: StartScanOptions, success: (data: PeripheralData) => any): void;
        startScanWithOptions(services: string[], options: StartScanOptions, success: (data: PeripheralData) => any, failure: () => any): void;

        stopScan(): void;
        stopScan(success: () => any): void;
        stopScan(success: () => any, failure: () => any): void;
        
        connect(device_id:string, success: (data: PeripheralDataExtended) => any, failure: () => any): void;

        disconnect(device_id:string): void;
        disconnect(device_id:string, success: () => any): void;
        disconnect(device_id:string, success: () => any, failure: () => any): void;

        read(device_id: string, service_uuid:string, characteristic_uuid:string): void;
        read(device_id: string, service_uuid:string, characteristic_uuid:string, success: (rawData: ArrayBuffer) => any): void;
        read(device_id: string, service_uuid:string, characteristic_uuid:string, success: (rawData: ArrayBuffer) => any, failure: () => any): void;

        write(device_id: string, service_uuid:string, characteristic_uuid:string, data: ArrayBuffer): void;
        write(device_id: string, service_uuid:string, characteristic_uuid:string, data: ArrayBuffer, success  : () => any): void;
        write(device_id: string, service_uuid:string, characteristic_uuid:string, data: ArrayBuffer, success  : () => any, failure: () => any): void;

        /* Writes data to a characteristic without a response from the peripheral. You are not notified if the write fails in the BLE stack. 
        The success callback is be called when the characteristic is written.*/
        writeWithoutResponse(device_id: string, service_uuid:string, characteristic_uuid:string, data: ArrayBuffer): void;
        writeWithoutResponse(device_id: string, service_uuid:string, characteristic_uuid:string, data: ArrayBuffer, success : () => any): void;
        writeWithoutResponse(device_id: string, service_uuid:string, characteristic_uuid:string, data: ArrayBuffer, success : () => any, failure: () => any): void;

        /* Register to be notified when the value of a characteristic changes. */
        startNotification(device_id: string, service_uuid:string, characteristic_uuid:string, success: (rawData: ArrayBuffer) => any): void;
        startNotification(device_id: string, service_uuid:string, characteristic_uuid:string, success: (rawData: ArrayBuffer) => any, failure: () => any): void;
        
        stopNotification(device_id: string, service_uuid:string, characteristic_uuid:string): void;
        stopNotification(device_id: string, service_uuid:string, characteristic_uuid:string, success: () => any): void;
        stopNotification(device_id: string, service_uuid:string, characteristic_uuid:string, success: () => any, failure: () => any): void;

        /* Reports if bluetooth is enabled. */
        isEnabled(success: () => any , failure: () => any): void;

        /* Calls the success callback when the peripheral is connected and the failure callback when not connected. */
        isConnected(device_id: string, success: () => any): void;
        isConnected(device_id: string, success: () => any, failure: () => any): void;

        startStateNotifications(success: (state: string) => any): void;
        startStateNotifications(success: (state: string) => any, failure: () => any): void;

        stopStateNotifications(): void;
        stopStateNotifications(success: () => any): void;
        stopStateNotifications(success: () => any, failure: () => any): void;
        
        /* Opens the Bluetooth settings for the operating systems.
           [iOS] showBluetoothSettings is not supported on iOS. */
        showBluetoothSettings(): void;
        showBluetoothSettings(success: () => any): void;
        showBluetoothSettings(success: () => any, failure: () => any): void;
        
        /* Enable Bluetooth on the device.
           [iOS] enable is not supported on iOS. */
        enable(success: () => any, failure: () => any): void;
        

        readRSSI(device_id:string, success: (rssi: number) => any): void;
        readRSSI(device_id:string, success: (rssi: number) => any, failure: () => any): void;
    }
}

declare var ble: BLECentralPlugin.BLECentralPluginStatic;