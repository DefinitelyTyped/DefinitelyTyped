// Type definitions for promise-fs 2.1
// Project: https://github.com/octet-stream/promise-fs#readme
// Definitions by: Daniel Cassidy <https://github.com/djcsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { PathLike, WriteFileOptions, RmDirAsyncOptions, MakeDirectoryOptions, Dirent, Stats } from "fs";

export * from "fs";

/**
 * Asynchronously tests a user's permissions for the file specified by path.
 * @param path A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 */
export function access(path: PathLike, mode?: number): Promise<void>;

/**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options An object that may contain an optional flag.
 * If a flag is not provided, it defaults to `'r'`.
 */
export function readFile(path: PathLike | number, options?: { encoding?: null, flag?: string; } | null): Promise<Buffer>;

/**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options Either the encoding for the result, or an object that contains the encoding and an optional flag.
 * If a flag is not provided, it defaults to `'r'`.
 */
export function readFile(path: PathLike | number, options: { encoding: string; flag?: string; } | string): Promise<string>;

/**
 * Asynchronously reads the entire contents of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options Either the encoding for the result, or an object that contains the encoding and an optional flag.
 * If a flag is not provided, it defaults to `'r'`.
 */
export function readFile(path: PathLike | number, options?: { encoding?: string | null; flag?: string; } | string | null): Promise<string | Buffer>;

/**
 * Asynchronously writes data to a file, replacing the file if it already exists.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param data The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
 * @param options Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag.
 * If `encoding` is not supplied, the default of `'utf8'` is used.
 * If `mode` is not supplied, the default of `0o666` is used.
 * If `mode` is a string, it is parsed as an octal integer.
 * If `flag` is not supplied, the default of `'w'` is used.
 */
export function writeFile(path: PathLike | number, data: any, options?: WriteFileOptions): Promise<void>;

/**
 * Asynchronously copies src to dest. By default, dest is overwritten if it already exists.
 * No arguments other than a possible exception are given to the callback function.
 * Node.js makes no guarantees about the atomicity of the copy operation.
 * If an error occurs after the destination file has been opened for writing, Node.js will attempt
 * to remove the destination.
 * @param src A path to the source file.
 * @param dest A path to the destination file.
 * @param flags An optional integer that specifies the behavior of the copy operation.
 * The only supported flag is fs.constants.COPYFILE_EXCL,
 * which causes the copy operation to fail if dest already exists.
 */
export function copyFile(src: PathLike, dst: PathLike, flags?: number): Promise<void>;

/**
 * Asynchronous close(2) - close a file descriptor.
 * @param fd A file descriptor.
 */
export function close(fd: number): Promise<void>;

/**
 * Asynchronous open(2) - open and possibly create a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer. If not supplied, defaults to `0o666`.
 */
export function open(path: PathLike, flags: string | number, mode?: string | number | null): Promise<number>;

/**
 * @param fd A file descriptor.
 * @param buffer The buffer that the data will be written to.
 * @param offset The offset in the buffer at which to start writing.
 * @param length The number of bytes to read.
 * @param position The offset from the beginning of the file from which data should be read. If `null`, data will be read from the current position.
 */
export function read<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    offset: number,
    length: number,
    position: number | null
): Promise<{ bytesRead: number, buffer: TBuffer }>;

/**
 * Asynchronously writes `buffer` to the file referenced by the supplied file descriptor.
 * @param fd A file descriptor.
 * @param offset The part of the buffer to be written. If not supplied, defaults to `0`.
 * @param length The number of bytes to write. If not supplied, defaults to `buffer.length - offset`.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 */
export function write<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    buffer?: TBuffer,
    offset?: number,
    length?: number,
    position?: number | null,
): Promise<{ bytesWritten: number, buffer: TBuffer }>;

/**
 * Asynchronously writes `string` to the file referenced by the supplied file descriptor.
 * @param fd A file descriptor.
 * @param string A string to write. If something other than a string is supplied it will be coerced to a string.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 * @param encoding The expected string encoding.
 */
export function write(fd: number, string: any, position?: number | null, encoding?: string | null): Promise<{ bytesWritten: number, buffer: string }>;

/**
 * Asynchronous rename(2) - Change the name or location of a file or directory.
 * @param oldPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 * @param newPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 */
export function rename(oldPath: PathLike, newPath: PathLike): Promise<void>;

/**
 * Asynchronous rmdir(2) - delete a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function rmdir(path: PathLike, options?: RmDirAsyncOptions): Promise<void>;

/**
 * Asynchronous mkdir(2) - create a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options Either the file mode, or an object optionally specifying the file mode and whether parent folders
 * should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`.
 */
export function mkdir(path: PathLike, options?: number | string | MakeDirectoryOptions | null): Promise<void>;

/**
 * Asynchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function readdir(path: PathLike, options?: { encoding: BufferEncoding | null; withFileTypes?: false } | BufferEncoding | null): Promise<string[]>;

/**
 * Asynchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function readdir(path: PathLike, options: "buffer" | { encoding: "buffer"; withFileTypes?: false }): Promise<Buffer[]>;

/**
 * Asynchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function readdir(path: PathLike, options?: { encoding?: string | null; withFileTypes?: false } | string | null): Promise<string[] | Buffer[]>;

/**
 * Asynchronous readdir(3) - read a directory.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options If called with `withFileTypes: true` the result data will be an array of Dirent
 */
export function readdir(path: PathLike, options: { encoding?: string | null; withFileTypes: true }): Promise<Dirent[]>;

/**
 * Asynchronous stat(2) - Get file status.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function stat(path: PathLike): Promise<Stats>;

/**
 * Asynchronous lstat(2) - Get file status. Does not dereference symbolic links.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function lstat(path: PathLike): Promise<Stats>;

/**
 * Asynchronous fstat(2) - Get file status.
 * @param fd A file descriptor.
 */
export function fstat(fd: number): Promise<Stats>;

/**
 * Asynchronously append data to a file, creating the file if it does not exist.
 * @param file A path to a file. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param data The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
 * @param options Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag.
 * If `encoding` is not supplied, the default of `'utf8'` is used.
 * If `mode` is not supplied, the default of `0o666` is used.
 * If `mode` is a string, it is parsed as an octal integer.
 * If `flag` is not supplied, the default of `'a'` is used.
 */
export function appendFile(file: PathLike | number, data: any, options?: WriteFileOptions): Promise<void>;

/**
 * Asynchronous realpath(3) - return the canonicalized absolute pathname.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function realpath(path: PathLike, options?: { encoding?: BufferEncoding | null } | BufferEncoding | null): Promise<string>;

/**
 * Asynchronous realpath(3) - return the canonicalized absolute pathname.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function realpath(path: PathLike, options: { encoding: "buffer" } | "buffer"): Promise<Buffer>;

/**
 * Asynchronous realpath(3) - return the canonicalized absolute pathname.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function realpath(path: PathLike, options?: { encoding?: string | null } | string | null): Promise<string | Buffer>;

/**
 * Asynchronous link(2) - Create a new link (also known as a hard link) to an existing file.
 * @param existingPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param newPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function link(existingPath: PathLike, newPath: PathLike): Promise<void>;

/**
 * Asynchronous unlink(2) - delete a name and possibly the file it refers to.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function unlink(path: PathLike): Promise<void>;

/**
 * Asynchronous readlink(2) - read value of a symbolic link.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function readlink(path: PathLike, options?: { encoding?: BufferEncoding | null } | BufferEncoding | null): Promise<string>;

/**
 * Asynchronous readlink(2) - read value of a symbolic link.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function readlink(path: PathLike, options: { encoding: "buffer" } | "buffer"): Promise<Buffer>;

/**
 * Asynchronous readlink(2) - read value of a symbolic link.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function readlink(path: PathLike, options?: { encoding?: string | null } | string | null): Promise<string | Buffer>;

/**
 * Asynchronous chmod(2) - Change permissions of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
export function chmod(path: PathLike, mode: string | number): Promise<void>;

/**
 * Asynchronous fchmod(2) - Change permissions of a file.
 * @param fd A file descriptor.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
export function fchmod(fd: number, mode: string | number): Promise<void>;

/**
 * Asynchronous chown(2) - Change ownership of a file.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function chown(path: PathLike, uid: number, gid: number): Promise<void>;

/**
 * Asynchronous fchown(2) - Change ownership of a file.
 * @param fd A file descriptor.
 */
export function fchown(fd: number, uid: number, gid: number): Promise<void>;

/**
 * Asynchronous lchown(2) - Change ownership of a file. Does not dereference symbolic links.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function lchown(path: PathLike, uid: number, gid: number): Promise<void>;

/**
 * Asynchronous fsync(2) - synchronize a file's in-core state with the underlying storage device.
 * @param fd A file descriptor.
 */
export function fsync(fd: number): Promise<void>;

/**
 * Asynchronously change file timestamps of the file referenced by the supplied path.
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param atime The last access time. If a string is provided, it will be coerced to number.
 * @param mtime The last modified time. If a string is provided, it will be coerced to number.
 */
export function utimes(path: PathLike, atime: string | number | Date, mtime: string | number | Date): Promise<void>;

/**
 * Asynchronously change file timestamps of the file referenced by the supplied file descriptor.
 * @param fd A file descriptor.
 * @param atime The last access time. If a string is provided, it will be coerced to number.
 * @param mtime The last modified time. If a string is provided, it will be coerced to number.
 */
export function futimes(fd: number, atime: string | number | Date, mtime: string | number | Date): Promise<void>;

/**
 * Asynchronous ftruncate(2) - Truncate a file to a specified length.
 * @param fd A file descriptor.
 * @param len If not specified, defaults to `0`.
 */
export function ftruncate(fd: number, len?: number | null): Promise<void>;
