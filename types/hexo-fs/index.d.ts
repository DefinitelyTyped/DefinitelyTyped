// Type definitions for hexo-fs 0.2
// Project: https://github.com/hexojs/hexo-fs
// Definitions by: Sega Yuu <https://github.com/segayuu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

import Promise = require('bluebird');
import {
    PathLike,
    Stats,
    ReadStream,
    WriteStream,
    // chmod,
    chmodSync,
    // fchmod,
    fchmodSync,
    // lchmod,
    lchmodSync,
    // chown,
    chownSync,
    // fchown,
    fchownSync,
    // lchown,
    lchownSync,
    // close,
    closeSync,
    createReadStream,
    createWriteStream,
    // fsync,
    fsyncSync,
    // link,
    linkSync,
    // mkdir,
    mkdirSync,
    // open,
    openSync,
    // symlink,
    symlinkSync,
    // read,
    readSync,
    // readdir,
    readdirSync,
    // readlink,
    readlinkSync,
    // realpath,
    realpathSync,
    // rename,
    renameSync,
    // stat,
    statSync,
    // fstat,
    fstatSync,
    // lstat,
    lstatSync,
    // truncate,
    truncateSync,
    // ftruncate,
    ftruncateSync,
    // unlink,
    unlinkSync,
    // utimes,
    utimesSync,
    // futimes,
    futimesSync,
    watchFile,
    unwatchFile,
    // write,
    writeSync
    } from 'graceful-fs';

export interface DirectoryOptions {
    ignoreHidden?: boolean;
    ignorePattern?: RegExp;
}

export interface AppendFileOptions {
    encoding?: string | null;
    mode?: string | number;
    flag?: string;
}

// access
export let F_OK: number | undefined;
export let R_OK: number | undefined;
export let W_OK: number | undefined;
export let X_OK: number | undefined;

export let access: ((path: PathLike, mode?: number) => Promise<void>) | undefined; // promisify
export let accessSync: ((path: PathLike, mode?: number) => void) | undefined; // promisify

// appendFile
export function appendFile(path: string, data: any, callback?: (err: any) => void): Promise<void>;
export function appendFile(path: string, data: any, options: string | AppendFileOptions, callback?: (err: any) => void): Promise<void>;
export function appendFileSync(path: string, data: any, options?: string | AppendFileOptions): void;

// chmod
export function chmod(path: PathLike, mode: string | number): Promise<void>; // promisify
export function fchmod(fd: number, mode: string | number): Promise<void>; // promisify
export function lchmod(path: PathLike, mode: string | number): Promise<void>; // promisify
export { chmodSync, fchmodSync, lchmodSync };

// chown
export function chown(path: PathLike, uid: number, gid: number): Promise<void>; // promisify
export function fchown(fd: number, uid: number, gid: number): Promise<void>; // promisify
export function lchown(path: PathLike, uid: number, gid: number): Promise<void>; // promisify
export { chownSync, fchownSync, lchownSync };

// close
export function close(fd: number): Promise<void>; // promisify
export { closeSync };

// copy
export function copyDir(src: string, dest: string, callback?: (err: any, value?: string[]) => void): Promise<string[]>;
export function copyDir(src: string, dest: string, options?: DirectoryOptions, callback?: (err: any, value?: string[]) => void): Promise<string[]>;
export function copyFile(src: PathLike, dest: string, callback?: (err: any) => void): Promise<void>;

// createStream
export { createReadStream, createWriteStream };

// emptyDir
export function emptyDir(path: string, callback?: (err: any, value?: string | string[]) => void): Promise<string | string[]>;
export function emptyDir(
    path: string,
    options?: DirectoryOptions & { exclude?: string[] },
    callback?: (err: any, value?: string | string[]) => void
): Promise<string | string[]>;
export function emptyDirSync(path: string, options?: DirectoryOptions & { exclude?: string[] }, parent?: string): string | string[];

// ensurePath
export function ensurePath(path: string, callback?: (err: any, value?: string) => void): Promise<string>;
export function ensurePathSync(path: string): string;

// ensureWriteStream
export function ensureWriteStream(path: string, callback?: (err: any, value?: WriteStream) => void): Promise<WriteStream>;
export function ensureWriteStream(
    path: string,
    options?: string | {
        flags?: string;
        defaultEncoding?: string;
        fd?: number;
        mode?: number;
        autoClose?: boolean;
        start?: number;
    },
    callback?: (err: any, value?: WriteStream) => void
): Promise<WriteStream>;
export function ensureWriteStreamSync(path: string, options?: string | {
    flags?: string;
    defaultEncoding?: string;
    fd?: number;
    mode?: number;
    autoClose?: boolean;
    start?: number;
}): WriteStream;

// exists
export function exists(path: PathLike, callback?: (exist: boolean) => void): Promise<boolean>;
export function existsSync(path: PathLike): boolean;

// fsync
export function fsync(fd: number): Promise<void>; // promisify
export { fsyncSync };

// link
export function link(existingPath: PathLike, newPath: PathLike): Promise<void>; // promisify
export { linkSync };

// listDir
export function listDir(path: string, callback?: (err: any, value?: string[]) => void): Promise<string[]>;
export function listDir(path: string, options?: DirectoryOptions, callback?: (err: any, value?: string[]) => void): Promise<string[]>;
export function listDirSync(path: string, options?: DirectoryOptions, parent?: string): string | string[];

// mkdir
export function mkdir(path: PathLike, mode?: string | number): Promise<void>; // promisify
export { mkdirSync };

// mkdirs
export function mkdirs(path: PathLike, callback?: (err: any) => void): Promise<void>;
export function mkdirsSync(path: string): void;

// open
export function open(path: PathLike, flags: string | number, mode?: string | number | null): Promise<number>; // promisify
export { openSync };

// symlink
export function symlink(target: PathLike, path: PathLike, type?: string | null): Promise<void>; // promisify
export { symlinkSync };

// read
export function read<TBuffer extends Buffer | Uint8Array>(
    fd: number,
    buffer: TBuffer,
    offset: number,
    length: number,
    position: number | null
): Promise<{ bytesRead: number, buffer: TBuffer }>; // promisify
export { readSync };

// readdir
export function readdir(
    path: PathLike,
    options?: { encoding: BufferEncoding; } | 'ascii' | 'utf8' | 'utf16le' | 'ucs2' | 'base64' | 'latin1' | 'binary' | 'hex'
): Promise<string[]>; // promisify
export { readdirSync };

// readFile
export function readFile(path: PathLike | number, callback?: (err: any, value?: string) => void): Promise<string>;
export function readFile(
    path: PathLike | number,
    options?: { encoding?: string; flag?: string; escape?: boolean; },
    callback?: (err: any, value?: string) => void
): Promise<string>;
export function readFileSync(path: PathLike | number, options?: { encoding?: string; flag?: string; escape?: boolean; }): string;

// readlink
export function readlink(path: PathLike, options?: { encoding?: BufferEncoding | null } | BufferEncoding | null): Promise<string>; // promisify
export function readlink(path: PathLike, options: { encoding: 'buffer' } | 'buffer'): Promise<Buffer>; // promisify
export function readlink(path: PathLike, options?: { encoding?: string | null } | string | null): Promise<string | Buffer>; // promisify
export { readlinkSync };

// realpath
export function realpath(path: PathLike, options?: { encoding?: BufferEncoding | null } | BufferEncoding | null): Promise<string>; // promisify
export function realpath(path: PathLike, options: { encoding: 'buffer' } | 'buffer'): Promise<Buffer>; // promisify
export function realpath(path: PathLike, options?: { encoding?: string | null } | string | null): Promise<string | Buffer>; // promisify
export { realpathSync };

// rename
export function rename(oldPath: PathLike, newPath: PathLike): Promise<void>; // promisify
export { renameSync };

// rmdir
export function rmdir(path: string, callback?: (err: any) => void): Promise<void>;
export function rmdirSync(path: string): void;

// stat
export function stat(path: PathLike): Promise<Stats>; // promisify
export function fstat(fd: number): Promise<Stats>; // promisify
export function lstat(path: PathLike): Promise<Stats>; // promisify
export { statSync, fstatSync, lstatSync };

// truncate
export function truncate(path: PathLike, len?: number | null): Promise<void>; // promisify
export function ftruncate(fd: number, len?: number | null): Promise<void>; // promisify
export { truncateSync, ftruncateSync };

// unlink
export function unlink(path: PathLike): Promise<void>; // promisify
export { unlinkSync };

// utimes
export function utimes(path: PathLike, atime: string | number | Date, mtime: string | number | Date): Promise<void>; // promisify
export function futimes(fd: number, atime: string | number | Date, mtime: string | number | Date): Promise<void>; // promisify
export { utimesSync, futimesSync };

// watch
import { FSWatcher, WatchOptions } from 'chokidar';
export function watch(path: string | string[], options?: WatchOptions, callback?: (err: any, value?: FSWatcher) => void): Promise<FSWatcher>;
export { watchFile, unwatchFile };

// write
export function write<TBuffer extends Buffer | Uint8Array>(
    fd: number,
    buffer?: TBuffer,
    offset?: number,
    length?: number,
    position?: number | null
): Promise<{ bytesWritten: number, buffer: TBuffer }>; // promisify
export function write(
    fd: number,
    string: any,
    position?: number | null,
    encoding?: string | null
): Promise<{ bytesWritten: number, buffer: string }>; // promisify
export { writeSync };

// writeFile
export function writeFile(path: string, data: any, callback?: (err: any) => void): Promise<void>;
export function writeFile(
    path: string,
    data: any,
    options?: string | { encoding?: string | null; mode?: string | number; flag?: string },
    callback?: (err: any) => void
): Promise<void>;
export function writeFileSync(path: string, data: any, options?: string | { encoding?: string | null; mode?: string | number; flag?: string }): void;

// Static classes
export let Stats: Stats;
export let ReadStream: ReadStream;
export let WriteStream: WriteStream;

// util
export function escapeEOL(str: string): string;
export function escapeBOM(str: string): string;
