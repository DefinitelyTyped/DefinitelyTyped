// Modified from the node.js definitions.
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/child_process.d.ts

import {
    ChildProcess,
    ExecException,
    ExecFileException,
    ExecFileOptions as NodeExecFileOptions,
    ExecOptions as NodeExecOptions,
} from "child_process";
export * from "child_process";

export interface ExecOptions extends NodeExecOptions {
    encoding?: string | null | undefined;
}

export interface ExecOptionsWithStringEncoding extends ExecOptions {
    encoding?: BufferEncoding | undefined;
}
export interface ExecOptionsWithBufferEncoding extends ExecOptions {
    encoding: "buffer" | null; // specify `null`.
}

export function exec(
    command: string,
    callback: (error: ExecException | null, stdout: string, stderr: string) => void,
): ChildProcess;
// `options` with `"buffer"` or `null` for `encoding` means stdout/stderr are definitely `Buffer`.
export function exec(
    command: string,
    options: ExecOptionsWithBufferEncoding,
    callback: (error: ExecException | null, stdout: Buffer, stderr: Buffer) => void,
): ChildProcess;
// `options` with well-known or absent `encoding` means stdout/stderr are definitely `string`.
export function exec(
    command: string,
    options: ExecOptionsWithStringEncoding,
    callback: (error: ExecException | null, stdout: string, stderr: string) => void,
): ChildProcess;
// fallback if nothing else matches. Worst case is always `string | Buffer`.
export function exec(
    command: string,
    options: ExecOptions | undefined | null,
    callback: (error: ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void,
): ChildProcess;

export function exec(
    command: string,
): Promise<[string, string]>;
// `options` with `"buffer"` or `null` for `encoding` means stdout/stderr are definitely `Buffer`.
export function exec(
    command: string,
    options: ExecOptionsWithBufferEncoding,
): Promise<[Buffer, Buffer]>;
// `options` with well-known or absent `encoding` means stdout/stderr are definitely `string`.
export function exec(
    command: string,
    options: ExecOptionsWithStringEncoding,
): Promise<[string, string]>;
// fallback if nothing else matches. Worst case is always `string | Buffer`.
export function exec(
    command: string,
    options: ExecOptions | undefined | null,
): Promise<[string | Buffer, string | Buffer]>;

export interface ExecFileOptions extends NodeExecFileOptions {
    encoding?: string | null | undefined;
}

export interface ExecFileOptionsWithStringEncoding extends ExecFileOptions {
    encoding?: BufferEncoding | undefined;
}
export interface ExecFileOptionsWithBufferEncoding extends ExecFileOptions {
    encoding: "buffer" | null; // specify `null`.
}

// no `options` definitely means stdout/stderr are `string`.
export function execFile(
    file: string,
    callback: (error: ExecFileException | null, stdout: string, stderr: string) => void,
): ChildProcess;
export function execFile(
    file: string,
    args: readonly string[] | undefined | null,
    callback: (error: ExecFileException | null, stdout: string, stderr: string) => void,
): ChildProcess;
// `options` with `"buffer"` or `null` for `encoding` means stdout/stderr are definitely `Buffer`.
export function execFile(
    file: string,
    options: ExecFileOptionsWithBufferEncoding,
    callback: (error: ExecFileException | null, stdout: Buffer, stderr: Buffer) => void,
): ChildProcess;
export function execFile(
    file: string,
    args: readonly string[] | undefined | null,
    options: ExecFileOptionsWithBufferEncoding,
    callback: (error: ExecFileException | null, stdout: Buffer, stderr: Buffer) => void,
): ChildProcess;
// `options` with well-known or absent `encoding` means stdout/stderr are definitely `string`.
export function execFile(
    file: string,
    options: ExecFileOptionsWithStringEncoding,
    callback: (error: ExecFileException | null, stdout: string, stderr: string) => void,
): ChildProcess;
export function execFile(
    file: string,
    args: readonly string[] | undefined | null,
    options: ExecFileOptionsWithStringEncoding,
    callback: (error: ExecFileException | null, stdout: string, stderr: string) => void,
): ChildProcess;
// fallback if nothing else matches. Worst case is always `string | Buffer`.
export function execFile(
    file: string,
    options: ExecFileOptions | undefined | null,
    callback:
        | ((error: ExecFileException | null, stdout: string | Buffer, stderr: string | Buffer) => void)
        | undefined
        | null,
): ChildProcess;
export function execFile(
    file: string,
    args: readonly string[] | undefined | null,
    options: ExecFileOptions | undefined | null,
    callback:
        | ((error: ExecFileException | null, stdout: string | Buffer, stderr: string | Buffer) => void)
        | undefined
        | null,
): ChildProcess;

// no `options` definitely means stdout/stderr are `string`.
export function execFile(
    file: string,
): Promise<[string, string]>;
export function execFile(
    file: string,
    args: readonly string[] | undefined | null,
): Promise<[string, string]>;
// `options` with `"buffer"` or `null` for `encoding` means stdout/stderr are definitely `Buffer`.
export function execFile(
    file: string,
    options: ExecFileOptionsWithBufferEncoding,
): Promise<[Buffer, Buffer]>;
export function execFile(
    file: string,
    args: readonly string[] | undefined | null,
    options: ExecFileOptionsWithBufferEncoding,
): Promise<[Buffer, Buffer]>;
// `options` with well-known or absent `encoding` means stdout/stderr are definitely `string`.
export function execFile(
    file: string,
    options: ExecFileOptionsWithStringEncoding,
): Promise<[string, string]>;
export function execFile(
    file: string,
    args: readonly string[] | undefined | null,
    options: ExecFileOptionsWithStringEncoding,
): Promise<[string, string]>;
// fallback if nothing else matches. Worst case is always `string | Buffer`.
export function execFile(
    file: string,
    options: ExecFileOptions | undefined | null,
): Promise<[string | Buffer, string | Buffer]>;
export function execFile(
    file: string,
    args: readonly string[] | undefined | null,
    options: ExecFileOptions | undefined | null,
): Promise<[string | Buffer, string | Buffer]>;
