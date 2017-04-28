// Type definitions for serialport 4.0
// Project: https://github.com/EmergingTechnologyAdvisors/node-serialport
// Definitions by: Jeremy Foster <https://github.com/codefoster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="streamjs" />

export = SerialPort;

declare class SerialPort extends Stream<any> {
	// openImmediately already removed in 4.0.7
	constructor(path: string, options?: SerialPort.options|SerialPort.callback, callback?: SerialPort.callback);
	isOpen(): boolean;
	on(event: string, callback?: (data?: any) => void): void;
	open(callback?: SerialPort.callback): void;
	write(buffer: any, callback?: (err: any, bytesWritten: number) => void): void;
	pause(): void;
	resume(): void;
	disconnected(err: Error): void;
	close(callback?: SerialPort.callback): void;
	flush(callback?: SerialPort.callback): void;
	set(options: SerialPort.setOptions, callback: SerialPort.callback): void;
	drain(callback?: SerialPort.callback): void;
	update(options: SerialPort.updateOptions, callback?: SerialPort.callback): void;
	static list(callback: (err: any, ports: SerialPort.portConfig[]) => void): void;
	// https://github.com/EmergingTechnologyAdvisors/node-serialport/blob/4.0.7/lib/parsers.js
	static parsers: SerialPort.parsers;
}

declare namespace SerialPort {
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

	type serialParser = (emitter: NodeJS.EventEmitter, buffer: Buffer|string) => void;

	type readlineParser = (delimiter: string, encoding?: 'ascii'|'utf8'|'utf16le'|'ucs2'|'base64'|'binary'|'hex') => serialParser;

	type byteLengthParser = (delimiter: number) => serialParser;

	type byteDelimiterParser = (delimiter: number[]) => serialParser;

	type callback = (error: any) => void;

	interface parsers {
		raw: serialParser;
		readline: readlineParser;
		byteLength: byteLengthParser;
		byteDelimiter: byteDelimiterParser;
	}

	// https://github.com/EmergingTechnologyAdvisors/node-serialport/blob/4.0.7/README.md#user-content-serialport-path-options-opencallback
	interface options {
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
