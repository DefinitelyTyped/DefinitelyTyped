// Type definitions for ejs.js 2.3
// Project: http://ejs.co/
// Definitions by: Ben Liddicott <https://github.com/benliddicott>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Data {
    [name: string]: any;
}
export type Dependencies = string[];
export let cache: Cache;
export let localsName: string;
export function resolveInclude(name: string, filename: string): string;
export function compile(template: string, opts?: Options): (TemplateFunction);
export function render(template: string, data?: Data, opts?: Options): string;

export type RenderFileCallback<T> = (err: Error, str?: string) => T;
export function renderFile<T>(path: string, cb: RenderFileCallback<T>): T;
export function renderFile<T>(path: string, data: Data, cb: RenderFileCallback<T>): T;
export function renderFile<T>(path: string, data: Data, opts: Options, cb: RenderFileCallback<T>): T;

export function clearCache(): any;

export type TemplateFunction = (data: Data) => any;
export interface Options {
    cache?: boolean;
    filename?: string;
    root?: string;
    context?: any;
    compileDebug?: boolean;
    client?: boolean;
    delimiter?: string;
    debug?: boolean;
    strict?: boolean;
    _with?: boolean;
    localsName?: string;
    rmWhitespace?: boolean;
    escape?(str: string): string;
}

export function escapeRegexChars(s: string): string;
export function escapeXML(markup: string): string;
export function shallowCopy<T1>(to: T1, fro: any): T1;
export interface Cache {
    _data: { [name: string]: any };
    set(key: string, val: any): any;
    get(key: string): any;
}
export function normalize(path: string): string;
export function isAbsolute(path: string): boolean;
export function join(...args: string[]): string;
export function relative(from: string, to: string): string;
export let sep: string;
export let delimiter: string;
export function dirname(path: string): string;
export function basename(path: string): string;
export function extname(path: string): string;
export function filter(xs: any, f: any): any; // TODO WHUT?
