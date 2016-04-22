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

declare export function twig(params: Parameters): Template;
declare export function extendFilter(name: string, definition: (left: any, ...params: any[]) => string): void;
declare export function extendFunction(name: string, definition: (...params: any[]) => string): void;
declare export function extendTest(name: string, definition: (value: any) => boolean): void;
declare export function extendTag(definition: any): void;
declare export function compile(markup: string, options: CompileOptions): (context: any) => any;
declare export function renderFile(path: string, options: CompileOptions, fn: (err: Error, result: any) => void): void;
declare export function __express(path: string, options: CompileOptions, fn: (err: Error, result: any) => void): void;
declare export function cache(value: boolean): void;
