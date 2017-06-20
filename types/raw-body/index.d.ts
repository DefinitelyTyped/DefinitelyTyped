// Type definitions for raw-body 2.1
// Project: https://github.com/stream-utils/raw-body
// Definitions by: Stefan Reichel <https://github.com/bomret>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Readable } from "stream";

declare namespace getRawBody {
    type Encoding = string | true;

    interface Options {
        /**
         * The length of the stream. If the contents of the stream do not add up to this length, an 400 error code is returned.
         */
        length?: number | string | null;
        /**
         * The byte limit of the body.
         * This is the number of bytes or any string format supported by `bytes`, for example `1000`, `'500kb'` or `'3mb'`.
         * If the body ends up being larger than this limit, a `413` error code is returned.
         */
        limit?: number | string | null;
        /**
         * The encoding to use to decode the body into a string.
         * By default, a `Buffer` instance will be returned when no encoding is specified.
         * Most likely, you want `utf-8`, so setting encoding to `true` will decode as `utf-8`.
         * You can use any type of encoding supported by `iconv-lite`.
         */
        encoding?: Encoding | null;
    }

    interface RawBodyError extends Error {
        /**
         * The limit in bytes.
         */
        limit?: number;
        /**
         * The expected length of the stream.
         */
        length?: number;
        expected?: number;
        /**
         * The received bytes.
         */
        received?: number;
        /**
         * The invalid encoding.
         */
        encoding?: string;
        /**
         * The corresponding status code for the error.
         */
        status: number;
        statusCode: number;
        /**
         * Either `entity.too.large`, `request.aborted`, `request.size.invalid`, `stream.encoding.set`, or `encoding.unsupported`.
         */
        type: string;
    }
}

/**
 * Gets the entire buffer of a stream either as a `Buffer` or a string.
 * Validates the stream's length against an expected length and maximum limit.
 * Ideal for parsing request bodies.
 */
declare function getRawBody(stream: Readable, callback: (err: getRawBody.RawBodyError, body: Buffer) => void): void;
declare function getRawBody(
    stream: Readable,
    options: (getRawBody.Options & { encoding: getRawBody.Encoding }) | getRawBody.Encoding,
    callback: (err: getRawBody.RawBodyError, body: string) => void): void;
declare function getRawBody(stream: Readable, options: getRawBody.Options, callback: (err: getRawBody.RawBodyError, body: Buffer) => void): void;

declare function getRawBody(stream: Readable, options: (getRawBody.Options & { encoding: getRawBody.Encoding }) | getRawBody.Encoding): Promise<string>;
declare function getRawBody(stream: Readable, options?: getRawBody.Options): Promise<Buffer>;

export = getRawBody;
