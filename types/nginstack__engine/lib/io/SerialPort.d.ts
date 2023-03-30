export = SerialPort;
declare function SerialPort(
    port: number,
    baudRate?: number,
    dataBits?: number,
    stopBits?: number,
    parityBits?: string,
    flowControl?: string
): void;
declare class SerialPort {
    constructor(
        port: number,
        baudRate?: number,
        dataBits?: number,
        stopBits?: number,
        parityBits?: string,
        flowControl?: string
    );
    toString(): void;
    read(maxLen: number): string;
    write(buffer: string): number;
    writeln(buffer: string): number;
    clear(): void;
    close(): void;
    portName: string;
    baudRate: number;
    dataBits: number;
    stopBits: number;
    parityBits: string;
    flowControl: string;
    outDsrFlow: boolean;
    dsrSensitivity: boolean;
    dtr: boolean;
    xOnChar: string;
    xOffChar: string;
    replaceCharOnParityError: boolean;
    parityErrorChar: string;
    readIntervalTimeout: number;
    readTotalTimeoutMultiplier: number;
    readTotalTimeoutConstant: number;
    writeTotalTimeoutMultiplier: number;
    writeTotalTimeoutConstant: number;
}
declare namespace SerialPort {
    export { getAvailablePorts, logAvailablePorts, Logger, SerialPortInfo };
}
declare function getAvailablePorts(): SerialPortInfo[];
declare function logAvailablePorts(opt_logger?: Logger): void;
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
