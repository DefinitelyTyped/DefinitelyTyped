// Definition file started by dts-gen

/// <reference types="node" />

import { DuplexOptions } from "stream";

interface Duplexer2Options extends DuplexOptions {
    bubbleErrors?: boolean | undefined;
}

declare function duplexer2(
    options: Duplexer2Options,
    writable: NodeJS.WritableStream,
    readable: NodeJS.ReadableStream,
): NodeJS.ReadWriteStream;
declare function duplexer2(writable: NodeJS.WritableStream, readable: NodeJS.ReadableStream): NodeJS.ReadWriteStream;

export = duplexer2;
