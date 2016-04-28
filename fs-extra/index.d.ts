// Type definitions for fs-extra
// Project: https://github.com/jprichardson/node-fs-extra
// Definitions by: midknight41 <https://github.com/midknight41>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/fs-extra.d.ts

///<reference path="../node/node.d.ts"/>


import stream = require("stream");

export interface Stats {
    isFile(): boolean;
    isDirectory(): boolean;
    isBlockDevice(): boolean;
    isCharacterDevice(): boolean;
    isSymbolicLink(): boolean;
    isFIFO(): boolean;
    isSocket(): boolean;
    dev: number;
    ino: number;
    mode: number;
    nlink: number;
    uid: number;
    gid: number;
    rdev: number;
    size: number;
    blksize: number;
    blocks: number;
    atime: Date;
    mtime: Date;
    ctime: Date;
}

export interface FSWatcher {
    close(): void;
}

export declare class ReadStream extends stream.Readable { }
export declare class WriteStream extends stream.Writable { }

//extended methods
export declare function copy(src: string, dest: string, callback?: (err: Error) => void): void;
export declare function copy(src: string, dest: string, filter: CopyFilter, callback?: (err: Error) => void): void;
export declare function copy(src: string, dest: string, options: CopyOptions, callback?: (err: Error) => void): void;

export declare function copySync(src: string, dest: string): void;
export declare function copySync(src: string, dest: string, filter: CopyFilter): void;
export declare function copySync(src: string, dest: string, options: CopyOptions): void;

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
export declare function ensureFile(path: string, cb: (err: Error) => void): void;
export declare function ensureFileSync(path: string): void;
export declare function ensureLink(path: string, cb: (err: Error) => void): void;
export declare function ensureLinkSync(path: string): void;
export declare function ensureSymlink(path: string, cb: (err: Error) => void): void;
export declare function ensureSymlinkSync(path: string): void;
export declare function emptyDir(path: string, callback?: (err: Error) => void): void;
export declare function emptyDirSync(path: string): boolean;

export interface CopyFilterFunction {
    (src: string): boolean
}

export type CopyFilter = CopyFilterFunction | RegExp;

export interface CopyOptions {
    clobber?: boolean
    preserveTimestamps?: boolean
    filter?: CopyFilter
}

export interface OpenOptions {
    encoding?: string;
    flag?: string;
}

export interface MkdirOptions {
    fs?: any;
    mode?: number;
}

export interface ReadStreamOptions {
    flags?: string;
    encoding?: string;
    fd?: number;
    mode?: number;
    bufferSize?: number;
}
export interface WriteStreamOptions {
    flags?: string;
    encoding?: string;
    string?: string;
}
export declare function createReadStream(path: string, options?: ReadStreamOptions): ReadStream;
export declare function createWriteStream(path: string, options?: WriteStreamOptions): WriteStream;
export declare function createOutputStream(path: string, options?: WriteStreamOptions): WriteStream;
