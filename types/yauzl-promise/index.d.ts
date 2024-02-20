// TypeScript Version: 2.1

/// <reference types="node" />

import { EventEmitter } from "events";
import { Readable } from "stream";

// This class is not directly compatible with @types/yauzl 's ZipFile as this library changes the function signatures
// Therefore, it is replaced, albeit with a significant portion
export class ZipFile extends EventEmitter implements AsyncIterable<Entry> {
    // This chunk taken directly from @types/yauzl
    autoClose: boolean;
    comment: string;
    decodeStrings: boolean;
    emittedError: boolean;
    entriesRead: number;
    entryCount: number;
    fileSize: number;
    isOpen: boolean;
    lazyEntries: boolean;
    readEntryCursor: boolean;
    validateEntrySizes: boolean;

    constructor(
        reader: RandomAccessReader,
        centralDirectoryOffset: number,
        fileSize: number,
        entryCount: number,
        comment: string,
        autoClose: boolean,
        lazyEntries: boolean,
        decodeStrings: boolean,
        validateEntrySizes: boolean,
    );

    // These funcitons are custom to yauzl-promise

    close(): Promise<void>;
    readEntry(): Promise<Entry>;
    readEntries(numEntries?: number): Promise<Entry[]>;
    walkEntries(callback: (entry: Entry) => Promise<void> | void, numEntries?: number): Promise<void>;
    openReadStream(entry: Entry, options?: ZipFileOptions): Promise<Readable>;
    [Symbol.asyncIterator](): AsyncIterator<Entry>;
}

export interface ZipFileOptions {
    decompress: boolean | null;
    decrypt: boolean | null;
    validateCrc32: boolean | null;
    start: number | null;
    end: number | null;
}

export interface Options {
    decodeStrings?: boolean | undefined;
    validateEntrySizes?: boolean | undefined;
    validateFilenames?: boolean | undefined;
    strictFilenames?: boolean | undefined;
    supportMacArchive?: boolean | undefined;
}

export class Entry {
    comment: string;
    compressedSize: number;
    compressionMethod: number;
    crc32: number;
    externalFileAttributes: number;
    extraFieldLength: number;
    extraFields: Array<{ id: number; data: Buffer }>;
    fileCommentLength: number;
    filename: string;
    filenameLength: number;
    generalPurposeBitFlag: number;
    internalFileAttributes: number;
    lastModFileDate: number;
    lastModFileTime: number;
    relativeOffsetOfLocalHeader: number;
    uncompressedSize: number;
    versionMadeBy: number;
    versionNeededToExtract: number;

    getLastModDate(): Date;
    isEncrypted(): boolean;
    isCompressed(): boolean;
    openReadStream(options?: ZipFileOptions): Promise<Readable>;
}

export abstract class RandomAccessReader {
    _createReadStream(start: number, length: number): Readable;
    _read(start: number, length: number): Promise<Buffer>;
    _open(): Promise<{}>;
    _close(): Promise<{}>;
}

export function open(path: string, options?: Options): Promise<ZipFile>;
// export function open(path: string): Promise<ZipFile>;
export function fromFd(fd: number, options?: Options): Promise<ZipFile>;
// export function fromFd(fd: number): Promise<ZipFile>;
export function fromBuffer(buffer: Buffer, options?: Options): Promise<ZipFile>;
// export function fromBuffer(buffer: Buffer): Promise<ZipFile>;
export function fromRandomAccessReader(
    reader: RandomAccessReader,
    totalSize: number,
    options?: Options,
): Promise<ZipFile>;
// export function fromRandomAccessReader(reader: RandomAccessReader, totalSize: number): Promise<ZipFile>;

export function dosDateTimeToDate(date: number, time: number): Date;
export function validateFilename(filename: string): string | null;
