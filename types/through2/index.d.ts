/// <reference types="node" />

import stream = require("stream");

declare function through2(transform?: through2.TransformFunction, flush?: through2.FlushCallback): stream.Transform;
declare function through2(
    opts?: stream.DuplexOptions,
    transform?: through2.TransformFunction,
    flush?: through2.FlushCallback,
): stream.Transform;

declare namespace through2 {
    interface Through2Constructor extends stream.Transform {
        new(opts?: stream.DuplexOptions): stream.Transform;
        (opts?: stream.DuplexOptions): stream.Transform;
    }

    type TransformCallback = (err?: any, data?: any) => void;
    type TransformFunction = (
        this: stream.Transform,
        chunk: any,
        enc: BufferEncoding,
        callback: TransformCallback,
    ) => void;
    type FlushCallback = (this: stream.Transform, flushCallback: () => void) => void;

    /**
     * Convenvience method for creating object streams
     */
    function obj(transform?: TransformFunction, flush?: FlushCallback): stream.Transform;

    /**
     * Creates a constructor for a custom Transform. This is useful when you
     * want to use the same transform logic in multiple instances.
     */
    function ctor(transform?: TransformFunction, flush?: FlushCallback): Through2Constructor;
    function ctor(
        opts?: stream.DuplexOptions,
        transform?: TransformFunction,
        flush?: FlushCallback,
    ): Through2Constructor;
}

export = through2;
