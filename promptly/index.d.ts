// Type definitions for node-promptly 1.1.1
// Project: https://github.com/IndigoUnited/node-promptly
// Definitions by: Dan Spencer <https://github.com/danrspencer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="node"/>


import stream = require('stream');

interface Callback {
    (err: Error, value: string): void;
}

export interface Options {
    default?: string;
    trim?: boolean;
    validator?: any;
    retry?: boolean;
    silent?: boolean;
    input?: NodeJS.ReadableStream;
    output?: NodeJS.WritableStream;
}

export declare function prompt(message: string, fn?: Callback): any;
export declare function prompt(message: string, opts: Options, fn?: Callback): any;

export declare function password(message: string, fn?: Callback): any;
export declare function password(message: string, opts: Options, fn?: Callback): any;

export declare function confirm(message: string, fn?: Callback): any;
export declare function confirm(message: string, opts: Options, fn?: Callback): any;

export declare function choose(message: string, choices: string[], fn?: Callback): any;
export declare function choose(message: string, choices: string[], opts: Options, fn?: Callback): any;
