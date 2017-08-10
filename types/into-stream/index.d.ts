// Type definitions for into-stream 3.1
// Project: https://github.com/sindresorhus/into-stream
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

export = intoStream;

declare function intoStream(input: intoStream.Input | Promise<intoStream.Input>): NodeJS.ReadableStream;

declare namespace intoStream {
    function obj(input: object | Iterable<object> | Promise<object | Iterable<object>>): NodeJS.ReadableStream;

    type Input = Buffer | string | Iterable<Buffer | string>;
}
