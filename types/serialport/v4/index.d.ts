// Type definitions for serialport 4.0
// Project: https://github.com/EmergingTechnologyAdvisors/node-serialport
// Definitions by: Jeremy Foster <https://github.com/codefoster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="streamjs" />

export = SerialPort;

declare class SerialPort extends Stream<any> {
    // openImmediately already removed in 4.0.7
    constructor(path: string, options?: SerialPort.Options|SerialPort.callback, callback?: SerialPort.callback);
    isOpen(): boolean;
    on(event: string, callback?: (data?: any) => void): void;
    open(callback?: SerialPort.callback): void;
    write(buffer: any, callback?: (err: any, bytesWritten: number) => void): void;
    pause(): void;
    resume(): void;
    disconnected(err: Error): void;
    close(callback?: SerialPort.callback): void;
    flush(callback?: SerialPort.callback): void;
    set(options: SerialPort.SetOptions, callback: SerialPort.callback): void;
    drain(callback?: SerialPort.callback): void;
    update(options: SerialPort.UpdateOptions, callback?: SerialPort.callback): void;
    static list(callback: (err: any, ports: SerialPort.PortConfig[]) => void): void;
    // https://github.com/EmergingTechnologyAdvisors/node-serialport/blob/4.0.7/lib/parsers.js
    static parsers: SerialPort.Parsers;
}

declare namespace SerialPort {
    interface PortConfig {
        comName: string;
        manufacturer: string;
        serialNumber: string;
        pnpId: string;
        locationId: string;
        vendorId: string;
        productId: string;
    }

    interface SetOptions {
        brk?: boolean;
        cts?: boolean;
        dsr?: boolean;
        dtr?: boolean;
        rts?: boolean;
    }

    interface UpdateOptions {
        baudRate?: number;
    }

    type serialParser = (emitter: NodeJS.EventEmitter, buffer: Buffer|string) => void;

    type readlineParser = (delimiter: string, encoding?: 'ascii'|'utf8'|'utf16le'|'ucs2'|'base64'|'binary'|'hex') => serialParser;

    type byteLengthParser = (delimiter: number) => serialParser;

    type byteDelimiterParser = (delimiter: number[]) => serialParser;

    type callback = (error: any) => void;

    interface Parsers {
        Raw: serialParser;
        Readline: readlineParser;
        ByteLength: byteLengthParser;
        ByteDelimiter: byteDelimiterParser;
    }

    // https://github.com/EmergingTechnologyAdvisors/node-serialport/blob/4.0.7/README.md#user-content-serialport-path-options-opencallback
    interface Options {
        autoOpen?: boolean;
        lock?: boolean;
        baudRate?: 115200|57600|38400|19200|9600|4800|2400|1800|1200|600|300|200|150|134|110|75|50|number;
        dataBits?: 8|7|6|5;
        stopBits?: 1|2;
        parity?: 'none'|'even'|'mark'|'odd'|'space';
        rtscts?: boolean;
        xon?: boolean;
        xoff?: boolean;
        bufferSize?: number;
        parser?: serialParser;
        platformOptions?: {
            vmin?: number;
            vtime?: number;
        };
    }
}
