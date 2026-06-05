import * as fs from "fs";
import * as ReaddirGlob from "readdir-glob";
import * as stream from "stream";
import { ZlibOptions } from "zlib";

export type GlobOptions = ReaddirGlob.Options & { cwd?: string };

export interface EntryData {
    name: string;
    type?: "directory" | "file" | "symlink";
    date?: Date | string;
    mode?: number;
    prefix?: string;
    stats?: fs.Stats;
}

export interface ZipEntryData extends EntryData {
    store?: boolean;
    comment?: string;
    namePrependSlash?: boolean;
}

export type TarEntryData = EntryData;

export interface ProgressData {
    entries: {
        total: number;
        processed: number;
    };
    fs: {
        totalBytes: number;
        processedBytes: number;
    };
}

export type EntryDataFunction = (entry: EntryData) => false | EntryData;

export interface ArchiverError extends Error {
    code: string;
    data?: any;
}

export class Archiver extends stream.Transform {
    constructor(options?: CoreOptions & TransformOptions);
    abort(): this;
    append(source: stream.Readable | Buffer | string, data?: EntryData | ZipEntryData | TarEntryData): this;
    directory(
        dirpath: string,
        destpath: false | string,
        data?: Partial<EntryData> | EntryDataFunction,
    ): this;
    /** @param data - entry data (optional) */
    file(filename: string, data?: EntryData): this;
    glob(pattern: string, options?: GlobOptions, data?: Partial<EntryData>): this;
    finalize(): Promise<void>;
    pointer(): number;
    symlink(filepath: string, target: string, mode?: number): this;
    on(event: "error" | "warning", listener: (error: ArchiverError) => void): this;
    on(event: "data", listener: (data: Buffer) => void): this;
    on(event: "progress", listener: (progress: ProgressData) => void): this;
    on(event: "close" | "drain" | "finish", listener: () => void): this;
    on(event: "pipe" | "unpipe", listener: (src: stream.Readable) => void): this;
    on(event: "entry", listener: (entry: EntryData) => void): this;
    on(event: string, listener: (...args: any[]) => void): this;
}

export interface CoreOptions {
    statConcurrency?: number;
}

export interface TransformOptions {
    allowHalfOpen?: boolean;
    readableObjectMode?: boolean;
    writableObjectMode?: boolean;
    decodeStrings?: boolean;
    encoding?: BufferEncoding;
    highWaterMark?: number;
    objectMode?: boolean;
}

export interface ZipOptions {
    comment?: string;
    forceLocalTime?: boolean;
    forceZip64?: boolean;
    namePrependSlash?: boolean;
    store?: boolean;
    level?: number;
    zlib?: ZlibOptions;
}

export interface TarOptions {
    gzip?: boolean;
    gzipOptions?: ZlibOptions;
}

export type ArchiverOptions = CoreOptions & TransformOptions & ZipOptions & TarOptions;

export class ZipArchive extends Archiver {
    constructor(options?: CoreOptions & TransformOptions & ZipOptions);
}

export class TarArchive extends Archiver {
    constructor(options?: CoreOptions & TransformOptions & TarOptions);
}

export class JsonArchive extends Archiver {
    constructor(options?: CoreOptions & TransformOptions);
}
