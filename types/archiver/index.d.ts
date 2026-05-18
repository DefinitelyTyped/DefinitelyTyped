import * as fs from "fs";
import ReaddirGlob = require("readdir-glob");
import stream = require("stream");
import { ZlibOptions } from "zlib";

export type Partial<T> = {
    [P in keyof T]?: T[P];
};

// This library adds `cwd` to the options
export type GlobOptions = ReaddirGlob.Options & { cwd?: string };

export interface EntryData {
    /** Sets the entry name including internal path */
    name: string;
    /** Sets the entry date */
    date?: Date | string | undefined;
    /** Sets the entry permissions */
    mode?: number | undefined;
    /**
     * Sets a path prefix for the entry name.
     * Useful when working with methods like `directory` or `glob`
     */
    prefix?: string | undefined;
    /**
     * Sets the fs stat data for this entry allowing
     * for reduction of fs stat calls when stat data is already known
     */
    stats?: fs.Stats | undefined;
}

export interface ZipEntryData extends EntryData {
    /** Sets the compression method to STORE */
    store?: boolean | undefined;
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

/** A function that lets you either opt out of including an entry (by returning false), or modify the contents of an entry as it is added (by returning an EntryData) */
export type EntryDataFunction = (entry: EntryData) => false | EntryData;

export class ArchiverError extends Error {
    code: string;
    data: any;

    constructor(code: string, data: any);
}

export type ArchiverOptions = CoreOptions & TransformOptions & ZipOptions & TarOptions;

export interface CoreOptions {
    statConcurrency?: number | undefined;
}

export interface TransformOptions {
    allowHalfOpen?: boolean | undefined;
    readableObjectMode?: boolean | undefined;
    writableObjectMode?: boolean | undefined;
    decodeStrings?: boolean | undefined;
    encoding?: string | undefined;
    highWaterMark?: number | undefined;
    objectMode?: boolean | undefined;
}

export interface ZipOptions {
    comment?: string | undefined;
    forceLocalTime?: boolean | undefined;
    forceZip64?: boolean | undefined;
    /** @default false */
    namePrependSlash?: boolean | undefined;
    store?: boolean | undefined;
    zlib?: ZlibOptions | undefined;
}

export interface TarOptions {
    gzip?: boolean | undefined;
    gzipOptions?: ZlibOptions | undefined;
}

export class Archiver extends stream.Transform {
    constructor(options?: ArchiverOptions);

    abort(): this;
    append(source: stream.Readable | Buffer | string, data?: EntryData | ZipEntryData | TarEntryData): this;

    /** if false is passed for destpath, the path of a chunk of data in the archive is set to the root */
    directory(dirpath: string, destpath: false | string, data?: Partial<EntryData> | EntryDataFunction): this;
    file(filepath: string, data: EntryData): this;
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

export class ZipArchive extends Archiver {
    constructor(options?: CoreOptions & TransformOptions & ZipOptions);
}

export class TarArchive extends Archiver {
    constructor(options?: CoreOptions & TransformOptions & TarOptions);
}

export class JsonArchive extends Archiver {
    constructor(options?: CoreOptions & TransformOptions);
}
