/// <reference types="node" />

import type { Readable, Transform, TransformOptions } from "stream";

interface Options extends TransformOptions {
    advanceOnClose?: boolean;
}

interface NextStream {
    (): Readable | null | Promise<Readable | null>;
}

declare class StreamConcat extends Transform {
    constructor(streams: Readable[] | NextStream, options?: Options);

    addStream(newStream: Readable): void;
    nextStream(): Promise<void>;
}

export = StreamConcat;
