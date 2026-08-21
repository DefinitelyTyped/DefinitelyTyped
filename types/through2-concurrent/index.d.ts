/// <reference types="node" />

import { DuplexOptions, Transform as TransformStream } from "stream";
import { FlushCallback, TransformFunction } from "through2";

declare function through2Concurrent(transform?: TransformFunction, flush?: FlushCallback): TransformStream;
declare function through2Concurrent(
    opts?: through2Concurrent.Through2ConcurrentOptions,
    transform?: TransformFunction,
    flush?: FlushCallback,
): TransformStream;

declare namespace through2Concurrent {
    interface Through2ConcurrentOptions extends DuplexOptions {
        maxConcurrency?: number | undefined;
    }

    function obj(transform?: TransformFunction, flush?: FlushCallback): TransformStream;
    function obj(
        opts?: Through2ConcurrentOptions,
        transform?: TransformFunction,
        flush?: FlushCallback,
    ): TransformStream;
}

export = through2Concurrent;
