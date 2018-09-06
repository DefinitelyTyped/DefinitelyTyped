// Type definitions for through2-concurrent 2.0
// Project: https://github.com/almost/through2-concurrent
// Definitions by: Alorel <https://github.com/Alorel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as through2 from 'through2';
import stream = require('stream');

declare function through2Concurrent(transform?: through2.TransformFunction, flush?: through2.FlushCallback): stream.Transform;
declare function through2Concurrent(opts?: through2Concurrent.Through2ConcurrentOptions, transform?: through2.TransformFunction, flush?: through2.FlushCallback): stream.Transform;

declare namespace through2Concurrent {
    interface Through2ConcurrentOptions extends stream.DuplexOptions {
        maxConcurrency?: number;
    }

    function obj(transform?: through2.TransformFunction, flush?: through2.FlushCallback): stream.Transform;
    function obj(opts?: Through2ConcurrentOptions, transform?: through2.TransformFunction, flush?: through2.FlushCallback): stream.Transform;
}

export = through2Concurrent;
