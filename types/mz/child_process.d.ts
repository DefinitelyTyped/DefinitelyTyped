// Modified from the node.js definitions.
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/child_process.d.ts

import { ChildProcess, ExecException, ExecFileOptions, ExecOptions } from "child_process";
export * from "child_process";

export function exec(
    command: string,
    callback: (error: ExecException | null, stdout: string, stderr: string) => void,
): ChildProcess;
export function exec(
    command: string,
    options: { encoding: "buffer" | null } & ExecOptions,
    callback: (error: ExecException | null, stdout: Buffer, stderr: Buffer) => void,
): ChildProcess;
export function exec(
    command: string,
    options: ({ encoding?: BufferEncoding | undefined } & ExecOptions) | null | undefined,
    callback: (error: ExecException | null, stdout: string, stderr: string) => void,
): ChildProcess;
export function exec(
    command: string,
    options: ({ encoding?: string | null | undefined } & ExecOptions) | null | undefined,
    callback: (error: ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void,
): ChildProcess;

export function exec(
    command: string,
    options: { encoding: "buffer" | null } & ExecOptions,
): Promise<[Buffer, Buffer]>;
export function exec(
    command: string,
    options?: ({ encoding?: BufferEncoding | undefined } & ExecOptions) | null,
): Promise<[string, string]>;
export function exec(
    command: string,
    options?: ({ encoding?: string | null | undefined } & ExecOptions) | null,
): Promise<[string | Buffer, string | Buffer]>;

// no `options` definitely means stdout/stderr are `string`.
export function execFile(
    file: string,
    callback: (error: Error | null, stdout: string, stderr: string) => void,
): ChildProcess;
export function execFile(
    file: string,
    args: readonly string[] | null | undefined,
    callback: (error: Error | null, stdout: string, stderr: string) => void,
): ChildProcess;

// `options` with `"buffer"` or `null` for `encoding` means stdout/stderr are definitely `Buffer`.
export function execFile(
    file: string,
    options: { encoding: "buffer" | null } & ExecFileOptions,
    callback: (error: Error | null, stdout: Buffer, stderr: Buffer) => void,
): ChildProcess;
export function execFile(
    file: string,
    args: readonly string[] | null | undefined,
    options: { encoding: "buffer" | null } & ExecFileOptions,
    callback: (error: Error | null, stdout: Buffer, stderr: Buffer) => void,
): ChildProcess;

// `options` without an or with a well known `encoding` means stdout/stderr are definitely `string`.
export function execFile(
    file: string,
    options: ({ encoding?: BufferEncoding | undefined } & ExecFileOptions) | null | undefined,
    callback: (error: Error | null, stdout: string, stderr: string) => void,
): ChildProcess;
export function execFile(
    file: string,
    args: readonly string[] | null | undefined,
    options: ({ encoding?: BufferEncoding | undefined } & ExecFileOptions) | null | undefined,
    callback: (error: Error | null, stdout: string, stderr: string) => void,
): ChildProcess;

// `options` with an `encoding` whose type is `string` means stdout/stderr could either be `Buffer` or `string`.
// There is no guarantee the `encoding` is unknown as `string` is a superset of `BufferEncoding`.
export function execFile(
    file: string,
    options: ({ encoding?: string | null | undefined } & ExecFileOptions) | null | undefined,
    callback: (error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void,
): ChildProcess;
export function execFile(
    file: string,
    args: readonly string[] | null | undefined,
    options: ({ encoding?: string | null | undefined } & ExecFileOptions) | null | undefined,
    callback: (error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void,
): ChildProcess;

export function execFile(
    file: string,
    args: string[] | null | undefined,
    options: { encoding: "buffer" | null } & ExecFileOptions,
): Promise<[Buffer, Buffer]>;
export function execFile(
    file: string,
    options: { encoding: "buffer" | null } & ExecFileOptions,
): Promise<[Buffer, Buffer]>;
export function execFile(
    file: string,
    args?: string[] | null,
    options?: ({ encoding?: BufferEncoding | undefined } & ExecFileOptions) | null,
): Promise<[string, string]>;
export function execFile(
    file: string,
    options?: ({ encoding?: BufferEncoding | undefined } & ExecFileOptions) | null,
): Promise<[string, string]>;
export function execFile(
    file: string,
    args?: string[] | null,
    options?: ({ encoding?: string | null | undefined } & ExecFileOptions) | null,
): Promise<[string | Buffer, string | Buffer]>;
export function execFile(
    file: string,
    options?: ({ encoding?: string | null | undefined } & ExecFileOptions) | null,
): Promise<[string | Buffer, string | Buffer]>;
