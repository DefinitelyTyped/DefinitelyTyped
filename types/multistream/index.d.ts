/// <reference types="node" />

import { Readable as ReadableStream, ReadableOptions, Stream } from "stream";

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
