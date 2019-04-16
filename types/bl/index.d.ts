// Type definitions for BufferList v2.1.0
// Project: https://github.com/rvagg/bl
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 Francis Gulotta <https://github.com/reconbot>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


import stream = require('stream');

declare class BufferList extends stream.Duplex {
    constructor(callbackOrData?: ((err: Error, buffer: Buffer) => void) | Buffer | Buffer[] | BufferList | BufferList[] | string);

    length: number;
    append(buffer: Buffer | Buffer[] | BufferList | BufferList[] | string): void;
    get(index: number): number;
    slice(start?: number, end?: number): Buffer;
    shallowSlice(start?: number, end?: number): BufferList;
    copy(dest: Buffer, destStart?: number, srcStart?: number, srcEnd?: number): void;
    duplicate(): BufferList;
    consume(bytes?: number): void;
    toString(encoding?: string, start?: number, end?: number): string;
    indexOf(value: string | number | Uint8Array | BufferList | Buffer, byteOffset?: number, encoding?: string): number;
    readDoubleBE(offset: number, noAssert?: boolean): number;
    readDoubleLE(offset: number, noAssert?: boolean): number;
    readFloatBE(offset: number, noAssert?: boolean): number;
    readFloatLE(offset: number, noAssert?: boolean): number;
    readInt32BE(offset: number, noAssert?: boolean): number;
    readInt32LE(offset: number, noAssert?: boolean): number;
    readUInt32BE(offset: number, noAssert?: boolean): number;
    readUInt32LE(offset: number, noAssert?: boolean): number;
    readInt16BE(offset: number, noAssert?: boolean): number;
    readInt16LE(offset: number, noAssert?: boolean): number;
    readUInt16BE(offset: number, noAssert?: boolean): number;
    readUInt16LE(offset: number, noAssert?: boolean): number;
    readInt8(offset: number, noAssert?: boolean): number;
    readUInt8(offset: number, noAssert?: boolean): number;
}

export = BufferList;
