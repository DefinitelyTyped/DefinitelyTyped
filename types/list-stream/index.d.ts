// Type definitions for list-stream 1.0
// Project: https://github.com/rvagg/list-stream
// Definitions by: IanStorm <https://github.com/IanStorm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Duplex, DuplexOptions } from "stream";

declare namespace ListStream {
}

declare class ListStream extends Duplex {
    constructor(callback?: (err: Error, data: any[]) => void);
    constructor(options?: DuplexOptions, callback?: (err: Error, data: any[]) => void);

    static obj(callback?: (err: Error, data: any[]) => void): ListStream;
    static obj(options?: DuplexOptions, callback?: (err: Error, data: any[]) => void): ListStream;

    append(chunk: any): void;
    duplicate(): ListStream;
    end(): void;
    get(index: number): any;
    length: number;
}

export = ListStream;
