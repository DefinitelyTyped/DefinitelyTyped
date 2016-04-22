// Type definitions for nconf
// Project: https://github.com/flatiron/nconf
// Definitions by: Jeff Goddard <https://github.com/jedigo>, Jean-Martin Thibault <https://github.com/jmthibault>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/nconf.d.ts


declare export var version: number;
declare export var stores: any;
declare export var sources: any[];

declare export function clear(key: string, callback?: ICallbackFunction): any;
declare export function get(key: string, callback?: ICallbackFunction): any;
declare export function merge(key: string, value: any, callback?: ICallbackFunction): any;
declare export function set(key: string, value: any, callback?: ICallbackFunction): any;
declare export function reset(callback?: ICallbackFunction): any;

declare export function load(callback?: ICallbackFunction): any;
declare export function mergeSources(data: any): void;
declare export function loadSources(): any;
declare export function save(value: any, callback?: ICallbackFunction): any;

declare export function add(name: string, options?: IOptions): Provider;
declare export function argv(options?: IOptions): Provider;
declare export function env(options?: IOptions): Provider;
declare export function file(name: string, options?: IFileOptions): Provider;
declare export function file(name: string, filename: string): Provider;
declare export function file(options: IFileOptions): Provider;
declare export function use(name: string, options?: IOptions): Provider;
declare export function defaults(options?: IOptions): Provider;
declare export function init(options?: IOptions): void;
declare export function overrides(options?: IOptions): Provider;
declare export function remove(name: string): void;
declare export function create(name: string, options: IOptions): IStore;

declare export function key(...values: any[]): string;
declare export function path(key: any): any[];
declare export function loadFiles(files: any, callback?: ICallbackFunction): void;
declare export function loadFilesSync(files: any, callback?: ICallbackFunction): void;

declare export var formats: {
    json: IFormat;
    ini: IFormat;
};

export interface IFormat {
    stringify: (obj: any, replacer: any, spacing?: any) => string;
    parse: (str: string) => any;
}

export interface IOptions {
    [index: string]: any;
}

export interface IFileOptions {
    type?: string;
    file?: string;
    dir?: string;
    search?: boolean;
    format?: IFormat;
    json_spacing?: number;
}

export interface ICallbackFunction {
    (err: Error): void;
}

declare export class Provider {
    constructor(options: IOptions);

    stores: any;
    sources: any[];

    clear(key: string, callback?: ICallbackFunction): any;
    get(key: string, callback?: ICallbackFunction): any;
    merge(key: string, value: any, callback?: ICallbackFunction): any;
    set(key: string, value: any, callback?: ICallbackFunction): any;
    reset(callback?: ICallbackFunction): any;

    load(callback?: ICallbackFunction): any;
    mergeSources(data: any): void;
    loadSources(): any;
    save(value: any, callback?: ICallbackFunction): any;

    add(name: string, options?: IOptions): Provider;
    argv(options?: IOptions): Provider;
    env(options?: IOptions): Provider;
    file(name: string, options?: IFileOptions): Provider;
    file(name: string, filename: string): Provider;
    file(options: IFileOptions): Provider;
    use(name: string, options?: IOptions): Provider;

    defaults(options?: IOptions): Provider;
    init(options?: IOptions): void;
    overrides(options?: IOptions): Provider;
    remove(name: string): void;
    create(name: string, options: IOptions): IStore;
}

export interface IStore {
    type: string;
    get(key: string): any;
    set(key: string, value: any): boolean;
    clear(key: string): boolean;
    merge(key: string, value: any): boolean;
    reset(callback?: ICallbackFunction): boolean;
}
