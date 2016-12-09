// Type definitions for fs-mock 1.1.3
// Project: https://github.com/sakren/node-fs-mock
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


import stream = require("stream");
import events = require("events");
import fs = require("fs");

declare namespace FS {
    export interface Opts {
        windows?: boolean;
        drives?: string[];
        root?: string;
    }
}

declare class FS {
    constructor(content: any, opts?: FS.Opts)

    rename(oldPath: string, newPath: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    renameSync(oldPath: string, newPath: string): void;
    truncate(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    truncate(path: string, len: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    truncateSync(path: string, len?: number): void;
    ftruncate(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    ftruncate(fd: number, len: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    ftruncateSync(fd: number, len?: number): void;
    chown(path: string, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    chownSync(path: string, uid: number, gid: number): void;
    fchown(fd: number, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    fchownSync(fd: number, uid: number, gid: number): void;
    lchown(path: string, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    lchownSync(path: string, uid: number, gid: number): void;
    chmod(path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    chmod(path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    chmodSync(path: string, mode: number): void;
    chmodSync(path: string, mode: string): void;
    fchmod(fd: number, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    fchmod(fd: number, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    fchmodSync(fd: number, mode: number): void;
    fchmodSync(fd: number, mode: string): void;
    lchmod(path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    lchmod(path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    lchmodSync(path: string, mode: number): void;
    lchmodSync(path: string, mode: string): void;
    stat(path: string, callback?: (err: NodeJS.ErrnoException, stats: fs.Stats) => any): void;
    lstat(path: string, callback?: (err: NodeJS.ErrnoException, stats: fs.Stats) => any): void;
    fstat(fd: number, callback?: (err: NodeJS.ErrnoException, stats: fs.Stats) => any): void;
    statSync(path: string): fs.Stats;
    lstatSync(path: string): fs.Stats;
    fstatSync(fd: number): fs.Stats;
    link(srcpath: string, dstpath: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    linkSync(srcpath: string, dstpath: string): void;
    symlink(srcpath: string, dstpath: string, type?: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    symlinkSync(srcpath: string, dstpath: string, type?: string): void;
    readlink(path: string, callback?: (err: NodeJS.ErrnoException, linkString: string) => any): void;
    readlinkSync(path: string): string;
    realpath(path: string, callback?: (err: NodeJS.ErrnoException, resolvedPath: string) => any): void;
    realpath(path: string, cache: { [path: string]: string }, callback: (err: NodeJS.ErrnoException, resolvedPath: string) => any): void;
    realpathSync(path: string, cache?: { [path: string]: string }): string;
    unlink(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    unlinkSync(path: string): void;
    rmdir(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    rmdirSync(path: string): void;
    mkdir(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    mkdir(path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    mkdir(path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    mkdirSync(path: string, mode?: number): void;
    mkdirSync(path: string, mode?: string): void;
    readdir(path: string, callback?: (err: NodeJS.ErrnoException, files: string[]) => void): void;
    readdirSync(path: string): string[];
    close(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    closeSync(fd: number): void;
    open(path: string, flags: string, callback?: (err: NodeJS.ErrnoException, fd: number) => any): void;
    open(path: string, flags: string, mode: number, callback?: (err: NodeJS.ErrnoException, fd: number) => any): void;
    open(path: string, flags: string, mode: string, callback?: (err: NodeJS.ErrnoException, fd: number) => any): void;
    openSync(path: string, flags: string, mode?: number): number;
    openSync(path: string, flags: string, mode?: string): number;
    utimes(path: string, atime: number, mtime: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    utimes(path: string, atime: Date, mtime: Date, callback?: (err?: NodeJS.ErrnoException) => void): void;
    utimesSync(path: string, atime: number, mtime: number): void;
    utimesSync(path: string, atime: Date, mtime: Date): void;
    futimes(fd: number, atime: number, mtime: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    futimes(fd: number, atime: Date, mtime: Date, callback?: (err?: NodeJS.ErrnoException) => void): void;
    futimesSync(fd: number, atime: number, mtime: number): void;
    futimesSync(fd: number, atime: Date, mtime: Date): void;
    fsync(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    fsyncSync(fd: number): void;
    write(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void): void;
    writeSync(fd: number, buffer: Buffer, offset: number, length: number, position: number): number;
    read(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: NodeJS.ErrnoException, bytesRead: number, buffer: Buffer) => void): void;
    readSync(fd: number, buffer: Buffer, offset: number, length: number, position: number): number;
    readFile(filename: string, encoding: string, callback: (err: NodeJS.ErrnoException, data: string) => void): void;
    readFile(filename: string, options: { encoding: string; flag?: string; }, callback: (err: NodeJS.ErrnoException, data: string) => void): void;
    readFile(filename: string, options: { flag?: string; }, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
    readFile(filename: string, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
    readFileSync(filename: string, encoding: string): string;
    readFileSync(filename: string, options: { encoding: string; flag?: string; }): string;
    readFileSync(filename: string, options?: { flag?: string; }): Buffer;
    writeFile(filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void): void;
    writeFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    writeFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
    writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
    appendFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    appendFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    appendFile(filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void): void;
    appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
    appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
    watchFile(filename: string, listener: (curr: fs.Stats, prev: fs.Stats) => void): void;
    watchFile(filename: string, options: { persistent?: boolean; interval?: number; }, listener: (curr: fs.Stats, prev: fs.Stats) => void): void;
    unwatchFile(filename: string, listener?: (curr: fs.Stats, prev: fs.Stats) => void): void;
    watch(filename: string, listener?: (event: string, filename: string) => any): fs.FSWatcher;
    watch(filename: string, options: { persistent?: boolean; }, listener?: (event: string, filename: string) => any): fs.FSWatcher;
    exists(path: string, callback?: (exists: boolean) => void): void;
    existsSync(path: string): boolean;
    createReadStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        fd?: string;
        mode?: number;
        bufferSize?: number;
    }): fs.ReadStream;
    createReadStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        fd?: string;
        mode?: string;
        bufferSize?: number;
    }): fs.ReadStream;
    createWriteStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        string?: string;
    }): fs.WriteStream;
}

export = FS;
