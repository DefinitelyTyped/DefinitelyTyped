// Type definitions for ncp v2.0.0
// Project: https://github.com/AvianFlu/ncp
// Definitions by: Bart van der Schoor <https://github.com/bartvds/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function ncp(source: string, destination: string, callback: (err: Error) => void): void;
export function ncp(source: string, destination: string, options: Options, callback: (err: Error) => void): void;

interface Options {
    filter?: RegExp | ((filename: string) => boolean);
    transform?: (read: NodeJS.ReadableStream, write: NodeJS.WritableStream) => void;
    clobber?: boolean;
    dereference?: boolean;
    stopOnErr?: boolean;
    errs?: NodeJS.WritableStream;
}
