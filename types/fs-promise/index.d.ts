// Type definitions for fs-promise 1.0
// Project: https://github.com/kevinbeaty/fs-promise#readme
// Definitions by: Thiago de Arruda <https://github.com/tarruda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export * from "mz/fs";

export interface WriteOptions {
    encoding?: string;
    mode?: number;
    flag?: string;
}

export type JsonReplacerArray = Array<number | string>;

export type JsonReplacerFunction = (key: string, value: any) => any;

export type JsonReplacer = JsonReplacerArray | JsonReplacerFunction;

export interface WriteJsonOptions extends WriteOptions {
    spaces?: number;
    replacer?: JsonReplacer;
}

export interface ReadJsonOptions {
    encoding: string;
    flag?: string;
    reviver(key: any, value: any): any;
}

export function copy(src: string, dst: string): Promise<void>;
export function emptyDir(dir: string): Promise<void>;
export function ensureFile(file: string): Promise<void>;
export function ensureDir(dir: string): Promise<void>;
export function ensureLink(srcpath: string, dstpath: string): Promise<void>;
export function ensureSymlink(srcpath: string, dstpath: string, type?: "dir" | "file" | "junction"): Promise<void>;
export function mkdirs(dir: string): Promise<void>;
export function move(src: string, dst: string): Promise<void>;
export function outputFile(file: string, data: string | Buffer, options?: WriteOptions): Promise<void>;
export function outputJson(file: string, data: any, options?: WriteJsonOptions): Promise<void>;
export function readJson(file: string, options?: ReadJsonOptions): Promise<any>;
export function remove(path: string): Promise<void>;
export function walk(dir: string): Promise<string[]>;
export function writeJson(file: string, data: any, options?: WriteJsonOptions): Promise<void>;

// aliases
export {
    emptyDir as emptydir,
    ensureFile as createFile,
    ensureLink as createLink,
    ensureSymlink as createSymlink,
    mkdirs as mkdirp,
    outputJson as outputJSON,
    readJson as readJSON,
    writeJson as writeJSON
};
