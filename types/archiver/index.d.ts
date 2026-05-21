import * as fs from "fs";
import * as ReaddirGlob from "readdir-glob";
import * as stream from "stream";
import { ZlibOptions } from "zlib";

export type GlobOptions = ReaddirGlob.Options & { cwd?: string };

export interface EntryData {
    name: string;
    date?: Date | string | undefined;
    mode?: number | undefined;
    prefix?: string | undefined;
    stats?: fs.Stats | undefined;
}

export interface ZipEntryData extends EntryData {
    store?: boolean | undefined;
    comment?: string | undefined;
    namePrependSlash?: boolean | undefined;
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

export class ArchiverError extends Error {
    code: string;
    data: any;
    constructor(code: string, data: any);
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
    statConcurrency?: number | undefined;
}

export interface TransformOptions {
    allowHalfOpen?: boolean | undefined;
    readableObjectMode?: boolean | undefined;
    writableObjectMode?: boolean | undefined;
    decodeStrings?: boolean | undefined;
    encoding?: BufferEncoding | undefined;
    highWaterMark?: number | undefined;
    objectMode?: boolean | undefined;
}

export interface ZipOptions {
    comment?: string | undefined;
    forceLocalTime?: boolean | undefined;
    forceZip64?: boolean | undefined;
    namePrependSlash?: boolean | undefined;
    store?: boolean | undefined;
    zlib?: ZlibOptions | undefined;
}

export interface TarOptions {
    gzip?: boolean | undefined;
    gzipOptions?: ZlibOptions | undefined;
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
