// Type definitions for fs-extra
// Project: https://github.com/jprichardson/node-fs-extra
// Definitions by: midknight41 <https://github.com/midknight41>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/fs-extra.d.ts

/// <reference types="node" />

import { Stats } from "fs";

export * from "fs";

export declare function copy(src: string, dest: string, callback?: (err: Error) => void): void;
export declare function copy(src: string, dest: string, filter: CopyFilter, callback?: (err: Error) => void): void;
export declare function copy(src: string, dest: string, options: CopyOptions, callback?: (err: Error) => void): void;

export declare function copySync(src: string, dest: string): void;
export declare function copySync(src: string, dest: string, filter: CopyFilter): void;
export declare function copySync(src: string, dest: string, options: CopyOptions): void;

export declare function move(src: string, dest: string, callback?: (err: Error) => void): void;
export declare function move(src: string, dest: string, options: MoveOptions, callback?: (err: Error) => void): void;

export declare function createFile(file: string, callback?: (err: Error) => void): void;
export declare function createFileSync(file: string): void;

export declare function mkdirs(dir: string, callback?: (err: Error) => void): void;
export declare function mkdirp(dir: string, callback?: (err: Error) => void): void;
export declare function mkdirs(dir: string, options?: MkdirOptions, callback?: (err: Error) => void): void;
export declare function mkdirp(dir: string, options?: MkdirOptions, callback?: (err: Error) => void): void;
export declare function mkdirsSync(dir: string, options?: MkdirOptions): void;
export declare function mkdirpSync(dir: string, options?: MkdirOptions): void;

export declare function outputFile(file: string, data: any, callback?: (err: Error) => void): void;
export declare function outputFileSync(file: string, data: any): void;

export declare function outputJson(file: string, data: any, callback?: (err: Error) => void): void;
export declare function outputJSON(file: string, data: any, callback?: (err: Error) => void): void;
export declare function outputJsonSync(file: string, data: any): void;
export declare function outputJSONSync(file: string, data: any): void;

export declare function readJson(file: string, callback: (err: Error, jsonObject: any) => void): void;
export declare function readJson(file: string, options: OpenOptions, callback: (err: Error, jsonObject: any) => void): void;
export declare function readJSON(file: string, callback: (err: Error, jsonObject: any) => void): void;
export declare function readJSON(file: string, options: OpenOptions, callback: (err: Error, jsonObject: any) => void): void;

export declare function readJsonSync(file: string, options?: OpenOptions): any;
export declare function readJSONSync(file: string, options?: OpenOptions): any;

export declare function remove(dir: string, callback?: (err: Error) => void): void;
export declare function removeSync(dir: string): void;

export declare function writeJson(file: string, object: any, callback?: (err: Error) => void): void;
export declare function writeJson(file: string, object: any, options?: OpenOptions, callback?: (err: Error) => void): void;
export declare function writeJSON(file: string, object: any, callback?: (err: Error) => void): void;
export declare function writeJSON(file: string, object: any, options?: OpenOptions, callback?: (err: Error) => void): void;

export declare function writeJsonSync(file: string, object: any, options?: OpenOptions): void;
export declare function writeJSONSync(file: string, object: any, options?: OpenOptions): void;

export declare function ensureDir(path: string, cb: (err: Error) => void): void;
export declare function ensureDirSync(path: string): void;

export declare function ensureFile(path: string, cb: (err: Error) => void): void;
export declare function ensureFileSync(path: string): void;

export declare function ensureLink(path: string, cb: (err: Error) => void): void;
export declare function ensureLinkSync(path: string): void;

export declare function ensureSymlink(path: string, cb: (err: Error) => void): void;
export declare function ensureSymlinkSync(path: string): void;

export declare function emptyDir(path: string, callback?: (err: Error) => void): void;
export declare function emptyDirSync(path: string): boolean;

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
  pathSorter?: (left: string, right: string) => number;
  /**
   * An optional object to override the default `fs` APIs for testing purposes
   */
  fs?: Object;
  /**
   * Provide a function to exclude certain file paths. The function should
   * return true when the element should be kept, and false otherwise.
   */
  filter?: (path: string, index: number, array: Array<PathEntry>) => boolean;
}

export type PathEntry = {
  path: string;
  stats: Stats;
}

export type PathEntryStream = {
  read(): PathEntry | null
}

export function walk(path: string, options?: WalkOptions): WalkEventEmitter;
export function walkSync(path: string): ReadonlyArray<string>;

export interface CopyFilterFunction {
    (src: string): boolean
}

export type CopyFilter = CopyFilterFunction | RegExp;

export interface CopyOptions {
    clobber?: boolean
    preserveTimestamps?: boolean
    dereference?: boolean
    filter?: CopyFilter
    recursive?: boolean
}

export interface MoveOptions {
    clobber? : boolean;
    limit?: number;
}

export interface MoveOptions {
    clobber? : boolean;
    limit?: number;
}

export interface OpenOptions {
    encoding?: string;
    flag?: string;
}

export interface MkdirOptions {
    fs?: any;
    mode?: number;
}
