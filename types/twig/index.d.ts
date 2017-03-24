// Type definitions for twig
// Project: https://github.com/justjohn/twig.js
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/twig.d.ts


export interface Parameters {
    id?: any;
    ref?: any;
    href?: any;
    path?: any;
    debug?: boolean;
    trace?: boolean;
    strict_variables?: boolean;
    data: any;
}

export interface Template {
}

export interface CompileOptions {
    filename: string;
    settings: any;
}

export declare function twig(params: Parameters): Template;
export declare function extendFilter(name: string, definition: (left: any, ...params: any[]) => string): void;
export declare function extendFunction(name: string, definition: (...params: any[]) => string): void;
export declare function extendTest(name: string, definition: (value: any) => boolean): void;
export declare function extendTag(definition: any): void;
export declare function compile(markup: string, options: CompileOptions): (context: any) => any;
export declare function renderFile(path: string, options: CompileOptions, fn: (err: Error, result: any) => void): void;
export declare function __express(path: string, options: CompileOptions, fn: (err: Error, result: any) => void): void;
export declare function cache(value: boolean): void;
