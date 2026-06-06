/// <reference types="node" />
import { Stream as NodeStream } from "node:stream";
import { PassThrough, Stream, TransformOptions } from "readable-stream";

export class Readable extends PassThrough {
    /**
     * @param fn The function to call to obtain the stream to read from
     */
    constructor(fn: () => NodeStream | Stream);
    /**
     * @param fn The function to call to obtain the stream to read from
     * @param options Options for the underlying {@link PassThrough} class.
     * Accessible via {@link fn}
     */
    constructor(fn: (options: TransformOptions) => NodeStream | Stream, options: TransformOptions);
    /**
     * @param fn The function to call to obtain the stream to read from
     * @param options Options for the underlying {@link PassThrough} class.
     * Accessible via {@link fn}, if they are passed
     */
    constructor(fn: (options?: TransformOptions) => NodeStream | Stream, options?: TransformOptions);
}

export class Writable extends PassThrough {
    /**
     * @param fn The function to call to obtain the stream to write to
     */
    constructor(fn: () => NodeStream | Stream);
    /**
     * @param fn The function to call to obtain the stream to write to
     * @param options Options for the underlying {@link PassThrough} class.
     * Accessible via {@link fn}
     */
    constructor(fn: (options: TransformOptions) => NodeStream | Stream, options: TransformOptions);
    /**
     * @param fn The function to call to obtain the stream to write to
     * @param options Options for the underlying {@link PassThrough} class.
     * Accessible via {@link fn}, if they are passed
     */
    constructor(fn: (options?: TransformOptions) => NodeStream | Stream, options?: TransformOptions);
}
