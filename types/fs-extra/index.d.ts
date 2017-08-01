// Type definitions for fs-extra 4.0
// Project: https://github.com/jprichardson/node-fs-extra
// Definitions by: Alan Agius <https://github.com/alan-agius4>,
//                 midknight41 <https://github.com/midknight41>,
//                 Brendan Forster <https://github.com/shiftkey>,
//                 Mees van Dijk <https://github.com/mees->
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import { Stats } from "fs";

export * from "fs";

export function copy(src: string, dest: string, options?: CopyOptions): Promise<void>;
export function copy(src: string, dest: string, callback: (err: Error) => void): void;
export function copy(src: string, dest: string, options: CopyOptions, callback: (err: Error) => void): void;
export function copySync(src: string, dest: string, options?: CopyOptions): void;

export function move(src: string, dest: string, options?: MoveOptions): Promise<void>;
export function move(src: string, dest: string, callback: (err: Error) => void): void;
export function move(src: string, dest: string, options: MoveOptions, callback: (err: Error) => void): void;
export function moveSync(src: string, dest: string, options?: MoveOptions): void;

export function createFile(file: string): Promise<void>;
export function createFile(file: string, callback: (err: Error) => void): void;
export function createFileSync(file: string): void;

export function ensureDir(path: string): Promise<void>;
export function ensureDir(path: string, callback: (err: Error) => void): void;
export function ensureDirSync(path: string): void;

export function mkdirs(dir: string): Promise<void>;
export function mkdirs(dir: string, callback: (err: Error) => void): void;
export function mkdirp(dir: string): Promise<void>;
export function mkdirp(dir: string, callback: (err: Error) => void): void;
export function mkdirsSync(dir: string): void;
export function mkdirpSync(dir: string): void;

export function outputFile(file: string, data: any): Promise<void>;
export function outputFile(file: string, data: any, callback: (err: Error) => void): void;
export function outputFileSync(file: string, data: any): void;

export function readJson(file: string, options?: ReadOptions): Promise<any>;
export function readJson(file: string, callback: (err: Error, jsonObject: any) => void): void;
export function readJson(file: string, options: ReadOptions, callback: (err: Error, jsonObject: any) => void): void;
export function readJSON(file: string, options?: ReadOptions): Promise<any>;
export function readJSON(file: string, callback: (err: Error, jsonObject: any) => void): void;
export function readJSON(file: string, options: ReadOptions, callback: (err: Error, jsonObject: any) => void): void;

export function readJsonSync(file: string, options?: ReadOptions): any;
export function readJSONSync(file: string, options?: ReadOptions): any;

export function remove(dir: string): Promise<void>;
export function remove(dir: string, callback: (err: Error) => void): void;
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

/** Tests a user's permissions for the file specified by path. */
export function access(path: string | Buffer, callback: (err: NodeJS.ErrnoException) => void): void;
export function access(path: string | Buffer, mode: number, callback: (err: NodeJS.ErrnoException) => void): void;
export function access(path: string | Buffer, mode?: number): Promise<void>;

export function appendFile(file: string | Buffer | number, data: any, options: { encoding?: string; mode?: number | string; flag?: string; }, callback: (err: NodeJS.ErrnoException) => void): void;
export function appendFile(file: string | Buffer | number, data: any, callback: (err: NodeJS.ErrnoException) => void): void;
export function appendFile(file: string | Buffer | number, data: any, options?: { encoding?: string; mode?: number | string; flag?: string; }): Promise<void>;

export function chmod(path: string | Buffer, mode: string | number, callback: (err?: NodeJS.ErrnoException) => void): void;
export function chmod(path: string | Buffer, mode: string | number): Promise<void>;

export function chown(path: string | Buffer, uid: number, gid: number): Promise<void>;
export function chown(path: string | Buffer, uid: number, gid: number, callback: (err?: NodeJS.ErrnoException) => void): void;

export function close(fd: number, callback: (err?: NodeJS.ErrnoException) => void): void;
export function close(fd: number): Promise<void>;

export function fchmod(fd: number, mode: string | number, callback: (err?: NodeJS.ErrnoException) => void): void;
export function fchmod(fd: number, mode: string | number): Promise<void>;

export function fchown(fd: number, uid: number, gid: number, callback: (err?: NodeJS.ErrnoException) => void): void;
export function fchown(fd: number, uid: number, gid: number): Promise<void>;

export function fdatasync(fd: number, callback: () => void): void;
export function fdatasync(fd: number): Promise<void>;

export function fstat(fd: number, callback: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
export function fstat(fd: number): Promise<Stats>;

export function fsync(fd: number, callback: (err?: NodeJS.ErrnoException) => void): void;
export function fsync(fd: number): Promise<void>;

export function ftruncate(fd: number, callback: (err?: NodeJS.ErrnoException) => void): void;
export function ftruncate(fd: number, len: number, callback: (err?: NodeJS.ErrnoException) => void): void;
export function ftruncate(fd: number, len?: number): Promise<void>;

export function futimes(fd: number, atime: number, mtime: number, callback: (err?: NodeJS.ErrnoException) => void): void;
export function futimes(fd: number, atime: Date, mtime: Date, callback: (err?: NodeJS.ErrnoException) => void): void;
export function futimes(fd: number, atime: number, mtime: number): Promise<void>;
export function futimes(fd: number, atime: Date, mtime: Date): Promise<void>;

export function lchown(path: string | Buffer, uid: number, gid: number, callback: (err?: NodeJS.ErrnoException) => void): void;
export function lchown(path: string | Buffer, uid: number, gid: number): Promise<void>;

export function link(srcpath: string | Buffer, dstpath: string | Buffer, callback: (err?: NodeJS.ErrnoException) => void): void;
export function link(srcpath: string | Buffer, dstpath: string | Buffer): Promise<void>;

export function lstat(path: string | Buffer, callback: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
export function lstat(path: string | Buffer): Promise<Stats>;

/**
 * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
 *
 * @param path
 * @param callback No arguments other than a possible exception are given to the completion callback.
 */
export function mkdir(path: string | Buffer, callback: (err?: NodeJS.ErrnoException) => void): void;
/**
 * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
 *
 * @param path
 * @param mode
 * @param callback No arguments other than a possible exception are given to the completion callback.
 */
export function mkdir(path: string | Buffer, mode: number | string, callback: (err?: NodeJS.ErrnoException) => void): void;
export function mkdir(path: string | Buffer): Promise<void>;

export function open(path: string | Buffer, flags: string | number, callback: (err: NodeJS.ErrnoException, fd: number) => void): void;
export function open(path: string | Buffer, flags: string | number, mode: number, callback: (err: NodeJS.ErrnoException, fd: number) => void): void;
export function open(path: string | Buffer, flags: string | number, mode?: number): Promise<number>;

export function read(fd: number, buffer: Buffer, offset: number, length: number, position: number | null, callback: (err: NodeJS.ErrnoException, bytesRead: number, buffer: Buffer) => void): void;
export function read(fd: number, buffer: Buffer, offset: number, length: number, position: number | null): Promise<ReadResult>;

export function readFile(file: string | Buffer | number, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
export function readFile(file: string | Buffer | number, encoding: string, callback: (err: NodeJS.ErrnoException, data: string) => void): void;
export function readFile(file: string | Buffer | number, options: { flag?: string; } | { encoding: string; flag?: string; }, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
export function readFile(file: string | Buffer | number, options: { flag?: string; } | { encoding: string; flag?: string; }): Promise<string>;
// tslint:disable-next-line:unified-signatures
export function readFile(file: string | Buffer | number, encoding: string): Promise<string>;
export function readFile(file: string | Buffer | number): Promise<Buffer>;

export function readdir(path: string | Buffer, callback: (err: NodeJS.ErrnoException, files: string[]) => void): void;
export function readdir(path: string | Buffer): Promise<string[]>;

export function readlink(path: string | Buffer, callback: (err: NodeJS.ErrnoException, linkString: string) => any): void;
export function readlink(path: string | Buffer): Promise<string>;

export function realpath(path: string | Buffer, callback: (err: NodeJS.ErrnoException, resolvedPath: string) => any): void;
export function realpath(path: string | Buffer, cache: { [path: string]: string }, callback: (err: NodeJS.ErrnoException, resolvedPath: string) => any): void;
export function realpath(path: string | Buffer, cache?: { [path: string]: string }): Promise<string>;

export function rename(oldPath: string, newPath: string, callback: (err?: NodeJS.ErrnoException) => void): void;
export function rename(oldPath: string, newPath: string): Promise<void>;

/**
 * Asynchronous rmdir - removes the directory specified in {path}
 *
 * @param path
 * @param callback No arguments other than a possible exception are given to the completion callback.
 */
export function rmdir(path: string | Buffer, callback: (err?: NodeJS.ErrnoException) => void): void;
export function rmdir(path: string | Buffer): Promise<void>;

export function stat(path: string | Buffer, callback: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
export function stat(path: string | Buffer): Promise<Stats>;

export function symlink(srcpath: string | Buffer, dstpath: string | Buffer, type: string, callback: (err?: NodeJS.ErrnoException) => void): void;
export function symlink(srcpath: string | Buffer, dstpath: string | Buffer, type?: string): Promise<void>;

export function truncate(path: string | Buffer, callback: (err?: NodeJS.ErrnoException) => void): void;
export function truncate(path: string | Buffer, len: number, callback: (err?: NodeJS.ErrnoException) => void): void;
export function truncate(path: string | Buffer, len?: number): Promise<void>;

/**
 * Asynchronous unlink - deletes the file specified in {path}
 *
 * @param path
 * @param callback No arguments other than a possible exception are given to the completion callback.
 */
export function unlink(path: string | Buffer, callback: (err?: NodeJS.ErrnoException) => void): void;
export function unlink(path: string | Buffer): Promise<void>;

export function utimes(path: string | Buffer, atime: number, mtime: number, callback: (err?: NodeJS.ErrnoException) => void): void;
export function utimes(path: string | Buffer, atime: Date, mtime: Date, callback: (err?: NodeJS.ErrnoException) => void): void;
export function utimes(path: string | Buffer, atime: number, mtime: number): Promise<void>;
export function utimes(path: string | Buffer, atime: Date, mtime: Date): Promise<void>;

export function write(fd: number, buffer: Buffer, offset: number, length: number, position: number | null, callback: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void): void;
export function write(fd: number, buffer: Buffer, offset: number, length: number, callback: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void): void;
export function write(fd: number, data: any, callback: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
export function write(fd: number, data: any, offset: number, callback: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
export function write(fd: number, data: any, offset: number, encoding: string, callback: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
export function write(fd: number, buffer: Buffer, offset: number, length: number, position?: number | null): Promise<WriteResult>;
export function write(fd: number, data: any, offset: number, encoding?: string): Promise<WriteResult>;

export function writeFile(file: string | Buffer | number, data: any, callback: (err: NodeJS.ErrnoException) => void): void;
export function writeFile(file: string | Buffer | number, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): Promise<void>;
export function writeFile(file: string | Buffer | number, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback: (err: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronous mkdtemp - Creates a unique temporary directory. Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
 *
 * @param prefix
 * @param callback The created folder path is passed as a string to the callback's second parameter.
 */
export function mkdtemp(prefix: string): Promise<string>;
export function mkdtemp(prefix: string, callback: (err: NodeJS.ErrnoException, folder: string) => void): void;

export interface PathEntry {
    path: string;
    stats: Stats;
}

export interface PathEntryStream {
    read(): PathEntry | null;
}

export type CopyFilter = ((src: string) => boolean) | RegExp;

export type SymlinkType = "dir" | "file";

export interface CopyOptions {
    dereference?: boolean;
    overwrite?: boolean;
    preserveTimestamps?: boolean;
    errorOnExist?: boolean;
    filter?: CopyFilter;
    recursive?: boolean;
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

export interface WriteOptions {
    fs?: object;
    replacer?: any;
    spaces?: number;
    encoding?: string;
    flag?: string;
    mode?: number;
}

export interface ReadResult {
    bytesRead: number;
    buffer: Buffer;
}

export interface WriteResult {
    bytesWritten: number;
    buffer: Buffer;
}
