/// <reference types="node" />

import { ExecException, ExecOptions, ExecSyncOptions } from "child_process";

export = gitFirstCommit;

declare function gitFirstCommit(
    options?: gitFirstCommit.Options<gitFirstCommit.ExecOptionsWithEncoding>,
): Promise<{ stdout: string | Buffer; stderr: string | Buffer }>;
declare function gitFirstCommit(
    cwd: string,
    options?: gitFirstCommit.Options<gitFirstCommit.ExecOptionsWithEncoding>,
): Promise<{ stdout: string | Buffer; stderr: string | Buffer }>;
declare function gitFirstCommit(
    cwd: string,
    callback: (
        error: ExecException | null,
        stdout: string | Buffer,
        stderr: string | Buffer,
    ) => void,
): void;
declare function gitFirstCommit(
    cwd: string,
    options: gitFirstCommit.Options<gitFirstCommit.ExecOptionsWithEncoding>,
    callback: (
        error: ExecException | null,
        stdout: string | Buffer,
        stderr: string | Buffer,
    ) => void,
): void;

declare namespace gitFirstCommit {
    function sync(options?: Options<ExecSyncOptions>): string | Buffer;
    function sync(cwd: string, options?: Options<ExecSyncOptions>): string | Buffer;

    type ExecOptionsWithEncoding = { encoding?: BufferEncoding | "buffer" | null | undefined } & ExecOptions;

    interface Options<TExecOptions> {
        cwd?: string | undefined;
        exec?: TExecOptions | undefined;
        message?: string | undefined;
        file?: { path: string; contents?: string | undefined } | false | undefined;
        commit?: boolean | undefined;
        forceFile?: boolean | undefined;
        remote?: string | undefined;
        push?: boolean | undefined;
    }
}
