// Type definitions for inflation 2.0
// Project: https://github.com/stream-utils/inflation#readme
// Definitions by: Remco Haszing <https://github.com/remcohaszing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Readable } from 'stream';
import { ZlibOptions } from 'zlib';

export = inflate;

/**
 * Automatically unzip an HTTP stream.
 *
 * @returns a stream that emits inflated data from the given stream.
 */
declare function inflate(req: Readable, options?: inflate.Options): Readable;

declare namespace inflate {
    interface Options extends ZlibOptions {
        /**
         * The encoding of the stream. If not given, will look in `stream.headers['content-encoding']`.
         */
        gzip?: 'deflate' | 'gzip' | 'identity';
    }
}
