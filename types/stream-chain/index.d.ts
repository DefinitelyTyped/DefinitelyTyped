/// <reference types="node" />
import { Duplex, DuplexOptions, Readable, Transform, Writable } from "stream";

export = Chain;

type TransformFunction = (chunk: any, encoding?: string) => any;

type Stream = Readable | Writable | Duplex | Transform;
type StreamItem = Stream | TransformFunction;

declare class Chain extends Duplex {
    constructor(fns: StreamItem[], options?: Chain.ChainOptions);

    input: Stream;
    output: Stream;
    streams: Stream[];
}

declare namespace Chain {
    interface ChainOptions extends DuplexOptions {
        skipEvents?: boolean | undefined;
    }

    function chain(fns: StreamItem[], options?: ChainOptions): Chain;
}
