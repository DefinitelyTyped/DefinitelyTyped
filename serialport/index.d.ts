// Type definitions for serialport 4.0
// Project: https://github.com/EmergingTechnologyAdvisors/node-serialport
// Definitions by: Jeremy Foster <https://github.com/codefoster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'serialport' {
    class SerialPort {
        //openImmediately already removed in 4.0.7
        constructor(path: string, options?: Object, callback?: (err: any) => void)
        isOpen(): boolean;
        on(event: string, callback?: (data?: any) => void): void;
        open(callback?: (err: any) => void): void;
        write(buffer: any, callback?: (err: any, bytesWritten: number) => void): void
        pause(): void;
        resume(): void;
        disconnected(err: Error): void;
        close(callback?: (err: any) => void): void;
        flush(callback?: (err: any) => void): void;
        set(options: SerialPort.setOptions, callback: (err: any) => void): void;
        drain(callback?: (err: any) => void): void;
        update(options: SerialPort.updateOptions, callback?: (err: any) => void): void;
        static list(callback: (err: any, ports: SerialPort.portConfig[]) => void): void;
        static parsers: {
            readline: (delimiter: string) => void,
            raw: (emitter: any, buffer: string) => void
        };
    }

    namespace SerialPort {
        interface portConfig {
            comName: string;
            manufacturer: string;
            serialNumber: string;
            pnpId: string;
            locationId: string;
            vendorId: string;
            productId: string;
        }

        interface setOptions {
            brk?: boolean;
            cts?: boolean;
            dsr?: boolean;
            dtr?: boolean;
            rts?: boolean;
        }

        interface updateOptions {
            baudRate?: number;
        }
    }

    export = SerialPort;
}
