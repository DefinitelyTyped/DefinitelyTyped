// Type definitions for duplexer3 0.1
// Project: https://github.com/floatdrop/duplexer3
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import * as stream from 'stream';

export = duplexer3;

declare function duplexer3(writableStream: NodeJS.WritableStream, readableStream: NodeJS.ReadableStream): stream.Duplex;
declare function duplexer3(options: duplexer3.Options, writableStream: NodeJS.WritableStream, readableStream: NodeJS.ReadableStream): stream.Duplex;

declare namespace duplexer3 {
    interface Options extends stream.DuplexOptions {
        bubbleErrors?: boolean;
    }
}
