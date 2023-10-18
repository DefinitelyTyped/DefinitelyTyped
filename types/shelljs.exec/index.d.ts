/// <reference types="node"/>

import { ExecSyncOptions } from "child_process";

declare namespace exec {
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
    export type { ExecSyncOptions };
}

declare function exec(cmd: string, options?: ExecSyncOptions & exec.ShellJsOptions): exec.ShellJsExecResponse;
export = exec;
