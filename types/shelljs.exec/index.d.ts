// Type definitions for shelljs.exec 1.1
// Project: https://github.com/danday74/shelljs.exec#readme
// Definitions by: Chen Asraf <https://github.com/chenasraf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

/// <reference types="node"/>

import { ExecSyncOptions } from 'child_process';

export interface ShellJsOptions {
    silent?: boolean;
}

export interface ShellJsExecEnrich {
    code: number;
    ok: boolean;
    stdout: string;
    stderr: string;
    error: any;
}

export type ShellJsExecResponse = ExecSyncOptions & ShellJsExecEnrich;
export type ExecFn = (cmd: string, options?: ExecSyncOptions & ShellJsOptions) => ShellJsExecResponse;
export type { ExecSyncOptions };

declare const exec: ExecFn;
export default exec;
