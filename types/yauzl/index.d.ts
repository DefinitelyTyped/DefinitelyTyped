/// <reference types="node" />

import { EventEmitter } from "events";
import { Readable } from "stream";

export interface ExtraField {
    id: number;
    data: Buffer;
}

export abstract class RandomAccessReader extends EventEmitter {
    _readStreamForRange(start: number, end: number): Readable;
    createReadStream(options: { start: number; end: number }): Readable;
    read(buffer: Buffer, offset: number, length: number, position: number, callback: (err: Error | null) => void): void;
    close(callback: (err: Error | null) => void): void;
}

export class Entry {
    comment: string;
    compressedSize: number;
    compressionMethod: number;
    crc32: number;
    externalFileAttributes: number;
    extraFieldLength: number;
    extraFieldRaw: Buffer;
    extraFields: ExtraField[];
    fileComment: string;
    fileCommentLength: number;
    fileCommentRaw: Buffer;
    fileName: string;
    fileNameLength: number;
    fileNameRaw: Buffer;
    generalPurposeBitFlag: number;
    internalFileAttributes: number;
    lastModFileDate: number;
    lastModFileTime: number;
    relativeOffsetOfLocalHeader: number;
    uncompressedSize: number;
    versionMadeBy: number;
    versionNeededToExtract: number;

    getLastModDate(options?: GetLastModDateOptions): Date;
    canDecodeFileData(): boolean;
    isEncrypted(): boolean;
    /** @deprecated Use `canDecodeFileData()` and/or check `compressionMethod`. */
    isCompressed(): boolean;
}

export interface GetLastModDateOptions {
    timezone?: "local" | "UTC" | null | undefined;
    forceDosFormat?: boolean | undefined;
}

export class LocalFileHeader {
    fileDataStart: number;
    versionNeededToExtract: number;
    generalPurposeBitFlag: number;
    compressionMethod: number;
    lastModFileTime: number;
    lastModFileDate: number;
    crc32: number;
    compressedSize: number;
    uncompressedSize: number;
    fileNameLength: number;
    extraFieldLength: number;
    fileName: Buffer;
    extraField: Buffer;
}

export interface ZipFileOptions {
    decodeFileData?: boolean | null | undefined;
    start?: number | null | undefined;
    end?: number | null | undefined;
    /** @deprecated */
    decompress?: boolean | null | undefined;
    /** @deprecated */
    decrypt?: boolean | null | undefined;
}

export class ZipFile extends EventEmitter {
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

    openReadStream(
        entry: Entry,
        options: ZipFileOptions,
        callback: (err: Error | null, stream: Readable) => void,
    ): void;
    openReadStream(entry: Entry, callback: (err: Error | null, stream: Readable) => void): void;
    readLocalFileHeader(
        entry: Entry,
        options: { minimal: true },
        callback: (err: Error | null, header: { fileDataStart: number }) => void,
    ): void;
    readLocalFileHeader(
        entry: Entry,
        options: { minimal?: boolean },
        callback: (err: Error | null, header: LocalFileHeader) => void,
    ): void;
    readLocalFileHeader(entry: Entry, callback: (err: Error | null, header: LocalFileHeader) => void): void;
    openReadStreamLowLevel(
        fileDataStart: number,
        compressedSize: number,
        relativeStart: number,
        relativeEnd: number,
        decompress: boolean,
        uncompressedSize: number | null,
        callback: (err: Error | null, stream: Readable) => void,
    ): void;
    openReadStreamPromise(entry: Entry, options?: ZipFileOptions): Promise<Readable>;
    readLocalFileHeaderPromise(entry: Entry, options: { minimal: true }): Promise<{ fileDataStart: number }>;
    readLocalFileHeaderPromise(entry: Entry, options?: { minimal?: boolean }): Promise<LocalFileHeader>;
    openReadStreamLowLevelPromise(
        fileDataStart: number,
        compressedSize: number,
        relativeStart: number,
        relativeEnd: number,
        decompress: boolean,
        uncompressedSize: number | null,
    ): Promise<Readable>;
    eachEntry(): AsyncIterableIterator<Entry>;
    close(): void;
    readEntry(): void;
}

export interface Options {
    autoClose?: boolean | undefined;
    lazyEntries?: boolean | undefined;
    decodeStrings?: boolean | undefined;
    validateEntrySizes?: boolean | undefined;
    strictFileNames?: boolean | undefined;
}

export function open(path: string, options: Options, callback?: (err: Error | null, zipfile: ZipFile) => void): void;
export function open(path: string, callback?: (err: Error | null, zipfile: ZipFile) => void): void;
export function fromFd(fd: number, options: Options, callback?: (err: Error | null, zipfile: ZipFile) => void): void;
export function fromFd(fd: number, callback?: (err: Error | null, zipfile: ZipFile) => void): void;
export function fromBuffer(
    buffer: Buffer,
    options: Options,
    callback?: (err: Error | null, zipfile: ZipFile) => void,
): void;
export function fromBuffer(buffer: Buffer, callback?: (err: Error | null, zipfile: ZipFile) => void): void;
export function fromRandomAccessReader(
    reader: RandomAccessReader,
    totalSize: number,
    options: Options,
    callback: (err: Error | null, zipfile: ZipFile) => void,
): void;
export function fromRandomAccessReader(
    reader: RandomAccessReader,
    totalSize: number,
    callback: (err: Error | null, zipfile: ZipFile) => void,
): void;
export function openPromise(path: string, options?: Options): Promise<ZipFile>;
export function fromFdPromise(fd: number, options?: Options): Promise<ZipFile>;
export function fromBufferPromise(buffer: Buffer, options?: Options): Promise<ZipFile>;
export function fromRandomAccessReaderPromise(
    reader: RandomAccessReader,
    totalSize: number,
    options?: Options,
): Promise<ZipFile>;
/** @deprecated Use `entry.getLastModDate()` instead. */
export function dosDateTimeToDate(date: number, time: number): Date;
export function validateFileName(fileName: string): string | null;
export function getFileNameLowLevel(
    generalPurposeBitFlag: number,
    fileNameBuffer: Buffer,
    extraFields: ExtraField[],
    strictFileNames: boolean,
): string;
export function parseExtraFields(extraFieldBuffer: Buffer): ExtraField[];
