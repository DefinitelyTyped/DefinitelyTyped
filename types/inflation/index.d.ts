/// <reference types="node" />

import { Readable } from "stream";
import { ZlibOptions } from "zlib";

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
        gzip?: "deflate" | "gzip" | "identity" | undefined;
    }
}
