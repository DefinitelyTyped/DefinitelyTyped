// Type definitions for @lerna/child-process 5.1
// Project: https://github.com/lerna/lerna/blob/main/core/child-process
// Definitions by: donmahallem <https://github.com/donmahallem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Package } from '@lerna/package';
import * as execa from 'execa';

export type ExecutionError = execa.ExecaError & { exitCode: number; pkg?: Package };
export type ExecutionResult = execa.ExecaChildProcess & { pkg?: Package };
export function exec(command: string, args: string[], opts?: execa.Options): ExecutionResult;

export function execSync(
    command: string,
    args: string[],
    opts?: execa.SyncOptions,
): ReturnType<typeof execa.sync>['stdout'];

export function getChildProcessCount(): number;

export function getExitCode(result: execa.ExecaError): number;

export function spawn(command: string, args: string[], opts?: execa.Options): ExecutionResult;

export function spawnStreaming(command: string, args: string[], opts?: execa.Options, prefix?: string): ExecutionResult;

export interface ExecOpts {
    cwd: string;
    maxBuffer?: number;
}
