/// <reference types="node" />

import stream = require("stream");

export = duplexify;

interface DuplexifyConstructor {
    (writable?: stream.Writable, readable?: stream.Readable, streamOptions?: stream.DuplexOptions): duplexify.Duplexify;
    new(
        writable?: stream.Writable,
        readable?: stream.Readable,
        streamOptions?: stream.DuplexOptions,
    ): duplexify.Duplexify;

    obj(
        writable?: stream.Writable,
        readable?: stream.Readable,
        streamOptions?: stream.DuplexOptions,
    ): duplexify.Duplexify;
}
declare var duplexify: DuplexifyConstructor;
declare namespace duplexify {
    interface Duplexify extends stream.Duplex {
        cork(): void;
        uncork(): void;
        setWritable(writable: stream.Writable): void;
        setReadable(readable: stream.Readable): void;
    }
}
