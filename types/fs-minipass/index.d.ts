/// <reference types="node" />

import Minipass = require("minipass");
import type { Mode } from "fs";
import { Encoding } from "minipass";
/**
 * Path string is required, but somewhat irrelevant if an open file descriptor is passed in as an option.
 */
export class ReadStream extends Minipass {
    constructor(
        path: string,
        options?: {
            /**
             * Pass in a numeric file descriptor, if the file is already open.
             */
            fd?: number;
            /**
             * The size of reads to do, defaults to 16MB
             */
            readSize?: number;
            /**
             * The size of the file, if known. Prevents zero-byte read() call at the end.
             */
            size?: number;
            /**
             * Set to false to prevent the file descriptor from being closed when the file is done being read.
             */
            autoClose?: boolean;
        },
    );

    get fd(): number;
    get path(): string;

    readable: false;
    writeable: true;
}

export class ReadStreamSync extends ReadStream {}

/**
 * Path string is required, but somewhat irrelevant if an open file descriptor is passed in as an option.
 */
export class WriteStream extends Minipass {
    constructor(
        path: string,
        options?: {
            /**
             * Pass in a numeric file descriptor, if the file is already open.
             */
            fd?: number;
            /**
             * The mode to create the file with. Defaults to 0o666.
             */
            mode?: Mode;
            /**
             *  The position in the file to start reading. If not specified, then the file will start writing at position zero, and be truncated by default.
             */
            start?: number;
            /**
             * Set to false to prevent the file descriptor from being closed when the stream is ended.
             */
            autoClose?: boolean;
            /**
             * Flags to use when opening the file. Irrelevant if fd is passed in, since file won't be opened in that case. Defaults to 'a' if a pos is specified, or 'w' otherwise.
             */
            flags?: string;
        },
    );

    get fd(): number;
    get path(): string;

    end(cb?: () => void): never;
    end(chunk: any, cb?: () => void): never;
    end(chunk: any, encoding?: Encoding, cb?: () => void): never;
    end(buf: Buffer | string, enc: BufferEncoding, cb?: () => void): this;

    write(chunk: any, cb?: () => void): never;
    write(chunk: any, encoding?: Encoding, cb?: () => void): never;
    write(buf: Buffer | string, enc: BufferEncoding): boolean;
}

export class WriteStreamSync extends WriteStream {}
