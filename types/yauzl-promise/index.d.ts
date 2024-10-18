// TypeScript Version: 2.1

/// <reference types="node" />

import { EventEmitter } from "events";
import { Readable } from "stream";

// This class is not directly compatible with @types/yauzl 's ZipFile as this library changes the function signatures
// Therefore, it is replaced, albeit with a significant portion
export class ZipFile extends EventEmitter implements AsyncIterable<Entry> {
    /** This property can also be a Buffer if the option 'decodeStrings' is false */
    comment: string;
    entryCount: number;
    entryCountIsCertain: boolean;
    isOpen: boolean;
    isZip64: boolean;

    // These options do exist in the ZipFile class, but are not officially documented.
    // Keeping them for backward compatibility with previous types version.
    decodeStrings: boolean;
    validateEntrySizes: boolean;

    close(): Promise<void>;
    readEntry(): Promise<Entry | null>;
    readEntries(numEntries?: number): Promise<Entry[]>;
    openReadStream(entry: Entry, options?: ZipFileOptions): Promise<Readable>;
    [Symbol.asyncIterator](): AsyncIterator<Entry>;
}

export interface ZipFileOptions {
    decompress?: boolean | null | undefined;
    decrypt?: boolean | null | undefined;
    validateCrc32?: boolean | null | undefined;
    start?: number | null | undefined;
    end?: number | null | undefined;
}

export interface Options {
    decodeStrings?: boolean | null | undefined;
    validateEntrySizes?: boolean | null | undefined;
    validateFilenames?: boolean | null | undefined;
    strictFilenames?: boolean | null | undefined;
    supportMacArchive?: boolean | null | undefined;
}

export class Entry {
    /** This property can also be a Buffer if the option 'decodeStrings' is false */
    comment: string;
    compressedSize: number;
    compressionMethod: number;
    crc32: number;
    externalFileAttributes: number;
    extraFields: Array<{ id: number; data: Buffer }>;
    fileDataOffset: null | number;
    fileHeaderOffset: number;
    /** This property can also be a Buffer if the option 'decodeStrings' is false */
    filename: string;
    filenameLength: number;
    generalPurposeBitFlag: number;
    internalFileAttributes: number;
    lastModDate: number;
    lastModTime: number;
    uncompressedSize: number;
    uncompressedSizeIsCertain: boolean;
    versionMadeBy: number;
    versionNeededToExtract: number;

    getLastMod(): Date;
    isEncrypted(): boolean;
    isCompressed(): boolean;
    openReadStream(options?: ZipFileOptions): Promise<Readable>;
}

export abstract class Reader {
    _createReadStream(start: number, length: number): Readable;
    _read(start: number, length: number): Promise<Buffer>;
    _open(): Promise<{}>;
    _close(): Promise<{}>;
}

export function open(path: string, options?: Options): Promise<ZipFile>;
export function fromFd(fd: number, options?: Options): Promise<ZipFile>;
export function fromBuffer(buffer: Buffer, options?: Options): Promise<ZipFile>;
export function fromReader(
    reader: Reader,
    totalSize: number,
    options?: Options,
): Promise<ZipFile>;

export function dosDateTimeToDate(date: number, time: number): Date;
export function validateFilename(filename: string): void;
