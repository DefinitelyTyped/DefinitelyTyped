// Type definitions for rrdir 8.2
// Project: https://github.com/silverwind/rrdir#readme
// Definitions by: Zhang Nan <https://github.com/anyone-developer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference lib="esnext.asynciterable" />
/// <reference types="node" />

import * as fs from "fs";
import { PicomatchOptions } from "picomatch/picomatch-options";

interface rrdir {
    async(dir: string, options?: Options): Promise<StringEntry[]>;
    async(dir: Buffer, options?: Options): Promise<BufferEntry[]>;

    sync(dir: string, options?: Options): StringEntry[];
    sync(dir: Buffer, options?: Options): BufferEntry[];

    (dir: string, options?: Options): AsyncIterable<StringEntry>;
    (dir: Buffer, options?: Options): AsyncIterable<BufferEntry>;
}

declare const c: rrdir;
export = c;

interface Options {
    stats?: boolean;
    followSymlinks?: boolean;
    exclude?: string[];
    include?: string[];
    strict?: boolean;
    match?: PicomatchOptions;
}

interface Entry<T> {
    path: T;
    directory?: boolean;
    symlink?: boolean;
    stats?: fs.Stats;
    err?: Error;
}
interface StringEntry extends Entry<string> {}
interface BufferEntry extends Entry<Buffer> {}
