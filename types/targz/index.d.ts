// Type definitions for targz 1.0
// Project: https://github.com/miskun/targz#readme
// Definitions by: Alexander Curtis <https://github.com/alexandercurtis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as tar from 'tar-fs';
import * as zlib from 'zlib';

export interface options {
    src: string;
    dest: string;
    tar?: tar.ExtractOptions;
    gz?: zlib.ZlibOptions;
}

export function compress(opts?: options, callback?: (error: Error | string | null) => void): void;
export function decompress(opts?: options, callback?: (error: Error | string | null) => void): void;
