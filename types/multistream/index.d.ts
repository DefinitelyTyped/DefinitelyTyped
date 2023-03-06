// Type definitions for multistream 4.1
// Project: https://github.com/feross/multistream
// Definitions by: mrmlnc <https://github.com/mrmlnc>, mpvharmelen <https://github.com/mpvharmelen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Stream, Readable as ReadableStream, ReadableOptions } from 'stream';

declare class MultiStream extends ReadableStream {
    constructor(streams: MultiStream.Streams, opts?: ReadableOptions);
}

interface FactoryStreamCallback {
    (err: Error | null, stream: null): void;
    (err: null, stream: ReadableStream): void;
}

declare namespace MultiStream {
    type LazyStream = () => Stream;
    type FactoryStream = (cb: FactoryStreamCallback) => void;
    type Streams = Array<LazyStream | ReadableStream> | FactoryStream;

    function obj(streams: Streams): MultiStream;
}

export = MultiStream;
