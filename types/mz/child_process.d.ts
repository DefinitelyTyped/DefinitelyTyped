// Modified from the node.js definitions.
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/child_process.d.ts

import {
    ChildProcess,
    ExecException,
    ExecOptions,
    ExecFileOptions,
    ExecFileOptionsWithStringEncoding,
} from "child_process";
export * from "child_process";

export function exec(
    command: string,
    callback: (error: ExecException | null, stdout: string, stderr: string) => void
): ChildProcess;
export function exec(
    command: string,
    options: { encoding: "buffer" | null | undefined } & ExecOptions,
    callback: (error: ExecException | null, stdout: Buffer, stderr: Buffer) => void
): ChildProcess;
export function exec(
    command: string,
    options: ({ encoding?: BufferEncoding } & ExecOptions) | null | undefined,
    callback: (error: ExecException | null, stdout: string, stderr: string) => void
): ChildProcess;
export function exec(
    command: string,
    options: ({ encoding?: string | null } & ExecOptions) | null | undefined,
    callback: (error: ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void
): ChildProcess;

export function exec(
    command: string,
    options: { encoding: "buffer" | null | undefined } & ExecOptions
): Promise<[Buffer, Buffer]>;
export function exec(
    command: string,
    options?: ({ encoding?: BufferEncoding } & ExecOptions) | null
): Promise<[string, string]>;
export function exec(
    command: string,
    options?: ({ encoding?: string | null } & ExecOptions) | null
): Promise<[string | Buffer, string | Buffer]>;

interface ExecFileOptionsWithBufferEncoding extends ExecFileOptions {
    encoding: "buffer" | null | undefined;
}

interface ExecFileOptionsWithOtherEncoding extends ExecFileOptions {
    encoding?: string | null;
}

// no `options` definitely means stdout/stderr are `string`.
export function execFile(
    file: string,
    callback: (error: Error | null, stdout: string, stderr: string) => void
): ChildProcess;
export function execFile(
    file: string,
    args: ReadonlyArray<string> | null | undefined,
    callback: (error: Error | null, stdout: string, stderr: string) => void
): ChildProcess;

// `options` with `"buffer"` or `null` for `encoding` means stdout/stderr are definitely `Buffer`.
export function execFile(
    file: string,
    options: ExecFileOptionsWithBufferEncoding,
    callback: (error: Error | null, stdout: Buffer, stderr: Buffer) => void
): ChildProcess;
export function execFile(
    file: string,
    args: ReadonlyArray<string> | null | undefined,
    options: ExecFileOptionsWithBufferEncoding,
    callback: (error: Error | null, stdout: Buffer, stderr: Buffer) => void
): ChildProcess;

// `options` without an or with a well known `encoding` means stdout/stderr are definitely `string`.
export function execFile(
    file: string,
    // `options` can't be mixed into `args`
    // tslint:disable-next-line: unified-signatures
    options: ExecFileOptions | ExecFileOptionsWithStringEncoding,
    callback: (error: Error | null, stdout: string, stderr: string) => void
): ChildProcess;
export function execFile(
    file: string,
    args: ReadonlyArray<string> | null | undefined,
    options: ExecFileOptions | ExecFileOptionsWithStringEncoding,
    callback: (error: Error | null, stdout: string, stderr: string) => void
): ChildProcess;

// `options` with an `encoding` whose type is `string` means stdout/stderr could either be `Buffer` or `string`.
// There is no guarantee the `encoding` is unknown as `string` is a superset of `BufferEncoding`.
export function execFile(
    file: string,
    options: ExecFileOptionsWithOtherEncoding | null | undefined,
    callback: (error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void
): ChildProcess;
export function execFile(
    file: string,
    args: ReadonlyArray<string> | null | undefined,
    options: ExecFileOptionsWithOtherEncoding | null | undefined,
    callback: (error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void
): ChildProcess;

export function execFile(
    file: string,
    args: string[] | null | undefined,
    options: ExecFileOptionsWithBufferEncoding
): Promise<[Buffer, Buffer]>;
export function execFile(file: string, options: ExecFileOptionsWithBufferEncoding): Promise<[Buffer, Buffer]>;
export function execFile(
    file: string,
    args?: string[] | null,
    options?: ExecFileOptions | ExecFileOptionsWithStringEncoding | null
): Promise<[string, string]>;
export function execFile(
    file: string,
    options?: ExecFileOptions | ExecFileOptionsWithStringEncoding | null
): Promise<[string, string]>;
export function execFile(
    file: string,
    args?: string[] | null,
    options?: ExecFileOptionsWithOtherEncoding | null
): Promise<[string | Buffer, string | Buffer]>;
export function execFile(
    file: string,
    options?: ExecFileOptionsWithOtherEncoding | null
): Promise<[string | Buffer, string | Buffer]>;
