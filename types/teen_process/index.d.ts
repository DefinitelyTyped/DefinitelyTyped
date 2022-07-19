// Type definitions for teen_process 1.16
// Project: https://github.com/appium/node-teen_process
// Definitions by: Tiger Oakes <https://github.com/NotWoods>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events';
import { ChildProcess, SpawnOptions } from 'child_process';
import { URL } from 'url';

export { spawn } from 'child_process';

export interface ExecOptions extends Pick<SpawnOptions, 'cwd' | 'env' | 'shell'> {
    cwd?: string | URL | undefined;
    env?: NodeJS.ProcessEnv | undefined;
    timeout?: number | undefined;
    /**
     * The signal value to be used when the spawned process will be killed by the abort signal.
     * @default 'SIGTERM'
     */
    killSignal?: NodeJS.Signals | number | undefined;
    /**
     * Character encoding to use when converting `stdout` and `stderr` to a string.
     * Has no effect if `isBuffer` is set to true.
     * @default 'utf8'
     */
    encoding?: BufferEncoding | undefined;
    /**
     * Useful if you have a very chatty process whose output you don't care about and
     * don't want to add it to the memory consumed by your program.
     * @default false
     */
    ignoreOutput?: boolean;
    /**
     * @default 'inherit'
     */
    stdio?: string | undefined;
    /**
     * Specifies that the returned standard I/O is an instance of a Buffer.
     * @default false
     * @example
     * let {stdout, stderr} = await exec('cat', [filename], {isBuffer: true});
     * Buffer.isBuffer(stdout); // true
     */
    isBuffer?: boolean | undefined;
    /**
     * If you're on Windows, you'll want to pass `shell: true`, because exec actually uses spawn under the hood,
     * and is therefore subject to the issues noted about Windows + spawn in the Node docs.
     * @see https://nodejs.org/api/child_process.html
     */
    shell?: boolean | string | undefined;
    /**
     * Allows stdout and stderr to be sent to a particular logger, as it it received.
     * This is overridden by the `ignoreOutput` option.
     */
    logger?: { debug(chunk: string): void } | undefined;
    /**
     * @default 100 * 1024 * 1024 // 100 MB
     */
    maxStdoutBufferSize?: number;
    /**
     * @default 100 * 1024 * 1024 // 100 MB
     */
    maxStderrBufferSize?: number;
}

export interface ExecResult<T extends string | Buffer> {
    stdout: T;
    stderr: T;
    code: number;
}

export function exec(
    cmd: string,
    args: ReadonlyArray<string> | undefined,
    opts: ExecOptions & { isBuffer: true },
): Promise<ExecResult<Buffer>>;
export function exec(cmd: string, args?: ReadonlyArray<string>, opts?: ExecOptions): Promise<ExecResult<string>>;

export interface SubProcessOptions extends SpawnOptions {
    encoding?: string | undefined;
}

/**
 * SubProcess can be used to cut down on some of the boilerplate when using `spawn` in an async/await context.
 * @example
 * import { SubProcess } from 'teen_process';
 *
 * async function tailFileForABit () {
 *   let proc = new SubProcess('tail', ['-f', '/var/log/foo.log']);
 *   await proc.start();
 *   await proc.stop();
 * }
 */
export class SubProcess extends EventEmitter {
    cmd: string;
    args: ReadonlyArray<string>;
    proc: ChildProcess | null;
    opts: SubProcessOptions;
    expectingExit: boolean;
    rep: string;

    constructor(cmd: string, args?: ReadonlyArray<string>, opts?: SubProcessOptions);

    readonly isRunning: boolean;

    emitLines(stream: string, lines: ReadonlyArray<string>): void;

    /**
     * spawn the subprocess and return control whenever we deem that it has fully "started".
     * @param startDetector - Lets SubProcess know when to return control from `start()`.
     * If a number, SubProcess will wait that number of milliseconds.
     * If a function, SubProcess will wait until it returns true.
     * Defaults to wait until there is some output.
     * @param timeoutMs - Maximum time to wait for a process to start, in milliseconds.
     */
    start(detach?: boolean): Promise<void>;
    start(
        startDetector?: ((stdout: string, stderr: string) => boolean) | number | null,
        detach?: boolean,
    ): Promise<void>;
    start(
        startDetector?: ((stdout: string, stderr: string) => boolean) | number | null,
        timeoutMs?: number | null,
        detach?: boolean,
    ): Promise<void>;

    handleLastLines(): void;

    /**
     * Kills the process.
     * @param signal - Custom signal instead of the default 'SIGTERM'.
     * @param timeout - If your process might not be killable and you don't really care, you can also pass a timeout,
     * which will return control to you in the form of an error after the timeout has passed.
     */
    stop(signal?: NodeJS.Signals | number, timeout?: number): Promise<number>;

    /**
     * After the process has been started you can use join() to wait for it to finish on its own.
     * @example
     * await proc.join(); // will throw on exitcode not 0
     * await proc.join([0, 1]); // will throw on exitcode not 0 or 1
     */
    join(allowedExitCodes?: ReadonlyArray<number>): Promise<number>;

    /*
     * This will only work if the process is created with the `detached` option
     */
    detachProcess(): void;

    /**
     * Returns the process identifier (PID) of the child process.
     *  If the child process hasn't started, then the value is `null`.
     */
    readonly pid: number | null | undefined;

    addListener(event: string, listener: (...args: any[]) => void): this;
    addListener(
        event: 'exit' | 'stop' | 'end' | 'die',
        listener: (code: number | null, signal: NodeJS.Signals | null) => void,
    ): this;
    addListener(event: 'output', listener: (stdout: string, stderr: string) => void): this;
    addListener(event: 'lines-stdout' | 'lines-stderr', listener: (lines: string[]) => void): this;
    addListener(event: 'stream-line', listener: (line: string) => void): this;
    emit(event: string | symbol, ...args: any[]): boolean;
    emit(event: 'exit' | 'stop' | 'end' | 'die', code: number | null, signal: NodeJS.Signals | null): boolean;
    emit(event: 'output', stdout: string, stderr: string): this;
    emit(event: 'lines-stdout' | 'lines-stderr', lines: string[]): this;
    emit(event: 'stream-line', line: string): this;
    on(event: string, listener: (...args: any[]) => void): this;
    on(
        event: 'exit' | 'stop' | 'end' | 'die',
        listener: (code: number | null, signal: NodeJS.Signals | null) => void,
    ): this;
    on(event: 'output', listener: (stdout: string, stderr: string) => void): this;
    on(event: 'lines-stdout' | 'lines-stderr', listener: (lines: string[]) => void): this;
    on(event: 'stream-line', listener: (line: string) => void): this;
    once(event: string, listener: (...args: any[]) => void): this;
    once(
        event: 'exit' | 'stop' | 'end' | 'die',
        listener: (code: number | null, signal: NodeJS.Signals | null) => void,
    ): this;
    once(event: 'output', listener: (stdout: string, stderr: string) => void): this;
    once(event: 'lines-stdout' | 'lines-stderr', listener: (lines: string[]) => void): this;
    once(event: 'stream-line', listener: (line: string) => void): this;
    prependListener(event: string, listener: (...args: any[]) => void): this;
    prependListener(
        event: 'exit' | 'stop' | 'end' | 'die',
        listener: (code: number | null, signal: NodeJS.Signals | null) => void,
    ): this;
    prependListener(event: 'output', listener: (stdout: string, stderr: string) => void): this;
    prependListener(event: 'lines-stdout' | 'lines-stderr', listener: (lines: string[]) => void): this;
    prependListener(event: 'stream-line', listener: (line: string) => void): this;
    prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    prependOnceListener(
        event: 'exit' | 'stop' | 'end' | 'die',
        listener: (code: number | null, signal: NodeJS.Signals | null) => void,
    ): this;
    prependOnceListener(event: 'output', listener: (stdout: string, stderr: string) => void): this;
    prependOnceListener(event: 'lines-stdout' | 'lines-stderr', listener: (lines: string[]) => void): this;
    prependOnceListener(event: 'stream-line', listener: (line: string) => void): this;
}

/**
 * {@link exec} can reject with this error
 */
export interface ExecError extends Error {
    code?: number;
    stdout: string;
    stderr: string;
}
