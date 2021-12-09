// Type definitions for fs-extra 9.0
// Project: https://github.com/jprichardson/node-fs-extra
// Definitions by: Alan Agius <https://github.com/alan-agius4>,
//                 midknight41 <https://github.com/midknight41>,
//                 Brendan Forster <https://github.com/shiftkey>,
//                 Mees van Dijk <https://github.com/mees->,
//                 Justin Rockwood <https://github.com/jrockwood>,
//                 Sang Dang <https://github.com/sangdth>,
//                 Florian Keller <https://github.com/ffflorian>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Tiger Oakes <https://github.com/NotWoods>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.9

/// <reference types="node" />

import * as fs from 'fs';
import Stats = fs.Stats;
import PathLike = fs.PathLike;

export * from 'fs';

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
export function ensureDir(path: string, callback?: (err: Error) => void): void;
export function ensureDir(path: string, options?: EnsureOptions | number, callback?: (err: Error) => void): void;
export function ensureDirSync(path: string, options?: EnsureOptions | number): void;

export function mkdirs(dir: string): Promise<void>;
export function mkdirs(dir: string, callback: (err: Error) => void): void;
export function mkdirp(dir: string): Promise<void>;
export function mkdirp(dir: string, callback: (err: Error) => void): void;
export function mkdirsSync(dir: string): void;
export function mkdirpSync(dir: string): void;

export function outputFile(
    file: string,
    data: any,
    options?: WriteFileOptions | BufferEncoding | string,
): Promise<void>;
export function outputFile(file: string, data: any, callback: (err: Error) => void): void;
export function outputFile(
    file: string,
    data: any,
    options: WriteFileOptions | string,
    callback: (err: Error) => void,
): void;
export function outputFileSync(file: string, data: any, options?: WriteFileOptions | BufferEncoding | string): void;

export function readJson(file: string, options?: ReadOptions | BufferEncoding | string): Promise<any>;
export function readJson(file: string, callback: (err: Error, jsonObject: any) => void): void;
export function readJson(
    file: string,
    options: ReadOptions | BufferEncoding | string,
    callback: (err: Error, jsonObject: any) => void,
): void;
export function readJSON(file: string, options?: ReadOptions | BufferEncoding | string): Promise<any>;
export function readJSON(file: string, callback: (err: Error, jsonObject: any) => void): void;
export function readJSON(
    file: string,
    options: ReadOptions | BufferEncoding | string,
    callback: (err: Error, jsonObject: any) => void,
): void;

export function readJsonSync(file: string, options?: ReadOptions | BufferEncoding | string): any;
export function readJSONSync(file: string, options?: ReadOptions | BufferEncoding | string): any;

export function remove(dir: string, callback: (err: Error) => void): void;
export function remove(dir: string, callback?: (err: Error) => void): Promise<void>;
export function removeSync(dir: string): void;

export function outputJSON(file: string, data: any, options?: WriteOptions | BufferEncoding | string): Promise<void>;
export function outputJSON(
    file: string,
    data: any,
    options: WriteOptions | BufferEncoding | string,
    callback: (err: Error) => void,
): void;
export function outputJSON(file: string, data: any, callback: (err: Error) => void): void;
export function outputJson(file: string, data: any, options?: WriteOptions | BufferEncoding | string): Promise<void>;
export function outputJson(
    file: string,
    data: any,
    options: WriteOptions | BufferEncoding | string,
    callback: (err: Error) => void,
): void;
export function outputJson(file: string, data: any, callback: (err: Error) => void): void;
export function outputJsonSync(file: string, data: any, options?: WriteOptions | BufferEncoding | string): void;
export function outputJSONSync(file: string, data: any, options?: WriteOptions | BufferEncoding | string): void;

export function writeJSON(file: string, object: any, options?: WriteOptions | BufferEncoding | string): Promise<void>;
export function writeJSON(file: string, object: any, callback: (err: Error) => void): void;
export function writeJSON(
    file: string,
    object: any,
    options: WriteOptions | BufferEncoding | string,
    callback: (err: Error) => void,
): void;
export function writeJson(file: string, object: any, options?: WriteOptions | BufferEncoding | string): Promise<void>;
export function writeJson(file: string, object: any, callback: (err: Error) => void): void;
export function writeJson(
    file: string,
    object: any,
    options: WriteOptions | BufferEncoding | string,
    callback: (err: Error) => void,
): void;

export function writeJsonSync(file: string, object: any, options?: WriteOptions | BufferEncoding | string): void;
export function writeJSONSync(file: string, object: any, options?: WriteOptions | BufferEncoding | string): void;

export function ensureFile(path: string): Promise<void>;
export function ensureFile(path: string, callback: (err: Error) => void): void;
export function ensureFileSync(path: string): void;

export function ensureLink(src: string, dest: string): Promise<void>;
export function ensureLink(src: string, dest: string, callback: (err: Error) => void): void;
// alias for ensureLink
export const createLink: typeof ensureLink;
export function ensureLinkSync(src: string, dest: string): void;
// aliased as
export const createLinkSync: typeof ensureLinkSync;

export function ensureSymlink(src: string, dest: string, type?: SymlinkType): Promise<void>;
export function ensureSymlink(src: string, dest: string, type: SymlinkType, callback: (err: Error) => void): void;
export function ensureSymlink(src: string, dest: string, callback: (err: Error) => void): void;
export function ensureSymlinkSync(src: string, dest: string, type?: SymlinkType): void;

export function emptyDir(path: string): Promise<void>;
export function emptyDir(path: string, callback: (err: Error) => void): void;
export const emptydir: typeof emptyDir;

export function emptyDirSync(path: string): void;
export const emptydirSync: typeof emptyDirSync;

export function pathExists(path: string): Promise<boolean>;
export function pathExists(path: string, callback: (err: Error, exists: boolean) => void): void;
export function pathExistsSync(path: string): boolean;

// fs async methods
// copied from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v6/index.d.ts

export function access(path: PathLike, callback: (err: NodeJS.ErrnoException) => void): void;
export function access(path: PathLike, mode: number, callback: (err: NodeJS.ErrnoException) => void): void;
export function access(path: PathLike, mode?: number): Promise<void>;

export function appendFile(
    file: PathLike | number,
    data: any,
    options: {
        encoding?: BufferEncoding | string | undefined;
        mode?: number | string | undefined;
        flag?: string | undefined;
    },
    callback: (err: NodeJS.ErrnoException) => void,
): void;
export function appendFile(file: PathLike | number, data: any, callback: (err: NodeJS.ErrnoException) => void): void;
export function appendFile(
    file: PathLike | number,
    data: any,
    options?:
        | {
              encoding?: BufferEncoding | string | undefined;
              mode?: number | string | undefined;
              flag?: string | undefined;
          }
        | BufferEncoding
        | string,
): Promise<void>;

export function chmod(path: PathLike, mode: Mode, callback: (err: NodeJS.ErrnoException) => void): void;
export function chmod(path: PathLike, mode: Mode): Promise<void>;

export function chown(path: PathLike, uid: number, gid: number): Promise<void>;
export function chown(path: PathLike, uid: number, gid: number, callback: (err: NodeJS.ErrnoException) => void): void;

export function close(fd: number, callback: (err: NodeJS.ErrnoException) => void): void;
export function close(fd: number): Promise<void>;

export function fchmod(fd: number, mode: Mode, callback: (err: NodeJS.ErrnoException) => void): void;
export function fchmod(fd: number, mode: Mode): Promise<void>;

export function fchown(fd: number, uid: number, gid: number, callback: (err: NodeJS.ErrnoException) => void): void;
export function fchown(fd: number, uid: number, gid: number): Promise<void>;

export function fdatasync(fd: number, callback: () => void): void;
export function fdatasync(fd: number): Promise<void>;

export function fstat(fd: number, callback: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
export function fstat(fd: number): Promise<Stats>;

export function fsync(fd: number, callback: (err: NodeJS.ErrnoException) => void): void;
export function fsync(fd: number): Promise<void>;

export function ftruncate(fd: number, callback: (err: NodeJS.ErrnoException) => void): void;
export function ftruncate(fd: number, len: number, callback: (err: NodeJS.ErrnoException) => void): void;
export function ftruncate(fd: number, len?: number): Promise<void>;

export function futimes(fd: number, atime: number, mtime: number, callback: (err: NodeJS.ErrnoException) => void): void;
export function futimes(fd: number, atime: Date, mtime: Date, callback: (err: NodeJS.ErrnoException) => void): void;
export function futimes(fd: number, atime: number, mtime: number): Promise<void>;
export function futimes(fd: number, atime: Date, mtime: Date): Promise<void>;

export function lchown(path: PathLike, uid: number, gid: number, callback: (err: NodeJS.ErrnoException) => void): void;
export function lchown(path: PathLike, uid: number, gid: number): Promise<void>;

export function link(existingPath: PathLike, newPath: PathLike, callback: (err: NodeJS.ErrnoException) => void): void;
export function link(existingPath: PathLike, newPath: PathLike): Promise<void>;

export function lstat(path: PathLike, callback: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
export function lstat(path: PathLike): Promise<Stats>;

/**
 * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
 *
 * @param callback No arguments other than a possible exception are given to the completion callback.
 */
export function mkdir(path: PathLike, callback: (err: NodeJS.ErrnoException) => void): void;
/**
 * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
 *
 * @param callback No arguments other than a possible exception are given to the completion callback.
 */
export function mkdir(
    path: PathLike,
    options: Mode | fs.MakeDirectoryOptions | null,
    callback: (err: NodeJS.ErrnoException) => void,
): void;
export function mkdir(path: PathLike, options?: Mode | fs.MakeDirectoryOptions | null): Promise<void>;
export function mkdirSync(path: PathLike, options?: Mode | fs.MakeDirectoryOptions | null): void;

export function open(
    path: PathLike,
    flags: string | number,
    callback: (err: NodeJS.ErrnoException, fd: number) => void,
): void;
export function open(
    path: PathLike,
    flags: string | number,
    mode: Mode,
    callback: (err: NodeJS.ErrnoException, fd: number) => void,
): void;
export function open(path: PathLike, flags: string | number, mode?: Mode | null): Promise<number>;

export function opendir(path: string, cb: (err: NodeJS.ErrnoException | null, dir: fs.Dir) => void): void;
export function opendir(
    path: string,
    options: fs.OpenDirOptions,
    cb: (err: NodeJS.ErrnoException | null, dir: fs.Dir) => void,
): void;
export function opendir(path: string, options?: fs.OpenDirOptions): Promise<fs.Dir>;

export function read<TBuffer extends ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    offset: number,
    length: number,
    position: number | null,
    callback: (err: NodeJS.ErrnoException, bytesRead: number, buffer: TBuffer) => void,
): void;
export function read<TBuffer extends ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    offset: number,
    length: number,
    position: number | null,
): Promise<{ bytesRead: number; buffer: TBuffer }>;

export function readFile(file: PathLike | number, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
export function readFile(
    file: PathLike | number,
    encoding: BufferEncoding | string,
    callback: (err: NodeJS.ErrnoException, data: string) => void,
): void;
export function readFile(
    file: PathLike | number,
    options: { flag?: string | undefined } | { encoding: BufferEncoding | string; flag?: string | undefined },
    callback: (err: NodeJS.ErrnoException, data: Buffer) => void,
): void;
export function readFile(
    file: PathLike | number,
    options: { flag?: string | undefined } | { encoding: BufferEncoding | string; flag?: string | undefined },
): Promise<string>;
// tslint:disable-next-line:unified-signatures
export function readFile(file: PathLike | number, encoding: BufferEncoding | string): Promise<string>;
export function readFile(file: PathLike | number): Promise<Buffer>;

export function readdir(path: PathLike, callback: (err: NodeJS.ErrnoException, files: string[]) => void): void;
export function readdir(
    path: PathLike,
    options: 'buffer' | { encoding: 'buffer'; withFileTypes?: false | undefined },
): Promise<Buffer[]>;
export function readdir(
    path: PathLike,
    options?:
        | { encoding: BufferEncoding | string | null; withFileTypes?: false | undefined }
        | BufferEncoding
        | string
        | null,
): Promise<string[]>;
export function readdir(
    path: PathLike,
    options?: { encoding?: BufferEncoding | string | null | undefined; withFileTypes?: false | undefined },
): Promise<string[] | Buffer[]>;
export function readdir(
    path: PathLike,
    options: { encoding?: BufferEncoding | string | null | undefined; withFileTypes: true },
): Promise<fs.Dirent[]>;

export function readlink(path: PathLike, callback: (err: NodeJS.ErrnoException, linkString: string) => any): void;
export function readlink(path: PathLike): Promise<string>;

export function realpath(path: PathLike, callback: (err: NodeJS.ErrnoException, resolvedPath: string) => any): void;
export function realpath(
    path: PathLike,
    cache: { [path: string]: string },
    callback: (err: NodeJS.ErrnoException, resolvedPath: string) => any,
): void;
export function realpath(path: PathLike, cache?: { [path: string]: string }): Promise<string>;

/* tslint:disable:unified-signatures */
export namespace realpath {
    const native: {
        (path: PathLike, options: { encoding: 'buffer' } | 'buffer'): Promise<Buffer>;
        (
            path: PathLike,
            options: { encoding: BufferEncoding | string | null } | BufferEncoding | string | undefined | null,
        ): Promise<string>;
        (path: PathLike, options: { encoding: BufferEncoding | string | null } | string | undefined | null): Promise<
            string | Buffer
        >;
        (path: PathLike): Promise<string>;
    } & typeof fs.realpath.native;
}
/* tslint:enable:unified-signatures */

export function rename(oldPath: PathLike, newPath: PathLike, callback: (err: NodeJS.ErrnoException) => void): void;
export function rename(oldPath: PathLike, newPath: PathLike): Promise<void>;

/**
 * Asynchronously removes files and directories (modeled on the standard POSIX
 * `rm` utility).
 *
 * Only available in node >= v14.14.0
 */
export function rm(
    path: PathLike,
    options?: {
        force?: boolean | undefined;
        maxRetries?: number | undefined;
        recursive?: boolean | undefined;
        retryDelay?: number | undefined;
    },
): Promise<void>;

/**
 * Asynchronous rmdir - removes the directory specified in {path}
 *
 * @param callback No arguments other than a possible exception are given to the completion callback.
 */
export function rmdir(path: PathLike, callback: (err: NodeJS.ErrnoException) => void): void;
export function rmdir(path: PathLike, options?: fs.RmDirOptions): Promise<void>;

export function stat(path: PathLike, callback: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
export function stat(path: PathLike): Promise<Stats>;

export function symlink(
    target: PathLike,
    path: PathLike,
    type: SymlinkType | undefined,
    callback: (err: NodeJS.ErrnoException) => void,
): void;
export function symlink(target: PathLike, path: PathLike, callback: (err: NodeJS.ErrnoException) => void): void;
export function symlink(target: PathLike, path: PathLike, type?: SymlinkType): Promise<void>;

export function truncate(path: PathLike, callback: (err: NodeJS.ErrnoException) => void): void;
export function truncate(path: PathLike, len: number, callback: (err: NodeJS.ErrnoException) => void): void;
export function truncate(path: PathLike, len?: number): Promise<void>;

/**
 * Asynchronous unlink - deletes the file specified in {path}
 *
 * @param callback No arguments other than a possible exception are given to the completion callback.
 */
export function unlink(path: PathLike, callback: (err: NodeJS.ErrnoException) => void): void;
export function unlink(path: PathLike): Promise<void>;

export function utimes(
    path: PathLike,
    atime: number,
    mtime: number,
    callback: (err: NodeJS.ErrnoException) => void,
): void;
export function utimes(path: PathLike, atime: Date, mtime: Date, callback: (err: NodeJS.ErrnoException) => void): void;
export function utimes(path: PathLike, atime: number, mtime: number): Promise<void>;
export function utimes(path: PathLike, atime: Date, mtime: Date): Promise<void>;

export function write<TBuffer extends ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    offset: number,
    length: number,
    position: number | null,
    callback: (err: NodeJS.ErrnoException, written: number, buffer: TBuffer) => void,
): void;
export function write<TBuffer extends ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    offset: number,
    length: number,
    callback: (err: NodeJS.ErrnoException, written: number, buffer: TBuffer) => void,
): void;
export function write(
    fd: number,
    data: any,
    callback: (err: NodeJS.ErrnoException, written: number, str: string) => void,
): void;
export function write(
    fd: number,
    data: any,
    offset: number,
    callback: (err: NodeJS.ErrnoException, written: number, str: string) => void,
): void;
export function write(
    fd: number,
    data: any,
    offset: number,
    encoding: BufferEncoding | string,
    callback: (err: NodeJS.ErrnoException, written: number, str: string) => void,
): void;
export function write<TBuffer extends ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    offset?: number,
    length?: number,
    position?: number | null,
): Promise<{ bytesWritten: number; buffer: TBuffer }>;
export function write(
    fd: number,
    data: any,
    offset?: number,
    encoding?: BufferEncoding | string,
): Promise<{ bytesWritten: number; buffer: string }>;

export function writeFile(file: PathLike | number, data: any, callback: (err: NodeJS.ErrnoException) => void): void;
export function writeFile(
    file: PathLike | number,
    data: any,
    options?: WriteFileOptions | BufferEncoding | string,
): Promise<void>;
export function writeFile(
    file: PathLike | number,
    data: any,
    options: WriteFileOptions | BufferEncoding | string,
    callback: (err: NodeJS.ErrnoException) => void,
): void;

export function writev(
    fd: number,
    buffers: NodeJS.ArrayBufferView[],
    position: number,
    cb: (err: NodeJS.ErrnoException | null, bytesWritten: number, buffers: NodeJS.ArrayBufferView[]) => void,
): void;
export function writev(
    fd: number,
    buffers: NodeJS.ArrayBufferView[],
    cb: (err: NodeJS.ErrnoException | null, bytesWritten: number, buffers: NodeJS.ArrayBufferView[]) => void,
): void;
export function writev(fd: number, buffers: NodeJS.ArrayBufferView[], position?: number): Promise<WritevResult>;

/**
 * Asynchronous mkdtemp - Creates a unique temporary directory. Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
 *
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

export type CopyFilterSync = (src: string, dest: string) => boolean;
export type CopyFilterAsync = (src: string, dest: string) => Promise<boolean>;

export type SymlinkType = 'dir' | 'file' | 'junction';

export type Mode = string | number;

export type ArrayBufferView = NodeJS.TypedArray | DataView;

export interface CopyOptions {
    dereference?: boolean | undefined;
    overwrite?: boolean | undefined;
    preserveTimestamps?: boolean | undefined;
    errorOnExist?: boolean | undefined;
    filter?: CopyFilterSync | CopyFilterAsync | undefined;
    recursive?: boolean | undefined;
}

export interface CopyOptionsSync extends CopyOptions {
    filter?: CopyFilterSync | undefined;
}

export interface EnsureOptions {
    mode?: number | undefined;
}

export interface MoveOptions {
    overwrite?: boolean | undefined;
    limit?: number | undefined;
}

export interface ReadOptions {
    throws?: boolean | undefined;
    fs?: object | undefined;
    reviver?: any;
    encoding?: BufferEncoding | string | undefined;
    flag?: string | undefined;
}

export interface WriteFileOptions {
    encoding?: BufferEncoding | string | null | undefined;
    flag?: string | undefined;
    mode?: number | undefined;
}

export interface WriteOptions extends WriteFileOptions {
    fs?: object | undefined;
    replacer?: any;
    spaces?: number | string | undefined;
    EOL?: string | undefined;
}

export interface WritevResult {
    bytesWritten: number;
    buffers: ArrayBufferView[];
}
