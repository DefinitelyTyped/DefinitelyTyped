// Type definitions for fs-extra-promise
// Project: https://github.com/overlookmotel/fs-extra-promise
// Definitions by: midknight41 <https://github.com/midknight41>, Jason Swearingen <https://github.com/jasonswearingen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="bluebird" />
/// <reference types="fs-extra" />

import * as stream from 'stream';
import { Stats } from 'fs';
import * as Promise from 'bluebird';
import { CopyFilter, CopyOptions, OpenOptions, MkdirOptions, MoveOptions } from 'fs-extra';

export * from 'fs-extra';

//promisified versions
export declare function copyAsync(src: string, dest: string): Promise<void>;
export declare function copyAsync(src: string, dest: string, filter: CopyFilter): Promise<void>;
export declare function copyAsync(src: string, dest: string, options: CopyOptions): Promise<void>;

export declare function createFileAsync(file: string): Promise<void>;

export declare function mkdirsAsync(dir: string, options?: MkdirOptions): Promise<void>;
export declare function mkdirpAsync(dir: string, options?: MkdirOptions): Promise<void>;

export declare function moveAsync(src: string, dest: string, options?: MoveOptions): Promise<void>;

export declare function outputFileAsync(file: string, data: any): Promise<void>;

export declare function outputJsonAsync(file: string, data: any): Promise<void>;
export declare function outputJSONAsync(file: string, data: any): Promise<void>;

export declare function readJsonAsync(file: string): Promise<any>;
export declare function readJsonAsync(file: string, options?: OpenOptions): Promise<any>;
export declare function readJSONAsync(file: string): Promise<any>;
export declare function readJSONAsync(file: string, options?: OpenOptions): Promise<any>;

export declare function removeAsync(dir: string): Promise<void>;

export declare function writeJsonAsync(file: string, object: any): Promise<void>;
export declare function writeJsonAsync(file: string, object: any, options?: OpenOptions): Promise<void>;
export declare function writeJSONAsync(file: string, object: any): Promise<void>;
export declare function writeJSONAsync(file: string, object: any, options?: OpenOptions): Promise<void>;

export declare function renameAsync(oldPath: string, newPath: string): Promise<void>;
export declare function truncateAsync(fd: number, len: number): Promise<void>;
export declare function chownAsync(path: string, uid: number, gid: number): Promise<void>;
export declare function fchownAsync(fd: number, uid: number, gid: number): Promise<void>;
export declare function lchownAsync(path: string, uid: number, gid: number): Promise<void>;
export declare function chmodAsync(path: string, mode: number): Promise<void>;
export declare function chmodAsync(path: string, mode: string): Promise<void>;
export declare function fchmodAsync(fd: number, mode: number): Promise<void>;
export declare function fchmodAsync(fd: number, mode: string): Promise<void>;
export declare function lchmodAsync(path: string, mode: string): Promise<void>;
export declare function lchmodAsync(path: string, mode: number): Promise<void>;
export declare function statAsync(path: string): Promise<Stats>;
export declare function lstatAsync(path: string): Promise<Stats>;
export declare function fstatAsync(fd: number): Promise<Stats>;
export declare function linkAsync(srcpath: string, dstpath: string): Promise<void>;
export declare function symlinkAsync(srcpath: string, dstpath: string, type?: string): Promise<void>;
export declare function readlinkAsync(path: string): Promise<string>;
export declare function realpathAsync(path: string): Promise<string>;
export declare function realpathAsync(path: string, cache: { [path: string]: string }): Promise<string>;
export declare function unlinkAsync(path: string): Promise<void>;
export declare function rmdirAsync(path: string): Promise<void>;
export declare function mkdirAsync(path: string, mode?: number): Promise<void>;
export declare function mkdirAsync(path: string, mode?: string): Promise<void>;
export declare function readdirAsync(path: string): Promise<string[]>;
export declare function closeAsync(fd: number): Promise<void>;
export declare function openAsync(path: string, flags: string, mode?: string): Promise<number>;
export declare function utimesAsync(path: string, atime: number, mtime: number): Promise<void>;
export declare function futimesAsync(fd: number, atime: number, mtime: number): Promise<void>;
export declare function fsyncAsync(fd: number): Promise<void>;
export declare function writeAsync(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number): Promise<[number, NodeBuffer]>;
export declare function readAsync(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number): Promise<[number, NodeBuffer]>;
export declare function readFileAsync(filename: string, encoding: string): Promise<string>;
export declare function readFileAsync(filename: string, options: OpenOptions): Promise<string>;
export declare function readFileAsync(filename: string): Promise<NodeBuffer>;
export declare function writeFileAsync(filename: string, data: any, encoding?: string): Promise<void>;
export declare function writeFileAsync(filename: string, data: any, options?: OpenOptions): Promise<void>;
export declare function appendFileAsync(filename: string, data: any, encoding?: string): Promise<void>;
export declare function appendFileAsync(filename: string, data: any, option?: OpenOptions): Promise<void>;

export declare function existsAsync(path: string): Promise<boolean>;
export declare function ensureDirAsync(path: string): Promise<void>;
