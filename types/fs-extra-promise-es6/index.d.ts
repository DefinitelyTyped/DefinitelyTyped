// Type definitions for fs-extra-promise-es6 0.1
// Project: https://github.com/vinsonchuong/fs-extra-promise-es6
// Definitions by: midknight41 <https://github.com/midknight41>
//                 Jason Swearingen <https://github.com/jasonswearingen>
//                 Joshua DeVinney <https://github.com/geoffreak>
//                 Hiromi Shikata <https://github.com/HiromiShikata>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: fs-extra-promise typings (minus Bluebird)

/// <reference types="node"/>

import stream = require("stream");
import fs = require("fs");

export type Stats = fs.Stats;

export interface FSWatcher {
    close(): void;
}

export class ReadStream extends stream.Readable { }
export class WriteStream extends stream.Writable { }

// extended methods
export function copy(src: string, dest: string, callback?: (err: Error) => void): void;
export function copy(src: string, dest: string, filter: (src: string) => boolean, callback?: (err: Error) => void): void;

export function copySync(src: string, dest: string, filter?: (src: string) => boolean): void;

export function createFile(file: string, callback?: (err: Error) => void): void;
export function createFileSync(file: string): void;

export function mkdirs(dir: string, callback?: (err: Error) => void): void;
export function mkdirp(dir: string, callback?: (err: Error) => void): void;
export function mkdirsSync(dir: string): void;
export function mkdirpSync(dir: string): void;

export function outputFile(file: string, data: any, callback?: (err: Error) => void): void;
export function outputFileSync(file: string, data: any): void;

export function outputJson(file: string, data: any, callback?: (err: Error) => void): void;
export function outputJSON(file: string, data: any, callback?: (err: Error) => void): void;
export function outputJsonSync(file: string, data: any): void;
export function outputJSONSync(file: string, data: any): void;

export function readJson(file: string, callback?: (err: Error) => void): void;
export function readJson(file: string, options?: OpenOptions, callback?: (err: Error) => void): void;
export function readJSON(file: string, callback?: (err: Error) => void): void;
export function readJSON(file: string, options?: OpenOptions, callback?: (err: Error) => void): void;

export function readJsonSync(file: string, options?: OpenOptions): void;
export function readJSONSync(file: string, options?: OpenOptions): void;

export function remove(dir: string, callback?: (err: Error) => void): void;
export function removeSync(dir: string): void;
// export function delete(dir: string, callback?: (err: Error) => void): void;
// export function deleteSync(dir: string): void;

export function writeJson(file: string, object: any, callback?: (err: Error) => void): void;
export function writeJson(file: string, object: any, options?: OpenOptions, callback?: (err: Error) => void): void;
export function writeJSON(file: string, object: any, callback?: (err: Error) => void): void;
export function writeJSON(file: string, object: any, options?: OpenOptions, callback?: (err: Error) => void): void;

export function writeJsonSync(file: string, object: any, options?: OpenOptions): void;
export function writeJSONSync(file: string, object: any, options?: OpenOptions): void;

export function rename(oldPath: string, newPath: string, callback?: (err: Error) => void): void;
export function renameSync(oldPath: string, newPath: string): void;
export function truncate(fd: number, len: number, callback?: (err: Error) => void): void;
export function truncateSync(fd: number, len: number): void;
export function chown(path: string, uid: number, gid: number, callback?: (err: Error) => void): void;
export function chownSync(path: string, uid: number, gid: number): void;
export function fchown(fd: number, uid: number, gid: number, callback?: (err: Error) => void): void;
export function fchownSync(fd: number, uid: number, gid: number): void;
export function lchown(path: string, uid: number, gid: number, callback?: (err: Error) => void): void;
export function lchownSync(path: string, uid: number, gid: number): void;
export function chmod(path: string, mode: number | string, callback?: (err: Error) => void): void;
export function chmodSync(path: string, mode: number | string): void;
export function fchmod(fd: number, mode: number | string, callback?: (err: Error) => void): void;
export function fchmodSync(fd: number, mode: number | string): void;
export function lchmod(path: string, mode: number | string, callback?: (err: Error) => void): void;
export function lchmodSync(path: string, mode: number | string): void;
export function stat(path: string, callback?: (err: Error, stats: Stats) => void): void;
export function lstat(path: string, callback?: (err: Error, stats: Stats) => void): void;
export function fstat(fd: number, callback?: (err: Error, stats: Stats) => void): void;
export function statSync(path: string): Stats;
export function lstatSync(path: string): Stats;
export function fstatSync(fd: number): Stats;
export function link(srcpath: string, dstpath: string, callback?: (err: Error) => void): void;
export function linkSync(srcpath: string, dstpath: string): void;
export function symlink(srcpath: string, dstpath: string, type?: string, callback?: (err: Error) => void): void;
export function symlinkSync(srcpath: string, dstpath: string, type?: string): void;
export function readlink(path: string, callback?: (err: Error, linkString: string) => void): void;
export function realpath(path: string, callback?: (err: Error, resolvedPath: string) => void): void;
export function realpath(path: string, cache: string, callback: (err: Error, resolvedPath: string) => void): void;
export function realpathSync(path: string, cache?: boolean): string;
export function unlink(path: string, callback?: (err: Error) => void): void;
export function unlinkSync(path: string): void;
export function rmdir(path: string, callback?: (err: Error) => void): void;
export function rmdirSync(path: string): void;
export function mkdir(path: string, mode?: number | string, callback?: (err: Error) => void): void;
export function mkdirSync(path: string, mode?: number | string): void;
export function readdir(path: string, callback?: (err: Error, files: string[]) => void): void;
export function readdirSync(path: string): string[];
export function close(fd: number, callback?: (err: Error) => void): void;
export function closeSync(fd: number): void;
export function open(path: string, flags: string, mode?: string, callback?: (err: Error, fs: number) => void): void;
export function openSync(path: string, flags: string, mode?: string): number;
export function utimes(path: string, atime: number, mtime: number, callback?: (err: Error) => void): void;
export function utimesSync(path: string, atime: number, mtime: number): void;
export function futimes(fd: number, atime: number, mtime: number, callback?: (err: Error) => void): void;
export function futimesSync(fd: number, atime: number, mtime: number): void;
export function fsync(fd: number, callback?: (err: Error) => void): void;
export function fsyncSync(fd: number): void;
export function write(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number, callback?: (err: Error, written: number, buffer: NodeBuffer) => void): void;
export function writeSync(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number): number;
export function read(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number, callback?: (err: Error, bytesRead: number, buffer: NodeBuffer) => void): void;
export function readSync(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number): number;
/**
 * readFile
 * @param filename
 * @param options
 *          string: encoding
 *          OpenOptions: options
 * @param callback
 */
export function readFile(filename: string, options: OpenOptions | string, callback: (err: Error, data: string) => void): void;
export function readFile(filename: string, callback: (err: Error, data: NodeBuffer) => void): void;
export function readFileSync(filename: string): NodeBuffer;
/**
 * readFileSync
 * @param filename
 * @param options
 *          string: encoding
 *          OpenOptions: options
 */
export function readFileSync(filename: string, options: OpenOptions | string): string;
/**
 * writeFile
 * @param filename
 * @param data
 * @param options
 *          string: encoding
 *          OpenOptions: options
 * @param callback
 */
export function writeFile(filename: string, data: any, options?: OpenOptions | string, callback?: (err: Error) => void): void;
/**
 * writeFileSync
 * @param filename
 * @param data
 * @param option
 *          string: encoding
 *          OpenOptions: options
 */
export function writeFileSync(filename: string, data: any, option?: OpenOptions | string): void;
/**
 * appendFile
 * @param filename
 * @param data
 * @param option:
 *          string: encoding
 *          OpenOptions: options
 * @param callback
 */
export function appendFile(filename: string, data: any, option?: OpenOptions | string, callback?: (err: Error) => void): void;
/**
 * appendFileSync
 * @param filename
 * @param data
 * @param option
 *          string: encoding
 *          OpenOptions: options
 */
export function appendFileSync(filename: string, data: any, option?: OpenOptions | string): void;
export function watchFile(filename: string, listener: { curr: Stats; prev: Stats; }): void;
export function watchFile(filename: string, options: { persistent?: boolean; interval?: number; }, listener: { curr: Stats; prev: Stats; }): void;
export function unwatchFile(filename: string, listener?: Stats): void;
export function watch(filename: string, options?: { persistent?: boolean; }, listener?: (event: string, filename: string) => any): FSWatcher;
export function exists(path: string, callback?: (exists: boolean) => void): void;
export function existsSync(path: string): boolean;
export function ensureDir(path: string, cb: (err: Error) => void): void;
export function ensureDirSync(path: string): void;

export interface OpenOptions {
    encoding?: string;
    flag?: string;
}

export function createReadStream(path: string | Buffer, options?: {
    flags?: string;
    encoding?: string;
    fd?: number;
    mode?: number;
    autoClose?: boolean;
    start?: number;
    end?: number;
}): ReadStream;
export function createWriteStream(path: string | Buffer, options?: {
    flags?: string;
    encoding?: string;
    fd?: number;
    mode?: number;
}): WriteStream;

// promisified versions
export function copyAsync(src: string, dest: string, filter?: (src: string) => boolean): Promise<void>;

export function createFileAsync(file: string): Promise<void>;

export function mkdirsAsync(dir: string): Promise<void>;
export function mkdirpAsync(dir: string): Promise<void>;

export function outputFileAsync(file: string, data: any): Promise<void>;

export function outputJSONAsync(file: string, data: any): Promise<void>;

export function readJSONAsync(file: string, options?: OpenOptions): Promise<void>;

export function removeAsync(dir: string): Promise<void>;
// export function deleteAsync(dir: string):Promise<void>;

export function writeJsonAsync(file: string, object: any, options?: OpenOptions): Promise<void>;
export function writeJSONAsync(file: string, object: any, options?: OpenOptions): Promise<void>;

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
export function symlinkAsync(srcpath: string, dstpath: string, type?: string): Promise<void>;
export function readlinkAsync(path: string): Promise<string>;
export function realpathAsync(path: string, cache?: string): Promise<string>;
export function unlinkAsync(path: string): Promise<void>;
export function rmdirAsync(path: string): Promise<void>;
export function mkdirAsync(path: string, mode?: number | string): Promise<void>;
export function readdirAsync(path: string): Promise<string[]>;
export function closeAsync(fd: number): Promise<void>;
export function openAsync(path: string, flags: string, mode?: string): Promise<number>;
export function utimesAsync(path: string, atime: number, mtime: number): Promise<void>;
export function futimesAsync(fd: number, atime: number, mtime: number): Promise<void>;
export function fsyncAsync(fd: number): Promise<void>;
export function writeAsync(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number): Promise<[number, NodeBuffer]>;
export function readAsync(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number): Promise<[number, NodeBuffer]>;
/**
 * readFileAsync
 * @param filename
 * @param options:
 *          string: encoding
 *          OpenOptions: options
 */
export function readFileAsync(filename: string, options: OpenOptions | string): Promise<string>;
export function readFileAsync(filename: string): Promise<NodeBuffer>;
/**
 * writeFileAsync
 * @param filename
 * @param data
 * @param options:
 *          string: encoding
 *          OpenOptions: options
 */
export function writeFileAsync(filename: string, data: any, options?: OpenOptions | string): Promise<void>;
/**
 * appendFileAsync
 * @param filename
 * @param data
 * @param option:
 *          string: encoding
 *          OpenOptions: option
 */
export function appendFileAsync(filename: string, data: any, option?: OpenOptions | string): Promise<void>;

export function existsAsync(path: string): Promise<boolean>;
export function ensureDirAsync(path: string): Promise<void>;

export function isDirectory(path: string, callback?: (err: Error, isDirectory: boolean) => void): void;
export function isDirectorySync(path: string): boolean;
export function isDirectoryAsync(path: string): Promise<boolean>;
