// Type definitions for fs-extra 3.0
// Project: https://github.com/jprichardson/node-fs-extra
// Definitions by: Alan Agius <https://github.com/alan-agius4>, midknight41 <https://github.com/midknight41>, Brendan Forster <https://github.com/shiftkey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Stats } from "fs";

export * from "fs";

export function copy(src: string, dest: string, options?: CopyOptions): Promise<void>;
export function copy(src: string, dest: string, callback: (err: Error) => void): void;
export function copy(src: string, dest: string, options: CopyOptions, callback: (err: Error) => void): void;

export function copySync(src: string, dest: string, options?: CopyOptions): void;

export function move(src: string, dest: string): Promise<void>;
export function move(src: string, dest: string, options: MoveOptions): Promise<void>;
export function move(src: string, dest: string, callback: (err: Error) => void): void;
export function move(src: string, dest: string, options: MoveOptions, callback: (err: Error) => void): void;

export function createFile(file: string): Promise<void>;
export function createFile(file: string, callback: (err: Error) => void): void;
export function createFileSync(file: string): void;

export function mkdirs(dir: string, options?: MkdirOptions): Promise<void>;
export function mkdirs(dir: string, callback: (err: Error) => void): void;
export function mkdirs(dir: string, options: MkdirOptions, callback: (err: Error) => void): void;
export function mkdirp(dir: string, options?: MkdirOptions): Promise<void>;
export function mkdirp(dir: string, callback: (err: Error) => void): void;
export function mkdirp(dir: string, options: MkdirOptions, callback: (err: Error) => void): void;
export function mkdirsSync(dir: string, options?: MkdirOptions): void;
export function mkdirpSync(dir: string, options?: MkdirOptions): void;

export function outputFile(file: string, data: any): Promise<void>;
export function outputFile(file: string, data: any, callback: (err: Error) => void): void;
export function outputFileSync(file: string, data: any): void;

export function outputJSON(file: string, data: any): Promise<void>;
export function outputJSON(file: string, data: any, callback: (err: Error) => void): void;
export function outputJson(file: string, data: any): Promise<void>;
export function outputJson(file: string, data: any, callback: (err: Error) => void): void;
export function outputJsonSync(file: string, data: any): void;
export function outputJSONSync(file: string, data: any): void;

export function readJson(file: string, options?: ReadOptions): Promise<any>;
export function readJSON(file: string, options?: ReadOptions): Promise<any>;
export function readJson(file: string, callback: (err: Error, jsonObject: any) => void): void;
export function readJson(file: string, options: ReadOptions, callback: (err: Error, jsonObject: any) => void): void;
export function readJSON(file: string, callback: (err: Error, jsonObject: any) => void): void;
export function readJSON(file: string, options: ReadOptions, callback: (err: Error, jsonObject: any) => void): void;

export function readJsonSync(file: string, options?: ReadOptions): any;
export function readJSONSync(file: string, options?: ReadOptions): any;

export function remove(dir: string): Promise<void>;
export function remove(dir: string, callback: (err: Error) => void): void;
export function removeSync(dir: string): void;

export function writeJson(file: string, object: any, options?: WriteOptions): Promise<void>;
export function writeJSON(file: string, object: any, options?: WriteOptions): Promise<void>;
export function writeJSON(file: string, object: any, callback: (err: Error) => void): void;
export function writeJSON(file: string, object: any, options: WriteOptions, callback: (err: Error) => void): void;
export function writeJson(file: string, object: any, callback: (err: Error) => void): void;
export function writeJson(file: string, object: any, options: WriteOptions, callback: (err: Error) => void): void;

export function writeJsonSync(file: string, object: any, options?: WriteOptions): void;
export function writeJSONSync(file: string, object: any, options?: WriteOptions): void;

export function ensureDir(path: string): Promise<void>;
export function ensureDir(path: string, callback: (err: Error) => void): void;
export function ensureDirSync(path: string): void;

export function ensureFile(path: string): Promise<void>;
export function ensureFile(path: string, callback: (err: Error) => void): void;
export function ensureFileSync(path: string): void;

export function ensureLink(path: string): Promise<void>;
export function ensureLink(path: string, callback: (err: Error) => void): void;
export function ensureLinkSync(path: string): void;

export function ensureSymlink(path: string): Promise<void>;
export function ensureSymlink(path: string, callback: (err: Error) => void): void;
export function ensureSymlinkSync(path: string): void;

export function emptyDir(path: string): Promise<void>;
export function emptyDir(path: string, callback: (err: Error) => void): void;
export function emptyDirSync(path: string): void;

export function pathExists(path: string): Promise<boolean>;
export function pathExists(path: string, callback: (err: Error, exists: boolean) => void): void;
export function pathExistsSync(path: string): boolean;

export interface WalkEventEmitter extends NodeJS.ReadableStream {
    on(event: 'data', callback: (file: WalkEventFile) => void): this;
    on(event: 'readable', callback: (this: PathEntryStream) => void): this;
    on(event: 'error', callback: (error: Error, item: PathEntry) => void): this;
    on(event: 'end', callback: () => void): this;
    on(event: string | symbol, callback: Function): this;
}

export interface WalkEventFile {
    path: string;
    stats: Stats;
}

export interface WalkOptions {
    /**
     * Control how results are enumerated from `readdir`:
     * - 'shift' will return the first element from the array.
     * - 'pop' will return the last element from the array.
     *
     * If not specified, the default behaviour is 'shift'
     */
    queueMethod?: 'pop' | 'shift';
    /**
     * Provide a function to sort the paths before they are enumerated
     */
    pathSorter?(left: string, right: string): number;
    /**
     * An optional object to override the default `fs` APIs for testing purposes
     */
    fs?: object;
    /**
     * Provide a function to exclude certain file paths. The function should
     * return true when the element should be kept, and false otherwise.
     */
    filter?(path: string, index: number, array: PathEntry[]): boolean;
}

export interface PathEntry {
    path: string;
    stats: Stats;
}

export interface PathEntryStream {
    read(): PathEntry | null;
}

export interface CopyFilterFunction {
    (src: string): boolean;
}

export type CopyFilter = CopyFilterFunction | RegExp;

export interface CopyOptions {
    clobber?: boolean;
    dereference?: boolean;
    overwrite?: boolean;
    preserveTimestamps?: boolean;
    errorOnExist?: boolean;
    filter?: CopyFilter;
    recursive?: boolean;
}

export interface MoveOptions {
    clobber?: boolean;
    limit?: number;
}

export interface ReadOptions {
    throws?: boolean;
    fs?: object;
    reviver?: any;
    encoding?: string;
    flag?: string;
}

export interface WriteOptions {
    fs?: object;
    replacer?: any;
    spaces?: number;
    encoding?: string;
    flag?: string;
    mode?: number;
}

export interface MkdirOptions {
    fs?: any;
    mode?: number;
}
