// Type definitions for ejs.js 2.5
// Project: http://ejs.co/
// Definitions by: Ben Liddicott <https://github.com/benliddicott>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export interface Data {
    [name: string]: any;
}
/**
 * EJS template function cache. This can be a LRU object from lru-cache NPM
 * module. By default, it is {@link module:utils.cache}, a simple in-process
 * cache that grows continuously.
 */
export let cache: Cache;
/**
 * Name of the object containing the locals.
 *
 * This variable is overridden by {@link Options}`.localsName` if it is not
 * `undefined`.
 */
export let localsName: string;
/**
 * Get the path to the included file from the parent file path and the
 * specified path.
 */
export function resolveInclude(name: string, filename: string, isDir: boolean): string;
/**
 * Compile the given `str` of ejs into a template function.
 */
export function compile(template: string, opts?: Options): (TemplateFunction);
/**
 * Render the given `template` of ejs.
 *
 * If you would like to include options but not data, you need to explicitly
 * call this function with `data` being an empty object or `null`.
 */
export function render(template: string, data?: Data, opts?: Options): string;

export type RenderFileCallback<T> = (err: Error, str?: string) => T;

/**
 * Render an EJS file at the given `path` and callback `cb(err, str)`.
 *
 * If you would like to include options but not data, you need to explicitly
 * call this function with `data` being an empty object or `null`.
 */
export function renderFile<T>(path: string, cb: RenderFileCallback<T>): T;
export function renderFile<T>(path: string, data: Data, cb: RenderFileCallback<T>): T;
export function renderFile<T>(path: string, data: Data, opts: Options, cb: RenderFileCallback<T>): T;

/**
 * Clear intermediate JavaScript cache. Calls {@link Cache#reset}.
 */
export function clearCache(): void;

export type TemplateFunction = (data?: Data) => string;
export interface Options {
    /** Compiled functions are cached, requires `filename` */
    cache?: boolean;
    /**
     * The name of the file being rendered. Not required if you are using `renderFile()`.
     * Used by `cache` to key caches, and for includes.
     */
    filename?: string;
    /** Set project root for includes with an absolute path (/file.ejs). */
    root?: string;
    /** Function execution context */
    context?: any;
    /** When `false` no debug instrumentation is compiled */
    compileDebug?: boolean;
    /** When `true`, compiles a function that can be rendered in the browser without needing to load the EJS Runtime (ejs.min.js). */
    client?: boolean;
    /** Character to use with angle brackets for open/close */
    delimiter?: string;
    /** Output generated function body */
    debug?: boolean;
    /** When set to `true`, generated function is in strict mode */
    strict?: boolean;
    /**
     * Whether or not to use `with() {}` constructs.
     * If `false` then the locals will be stored in the `locals` object. Set to `false` in strict mode.
     */
    _with?: boolean;
    /** Name to use for the object storing local variables when not using `with` Defaults to `locals` */
    localsName?: string;
    /**
     * Remove all safe-to-remove whitespace, including leading and trailing whitespace.
     * It also enables a safer version of `-%>` line slurping for all scriptlet tags (it does not strip new lines of tags in the middle of a line).
     */
    rmWhitespace?: boolean;
    /**
     * The escaping function used with `<%=` construct.
     * It is used in rendering and is `.toString()`ed in the generation of client functions.
     * (By default escapes XML).
     */
    escape?(str: string): string;
}

export function escapeRegexChars(s: string): string;
/**
 * Escape characters reserved in XML.
 *
 * This is simply an export of {@link module:utils.escapeXML}.
 *
 * If `markup` is `undefined` or `null`, the empty string is returned.
 */
export function escapeXML(markup: string): string;
export interface Cache {
    set(key: string, val: TemplateFunction): void;
    get(key: string): TemplateFunction;
}
export let delimiter: string;

/**
 * Custom file loader. Useful for template preprocessing or restricting access
 * to a certain part of the filesystem.
 */
export function fileLoader(filePath: string): string;

/**
 * Name for detection of EJS.
 */
export const name = "ejs";
