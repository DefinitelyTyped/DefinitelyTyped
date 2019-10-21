// Modified from the node.js definitions.
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/child_process.d.ts

import {
	ChildProcess,
	ExecException,
	ExecOptions,
	ExecFileOptions,
	ExecFileOptionsWithBufferEncoding,
	ExecFileOptionsWithStringEncoding,
	ExecFileOptionsWithOtherEncoding
} from "child_process";
export * from "child_process";

export function exec(
	command: string,
	callback: (error: ExecException | null, stdout: string, stderr: string) => void
): ChildProcess;
export function exec(
	command: string,
	options: { encoding: "buffer" | null } & ExecOptions,
	callback: (error: ExecException | null, stdout: Buffer, stderr: Buffer) => void
): ChildProcess;
export function exec(
	command: string,
	options: { encoding: BufferEncoding } & ExecOptions,
	callback: (error: ExecException | null, stdout: string, stderr: string) => void
): ChildProcess;
export function exec(
	command: string,
	options: { encoding: string } & ExecOptions,
	callback: (error: ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void
): ChildProcess;
export function exec(
	command: string,
	options: ExecOptions,
	callback: (error: ExecException | null, stdout: string, stderr: string) => void
): ChildProcess;

export function exec(command: string): Promise<[string, string]>;
export function exec(command: string, options: { encoding: "buffer" | null } & ExecOptions): Promise<[Buffer, Buffer]>;
export function exec(command: string, options: { encoding: BufferEncoding } & ExecOptions): Promise<[string, string]>;
export function exec(command: string, options: ExecOptions): Promise<[string, string]>;
export function exec(
	command: string,
	options?: ({ encoding?: string | null } & ExecOptions) | null
): Promise<[string | Buffer, string | Buffer]>;

// no `options` definitely means stdout/stderr are `string`.
export function execFile(
	file: string,
	callback: (error: Error | null, stdout: string, stderr: string) => void
): ChildProcess;
export function execFile(
	file: string,
	args: ReadonlyArray<string> | undefined | null,
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
	args: ReadonlyArray<string> | undefined | null,
	options: ExecFileOptionsWithBufferEncoding,
	callback: (error: Error | null, stdout: Buffer, stderr: Buffer) => void
): ChildProcess;

// `options` with well known `encoding` means stdout/stderr are definitely `string`.
export function execFile(
	file: string,
	options: ExecFileOptionsWithStringEncoding,
	callback: (error: Error | null, stdout: string, stderr: string) => void
): ChildProcess;
export function execFile(
	file: string,
	args: ReadonlyArray<string> | undefined | null,
	options: ExecFileOptionsWithStringEncoding,
	callback: (error: Error | null, stdout: string, stderr: string) => void
): ChildProcess;

// `options` with an `encoding` whose type is `string` means stdout/stderr could either be `Buffer` or `string`.
// There is no guarantee the `encoding` is unknown as `string` is a superset of `BufferEncoding`.
export function execFile(
	file: string,
	options: ExecFileOptionsWithOtherEncoding,
	callback: (error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void
): ChildProcess;
export function execFile(
	file: string,
	args: ReadonlyArray<string> | undefined | null,
	options: ExecFileOptionsWithOtherEncoding,
	callback: (error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void
): ChildProcess;

// `options` without an `encoding` means stdout/stderr are definitely `string`.
export function execFile(
	file: string,
	options: ExecFileOptions,
	callback: (error: Error | null, stdout: string, stderr: string) => void
): ChildProcess;
export function execFile(
	file: string,
	args: ReadonlyArray<string> | undefined | null,
	options: ExecFileOptions,
	callback: (error: Error | null, stdout: string, stderr: string) => void
): ChildProcess;

// fallback if nothing else matches. Worst case is always `string | Buffer`.
export function execFile(
	file: string,
	options: ({ encoding?: string | null } & ExecFileOptions) | undefined | null,
	callback: (error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void
): ChildProcess;
export function execFile(
	file: string,
	args: ReadonlyArray<string> | undefined | null,
	options: ({ encoding?: string | null } & ExecFileOptions) | undefined | null,
	callback: (error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void
): ChildProcess;

export function execFile(file: string): Promise<[string, string]>;
export function execFile(file: string, args: string[] | undefined | null): Promise<[string, string]>;
export function execFile(file: string, options: ExecFileOptionsWithBufferEncoding): Promise<[Buffer, Buffer]>;
export function execFile(
	file: string,
	args: string[] | undefined | null,
	options: ExecFileOptionsWithBufferEncoding
): Promise<[Buffer, Buffer]>;
export function execFile(file: string, options: ExecFileOptionsWithStringEncoding): Promise<[string, string]>;
export function execFile(
	file: string,
	args: string[] | undefined | null,
	options: ExecFileOptionsWithStringEncoding
): Promise<[string, string]>;
export function execFile(
	file: string,
	options: ExecFileOptionsWithOtherEncoding
): Promise<[string | Buffer, string | Buffer]>;
export function execFile(
	file: string,
	args: string[] | undefined | null,
	options: ExecFileOptionsWithOtherEncoding
): Promise<[string | Buffer, string | Buffer]>;
export function execFile(file: string, options: ExecFileOptions): Promise<[string, string]>;
export function execFile(
	file: string,
	args: string[] | undefined | null,
	options: ExecFileOptions
): Promise<[string, string]>;
export function execFile(
	file: string,
	options: ({ encoding?: string | null } & ExecFileOptions) | undefined | null
): Promise<[string | Buffer, string | Buffer]>;
export function execFile(
	file: string,
	args: string[] | undefined | null,
	options: ({ encoding?: string | null } & ExecFileOptions) | undefined | null
): Promise<[string | Buffer, string | Buffer]>;
