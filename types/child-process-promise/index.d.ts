/// <reference types="node" />

import { ChildProcess, ExecFileOptions, ExecOptions, ForkOptions, SpawnOptions } from "child_process";

export interface ExecFileOptionsWithStringEncoding extends ExecFileOptions {
    encoding: BufferEncoding;
}
export interface ExecFileOptionsWithBufferEncoding extends ExecFileOptions {
    encoding: "buffer" | null;
}
export interface ExecFileOptionsWithOtherEncoding extends ExecFileOptions {
    encoding: BufferEncoding;
}

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
    options: Readonly<Options & { encoding: "buffer" | null } & Omit<ExecOptions, "encoding">>,
): ChildProcessPromise<PromiseResult<Buffer>>;
export function exec(
    command: Readonly<string>,
    options: Readonly<Options & { encoding?: BufferEncoding | undefined } & Omit<ExecOptions, "encoding">>,
): ChildProcessPromise<PromiseResult<string>>;
export function exec(
    command: Readonly<string>,
    options: Readonly<Options & { encoding?: string | undefined } & Omit<ExecOptions, "encoding">>,
): ChildProcessPromise<PromiseResult<string | Buffer>>;
export function exec(
    command: Readonly<string>,
    options?: Readonly<Options & Omit<ExecOptions, "encoding">>,
): ChildProcessPromise<PromiseResult<string>>;

export function execFile(
    file: Readonly<string>,
    options: Readonly<Options & ExecFileOptionsWithBufferEncoding>,
): ChildProcessPromise<PromiseResult<Buffer>>;
export function execFile(
    file: Readonly<string>,
    args: readonly string[] | null,
    options: Readonly<Options & ExecFileOptionsWithBufferEncoding>,
): ChildProcessPromise<PromiseResult<Buffer>>;
export function execFile(
    file: Readonly<string>,
    options: Readonly<Options & ExecFileOptionsWithStringEncoding>,
): ChildProcessPromise<PromiseResult<string>>;
export function execFile(
    file: Readonly<string>,
    options: Readonly<Options & ExecFileOptionsWithOtherEncoding>,
): ChildProcessPromise<PromiseResult<string | Buffer>>;
export function execFile(
    file: Readonly<string>,
    args: readonly string[] | null,
    options: Readonly<Options & ExecFileOptionsWithOtherEncoding>,
): ChildProcessPromise<PromiseResult<string | Buffer>>;
export function execFile(
    file: Readonly<string>,
    args?: readonly string[] | null,
    options?: Readonly<Options & ExecFileOptionsWithStringEncoding>,
): ChildProcessPromise<PromiseResult<string>>;

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
