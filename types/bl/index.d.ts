// Type definitions for BufferList v0.8.0
// Project: https://github.com/rvagg/bl
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


import stream = require('stream');

declare class BufferList extends stream.Duplex {
    constructor(callback?: (err: Error, buffer: Buffer) => void);

    append(buffer: Buffer): void;
    get(index: number): number;
    slice(start?: number, end?: number): Buffer;
    copy(dest: Buffer, destStart?: number, srcStart?: number, srcEnd?: number): void;
    duplicate(): BufferList;
    consume(bytes?: number): void;
    toString(encoding?: string, start?: number, end?: number): string;
    length: number;

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
