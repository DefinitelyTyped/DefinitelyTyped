// Type definitions for twig 1.12
// Project: https://github.com/twigjs/twig.js
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
//                 Tim Schumacher <https://github.com/enko>
//                 Maik Tizziani <https://github.com/mtizziani>
//                 Daniel Melcer <https://github.com/dmelcer9>
//                 Chris Frewin <https://github.com/princefishthrower>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/twig.d.ts

export interface Parameters {
    id?: any;
    blocks?: any;
    macros?: any;
    base?: any;
    path?: any;
    href?: any;
    name?: any;
    method?: any;
    options?: any;
    data?: any;
    async?: any;
    load?: (template: Template) => void;
}

export interface Template {
    reset(blocks: any): void;
    render(context?: any, params?: any, allow_async?: false): string;
    render(context?: any, params?: any, allow_async?: boolean): string | Promise<string>;
    renderAsync(context?: any, params?: any): Promise<string>;
    importFile(file: string): Template;
    importBlocks(file: string, override?: boolean): void;
    importMacros(file: string): Template;
    getLoaderMethod(): string;
    compile(options: any): string;
}

export interface CompileOptions {
    filename: string;
    settings: {
        views: any;
        'twig options': any;
    };
}

export function twig(params: Parameters): Template;
export function extendFilter(name: string, definition: (left: any, ...params: any[]) => string): void;
export function extendFunction(name: string, definition: (...params: any[]) => string): void;
export function extendTest(name: string, definition: (value: any) => boolean): void;
export function extendTag(definition: any): void;
export function compile(markup: string, options: CompileOptions): (context: any) => any;
export function renderFile(path: string, options: (err: Error, result: any) => void, fn: null): void;
export function renderFile(path: string, options: {} | CompileOptions, fn: (err: Error, result: any) => void): void;
export function __express(path: string, options: CompileOptions, fn: (err: Error, result: any) => void): void;
export function cache(value: boolean): void;
