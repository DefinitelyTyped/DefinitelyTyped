/// <reference types="node" />

import { Buffer } from "buffer";
import { EventEmitter } from "events";

export interface Options {
    mtime: Date;
    mode: number;
    compress: boolean;
    forceZip64Format: boolean;
    forceDosTimestamp: boolean;
    compressionLevel: number;
}

export interface FileOptions extends Options {
    fileComment: string;
}

export interface ReadStreamOptions extends FileOptions {
    size: number;
}

export interface DirectoryOptions {
    mtime: Date;
    mode: number;
    forceDosTimestamp: boolean;
}

export interface EndOptions {
    forceZip64Format: boolean;
    comment: string;
}

export interface DosDateTime {
    date: number;
    time: number;
}

export class ZipFile extends EventEmitter {
    addFile(realPath: string, metadataPath: string, options?: Partial<FileOptions>): void;
    outputStream: NodeJS.ReadableStream;
    addReadStream(input: NodeJS.ReadableStream, metadataPath: string, options?: Partial<ReadStreamOptions>): void;
    addReadStreamLazy(
        metadataPath: string,
        getReadStreamFunction: (cb: (err: any, readStream: NodeJS.ReadableStream) => void) => void,
    ): void;
    addReadStreamLazy(
        metadataPath: string,
        options: Partial<ReadStreamOptions>,
        getReadStreamFunction: (cb: (err: any, readStream: NodeJS.ReadableStream) => void) => void,
    ): void;
    addBuffer(buffer: Buffer, metadataPath: string, options?: Partial<Options>): void;
    end(options?: EndOptions, calculatedTotalSizeCallback?: () => void): void;

    addEmptyDirectory(metadataPath: string, options?: Partial<DirectoryOptions>): void;

    /**
     * @deprecated since yazl 3.3.0
     */
    dateToDosDateTime(jsDate: Date): DosDateTime;
}
