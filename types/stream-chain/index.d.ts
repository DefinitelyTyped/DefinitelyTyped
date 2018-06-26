// Type definitions for stream-chain 2.0
// Project: https://github.com/uhop/stream-chain#readme
// Definitions by: Eugene Lazutkin <https://github.com/uhop>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Readable, Writable, Duplex, Transform, DuplexOptions } from 'stream';

export = Chain;

interface ITransformFunction {
    (chunk: any, encoding?: string): any;
}

declare type Stream = Readable | Writable | Duplex | Transform;
declare type StreamItem = Stream | ITransformFunction;

declare class Chain extends Duplex {
    constructor(fns: StreamItem[], options?: Chain.ChainOptions);

    input: Stream;
    output: Stream;
    streams: Stream[];
}

declare namespace Chain {
    interface ChainOptions extends DuplexOptions {
        skipEvents?: boolean;
    }

    function chain(fns: StreamItem[], options?: ChainOptions): Chain;
}
