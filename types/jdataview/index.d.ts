// Type definitions for jDataView
// Project: https://github.com/jDataView/jDataView
// Definitions by: Ingvar Stepanyan <https://github.com/RReverser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare class jDataView implements DataView {
	constructor(byteCount: number, offset?: number, length?: number, littleEndian?: boolean)
	constructor(buffer: string, offset?: number, length?: number, littleEndian?: boolean)
	constructor(buffer: jDataView.Bytes, offset?: number, length?: number, littleEndian?: boolean)
	buffer: any
	byteOffset: number
	byteLength: number

	// 64 bit integers
	getInt64(byteOffset?: number, littleEndian?: boolean): jDataView.Int64
	setInt64(byteOffset: number, value: jDataView.Int64, littleEndian?: boolean): void
	writeInt64(value: jDataView.Int64, littleEndian?: boolean): void
	getUint64(byteOffset?: number, littleEndian?: boolean): jDataView.Uint64
	setUint64(byteOffset: number, value: jDataView.Uint64, littleEndian?: boolean): void
	writeUint64(value: jDataView.Uint64, littleEndian?: boolean): void

	// Bitfields
	getSigned(bitLength: number, byteOffset?: number): number
	setSigned(byteOffset: number, value: number, bitLength: number): void
	writeSigned(value: number, bitLength: number): void
	getUnsigned(bitLength: number, byteOffset?: number): number
	setUnsigned(byteOffset: number, value: number, bitLength: number): void
	writeUnsigned(value: number, bitLength: number): void

	// Internal utilities
	wrapBuffer(string: string): jDataView.Buffer
	wrapBuffer(bytes: jDataView.Bytes): jDataView.Buffer
	wrapBuffer(byteCount: number): jDataView.Buffer
	createBuffer(...bytes: number[]): jDataView.Buffer

	// Operation control
	seek(byteOffset: number): number
	tell(): number
	skip(byteLength: number): number
	slice(start: number, end?: number, forceCopy?: boolean): jDataView

	// Specification getters
	getInt8(byteOffset?: number): number
	getUint8(byteOffset?: number): number
	getInt16(byteOffset?: number, littleEndian?: boolean): number
	getUint16(byteOffset?: number, littleEndian?: boolean): number
	getInt32(byteOffset?: number, littleEndian?: boolean): number
	getUint32(byteOffset?: number, littleEndian?: boolean): number
	getFloat32(byteOffset?: number, littleEndian?: boolean): number
	getFloat64(byteOffset?: number, littleEndian?: boolean): number

	// Specification setters
	setInt8(byteOffset: number, value: number): void
	setUint8(byteOffset: number, value: number): void
	setInt16(byteOffset: number, value: number, littleEndian?: boolean): void
	setUint16(byteOffset: number, value: number, littleEndian?: boolean): void
	setInt32(byteOffset: number, value: number, littleEndian?: boolean): void
	setUint32(byteOffset: number, value: number, littleEndian?: boolean): void
	setFloat32(byteOffset: number, value: number, littleEndian?: boolean): void
	setFloat64(byteOffset: number, value: number, littleEndian?: boolean): void

	// Strings and Blobs
	getChar(byteOffset?: number): string
	setChar(byteOffset: number, char: string): void
	writeChar(char: string): void
	getString(byteLength: number, byteOffset?: number, encoding?: string): string
	setString(byteOffset: number, chars: string, encoding?: string): void
	writeString(chars: string, encoding?: string): void
	getBytes(length: number, byteOffset?: number, littleEndian?: boolean, toArray?: boolean): number[]
	setBytes(byteOffset: number, bytes: number[], littleEndian?: boolean): void
	writeBytes(bytes: number[], littleEndian?: boolean): void

	// writeXXX methods
	writeInt8(value: number): void
	writeUint8(value: number): void
	writeInt16(value: number, littleEndian?: boolean): void
	writeUint16(value: number, littleEndian?: boolean): void
	writeInt32(value: number, littleEndian?: boolean): void
	writeUint32(value: number, littleEndian?: boolean): void
	writeFloat32(value: number, littleEndian?: boolean): void
	writeFloat64(value: number, littleEndian?: boolean): void
}
interface jDataView extends DataView { }

declare namespace jDataView {
	interface Bytes {
		length: number;
		[index: number]: number;
	}

	interface Buffer extends Bytes {
		byteLength: number;
	}

	class Uint64 {
		lo: number
		hi: number
		constructor(lo: number, hi: number)
		valueOf(): number
		static fromNumber(number: number): Uint64
	}

	class Int64 extends Uint64 {
		static fromNumber(number: number): Int64
	}
}
