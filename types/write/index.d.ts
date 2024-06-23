/// <reference types="node" />
import * as fs from "fs";

type Data = string | Buffer | Uint8Array;

interface CommonOptions {
    newline?: boolean | undefined;
    overwrite?: boolean | undefined;
    increment?: boolean | undefined;
}

type Options =
    & Omit<fs.WriteFileOptions, "encoding">
    & Omit<fs.MakeDirectoryOptions, "recursive">
    & CommonOptions;

type CreateWriteStreamOptions = Extract<Parameters<typeof fs.createWriteStream>[1], Record<string, any>>;

type StreamOptions =
    & Omit<CreateWriteStreamOptions, "encoding">
    & Omit<fs.MakeDirectoryOptions, "recursive">
    & CommonOptions;

interface Result<T extends Data> {
    path: string;
    data: T;
}

type Callback<T extends Data> = (err: Error | null, result?: Result<T>) => any;

declare function write<T extends Data>(filepath: string, data: T, options: Options, callback: Callback<T>): void;
declare function write<T extends Data>(filepath: string, data: T, callback: Callback<T>): void;
declare function write<T extends Data>(filepath: string, data: T, options?: Options): Promise<Result<T>>;

declare namespace write {
    function sync<T extends Data>(filepath: string, data: T, options?: Options): Result<T>;

    function stream(filepath: string, options?: StreamOptions): fs.WriteStream;
}

export = write;
