// Type definitions for duplexify 3.6
// Project: https://github.com/mafintosh/duplexify
// Definitions by: Sami Kukkonen <https://github.com/strax>
//                 Jonathan Lui <https://github.com/kinwa91>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import * as stream from "stream";

export = duplexify;

interface DuplexifyConstructor {
  (writable?: stream.Writable, readable?: stream.Readable, streamOptions?: stream.DuplexOptions): duplexify.Duplexify;
  new (writable?: stream.Writable, readable?: stream.Readable, streamOptions?: stream.DuplexOptions): duplexify.Duplexify;

  obj(writable?: stream.Writable, readable?: stream.Readable, streamOptions?: stream.DuplexOptions): duplexify.Duplexify;
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
