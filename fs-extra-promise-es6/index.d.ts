// Type definitions for fs-extra-promise-es6
// Project: https://github.com/vinsonchuong/fs-extra-promise-es6
// Definitions by: midknight41 <https://github.com/midknight41>, Jason Swearingen <https://github.com/jasonswearingen>, Joshua DeVinney <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: fs-extra-promise typings (minus Bluebird)

///<reference types="node"/>


import stream = require("stream");
import fs = require("fs");

export type Stats = fs.Stats

export interface FSWatcher {
    close(): void;
}

export declare class ReadStream extends stream.Readable { }
export declare class WriteStream extends stream.Writable { }

//extended methods
export declare function copy(src: string, dest: string, callback?: (err: Error) => void): void;
export declare function copy(src: string, dest: string, filter: (src: string) => boolean, callback?: (err: Error) => void): void;

export declare function copySync(src: string, dest: string): void;
export declare function copySync(src: string, dest: string, filter: (src: string) => boolean): void;

export declare function createFile(file: string, callback?: (err: Error) => void): void;
export declare function createFileSync(file: string): void;

export declare function mkdirs(dir: string, callback?: (err: Error) => void): void;
export declare function mkdirp(dir: string, callback?: (err: Error) => void): void;
export declare function mkdirsSync(dir: string): void;
export declare function mkdirpSync(dir: string): void;

export declare function outputFile(file: string, data: any, callback?: (err: Error) => void): void;
export declare function outputFileSync(file: string, data: any): void;

export declare function outputJson(file: string, data: any, callback?: (err: Error) => void): void;
export declare function outputJSON(file: string, data: any, callback?: (err: Error) => void): void;
export declare function outputJsonSync(file: string, data: any): void;
export declare function outputJSONSync(file: string, data: any): void;

export declare function readJson(file: string, callback?: (err: Error) => void): void;
export declare function readJson(file: string, options?: OpenOptions, callback?: (err: Error) => void): void;
export declare function readJSON(file: string, callback?: (err: Error) => void): void;
export declare function readJSON(file: string, options?: OpenOptions, callback?: (err: Error) => void): void;

export declare function readJsonSync(file: string, options?: OpenOptions): void;
export declare function readJSONSync(file: string, options?: OpenOptions): void;

export declare function remove(dir: string, callback?: (err: Error) => void): void;
export declare function removeSync(dir: string): void;
// export function delete(dir: string, callback?: (err: Error) => void): void;
// export function deleteSync(dir: string): void;

export declare function writeJson(file: string, object: any, callback?: (err: Error) => void): void;
export declare function writeJson(file: string, object: any, options?: OpenOptions, callback?: (err: Error) => void): void;
export declare function writeJSON(file: string, object: any, callback?: (err: Error) => void): void;
export declare function writeJSON(file: string, object: any, options?: OpenOptions, callback?: (err: Error) => void): void;

export declare function writeJsonSync(file: string, object: any, options?: OpenOptions): void;
export declare function writeJSONSync(file: string, object: any, options?: OpenOptions): void;

export declare function rename(oldPath: string, newPath: string, callback?: (err: Error) => void): void;
export declare function renameSync(oldPath: string, newPath: string): void;
export declare function truncate(fd: number, len: number, callback?: (err: Error) => void): void;
export declare function truncateSync(fd: number, len: number): void;
export declare function chown(path: string, uid: number, gid: number, callback?: (err: Error) => void): void;
export declare function chownSync(path: string, uid: number, gid: number): void;
export declare function fchown(fd: number, uid: number, gid: number, callback?: (err: Error) => void): void;
export declare function fchownSync(fd: number, uid: number, gid: number): void;
export declare function lchown(path: string, uid: number, gid: number, callback?: (err: Error) => void): void;
export declare function lchownSync(path: string, uid: number, gid: number): void;
export declare function chmod(path: string, mode: number, callback?: (err: Error) => void): void;
export declare function chmod(path: string, mode: string, callback?: (err: Error) => void): void;
export declare function chmodSync(path: string, mode: number): void;
export declare function chmodSync(path: string, mode: string): void;
export declare function fchmod(fd: number, mode: number, callback?: (err: Error) => void): void;
export declare function fchmod(fd: number, mode: string, callback?: (err: Error) => void): void;
export declare function fchmodSync(fd: number, mode: number): void;
export declare function fchmodSync(fd: number, mode: string): void;
export declare function lchmod(path: string, mode: string, callback?: (err: Error) => void): void;
export declare function lchmod(path: string, mode: number, callback?: (err: Error) => void): void;
export declare function lchmodSync(path: string, mode: number): void;
export declare function lchmodSync(path: string, mode: string): void;
export declare function stat(path: string, callback?: (err: Error, stats: Stats) => void): void;
export declare function lstat(path: string, callback?: (err: Error, stats: Stats) => void): void;
export declare function fstat(fd: number, callback?: (err: Error, stats: Stats) => void): void;
export declare function statSync(path: string): Stats;
export declare function lstatSync(path: string): Stats;
export declare function fstatSync(fd: number): Stats;
export declare function link(srcpath: string, dstpath: string, callback?: (err: Error) => void): void;
export declare function linkSync(srcpath: string, dstpath: string): void;
export declare function symlink(srcpath: string, dstpath: string, type?: string, callback?: (err: Error) => void): void;
export declare function symlinkSync(srcpath: string, dstpath: string, type?: string): void;
export declare function readlink(path: string, callback?: (err: Error, linkString: string) => void): void;
export declare function realpath(path: string, callback?: (err: Error, resolvedPath: string) => void): void;
export declare function realpath(path: string, cache: string, callback: (err: Error, resolvedPath: string) => void): void;
export declare function realpathSync(path: string, cache?: boolean): string;
export declare function unlink(path: string, callback?: (err: Error) => void): void;
export declare function unlinkSync(path: string): void;
export declare function rmdir(path: string, callback?: (err: Error) => void): void;
export declare function rmdirSync(path: string): void;
export declare function mkdir(path: string, mode?: number, callback?: (err: Error) => void): void;
export declare function mkdir(path: string, mode?: string, callback?: (err: Error) => void): void;
export declare function mkdirSync(path: string, mode?: number): void;
export declare function mkdirSync(path: string, mode?: string): void;
export declare function readdir(path: string, callback?: (err: Error, files: string[]) => void): void;
export declare function readdirSync(path: string): string[];
export declare function close(fd: number, callback?: (err: Error) => void): void;
export declare function closeSync(fd: number): void;
export declare function open(path: string, flags: string, mode?: string, callback?: (err: Error, fs: number) => void): void;
export declare function openSync(path: string, flags: string, mode?: string): number;
export declare function utimes(path: string, atime: number, mtime: number, callback?: (err: Error) => void): void;
export declare function utimesSync(path: string, atime: number, mtime: number): void;
export declare function futimes(fd: number, atime: number, mtime: number, callback?: (err: Error) => void): void;
export declare function futimesSync(fd: number, atime: number, mtime: number): void;
export declare function fsync(fd: number, callback?: (err: Error) => void): void;
export declare function fsyncSync(fd: number): void;
export declare function write(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number, callback?: (err: Error, written: number, buffer: NodeBuffer) => void): void;
export declare function writeSync(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number): number;
export declare function read(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number, callback?: (err: Error, bytesRead: number, buffer: NodeBuffer) => void): void;
export declare function readSync(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number): number;
export declare function readFile(filename: string, encoding: string, callback: (err: Error, data: string) => void): void;
export declare function readFile(filename: string, options: OpenOptions, callback: (err: Error, data: string) => void): void;
export declare function readFile(filename: string, callback: (err: Error, data: NodeBuffer) => void): void;
export declare function readFileSync(filename: string): NodeBuffer;
export declare function readFileSync(filename: string, encoding: string): string;
export declare function readFileSync(filename: string, options: OpenOptions): string;
export declare function writeFile(filename: string, data: any, encoding?: string, callback?: (err: Error) => void): void;
export declare function writeFile(filename: string, data: any, options?: OpenOptions, callback?: (err: Error) => void): void;
export declare function writeFileSync(filename: string, data: any, encoding?: string): void;
export declare function writeFileSync(filename: string, data: any, option?: OpenOptions): void;
export declare function appendFile(filename: string, data: any, encoding?: string, callback?: (err: Error) => void): void;
export declare function appendFile(filename: string, data: any, option?: OpenOptions, callback?: (err: Error) => void): void;
export declare function appendFileSync(filename: string, data: any, encoding?: string): void;
export declare function appendFileSync(filename: string, data: any, option?: OpenOptions): void;
export declare function watchFile(filename: string, listener: { curr: Stats; prev: Stats; }): void;
export declare function watchFile(filename: string, options: { persistent?: boolean; interval?: number; }, listener: { curr: Stats; prev: Stats; }): void;
export declare function unwatchFile(filename: string, listener?: Stats): void;
export declare function watch(filename: string, options?: { persistent?: boolean; }, listener?: (event: string, filename: string) => any): FSWatcher;
export declare function exists(path: string, callback?: (exists: boolean) => void): void;
export declare function existsSync(path: string): boolean;
export declare function ensureDir(path: string, cb: (err: Error) => void): void;
export declare function ensureDirSync(path: string): void;

export interface OpenOptions {
    encoding?: string;
    flag?: string;
}

export declare function createReadStream(path: string | Buffer, options?: {
    flags?: string;
    encoding?: string;
    fd?: number;
    mode?: number;
    autoClose?: boolean;
    start?: number;
    end?: number;
}): ReadStream;
export declare function createWriteStream(path: string | Buffer, options?: {
    flags?: string;
    encoding?: string;
    fd?: number;
    mode?: number;
}): WriteStream;



//promisified versions
export declare function copyAsync(src: string, dest: string): Promise<void>;
export declare function copyAsync(src: string, dest: string, filter: (src: string) => boolean): Promise<void>;

export declare function createFileAsync(file: string): Promise<void>;

export declare function mkdirsAsync(dir: string): Promise<void>;
export declare function mkdirpAsync(dir: string): Promise<void>;

export declare function outputFileAsync(file: string, data: any): Promise<void>;

export declare function outputJsonAsync(file: string, data: any): Promise<void>;
export declare function outputJSONAsync(file: string, data: any): Promise<void>;

export declare function readJsonAsync(file: string): Promise<void>;
export declare function readJsonAsync(file: string, options?: OpenOptions): Promise<void>;
export declare function readJSONAsync(file: string): Promise<void>;
export declare function readJSONAsync(file: string, options?: OpenOptions): Promise<void>;


export declare function removeAsync(dir: string): Promise<void>;
// export function deleteAsync(dir: string):Promise<void>;

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
export declare function realpathAsync(path: string, cache: string): Promise<string>;
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
