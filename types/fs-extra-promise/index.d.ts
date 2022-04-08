// Type definitions for fs-extra-promise 1.0
// Project: https://github.com/overlookmotel/fs-extra-promise
// Definitions by: midknight41 <https://github.com/midknight41>, Jason Swearingen <https://github.com/jasonswearingen>, Hiromi Shikata <https://github.com/HiromiShikata>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="node" />

import * as stream from 'stream';
import * as fs from 'fs';
import * as Promise from 'bluebird';
import { CopyFilter, CopyOptions, ReadOptions, WriteOptions, MoveOptions } from 'fs-extra';
import Stats = fs.Stats;

export * from 'fs-extra';

export interface MkdirOptions {
    fs?: any;
    mode?: number;
}

// promisified versions
export function copyAsync(src: string, dest: string, options?: CopyFilter | CopyOptions): Promise<void>;

export function createFileAsync(file: string): Promise<void>;

export function mkdirsAsync(dir: string, options?: MkdirOptions): Promise<void>;
export function mkdirpAsync(dir: string, options?: MkdirOptions): Promise<void>;

export function moveAsync(src: string, dest: string, options?: MoveOptions): Promise<void>;

export function outputFileAsync(file: string, data: any): Promise<void>;

export function outputJsonAsync(file: string, data: any): Promise<void>;
export function outputJSONAsync(file: string, data: any): Promise<void>;

export function readJsonAsync(file: string, options?: ReadOptions): Promise<any>;
export function readJSONAsync(file: string, options?: ReadOptions): Promise<any>;

export function removeAsync(dir: string): Promise<void>;

export function writeJsonAsync(file: string, object: any, options?: WriteOptions): Promise<void>;
export function writeJSONAsync(file: string, object: any, options?: WriteOptions): Promise<void>;

export function renameAsync(oldPath: string, newPath: string): Promise<void>;
export function truncateAsync(fd: number, len: number): Promise<void>;
export function chownAsync(path: string, uid: number, gid: number): Promise<void>;
export function fchownAsync(fd: number, uid: number, gid: number): Promise<void>;
export function lchownAsync(path: string, uid: number, gid: number): Promise<void>;
export function chmodAsync(path: string, mode: number | string): Promise<void>;
export function fchmodAsync(fd: number, mode: number | string): Promise<void>;
export function lchmodAsync(path: string, mode: number | string): Promise<void>;
export function statAsync(path: string): Promise<Stats>;
export function lstatAsync(path: string): Promise<Stats>;
export function fstatAsync(fd: number): Promise<Stats>;
export function linkAsync(srcpath: string, dstpath: string): Promise<void>;
export function symlinkAsync(srcpath: string, dstpath: string, type?: fs.symlink.Type): Promise<void>;
export function readlinkAsync(path: string): Promise<string>;
export function realpathAsync(path: string, cache?: { [path: string]: string }): Promise<string>;
export function unlinkAsync(path: string): Promise<void>;
export function rmdirAsync(path: string): Promise<void>;
export function mkdirAsync(path: string, mode?: number | string): Promise<void>;
export function readdirAsync(path: string): Promise<string[]>;
export function closeAsync(fd: number): Promise<void>;
export function openAsync(path: string, flags: string, mode?: string): Promise<number>;
export function utimesAsync(path: string, atime: number, mtime: number): Promise<void>;
export function futimesAsync(fd: number, atime: number, mtime: number): Promise<void>;
export function fsyncAsync(fd: number): Promise<void>;
export function writeAsync(fd: number, buffer: Buffer, offset: number, length: number, position: number): Promise<[number, Buffer]>;
export function readAsync(fd: number, buffer: Buffer, offset: number, length: number, position: number): Promise<[number, Buffer]>;
export function readFileAsync(filename: string, options: string | ReadOptions): Promise<string>;
export function readFileAsync(filename: string): Promise<Buffer>;
export function writeFileAsync(filename: string, data: any, options?: string | WriteOptions): Promise<void>;
export function mkdtempAsync(prefix: string, options: string | {encoding: string}): Promise<string>;
export function appendFileAsync(filename: string, data: any, option?: string | WriteOptions): Promise<void>;

export function existsAsync(path: string): Promise<boolean>;
export function ensureDirAsync(path: string): Promise<void>;

export function isDirectory(path: string, callback?: (err: Error, isDirectory: boolean) => void): void;
export function isDirectorySync(path: string): boolean;
export function isDirectoryAsync(path: string): Promise<boolean>;
