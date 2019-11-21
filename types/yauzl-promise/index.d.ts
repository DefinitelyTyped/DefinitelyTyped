// Type definitions for yauzl-promise 2.1
// Project: https://github.com/overlookmotel/yauzl-promise
// Definitions by: Dave Lee <https://github.com/dlee-nvisia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.1

/// <reference types="node" />

import { Entry as BaseEntry, Options, ZipFileOptions, RandomAccessReader } from 'yauzl';
import { Readable } from 'stream';
import { EventEmitter } from 'events';

// This class is not directly compatible with @types/yauzl 's ZipFile as this library changes the function signatures
// Therefore, it is replaced, albeit with a significant portion
export class ZipFile extends EventEmitter {
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
}

export class Entry extends BaseEntry {
    openReadStream(options?: ZipFileOptions): Promise<Readable>;
}

export function open(path: string, options?: Options): Promise<ZipFile>;
// export function open(path: string): Promise<ZipFile>;
export function fromFd(fd: number, options?: Options): Promise<ZipFile>;
// export function fromFd(fd: number): Promise<ZipFile>;
export function fromBuffer(buffer: Buffer, options?: Options): Promise<ZipFile>;
// export function fromBuffer(buffer: Buffer): Promise<ZipFile>;
export function fromRandomAccessReader(reader: RandomAccessReader, totalSize: number, options?: Options): Promise<ZipFile>;
// export function fromRandomAccessReader(reader: RandomAccessReader, totalSize: number): Promise<ZipFile>;

// These are copied directly from @types/yauzl, I beleive they are unmodified
export function dosDateTimeToDate(date: number, time: number): Date;
export function validateFileName(fileName: string): string | null;

export { RandomAccessReader, Options, ZipFileOptions };
