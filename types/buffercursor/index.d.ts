/// <reference types="node" />

import VError = require("verror");

/**
 * A cursor for reading from and writing to a buffer.
 */
declare class BufferCursor {
    constructor(buff: Buffer, noAssert?: boolean);

    buffer: Buffer;
    length: number;

    seek(pos: number): BufferCursor;
    eof(): boolean;
    tell(): number;
    slice(length?: number): BufferCursor;
    toString(encoding?: BufferEncoding, length?: number): string;

    readUInt8(): number;
    readInt8(): number;
    readInt16BE(): number;
    readInt16LE(): number;
    readUInt16BE(): number;
    readUInt16LE(): number;
    readUInt32LE(): number;
    readUInt32BE(): number;
    readInt32LE(): number;
    readInt32BE(): number;
    readFloatBE(): number;
    readFloatLE(): number;
    readDoubleBE(): number;
    readDoubleLE(): number;

    write(value: string, length?: number, encoding?: BufferEncoding): BufferCursor;
    fill(value: any, length?: number): BufferCursor;
    copy(source: Buffer | BufferCursor, sourceStart?: number, sourceEnd?: number): BufferCursor;

    writeUInt8(value: number): BufferCursor;
    writeInt8(value: number): BufferCursor;
    writeUInt16BE(value: number): BufferCursor;
    writeUInt16LE(value: number): BufferCursor;
    writeInt16BE(value: number): BufferCursor;
    writeInt16LE(value: number): BufferCursor;
    writeUInt32BE(value: number): BufferCursor;
    writeUInt32LE(value: number): BufferCursor;
    writeInt32BE(value: number): BufferCursor;
    writeInt32LE(value: number): BufferCursor;
    writeFloatBE(value: number): BufferCursor;
    writeFloatLE(value: number): BufferCursor;
    writeDoubleBE(value: number): BufferCursor;
    writeDoubleLE(value: number): BufferCursor;

    static BufferCursorOverflow: typeof BufferCursorOverflow;
}

/**
 * Custom error type for buffer cursor overflows.
 */
declare class BufferCursorOverflow extends VError {
    kind: string;
    length: number;
    position: number;
    size: number;

    constructor(length: number, position: number, size: number);
}

export = BufferCursor;
