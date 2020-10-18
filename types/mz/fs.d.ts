// Modified from the node.js definitions.
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/fs.d.ts

import {
    Dirent,
    FSWatcher,
    NoParamCallback,
    PathLike,
    RmDirOptions,
    WriteFileOptions,
    Stats,
    symlink as symlinkNS,
    MakeDirectoryOptions,
} from "fs";
export * from "fs";

/**
 * Asynchronous `rename(2)`.
 *
 * Change the name or location of a file or directory.
 *
 * @param oldPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 * @param newPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 */
export function rename(oldPath: PathLike, newPath: PathLike, callback: NoParamCallback): void;

/**
 * Asynchronous `rename(2)`.
 *
 * Change the name or location of a file or directory.
 *
 * @param oldPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 * @param newPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 */
export function rename(oldPath: PathLike, newPath: PathLike): Promise<void>;

/**
 * Asynchronous `truncate(2)`.
 *
 * Truncate a file to a specified length.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param len If not specified, defaults to `0`.
 */
export function truncate(path: PathLike, len: number | null | undefined, callback: NoParamCallback): void;

/**
 * Asynchronous `truncate(2)`.
 *
 * Truncate a file to a specified length.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 */
export function truncate(path: PathLike, callback: NoParamCallback): void;

/**
 * Asynchronous `truncate(2)`.
 *
 * Truncate a file to a specified length.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param len If not specified, defaults to `0`.
 */
export function truncate(path: PathLike, len?: number | null): Promise<void>;

/**
 * Asynchronous `ftruncate(2)`.
 *
 * Truncate a file to a specified length.
 *
 * @param fd A file descriptor.
 * @param len If not specified, defaults to `0`.
 */
export function ftruncate(fd: number, len: number | null | undefined, callback: NoParamCallback): void;

/**
 * Asynchronous `ftruncate(2)`.
 *
 * Truncate a file to a specified length.
 *
 * @param fd A file descriptor.
 */
export function ftruncate(fd: number, callback: NoParamCallback): void;

/**
 * Asynchronous `ftruncate(2)`.
 *
 * Truncate a file to a specified length.
 *
 * @param fd A file descriptor.
 * @param len If not specified, defaults to `0`.
 */
export function ftruncate(fd: number, len?: number | null): Promise<void>;

/**
 * Asynchronous `chown(2)`.
 *
 * Change ownership of a file.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function chown(path: PathLike, uid: number, gid: number, callback: NoParamCallback): void;

/**
 * Asynchronous `chown(2)`.
 *
 * Change ownership of a file.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function chown(path: PathLike, uid: number, gid: number): Promise<void>;

/**
 * Asynchronous `fchown(2)`.
 *
 * Change ownership of a file.
 *
 * @param fd A file descriptor.
 */
export function fchown(fd: number, uid: number, gid: number, callback: NoParamCallback): void;
export function fchown(fd: number, uid: number, gid: number, callback: NoParamCallback): void;

/**
 * Asynchronous `fchown(2)`.
 *
 * Change ownership of a file.
 *
 * @param fd A file descriptor.
 */
export function fchown(fd: number, uid: number, gid: number): Promise<void>;

/**
 * Asynchronous `lchown(2)`.
 *
 * Change ownership of a file. Does not dereference symbolic links.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function lchown(path: PathLike, uid: number, gid: number, callback: NoParamCallback): void;

/**
 * Asynchronous `lchown(2)`.
 *
 * Change ownership of a file. Does not dereference symbolic links.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function lchown(path: PathLike, uid: number, gid: number): Promise<void>;

/**
 * Asynchronous `chmod(2)`.
 *
 * Change permissions of a file.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
export function chmod(path: PathLike, mode: string | number, callback: NoParamCallback): void;

/**
 * Asynchronous `chmod(2)`.
 *
 * Change permissions of a file.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
export function chmod(path: PathLike, mode: string | number): Promise<void>;

/**
 * Asynchronous `fchmod(2)`.
 *
 * Change permissions of a file.
 *
 * @param fd A file descriptor.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
export function fchmod(fd: number, mode: string | number, callback: NoParamCallback): void;

/**
 * Asynchronous `fchmod(2)`.
 *
 * Change permissions of a file.
 *
 * @param fd A file descriptor.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
export function fchmod(fd: number, mode: string | number): Promise<void>;

/**
 * Asynchronous `lchmod(2)`.
 *
 * Change permissions of a file. Does not dereference symbolic links.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
export function lchmod(path: PathLike, mode: string | number, callback: NoParamCallback): void;

/**
 * Asynchronous `lchmod(2)`.
 *
 * Change permissions of a file. Does not dereference symbolic links.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer.
 */
export function lchmod(path: PathLike, mode: string | number): Promise<void>;

/**
 * Asynchronous `stat(2)`.
 *
 * Get file status.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function stat(path: PathLike, callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void): void;

/**
 * Asynchronous `stat(2)`.
 *
 * Get file status.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function stat(path: PathLike): Promise<Stats>;

/**
 * Asynchronous `fstat(2)`.
 *
 * Get file status.
 *
 * @param fd A file descriptor.
 */
export function fstat(fd: number, callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void): void;

/**
 * Asynchronous `fstat(2)`.
 *
 * Get file status.
 *
 * @param fd A file descriptor.
 */
export function fstat(fd: number): Promise<Stats>;

/**
 * Synchronous fstat(2) - Get file status.
 * @param fd A file descriptor.
 */
export function fstatSync(fd: number): Stats;

/**
 * Asynchronous `lstat(2)`.
 *
 * Get file status. Does not dereference symbolic links.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function lstat(path: PathLike, callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void): void;

/**
 * Asynchronous `lstat(2)`.
 *
 * Get file status. Does not dereference symbolic links.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function lstat(path: PathLike): Promise<Stats>;

/**
 * Asynchronous `link(2)`.
 *
 * Create a new link (also known as a hard link) to an existing file.
 *
 * @param existingPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param newPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function link(existingPath: PathLike, newPath: PathLike, callback: NoParamCallback): void;

/**
 * Asynchronous `link(2)`.
 *
 * Create a new link (also known as a hard link) to an existing file.
 *
 * @param existingPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param newPath A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function link(existingPath: PathLike, newPath: PathLike): Promise<void>;

/**
 * Asynchronous `symlink(2)`.
 *
 * Create a new symbolic link to an existing file.
 *
 * @param target A path to an existing file. If a URL is provided, it must use the `file:` protocol.
 * @param path A path to the new symlink. If a URL is provided, it must use the `file:` protocol.
 * @param type May be set to `'dir'`, `'file'`, or `'junction'` (default is `'file'`) and is only available on Windows (ignored on other platforms).
 * When using `'junction'`, the `target` argument will automatically be normalized to an absolute path.
 */
export function symlink(
    target: PathLike,
    path: PathLike,
    type: symlinkNS.Type | null | undefined,
    callback: NoParamCallback
): void;

/**
 * Asynchronous `symlink(2)`.
 *
 * Create a new symbolic link to an existing file.
 *
 * @param target A path to an existing file. If a URL is provided, it must use the `file:` protocol.
 * @param path A path to the new symlink. If a URL is provided, it must use the `file:` protocol.
 */
export function symlink(target: PathLike, path: PathLike, callback: NoParamCallback): void;

/**
 * Asynchronous `symlink(2)`.
 *
 * Create a new symbolic link to an existing file.
 *
 * @param target A path to an existing file. If a URL is provided, it must use the `file:` protocol.
 * @param path A path to the new symlink. If a URL is provided, it must use the `file:` protocol.
 * @param type May be set to `'dir'`, `'file'`, or `'junction'` (default is `'file'`) and is only available on Windows (ignored on other platforms).
 * When using `'junction'`, the `target` argument will automatically be normalized to an absolute path.
 */
export function symlink(target: PathLike, path: PathLike, type?: string | null): Promise<void>;

/**
 * Asynchronous `readlink(2)`.
 *
 * read value of a symbolic link.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function readlink(
    path: PathLike,
    options: { encoding?: BufferEncoding | null } | BufferEncoding | null | undefined,
    callback: (err: NodeJS.ErrnoException | null, linkString: string) => void
): void;

/**
 * Asynchronous `readlink(2)`.
 *
 * read value of a symbolic link.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function readlink(
    path: PathLike,
    options: { encoding: "buffer" } | "buffer",
    callback: (err: NodeJS.ErrnoException | null, linkString: Buffer) => void
): void;

/**
 * Asynchronous `readlink(2)`.
 *
 * read value of a symbolic link.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function readlink(
    path: PathLike,
    options: { encoding?: string | null } | string | null | undefined,
    callback: (err: NodeJS.ErrnoException | null, linkString: string | Buffer) => void
): void;

/**
 * Asynchronous `readlink(2)`.
 *
 * read value of a symbolic link.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function readlink(
    path: PathLike,
    callback: (err: NodeJS.ErrnoException | null, linkString: string) => void
): void;

/**
 * Asynchronous `readlink(2)`.
 *
 * read value of a symbolic link.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function readlink(
    path: PathLike,
    options?: { encoding?: BufferEncoding | null } | BufferEncoding | null
): Promise<string>;

/**
 * Asynchronous `readlink(2)`.
 *
 * read value of a symbolic link.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function readlink(path: PathLike, options: { encoding: "buffer" } | "buffer"): Promise<Buffer>;

/**
 * Asynchronous `readlink(2)`.
 *
 * read value of a symbolic link.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function readlink(
    path: PathLike,
    options?: { encoding?: string | null } | string | null
): Promise<string | Buffer>;

/**
 * Asynchronous `realpath(3)`.
 *
 * return the canonicalized absolute pathname.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function realpath(
    path: PathLike,
    options: { encoding?: BufferEncoding | null } | BufferEncoding | null | undefined,
    callback: (err: NodeJS.ErrnoException | null, resolvedPath: string) => void
): void;

/**
 * Asynchronous `realpath(3)`.
 *
 * return the canonicalized absolute pathname.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function realpath(
    path: PathLike,
    options: { encoding: "buffer" } | "buffer",
    callback: (err: NodeJS.ErrnoException | null, resolvedPath: Buffer) => void
): void;

/**
 * Asynchronous `realpath(3)`.
 *
 * return the canonicalized absolute pathname.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function realpath(
    path: PathLike,
    options: { encoding?: string | null } | string | null | undefined,
    callback: (err: NodeJS.ErrnoException | null, resolvedPath: string | Buffer) => void
): void;

/**
 * Asynchronous `realpath(3)`.
 *
 * return the canonicalized absolute pathname.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function realpath(
    path: PathLike,
    callback: (err: NodeJS.ErrnoException | null, resolvedPath: string) => void
): void;

/**
 * Asynchronous `realpath(3)`.
 *
 * return the canonicalized absolute pathname.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function realpath(
    path: PathLike,
    options?: { encoding?: BufferEncoding | null } | BufferEncoding | null
): Promise<string>;

/**
 * Asynchronous `realpath(3)`.
 *
 * return the canonicalized absolute pathname.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function realpath(path: PathLike, options: { encoding: "buffer" } | "buffer"): Promise<Buffer>;

/**
 * Asynchronous `realpath(3)`.
 *
 * return the canonicalized absolute pathname.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function realpath(
    path: PathLike,
    options?: { encoding?: string | null } | string | null
): Promise<string | Buffer>;

export namespace realpath {
    function native(
        path: PathLike,
        options: { encoding?: BufferEncoding | null } | BufferEncoding | null | undefined,
        callback: (err: NodeJS.ErrnoException | null, resolvedPath: string) => void
    ): void;
    function native(
        path: PathLike,
        options: { encoding: "buffer" } | "buffer",
        callback: (err: NodeJS.ErrnoException | null, resolvedPath: Buffer) => void
    ): void;
    function native(
        path: PathLike,
        options: { encoding?: string | null } | string | null | undefined,
        callback: (err: NodeJS.ErrnoException | null, resolvedPath: string | Buffer) => void
    ): void;
    function native(path: PathLike, callback: (err: NodeJS.ErrnoException | null, resolvedPath: string) => void): void;

    function native(
        path: PathLike,
        options?: { encoding?: BufferEncoding | null } | BufferEncoding | null
    ): Promise<string>;
    function native(path: PathLike, options: { encoding: "buffer" } | "buffer"): Promise<Buffer>;
    function native(
        path: PathLike,
        options: { encoding?: string | null } | string | null | undefined
    ): Promise<string | Buffer>;
}

/**
 * Asynchronous `unlink(2)`.
 *
 * delete a name and possibly the file it refers to.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function unlink(path: PathLike, callback: NoParamCallback): void;

/**
 * Asynchronous `unlink(2)`.
 *
 * delete a name and possibly the file it refers to.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function unlink(path: PathLike): Promise<void>;

/**
 * Asynchronous `rmdir(2)`
 *
 * Removes the directory specified in `path`.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function rmdir(path: PathLike, callback: NoParamCallback): void;

/**
 * Asynchronous `rmdir(2)`.
 *
 * Removes the directory specified in `path`.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function rmdir(path: PathLike, options: RmDirOptions, callback: NoParamCallback): void;

/**
 * Asynchronous `rmdir(2)`
 *
 * Removes the directory specified in `path`.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function rmdir(path: PathLike, options?: RmDirOptions): Promise<void>;

/**
 * Asynchronous `mkdir(2)`.
 *
 * Creates the directory specified in `path`.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options Either the file mode, or an object optionally specifying the file mode and whether parent folders
 * should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`.
 */
export function mkdir(
    path: PathLike,
    options: number | string | MakeDirectoryOptions | null | undefined,
    callback: NoParamCallback
): void;

/**
 * Asynchronous `mkdir(2)`.
 *
 * Creates the directory with a mode of `0o777`.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function mkdir(path: PathLike, callback: NoParamCallback): void;

/**
 * Asynchronous `mkdir(2)`.
 *
 * Creates the directory specified in `path`.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options Either the file mode, or an object optionally specifying the file mode and whether parent folders
 * should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`.
 */
export function mkdir(path: PathLike, options?: number | string | MakeDirectoryOptions | null): Promise<void>;

/**
 * Creates a unique temporary directory.
 *
 * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
 *
 * @param prefix temp dir prefix
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function mkdtemp(
    prefix: string,
    options: { encoding?: BufferEncoding | null } | BufferEncoding | null | undefined,
    callback: (err: NodeJS.ErrnoException | null, folder: string) => void
): void;

/**
 * Creates a unique temporary directory.
 *
 * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
 *
 * @param prefix temp dir prefix
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function mkdtemp(
    prefix: string,
    options: "buffer" | { encoding: "buffer" },
    callback: (err: NodeJS.ErrnoException | null, folder: Buffer) => void
): void;

/**
 * Creates a unique temporary directory.
 *
 * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
 *
 * @param prefix temp dir prefix
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function mkdtemp(
    prefix: string,
    options: { encoding?: string | null } | string | null | undefined,
    callback: (err: NodeJS.ErrnoException | null, folder: string | Buffer) => void
): void;

/**
 * Creates a unique temporary directory.
 *
 * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
 *
 * @param prefix temp dir prefix
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function mkdtemp(prefix: string, callback: (err: NodeJS.ErrnoException | null, folder: string) => void): void;

/***
 * Creates a unique temporary directory.
 *
 * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
 *
 * @param prefix temp dir prefix
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function mkdtemp(
    prefix: string,
    options?: { encoding?: BufferEncoding | null } | BufferEncoding | null
): Promise<string>;

/***
 * Creates a unique temporary directory.
 *
 * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
 *
 * @param prefix temp dir prefix
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function mkdtemp(prefix: string, options: { encoding: "buffer" } | "buffer"): Promise<Buffer>;

/***
 * Creates a unique temporary directory.
 *
 * Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
 *
 * @param prefix temp dir prefix
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function mkdtemp(
    prefix: string,
    options?: { encoding?: string | null } | string | null
): Promise<string | Buffer>;

/**
 * Asynchronous `readdir(3)`.
 *
 * Reads the contents of a directory.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function readdir(
    path: PathLike,
    options: { encoding: BufferEncoding | null; withFileTypes?: false } | BufferEncoding | null | undefined,
    callback: (err: NodeJS.ErrnoException | null, files: string[]) => void
): void;

/**
 * Asynchronous `readdir(3)`.
 *
 * Reads the contents of a directory.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function readdir(
    path: PathLike,
    options: { encoding: "buffer"; withFileTypes?: false } | "buffer",
    callback: (err: NodeJS.ErrnoException | null, files: Buffer[]) => void
): void;

/**
 * Asynchronous `readdir(3)`.
 *
 * Reads the contents of a directory.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function readdir(
    path: PathLike,
    options: { encoding?: string | null; withFileTypes?: false } | string | null | undefined,
    callback: (err: NodeJS.ErrnoException | null, files: string[] | Buffer[]) => void
): void;

/**
 * Asynchronous `readdir(3)`.
 *
 * Reads the contents of a directory.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function readdir(path: PathLike, callback: (err: NodeJS.ErrnoException | null, files: string[]) => void): void;

/**
 * Asynchronous `readdir(3)`.
 *
 * Reads the contents of a directory.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options If called with `withFileTypes: true` the result data will be an array of Dirent.
 */
export function readdir(
    path: PathLike,
    options: { encoding?: string | null; withFileTypes: true },
    callback: (err: NodeJS.ErrnoException | null, files: Dirent[]) => void
): void;

/**
 * Asynchronous `readdir(3)`.
 *
 * Reads the contents of a directory.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function readdir(
    path: PathLike,
    options?: { encoding: BufferEncoding | null; withFileTypes?: false } | BufferEncoding | null
): Promise<string[]>;

/**
 * Asynchronous `readdir(3)`.
 *
 * Reads the contents of a directory.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function readdir(
    path: PathLike,
    options: "buffer" | { encoding: "buffer"; withFileTypes?: false }
): Promise<Buffer[]>;

/**
 * Asynchronous `readdir(3)`.
 *
 * Reads the contents of a directory.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
 */
export function readdir(
    path: PathLike,
    options?: { encoding?: string | null; withFileTypes?: false } | string | null
): Promise<string[] | Buffer[]>;

/**
 * Asynchronous `readdir(3)`.
 *
 * Reads the contents of a directory.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param options If called with `withFileTypes: true` the result data will be an array of Dirent
 */
export function readdir(path: PathLike, options: { encoding?: string | null; withFileTypes: true }): Promise<Dirent[]>;

/**
 * Asynchronous `close(2)`.
 *
 * close a file descriptor.
 *
 * @param fd A file descriptor.
 */
export function close(fd: number, callback: NoParamCallback): void;

/**
 * Asynchronous `close(2)`.
 *
 * close a file descriptor.
 *
 * @param fd A file descriptor.
 */
export function close(fd: number): Promise<void>;

/**
 * Asynchronous `open(2)`.
 *
 * open and possibly create a file.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer. If not supplied, defaults to `0o666`.
 */
export function open(
    path: PathLike,
    flags: string | number,
    mode: string | number | null | undefined,
    callback: (err: NodeJS.ErrnoException | null, fd: number) => void
): void;

/**
 * Asynchronous `open(2)`.
 *
 * open and possibly create a file. If the file is created, its mode will be `0o666`.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 */
export function open(
    path: PathLike,
    flags: string | number,
    callback: (err: NodeJS.ErrnoException | null, fd: number) => void
): void;

/**
 * Asynchronous `open(2)`.
 *
 * open and possibly create a file.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param mode A file mode. If a string is passed, it is parsed as an octal integer. If not supplied, defaults to `0o666`.
 */
export function open(path: PathLike, flags: string | number, mode?: string | number | null): Promise<number>;

/**
 * Change the file timestamps of the file referenced by the supplied path.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param atime The last access time. If a string is provided, it will be coerced to number.
 * @param mtime The last modified time. If a string is provided, it will be coerced to number.
 */
export function utimes(
    path: PathLike,
    atime: string | number | Date,
    mtime: string | number | Date,
    callback: NoParamCallback
): void;

/**
 * Change the file timestamps of the file referenced by the supplied path.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param atime The last access time. If a string is provided, it will be coerced to number.
 * @param mtime The last modified time. If a string is provided, it will be coerced to number.
 */
export function utimes(path: PathLike, atime: string | number | Date, mtime: string | number | Date): Promise<void>;

/**
 * Change the file timestamps of a file referenced by the supplied file descriptor.
 *
 * @param fd A file descriptor.
 * @param atime The last access time. If a string is provided, it will be coerced to number.
 * @param mtime The last modified time. If a string is provided, it will be coerced to number.
 */
export function futimes(
    fd: number,
    atime: string | number | Date,
    mtime: string | number | Date,
    callback: NoParamCallback
): void;

/**
 * Change the file timestamps of a file referenced by the supplied file descriptor.
 *
 * @param fd A file descriptor.
 * @param atime The last access time. If a string is provided, it will be coerced to number.
 * @param mtime The last modified time. If a string is provided, it will be coerced to number.
 */
export function futimes(fd: number, atime: string | number | Date, mtime: string | number | Date): Promise<void>;

/**
 * Asynchronous `fsync(2)`.
 *
 * synchronize a file's in-core state with the underlying storage device.
 *
 * @param fd A file descriptor.
 */
export function fsync(fd: number, callback: NoParamCallback): void;

/**
 * Asynchronous `fsync(2)`.
 *
 * synchronize a file's in-core state with the underlying storage device.
 *
 * @param fd A file descriptor.
 */
export function fsync(fd: number): Promise<void>;

/**
 * Write `buffer` to the file specified by `fd`.
 *
 * @param fd A file descriptor.
 * @param offset The part of the buffer to be written. If not supplied, defaults to `0`.
 * @param length The number of bytes to write. If not supplied, defaults to `buffer.length - offset`.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 */
export function write<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    offset: number | null | undefined,
    length: number | null | undefined,
    position: number | null | undefined,
    callback: (err: NodeJS.ErrnoException | null, written: number, buffer: TBuffer) => void
): void;

/**
 * Write `buffer` to the file specified by `fd`.
 *
 * @param fd A file descriptor.
 * @param offset The part of the buffer to be written. If not supplied, defaults to `0`.
 * @param length The number of bytes to write. If not supplied, defaults to `buffer.length - offset`.
 */
export function write<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    offset: number | null | undefined,
    length: number | null | undefined,
    callback: (err: NodeJS.ErrnoException | null, written: number, buffer: TBuffer) => void
): void;

/**
 * Write `buffer` to the file specified by `fd`.
 *
 * @param fd A file descriptor.
 * @param offset The part of the buffer to be written. If not supplied, defaults to `0`.
 */
export function write<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    offset: number | null | undefined,
    callback: (err: NodeJS.ErrnoException | null, written: number, buffer: TBuffer) => void
): void;

/**
 * Write `buffer` to the file specified by `fd`.
 *
 * @param fd A file descriptor.
 */
export function write<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    callback: (err: NodeJS.ErrnoException | null, written: number, buffer: TBuffer) => void
): void;

/**
 * Write `buffer` to the file specified by `fd`.
 *
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
    position?: number | null
): Promise<[number, TBuffer]>;

/**
 * Write `data` to the file specified by `fd`.
 *
 * @param fd A file descriptor.
 * @param string A string to write. If something other than a string is supplied it will be coerced to a string.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 * @param encoding The expected string encoding.
 */
export function write(
    fd: number,
    data: any,
    position: number | null | undefined,
    encoding: string | null | undefined,
    callback: (err: NodeJS.ErrnoException | null, written: number, str: string) => void
): void;

/**
 * Write `data` to the file specified by `fd`.
 *
 * @param fd A file descriptor.
 * @param string A string to write. If something other than a string is supplied it will be coerced to a string.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 */
export function write(
    fd: number,
    data: any,
    position: number | null | undefined,
    callback: (err: NodeJS.ErrnoException | null, written: number, str: string) => void
): void;

/**
 * Write `data` to the file specified by `fd`.
 *
 * @param fd A file descriptor.
 * @param string A string to write. If something other than a string is supplied it will be coerced to a string.
 */
export function write(
    fd: number,
    data: any,
    callback: (err: NodeJS.ErrnoException | null, written: number, str: string) => void
): void;

/**
 * Write `data` to the file specified by `fd`.
 *
 * @param fd A file descriptor.
 * @param string A string to write. If something other than a string is supplied it will be coerced to a string.
 * @param position The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position.
 * @param encoding The expected string encoding.
 */
export function write(
    fd: number,
    string: any,
    position?: number | null,
    encoding?: string | null
): Promise<[number, string]>;

/**
 * Read data from the file specified by `fd`.
 *
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
    position: number | null,
    callback: (err: NodeJS.ErrnoException | null, bytesRead: number, buffer: TBuffer) => void
): void;

/**
 * Read data from the file specified by `fd`.
 *
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
): Promise<{ bytesRead: number; buffer: TBuffer }>;

/**
 * Asynchronously reads the entire contents of a file.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options An object that may contain an optional flag.
 * If a flag is not provided, it defaults to `'r'`.
 */
export function readFile(
    path: PathLike | number,
    options: { encoding?: null; flag?: string } | null | undefined,
    callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void
): void;

/**
 * Asynchronously reads the entire contents of a file.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options Either the encoding for the result, or an object that contains the encoding and an optional flag.
 * If a flag is not provided, it defaults to `'r'`.
 */
export function readFile(
    path: PathLike | number,
    options: { encoding: string; flag?: string } | string,
    callback: (err: NodeJS.ErrnoException | null, data: string) => void
): void;

/**
 * Asynchronously reads the entire contents of a file.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options Either the encoding for the result, or an object that contains the encoding and an optional flag.
 * If a flag is not provided, it defaults to `'r'`.
 */
export function readFile(
    path: PathLike | number,
    options: { encoding?: string | null; flag?: string } | string | null | undefined,
    callback: (err: NodeJS.ErrnoException | null, data: string | Buffer) => void
): void;

/**
 * Asynchronously reads the entire contents of a file.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 */
export function readFile(
    path: PathLike | number,
    callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void
): void;

/**
 * Asynchronously reads the entire contents of a file.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options An object that may contain an optional flag.
 * If a flag is not provided, it defaults to `'r'`.
 */
export function readFile(path: PathLike | number, options?: { encoding?: null; flag?: string } | null): Promise<Buffer>;

/**
 * Asynchronously reads the entire contents of a file.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options Either the encoding for the result, or an object that contains the encoding and an optional flag.
 * If a flag is not provided, it defaults to `'r'`.
 */
export function readFile(
    path: PathLike | number,
    options: { encoding: string; flag?: string } | string
): Promise<string>;

/**
 * Asynchronously reads the entire contents of a file.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param options Either the encoding for the result, or an object that contains the encoding and an optional flag.
 * If a flag is not provided, it defaults to `'r'`.
 */
export function readFile(
    path: PathLike | number,
    options?: { encoding?: string | null; flag?: string } | string | null
): Promise<string | Buffer>;

/**
 * Asynchronously writes data to a file, replacing the file if it already exists.
 *
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
export function writeFile(
    path: PathLike | number,
    data: any,
    options: WriteFileOptions,
    callback: NoParamCallback
): void;

/**
 * Asynchronously writes data to a file, replacing the file if it already exists.
 *
 * @param path A path to a file. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param data The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
 */
export function writeFile(path: PathLike | number, data: any, callback: NoParamCallback): void;

/**
 * Asynchronously writes data to a file, replacing the file if it already exists.
 *
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
 * Asynchronously append data to a file, creating the file if it does not yet exist.
 *
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
export function appendFile(
    file: PathLike | number,
    data: any,
    options: WriteFileOptions,
    callback: NoParamCallback
): void;

/**
 * Asynchronously append data to a file, creating the file if it does not yet exist.
 *
 * @param file A path to a file. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 * If a file descriptor is provided, the underlying file will _not_ be closed automatically.
 * @param data The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
 */
export function appendFile(file: PathLike | number, data: any, callback: NoParamCallback): void;

/**
 * Asynchronously append data to a file, creating the file if it does not yet exist.
 *
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
 * Watch for changes on `filename`. The callback `listener` will be called each time the file is accessed.
 */
export function watchFile(
    filename: PathLike,
    options: { persistent?: boolean; interval?: number } | undefined,
    listener: (curr: Stats, prev: Stats) => void
): void;

/**
 * Watch for changes on `filename`. The callback `listener` will be called each time the file is accessed.
 * @param filename A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 */
export function watchFile(filename: PathLike, listener: (curr: Stats, prev: Stats) => void): void;

/**
 * Stop watching for changes on `filename`.
 * @param filename A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 */
export function unwatchFile(filename: PathLike, listener?: (curr: Stats, prev: Stats) => void): void;

/**
 * Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.
 * @param filename A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 * @param options Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options.
 * If `encoding` is not supplied, the default of `'utf8'` is used.
 * If `persistent` is not supplied, the default of `true` is used.
 * If `recursive` is not supplied, the default of `false` is used.
 */
export function watch(
    filename: PathLike,
    options:
        { encoding?: BufferEncoding | null; persistent?: boolean; recursive?: boolean } |
        BufferEncoding |
        undefined |
        null,
    listener?: (event: string, filename: string) => void
): FSWatcher;

/**
 * Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.
 * @param filename A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 * @param options Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options.
 * If `encoding` is not supplied, the default of `'utf8'` is used.
 * If `persistent` is not supplied, the default of `true` is used.
 * If `recursive` is not supplied, the default of `false` is used.
 */
export function watch(
    filename: PathLike,
    options: { encoding: "buffer"; persistent?: boolean; recursive?: boolean } | "buffer",
    listener?: (event: string, filename: Buffer) => void
): FSWatcher;

/**
 * Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.
 * @param filename A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 * @param options Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options.
 * If `encoding` is not supplied, the default of `'utf8'` is used.
 * If `persistent` is not supplied, the default of `true` is used.
 * If `recursive` is not supplied, the default of `false` is used.
 */
export function watch(
    filename: PathLike,
    options: { encoding?: string | null; persistent?: boolean; recursive?: boolean } | string | null,
    listener?: (event: string, filename: string | Buffer) => void
): FSWatcher;

/**
 * Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.
 * @param filename A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 */
export function watch(filename: PathLike, listener?: (event: string, filename: string) => any): FSWatcher;

/**
 * Test whether or not the given path exists by checking with the file system.
 *
 * @deprecated
 * @param path A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 */
export function exists(path: PathLike, callback: (err: NodeJS.ErrnoException | null, exists: boolean) => void): void;

/**
 * Test whether or not the given path exists by checking with the file system.
 *
 * @param path A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 */
export function exists(path: PathLike): Promise<boolean>;

/**
 * Tests a user's permissions for the file specified by `path`.
 *
 * @param path A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 * @param mode An optional integer that specifies the accessibility checks to be performed.
 */
export function access(path: PathLike, mode: number | undefined, callback: NoParamCallback): void;

/**
 * Tests a user's permissions for the file specified by `path`.
 *
 * @param path A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 */
export function access(path: PathLike, callback: NoParamCallback): void;

/**
 * Tests a user's permissions for the file specified by `path`.
 *
 * @param path A path to a file or directory. If a URL is provided, it must use the `file:` protocol.
 * URL support is _experimental_.
 * @param mode An optional integer that specifies the accessibility checks to be performed.
 */
export function access(path: PathLike, mode?: number): Promise<void>;

/**
 * Asynchronous `fdatasync(2)`.
 *
 * Synchronize a file's in-core state with storage device.
 *
 * @param fd A file descriptor.
 */
export function fdatasync(fd: number, callback: NoParamCallback): void;

/**
 * Asynchronous `fdatasync(2)`.
 *
 * Synchronize a file's in-core state with storage device.
 *
 * @param fd A file descriptor.
 */
export function fdatasync(fd: number): Promise<void>;

/**
 * Asynchronously copies src to dest.
 *
 * By default, dest is overwritten if it already exists.
 * No arguments other than a possible exception are given to the callback function.
 * Node.js makes no guarantees about the atomicity of the copy operation.
 * If an error occurs after the destination file has been opened for writing, Node.js will attempt
 * to remove the destination.
 *
 * @param src A path to the source file.
 * @param dest A path to the destination file.
 */
export function copyFile(src: PathLike, dest: PathLike, callback: NoParamCallback): void;

/**
 * Asynchronously copies src to dest.
 *
 * By default, dest is overwritten if it already exists.
 * No arguments other than a possible exception are given to the callback function.
 * Node.js makes no guarantees about the atomicity of the copy operation.
 * If an error occurs after the destination file has been opened for writing, Node.js will attempt
 * to remove the destination.
 *
 * @param src A path to the source file.
 * @param dest A path to the destination file.
 * @param flags An integer that specifies the behavior of the copy operation. The only supported flag is fs.constants.COPYFILE_EXCL, which causes the copy operation to fail if dest already exists.
 */
export function copyFile(src: PathLike, dest: PathLike, flags: number, callback: NoParamCallback): void;

/**
 * Asynchronously copies src to dest.
 *
 * By default, dest is overwritten if it already exists.
 * No arguments other than a possible exception are given to the callback function.
 * Node.js makes no guarantees about the atomicity of the copy operation.
 * If an error occurs after the destination file has been opened for writing, Node.js will attempt
 * to remove the destination.
 *
 * @param src A path to the source file.
 * @param dest A path to the destination file.
 * @param flags An optional integer that specifies the behavior of the copy operation.
 * The only supported flag is fs.constants.COPYFILE_EXCL,
 * which causes the copy operation to fail if dest already exists.
 */
export function copyFile(src: PathLike, dest: PathLike, flags?: number): Promise<void>;

/**
 * Write an array of ArrayBufferViews to the file specified by fd using writev().
 *
 * Position is the offset from the beginning of the file where this data should be written.
 * It is unsafe to use fs.writev() multiple times on the same file without waiting for the callback. For this scenario, use fs.createWriteStream().
 * On Linux, positional writes don't work when the file is opened in append mode.
 * The kernel ignores the position argument and always appends the data to the end of the file.
 */
export function writev(
    fd: number,
    buffers: NodeJS.ArrayBufferView[],
    cb: (err: NodeJS.ErrnoException | null, bytesWritten: number, buffers: NodeJS.ArrayBufferView[]) => void
): void;

export function writev(
    fd: number,
    buffers: NodeJS.ArrayBufferView[],
    position: number,
    cb: (err: NodeJS.ErrnoException | null, bytesWritten: number, buffers: NodeJS.ArrayBufferView[]) => void
): void;

export function writev(
    fd: number,
    buffers: NodeJS.ArrayBufferView[],
    position?: number
): Promise<[number, NodeJS.ArrayBufferView[]]>;
