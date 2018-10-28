// Type definitions for flush-write-stream 1.0
// Project: https://github.com/mafintosh/flush-write-stream
// Definitions by: Daniel Cassidy <https://github.com/djcsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import { Writable, WritableOptions } from "stream";

type Callback = (error?: Error) => void;
type Write = (chunk: any, encoding: string, callback: Callback) => void;
type Flush = (callback: Callback) => void;

declare const WriteStream: {
    (opts: WritableOptions, write: Write, flush?: Flush): Writable;
    (write: Write, flush?: Flush): Writable;
    new(opts: WritableOptions, write: Write, flush?: Flush): Writable;
    new(write: Write, flush?: Flush): Writable;
    obj(opts: WritableOptions, write: Write, flush?: Flush): Writable;
    obj(write: Write, flush?: Flush): Writable;
};

export = WriteStream;
