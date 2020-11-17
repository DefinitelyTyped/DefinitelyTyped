// Type definitions for non-npm package Node.js 14.14
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 David Junger <https://github.com/touffy>
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
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Marcin Kopacz <https://github.com/chyzwar>
//                 Trivikram Kamat <https://github.com/trivikr>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 Junxiao Shi <https://github.com/yoursunny>
//                 Ilia Baryshnikov <https://github.com/qwelias>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Surasak Chaisurin <https://github.com/Ryan-Willpower>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Anna Henningsen <https://github.com/addaleax>
//                 Jason Kwok <https://github.com/JasonHK>
//                 Victor Perin <https://github.com/victorperin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Buffer, BufferEncoding } from 'buffer';
import 'node/events';
import * as events from 'events';
import { BaseEncodingOptions } from 'fs';
import * as net from 'net';
import { Signals } from 'process';
import { Pipe, Readable, Stream, Writable } from 'stream';

export {};

export type Serializable = string | object | number | boolean;
export type SendHandle = net.Socket | net.Server;

export interface ChildProcess extends events.EventEmitter {
    stdin: Writable | null;
    stdout: Readable | null;
    stderr: Readable | null;
    readonly channel?: Pipe | null;
    readonly stdio: [
        Writable | null, // stdin
        Readable | null, // stdout
        Readable | null, // stderr
        Readable | Writable | null | undefined, // extra
        Readable | Writable | null | undefined // extra
    ];
    readonly killed: boolean;
    readonly pid: number;
    readonly connected: boolean;
    readonly exitCode: number | null;
    readonly signalCode: Signals | null;
    readonly spawnargs: string[];
    readonly spawnfile: string;
    kill(signal?: Signals | number): boolean;
    send(message: Serializable, callback?: (error: Error | null) => void): boolean;
    send(message: Serializable, sendHandle?: SendHandle, callback?: (error: Error | null) => void): boolean;
    send(message: Serializable, sendHandle?: SendHandle, options?: MessageOptions, callback?: (error: Error | null) => void): boolean;
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
    addListener(event: "close", listener: (code: number, signal: Signals) => void): this;
    addListener(event: "disconnect", listener: () => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: "exit", listener: (code: number | null, signal: Signals | null) => void): this;
    addListener(event: "message", listener: (message: Serializable, sendHandle: SendHandle) => void): this;

    emit(event: string | symbol, ...args: any[]): boolean;
    emit(event: "close", code: number, signal: Signals): boolean;
    emit(event: "disconnect"): boolean;
    emit(event: "error", err: Error): boolean;
    emit(event: "exit", code: number | null, signal: Signals | null): boolean;
    emit(event: "message", message: Serializable, sendHandle: SendHandle): boolean;

    on(event: string, listener: (...args: any[]) => void): this;
    on(event: "close", listener: (code: number, signal: Signals) => void): this;
    on(event: "disconnect", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "exit", listener: (code: number | null, signal: Signals | null) => void): this;
    on(event: "message", listener: (message: Serializable, sendHandle: SendHandle) => void): this;

    once(event: string, listener: (...args: any[]) => void): this;
    once(event: "close", listener: (code: number, signal: Signals) => void): this;
    once(event: "disconnect", listener: () => void): this;
    once(event: "error", listener: (err: Error) => void): this;
    once(event: "exit", listener: (code: number | null, signal: Signals | null) => void): this;
    once(event: "message", listener: (message: Serializable, sendHandle: SendHandle) => void): this;

    prependListener(event: string, listener: (...args: any[]) => void): this;
    prependListener(event: "close", listener: (code: number, signal: Signals) => void): this;
    prependListener(event: "disconnect", listener: () => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: "exit", listener: (code: number | null, signal: Signals | null) => void): this;
    prependListener(event: "message", listener: (message: Serializable, sendHandle: SendHandle) => void): this;

    prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    prependOnceListener(event: "close", listener: (code: number, signal: Signals) => void): this;
    prependOnceListener(event: "disconnect", listener: () => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: "exit", listener: (code: number | null, signal: Signals | null) => void): this;
    prependOnceListener(event: "message", listener: (message: Serializable, sendHandle: SendHandle) => void): this;
}

// return this object when stdio option is undefined or not specified
export interface ChildProcessWithoutNullStreams extends ChildProcess {
    stdin: Writable;
    stdout: Readable;
    stderr: Readable;
    readonly stdio: [
        Writable, // stdin
        Readable, // stdout
        Readable, // stderr
        Readable | Writable | null | undefined, // extra, no modification
        Readable | Writable | null | undefined // extra, no modification
    ];
}

// return this object when stdio option is a tuple of 3
export interface ChildProcessByStdio<
    I extends null | Writable,
    O extends null | Readable,
    E extends null | Readable,
> extends ChildProcess {
    stdin: I;
    stdout: O;
    stderr: E;
    readonly stdio: [
        I,
        O,
        E,
        Readable | Writable | null | undefined, // extra, no modification
        Readable | Writable | null | undefined // extra, no modification
    ];
}

export interface MessageOptions {
    keepOpen?: boolean;
}

export type StdioOptions = "pipe" | "ignore" | "inherit" | Array<("pipe" | "ipc" | "ignore" | "inherit" | Stream | number | null | undefined)>;

export type SerializationType = 'json' | 'advanced';

export interface MessagingOptions {
    /**
     * Specify the kind of serialization used for sending messages between processes.
     * @default 'json'
     */
    serialization?: SerializationType;
}

export interface ProcessEnvOptions {
    uid?: number;
    gid?: number;
    cwd?: string;
    env?: { [key: string]: string | undefined };
}

export interface CommonOptions extends ProcessEnvOptions {
    /**
     * @default true
     */
    windowsHide?: boolean;
    /**
     * @default 0
     */
    timeout?: number;
}

export interface CommonSpawnOptions extends CommonOptions, MessagingOptions {
    argv0?: string;
    stdio?: StdioOptions;
    shell?: boolean | string;
    windowsVerbatimArguments?: boolean;
}

export interface SpawnOptions extends CommonSpawnOptions {
    detached?: boolean;
}

export interface SpawnOptionsWithoutStdio extends SpawnOptions {
    stdio?: 'pipe' | Array<null | undefined | 'pipe'>;
}

export type StdioNull = 'inherit' | 'ignore' | Stream;
export type StdioPipe = undefined | null | 'pipe';

export interface SpawnOptionsWithStdioTuple<
    Stdin extends StdioNull | StdioPipe,
    Stdout extends StdioNull | StdioPipe,
    Stderr extends StdioNull | StdioPipe,
> extends SpawnOptions {
    stdio: [Stdin, Stdout, Stderr];
}

// overloads of spawn without 'args'
export function spawn(command: string, options?: SpawnOptionsWithoutStdio): ChildProcessWithoutNullStreams;

export function spawn(
    command: string,
    options: SpawnOptionsWithStdioTuple<StdioPipe, StdioPipe, StdioPipe>,
): ChildProcessByStdio<Writable, Readable, Readable>;
export function spawn(
    command: string,
    options: SpawnOptionsWithStdioTuple<StdioPipe, StdioPipe, StdioNull>,
): ChildProcessByStdio<Writable, Readable, null>;
export function spawn(
    command: string,
    options: SpawnOptionsWithStdioTuple<StdioPipe, StdioNull, StdioPipe>,
): ChildProcessByStdio<Writable, null, Readable>;
export function spawn(
    command: string,
    options: SpawnOptionsWithStdioTuple<StdioNull, StdioPipe, StdioPipe>,
): ChildProcessByStdio<null, Readable, Readable>;
export function spawn(
    command: string,
    options: SpawnOptionsWithStdioTuple<StdioPipe, StdioNull, StdioNull>,
): ChildProcessByStdio<Writable, null, null>;
export function spawn(
    command: string,
    options: SpawnOptionsWithStdioTuple<StdioNull, StdioPipe, StdioNull>,
): ChildProcessByStdio<null, Readable, null>;
export function spawn(
    command: string,
    options: SpawnOptionsWithStdioTuple<StdioNull, StdioNull, StdioPipe>,
): ChildProcessByStdio<null, null, Readable>;
export function spawn(
    command: string,
    options: SpawnOptionsWithStdioTuple<StdioNull, StdioNull, StdioNull>,
): ChildProcessByStdio<null, null, null>;

export function spawn(command: string, options: SpawnOptions): ChildProcess;

// overloads of spawn with 'args'
export function spawn(command: string, args?: ReadonlyArray<string>, options?: SpawnOptionsWithoutStdio): ChildProcessWithoutNullStreams;

export function spawn(
    command: string,
    args: ReadonlyArray<string>,
    options: SpawnOptionsWithStdioTuple<StdioPipe, StdioPipe, StdioPipe>,
): ChildProcessByStdio<Writable, Readable, Readable>;
export function spawn(
    command: string,
    args: ReadonlyArray<string>,
    options: SpawnOptionsWithStdioTuple<StdioPipe, StdioPipe, StdioNull>,
): ChildProcessByStdio<Writable, Readable, null>;
export function spawn(
    command: string,
    args: ReadonlyArray<string>,
    options: SpawnOptionsWithStdioTuple<StdioPipe, StdioNull, StdioPipe>,
): ChildProcessByStdio<Writable, null, Readable>;
export function spawn(
    command: string,
    args: ReadonlyArray<string>,
    options: SpawnOptionsWithStdioTuple<StdioNull, StdioPipe, StdioPipe>,
): ChildProcessByStdio<null, Readable, Readable>;
export function spawn(
    command: string,
    args: ReadonlyArray<string>,
    options: SpawnOptionsWithStdioTuple<StdioPipe, StdioNull, StdioNull>,
): ChildProcessByStdio<Writable, null, null>;
export function spawn(
    command: string,
    args: ReadonlyArray<string>,
    options: SpawnOptionsWithStdioTuple<StdioNull, StdioPipe, StdioNull>,
): ChildProcessByStdio<null, Readable, null>;
export function spawn(
    command: string,
    args: ReadonlyArray<string>,
    options: SpawnOptionsWithStdioTuple<StdioNull, StdioNull, StdioPipe>,
): ChildProcessByStdio<null, null, Readable>;
export function spawn(
    command: string,
    args: ReadonlyArray<string>,
    options: SpawnOptionsWithStdioTuple<StdioNull, StdioNull, StdioNull>,
): ChildProcessByStdio<null, null, null>;

export function spawn(command: string, args: ReadonlyArray<string>, options: SpawnOptions): ChildProcess;

export interface ExecOptions extends CommonOptions {
    shell?: string;
    maxBuffer?: number;
    killSignal?: Signals | number;
}

export interface ExecOptionsWithStringEncoding extends ExecOptions {
    encoding: BufferEncoding;
}

export interface ExecOptionsWithBufferEncoding extends ExecOptions {
    encoding: BufferEncoding | null; // specify `null`.
}

export interface ExecException extends Error {
    cmd?: string;
    killed?: boolean;
    code?: number;
    signal?: Signals;
}

// no `options` definitely means stdout/stderr are `string`.
export function exec(command: string, callback?: (error: ExecException | null, stdout: string, stderr: string) => void): ChildProcess;

// `options` with `"buffer"` or `null` for `encoding` means stdout/stderr are definitely `Buffer`.
export function exec(command: string, options: { encoding: "buffer" | null } & ExecOptions, callback?: (error: ExecException | null, stdout: Buffer, stderr: Buffer) => void): ChildProcess;

// `options` with well known `encoding` means stdout/stderr are definitely `string`.
export function exec(command: string, options: { encoding: BufferEncoding } & ExecOptions, callback?: (error: ExecException | null, stdout: string, stderr: string) => void): ChildProcess;

// `options` with an `encoding` whose type is `string` means stdout/stderr could either be `Buffer` or `string`.
// There is no guarantee the `encoding` is unknown as `string` is a superset of `BufferEncoding`.
export function exec(
    command: string,
    options: { encoding: BufferEncoding } & ExecOptions,
    callback?: (error: ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void,
): ChildProcess;

// `options` without an `encoding` means stdout/stderr are definitely `string`.
export function exec(command: string, options: ExecOptions, callback?: (error: ExecException | null, stdout: string, stderr: string) => void): ChildProcess;

// fallback if nothing else matches. Worst case is always `string | Buffer`.
export function exec(
    command: string,
    options: (BaseEncodingOptions & ExecOptions) | undefined | null,
    callback?: (error: ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void,
): ChildProcess;

export interface PromiseWithChild<T> extends Promise<T> {
    child: ChildProcess;
}

// NOTE: This namespace provides design-time support for util.promisify. Exported members do not exist at runtime.
export namespace exec {
    function __promisify__(command: string): PromiseWithChild<{ stdout: string, stderr: string }>;
    function __promisify__(command: string, options: { encoding: "buffer" | null } & ExecOptions): PromiseWithChild<{ stdout: Buffer, stderr: Buffer }>;
    function __promisify__(command: string, options: { encoding: BufferEncoding } & ExecOptions): PromiseWithChild<{ stdout: string, stderr: string }>;
    function __promisify__(command: string, options: ExecOptions): PromiseWithChild<{ stdout: string, stderr: string }>;
    function __promisify__(command: string, options?: (BaseEncodingOptions & ExecOptions) | null): PromiseWithChild<{ stdout: string | Buffer, stderr: string | Buffer }>;
}

export interface ExecFileOptions extends CommonOptions {
    maxBuffer?: number;
    killSignal?: Signals | number;
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
    encoding: BufferEncoding;
}

export function execFile(file: string): ChildProcess;
export function execFile(file: string, options: (BaseEncodingOptions & ExecFileOptions) | undefined | null): ChildProcess;
export function execFile(file: string, args?: ReadonlyArray<string> | null): ChildProcess;
export function execFile(file: string, args: ReadonlyArray<string> | undefined | null, options: (BaseEncodingOptions & ExecFileOptions) | undefined | null): ChildProcess;

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
    options: (BaseEncodingOptions & ExecFileOptions) | undefined | null,
    callback: ((error: ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void) | undefined | null,
): ChildProcess;
export function execFile(
    file: string,
    args: ReadonlyArray<string> | undefined | null,
    options: (BaseEncodingOptions & ExecFileOptions) | undefined | null,
    callback: ((error: ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void) | undefined | null,
): ChildProcess;

// NOTE: This namespace provides design-time support for util.promisify. Exported members do not exist at runtime.
export namespace execFile {
    function __promisify__(file: string): PromiseWithChild<{ stdout: string, stderr: string }>;
    function __promisify__(file: string, args: ReadonlyArray<string> | undefined | null): PromiseWithChild<{ stdout: string, stderr: string }>;
    function __promisify__(file: string, options: ExecFileOptionsWithBufferEncoding): PromiseWithChild<{ stdout: Buffer, stderr: Buffer }>;
    function __promisify__(file: string, args: ReadonlyArray<string> | undefined | null, options: ExecFileOptionsWithBufferEncoding): PromiseWithChild<{ stdout: Buffer, stderr: Buffer }>;
    function __promisify__(file: string, options: ExecFileOptionsWithStringEncoding): PromiseWithChild<{ stdout: string, stderr: string }>;
    function __promisify__(file: string, args: ReadonlyArray<string> | undefined | null, options: ExecFileOptionsWithStringEncoding): PromiseWithChild<{ stdout: string, stderr: string }>;
    function __promisify__(file: string, options: ExecFileOptionsWithOtherEncoding): PromiseWithChild<{ stdout: string | Buffer, stderr: string | Buffer }>;
    function __promisify__(
        file: string,
        args: ReadonlyArray<string> | undefined | null,
        options: ExecFileOptionsWithOtherEncoding,
    ): PromiseWithChild<{ stdout: string | Buffer, stderr: string | Buffer }>;
    function __promisify__(file: string, options: ExecFileOptions): PromiseWithChild<{ stdout: string, stderr: string }>;
    function __promisify__(file: string, args: ReadonlyArray<string> | undefined | null, options: ExecFileOptions): PromiseWithChild<{ stdout: string, stderr: string }>;
    function __promisify__(file: string, options: (BaseEncodingOptions & ExecFileOptions) | undefined | null): PromiseWithChild<{ stdout: string | Buffer, stderr: string | Buffer }>;
    function __promisify__(
        file: string,
        args: ReadonlyArray<string> | undefined | null,
        options: (BaseEncodingOptions & ExecFileOptions) | undefined | null,
    ): PromiseWithChild<{ stdout: string | Buffer, stderr: string | Buffer }>;
}

export interface ForkOptions extends ProcessEnvOptions, MessagingOptions {
    execPath?: string;
    execArgv?: string[];
    silent?: boolean;
    stdio?: StdioOptions;
    detached?: boolean;
    windowsVerbatimArguments?: boolean;
}
export function fork(modulePath: string, options?: ForkOptions): ChildProcess;
export function fork(modulePath: string, args?: ReadonlyArray<string>, options?: ForkOptions): ChildProcess;

export interface SpawnSyncOptions extends CommonSpawnOptions {
    input?: string | ArrayBufferView;
    killSignal?: Signals | number;
    maxBuffer?: number;
    encoding?: BufferEncoding | 'buffer' | null;
}
export interface SpawnSyncOptionsWithStringEncoding extends SpawnSyncOptions {
    encoding: BufferEncoding;
}
export interface SpawnSyncOptionsWithBufferEncoding extends SpawnSyncOptions {
    encoding?: 'buffer' | null;
}
export interface SpawnSyncReturns<T> {
    pid: number;
    output: string[];
    stdout: T;
    stderr: T;
    status: number | null;
    signal: Signals | null;
    error?: Error;
}
export function spawnSync(command: string): SpawnSyncReturns<Buffer>;
export function spawnSync(command: string, options?: SpawnSyncOptionsWithStringEncoding): SpawnSyncReturns<string>;
export function spawnSync(command: string, options?: SpawnSyncOptionsWithBufferEncoding): SpawnSyncReturns<Buffer>;
export function spawnSync(command: string, options?: SpawnSyncOptions): SpawnSyncReturns<Buffer>;
export function spawnSync(command: string, args?: ReadonlyArray<string>, options?: SpawnSyncOptionsWithStringEncoding): SpawnSyncReturns<string>;
export function spawnSync(command: string, args?: ReadonlyArray<string>, options?: SpawnSyncOptionsWithBufferEncoding): SpawnSyncReturns<Buffer>;
export function spawnSync(command: string, args?: ReadonlyArray<string>, options?: SpawnSyncOptions): SpawnSyncReturns<Buffer>;

export interface ExecSyncOptions extends CommonOptions {
    input?: string | Uint8Array;
    stdio?: StdioOptions;
    shell?: string;
    killSignal?: Signals | number;
    maxBuffer?: number;
    encoding?: BufferEncoding | 'buffer' | null;
}
export interface ExecSyncOptionsWithStringEncoding extends ExecSyncOptions {
    encoding: BufferEncoding;
}
export interface ExecSyncOptionsWithBufferEncoding extends ExecSyncOptions {
    encoding?: 'buffer' | null;
}
export function execSync(command: string): Buffer;
export function execSync(command: string, options?: ExecSyncOptionsWithStringEncoding): string;
export function execSync(command: string, options?: ExecSyncOptionsWithBufferEncoding): Buffer;
export function execSync(command: string, options?: ExecSyncOptions): Buffer;

export interface ExecFileSyncOptions extends CommonOptions {
    input?: string | ArrayBufferView;
    stdio?: StdioOptions;
    killSignal?: Signals | number;
    maxBuffer?: number;
    encoding?: BufferEncoding;
    shell?: boolean | string;
}
export interface ExecFileSyncOptionsWithStringEncoding extends ExecFileSyncOptions {
    encoding: BufferEncoding;
}
export interface ExecFileSyncOptionsWithBufferEncoding extends ExecFileSyncOptions {
    encoding: BufferEncoding; // specify `null`.
}
export function execFileSync(command: string): Buffer;
export function execFileSync(command: string, options?: ExecFileSyncOptionsWithStringEncoding): string;
export function execFileSync(command: string, options?: ExecFileSyncOptionsWithBufferEncoding): Buffer;
export function execFileSync(command: string, options?: ExecFileSyncOptions): Buffer;
export function execFileSync(command: string, args?: ReadonlyArray<string>, options?: ExecFileSyncOptionsWithStringEncoding): string;
export function execFileSync(command: string, args?: ReadonlyArray<string>, options?: ExecFileSyncOptionsWithBufferEncoding): Buffer;
export function execFileSync(command: string, args?: ReadonlyArray<string>, options?: ExecFileSyncOptions): Buffer;
