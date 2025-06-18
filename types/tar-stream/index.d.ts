/// <reference types="node" />

import stream = require("stream");

// forward-compatible iterator type for TS <5.6
export {}; // do not export StreamIterator
declare global {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface AsyncIteratorObject<T, TReturn, TNext> {}
}
interface StreamIterator<T> extends AsyncIterator<T, any, any>, AsyncIteratorObject<T, any, any> {
    [Symbol.asyncIterator](): StreamIterator<T>;
}

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
    type?:
        | "file"
        | "link"
        | "symlink"
        | "character-device"
        | "block-device"
        | "directory"
        | "fifo"
        | "contiguous-file"
        | "pax-header"
        | "pax-global-header"
        | "gnu-long-link-path"
        | "gnu-long-path"
        | null
        | undefined;
    uname?: string | undefined;
    gname?: string | undefined;
    devmajor?: number | undefined;
    devminor?: number | undefined;
}

export interface Pack extends stream.Readable {
    /**
     * To create a pack stream use tar.pack() and call pack.entry(header, [callback]) to add tar entries.
     */
    entry(headers: Headers, callback?: Callback): stream.Writable;
    entry(headers: Headers, buffer?: string | Buffer, callback?: Callback): stream.Writable;
    finalize(): void;
    [Symbol.asyncIterator](): StreamIterator<Buffer>;
}

export interface Entry extends stream.Readable {
    header: Headers;
    [Symbol.asyncIterator](): StreamIterator<Buffer>;
}

export interface Extract extends stream.Writable {
    on(event: string, listener: (...args: any[]) => void): this;
    on(
        event: "entry",
        listener: (headers: Headers, stream: stream.PassThrough, next: (error?: unknown) => void) => void,
    ): this;
    [Symbol.asyncIterator](): AsyncIterableIterator<Entry>;
}

export interface ExtractOptions extends stream.WritableOptions {
    /**
     * Whether or not to attempt to extract a file that does not have an
     * officially supported format in the `magic` header, such as `ustar`.
     */
    allowUnknownFormat?: boolean | undefined;
    /**
     * The encoding of the file name header.
     */
    filenameEncoding?: BufferEncoding | undefined;
}
export function extract(opts?: ExtractOptions): Extract;

export function pack(opts?: stream.ReadableOptions): Pack;
