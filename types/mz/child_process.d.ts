// Type definitions for mz
// Project: https://github.com/normalize/mz
// Definitions by: Thomas Hickman <https://github.com/ThomasHickman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Modified from the node.js definitions https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/node/node.d.ts

/// <reference types="node" />

import * as child_process from "child_process";
export * from "child_process";

export function exec(command: string, callback: (error: Error, stdout: string, stderr: string) => void): child_process.ChildProcess;
export function exec(command: string, options: child_process.ExecOptionsWithBufferEncoding, callback: (error: Error, stdout: Buffer, stderr: Buffer) => void): child_process.ChildProcess;
export function exec(command: string, options: child_process.ExecOptionsWithStringEncoding | child_process.ExecOptions | undefined | null, callback: (error: Error, stdout: string, stderr: string) => void): child_process.ChildProcess;
export function exec(command: string, options: child_process.ExecOptionsWithBufferEncoding): Promise<[Buffer, Buffer]>;
export function exec(command: string, options?: child_process.ExecFileOptionsWithStringEncoding | child_process.ExecOptions | null): Promise<[Buffer, Buffer]>;

export function execFile(file: string, callback: (error: Error, stdout: string, stderr: string) => void): child_process.ChildProcess;
export function execFile(file: string, args: string[] | null | undefined, callback: (error: Error, stdout: string, stderr: string) => void): child_process.ChildProcess;
export function execFile(file: string, args: string[] | null | undefined, options: child_process.ExecFileOptionsWithBufferEncoding, callback: (error: Error, stdout: Buffer, stderr: Buffer) => void): child_process.ChildProcess;
export function execFile(file: string, args: string[] | null | undefined, options: child_process.ExecFileOptionsWithStringEncoding | child_process.ExecFileOptions | undefined | null, callback: (error: Error, stdout: string, stderr: string) => void): child_process.ChildProcess;
export function execFile(file: string, args: string[] | null | undefined, options: child_process.ExecFileOptionsWithBufferEncoding): Promise<[Buffer, Buffer]>;
export function execFile(file: string, args: string[] | null | undefined, options?: child_process.ExecFileOptionsWithStringEncoding | child_process.ExecFileOptions | null): Promise<[string, string]>;
export function execFile(file: string, options: child_process.ExecFileOptionsWithBufferEncoding, callback: (error: Error, stdout: Buffer, stderr: Buffer) => void): child_process.ChildProcess;
export function execFile(file: string, options: child_process.ExecFileOptionsWithStringEncoding | child_process.ExecFileOptions | undefined | null, callback: (error: Error, stdout: string, stderr: string) => void): child_process.ChildProcess;
export function execFile(file: string, options: child_process.ExecFileOptionsWithBufferEncoding): Promise<[Buffer, Buffer]>;
export function execFile(file: string, options?: child_process.ExecFileOptionsWithStringEncoding | child_process.ExecFileOptions | null): Promise<[string, string]>;