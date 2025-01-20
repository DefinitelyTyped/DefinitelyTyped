/// <reference types="node" />

declare class BufferBuilder {
    constructor(initialCapacity?: number | Buffer);
    appendBuffer(source: Buffer): BufferBuilder;
    appendUInt8(value: number): BufferBuilder;
    appendUInt16LE(value: number): BufferBuilder;
    appendUInt16BE(value: number): BufferBuilder;
    appendUInt32LE(value: number): BufferBuilder;
    appendUInt32BE(value: number): BufferBuilder;
    appendInt8(value: number): BufferBuilder;
    appendInt16LE(value: number): BufferBuilder;
    appendInt16BE(value: number): BufferBuilder;
    appendInt32LE(value: number): BufferBuilder;
    appendInt32BE(value: number): BufferBuilder;
    appendFloatLE(value: number): BufferBuilder;
    appendFloatBE(value: number): BufferBuilder;
    appendDoubleLE(value: number): BufferBuilder;
    appendDoubleBE(value: number): BufferBuilder;
    appendString(str: string, encoding?: string): BufferBuilder;
    appendStringZero(str: string, encoding?: string): BufferBuilder;
    appendFill(value: number, count: number): BufferBuilder;
    get(): Buffer;
    copy(targetBuffer: Buffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
    readonly length: number;
}

export = BufferBuilder;
