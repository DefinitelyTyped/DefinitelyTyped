// Type definitions for inflation 2.0
// Project: https://github.com/stream-utils/inflation#readme
// Definitions by: Remco Haszing <https://github.com/remcohaszing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Readable } from "stream";
import { ZlibOptionsWithoutInfo, ZlibOptionsWithInfo } from "zlib";

export = inflate;

/**
 * Automatically unzip an HTTP stream.
 *
 * @returns a stream that emits inflated data from the given stream.
 */
declare function inflate(req: Readable, options?: inflate.Options): Readable;

declare namespace inflate {
    interface OptionsWithoutInfo extends ZlibOptionsWithoutInfo {
        /**
         * The encoding of the stream. If not given, will look in `stream.headers['content-encoding']`.
         */
        gzip?: "deflate" | "gzip" | "identity" | undefined;
    }
    interface OptionsWithInfo extends ZlibOptionsWithInfo {
        /**
         * The encoding of the stream. If not given, will look in `stream.headers['content-encoding']`.
         */
        gzip?: "deflate" | "gzip" | "identity" | undefined;
    }
    /**
     * I do not believe that passing info would matter with the actual JavaScript code and even if it did, it would be irrelevant from TypeScript's point of view. - @WilcoBakker
     */
    type Options = OptionsWithoutInfo | OptionsWithInfo;
}
