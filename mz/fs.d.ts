// Type definitions for mz
// Project: https://github.com/normalize/mz
// Definitions by: Thomas Hickman <https://github.com/ThomasHickman>, Ron Buckton <https://github.com/rbuckton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Modified from the node.js definitions https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/node/node.d.ts

/// <reference types="node" />

import * as fs from "fs";
export * from "fs";

/**
 * Asynchronous `rename(2)`.
 */
export function rename(oldPath: string, newPath: string, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronous `rename(2)`.
 */
export function rename(oldPath: string, newPath: string): Promise<void>;

/**
 * Asynchronous `truncate(2)`.
 *
 * If the file was larger than `len` bytes, only the first `len` bytes will be retained in the file.
 */
export function truncate(path: string | Buffer, len: number, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronous `truncate(2)`.
 *
 * If the file was larger than `len` bytes, only the first `len` bytes will be retained in the file.
 */
export function truncate(path: string | Buffer, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronous `truncate(2)`.
 *
 * If the file was larger than `len` bytes, only the first `len` bytes will be retained in the file.
 */
export function truncate(path: string | Buffer, len?: number): Promise<void>;

/**
 * Asynchronous `ftruncate(2)`.
 *
 * If the file referred to by the file descriptor was larger than `len` bytes, only the first `len`
 * bytes will be retained in the file.
 */
export function ftruncate(fd: number, len: number, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronous `ftruncate(2)`.
 */
export function ftruncate(fd: number, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronous `ftruncate(2)`.
 *
 * If the file referred to by the file descriptor was larger than `len` bytes, only the first `len`
 * bytes will be retained in the file.
 */
export function ftruncate(fd: number, len?: number): Promise<void>;

/**
 * Asynchronous `chown(2)`.
 */
export function chown(path: string | Buffer, uid: number, gid: number, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronous `chown(2)`.
 */
export function chown(path: string | Buffer, uid: number, gid: number): Promise<void>;

/**
 * Asynchronous `fchown(2)`.
 */
export function fchown(fd: number, uid: number, gid: number, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronous `fchown(2)`.
 */
export function fchown(fd: number, uid: number, gid: number): Promise<void>;

/**
 * (Deprecated) Asynchronous `lchown(2)`.
 */
export function lchown(path: string | Buffer, uid: number, gid: number, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * (Deprecated) Asynchronous `lchown(2)`.
 */
export function lchown(path: string | Buffer, uid: number, gid: number): Promise<void>;

/**
 * Asynchronous `chmod(2)`.
 */
export function chmod(path: string | Buffer, mode: string | number, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronous `chmod(2)`.
 */
export function chmod(path: string | Buffer, mode: string | number): Promise<void>;

/**
 * Asynchronous `fchmod(2)`.
 */
export function fchmod(fd: number, mode: string | number, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronous `fchmod(2)`.
 */
export function fchmod(fd: number, mode: string | number): Promise<void>;

/**
 * (Deprecated) Asynchronous `lchmod(2)`.
 *
 * NOTE: Only available on Mac OS X.
 */
export function lchmod(path: string | Buffer, mode: string | number, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * (Deprecated) Asynchronous `lchmod(2)`.
 *
 * NOTE: Only available on Mac OS X.
 */
export function lchmod(path: string | Buffer, mode: string | number): Promise<void>;

/**
 * Asynchronous `stat(2)`.
 */
export function stat(path: string | Buffer, callback: (err: NodeJS.ErrnoException, stats: fs.Stats) => any): void;

/**
 * Asynchronous `stat(2)`.
 */
export function stat(path: string | Buffer): Promise<fs.Stats>;

/**
 * Asynchronous `lstat(2)`.
 *
 * `lstat()` is identical to `stat()`, except that if path is a symbolic link, then the link itself
 * is stat-ed, not the file that it refers to.
 */
export function lstat(path: string | Buffer, callback?: (err: NodeJS.ErrnoException, stats: fs.Stats) => any): void;

/**
 * Asynchronous `lstat(2)`.
 *
 * `lstat()` is identical to `stat()`, except that if path is a symbolic link, then the link itself
 * is stat-ed, not the file that it refers to.
 */
export function lstat(path: string | Buffer): Promise<fs.Stats>;

/**
 * Asynchronous `fstat(2)`.
 */
export function fstat(fd: number, callback: (err: NodeJS.ErrnoException, stats: fs.Stats) => any): void;

/**
 * Asynchronous `fstat(2)`.
 */
export function fstat(fd: number): Promise<fs.Stats>;

/**
 * Asynchronous `link(2)`.
 */
export function link(srcpath: string | Buffer, dstpath: string | Buffer, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronous `link(2)`.
 */
export function link(srcpath: string | Buffer, dstpath: string | Buffer): Promise<void>;

/**
 * Asynchronous `symlink(2)`.
 */
export function symlink(srcpath: string | Buffer, dstpath: string | Buffer, type: string, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronous `symlink(2)`.
 */
export function symlink(srcpath: string | Buffer, dstpath: string | Buffer, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronous `symlink(2)`.
 */
export function symlink(srcpath: string | Buffer, dstpath: string | Buffer, type?: string): Promise<void>;

/**
 * Asynchronous `readlink(2)`.
 */
export function readlink(path: string | Buffer, callback: (err: NodeJS.ErrnoException, linkString: string) => any): void;

/**
 * Asynchronous `readlink(2)`.
 */
export function readlink(path: string | Buffer): Promise<string>;

/**
 * Asynchronous `realpath(3)`.
 */
export function realpath(path: string | Buffer, callback: (err: NodeJS.ErrnoException, resolvedPath: string) => any): void;

/**
 * Asynchronous `realpath(3)`.
 */
export function realpath(path: string | Buffer): Promise<string>;

/**
 * Asynchronous `unlink(2)`.
 *
 * Deletes the file specified in `path`.
 *
 * @param path The path to a file.
 */
export function unlink(path: string | Buffer, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronous `unlink(2)`.
 *
 * Deletes the file specified in `path`.
 *
 * @param path The path to a file.
 */
export function unlink(path: string | Buffer): Promise<void>;

/**
 * Asynchronous `rmdir(2)`
 *
 * Removes the directory specified in `path`.
 *
 * @param path The path to the directory.
 */
export function rmdir(path: string | Buffer, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronous `rmdir(2)`
 *
 * Removes the directory specified in `path`.
 *
 * @param path The path to the directory.
 */
export function rmdir(path: string | Buffer): Promise<void>;

/**
 * Asynchronous `mkdir(2)`.
 *
 * Creates the directory specified in `path`.
 *
 * @param path The path to the directory.
 * @param mode The mode for the directory (default: `0777`).
 */
export function mkdir(path: string | Buffer, mode: string | number, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronous `mkdir(2)`.
 *
 * Creates the directory specified in `path`.
 *
 * @param path The path to the directory.
 * @param mode The mode for the directory (default: `0777`).
 */
export function mkdir(path: string | Buffer, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronous `mkdir(2)`.
 *
 * Creates the directory specified in `path`.
 *
 * @param path The path to the directory.
 * @param mode The mode for the directory (default: `0777`).
 */
export function mkdir(path: string | Buffer, mode?: string | number): Promise<void>;

/**
 * Asynchronous `readdir(3)`.
 *
 * Reads the contents of a directory.
 */
export function readdir(path: string | Buffer, callback: (err: NodeJS.ErrnoException, files: string[]) => void): void;

/**
 * Asynchronous `readdir(3)`.
 *
 * Reads the contents of a directory.
 */
export function readdir(path: string | Buffer): Promise<string[]>;

/**
 * Asynchronous `close(2)`.
 */
export function close(fd: number, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronous `close(2)`.
 */
export function close(fd: number): Promise<void>;

/**
 * Asynchronous `open(2)`.
 */
export function open(path: string | Buffer, flags: string | number, mode: number, callback: (err: NodeJS.ErrnoException, fd: number) => void): void;

/**
 * Asynchronous `open(2)`.
 */
export function open(path: string | Buffer, flags: string | number, callback: (err: NodeJS.ErrnoException, fd: number) => void): void;

/**
 * Asynchronous `open(2)`.
 */
export function open(path: string | Buffer, flags: string | number, mode?: number): Promise<number>;

/**
 * Change the file timestamps of the file referenced by the supplied path.
 */
export function utimes(path: string | Buffer, atime: number | Date, mtime: number | Date, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Change the file timestamps of the file referenced by the supplied path.
 */
export function utimes(path: string | Buffer, atime: number | Date, mtime: number | Date): Promise<void>;

/**
 * Change the file timestamps of a file referenced by the supplied file descriptor.
 */
export function futimes(fd: number, atime: number | Date, mtime: number | Date, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Change the file timestamps of a file referenced by the supplied file descriptor.
 */
export function futimes(fd: number, atime: number | Date, mtime: number | Date): Promise<void>;

/**
 * Asynchronous `fsync(2)`.
 */
export function fsync(fd: number, callback: (err?: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronous `fsync(2)`.
 */
export function fsync(fd: number): Promise<void>;

/**
 * Write `data` to the file specified by `fd`.
 */
export function write(fd: number, data: any, position: number, encoding: string, callback: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;

/**
 * Write `data` to the file specified by `fd`.
 */
export function write(fd: number, data: any, position: number, callback: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;

/**
 * Write `data` to the file specified by `fd`.
 */
export function write(fd: number, data: any, callback: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;

/**
 * Write `data` to the file specified by `fd`.
 */
export function write(fd: number, data: string, position?: number, encoding?: string): Promise<[number, string]>;

/**
 * Write `buffer` to the file specified by `fd`.
 */
export function write(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void): void;

/**
 * Write `buffer` to the file specified by `fd`.
 */
export function write(fd: number, buffer: Buffer, offset: number, length: number, callback: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void): void;

/**
 * Write `buffer` to the file specified by `fd`.
 */
export function write(fd: number, buffer: Buffer, offset: number, length: number, position?: number): Promise<[number, Buffer]>;

/**
 * Read data from the file specified by `fd`.
 */
export function read(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback: (err: NodeJS.ErrnoException, bytesRead: number, buffer: Buffer) => void): void;

/**
 * Read data from the file specified by `fd`.
 */
export function read(fd: number, buffer: Buffer, offset: number, length: number, position: number): Promise<[number, Buffer]>;

/**
 * Asynchronously reads the entire contents of a file.
 *
 * @param file The filename or descriptor
 * @param options The encoding for the result, or an object containing options.
 */
export function readFile(file: string | number | Buffer, options: { encoding?: "buffer" | null; flag?: string; } | "buffer" | undefined | null, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;

/**
 * Asynchronously reads the entire contents of a file.
 *
 * @param file The filename or descriptor
 * @param options The encoding for the result, or an object containing options.
 */
export function readFile(file: string | number | Buffer, options: { encoding: string; flag?: string; } | string, callback: (err: NodeJS.ErrnoException, data: string) => void): void;

/**
 * Asynchronously reads the entire contents of a file.
 *
 * @param file The filename or descriptor
 */
export function readFile(file: string | number | Buffer, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;

/**
 * Asynchronously reads the entire contents of a file.
 *
 * @param file The filename or descriptor
 * @param options The encoding for the result, or an object containing options.
 */
export function readFile(file: string | number | Buffer, options?: { encoding?: "buffer" | null; flag?: string; } | "buffer" | null): Promise<Buffer>;

/**
 * Asynchronously reads the entire contents of a file.
 *
 * @param file The filename or descriptor
 * @param options The encoding for the result, or an object containing options.
 */
export function readFile(file: string | number | Buffer, options: { encoding: string; flag?: string; } | string): Promise<string>;

/**
 * Asynchronously writes data to a file, replacing the file if it already exists.
 */
export function writeFile(filename: string | number | Buffer, data: string | Buffer, options: { encoding?: string | null; mode?: string | number; flag?: string; } | string | undefined | null, callback: (err: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronously writes data to a file, replacing the file if it already exists.
 */
export function writeFile(filename: string | number | Buffer, data: string | Buffer, callback: (err: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronously writes data to a file, replacing the file if it already exists.
 */
export function writeFile(file: string | number | Buffer, data: string | Buffer, options?: { encoding?: string | null; mode?: string | number; flag?: string; } | string | null): Promise<void>;

/**
 * Asynchronously append data to a file, creating the file if it does not yet exist.
 *
 * @param file The path to the file or a file descriptor.
 * @param data The data to append to the file.
 * @param options The encoding for `data`, or an object with additional options.
 */
export function appendFile(file: string | number | Buffer, data: string | Buffer, options: { encoding?: string | null; mode?: string | number; flag?: string; } | string | undefined | null, callback: (err: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronously append data to a file, creating the file if it does not yet exist.
 *
 * @param file The path to the file or a file descriptor.
 * @param data The data to append to the file.
 */
export function appendFile(file: string | number | Buffer, data: string | Buffer, callback: (err: NodeJS.ErrnoException) => void): void;

/**
 * Asynchronously append data to a file, creating the file if it does not yet exist.
 *
 * @param file The path to the file or a file descriptor.
 * @param data The data to append to the file.
 * @param options The encoding for `data`, or an object with additional options.
 */
export function appendFile(file: string | number | Buffer, data: string | Buffer, options?: { encoding?: string | null; mode?: number | string; flag?: string; } | string | null): Promise<void>;

/**
 * Test whether or not the given path exists by checking with the file system.
 *
 * @param path The path to access.
 */
export function exists(path: string | Buffer, callback: (err: NodeJS.ErrnoException, exists: boolean) => void): void;

/**
 * Test whether or not the given path exists by checking with the file system.
 *
 * @param path The path to access.
 */
export function exists(path: string): Promise<boolean>;

/**
 * Tests a user's permissions for the file specified by `path`.
 *
 * @param path The path to access.
 * @param mode An optional integer that specifies the accessibility checks to be performed.
 */
export function access(path: string | Buffer, mode: number, callback: (err: NodeJS.ErrnoException) => void): void;

/**
 * Tests a user's permissions for the file specified by `path`.
 *
 * @param path The path to access.
 */
export function access(path: string | Buffer, callback: (err: NodeJS.ErrnoException) => void): void;

/**
 * Tests a user's permissions for the file specified by `path`.
 *
 * @param path The path to access.
 * @param mode An optional integer that specifies the accessibility checks to be performed.
 */
export function access(path: string, mode?: number): Promise<void>;