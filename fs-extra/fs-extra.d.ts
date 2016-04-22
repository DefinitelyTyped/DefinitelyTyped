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

declare export class ReadStream extends stream.Readable { }
declare export class WriteStream extends stream.Writable { }

//extended methods
declare export function copy(src: string, dest: string, callback?: (err: Error) => void): void;
declare export function copy(src: string, dest: string, filter: CopyFilter, callback?: (err: Error) => void): void;
declare export function copy(src: string, dest: string, options: CopyOptions, callback?: (err: Error) => void): void;

declare export function copySync(src: string, dest: string): void;
declare export function copySync(src: string, dest: string, filter: CopyFilter): void;
declare export function copySync(src: string, dest: string, options: CopyOptions): void;

declare export function createFile(file: string, callback?: (err: Error) => void): void;
declare export function createFileSync(file: string): void;

declare export function mkdirs(dir: string, callback?: (err: Error) => void): void;
declare export function mkdirp(dir: string, callback?: (err: Error) => void): void;
declare export function mkdirs(dir: string, options?: MkdirOptions, callback?: (err: Error) => void): void;
declare export function mkdirp(dir: string, options?: MkdirOptions, callback?: (err: Error) => void): void;
declare export function mkdirsSync(dir: string, options?: MkdirOptions): void;
declare export function mkdirpSync(dir: string, options?: MkdirOptions): void;

declare export function outputFile(file: string, data: any, callback?: (err: Error) => void): void;
declare export function outputFileSync(file: string, data: any): void;

declare export function outputJson(file: string, data: any, callback?: (err: Error) => void): void;
declare export function outputJSON(file: string, data: any, callback?: (err: Error) => void): void;
declare export function outputJsonSync(file: string, data: any): void;
declare export function outputJSONSync(file: string, data: any): void;

declare export function readJson(file: string, callback: (err: Error, jsonObject: any) => void): void;
declare export function readJson(file: string, options: OpenOptions, callback: (err: Error, jsonObject: any) => void): void;
declare export function readJSON(file: string, callback: (err: Error, jsonObject: any) => void): void;
declare export function readJSON(file: string, options: OpenOptions, callback: (err: Error, jsonObject: any) => void): void;

declare export function readJsonSync(file: string, options?: OpenOptions): any;
declare export function readJSONSync(file: string, options?: OpenOptions): any;

declare export function remove(dir: string, callback?: (err: Error) => void): void;
declare export function removeSync(dir: string): void;
// export function delete(dir: string, callback?: (err: Error) => void): void;
// export function deleteSync(dir: string): void;

declare export function writeJson(file: string, object: any, callback?: (err: Error) => void): void;
declare export function writeJson(file: string, object: any, options?: OpenOptions, callback?: (err: Error) => void): void;
declare export function writeJSON(file: string, object: any, callback?: (err: Error) => void): void;
declare export function writeJSON(file: string, object: any, options?: OpenOptions, callback?: (err: Error) => void): void;

declare export function writeJsonSync(file: string, object: any, options?: OpenOptions): void;
declare export function writeJSONSync(file: string, object: any, options?: OpenOptions): void;

declare export function rename(oldPath: string, newPath: string, callback?: (err: Error) => void): void;
declare export function renameSync(oldPath: string, newPath: string): void;
declare export function truncate(fd: number, len: number, callback?: (err: Error) => void): void;
declare export function truncateSync(fd: number, len: number): void;
declare export function chown(path: string, uid: number, gid: number, callback?: (err: Error) => void): void;
declare export function chownSync(path: string, uid: number, gid: number): void;
declare export function fchown(fd: number, uid: number, gid: number, callback?: (err: Error) => void): void;
declare export function fchownSync(fd: number, uid: number, gid: number): void;
declare export function lchown(path: string, uid: number, gid: number, callback?: (err: Error) => void): void;
declare export function lchownSync(path: string, uid: number, gid: number): void;
declare export function chmod(path: string, mode: number, callback?: (err: Error) => void): void;
declare export function chmod(path: string, mode: string, callback?: (err: Error) => void): void;
declare export function chmodSync(path: string, mode: number): void;
declare export function chmodSync(path: string, mode: string): void;
declare export function fchmod(fd: number, mode: number, callback?: (err: Error) => void): void;
declare export function fchmod(fd: number, mode: string, callback?: (err: Error) => void): void;
declare export function fchmodSync(fd: number, mode: number): void;
declare export function fchmodSync(fd: number, mode: string): void;
declare export function lchmod(path: string, mode: string, callback?: (err: Error) => void): void;
declare export function lchmod(path: string, mode: number, callback?: (err: Error) => void): void;
declare export function lchmodSync(path: string, mode: number): void;
declare export function lchmodSync(path: string, mode: string): void;
declare export function stat(path: string, callback?: (err: Error, stats: Stats) => void): void;
declare export function lstat(path: string, callback?: (err: Error, stats: Stats) => void): void;
declare export function fstat(fd: number, callback?: (err: Error, stats: Stats) => void): void;
declare export function statSync(path: string): Stats;
declare export function lstatSync(path: string): Stats;
declare export function fstatSync(fd: number): Stats;
declare export function link(srcpath: string, dstpath: string, callback?: (err: Error) => void): void;
declare export function linkSync(srcpath: string, dstpath: string): void;
declare export function symlink(srcpath: string, dstpath: string, type?: string, callback?: (err: Error) => void): void;
declare export function symlinkSync(srcpath: string, dstpath: string, type?: string): void;
declare export function readlink(path: string, callback?: (err: Error, linkString: string) => void): void;
declare export function realpath(path: string, callback?: (err: Error, resolvedPath: string) => void): void;
declare export function realpath(path: string, cache: string, callback: (err: Error, resolvedPath: string) => void): void;
declare export function realpathSync(path: string, cache?: boolean): string;
declare export function unlink(path: string, callback?: (err: Error) => void): void;
declare export function unlinkSync(path: string): void;
declare export function rmdir(path: string, callback?: (err: Error) => void): void;
declare export function rmdirSync(path: string): void;
declare export function mkdir(path: string, mode?: number, callback?: (err: Error) => void): void;
declare export function mkdir(path: string, mode?: string, callback?: (err: Error) => void): void;
declare export function mkdirSync(path: string, mode?: number): void;
declare export function mkdirSync(path: string, mode?: string): void;
declare export function readdir(path: string, callback?: (err: Error, files: string[]) => void): void;
declare export function readdirSync(path: string): string[];
declare export function close(fd: number, callback?: (err: Error) => void): void;
declare export function closeSync(fd: number): void;
declare export function open(path: string, flags: string, mode?: string, callback?: (err: Error, fs: number) => void): void;
declare export function openSync(path: string, flags: string, mode?: string): number;
declare export function utimes(path: string, atime: number, mtime: number, callback?: (err: Error) => void): void;
declare export function utimesSync(path: string, atime: number, mtime: number): void;
declare export function futimes(fd: number, atime: number, mtime: number, callback?: (err: Error) => void): void;
declare export function futimesSync(fd: number, atime: number, mtime: number): void;
declare export function fsync(fd: number, callback?: (err: Error) => void): void;
declare export function fsyncSync(fd: number): void;
declare export function write(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number, callback?: (err: Error, written: number, buffer: NodeBuffer) => void): void;
declare export function writeSync(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number): number;
declare export function read(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number, callback?: (err: Error, bytesRead: number, buffer: NodeBuffer) => void): void;
declare export function readSync(fd: number, buffer: NodeBuffer, offset: number, length: number, position: number): number;
declare export function readFile(filename: string, encoding: string, callback: (err: Error, data: string) => void): void;
declare export function readFile(filename: string, options: OpenOptions, callback: (err: Error, data: string) => void): void;
declare export function readFile(filename: string, callback: (err: Error, data: NodeBuffer) => void): void;
declare export function readFileSync(filename: string): NodeBuffer;
declare export function readFileSync(filename: string, encoding: string): string;
declare export function readFileSync(filename: string, options: OpenOptions): string;
declare export function writeFile(filename: string, data: any, encoding?: string, callback?: (err: Error) => void): void;
declare export function writeFile(filename: string, data: any, options?: OpenOptions, callback?: (err: Error) => void): void;
declare export function writeFileSync(filename: string, data: any, encoding?: string): void;
declare export function writeFileSync(filename: string, data: any, option?: OpenOptions): void;
declare export function appendFile(filename: string, data: any, encoding?: string, callback?: (err: Error) => void): void;
declare export function appendFile(filename: string, data: any, option?: OpenOptions, callback?: (err: Error) => void): void;
declare export function appendFileSync(filename: string, data: any, encoding?: string): void;
declare export function appendFileSync(filename: string, data: any, option?: OpenOptions): void;
declare export function watchFile(filename: string, listener: { curr: Stats; prev: Stats; }): void;
declare export function watchFile(filename: string, options: { persistent?: boolean; interval?: number; }, listener: { curr: Stats; prev: Stats; }): void;
declare export function unwatchFile(filename: string, listener?: Stats): void;
declare export function watch(filename: string, options?: { persistent?: boolean; }, listener?: (event: string, filename: string) => any): FSWatcher;
declare export function exists(path: string, callback?: (exists: boolean) => void): void;
declare export function existsSync(path: string): boolean;
declare export function ensureDir(path: string, cb: (err: Error) => void): void;
declare export function ensureDirSync(path: string): void;
declare export function ensureFile(path: string, cb: (err: Error) => void): void;
declare export function ensureFileSync(path: string): void;
declare export function ensureLink(path: string, cb: (err: Error) => void): void;
declare export function ensureLinkSync(path: string): void;
declare export function ensureSymlink(path: string, cb: (err: Error) => void): void;
declare export function ensureSymlinkSync(path: string): void;
declare export function emptyDir(path: string, callback?: (err: Error) => void): void;
declare export function emptyDirSync(path: string): boolean;

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
declare export function createReadStream(path: string, options?: ReadStreamOptions): ReadStream;
declare export function createWriteStream(path: string, options?: WriteStreamOptions): WriteStream;
declare export function createOutputStream(path: string, options?: WriteStreamOptions): WriteStream;
