// Type definitions for through2-concurrent 2.0
// Project: https://github.com/almost/through2-concurrent
// Definitions by: Alorel <https://github.com/Alorel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { TransformFunction, FlushCallback } from 'through2';
import { DuplexOptions, Transform as TransformStream } from 'stream';

declare function through2Concurrent(transform?: TransformFunction, flush?: FlushCallback): TransformStream;
declare function through2Concurrent(opts?: through2Concurrent.Through2ConcurrentOptions, transform?: TransformFunction, flush?: FlushCallback): TransformStream;

declare namespace through2Concurrent {
    interface Through2ConcurrentOptions extends DuplexOptions {
        maxConcurrency?: number;
    }

    function obj(transform?: TransformFunction, flush?: FlushCallback): TransformStream;
    function obj(opts?: Through2ConcurrentOptions, transform?: TransformFunction, flush?: FlushCallback): TransformStream;
}

export = through2Concurrent;
