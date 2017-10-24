// Type definitions for nconf
// Project: https://github.com/flatiron/nconf
// Definitions by: Jeff Goddard <https://github.com/jedigo>, Jean-Martin Thibault <https://github.com/jmthibault>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/nconf.d.ts


export declare var version: number;
export declare var stores: any;
export declare var sources: any[];

export declare function clear(key: string, callback?: ICallbackFunction): any;
export function get(key: string, callback?: ICallbackFunction): any;
export declare function merge(key: string, value: any, callback?: ICallbackFunction): any;
export declare function set(key: string, value: any, callback?: ICallbackFunction): any;
export declare function reset(callback?: ICallbackFunction): any;

export declare function load(callback?: ICallbackFunction): any;
export declare function mergeSources(data: any): void;
export declare function loadSources(): any;
export declare function save(value: any, callback?: ICallbackFunction): any;

export declare function add(name: string, options?: IOptions): Provider;
export declare function argv(options?: IOptions): Provider;
export declare function env(options?: IOptions): Provider;
export declare function file(name: string, options?: IFileOptions): Provider;
export declare function file(name: string, filename: string): Provider;
export declare function file(options: IFileOptions): Provider;
export declare function use(name: string, options?: IOptions): Provider;
export declare function defaults(options?: IOptions): Provider;
export declare function init(options?: IOptions): void;
export declare function overrides(options?: IOptions): Provider;
export declare function remove(name: string): void;
export declare function required(keys: string[]): boolean;
export declare function create(name: string, options: IOptions): IStore;

export declare function key(...values: any[]): string;
export declare function path(key: any): any[];
export declare function loadFiles(files: any, callback?: ICallbackFunction): void;
export declare function loadFilesSync(files: any, callback?: ICallbackFunction): void;

export interface IFormats {
    json: IFormat;
    ini: IFormat;
}
export declare var formats: IFormats;

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

export declare class Provider {
    constructor(options?: IOptions);

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
    required(keys: string[]): boolean;
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
