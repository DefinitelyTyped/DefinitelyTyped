// Type definitions for rrdir 8.2
// Project: https://github.com/silverwind/rrdir#readme
// Definitions by: Zhang Nan <https://github.com/anyone-developer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as fs from "fs";
import { PicomatchOptions } from "picomatch";

interface rrdir {
    async(dir: string, options?: Options): Promise<Array<Entry<string>>>;
    async(dir: Buffer, options?: Options): Promise<Array<Entry<Buffer>>>;

    sync(dir: string, options?: Options): Array<Entry<string>>;
    sync(dir: Buffer, options?: Options): Array<Entry<Buffer>>;

    (dir: string, options?: Options): AsyncIterable<Entry<string>>;
    (dir: Buffer, options?: Options): AsyncIterable<Entry<Buffer>>;
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

interface Entry<T extends string | Buffer> {
    path: T;
    directory?: boolean;
    symlink?: boolean;
    stats?: fs.Stats;
    err?: Error;
}
