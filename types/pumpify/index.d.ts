/// <reference types="node" />

import * as duplexify from "duplexify";
import { Duplex, Readable, Stream, Writable } from "stream";

declare class Pumpify extends Duplex implements duplexify.Duplexify {
    constructor(...streams: Stream[]);
    constructor(streams: Stream[]);
    setPipeline(...streams: Stream[]): void;
    setPipeline(streams: Stream[]): void;

    // Duplexify members
    setWritable(writable: Writable): void;
    setReadable(readable: Readable): void;
}

interface PumpifyFactoryOptions {
    autoDestroy: boolean;
    destroy: boolean;
    objectMode: boolean;
    highWaterMark: number;
}

declare namespace Pumpify {
    let obj: typeof Pumpify;
    function ctor(opts: PumpifyFactoryOptions): typeof Pumpify;
}

export = Pumpify;
