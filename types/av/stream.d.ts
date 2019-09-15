/// <reference path="./baseTypes.d.ts" />

declare namespace AV {
	class Stream {
		static fromBuffer(buffer: Buffer): Stream;

		offset: number;

		constructor(list: BufferList);

		copy(): Stream;
		available(bytes: number): boolean;
		remainingBytes(): number;
		advance(bytes: number): void;
		rewind(bytes: number): void;
		seek(position: number): void;
		readUInt8(): number;
		peekUInt8(offset?: number): number;
		readInt8(): number;
		peekInt8(offset?: number): number;
		readUInt16(): number;
		peekUInt16(offset?: number): number;
		readInt16(): number;
		peekInt16(offset?: number): number;
		readUInt24(): number;
		peekUInt24(offset?: number): number;
		readInt24(): number;
		peekInt24(offset?: number): number;
		readUInt32(): number;
		peekUInt32(offset?: number): number;
		readInt32(): number;
		peekInt32(offset?: number): number;
		readFloat32(): number;
		peekFloat32(offset?: number): number;
		readFloat64(): number;
		peekFloat64(offset?: number): number;
		readFloat80(): number;
		peekFloat80(offset?: number): number;
		readString(length: number, encoding?: Encoding): string;
		peekString(offset: number, length: number, encoding?: Encoding): string;
		readBuffer(length: number): Buffer;
		peekBuffer(offset: number, length: number): Buffer;
	}
}