/// <reference types="node" />

import {
    ChildProcess,
    ExecFileOptions as NodeExecFileOptions,
    ExecOptions as NodeExecOptions,
    ForkOptions,
    SpawnOptions,
} from "child_process";

/**
 * Simple wrapper around the child_process module that makes use of promises
 */

export interface PromiseResult<Enc extends string | Buffer> {
    childProcess: ChildProcess;
    stdout: Enc;
    stderr: Enc;
}

export interface SpawnPromiseResult extends PromiseResult<string> {
    code: number;
}

export interface ChildProcessPromise<T> extends Promise<T> {
    childProcess: ChildProcess;
}

export interface ExecOptions extends NodeExecOptions {
    encoding?: string | null | undefined;
}

export interface ExecOptionsWithStringEncoding extends ExecOptions {
    encoding?: BufferEncoding | undefined;
}
export interface ExecOptionsWithBufferEncoding extends ExecOptions {
    encoding: "buffer" | null; // specify `null`.
}

export interface ExecFileOptions extends NodeExecFileOptions {
    encoding?: string | null | undefined;
}

export interface ExecFileOptionsWithStringEncoding extends ExecFileOptions {
    encoding?: BufferEncoding | undefined;
}
export interface ExecFileOptionsWithBufferEncoding extends ExecFileOptions {
    encoding: "buffer" | null; // specify `null`.
}

export interface Options {
    /**
     * Pass an additional capture option to buffer the result of stdout and/or stderr
     * Default: []
     */
    capture?: [] | ["stdout" | "stderr"] | ["stdout", "stderr"] | ["stderr", "stdout"] | undefined;
    /**
     * Array of the numbers that should be interpreted as successful execution codes
     * Default: [0]
     */
    successfulExitCodes?: number[] | undefined;
}

export function exec(
    command: Readonly<string>,
): ChildProcessPromise<PromiseResult<string>>;
export function exec(
    command: Readonly<string>,
    options: Readonly<Options & ExecOptionsWithBufferEncoding>,
): ChildProcessPromise<PromiseResult<Buffer>>;
export function exec(
    command: Readonly<string>,
    options: Readonly<Options & ExecOptionsWithStringEncoding>,
): ChildProcessPromise<PromiseResult<string>>;
export function exec(
    command: Readonly<string>,
    options: Readonly<Options & (ExecOptions | undefined | null)> | undefined | null,
): ChildProcessPromise<PromiseResult<string | Buffer>>;

// no `options` definitely means stdout/stderr are `string`.
export function execFile(
    file: string,
): ChildProcessPromise<PromiseResult<string>>;
export function execFile(
    file: string,
    args: readonly string[] | undefined | null,
): ChildProcessPromise<PromiseResult<string>>;
// `options` with `"buffer"` or `null` for `encoding` means stdout/stderr are definitely `Buffer`.
export function execFile(
    file: string,
    options: Readonly<Options & ExecFileOptionsWithBufferEncoding>,
): ChildProcessPromise<PromiseResult<Buffer>>;
export function execFile(
    file: string,
    args: readonly string[] | undefined | null,
    options: Readonly<Options & ExecFileOptionsWithBufferEncoding>,
): ChildProcessPromise<PromiseResult<Buffer>>;
// `options` with well-known or absent `encoding` means stdout/stderr are definitely `string`.
export function execFile(
    file: string,
    options: Readonly<Options & ExecFileOptionsWithStringEncoding>,
): ChildProcessPromise<PromiseResult<string>>;
export function execFile(
    file: string,
    args: readonly string[] | undefined | null,
    options: Readonly<Options & ExecFileOptionsWithStringEncoding>,
): ChildProcessPromise<PromiseResult<string>>;
// fallback if nothing else matches. Worst case is always `string | Buffer`.
export function execFile(
    file: string,
    options: Readonly<Options & (ExecFileOptions | undefined | null)> | undefined | null,
): ChildProcessPromise<PromiseResult<string | Buffer>>;
export function execFile(
    file: string,
    args: readonly string[] | undefined | null,
    options: Readonly<Options & (ExecFileOptions | undefined | null)> | undefined | null,
): ChildProcessPromise<PromiseResult<string | Buffer>>;

export function spawn(
    command: Readonly<string>,
    args?: readonly string[] | null,
    options?: Readonly<Options & SpawnOptions>,
): ChildProcessPromise<SpawnPromiseResult>;

export function fork(
    modulePath: string,
    args?: readonly string[],
    options?: Readonly<Options & ForkOptions>,
): ChildProcessPromise<SpawnPromiseResult>;
