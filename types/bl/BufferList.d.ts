/// <reference types="node" />

declare class BufferList {
    constructor(initialData?: Buffer | Buffer[] | BufferList | BufferList[] | string);

    length: number;
    append(buffer: Buffer | Buffer[] | BufferList | BufferList[] | string): BufferList;
    get(index: number): number;
    slice(start?: number, end?: number): Buffer;
    shallowSlice(start?: number, end?: number): BufferList;
    copy(dest: Buffer, destStart?: number, srcStart?: number, srcEnd?: number): Buffer;
    duplicate(): BufferList;
    consume(bytes?: number): void;
    toString(encoding?: string, start?: number, end?: number): string;
    indexOf(value: string | number | Uint8Array | BufferList | Buffer, byteOffset?: number, encoding?: string): number;
    readDoubleBE(offset?: number): number;
    readDoubleLE(offset?: number): number;
    readFloatBE(offset?: number): number;
    readFloatLE(offset?: number): number;
    readInt32BE(offset?: number): number;
    readInt32LE(offset?: number): number;
    readUInt32BE(offset?: number): number;
    readUInt32LE(offset?: number): number;
    readInt16BE(offset?: number): number;
    readInt16LE(offset?: number): number;
    readUInt16BE(offset?: number): number;
    readUInt16LE(offset?: number): number;
    readInt8(offset: number): number;
    readUInt8(offset: number): number;
    readIntBE(offset: number): number;
    readIntLE(offset: number): number;
    readUIntBE(offset: number): number;
    readUIntLE(offset: number): number;

    static isBufferList(other: any): boolean;
}

export = BufferList;
