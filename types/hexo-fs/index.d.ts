import Promise = require("bluebird");
import {
    // chmod,
    chmodSync,
    // chown,
    chownSync,
    // close,
    closeSync,
    createReadStream,
    createWriteStream,
    // fchmod,
    fchmodSync,
    // fchown,
    fchownSync,
    // fstat,
    fstatSync,
    // fsync,
    fsyncSync,
    // ftruncate,
    ftruncateSync,
    // futimes,
    futimesSync,
    // lchmod,
    lchmodSync,
    // lchown,
    lchownSync,
    // link,
    linkSync,
    // lstat,
    lstatSync,
    // mkdir,
    mkdirSync,
    // open,
    openSync,
    PathLike,
    // readdir,
    readdirSync,
    // readlink,
    readlinkSync,
    ReadStream,
    // read,
    readSync,
    // realpath,
    realpathSync,
    // rename,
    renameSync,
    Stats,
    // stat,
    statSync,
    // symlink,
    symlinkSync,
    // truncate,
    truncateSync,
    // unlink,
    unlinkSync,
    unwatchFile,
    // utimes,
    utimesSync,
    watchFile,
    WriteStream,
    // write,
    writeSync,
} from "graceful-fs";

export interface DirectoryOptions {
    ignoreHidden?: boolean | undefined;
    ignorePattern?: RegExp | undefined;
}

export interface AppendFileOptions {
    encoding?: string | null | undefined;
    mode?: string | number | undefined;
    flag?: string | undefined;
}

// access
export let F_OK: number | undefined;
export let R_OK: number | undefined;
export let W_OK: number | undefined;
export let X_OK: number | undefined;

export let access: ((path: PathLike, mode?: number) => Promise<void>) | undefined; // promisify
export let accessSync: ((path: PathLike, mode?: number) => void) | undefined; // promisify

// appendFile
/**
 * Appends data to a file.
 */
export function appendFile(path: string, data: any, callback?: (err: any) => void): Promise<void>;
/**
 * Appends data to a file.
 */
export function appendFile(
    path: string,
    data: any,
    options: string | AppendFileOptions,
    callback?: (err: any) => void,
): Promise<void>;
/**
 * Synchronous version of fs.appendFile.
 */
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
/**
 * Copies a directory from src to dest. It returns an array of copied files.
 */
export function copyDir(src: string, dest: string, callback?: (err: any, value?: string[]) => void): Promise<string[]>;
/**
 * Copies a directory from src to dest. It returns an array of copied files.
 */
export function copyDir(
    src: string,
    dest: string,
    options?: DirectoryOptions,
    callback?: (err: any, value?: string[]) => void,
): Promise<string[]>;
/**
 * Copies a file from src to dest.
 */
export function copyFile(src: PathLike, dest: string, callback?: (err: any) => void): Promise<void>;

// createStream
export { createReadStream, createWriteStream };

// emptyDir
/**
 * Deletes all files in a directory. It returns an array of deleted files.
 */
export function emptyDir(
    path: string,
    callback?: (err: any, value?: string | string[]) => void,
): Promise<string | string[]>;
export function emptyDir(
    path: string,
    options?: DirectoryOptions & { exclude?: string[] | undefined },
    callback?: (err: any, value?: string | string[]) => void,
): Promise<string | string[]>;
export function emptyDirSync(
    path: string,
    options?: DirectoryOptions & { exclude?: string[] | undefined },
    parent?: string,
): string | string[];

// ensurePath
/**
 * Ensures the given path is available to use or appends a number to the path.
 */
export function ensurePath(path: string, callback?: (err: any, value?: string) => void): Promise<string>;
/**
 * Synchronous version of `fs.ensurePath`.
 */
export function ensurePathSync(path: string): string;

// ensureWriteStream
/**
 * Creates the parent directories if they does not exist and returns a writable stream.
 */
export function ensureWriteStream(
    path: string,
    callback?: (err: any, value?: WriteStream) => void,
): Promise<WriteStream>;
/**
 * Creates the parent directories if they does not exist and returns a writable stream.
 */
export function ensureWriteStream(
    path: string,
    options?: string | {
        flags?: string | undefined;
        defaultEncoding?: string | undefined;
        fd?: number | undefined;
        mode?: number | undefined;
        autoClose?: boolean | undefined;
        start?: number | undefined;
    },
    callback?: (err: any, value?: WriteStream) => void,
): Promise<WriteStream>;
/**
 * Synchronous version of fs.ensureWriteStream.
 */
export function ensureWriteStreamSync(
    path: string,
    options?: string | {
        flags?: string | undefined;
        defaultEncoding?: string | undefined;
        fd?: number | undefined;
        mode?: number | undefined;
        autoClose?: boolean | undefined;
        start?: number | undefined;
    },
): WriteStream;

// exists
/**
 * Test whether or not the given `path` exists by checking with the file system.
 * @param path checking if exists.
 */
export function exists(path: PathLike, callback?: (exist: boolean) => void): Promise<boolean>;
/**
 * Synchronous version of `fs.exists`.
 */
export function existsSync(path: PathLike): boolean;

// fsync
export function fsync(fd: number): Promise<void>; // promisify
export { fsyncSync };

// link
export function link(existingPath: PathLike, newPath: PathLike): Promise<void>; // promisify
export { linkSync };

// listDir
/**
 * Lists files in a directory.
 */
export function listDir(path: string, callback?: (err: any, value?: string[]) => void): Promise<string[]>;
/**
 * Lists files in a directory.
 */
export function listDir(
    path: string,
    options?: DirectoryOptions,
    callback?: (err: any, value?: string[]) => void,
): Promise<string[]>;
/**
 * Synchronous version of `fs.listDir`.
 */
export function listDirSync(path: string, options?: DirectoryOptions, parent?: string): string | string[];

// mkdir
export function mkdir(path: PathLike, mode?: string | number): Promise<void>; // promisify
export { mkdirSync };

// mkdirs
/**
 * Creates a directory and its parent directories if they does not exist.
 */
export function mkdirs(path: PathLike, callback?: (err: any) => void): Promise<void>;
/**
 * Synchronous version of `fs.mkdirs`.
 */
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
    position: number | null,
): Promise<{ bytesRead: number; buffer: TBuffer }>; // promisify
export { readSync };

// readdir
export function readdir(
    path: PathLike,
    options?: { encoding: BufferEncoding | null } | BufferEncoding | null,
): Promise<string[]>; // promisify
export function readdir(path: PathLike, options: "buffer" | { encoding: "buffer" }): Promise<Buffer[]>; // promisify
export function readdir(
    path: PathLike,
    options?: { encoding?: string | null | undefined } | string | null,
): Promise<Array<string | Buffer>>; // promisify
export { readdirSync };

// readFile
/**
 * Reads the entire contents of a file.
 */
export function readFile(path: PathLike | number, callback?: (err: any, value?: string) => void): Promise<string>;
/**
 * Reads the entire contents of a file.
 */
export function readFile(
    path: PathLike | number,
    options?: { encoding?: string | undefined; flag?: string | undefined; escape?: boolean | undefined },
    callback?: (err: any, value?: string) => void,
): Promise<string>;
/**
 * Synchronous version of `fs.readFile`.
 */
export function readFileSync(
    path: PathLike | number,
    options?: { encoding?: string | undefined; flag?: string | undefined; escape?: boolean | undefined },
): string;

// readlink
export function readlink(
    path: PathLike,
    options?: { encoding?: BufferEncoding | null | undefined } | BufferEncoding | null,
): Promise<string>; // promisify
export function readlink(path: PathLike, options: { encoding: "buffer" } | "buffer"): Promise<Buffer>; // promisify
export function readlink(
    path: PathLike,
    options?: { encoding?: string | null | undefined } | string | null,
): Promise<string | Buffer>; // promisify
export { readlinkSync };

// realpath
export function realpath(
    path: PathLike,
    options?: { encoding?: BufferEncoding | null | undefined } | BufferEncoding | null,
): Promise<string>; // promisify
export function realpath(path: PathLike, options: { encoding: "buffer" } | "buffer"): Promise<Buffer>; // promisify
export function realpath(
    path: PathLike,
    options?: { encoding?: string | null | undefined } | string | null,
): Promise<string | Buffer>; // promisify
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
export { fstatSync, lstatSync, statSync };

// truncate
export function truncate(path: PathLike, len?: number | null): Promise<void>; // promisify
export function ftruncate(fd: number, len?: number | null): Promise<void>; // promisify
export { ftruncateSync, truncateSync };

// unlink
export function unlink(path: PathLike): Promise<void>; // promisify
export { unlinkSync };

// utimes
export function utimes(path: PathLike, atime: string | number | Date, mtime: string | number | Date): Promise<void>; // promisify
export function futimes(fd: number, atime: string | number | Date, mtime: string | number | Date): Promise<void>; // promisify
export { futimesSync, utimesSync };

// watch
import { FSWatcher, WatchOptions } from "chokidar";
/**
 * Watches changes of a file or a directory.
 *
 * See Chokidar API for more info.
 */
export function watch(
    path: string | string[],
    options?: WatchOptions,
    callback?: (err: any, value?: FSWatcher) => void,
): Promise<FSWatcher>;
export { unwatchFile, watchFile };

// write
export function write<TBuffer extends Buffer | Uint8Array>(
    fd: number,
    buffer?: TBuffer,
    offset?: number,
    length?: number,
    position?: number | null,
): Promise<{ bytesWritten: number; buffer: TBuffer }>; // promisify
export function write(
    fd: number,
    string: any,
    position?: number | null,
    encoding?: string | null,
): Promise<{ bytesWritten: number; buffer: string }>; // promisify
export { writeSync };

// writeFile
/**
 * Writes data to a file.
 */
export function writeFile(path: string, data: any, callback?: (err: any) => void): Promise<void>;
/**
 * Writes data to a file.
 */
export function writeFile(
    path: string,
    data: any,
    options?: string | {
        encoding?: string | null | undefined;
        mode?: string | number | undefined;
        flag?: string | undefined;
    },
    callback?: (err: any) => void,
): Promise<void>;
/**
 * Synchronous version of `fs.writeFile`.
 */
export function writeFileSync(
    path: string,
    data: any,
    options?: string | {
        encoding?: string | null | undefined;
        mode?: string | number | undefined;
        flag?: string | undefined;
    },
): void;

// Static classes
export { ReadStream, Stats, WriteStream } from "graceful-fs";

// util
export function escapeEOL(str: string): string;
export function escapeBOM(str: string): string;
