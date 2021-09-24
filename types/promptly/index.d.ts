// Type definitions for node-promptly 3.0.3
// Project: https://github.com/IndigoUnited/node-promptly
// Definitions by: Dan Spencer <https://github.com/danrspencer>
//                 Alex Ilyaev <https://github.com/alexilyaev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="node"/>

import stream = require('stream');

interface Callback {
    (err: Error, value: string): void;
}

export interface Options {
    default?: string | undefined;
    trim?: boolean | undefined;
    validator?: any;
    retry?: boolean | undefined;
    silent?: boolean | undefined;
    replace?: string | undefined;
    input?: NodeJS.ReadableStream | undefined;
    output?: NodeJS.WritableStream | undefined;
}

export declare function prompt(message: string, fn?: Callback): Promise<string>;
export declare function prompt(message: string, opts: Options, fn?: Callback): Promise<string>;

export declare function password(message: string, fn?: Callback): Promise<string>;
export declare function password(message: string, opts: Options, fn?: Callback): Promise<string>;

export declare function confirm(message: string, fn?: Callback): Promise<boolean>;
export declare function confirm(message: string, opts: Options, fn?: Callback): Promise<boolean>;

export declare function choose(message: string, choices: string[], fn?: Callback): Promise<string>;
export declare function choose(message: string, choices: string[], opts: Options, fn?: Callback): Promise<string>;
