/// <reference types="node" />

import { Buffer } from "buffer";

export interface Options {
    mtime: Date;
    mode: number;
    compress: boolean;
    forceZip64Format: boolean;
}

export interface ReadStreamOptions extends Options {
    size: number;
}

export interface DirectoryOptions {
    mtime: Date;
    mode: number;
}

export interface EndOptions {
    forceZip64Format: boolean;
}

export interface DosDateTime {
    date: number;
    time: number;
}

export class ZipFile {
    addFile(realPath: string, metadataPath: string, options?: Partial<Options>): void;
    outputStream: NodeJS.ReadableStream;
    addReadStream(input: NodeJS.ReadableStream, metadataPath: string, options?: Partial<ReadStreamOptions>): void;
    addBuffer(buffer: Buffer, metadataPath: string, options?: Partial<Options>): void;
    end(options?: EndOptions, finalSizeCallback?: () => void): void;

    addEmptyDirectory(metadataPath: string, options?: Partial<DirectoryOptions>): void;
    dateToDosDateTime(jsDate: Date): DosDateTime;
}
