// Type definitions for mz
// Project: https://github.com/normalize/mz
// Definitions by: Thomas Hickman <https://github.com/ThomasHickman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Modified from the node.js definitions https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/node/node.d.ts

/// <reference types="bluebird" />
/// <reference types="node" />

declare module "mz/fs" {
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
    }

    export interface ReadStream extends stream.Readable {
        close(): void;
    }
    export interface WriteStream extends stream.Writable {
        close(): void;
        bytesWritten: number;
    }

    /**
     * Asynchronous rename.
     * @param oldPath
     * @param newPath
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function rename(oldPath: string, newPath: string): Promise<void>;

    /**
     * Asynchronous rename.
     * @param oldPath
     * @param newPath
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function rename(oldPath: string, newPath: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /**
     * Synchronous rename
     * @param oldPath
     * @param newPath
     */
    export function renameSync(oldPath: string, newPath: string): void;
    export function truncate(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function truncate(path: string, len: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function truncateSync(path: string, len?: number): void;
    export function ftruncate(fd: number): Promise<void>;
    export function ftruncate(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function ftruncate(fd: number, len: number): Promise<void>;
    export function ftruncate(fd: number, len: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function ftruncateSync(fd: number, len?: number): void;
    export function chown(path: string, uid: number, gid: number): Promise<void>;
    export function chown(path: string, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function chownSync(path: string, uid: number, gid: number): void;
    export function fchown(fd: number, uid: number, gid: number): Promise<void>;
    export function fchown(fd: number, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fchownSync(fd: number, uid: number, gid: number): void;
    export function lchown(path: string, uid: number, gid: number): Promise<void>;
    export function lchown(path: string, uid: number, gid: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function lchownSync(path: string, uid: number, gid: number): void;
    export function chmod(path: string, mode: number): Promise<void>;
    export function chmod(path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function chmod(path: string, mode: string): Promise<void>;
    export function chmod(path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function chmodSync(path: string, mode: number): void;
    export function chmodSync(path: string, mode: string): void;
    export function fchmod(fd: number, mode: number): Promise<void>;
    export function fchmod(fd: number, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fchmod(fd: number, mode: string): Promise<void>;
    export function fchmod(fd: number, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fchmodSync(fd: number, mode: number): void;
    export function fchmodSync(fd: number, mode: string): void;
    export function lchmod(path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function lchmod(path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function lchmodSync(path: string, mode: number): void;
    export function lchmodSync(path: string, mode: string): void;
    export function stat(path: string): Promise<Stats>;
    export function stat(path: string, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
    export function lstat(path: string): Promise<Stats>;
    export function lstat(path: string, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
    export function fstat(fd: number): Promise<Stats>;
    export function fstat(fd: number, callback?: (err: NodeJS.ErrnoException, stats: Stats) => any): void;
    export function statSync(path: string): Stats;
    export function lstatSync(path: string): Stats;
    export function fstatSync(fd: number): Stats;
    export function link(srcpath: string, dstpath: string): Promise<void>;
    export function link(srcpath: string, dstpath: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function linkSync(srcpath: string, dstpath: string): void;
    export function symlink(srcpath: string, dstpath: string, type?: string): Promise<void>;
    export function symlink(srcpath: string, dstpath: string, type?: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function symlinkSync(srcpath: string, dstpath: string, type?: string): void;
    export function readlink(path: string): Promise<string>;
    export function readlink(path: string, callback?: (err: NodeJS.ErrnoException, linkString: string) => any): void;
    export function readlinkSync(path: string): string;
    export function realpath(path: string): Promise<string>;
    export function realpath(path: string, callback?: (err: NodeJS.ErrnoException, resolvedPath: string) => any): void;
    export function realpath(path: string, cache: {[path: string]: string}): Promise<string>;
    export function realpath(path: string, cache: {[path: string]: string}, callback: (err: NodeJS.ErrnoException, resolvedPath: string) =>any): void;
    export function realpathSync(path: string, cache?: { [path: string]: string }): string;
    /*
     * Asynchronous unlink - deletes the file specified in {path}
     *
     * @param path
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function unlink(path: string): Promise<void>;
    /*
     * Asynchronous unlink - deletes the file specified in {path}
     *
     * @param path
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function unlink(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Synchronous unlink - deletes the file specified in {path}
     *
     * @param path
     */
    export function unlinkSync(path: string): void;
    /*
     * Asynchronous rmdir - removes the directory specified in {path}
     *
     * @param path
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function rmdir(path: string): Promise<void>;
    /*
     * Asynchronous rmdir - removes the directory specified in {path}
     *
     * @param path
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function rmdir(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Synchronous rmdir - removes the directory specified in {path}
     *
     * @param path
     */
    export function rmdirSync(path: string): void;
    /*
     * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdir(path: string): Promise<void>;
    /*
     * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdir(path: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param mode
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdir(path: string, mode: number): Promise<void>;
    /*
     * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param mode
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdir(path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param mode
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdir(path: string, mode: string): Promise<void>;
    /*
     * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param mode
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdir(path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void): void;
    /*
     * Synchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param mode
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdirSync(path: string, mode?: number): void;
    /*
     * Synchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
     *
     * @param path
     * @param mode
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function mkdirSync(path: string, mode?: string): void;
    export function readdir(path: string): Promise<string[]>;
    export function readdir(path: string, callback?: (err: NodeJS.ErrnoException, files: string[]) => void): void;
    export function readdirSync(path: string): string[];
    export function close(fd: number): Promise<void>;
    export function close(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function closeSync(fd: number): void;
    export function open(path: string, flags: string): Promise<number>;
    export function open(path: string, flags: string, callback?: (err: NodeJS.ErrnoException, fd: number) => any): void;
    export function open(path: string, flags: string, mode: number): Promise<number>;
    export function open(path: string, flags: string, mode: number, callback?: (err: NodeJS.ErrnoException, fd: number) => any): void;
    export function open(path: string, flags: string, mode: string): Promise<number>;
    export function open(path: string, flags: string, mode: string, callback?: (err: NodeJS.ErrnoException, fd: number) => any): void;
    export function openSync(path: string, flags: string, mode?: number): number;
    export function openSync(path: string, flags: string, mode?: string): number;
    export function utimes(path: string, atime: number, mtime: number): Promise<void>;
    export function utimes(path: string, atime: number, mtime: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function utimes(path: string, atime: Date, mtime: Date): Promise<void>;
    export function utimes(path: string, atime: Date, mtime: Date, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function utimesSync(path: string, atime: number, mtime: number): void;
    export function utimesSync(path: string, atime: Date, mtime: Date): void;
    export function futimes(fd: number, atime: number, mtime: number): Promise<void>;
    export function futimes(fd: number, atime: number, mtime: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function futimes(fd: number, atime: Date, mtime: Date): Promise<void>;
    export function futimes(fd: number, atime: Date, mtime: Date, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function futimesSync(fd: number, atime: number, mtime: number): void;
    export function futimesSync(fd: number, atime: Date, mtime: Date): void;
    export function fsync(fd: number): Promise<void>;
    export function fsync(fd: number, callback?: (err?: NodeJS.ErrnoException) => void): void;
    export function fsyncSync(fd: number): void;
    export function write(fd: number, buffer: Buffer, offset: number, length: number, position: number): Promise<[number, Buffer]>;
    export function write(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void): void;
    export function write(fd: number, buffer: Buffer, offset: number, length: number): Promise<[number, Buffer]>;
    export function write(fd: number, buffer: Buffer, offset: number, length: number, callback?: (err: NodeJS.ErrnoException, written: number, buffer: Buffer) => void): void;
    export function write(fd: number, data: any): Promise<[number, string]>;
    export function write(fd: number, data: any, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
    export function write(fd: number, data: any, offset: number): Promise<[number, string]>;
    export function write(fd: number, data: any, offset: number, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
    export function write(fd: number, data: any, offset: number, encoding: string): Promise<[number, string]>;
    export function write(fd: number, data: any, offset: number, encoding: string, callback?: (err: NodeJS.ErrnoException, written: number, str: string) => void): void;
    export function writeSync(fd: number, buffer: Buffer, offset: number, length: number, position: number): number;
    export function read(fd: number, buffer: Buffer, offset: number, length: number, position: number): Promise<[number, Buffer]>;
    export function read(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: NodeJS.ErrnoException, bytesRead: number, buffer: Buffer) => void): void;
    export function readSync(fd: number, buffer: Buffer, offset: number, length: number, position: number): number;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param encoding
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, encoding: string): Promise<string>;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param encoding
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, encoding: string, callback: (err: NodeJS.ErrnoException, data: string) => void): void;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFile returns a string; otherwise it returns a Buffer.
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, options: { encoding: string; flag?: string; }): Promise<string>;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFile returns a string; otherwise it returns a Buffer.
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, options: { encoding: string; flag?: string; }, callback: (err: NodeJS.ErrnoException, data: string) => void): void;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFile returns a string; otherwise it returns a Buffer.
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, options: { flag?: string; }): Promise<Buffer>;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFile returns a string; otherwise it returns a Buffer.
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, options: { flag?: string; }, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string): Promise<Buffer>;
    /*
     * Asynchronous readFile - Asynchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
     */
    export function readFile(filename: string, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
    /*
     * Synchronous readFile - Synchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param encoding
     */
    export function readFileSync(filename: string, encoding: string): string;
    /*
     * Synchronous readFile - Synchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFileSync returns a string; otherwise it returns a Buffer.
     */
    export function readFileSync(filename: string, options: { encoding: string; flag?: string; }): string;
    /*
     * Synchronous readFile - Synchronously reads the entire contents of a file.
     *
     * @param fileName
     * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFileSync returns a string; otherwise it returns a Buffer.
     */
    export function readFileSync(filename: string, options?: { flag?: string; }): Buffer;
    export function writeFile(filename: string, data: any): Promise<void>;
    export function writeFile(filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function writeFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }): Promise<void>;
    export function writeFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function writeFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }): Promise<void>;
    export function writeFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
    export function writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
    export function appendFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }): Promise<void>;
    export function appendFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function appendFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }): Promise<void>;
    export function appendFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function appendFile(filename: string, data: any): Promise<void>;
    export function appendFile(filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void): void;
    export function appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
    export function appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
    export function watchFile(filename: string, listener: (curr: Stats, prev: Stats) => void): void;
    export function watchFile(filename: string, options: { persistent?: boolean; interval?: number; }, listener: (curr: Stats, prev: Stats) => void): void;
    export function unwatchFile(filename: string, listener?: (curr: Stats, prev: Stats) => void): void;
    export function watch(filename: string, listener?: (event: string, filename: string) => any): FSWatcher;
    export function watch(filename: string, options: { persistent?: boolean; }, listener?: (event: string, filename: string) => any): FSWatcher;
    export function exists(path: string): Promise<boolean>;
    export function exists(path: string, callback: (err:any, exists: boolean) => void): void;
    export function existsSync(path: string): boolean;
    /** Constant for fs.access(). File is visible to the calling process. */
    export var F_OK: number;
    /** Constant for fs.access(). File can be read by the calling process. */
    export var R_OK: number;
    /** Constant for fs.access(). File can be written by the calling process. */
    export var W_OK: number;
    /** Constant for fs.access(). File can be executed by the calling process. */
    export var X_OK: number;
    /** Tests a user's permissions for the file specified by path. */
    export function access(path: string): Promise<void>;
    /** Tests a user's permissions for the file specified by path. */
    export function access(path: string, callback: (err: NodeJS.ErrnoException) => void): void;
    export function access(path: string, mode: number): Promise<void>;
    export function access(path: string, mode: number, callback: (err: NodeJS.ErrnoException) => void): void;
    /** Synchronous version of fs.access. This throws if any accessibility checks fail, and does nothing otherwise. */
    export function accessSync(path: string, mode ?: number): void;
    export function createReadStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        fd?: number;
        mode?: number;
        autoClose?: boolean;
    }): ReadStream;
    export function createWriteStream(path: string, options?: {
        flags?: string;
        encoding?: string;
        fd?: number;
        mode?: number;
    }): WriteStream;
}

declare module "mz/dns" {
    export function lookup(domain: string, family: number): Promise<[string, number]>;
    export function lookup(domain: string, family: number, callback: (err: Error, address: string, family: number) =>void ): string;
    export function lookup(domain: string): Promise<[string, number]>;
    export function lookup(domain: string, callback: (err: Error, address: string, family: number) =>void ): string;
    export function resolve(domain: string, rrtype: string): Promise<string[]>;
    export function resolve(domain: string, rrtype: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolve(domain: string): Promise<string[]>;
    export function resolve(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolve4(domain: string): Promise<string[]>;
    export function resolve4(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolve6(domain: string): Promise<string[]>;
    export function resolve6(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveMx(domain: string): Promise<string[]>;
    export function resolveMx(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveTxt(domain: string): Promise<string[]>;
    export function resolveTxt(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveSrv(domain: string): Promise<string[]>;
    export function resolveSrv(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveNs(domain: string): Promise<string[]>;
    export function resolveNs(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function resolveCname(domain: string): Promise<string[]>;
    export function resolveCname(domain: string, callback: (err: Error, addresses: string[]) =>void ): string[];
    export function reverse(ip: string): Promise<string[]>;
    export function reverse(ip: string, callback: (err: Error, domains: string[]) =>void ): string[];
}

declare module "mz/crypto" {
    export interface CredentialDetails {
        pfx: string;
        key: string;
        passphrase: string;
        cert: string;
        ca: any;    //string | string array
        crl: any;   //string | string array
        ciphers: string;
    }
    export interface Credentials { context?: any; }
    export function createCredentials(details: CredentialDetails): Credentials;
    export function createHash(algorithm: string): Hash;
    export function createHmac(algorithm: string, key: string): Hmac;
    export function createHmac(algorithm: string, key: Buffer): Hmac;
    export interface Hash {
        update(data: any, input_encoding?: string): Hash;
        digest(encoding: 'buffer'): Buffer;
        digest(encoding: string): any;
        digest(): Buffer;
    }
    export interface Hmac extends NodeJS.ReadWriteStream {
        update(data: any, input_encoding?: string): Hmac;
        digest(encoding: 'buffer'): Buffer;
        digest(encoding: string): any;
        digest(): Buffer;
    }
    export function createCipher(algorithm: string, password: any): Cipher;
    export function createCipheriv(algorithm: string, key: any, iv: any): Cipher;
    export interface Cipher {
        update(data: Buffer): Buffer;
        update(data: string, input_encoding?: string, output_encoding?: string): string;
        final(): Buffer;
        final(output_encoding: string): string;
        setAutoPadding(auto_padding: boolean): void;
    }
    export function createDecipher(algorithm: string, password: any): Decipher;
    export function createDecipheriv(algorithm: string, key: any, iv: any): Decipher;
    export interface Decipher {
        update(data: Buffer): Buffer;
        update(data: string, input_encoding?: string, output_encoding?: string): string;
        final(): Buffer;
        final(output_encoding: string): string;
        setAutoPadding(auto_padding: boolean): void;
    }
    export function createSign(algorithm: string): Signer;
    export interface Signer extends NodeJS.WritableStream {
        update(data: any): void;
        sign(private_key: string, output_format: string): string;
    }
    export function createVerify(algorith: string): Verify;
    export interface Verify extends NodeJS.WritableStream {
        update(data: any): void;
        verify(object: string, signature: string, signature_format?: string): boolean;
    }
    export function createDiffieHellman(prime_length: number): DiffieHellman;
    export function createDiffieHellman(prime: number, encoding?: string): DiffieHellman;
    export interface DiffieHellman {
        generateKeys(encoding?: string): string;
        computeSecret(other_public_key: string, input_encoding?: string, output_encoding?: string): string;
        getPrime(encoding?: string): string;
        getGenerator(encoding: string): string;
        getPublicKey(encoding?: string): string;
        getPrivateKey(encoding?: string): string;
        setPublicKey(public_key: string, encoding?: string): void;
        setPrivateKey(public_key: string, encoding?: string): void;
    }
    export function getDiffieHellman(group_name: string): DiffieHellman;
    export function pbkdf2(password: string|Buffer, salt: string|Buffer, iterations: number, keylen: number): Promise<Buffer>;
    export function pbkdf2(password: string|Buffer, salt: string|Buffer, iterations: number, keylen: number, callback: (err: Error, derivedKey: Buffer) => any): void;
    export function pbkdf2(password: string|Buffer, salt: string|Buffer, iterations: number, keylen: number, digest: string): Promise<Buffer>;
    export function pbkdf2(password: string|Buffer, salt: string|Buffer, iterations: number, keylen: number, digest: string, callback: (err: Error, derivedKey: Buffer) => any): void;
    export function pbkdf2Sync(password: string|Buffer, salt: string|Buffer, iterations: number, keylen: number) : Buffer;
    export function pbkdf2Sync(password: string|Buffer, salt: string|Buffer, iterations: number, keylen: number, digest: string) : Buffer;
    //export function randomBytes(size: number): Buffer;
    export function randomBytes(size: number): Promise<Buffer>;
    //export function randomBytes(size: number): Buffer;
    export function randomBytes(size: number, callback: (err: Error, buf: Buffer) =>void ): void;
    //export function pseudoRandomBytes(size: number): Buffer;
    export function pseudoRandomBytes(size: number): Promise<Buffer>;
    //export function pseudoRandomBytes(size: number): Buffer;
    export function pseudoRandomBytes(size: number, callback: (err: Error, buf: Buffer) =>void ): void;
    export interface RsaPublicKey {
        key: string;
        padding?: any;
    }
    export interface RsaPrivateKey {
        key: string;
        passphrase?: string,
        padding?: any;
    }
    export function publicEncrypt(public_key: string|RsaPublicKey, buffer: Buffer): Buffer
    export function privateDecrypt(private_key: string|RsaPrivateKey, buffer: Buffer): Buffer
}

declare module "mz/child_process" {
    import * as events from "events";
    import * as stream from "stream";

    export interface ChildProcess extends events.EventEmitter {
        stdin:  stream.Writable;
        stdout: stream.Readable;
        stderr: stream.Readable;
        stdio: (stream.Readable|stream.Writable)[];
        pid: number;
        kill(signal?: string): void;
        send(message: any, sendHandle?: any): void;
        disconnect(): void;
        unref(): void;
    }

    export function spawn(command: string, args?: string[], options?: {
        cwd?: string;
        stdio?: any;
        custom?: any;
        env?: any;
        detached?: boolean;
    }): ChildProcess;
    export function exec(command: string, options: {
        cwd?: string;
        stdio?: any;
        customFds?: any;
        env?: any;
        encoding?: string;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
    }): Promise<[Buffer, Buffer]>;
    export function exec(command: string, options: {
        cwd?: string;
        stdio?: any;
        customFds?: any;
        env?: any;
        encoding?: string;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
    }, callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function exec(command: string): Promise<[Buffer, Buffer]>;
    export function exec(command: string, callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function execFile(file: string): Promise<[Buffer, Buffer]>;
    export function execFile(file: string,
        callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function execFile(file: string, args?: string[]): Promise<[Buffer, Buffer]>;
    export function execFile(file: string, args?: string[],
        callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function execFile(file: string, args?: string[], options?: {
        cwd?: string;
        stdio?: any;
        customFds?: any;
        env?: any;
        encoding?: string;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
    }): Promise<[Buffer, Buffer]>;
    export function execFile(file: string, args?: string[], options?: {
        cwd?: string;
        stdio?: any;
        customFds?: any;
        env?: any;
        encoding?: string;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
    }, callback?: (error: Error, stdout: Buffer, stderr: Buffer) =>void ): ChildProcess;
    export function fork(modulePath: string, args?: string[], options?: {
        cwd?: string;
        env?: any;
        execPath?: string;
        execArgv?: string[];
        silent?: boolean;
        uid?: number;
        gid?: number;
    }): ChildProcess;
    export function spawnSync(command: string, args?: string[], options?: {
        cwd?: string;
        input?: string | Buffer;
        stdio?: any;
        env?: any;
        uid?: number;
        gid?: number;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
        encoding?: string;
    }): {
        pid: number;
        output: string[];
        stdout: string | Buffer;
        stderr: string | Buffer;
        status: number;
        signal: string;
        error: Error;
    };
    export function execSync(command: string, options?: {
        cwd?: string;
        input?: string|Buffer;
        stdio?: any;
        env?: any;
        uid?: number;
        gid?: number;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
        encoding?: string;
    }): string | Buffer;
    export function execFileSync(command: string, args?: string[], options?: {
        cwd?: string;
        input?: string|Buffer;
        stdio?: any;
        env?: any;
        uid?: number;
        gid?: number;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
        encoding?: string;
    }): string | Buffer;
}


declare module "mz/zlib" {
    import * as stream from "stream";
    export interface ZlibOptions { chunkSize?: number; windowBits?: number; level?: number; memLevel?: number; strategy?: number; dictionary?: any; }

    export interface Gzip extends stream.Transform { }
    export interface Gunzip extends stream.Transform { }
    export interface Deflate extends stream.Transform { }
    export interface Inflate extends stream.Transform { }
    export interface DeflateRaw extends stream.Transform { }
    export interface InflateRaw extends stream.Transform { }
    export interface Unzip extends stream.Transform { }

    export function createGzip(options?: ZlibOptions): Gzip;
    export function createGunzip(options?: ZlibOptions): Gunzip;
    export function createDeflate(options?: ZlibOptions): Deflate;
    export function createInflate(options?: ZlibOptions): Inflate;
    export function createDeflateRaw(options?: ZlibOptions): DeflateRaw;
    export function createInflateRaw(options?: ZlibOptions): InflateRaw;
    export function createUnzip(options?: ZlibOptions): Unzip;

    export function deflate(buf: Buffer): Promise<any>;

    export function deflate(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function deflateSync(buf: Buffer, options?: ZlibOptions): any;
    export function deflateRaw(buf: Buffer): Promise<any>;
    export function deflateRaw(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function deflateRawSync(buf: Buffer, options?: ZlibOptions): any;
    export function gzip(buf: Buffer): Promise<any>;
    export function gzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function gzipSync(buf: Buffer, options?: ZlibOptions): any;
    export function gunzip(buf: Buffer): Promise<any>;
    export function gunzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function gunzipSync(buf: Buffer, options?: ZlibOptions): any;
    export function inflate(buf: Buffer): Promise<any>;
    export function inflate(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function inflateSync(buf: Buffer, options?: ZlibOptions): any;
    export function inflateRaw(buf: Buffer): Promise<any>;
    export function inflateRaw(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function inflateRawSync(buf: Buffer, options?: ZlibOptions): any;
    export function unzip(buf: Buffer): Promise<any>;
    export function unzip(buf: Buffer, callback: (error: Error, result: any) =>void ): void;
    export function unzipSync(buf: Buffer, options?: ZlibOptions): any;

    // Constants
    export var Z_NO_FLUSH: number;
    export var Z_PARTIAL_FLUSH: number;
    export var Z_SYNC_FLUSH: number;
    export var Z_FULL_FLUSH: number;
    export var Z_FINISH: number;
    export var Z_BLOCK: number;
    export var Z_TREES: number;
    export var Z_OK: number;
    export var Z_STREAM_END: number;
    export var Z_NEED_DICT: number;
    export var Z_ERRNO: number;
    export var Z_STREAM_ERROR: number;
    export var Z_DATA_ERROR: number;
    export var Z_MEM_ERROR: number;
    export var Z_BUF_ERROR: number;
    export var Z_VERSION_ERROR: number;
    export var Z_NO_COMPRESSION: number;
    export var Z_BEST_SPEED: number;
    export var Z_BEST_COMPRESSION: number;
    export var Z_DEFAULT_COMPRESSION: number;
    export var Z_FILTERED: number;
    export var Z_HUFFMAN_ONLY: number;
    export var Z_RLE: number;
    export var Z_FIXED: number;
    export var Z_DEFAULT_STRATEGY: number;
    export var Z_BINARY: number;
    export var Z_TEXT: number;
    export var Z_ASCII: number;
    export var Z_UNKNOWN: number;
    export var Z_DEFLATED: number;
    export var Z_NULL: number;
}

declare module "mz/readline" {
    import * as events from "events";
    import * as stream from "stream";

    export interface Key {
        sequence?: string;
        name?: string;
        ctrl?: boolean;
        meta?: boolean;
        shift?: boolean;
    }

    export interface ReadLine extends events.EventEmitter {
        setPrompt(prompt: string): void;
        prompt(preserveCursor?: boolean): void;
        question(query: string, callback: (answer: string) => void): void;
        question(query: string): Promise<string>;
        pause(): ReadLine;
        resume(): ReadLine;
        close(): void;
        write(data: string|Buffer, key?: Key): void;
    }

    export interface Completer {
        (line: string): Promise<[string[], string]>;
        (line: string): [string[], string];
        (line: string, callback: (err: any, result: [string[], string]) => void): any;
        (line: string, callback: (err: any, result: CompleterResult) => void): any;
    }

    export interface CompleterResult {
        completions: string[];
        line: string;
    }

    export interface ReadLineOptions {
        input: NodeJS.ReadableStream;
        output?: NodeJS.WritableStream;
        completer?: Completer;
        terminal?: boolean;
        historySize?: number;
    }

    export function createInterface(input: NodeJS.ReadableStream, output?: NodeJS.WritableStream, completer?: Completer, terminal?: boolean): ReadLine;
    export function createInterface(options: ReadLineOptions): ReadLine;

    export function cursorTo(stream: NodeJS.WritableStream, x: number, y: number): void;
    export function moveCursor(stream: NodeJS.WritableStream, dx: number|string, dy: number|string): void;
    export function clearLine(stream: NodeJS.WritableStream, dir: number): void;
    export function clearScreenDown(stream: NodeJS.WritableStream): void;
}


declare module "mz"{
    export import child_process = require("mz/child_process");
    export import crypto = require("mz/child_process")
    export import dns = require("mz/dns")
    export import fs = require("mz/fs")
    export import readline = require("mz/readline")
    export import zlib = require("mz/zlib")
}
