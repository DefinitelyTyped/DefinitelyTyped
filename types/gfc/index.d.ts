// Type definitions for gfc 2.0
// Project: https://github.com/jonschlinkert/gfc
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import { ExecOptions, ExecException, ExecSyncOptions } from 'child_process';

export = gitFirstCommit;

declare function gitFirstCommit(
    options?: gitFirstCommit.Options<gitFirstCommit.ExecOptionsWithEncoding>
): Promise<{ stdout: string | Buffer; stderr: string | Buffer }>;
declare function gitFirstCommit(
    cwd: string,
    options?: gitFirstCommit.Options<gitFirstCommit.ExecOptionsWithEncoding>
): Promise<{ stdout: string | Buffer; stderr: string | Buffer }>;
declare function gitFirstCommit(
    cwd: string,
    callback: (
        error: ExecException | null,
        stdout: string | Buffer,
        stderr: string | Buffer
    ) => void
): void;
declare function gitFirstCommit(
    cwd: string,
    options: gitFirstCommit.Options<gitFirstCommit.ExecOptionsWithEncoding>,
    callback: (
        error: ExecException | null,
        stdout: string | Buffer,
        stderr: string | Buffer
    ) => void
): void;

declare namespace gitFirstCommit {
    function sync(options?: Options<ExecSyncOptions>): string | Buffer;
    function sync(cwd: string, options?: Options<ExecSyncOptions>): string | Buffer;

    type ExecOptionsWithEncoding = { encoding?: BufferEncoding | 'buffer' | null } & ExecOptions;

    interface Options<TExecOptions> {
        cwd?: string;
        exec?: TExecOptions;
        message?: string;
        file?: { path: string; contents?: string } | false;
        commit?: boolean;
        forceFile?: boolean;
        remote?: string;
        push?: boolean;
    }
}
