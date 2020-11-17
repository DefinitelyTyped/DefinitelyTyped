// Type definitions for Node.js 10.17
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Zane Hannan AU <https://github.com/ZaneHannanAU>
//                 Jeremie Rodriguez <https://github.com/jeremiergz>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Buffer, BufferEncoding } from 'buffer';
import 'node/events';
import * as events from 'events';
import * as net from 'net';
import * as stream from 'stream';

export {};

export interface ChildProcess extends events.EventEmitter {
    stdin: stream.Writable;
    stdout: stream.Readable;
    stderr: stream.Readable;
    readonly channel?: stream.Pipe | null;
    stdio: [stream.Writable, stream.Readable, stream.Readable];
    killed: boolean;
    pid: number;
    readonly exitCode: number | null;
    readonly signalCode: number | null;
    kill(signal?: string): void;
    send(message: any, callback?: (error: Error) => void): boolean;
    send(message: any, sendHandle?: net.Socket | net.Server, callback?: (error: Error) => void): boolean;
    send(message: any, sendHandle?: net.Socket | net.Server, options?: MessageOptions, callback?: (error: Error) => void): boolean;
    connected: boolean;
    disconnect(): void;
    unref(): void;
    ref(): void;

    /**
     * events.EventEmitter
     * 1. close
     * 2. disconnect
     * 3. error
     * 4. exit
     * 5. message
     */

    addListener(event: string, listener: (...args: any[]) => void): this;
    addListener(event: "close", listener: (code: number, signal: string) => void): this;
    addListener(event: "disconnect", listener: () => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: "exit", listener: (code: number | null, signal: string | null) => void): this;
    addListener(event: "message", listener: (message: any, sendHandle: net.Socket | net.Server) => void): this;

    emit(event: string | symbol, ...args: any[]): boolean;
    emit(event: "close", code: number, signal: string): boolean;
    emit(event: "disconnect"): boolean;
    emit(event: "error", err: Error): boolean;
    emit(event: "exit", code: number | null, signal: string | null): boolean;
    emit(event: "message", message: any, sendHandle: net.Socket | net.Server): boolean;

    on(event: string, listener: (...args: any[]) => void): this;
    on(event: "close", listener: (code: number, signal: string) => void): this;
    on(event: "disconnect", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "exit", listener: (code: number | null, signal: string | null) => void): this;
    on(event: "message", listener: (message: any, sendHandle: net.Socket | net.Server) => void): this;

    once(event: string, listener: (...args: any[]) => void): this;
    once(event: "close", listener: (code: number, signal: string) => void): this;
    once(event: "disconnect", listener: () => void): this;
    once(event: "error", listener: (err: Error) => void): this;
    once(event: "exit", listener: (code: number | null, signal: string | null) => void): this;
    once(event: "message", listener: (message: any, sendHandle: net.Socket | net.Server) => void): this;

    prependListener(event: string, listener: (...args: any[]) => void): this;
    prependListener(event: "close", listener: (code: number, signal: string) => void): this;
    prependListener(event: "disconnect", listener: () => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: "exit", listener: (code: number | null, signal: string | null) => void): this;
    prependListener(event: "message", listener: (message: any, sendHandle: net.Socket | net.Server) => void): this;

    prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    prependOnceListener(event: "close", listener: (code: number, signal: string) => void): this;
    prependOnceListener(event: "disconnect", listener: () => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: "exit", listener: (code: number | null, signal: string | null) => void): this;
    prependOnceListener(event: "message", listener: (message: any, sendHandle: net.Socket | net.Server) => void): this;
}

export interface MessageOptions {
    keepOpen?: boolean;
}

export type StdioOptions = "pipe" | "ignore" | "inherit" | Array<("pipe" | "ipc" | "ignore" | "inherit" | stream.Stream | number | null | undefined)>;

export interface SpawnOptions {
    cwd?: string;
    env?: { [key: string]: string | undefined };
    argv0?: string;
    stdio?: StdioOptions;
    detached?: boolean;
    uid?: number;
    gid?: number;
    shell?: boolean | string;
    windowsVerbatimArguments?: boolean;
    windowsHide?: boolean;
}

export function spawn(command: string, options?: SpawnOptions): ChildProcess;
export function spawn(command: string, args?: ReadonlyArray<string>, options?: SpawnOptions): ChildProcess;

export interface ExecOptions {
    cwd?: string;
    env?: { [key: string]: string | undefined };
    shell?: string;
    timeout?: number;
    maxBuffer?: number;
    killSignal?: string;
    uid?: number;
    gid?: number;
    windowsHide?: boolean;
}

export interface ExecOptionsWithStringEncoding extends ExecOptions {
    encoding: BufferEncoding;
}

export interface ExecOptionsWithBufferEncoding extends ExecOptions {
    encoding: string | null; // specify `null`.
}

export interface ExecException extends Error {
    cmd?: string;
    killed?: boolean;
    code?: number;
    signal?: string;
}

// no `options` definitely means stdout/stderr are `string`.
export function exec(command: string, callback?: (error: ExecException | null, stdout: string, stderr: string) => void): ChildProcess;

// `options` with `"buffer"` or `null` for `encoding` means stdout/stderr are definitely `Buffer`.
export function exec(command: string, options: { encoding: "buffer" | null } & ExecOptions, callback?: (error: ExecException | null, stdout: Buffer, stderr: Buffer) => void): ChildProcess;

// `options` with well known `encoding` means stdout/stderr are definitely `string`.
export function exec(command: string, options: { encoding: BufferEncoding } & ExecOptions, callback?: (error: ExecException | null, stdout: string, stderr: string) => void): ChildProcess;

// `options` with an `encoding` whose type is `string` means stdout/stderr could either be `Buffer` or `string`.
// There is no guarantee the `encoding` is unknown as `string` is a superset of `BufferEncoding`.
export function exec(command: string, options: { encoding: string } & ExecOptions, callback?: (error: ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void): ChildProcess;

// `options` without an `encoding` means stdout/stderr are definitely `string`.
export function exec(command: string, options: ExecOptions, callback?: (error: ExecException | null, stdout: string, stderr: string) => void): ChildProcess;

// fallback if nothing else matches. Worst case is always `string | Buffer`.
export function exec(
    command: string,
    options: ({ encoding?: string | null } & ExecOptions) | undefined | null,
    callback?: (error: ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void,
): ChildProcess;

// NOTE: This namespace provides design-time support for util.promisify. Exported members do not exist at runtime.
export namespace exec {
    function __promisify__(command: string): Promise<{ stdout: string, stderr: string }>;
    function __promisify__(command: string, options: { encoding: "buffer" | null } & ExecOptions): Promise<{ stdout: Buffer, stderr: Buffer }>;
    function __promisify__(command: string, options: { encoding: BufferEncoding } & ExecOptions): Promise<{ stdout: string, stderr: string }>;
    function __promisify__(command: string, options: ExecOptions): Promise<{ stdout: string, stderr: string }>;
    function __promisify__(command: string, options?: ({ encoding?: string | null } & ExecOptions) | null): Promise<{ stdout: string | Buffer, stderr: string | Buffer }>;
}

export interface ExecFileOptions {
    cwd?: string;
    env?: { [key: string]: string | undefined };
    timeout?: number;
    maxBuffer?: number;
    killSignal?: string;
    uid?: number;
    gid?: number;
    windowsHide?: boolean;
    windowsVerbatimArguments?: boolean;
    shell?: boolean | string;
}
export interface ExecFileOptionsWithStringEncoding extends ExecFileOptions {
    encoding: BufferEncoding;
}
export interface ExecFileOptionsWithBufferEncoding extends ExecFileOptions {
    encoding: 'buffer' | null;
}
export interface ExecFileOptionsWithOtherEncoding extends ExecFileOptions {
    encoding: string;
}

export function execFile(file: string): ChildProcess;
export function execFile(file: string, options: ({ encoding?: string | null } & ExecFileOptions) | undefined | null): ChildProcess;
export function execFile(file: string, args?: ReadonlyArray<string> | null): ChildProcess;
export function execFile(file: string, args: ReadonlyArray<string> | undefined | null, options: ({ encoding?: string | null } & ExecFileOptions) | undefined | null): ChildProcess;

// no `options` definitely means stdout/stderr are `string`.
export function execFile(file: string, callback: (error: ExecException | null, stdout: string, stderr: string) => void): ChildProcess;
export function execFile(file: string, args: ReadonlyArray<string> | undefined | null, callback: (error: ExecException | null, stdout: string, stderr: string) => void): ChildProcess;

// `options` with `"buffer"` or `null` for `encoding` means stdout/stderr are definitely `Buffer`.
export function execFile(file: string, options: ExecFileOptionsWithBufferEncoding, callback: (error: ExecException | null, stdout: Buffer, stderr: Buffer) => void): ChildProcess;
export function execFile(
    file: string,
    args: ReadonlyArray<string> | undefined | null,
    options: ExecFileOptionsWithBufferEncoding,
    callback: (error: ExecException | null, stdout: Buffer, stderr: Buffer) => void,
): ChildProcess;

// `options` with well known `encoding` means stdout/stderr are definitely `string`.
export function execFile(file: string, options: ExecFileOptionsWithStringEncoding, callback: (error: ExecException | null, stdout: string, stderr: string) => void): ChildProcess;
export function execFile(
    file: string,
    args: ReadonlyArray<string> | undefined | null,
    options: ExecFileOptionsWithStringEncoding,
    callback: (error: ExecException | null, stdout: string, stderr: string) => void,
): ChildProcess;

// `options` with an `encoding` whose type is `string` means stdout/stderr could either be `Buffer` or `string`.
// There is no guarantee the `encoding` is unknown as `string` is a superset of `BufferEncoding`.
export function execFile(
    file: string,
    options: ExecFileOptionsWithOtherEncoding,
    callback: (error: ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void,
): ChildProcess;
export function execFile(
    file: string,
    args: ReadonlyArray<string> | undefined | null,
    options: ExecFileOptionsWithOtherEncoding,
    callback: (error: ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void,
): ChildProcess;

// `options` without an `encoding` means stdout/stderr are definitely `string`.
export function execFile(file: string, options: ExecFileOptions, callback: (error: ExecException | null, stdout: string, stderr: string) => void): ChildProcess;
export function execFile(
    file: string,
    args: ReadonlyArray<string> | undefined | null,
    options: ExecFileOptions,
    callback: (error: ExecException | null, stdout: string, stderr: string) => void
): ChildProcess;

// fallback if nothing else matches. Worst case is always `string | Buffer`.
export function execFile(
    file: string,
    options: ({ encoding?: string | null } & ExecFileOptions) | undefined | null,
    callback: ((error: ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void) | undefined | null,
): ChildProcess;
export function execFile(
    file: string,
    args: ReadonlyArray<string> | undefined | null,
    options: ({ encoding?: string | null } & ExecFileOptions) | undefined | null,
    callback: ((error: ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void) | undefined | null,
): ChildProcess;

// NOTE: This namespace provides design-time support for util.promisify. Exported members do not exist at runtime.
export namespace execFile {
    function __promisify__(file: string): Promise<{ stdout: string, stderr: string }>;
    function __promisify__(file: string, args: ReadonlyArray<string> | undefined | null): Promise<{ stdout: string, stderr: string }>;
    function __promisify__(file: string, options: ExecFileOptionsWithBufferEncoding): Promise<{ stdout: Buffer, stderr: Buffer }>;
    function __promisify__(file: string, args: ReadonlyArray<string> | undefined | null, options: ExecFileOptionsWithBufferEncoding): Promise<{ stdout: Buffer, stderr: Buffer }>;
    function __promisify__(file: string, options: ExecFileOptionsWithStringEncoding): Promise<{ stdout: string, stderr: string }>;
    function __promisify__(file: string, args: ReadonlyArray<string> | undefined | null, options: ExecFileOptionsWithStringEncoding): Promise<{ stdout: string, stderr: string }>;
    function __promisify__(file: string, options: ExecFileOptionsWithOtherEncoding): Promise<{ stdout: string | Buffer, stderr: string | Buffer }>;
    function __promisify__(file: string, args: ReadonlyArray<string> | undefined | null, options: ExecFileOptionsWithOtherEncoding): Promise<{ stdout: string | Buffer, stderr: string | Buffer }>;
    function __promisify__(file: string, options: ExecFileOptions): Promise<{ stdout: string, stderr: string }>;
    function __promisify__(file: string, args: ReadonlyArray<string> | undefined | null, options: ExecFileOptions): Promise<{ stdout: string, stderr: string }>;
    function __promisify__(file: string, options: ({ encoding?: string | null } & ExecFileOptions) | undefined | null): Promise<{ stdout: string | Buffer, stderr: string | Buffer }>;
    function __promisify__(
        file: string,
        args: ReadonlyArray<string> | undefined | null,
        options: ({ encoding?: string | null } & ExecFileOptions) | undefined | null,
    ): Promise<{ stdout: string | Buffer, stderr: string | Buffer }>;
}

export interface ForkOptions {
    cwd?: string;
    env?: { [key: string]: string | undefined };
    execPath?: string;
    execArgv?: string[];
    silent?: boolean;
    stdio?: StdioOptions;
    detached?: boolean;
    windowsVerbatimArguments?: boolean;
    uid?: number;
    gid?: number;
}
export function fork(modulePath: string, options?: ForkOptions): ChildProcess;
export function fork(modulePath: string, args?: ReadonlyArray<string>, options?: ForkOptions): ChildProcess;

export interface SpawnSyncOptions {
    argv0?: string; // Not specified in the docs
    cwd?: string;
    input?: string | Buffer | ArrayBufferView;
    stdio?: StdioOptions;
    env?: { [key: string]: string | undefined };
    uid?: number;
    gid?: number;
    timeout?: number;
    killSignal?: string | number;
    maxBuffer?: number;
    encoding?: string;
    shell?: boolean | string;
    windowsVerbatimArguments?: boolean;
    windowsHide?: boolean;
}
export interface SpawnSyncOptionsWithStringEncoding extends SpawnSyncOptions {
    encoding: BufferEncoding;
}
export interface SpawnSyncOptionsWithBufferEncoding extends SpawnSyncOptions {
    encoding: string; // specify `null`.
}
export interface SpawnSyncReturns<T> {
    pid: number;
    output: string[];
    stdout: T;
    stderr: T;
    status: number | null;
    signal: string | null;
    error?: Error;
}
export function spawnSync(command: string): SpawnSyncReturns<Buffer>;
export function spawnSync(command: string, options?: SpawnSyncOptionsWithStringEncoding): SpawnSyncReturns<string>;
export function spawnSync(command: string, options?: SpawnSyncOptionsWithBufferEncoding): SpawnSyncReturns<Buffer>;
export function spawnSync(command: string, options?: SpawnSyncOptions): SpawnSyncReturns<Buffer>;
export function spawnSync(command: string, args?: ReadonlyArray<string>, options?: SpawnSyncOptionsWithStringEncoding): SpawnSyncReturns<string>;
export function spawnSync(command: string, args?: ReadonlyArray<string>, options?: SpawnSyncOptionsWithBufferEncoding): SpawnSyncReturns<Buffer>;
export function spawnSync(command: string, args?: ReadonlyArray<string>, options?: SpawnSyncOptions): SpawnSyncReturns<Buffer>;

export interface ExecSyncOptions {
    cwd?: string;
    input?: string | Buffer | Uint8Array;
    stdio?: StdioOptions;
    env?: { [key: string]: string | undefined };
    shell?: string;
    uid?: number;
    gid?: number;
    timeout?: number;
    killSignal?: string | number;
    maxBuffer?: number;
    encoding?: string;
    windowsHide?: boolean;
}
export interface ExecSyncOptionsWithStringEncoding extends ExecSyncOptions {
    encoding: BufferEncoding;
}
export interface ExecSyncOptionsWithBufferEncoding extends ExecSyncOptions {
    encoding: string; // specify `null`.
}
export function execSync(command: string): Buffer;
export function execSync(command: string, options?: ExecSyncOptionsWithStringEncoding): string;
export function execSync(command: string, options?: ExecSyncOptionsWithBufferEncoding): Buffer;
export function execSync(command: string, options?: ExecSyncOptions): Buffer;

export interface ExecFileSyncOptions {
    cwd?: string;
    input?: string | Buffer | ArrayBufferView;
    stdio?: StdioOptions;
    env?: { [key: string]: string | undefined };
    uid?: number;
    gid?: number;
    timeout?: number;
    killSignal?: string | number;
    maxBuffer?: number;
    encoding?: string;
    windowsHide?: boolean;
    shell?: boolean | string;
}
export interface ExecFileSyncOptionsWithStringEncoding extends ExecFileSyncOptions {
    encoding: BufferEncoding;
}
export interface ExecFileSyncOptionsWithBufferEncoding extends ExecFileSyncOptions {
    encoding: string; // specify `null`.
}
export function execFileSync(command: string): Buffer;
export function execFileSync(command: string, options?: ExecFileSyncOptionsWithStringEncoding): string;
export function execFileSync(command: string, options?: ExecFileSyncOptionsWithBufferEncoding): Buffer;
export function execFileSync(command: string, options?: ExecFileSyncOptions): Buffer;
export function execFileSync(command: string, args?: ReadonlyArray<string>, options?: ExecFileSyncOptionsWithStringEncoding): string;
export function execFileSync(command: string, args?: ReadonlyArray<string>, options?: ExecFileSyncOptionsWithBufferEncoding): Buffer;
export function execFileSync(command: string, args?: ReadonlyArray<string>, options?: ExecFileSyncOptions): Buffer;
