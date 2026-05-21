/// <reference types="node" />

import { EventEmitter } from "events";
import { Readable } from "stream";

export abstract class RandomAccessReader extends EventEmitter {
    _readStreamForRange(start: number, end: number): void;
    createReadStream(options: { start: number; end: number }): void;
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
    extraFields: Array<{ id: number; data: Buffer }>;
    extraFieldRaw: Buffer;
    fileCommentLength: number;
    fileName: string;
    fileNameLength: number;
    fileNameRaw: Buffer;
    fileCommentRaw: Buffer;
    generalPurposeBitFlag: number;
    internalFileAttributes: number;
    lastModFileDate: number;
    lastModFileTime: number;
    relativeOffsetOfLocalHeader: number;
    uncompressedSize: number;
    versionMadeBy: number;
    versionNeededToExtract: number;

    getLastModDate(options?: { forceDosFormat?: boolean; timezone?: "local" | "UTC" }): Date;
    isEncrypted(): boolean;
    isCompressed(): boolean;
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
    decompress: boolean | null;
    decrypt: boolean | null;
    start: number | null;
    end: number | null;
}

export interface ReadLocalFileHeaderOptions {
    minimal?: boolean;
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
    openReadStreamLowLevel(
        fileDataStart: number,
        compressedSize: number,
        relativeStart: number,
        relativeEnd: number,
        decompress: boolean,
        uncompressedSize: number,
        callback: (err: Error | null, stream: Readable) => void,
    ): void;
    readLocalFileHeader(
        entry: Entry,
        options: ReadLocalFileHeaderOptions,
        callback: (err: Error | null, localFileHeader: LocalFileHeader) => void,
    ): void;
    readLocalFileHeader(
        entry: Entry,
        callback: (err: Error | null, localFileHeader: LocalFileHeader) => void,
    ): void;
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
export function dosDateTimeToDate(date: number, time: number): Date;
export function validateFileName(fileName: string): string | null;
export function getFileNameLowLevel(
    generalPurposeBitFlag: number,
    fileNameBuffer: Buffer,
    extraFields: Array<{ id: number; data: Buffer }>,
    strictFileNames: boolean,
): string;
export function parseExtraFields(extraFieldBuffer: Buffer): Array<{ id: number; data: Buffer }>;
