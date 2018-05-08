// Type definitions for serialport 6.0
// Project: https://github.com/EmergingTechnologyAdvisors/node-serialport
// Definitions by: Jeremy Foster <https://github.com/codefoster>
//                 Andrew Pearson <https://github.com/apearson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as Stream from 'stream';

declare class SerialPort extends Stream.Duplex {
	constructor(path: string, callback?: SerialPort.ErrorCallback);
	constructor(path: string, options?: SerialPort.OpenOptions, callback?: SerialPort.ErrorCallback);

	open(callback?: SerialPort.ErrorCallback): void;
	update(options: SerialPort.UpdateOptions, callback?: SerialPort.ErrorCallback): void;

	write(data: string| number[] | Buffer, callback?: (error: any, bytesWritten: number) => void): boolean;
	write(buffer: string| number[] | Buffer, encoding?: 'ascii'|'utf8'|'utf16le'|'ucs2'|'base64'|'binary'|'hex', callback?: (error: any, bytesWritten: number) => void): boolean;

	read(size?: number): string | Buffer | null;

	close(callback?: (error: Error) => void): void;

	set(options: SerialPort.SetOptions, callback?: SerialPort.ErrorCallback): void;
	get(callback?: SerialPort.ModemBitsCallback): void;

	flush(callback?: SerialPort.ErrorCallback): void;
	drain(callback?: SerialPort.ErrorCallback): void;

	pause(): this;
	resume(): this;

	on(event: string, callback?: (data?: any) => void): this;

	static Binding: SerialPort.BaseBinding;

	static list(): Promise<any>;
}

declare namespace SerialPort {
	// Callbacks Type Defs
	type ErrorCallback = (error: Error) => void;
	type ModemBitsCallback = (error: Error, status: {cts: boolean, dsr: boolean, dcd: boolean }) => void;
	type ListCallback = (error: Error, port: any[]) => void;

	// Options Type Defs
	interface OpenOptions {
		autoOpen?: boolean;
		baudRate?: 115200|57600|38400|19200|9600|4800|2400|1800|1200|600|300|200|150|134|110|75|50|number;
		dataBits?: 8|7|6|5;
		highWaterMark?: number;
		lock?: boolean;
		stopBits?: 1|2;
		parity?: 'none'|'even'|'mark'|'odd'|'space';
		rtscts?: boolean;
		xon?: boolean;
		xoff?: boolean;
		xany?: boolean;
		binding?: BaseBinding;
		bindingOptions?: {
			vmin?: number;
			vtime?: number;
		};
	}
	interface UpdateOptions {
		baudRate?: 115200|57600|38400|19200|9600|4800|2400|1800|1200|600|300|200|150|134|110|75|50|number;
	}
	interface SetOptions {
		brk?: boolean;
		cts?: boolean;
		dsr?: boolean;
		dtr?: boolean;
		rts?: boolean;
	}

	namespace parsers {
		class ByteLength extends Stream.Transform {
			constructor(options: {length: number});
		}
		class CCTalk extends Stream.Transform {
			constructor();
		}
		class Delimiter extends Stream.Transform {
			constructor(options: {delimiter: string | Buffer | number[]});
		}
		class Readline extends Delimiter {
			constructor(options: {delimiter: string | Buffer | number[], encoding?: 'ascii'|'utf8'|'utf16le'|'ucs2'|'base64'|'binary'|'hex'});
		}
		class Ready extends Stream.Transform {
			constructor(options: {data: string | Buffer | number[]});
		}
		class Regex extends Stream.Transform {
			constructor(options: {regex: RegExp});
		}
	}

		// Binding Type Defs
		type win32Binding = BaseBinding;
		type darwinBinding = BaseBinding;
		type linuxBinding = BaseBinding;

		// Binding Type Def
		class BaseBinding {
			constructor(options: any);

			open(path: string, options: OpenOptions): Promise<any>;
			close(): Promise<any>;

			read(data: Buffer, offset: number, length: number): Promise<any>;
			write(data: Buffer): Promise<any>;
			update(options?: UpdateOptions): Promise<any>;
			set(options?: SetOptions): Promise<any>;
			get(): Promise<any>;
			flush(): Promise<any>;
			drain(): Promise<any>;
			static list(): Promise<any>;
		}
}

export = SerialPort;
