export = SerialPort;
declare function SerialPort(
    port: number | string,
    baudRate?: number,
    dataBits?: number,
    stopBits?: number,
    parityBits?: string,
    flowControl?: string
): void;
declare class SerialPort {
    constructor(
        port: number | string,
        baudRate?: number,
        dataBits?: number,
        stopBits?: number,
        parityBits?: string,
        flowControl?: string
    );
    portName: string;
    baudRate: number;
    dataBits: number;
    stopBits: number;
    parityBits: string;
    flowControl: string;
    readTimeout: number;
    writeTimeout: number;
    readIntervalTimeout: number;
    readTotalTimeoutMultiplier: number;
    readTotalTimeoutConstant: number;
    writeTotalTimeoutMultiplier: number;
    writeTotalTimeoutConstant: number;
    read(maxLen: number): string;
    write(buffer: string | ArrayBuffer | Uint8Array): void;
    writeln(buffer: string | ArrayBuffer | Uint8Array): void;
    clear(): void;
    close(): void;
    getCTS(): boolean;
    setRTS(state: boolean): void;
    getDSR(): boolean;
    setDTR(state: boolean): void;
}
declare namespace SerialPort {
    export { getAvailablePorts, logAvailablePorts, Logger, SerialPortInfo };
}
declare function getAvailablePorts(): SerialPortInfo[];
declare function logAvailablePorts(logger?: Logger): void;
type Logger = import('../log/Logger');
interface SerialPortInfo {
    manufacturer: string;
    description: string;
    portName: string;
    systemLocation: string;
    isBusy: boolean;
    productIdentifier: number;
    vendorIdentifier: number;
    serialNumber: string;
}
