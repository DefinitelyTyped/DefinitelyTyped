/// <reference types="node" />
import * as stream from "stream";

export = duplexer3;

declare function duplexer3(writableStream: NodeJS.WritableStream, readableStream: NodeJS.ReadableStream): stream.Duplex;
declare function duplexer3(
    options: duplexer3.Options,
    writableStream: NodeJS.WritableStream,
    readableStream: NodeJS.ReadableStream,
): stream.Duplex;

declare namespace duplexer3 {
    interface Options extends stream.DuplexOptions {
        bubbleErrors?: boolean | undefined;
    }
}
