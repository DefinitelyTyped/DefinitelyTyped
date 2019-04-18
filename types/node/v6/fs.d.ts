declare module "fs" {
    import * as stream from "stream";
    import * as events from "events";

    interface Stats {
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
        birthtime: Date;
    }

    interface FSWatcher extends events.EventEmitter {
        close(): void;

        /**
         * events.EventEmitter
         *   1. change
         *   2. error
         */
        addListener(event: string, listener: Function): this;
        addListener(event: "change", listener: (eventType: string, filename: string | Buffer) => void): this;
        addListener(event: "error", listener: (error: Error) => void): this;

        on(event: string, listener: Function): this;
        on(event: "change", listener: (eventType: string, filename: string | Buffer) => void): this;
        on(event: "error", listener: (error: Error) => void): this;

        once(event: string, listener: Function): this;
        once(event: "change", listener: (eventType: string, filename: string | Buffer) => void): this;
        once(event: "error", listener: (error: Error) => void): this;

        prependListener(event: string, listener: Function): this;
        prependListener(event: "change", listener: (eventType: string, filename: string | Buffer) => void): this;
        prependListener(event: "error", listener: (error: Error) => void): this;

        prependOnceListener(event: string, listener: Function): this;
        prependOnceListener(event: "change", listener: (eventType: string, filename: string | Buffer) => void): this;
        prependOnceListener(event: "error", listener: (error: Error) => void): this;
    }

    export interface ReadStream extends stream.Readable {
        close(): void;
        destroy(): void;
        bytesRead: number;
        path: string | Buffer;

        /**
         * events.EventEmitter
         *   1. open
         *   2. close
         */
        addListener(event: string, listener: Function): this;
        addListener(event: "open", listener: (fd: number) => void): this;
        addListener(event: "close", listener: () => void): this;

        on(event: string, listener: Function): this;
        on(event: "open", listener: (fd: number) => void): this;
        on(event: "close", listener: () => void): this;

        once(event: string, listener: Function): this;
        once(event: "open", listener: (fd: number) => void): this;
        once(event: "close", listener: () => void): this;

        prependListener(event: string, listener: Function): this;
        prependListener(event: "open", listener: (fd: number) => void): this;
        prependListener(event: "close", listener: () => void): this;

        prependOnceListener(event: string, listener: Function): this;
        prependOnceListener(event: "open", listener: (fd: number) => void): this;
        prependOnceListener(event: "close", listener: () => void): this;
    }

    export interface WriteStream extends stream.Writable {
        close(): void;
        bytesWritten: number;
        path: string | Buffer;

        /**
         * events.EventEmitter
         *   1. open
         *   2. close
         */
        addListener(event: string, listener: Function): this;
        addListener(event: "open", listener: (fd: number) => void): this;
        addListener(event: "close", listener: () => void): this;

        on(event: string, listener: Function): this;
        on(event: "open", listener: (fd: number) => void): this;
        on(event: "close", listener: () => void): this;

        once(event: string, listener: Function): this;
        once(event: "open", listener: (fd: number) => void): this;
        once(event: "close", listener: () => void): this;

        prependListener(event: string, listener: Function): this;
        prependListener(event: "open", listener: (fd: number) => void): this;
        prependListener(event: "close", listener: () => void): this;

        prependOnceListener(event: string, listener: Function): this;
        prependOnceListener(event: "open", listener: (fd: number) => void): this;
        prependOnceListener(event: "close", listener: () => void): this;
    }

    /**
     * Asynchronous rename.
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function rename(oldPath: string, newPath: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /**
     * Synchronous rename
     */
    export function renameSync(oldPath: string, newPath: string): void;
    export function truncate(path: string | Buffer, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function truncate(path: string | Buffer, len: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function truncateSync(path: string | Buffer, len?: number): void;
    export function ftruncate(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function ftruncate(fd: number, len: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function ftruncateSync(fd: number, len?: number): void;
    export function chown(path: string | Buffer, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function chownSync(path: string | Buffer, uid: number, gid: number): void;
    export function fchown(fd: number, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fchownSync(fd: number, uid: number, gid: number): void;
    export function lchown(path: string | Buffer, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function lchownSync(path: string | Buffer, uid: number, gid: number): void;
    export function chmod(path: string | Buffer, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function chmod(path: string | Buffer, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function chmodSync(path: string | Buffer, mode: number): void;
    export function chmodSync(path: string | Buffer, mode: string): void;
    export function fchmod(fd: number, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fchmod(fd: number, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fchmodSync(fd: number, mode: number): void;
    export function fchmodSync(fd: number, mode: string): void;
    export function lchmod(path: string | Buffer, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function lchmod(path: string | Buffer, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function lchmodSync(path: string | Buffer, mode: number): void;
    export function lchmodSync(path: string | Buffer, mode: string): void;
    export function stat(path: string | Buffer, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
    export function lstat(path: string | Buffer, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
    export function fstat(fd: number, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
    export function statSync(path: string | Buffer): Stats;
    export function lstatSync(path: string | Buffer): Stats;
    export function fstatSync(fd: number): Stats;
    export function link(srcpath: string | Buffer, dstpath: string | Buffer, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function linkSync(srcpath: string | Buffer, dstpath: string | Buffer): void;
    export function symlink(srcpath: string | Buffer, dstpath: string | Buffer, type?: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function symlinkSync(srcpath: string | Buffer, dstpath: string | Buffer, type?: string): void;
    export function readlink(path: string | Buffer, callback?: (err: NodeJS.ErrnoException, linkString: string) => any): void;
    export function readlinkSync(path: string | Buffer): string;
    export function realpath(path: string | Buffer, callback?: (err: NodeJS.ErrnoException, resolvedPath: string) => any): void;
    export function realpath(path: string | Buffer, cache: { [path: string]: string }, callback: (err: NodeJS.ErrnoException, resolvedPath: string) => any): void;
    export function realpathSync(path: string | Buffer, cache?: { [path: string]: string }): string;
    /**
     * Asynchronous unlink - deletes the file specified in {path}
     *
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function unlink(path: string | Buffer, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /**
     * Synchronous unlink - deletes the file specified in {path}
     */
    export function unlinkSync(path: string | Buffer): void;
    /**
     * Asynchronous rmdir - removes the directory specified in {path}
     *
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function rmdir(path: string | Buffer, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /**
     * Synchronous rmdir - removes the directory specified in {path}
     */
    export function rmdirSync(path: string | Buffer): void;
    /**
     * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdir(path: string | Buffer, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /**
     * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdir(path: string | Buffer, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /**
     * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdir(path: string | Buffer, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /**
     * Synchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdirSync(path: string | Buffer, mode?: number): void;
    /**
     * Synchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdirSync(path: string | Buffer, mode?: string): void;
    /**
     * Asynchronous mkdtemp - Creates a unique temporary directory. Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
     *
     * @param callback The created folder path is passed as a string to the callback's second parameter.
     */
    export function mkdtemp(prefix: string, callback?: (err: NodeJS.ErrnoException, folder: string) => void): void;
    /**
     * Synchronous mkdtemp - Creates a unique temporary directory. Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
     *
     * @returns Returns the created folder path.
     */
    export function mkdtempSync(prefix: string): string;
    /**
     * Asynchronous readdir(3) - read a directory.
     * @param path A path to a file.
     * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
     */
    export function readdir(path: string | Buffer, options: { encoding: BufferEncoding | null } | BufferEncoding | undefined | null, callback: (err: NodeJS.ErrnoException, files: string[]) => void): void;
       /**
     * Asynchronous readdir(3) - read a directory.
     * @param path A path to a file.
     * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
     */
    export function readdir(path: string | Buffer, options: { encoding: "buffer" } | "buffer", callback: (err: NodeJS.ErrnoException, files: Buffer[]) => void): void;

    /**
     * Asynchronous readdir(3) - read a directory.
     * @param path A path to a file.
     * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
     */
    export function readdir(path: string | Buffer, options: { encoding?: string | null } | string | undefined | null, callback: (err: NodeJS.ErrnoException, files: string[] | Buffer[]) => void): void;

    /**
     * Asynchronous readdir(3) - read a directory.
     * @param path A path to a file.
     */
    export function readdir(path: string | Buffer, callback: (err: NodeJS.ErrnoException, files: string[]) => void): void;
        /**
     * Synchronous readdir(3) - read a directory.
     * @param path A path to a file.
     * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
     */
    export function readdirSync(path: string | Buffer, options?: { encoding: BufferEncoding | null } | BufferEncoding | null): string[];

    /**
     * Synchronous readdir(3) - read a directory.
     * @param path A path to a file.
     * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
     */
    export function readdirSync(path: string | Buffer, options: { encoding: "buffer" } | "buffer"): Buffer[];

    /**
     * Synchronous readdir(3) - read a directory.
     * @param path A path to a file.
     * @param options The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used.
     */
    export function readdirSync(path: string | Buffer, options?: { encoding?: string | null } | string | null): string[] | Buffer[];
    export function close(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function closeSync(fd: number): void;
    export function open(path: string | Buffer, flags: string | number, callback: (err: NodeJS.ErrnoException, fd: number) => void): void;
    export function open(path: string | Buffer, flags: string | number, mode: number, callback: (err: NodeJS.ErrnoException, fd: number) => void): void;
    export function openSync(path: string | Buffer, flags: string | number, mode?: number): number;
    export function utimes(path: string | Buffer, atime: number, mtime: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function utimes(path: string | Buffer, atime: Date, mtime: Date, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function utimesSync(path: string | Buffer, atime: number, mtime: number): void;
    export function utimesSync(path: string | Buffer, atime: Date, mtime: Date): void;
    export function futimes(fd: number, atime: number, mtime: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function futimes(fd: number, atime: Date, mtime: Date, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function futimesSync(fd: number, atime: number, mtime: number): void;
    export function futimesSync(fd: number, atime: Date, mtime: Date): void;
    export function fsync(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fsyncSync(fd: number): void;
    export function write(fd: number, buffer: Buffer, offset: number, length: number, position: number | null, callback?: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void): void;
    export function write(fd: number, buffer: Buffer, offset: number, length: number, callback?: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void): void;
    export function write(fd: number, data: any, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
    export function write(fd: number, data: any, offset: number, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
    export function write(fd: number, data: any, offset: number, encoding: string, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
    export function writeSync(fd: number, buffer: Buffer, offset: number, length: number, position?: number | null): number;
    export function writeSync(fd: number, data: any, position?: number | null, enconding?: string): number;
    export function read(fd: number, buffer: Buffer, offset: number, length: number, position: number | null, callback?: (err: NodeJS.ErrnoException, bytesRead: number, buffer: Buffer) => void): void;
    export function readSync(fd: number, buffer: Buffer, offset: number, length: number, position: number | null): number;
    /**
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, encoding: null, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
    export function readFile(filename: string, encoding: string, callback: (err: NodeJS.ErrnoException, data: string) => void): void;
    export function readFile(filename: string, encoding: string | null, callback: (err: NodeJS.ErrnoException, data: string | Buffer) => void): void;
    /**
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFile returns a string; otherwise it returns a Buffer.
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, options: { encoding: null; flag?: string; }, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
    export function readFile(filename: string, options: { encoding: string; flag?: string; }, callback: (err: NodeJS.ErrnoException, data: string) => void): void;
    export function readFile(filename: string, options: { encoding: string | null; flag?: string; }, callback: (err: NodeJS.ErrnoException, data: string | Buffer) => void): void;
    /**
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFile returns a string; otherwise it returns a Buffer.
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, options: { flag?: string; }, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
    /**
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
    /**
     * Synchronous readFile - Synchronously reads the entire contents of a file.
     */
    export function readFileSync(filename: string, encoding: null): Buffer;
    export function readFileSync(filename: string, encoding: string): string;
    export function readFileSync(filename: string, encoding: string | null): string | Buffer;
    /**
     * Synchronous readFile - Synchronously reads the entire contents of a file.
     *
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFileSync returns a string; otherwise it returns a Buffer.
     */
    export function readFileSync(filename: string, options: { encoding: null; flag?: string; }): Buffer;
    export function readFileSync(filename: string, options: { encoding: string; flag?: string; }): string;
    export function readFileSync(filename: string, options: { encoding: string | null; flag?: string; }): string | Buffer;
    /**
     * Synchronous readFile - Synchronously reads the entire contents of a file.
     *
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFileSync returns a string; otherwise it returns a Buffer.
     */
    export function readFileSync(filename: string, options?: { flag?: string; }): Buffer;
    export function writeFile(filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function writeFile(filename: string, data: any, encoding: string, callback: (err: NodeJS.ErrnoException) => void): void;
    export function writeFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function writeFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function writeFileSync(filename: string, data: any, encoding: string): void;
    export function writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
    export function writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
    export function appendFile(filename: string, data: any, encoding: string, callback: (err: NodeJS.ErrnoException) => void): void;
    export function appendFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function appendFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function appendFile(filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function appendFileSync(filename: string, data: any, encoding: string): void;
    export function appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
    export function appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
    export function watchFile(filename: string, listener: (curr: Stats, prev: Stats) => void): void;
    export function watchFile(filename: string, options: { persistent?: boolean; interval?: number; }, listener: (curr: Stats, prev: Stats) => void): void;
    export function unwatchFile(filename: string, listener?: (curr: Stats, prev: Stats) => void): void;
    export function watch(filename: string, listener?: (event: string, filename: string) => any): FSWatcher;
    export function watch(filename: string, encoding: string, listener?: (event: string, filename: string | Buffer) => any): FSWatcher;
    export function watch(filename: string, options: { persistent?: boolean; recursive?: boolean; encoding?: string }, listener?: (event: string, filename: string | Buffer) => any): FSWatcher;
    export function exists(path: string | Buffer, callback?: (exists: boolean) => void): void;
    export function existsSync(path: string | Buffer): boolean;

    export namespace constants {
        // File Access Constants

        /** Constant for fs.access(). File is visible to the calling process. */
        export const F_OK: number;

        /** Constant for fs.access(). File can be read by the calling process. */
        export const R_OK: number;

        /** Constant for fs.access(). File can be written by the calling process. */
        export const W_OK: number;

        /** Constant for fs.access(). File can be executed by the calling process. */
        export const X_OK: number;

        // File Open Constants

        /** Constant for fs.open(). Flag indicating to open a file for read-only access. */
        export const O_RDONLY: number;

        /** Constant for fs.open(). Flag indicating to open a file for write-only access. */
        export const O_WRONLY: number;

        /** Constant for fs.open(). Flag indicating to open a file for read-write access. */
        export const O_RDWR: number;

        /** Constant for fs.open(). Flag indicating to create the file if it does not already exist. */
        export const O_CREAT: number;

        /** Constant for fs.open(). Flag indicating that opening a file should fail if the O_CREAT flag is set and the file already exists. */
        export const O_EXCL: number;

        /** Constant for fs.open(). Flag indicating that if path identifies a terminal device, opening the path shall not cause that terminal to become the controlling terminal for the process (if the process does not already have one). */
        export const O_NOCTTY: number;

        /** Constant for fs.open(). Flag indicating that if the file exists and is a regular file, and the file is opened successfully for write access, its length shall be truncated to zero. */
        export const O_TRUNC: number;

        /** Constant for fs.open(). Flag indicating that data will be appended to the end of the file. */
        export const O_APPEND: number;

        /** Constant for fs.open(). Flag indicating that the open should fail if the path is not a directory. */
        export const O_DIRECTORY: number;

        /** Constant for fs.open(). Flag indicating reading accesses to the file system will no longer result in an update to the atime information associated with the file. This flag is available on Linux operating systems only. */
        export const O_NOATIME: number;

        /** Constant for fs.open(). Flag indicating that the open should fail if the path is a symbolic link. */
        export const O_NOFOLLOW: number;

        /** Constant for fs.open(). Flag indicating that the file is opened for synchronous I/O. */
        export const O_SYNC: number;

        /** Constant for fs.open(). Flag indicating to open the symbolic link itself rather than the resource it is pointing to. */
        export const O_SYMLINK: number;

        /** Constant for fs.open(). When set, an attempt will be made to minimize caching effects of file I/O. */
        export const O_DIRECT: number;

        /** Constant for fs.open(). Flag indicating to open the file in nonblocking mode when possible. */
        export const O_NONBLOCK: number;

        // File Type Constants

        /** Constant for fs.Stats mode property for determining a file's type. Bit mask used to extract the file type code. */
        export const S_IFMT: number;

        /** Constant for fs.Stats mode property for determining a file's type. File type constant for a regular file. */
        export const S_IFREG: number;

        /** Constant for fs.Stats mode property for determining a file's type. File type constant for a directory. */
        export const S_IFDIR: number;

        /** Constant for fs.Stats mode property for determining a file's type. File type constant for a character-oriented device file. */
        export const S_IFCHR: number;

        /** Constant for fs.Stats mode property for determining a file's type. File type constant for a block-oriented device file. */
        export const S_IFBLK: number;

        /** Constant for fs.Stats mode property for determining a file's type. File type constant for a FIFO/pipe. */
        export const S_IFIFO: number;

        /** Constant for fs.Stats mode property for determining a file's type. File type constant for a symbolic link. */
        export const S_IFLNK: number;

        /** Constant for fs.Stats mode property for determining a file's type. File type constant for a socket. */
        export const S_IFSOCK: number;

        // File Mode Constants

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by owner. */
        export const S_IRWXU: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by owner. */
        export const S_IRUSR: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by owner. */
        export const S_IWUSR: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by owner. */
        export const S_IXUSR: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by group. */
        export const S_IRWXG: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by group. */
        export const S_IRGRP: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by group. */
        export const S_IWGRP: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by group. */
        export const S_IXGRP: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by others. */
        export const S_IRWXO: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by others. */
        export const S_IROTH: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by others. */
        export const S_IWOTH: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by others. */
        export const S_IXOTH: number;
    }

    /** Tests a user's permissions for the file specified by path. */
    export function access(path: string | Buffer, callback: (err: NodeJS.ErrnoException) => void): void;
    export function access(path: string | Buffer, mode: number, callback: (err: NodeJS.ErrnoException) => void): void;
    /** Synchronous version of fs.access. This throws if any accessibility checks fail, and does nothing otherwise. */
    export function accessSync(path: string | Buffer, mode?: number): void;
    export function createReadStream(path: string | Buffer, options?: {
        flags?: string;
        encoding?: string;
        fd?: number;
        mode?: number;
        autoClose?: boolean;
        start?: number;
        end?: number;
        highWaterMark?: number;
    }): ReadStream;
    export function createWriteStream(path: string | Buffer, options?: {
        flags?: string;
        encoding?: string;
        fd?: number;
        mode?: number;
        autoClose?: boolean;
        start?: number;
    }): WriteStream;
    export function fdatasync(fd: number, callback: Function): void;
    export function fdatasyncSync(fd: number): void;
}
