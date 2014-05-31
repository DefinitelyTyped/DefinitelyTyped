// Type definitions for BufferList v0.8.0
// Project: https://github.com/rvagg/bl
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'bl' {
	import stream = require('stream');

	class BufferList  extends stream.Duplex {
		new (callback?:(err:Error, buffer:Buffer) => void): void;

		append(buffer: Buffer):void;
		get(index: number): number;
		slice(start?: number, end?: number): Buffer;
		copy(dest: Buffer, destStart?: number, srcStart?: number, srcEnd?: number): void;
		duplicate(): BufferList;
		consume(bytes?: number): void;
		toString(encoding?: string, start?: number, end?: number): string;
		length: number;

		readDoubleBE(offset: number, noAssert?: boolean): Buffer;
		readDoubleLE(offset: number, noAssert?: boolean): Buffer;
		readFloatBE(offset: number, noAssert?: boolean): Buffer;
		readFloatLE(offset: number, noAssert?: boolean): Buffer;
		readInt32BE(offset: number, noAssert?: boolean): Buffer;
		readInt32LE(offset: number, noAssert?: boolean): Buffer;
		readUInt32BE(offset: number, noAssert?: boolean): Buffer;
		readUInt32LE(offset: number, noAssert?: boolean): Buffer;
		readInt16BE(offset: number, noAssert?: boolean): Buffer;
		readInt16LE(offset: number, noAssert?: boolean): Buffer;
		readUInt16BE(offset: number, noAssert?: boolean): Buffer;
		readUInt16LE(offset: number, noAssert?: boolean): Buffer;
		readInt8(offset: number, noAssert?: boolean): Buffer;
		readUInt8(offset: number, noAssert?: boolean): Buffer;
	}

	export = BufferList;
}
