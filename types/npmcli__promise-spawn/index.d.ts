// Type definitions for @npmcli/promise-spawn 6.0
// Project: https://github.com/npm/promise-spawn#readme
// Definitions by: Anton Golub <https://github.com/antongolub>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import { SpawnOptions, spawn } from 'child_process';

type NativeSpawnResult = ReturnType<typeof spawn>;

type SpawnResult<Output, Extra> = Promise<{
    cmd: string;
    args: string[];
    code: number;
    signal: NodeJS.Signals | null;
    stdout: Output;
    stderr: Output;
} & Extra> & { process: NativeSpawnResult, stdio: NativeSpawnResult['stdio'] };

type PromiseSpawnOptions = {
    cwd?: string;
    stdioString?: boolean;
} & SpawnOptions;

declare const promiseSpawn: {
    <O extends PromiseSpawnOptions = PromiseSpawnOptions>(
        cmd: string,
        args: string[],
        opts?: O,
        extra?: Record<any, any>,
    ): SpawnResult<O extends { stdioString: false } ? Buffer : string, typeof extra>;
    open<O extends PromiseSpawnOptions & { command?: string } = PromiseSpawnOptions & { command?: string }>(
        args: string | string[],
        opts?: O,
        extra?: Record<any, any>,
    ): SpawnResult<O extends { stdioString: false } ? Buffer : string, typeof extra>;
};

export = promiseSpawn;
