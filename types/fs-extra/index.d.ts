// Type definitions for fs-extra 8.1
// Project: https://github.com/jprichardson/node-fs-extra
// Definitions by: Alan Agius <https://github.com/alan-agius4>,
//                 midknight41 <https://github.com/midknight41>,
//                 Brendan Forster <https://github.com/shiftkey>,
//                 Mees van Dijk <https://github.com/mees->,
//                 Justin Rockwood <https://github.com/jrockwood>,
//                 Sang Dang <https://github.com/sangdth>,
//                 Florian Keller <https://github.com/ffflorian>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Oganexon <https://github.com/oganexon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import * as fs from "graceful-fs";
export * as fs from "graceful-fs";

import Stats = fs.Stats;

export function copy(src: string, dest: string, options?: CopyOptions): Promise<void>;
export function copy(src: string, dest: string, callback: (err: Error) => void): void;
export function copy(src: string, dest: string, options: CopyOptions, callback: (err: Error) => void): void;
export function copySync(src: string, dest: string, options?: CopyOptionsSync): void;

export function copyFile(src: string, dest: string, flags?: number): Promise<void>;
export function copyFile(src: string, dest: string, callback: (err: Error) => void): void;
export function copyFile(src: string, dest: string, flags: number, callback: (err: Error) => void): void;

export function move(src: string, dest: string, options?: MoveOptions): Promise<void>;
export function move(src: string, dest: string, callback: (err: Error) => void): void;
export function move(src: string, dest: string, options: MoveOptions, callback: (err: Error) => void): void;
export function moveSync(src: string, dest: string, options?: MoveOptions): void;

export function createFile(file: string): Promise<void>;
export function createFile(file: string, callback: (err: Error) => void): void;
export function createFileSync(file: string): void;

export function createSymlink(src: string, dest: string, type: SymlinkType): Promise<void>;
export function createSymlink(src: string, dest: string, type: SymlinkType, callback?: (err: Error) => void): void;
export function createSymlinkSync(src: string, dest: string, type: SymlinkType): void;

export function ensureDir(path: string, options?: EnsureOptions | number): Promise<void>;
export function ensureDir(path: string, options?: EnsureOptions | number, callback?: (err: Error) => void): void;
export function ensureDirSync(path: string, options?: EnsureOptions | number): void;

export function mkdirs(dir: string): Promise<void>;
export function mkdirs(dir: string, callback: (err: Error) => void): void;
export function mkdirp(dir: string): Promise<void>;
export function mkdirp(dir: string, callback: (err: Error) => void): void;
export function mkdirsSync(dir: string): void;
export function mkdirpSync(dir: string): void;

export function outputFile(file: string, data: any, options?: WriteFileOptions | string): Promise<void>;
export function outputFile(file: string, data: any, callback: (err: Error) => void): void;
export function outputFile(file: string, data: any, options: WriteFileOptions | string, callback: (err: Error) => void): void;
export function outputFileSync(file: string, data: any, options?: WriteFileOptions | string): void;

export function readJson(file: string, options?: ReadOptions): Promise<any>;
export function readJson(file: string, callback: (err: Error, jsonObject: any) => void): void;
export function readJson(file: string, options: ReadOptions, callback: (err: Error, jsonObject: any) => void): void;
export function readJSON(file: string, options?: ReadOptions): Promise<any>;
export function readJSON(file: string, callback: (err: Error, jsonObject: any) => void): void;
export function readJSON(file: string, options: ReadOptions, callback: (err: Error, jsonObject: any) => void): void;

export function readJsonSync(file: string, options?: ReadOptions): any;
export function readJSONSync(file: string, options?: ReadOptions): any;

export function remove(dir: string, options?: RemoveOptions): Promise<void>;
export function remove(dir: string, callback: (err: Error) => void): void;
export function remove(dir: string, options: RemoveOptions, callback: (err: Error) => void): void;
export function removeSync(dir: string): void;

export function outputJSON(file: string, data: any, options?: WriteOptions): Promise<void>;
export function outputJSON(file: string, data: any, options: WriteOptions, callback: (err: Error) => void): void;
export function outputJSON(file: string, data: any, callback: (err: Error) => void): void;
export function outputJson(file: string, data: any, options?: WriteOptions): Promise<void>;
export function outputJson(file: string, data: any, options: WriteOptions, callback: (err: Error) => void): void;
export function outputJson(file: string, data: any, callback: (err: Error) => void): void;
export function outputJsonSync(file: string, data: any, options?: WriteOptions): void;
export function outputJSONSync(file: string, data: any, options?: WriteOptions): void;

export function writeJSON(file: string, object: any, options?: WriteOptions): Promise<void>;
export function writeJSON(file: string, object: any, callback: (err: Error) => void): void;
export function writeJSON(file: string, object: any, options: WriteOptions, callback: (err: Error) => void): void;
export function writeJson(file: string, object: any, options?: WriteOptions): Promise<void>;
export function writeJson(file: string, object: any, callback: (err: Error) => void): void;
export function writeJson(file: string, object: any, options: WriteOptions, callback: (err: Error) => void): void;

export function writeJsonSync(file: string, object: any, options?: WriteOptions): void;
export function writeJSONSync(file: string, object: any, options?: WriteOptions): void;

export function ensureFile(path: string): Promise<void>;
export function ensureFile(path: string, callback: (err: Error) => void): void;
export function ensureFileSync(path: string): void;

export function ensureLink(src: string, dest: string): Promise<void>;
export function ensureLink(src: string, dest: string, callback: (err: Error) => void): void;
export function ensureLinkSync(src: string, dest: string): void;

export function ensureSymlink(src: string, dest: string, type?: SymlinkType): Promise<void>;
export function ensureSymlink(src: string, dest: string, type: SymlinkType, callback: (err: Error) => void): void;
export function ensureSymlink(src: string, dest: string, callback: (err: Error) => void): void;
export function ensureSymlinkSync(src: string, dest: string, type?: SymlinkType): void;

export function emptyDir(path: string): Promise<void>;
export function emptyDir(path: string, callback: (err: Error) => void): void;
export function emptyDirSync(path: string): void;

export function pathExists(path: string): Promise<boolean>;
export function pathExists(path: string, callback: (err: Error, exists: boolean) => void): void;
export function pathExistsSync(path: string): boolean;

// fs async methods
// copied from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v6/index.d.ts

export function access(path: string | Buffer, mode?: number): Promise<void>;

export function appendFile(file: string | Buffer | number, data: any, options?: { encoding?: string; mode?: number | string; flag?: string; }): Promise<void>;

export function chmod(path: string | Buffer, mode: string | number): Promise<void>;

export function chown(path: string | Buffer, uid: number, gid: number): Promise<void>;

export function close(fd: number): Promise<void>;

export function fchmod(fd: number, mode: string | number): Promise<void>;

export function fchown(fd: number, uid: number, gid: number): Promise<void>;

export function fdatasync(fd: number): Promise<void>;

export function fstat(fd: number): Promise<Stats>;

export function fsync(fd: number): Promise<void>;

export function ftruncate(fd: number, len?: number): Promise<void>;

export function futimes(fd: number, atime: number, mtime: number): Promise<void>;
export function futimes(fd: number, atime: Date, mtime: Date): Promise<void>;

export function lchown(path: string | Buffer, uid: number, gid: number): Promise<void>;

export function link(srcpath: string | Buffer, dstpath: string | Buffer): Promise<void>;

export function lstat(path: string | Buffer): Promise<Stats>;

export function mkdir(path: string | Buffer, mode?: number | string): Promise<void>;

export function open(path: string | Buffer, flags: string | number, mode?: number): Promise<number>;

export function read(fd: number, buffer: Buffer, offset: number, length: number, position: number | null): Promise<ReadResult>;

export function readFile(file: string | Buffer | number, options: { flag?: string; } | { encoding: string; flag?: string; }): Promise<string>;
// tslint:disable-next-line:unified-signatures
export function readFile(file: string | Buffer | number, encoding: string): Promise<string>;
export function readFile(file: string | Buffer | number): Promise<Buffer>;

export function readdir(path: string | Buffer): Promise<string[]>;

export function readlink(path: string | Buffer): Promise<string>;

export function realpath(path: string | Buffer, cache?: { [path: string]: string }): Promise<string>;

export function rename(oldPath: string, newPath: string): Promise<void>;

export function rmdir(path: string | Buffer): Promise<void>;

export function stat(path: string | Buffer): Promise<Stats>;

export function symlink(srcpath: string | Buffer, dstpath: string | Buffer, type?: FsSymlinkType): Promise<void>;

export function truncate(path: string | Buffer, len?: number): Promise<void>;

export function unlink(path: string | Buffer): Promise<void>;

export function utimes(path: string | Buffer, atime: number, mtime: number): Promise<void>;
export function utimes(path: string | Buffer, atime: Date, mtime: Date): Promise<void>;

export function write(fd: number, buffer: Buffer, offset?: number, length?: number, position?: number | null): Promise<WriteResult>;
export function write(fd: number, data: any, offset?: number, encoding?: string): Promise<WriteResult>;

export function writeFile(file: string | Buffer | number, data: any, options?: WriteFileOptions | string): Promise<void>;

export function mkdtemp(prefix: string): Promise<string>;

export interface PathEntry {
    path: string;
    stats: Stats;
}

export interface PathEntryStream {
    read(): PathEntry | null;
}

export type CopyFilterSync = (src: string, dest: string) => boolean;
export type CopyFilterAsync = (src: string, dest: string) => Promise<boolean>;

export type SymlinkType = "dir" | "file";
export type FsSymlinkType = "dir" | "file" | "junction";

export interface CopyOptions {
    dereference?: boolean;
    overwrite?: boolean;
    preserveTimestamps?: boolean;
    errorOnExist?: boolean;
    filter?: CopyFilterSync | CopyFilterAsync;
    recursive?: boolean;
}

export interface CopyOptionsSync extends CopyOptions {
    filter?: CopyFilterSync;
}

export interface EnsureOptions {
    mode?: number;
}

export interface MoveOptions {
    overwrite?: boolean;
    limit?: number;
}

export interface ReadOptions {
    throws?: boolean;
    fs?: object;
    reviver?: any;
    encoding?: string;
    flag?: string;
}

export interface RemoveOptions {
    maxBusyTries?: number;
    unlink?: typeof fs.unlink | typeof unlink;
    chmod?: typeof fs.chmod | typeof chmod;
    stat?: typeof fs.stat | typeof stat;
    lstat?: typeof fs.lstat | typeof lstat;
    rmdir?: typeof fs.rmdir | typeof rmdir;
    readdir?: typeof fs.readdir | typeof readdir;
    unlinkSync?: typeof fs.unlinkSync;
    chmodSync?: typeof fs.chmodSync;
    statSync?: typeof fs.statSync;
    lstatSync?: typeof fs.lstatSync;
    rmdirSync?: typeof fs.rmdirSync;
    readdirSync?: typeof fs.readdirSync;
}

export interface WriteFileOptions {
    encoding?: string;
    flag?: string;
    mode?: number;
}

export interface WriteOptions extends WriteFileOptions {
    fs?: object;
    replacer?: any;
    spaces?: number | string;
    EOL?: string;
}

export interface ReadResult {
    bytesRead: number;
    buffer: Buffer;
}

export interface WriteResult {
    bytesWritten: number;
    buffer: Buffer;
}
