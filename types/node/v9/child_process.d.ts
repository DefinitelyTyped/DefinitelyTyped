declare module "child_process" {
    import * as events from "events";
    import * as stream from "stream";
    import * as net from "net";

    export interface ChildProcess extends events.EventEmitter {
        stdin: stream.Writable;
        stdout: stream.Readable;
        stderr: stream.Readable;
        stdio: StdioStreams;
        killed: boolean;
        pid: number;
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
        addListener(event: "exit", listener: (code: number, signal: string) => void): this;
        addListener(event: "message", listener: (message: any, sendHandle: net.Socket | net.Server) => void): this;

        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: "close", code: number, signal: string): boolean;
        emit(event: "disconnect"): boolean;
        emit(event: "error", err: Error): boolean;
        emit(event: "exit", code: number, signal: string): boolean;
        emit(event: "message", message: any, sendHandle: net.Socket | net.Server): boolean;

        on(event: string, listener: (...args: any[]) => void): this;
        on(event: "close", listener: (code: number, signal: string) => void): this;
        on(event: "disconnect", listener: () => void): this;
        on(event: "error", listener: (err: Error) => void): this;
        on(event: "exit", listener: (code: number, signal: string) => void): this;
        on(event: "message", listener: (message: any, sendHandle: net.Socket | net.Server) => void): this;

        once(event: string, listener: (...args: any[]) => void): this;
        once(event: "close", listener: (code: number, signal: string) => void): this;
        once(event: "disconnect", listener: () => void): this;
        once(event: "error", listener: (err: Error) => void): this;
        once(event: "exit", listener: (code: number, signal: string) => void): this;
        once(event: "message", listener: (message: any, sendHandle: net.Socket | net.Server) => void): this;

        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: "close", listener: (code: number, signal: string) => void): this;
        prependListener(event: "disconnect", listener: () => void): this;
        prependListener(event: "error", listener: (err: Error) => void): this;
        prependListener(event: "exit", listener: (code: number, signal: string) => void): this;
        prependListener(event: "message", listener: (message: any, sendHandle: net.Socket | net.Server) => void): this;

        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: "close", listener: (code: number, signal: string) => void): this;
        prependOnceListener(event: "disconnect", listener: () => void): this;
        prependOnceListener(event: "error", listener: (err: Error) => void): this;
        prependOnceListener(event: "exit", listener: (code: number, signal: string) => void): this;
        prependOnceListener(event: "message", listener: (message: any, sendHandle: net.Socket | net.Server) => void): this;
    }

    export interface StdioStreams extends ReadonlyArray<stream.Readable|stream.Writable> {
        0: stream.Writable; // stdin
        1: stream.Readable; // stdout
        2: stream.Readable; // stderr
    }

    export interface MessageOptions {
        keepOpen?: boolean;
    }

    export interface SpawnOptions {
        cwd?: string;
        env?: any;
        stdio?: any;
        detached?: boolean;
        uid?: number;
        gid?: number;
        shell?: boolean | string;
        windowsVerbatimArguments?: boolean;
        windowsHide?: boolean;
    }

    export function spawn(command: string, args?: ReadonlyArray<string>, options?: SpawnOptions): ChildProcess;

    export interface ExecOptions {
        cwd?: string;
        env?: any;
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

    // no `options` definitely means stdout/stderr are `string`.
    export function exec(command: string, callback?: (error: Error | null, stdout: string, stderr: string) => void): ChildProcess;

    // `options` with `"buffer"` or `null` for `encoding` means stdout/stderr are definitely `Buffer`.
    export function exec(command: string, options: { encoding: "buffer" | null } & ExecOptions, callback?: (error: Error | null, stdout: Buffer, stderr: Buffer) => void): ChildProcess;

    // `options` with well known `encoding` means stdout/stderr are definitely `string`.
    export function exec(command: string, options: { encoding: BufferEncoding } & ExecOptions, callback?: (error: Error | null, stdout: string, stderr: string) => void): ChildProcess;

    // `options` with an `encoding` whose type is `string` means stdout/stderr could either be `Buffer` or `string`.
    // There is no guarantee the `encoding` is unknown as `string` is a superset of `BufferEncoding`.
    export function exec(command: string, options: { encoding: string } & ExecOptions, callback?: (error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void): ChildProcess;

    // `options` without an `encoding` means stdout/stderr are definitely `string`.
    export function exec(command: string, options: ExecOptions, callback?: (error: Error | null, stdout: string, stderr: string) => void): ChildProcess;

    // fallback if nothing else matches. Worst case is always `string | Buffer`.
    export function exec(command: string, options: ({ encoding?: string | null } & ExecOptions) | undefined | null, callback?: (error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void): ChildProcess;

    // NOTE: This namespace provides design-time support for util.promisify. Exported members do not exist at runtime.
    export namespace exec {
        export function __promisify__(command: string): Promise<{ stdout: string, stderr: string }>;
        export function __promisify__(command: string, options: { encoding: "buffer" | null } & ExecOptions): Promise<{ stdout: Buffer, stderr: Buffer }>;
        export function __promisify__(command: string, options: { encoding: BufferEncoding } & ExecOptions): Promise<{ stdout: string, stderr: string }>;
        export function __promisify__(command: string, options: ExecOptions): Promise<{ stdout: string, stderr: string }>;
        export function __promisify__(command: string, options?: ({ encoding?: string | null } & ExecOptions) | null): Promise<{ stdout: string | Buffer, stderr: string | Buffer }>;
    }

    export interface ExecFileOptions {
        cwd?: string;
        env?: any;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
        uid?: number;
        gid?: number;
        windowsHide?: boolean;
        windowsVerbatimArguments?: boolean;
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
    export function execFile(file: string, args: string[] | undefined | null): ChildProcess;
    export function execFile(file: string, args: string[] | undefined | null, options: ({ encoding?: string | null } & ExecFileOptions) | undefined | null): ChildProcess;

    // no `options` definitely means stdout/stderr are `string`.
    export function execFile(file: string, callback: (error: Error | null, stdout: string, stderr: string) => void): ChildProcess;
    export function execFile(file: string, args: string[] | undefined | null, callback: (error: Error | null, stdout: string, stderr: string) => void): ChildProcess;

    // `options` with `"buffer"` or `null` for `encoding` means stdout/stderr are definitely `Buffer`.
    export function execFile(file: string, options: ExecFileOptionsWithBufferEncoding, callback: (error: Error | null, stdout: Buffer, stderr: Buffer) => void): ChildProcess;
    export function execFile(file: string, args: string[] | undefined | null, options: ExecFileOptionsWithBufferEncoding, callback: (error: Error | null, stdout: Buffer, stderr: Buffer) => void): ChildProcess;

    // `options` with well known `encoding` means stdout/stderr are definitely `string`.
    export function execFile(file: string, options: ExecFileOptionsWithStringEncoding, callback: (error: Error | null, stdout: string, stderr: string) => void): ChildProcess;
    export function execFile(file: string, args: string[] | undefined | null, options: ExecFileOptionsWithStringEncoding, callback: (error: Error | null, stdout: string, stderr: string) => void): ChildProcess;

    // `options` with an `encoding` whose type is `string` means stdout/stderr could either be `Buffer` or `string`.
    // There is no guarantee the `encoding` is unknown as `string` is a superset of `BufferEncoding`.
    export function execFile(file: string, options: ExecFileOptionsWithOtherEncoding, callback: (error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void): ChildProcess;
    export function execFile(file: string, args: string[] | undefined | null, options: ExecFileOptionsWithOtherEncoding, callback: (error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void): ChildProcess;

    // `options` without an `encoding` means stdout/stderr are definitely `string`.
    export function execFile(file: string, options: ExecFileOptions, callback: (error: Error | null, stdout: string, stderr: string) => void): ChildProcess;
    export function execFile(file: string, args: string[] | undefined | null, options: ExecFileOptions, callback: (error: Error | null, stdout: string, stderr: string) => void): ChildProcess;

    // fallback if nothing else matches. Worst case is always `string | Buffer`.
    export function execFile(file: string, options: ({ encoding?: string | null } & ExecFileOptions) | undefined | null, callback: ((error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void) | undefined | null): ChildProcess;
    export function execFile(file: string, args: string[] | undefined | null, options: ({ encoding?: string | null } & ExecFileOptions) | undefined | null, callback: ((error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void) | undefined | null): ChildProcess;

    // NOTE: This namespace provides design-time support for util.promisify. Exported members do not exist at runtime.
    export namespace execFile {
        export function __promisify__(file: string): Promise<{ stdout: string, stderr: string }>;
        export function __promisify__(file: string, args: string[] | undefined | null): Promise<{ stdout: string, stderr: string }>;
        export function __promisify__(file: string, options: ExecFileOptionsWithBufferEncoding): Promise<{ stdout: Buffer, stderr: Buffer }>;
        export function __promisify__(file: string, args: string[] | undefined | null, options: ExecFileOptionsWithBufferEncoding): Promise<{ stdout: Buffer, stderr: Buffer }>;
        export function __promisify__(file: string, options: ExecFileOptionsWithStringEncoding): Promise<{ stdout: string, stderr: string }>;
        export function __promisify__(file: string, args: string[] | undefined | null, options: ExecFileOptionsWithStringEncoding): Promise<{ stdout: string, stderr: string }>;
        export function __promisify__(file: string, options: ExecFileOptionsWithOtherEncoding): Promise<{ stdout: string | Buffer, stderr: string | Buffer }>;
        export function __promisify__(file: string, args: string[] | undefined | null, options: ExecFileOptionsWithOtherEncoding): Promise<{ stdout: string | Buffer, stderr: string | Buffer }>;
        export function __promisify__(file: string, options: ExecFileOptions): Promise<{ stdout: string, stderr: string }>;
        export function __promisify__(file: string, args: string[] | undefined | null, options: ExecFileOptions): Promise<{ stdout: string, stderr: string }>;
        export function __promisify__(file: string, options: ({ encoding?: string | null } & ExecFileOptions) | undefined | null): Promise<{ stdout: string | Buffer, stderr: string | Buffer }>;
        export function __promisify__(file: string, args: string[] | undefined | null, options: ({ encoding?: string | null } & ExecFileOptions) | undefined | null): Promise<{ stdout: string | Buffer, stderr: string | Buffer }>;
    }

    export interface ForkOptions {
        cwd?: string;
        env?: any;
        execPath?: string;
        execArgv?: string[];
        silent?: boolean;
        stdio?: any[];
        detached?: boolean;
        uid?: number;
        gid?: number;
        windowsVerbatimArguments?: boolean;
    }
    export function fork(modulePath: string, args?: string[], options?: ForkOptions): ChildProcess;

    export interface SpawnSyncOptions {
        cwd?: string;
        input?: string | Buffer;
        stdio?: any;
        env?: any;
        uid?: number;
        gid?: number;
        timeout?: number;
        killSignal?: string;
        maxBuffer?: number;
        encoding?: string;
        shell?: boolean | string;
        windowsHide?: boolean;
        windowsVerbatimArguments?: boolean;
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
        status: number;
        signal: string;
        error: Error;
    }
    export function spawnSync(command: string): SpawnSyncReturns<Buffer>;
    export function spawnSync(command: string, options?: SpawnSyncOptionsWithStringEncoding): SpawnSyncReturns<string>;
    export function spawnSync(command: string, options?: SpawnSyncOptionsWithBufferEncoding): SpawnSyncReturns<Buffer>;
    export function spawnSync(command: string, options?: SpawnSyncOptions): SpawnSyncReturns<Buffer>;
    export function spawnSync(command: string, args?: string[], options?: SpawnSyncOptionsWithStringEncoding): SpawnSyncReturns<string>;
    export function spawnSync(command: string, args?: string[], options?: SpawnSyncOptionsWithBufferEncoding): SpawnSyncReturns<Buffer>;
    export function spawnSync(command: string, args?: string[], options?: SpawnSyncOptions): SpawnSyncReturns<Buffer>;

    export interface ExecSyncOptions {
        cwd?: string;
        input?: string | Buffer;
        stdio?: any;
        env?: any;
        shell?: string;
        uid?: number;
        gid?: number;
        timeout?: number;
        killSignal?: string;
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
        input?: string | Buffer;
        stdio?: any;
        env?: any;
        uid?: number;
        gid?: number;
        timeout?: number;
        killSignal?: string;
        maxBuffer?: number;
        encoding?: string;
        windowsHide?: boolean;
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
    export function execFileSync(command: string, args?: string[], options?: ExecFileSyncOptionsWithStringEncoding): string;
    export function execFileSync(command: string, args?: string[], options?: ExecFileSyncOptionsWithBufferEncoding): Buffer;
    export function execFileSync(command: string, args?: string[], options?: ExecFileSyncOptions): Buffer;
}
