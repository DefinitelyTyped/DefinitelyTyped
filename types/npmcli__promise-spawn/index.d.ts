// Type definitions for @npmcli/promise-spawn 6.0
// Project: https://github.com/npm/promise-spawn#readme
// Definitions by: Anton Golub <https://github.com/antongolub>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3
/// <reference types="node" />

import { SpawnOptions, spawn } from 'child_process';

type NativeSpawnResult = ReturnType<typeof spawn>;

type SpawnResult<Extra> = Promise<{
    cmd: string;
    args: string[];
    code: number;
    signal: NodeJS.Signals | null;
    stdout: string | Buffer;
    stderr: string | Buffer;
} & Extra> & { process: NativeSpawnResult, stdio: NativeSpawnResult['stdio'] };

type PromiseSpawnOptions = {
    cwd?: string;
    stdioString?: boolean;
} & SpawnOptions;

declare const promiseSpawn: {
    (
        cmd: string,
        args: string[],
        opts?: PromiseSpawnOptions,
        extra?: Record<any, any>,
    ): SpawnResult<typeof extra>;
    open(
        args: string | string[],
        opts?: PromiseSpawnOptions & { command?: string },
        extra?: Record<any, any>,
    ): SpawnResult<typeof extra>;
};

export = promiseSpawn;
