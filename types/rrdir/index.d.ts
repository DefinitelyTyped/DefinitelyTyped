/// <reference types="node" />

import * as fs from "fs";

declare function rrdirAsync(dir: string, options?: Options): Promise<Array<Entry<string>>>;
declare function rrdirAsync(dir: Uint8Array, options?: Options): Promise<Array<Entry<Uint8Array>>>;

declare function rrdirSync(dir: string, options?: Options): Array<Entry<string>>;
declare function rrdirSync(dir: Uint8Array, options?: Options): Array<Entry<Uint8Array>>;

declare function rrdir(dir: string, options?: Options): AsyncIterable<Entry<string>>;
declare function rrdir(dir: Uint8Array, options?: Options): AsyncIterable<Entry<Uint8Array>>;

export { rrdir, rrdirAsync, rrdirSync };

interface Options {
    stats?: boolean | undefined;
    followSymlinks?: boolean | undefined;
    exclude?: string[] | undefined;
    include?: string[] | undefined;
    strict?: boolean | undefined;
    insensitive?: boolean | undefined;
}

interface Entry<T extends string | Uint8Array> {
    path: T;
    directory?: boolean | undefined;
    symlink?: boolean | undefined;
    stats?: fs.Stats | undefined;
    err?: Error | undefined;
}
