// Type definitions for unzipper 0.10
// Project: https://github.com/ZJONSSON/node-unzipper#readme
// Definitions by: s73obrien <https://github.com/s73obrien>
//                 Nate <https://github.com/natemara>
//                 Bart <https://github.com/bartje321>
//                 Ken Human <https://github.com/kenhuman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
/// <reference types="node" />

import { Readable, Stream, PassThrough, Duplex, Transform } from "stream";
import { ClientRequest, RequestOptions } from "http";

export interface PullStream extends Duplex {
    stream(eof: number | string, includeEof: boolean): PassThrough;
    pull(eof: number | string, includeEof: boolean): Promise<Buffer>;
}

export interface Entry extends PassThrough {
    autodrain(): Transform & {
        promise(): Promise<void>;
    };
    buffer(): Promise<Buffer>;
    path: string;

    props: {
        path: string;
    };

    type: string;
    vars: {
        signature?: number;
        versionsNeededToExtract: number;
        flags: number;
        compressionMethod: number;
        lastModifiedTime: number;
        crc32: number;
        compressedSize: number;
        fileNameLength: number;
        extraFieldLength: number;
    };

    extra: {
        signature: number;
        partsize: number;
        uncompressedSize: number;
        compressedSize: number;
        offset: number;
        disknum: number;
    };
}

export function unzip(
    source: {
        stream: Readable;
        size: () => Promise<number>;
    },
    offset: number,
    _password: string
): Entry;

export namespace Open {
    function buffer(data: Buffer): Promise<CentralDirectory>;
    function file(filename: string): Promise<CentralDirectory>;
    function url(
        request: ClientRequest,
        opt: string | RequestOptions
    ): Promise<CentralDirectory>;
    function s3(client: any, params: any): Promise<CentralDirectory>;
}

export function BufferStream(entry: Entry): Promise<Buffer>;

export interface CentralDirectory {
    signature: number;
    diskNumber: number;
    diskStart: number;
    numberOfRecordsOnDisk: number;
    numberOfRecords: number;
    sizeOfCentralDirectory: number;
    offsetToStartOfCentralDirectory: number;
    commentLength: number;
    files: File[];
    extract: (opts: ParseOptions) => Promise<void>;
}

export interface File {
    signature: number;
    versionMadeBy: number;
    versionsNeededToExtract: number;
    flags: number;
    compressionMethod: number;
    lastModifiedTime: number;
    lastModifiedDate: number;
    crc32: number;
    compressedSize: number;
    uncompressedSize: number;
    fileNameLength: number;
    extraFieldLength: number;
    fileCommentLength: number;
    diskNumber: number;
    internalFileAttributes: number;
    externalFileAttributes: number;
    offsetToLocalFileHeader: number;
    pathBuffer: Buffer;
    path: string;
    isUnicode: number;
    extra: any;
    type: 'Directory' | 'File';
    comment: string;
    stream: (password?: string) => Entry;
    buffer: (password?: string) => Promise<Buffer>;
}

export interface ParseOptions {
    verbose?: boolean;
    path?: string;
    concurrency?: number;
}

export type ParseStream = PullStream & {
    promise(): Promise<void>;
};

export function Parse(opts?: ParseOptions): ParseStream;
export function ParseOne(match?: RegExp, opts?: ParseOptions): Duplex;
export function Extract(opts?: ParseOptions): ParseStream;
