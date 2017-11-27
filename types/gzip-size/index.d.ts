// Type definitions for gzip-size 4.0
// Project: https://github.com/sindresorhus/gzip-size
// Definitions by: York Yao <https://github.com/plantain-00>
//                 Jimi van der Woning <https://github.com/jimivdw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from 'stream';
import * as zlib from 'zlib';

declare function gzipSize(input: string | Buffer, options?: zlib.ZlibOptions): Promise<number>;

declare namespace gzipSize {
    function sync(input: string | Buffer, options?: zlib.ZlibOptions): number;
    function stream(options?: zlib.ZlibOptions): stream.PassThrough;
}

export = gzipSize;
