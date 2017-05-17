// Type definitions for twig
// Project: https://github.com/twigjs/twig.js
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
//                 Tim Schumacher <https://github.com/enko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/twig.d.ts


export interface Parameters {
    id?: any;
    blocks?: any;
    macros?: any;
    base?: any;
    path?: any;
    url?: any;
    name?: any;
    method?: any;
    options?: any;
}

export interface Template {
    reset(blocks: any): void;
    render(context?: any, params?: any, allow_async?: boolean): string | Promise<string>;
    renderAsync(context?: any, params?: any): Promise<string>;
    importFile(file: string): Template;
    importBlocks(file: string, override?: boolean): void;
    importMacros(file: string): Template;
    getLoaderMethod(): string;
    compile(options: any) : string;
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
