/**
 * Global object bluetoothClassicSerial.
 */
interface Window {
    BluetoothClassicSerial: BluetoothClassicSerial;
}

interface BluetoothClassicSerial {
    connect: (
        deviceId: string,
        interfaceArray: [any],
        success_cb?: (results: any) => any,
        fail_cb?: (error: any) => any,
    ) => void;
    connectInsecure: (
        deviceId: string,
        interfaceArray: [any],
        success_cb?: (results: any) => any,
        fail_cb?: (error: any) => any,
    ) => void;
    register: (data_cb?: () => any) => void;
    disconnect: (
        success_cb?: (results: any) => any,
        fail_cb?: (error: any) => any,
    ) => void;
    write: (
        interfaceId: string,
        data: string,
        success_cb?: (results: any) => any,
        fail_cb?: (error: any) => any,
    ) => void;
    available: (
        interfaceId: string,
        success_cb?: (results: any) => any,
        fail_cb?: (error: any) => any,
    ) => void;
    read: (
        interfaceId: string,
        success_cb?: (results: any) => any,
        fail_cb?: (error: any) => any,
    ) => void;
    readUntil: (
        interfaceId: string,
        delimiter: string,
        success_cb?: (results: any) => any,
        fail_cb?: (error: any) => any,
    ) => void;
    subscribe: (
        interfaceId: string,
        delimiter: string,
        success_cb?: (results: any) => any,
        fail_cb?: (error: any) => any,
    ) => void;
    unsubscribe: (
        interfaceId: string,
        success_cb?: (results: any) => any,
        fail_cb?: (error: any) => any,
    ) => void;
    subscribeRawData: (
        interfaceId: string,
        success_cb?: (results: any) => any,
        fail_cb?: (error: any) => any,
    ) => void;
    unsubscribeRawData: (
        interfaceId: string,
        success_cb?: (results: any) => any,
        fail_cb?: (error: any) => any,
    ) => void;
    clear: (
        interfaceId: string,
        success_cb?: (results: any) => any,
        fail_cb?: (error: any) => any,
    ) => void;
    list: (
        success_cb?: (results: any) => any,
        fail_cb?: (error: any) => any,
    ) => void;
    isConnected: (
        success_cb?: (results: any) => any,
        fail_cb?: (error: any) => any,
    ) => void;
    isEnabled: (
        success_cb?: (results: any) => any,
        fail_cb?: (error: any) => any,
    ) => void;
    showBluetoothSettings: (
        success_cb?: (results: any) => any,
        fail_cb?: (error: any) => any,
    ) => void;
    enable: (
        success_cb?: (results: any) => any,
        fail_cb?: (error: any) => any,
    ) => void;
    discoverUnpaired: (
        success_cb?: (results: any) => any,
        fail_cb?: (error: any) => any,
    ) => void;
}

declare var bluetoothClassicSerial: BluetoothClassicSerial;
