// Type definitions for list-stream 1.0
// Project: https://github.com/rvagg/list-stream
// Definitions by: Christian Sporer <https://github.com/IanStorm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="node" />

import { Duplex, DuplexOptions } from "stream";

interface ListStreamMethod {
    (callback?: (err: Error, data: any[]) => void): ListStream;
    (options?: DuplexOptions, callback?: (err: Error, data: any[]) => void): ListStream;
}

interface ListStreamConstructor extends ListStreamMethod {
    new(callback?: (err: Error, data: any[]) => void): ListStream;
    new(options?: DuplexOptions, callback?: (err: Error, data: any[]) => void): ListStream;

    obj: ListStreamMethod;
}

declare let ListStream: ListStreamConstructor;

interface ListStream extends Duplex {
    append(chunk: any): void;
    duplicate(): ListStream;
    end(): void;
    get(index: number): any;
    length: number;
}

export = ListStream;
