// Type definitions for tar-stream 1.6
// Project: https://github.com/mafintosh/tar-stream
// Definitions by: Guy Lichtman <https://github.com/glicht>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/// <reference types="node" />

import stream = require('stream');

export type Callback = (err?: Error | null) => any;

// see https://github.com/mafintosh/tar-stream/blob/master/headers.js
export interface Headers {
    name: string;
    mode?: number | undefined;
    uid?: number | undefined;
    gid?: number | undefined;
    size?: number | undefined;
    mtime?: Date | undefined;
    linkname?: string | null | undefined;
    type?: 'file' | 'link' | 'symlink' | 'character-device' | 'block-device' | 'directory' | 'fifo' |
        'contiguous-file' | 'pax-header' | 'pax-global-header' | 'gnu-long-link-path' | 'gnu-long-path' | null | undefined;
    uname?: string | undefined;
    gname?: string | undefined;
    devmajor?: number | undefined;
    devminor?: number | undefined;
}

export interface Pack extends stream.Readable {
    entry(headers: Headers, buffer?: string | Buffer | Callback, callback?: Callback): stream.Writable;
    finalize(): void;
}

export interface Extract extends stream.Writable {
    destroy(error?: Error): any;
    on(event: string, listener: (...args: any[]) => void): this;
    on(event: "entry", listener: (headers: Headers, stream: stream.PassThrough, next: () => void) => void): this;
}

export function extract(opts?: stream.WritableOptions): Extract;

export function pack(opts?: stream.ReadableOptions): Pack;
