// Type definitions for nunjucks 3.0
// Project: http://mozilla.github.io/nunjucks/
// Definitions by: Ruben Slabbert <https://github.com/RubenSlabbert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export function render(name: string, context?: object): string;
export function render(name: string, context?: object, callback?: (err: any, res: string) => any): void;

export function renderString(src: string, context: object): string;
export function renderString(src: string, context: object, callback?: (err: any, res: string) => any): void;

export function compile(src: string, env?: Environment, callback?: (err: any, res: Template) => any): Template;

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
    render(context?: object, callback?: (err: any, res: string) => any): void;
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
    render(name: string, context?: object, callback?: (err: any, res: string) => any): void;

    renderString(name: string, context: object): string;
    renderString(name: string, context: object, callback?: (err: any, res: string) => any): void;

    addFilter(name: string, func: (...args: any[]) => any, async?: boolean): void;
    getFilter(name: string): void;

    addExtension(name: string, ext: Extension): void;
    removeExtension(name: string): void;
    getExtension(name: string): Extension;
    hasExtension(name: string): void;

    addGlobal(name: string, value: any): void;

    getTemplate(name: string, eagerCompile?: boolean): Template;
    getTemplate(name: string, eagerCompile?: boolean, callback?: (err: any, templ: Template) => Template): void;

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

export class WebLoader implements ILoader {
    constructor(baseUrl: string, opts?: any);
    getSource(name: string): LoaderSource;
}

export class PrecompiledLoader extends Loader implements ILoader {
    init(searchPaths: string[], opts: any): void;
    getSource(name: string): LoaderSource;
}
