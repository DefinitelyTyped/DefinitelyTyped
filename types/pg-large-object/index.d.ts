/// <reference types="node" />

import stream = require("stream");
import pg = require("pg");

export class LargeObject {
    static readonly SEEK_SET: number;
    static readonly SEEK_CUR: number;
    static readonly SEEK_END: number;
    constructor(query: any, oid: number, fd: any);
    close(callback: (error: Error) => void): void;
    closeAsync(): Promise<any>;
    read(length: number, callback: (error: Error, data: Buffer) => void): void;
    readAsync(length: number): Promise<Buffer>;
    write(buffer: Buffer, callback?: (error: Error) => void): void;
    writeAsync(buffer: Buffer): Promise<any>;
    seek(position: number, ref: number, callback?: (error: Error, position: number) => void): void;
    seekAsync(position: number, ref: number): Promise<number>;
    tell(callback: (error: Error, position: number) => void): void;
    tellAsync(): Promise<number>;
    size(callback: (error: Error, size: number) => void): void;
    sizeAsync(): Promise<number>;
    truncate(length: number, callback?: (error: Error) => void): void;
    truncateAsync(length: number): Promise<any>;
    getReadableStream(bufferSize?: number): ReadStream;
    getWritableStream(bufferSize?: number): WriteStream;
}

export interface LargeObjectManagerSettings {
    pg?: pg.Client | undefined;
    pgPromise?: object | undefined; // module: pg-promise/Task
}

export class LargeObjectManager {
    static readonly WRITE: number;
    static readonly READ: number;
    static readonly READWRITE: number;
    constructor(options: LargeObjectManagerSettings | object);
    open(oid: number, mode: number, callback: (error: Error, result: LargeObject) => void): void;
    openAsync(oid: number, mode: number): Promise<LargeObject>;
    create(callback: (error: Error, oid: number) => void): void;
    createAsync(): Promise<number>;
    openAndReadableStream(
        oid: number,
        bufferSize: number,
        callback: (error: Error, size: number, stream: ReadStream) => void,
    ): void;
    openAndReadableStreamAsync(oid: number, bufferSize?: number): Promise<[number, ReadStream]>;
    createAndWritableStream(
        bufferSize?: number,
        callback?: (error: Error, oid: number, stream: WriteStream) => void,
    ): void;
    createAndWritableStreamAsync(bufferSize?: number): Promise<[number, WriteStream]>;
    unlink(oid: number, callback?: (error: Error) => void): void;
    unlinkAsync(oid: number): Promise<any>;
}

export class ReadStream extends stream.Readable {}

export class WriteStream extends stream.Writable {}
