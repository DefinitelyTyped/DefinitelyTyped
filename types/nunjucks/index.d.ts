// Type definitions for nunjucks 3.1
// Project: http://mozilla.github.io/nunjucks/, https://github.com/mozilla/nunjucks
// Definitions by: Ruben Slabbert <https://github.com/RubenSlabbert>
//                 Matthew Burstein <https://github.com/MatthewBurstein>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export type TemplateCallback<T> = (
  err: lib.TemplateError | null,
  res: T | null,
) => void;
export type Callback<E, T> = (err: E | null, res: T | null) => void;

export function render(name: string, context?: object): string;
export function render(name: string, context?: object, callback?: TemplateCallback<string>): void;

export function renderString(src: string, context: object): string;
export function renderString(src: string, context: object, callback?: TemplateCallback<string>): void;

export function compile(src: string, env?: Environment, callback?: TemplateCallback<Template>): Template;

export function precompile(path: string, opts?: PrecompileOptions): string;
export function precompileString(src: string, opts?: PrecompileOptions): string;

export interface PrecompileOptions {
    name?: string;
    asFunction?: boolean;
    force?: boolean;
    env?: Environment;
    include?: string[];
    exclude?: string[];
    wrapper?(templates: { name: string, template: string }, opts: PrecompileOptions): string;
}

export class Template {
    constructor(src: string, env?: Environment, eagerCompile?: boolean);
    render(context?: object): string;
    render(context?: object, callback?: TemplateCallback<string>): void;
}

export function configure(options: ConfigureOptions): Environment;
export function configure(path: string | string[], options?: ConfigureOptions): Environment;

export interface ConfigureOptions {
    autoescape?: boolean;
    throwOnUndefined?: boolean;
    trimBlocks?: boolean;
    lstripBlocks?: boolean;
    watch?: boolean;
    noCache?: boolean;
    web?: {
        useCache?: boolean,
        async?: boolean
    };
    express?: object;
    tags?: {
        blockStart?: string,
        blockEnd?: string,
        variableStart?: string,
        variableEnd?: string,
        commentStart?: string,
        commentEnd?: string
    };
}

export class Environment {
    options: {
        autoescape: boolean;
    };

    constructor(loader?: ILoader | ILoader[] | null, opts?: ConfigureOptions);
    render(name: string, context?: object): string;
    render(name: string, context?: object, callback?: TemplateCallback<string>): void;

    renderString(name: string, context: object): string;
    renderString(name: string, context: object, callback?: TemplateCallback<string>): void;

    addFilter(name: string, func: (...args: any[]) => any, async?: boolean): Environment;
    getFilter(name: string): (...args: any[]) => any;

    addExtension(name: string, ext: Extension): Environment;
    removeExtension(name: string): void;
    getExtension(name: string): Extension;
    hasExtension(name: string): boolean;

    addGlobal(name: string, value: any): Environment;
    getGlobal(name: string): any;

    getTemplate(name: string, eagerCompile?: boolean): Template;
    getTemplate(name: string, eagerCompile?: boolean, callback?: Callback<Error, Template>): void;

    express(app: object): void;
}

export interface Extension {
    tags: string[];
    // Parser API is undocumented it is suggested to check the source: https://github.com/mozilla/nunjucks/blob/master/src/parser.js
    parse(parser: any, nodes: any, lexer: any): any;
}

export function installJinjaCompat(): void;

export interface ILoader {
    async?: boolean;
    getSource(name: string): LoaderSource;
    getSource(name: string, callback: Callback<Error, LoaderSource>): void;
    extend?(extender: ILoader): ILoader;
}

// Needs both Loader and ILoader since nunjucks uses a custom object system
// Object system is also responsible for the extend methods
export class Loader {
    on(name: string, func: (...args: any[]) => any): void;
    emit(name: string, ...args: any[]): void;
    resolve(from: string, to: string): string;
    isRelative(filename: string): boolean;
    extend(toExtend: ILoader): ILoader;
}

export interface LoaderSource {
    src: string;
    path: string;
    noCache: boolean;
}

export interface FileSystemLoaderOptions {
    /** if true, the system will automatically update templates when they are changed on the filesystem */
    watch?: boolean;

    /**  if true, the system will avoid using a cache and templates will be recompiled every single time */
    noCache?: boolean;
}

export class FileSystemLoader extends Loader implements ILoader {
    init(searchPaths: string[], opts: any): void;
    getSource(name: string): LoaderSource;
    constructor(searchPaths?: string | string[], opts?: FileSystemLoaderOptions);
}

export class WebLoader extends Loader implements ILoader {
    constructor(baseUrl: string, opts?: any);
    getSource(name: string): LoaderSource;
}

export class PrecompiledLoader extends Loader implements ILoader {
    init(searchPaths: string[], opts: any): void;
    getSource(name: string): LoaderSource;
}

export namespace runtime {
    class SafeString {
        constructor(val: string);
        val: string;
        length: number;
        valueOf(): string;
        toString(): string;
    }
}

export namespace lib {
    class TemplateError extends Error {
        constructor(message: string, lineno: number, colno: number);

        name: string; // always 'Template render error'
        message: string;
        stack: string;

        cause?: Error;
        lineno: number;
        colno: number;
    }
}
