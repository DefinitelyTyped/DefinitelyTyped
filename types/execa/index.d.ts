// Type definitions for execa 0.8
// Project: https://github.com/sindresorhus/execa#readme
// Definitions by: Douglas Duteil <https://github.com/douglasduteil>
//                 BendingBender <https://github.com/BendingBender>
//                 Borek Bernard <https://github.com/borekb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { ChildProcess, ExecOptions, SpawnOptions, SpawnSyncOptions } from "child_process";
import { Stream } from 'stream';

declare function execa(file: string, options?: Partial<execa.Options>): execa.ExecaChildProcess;
declare function execa(file: string, args?: string[], options?: Partial<execa.Options>): execa.ExecaChildProcess;
declare namespace execa {
    type StdIOOption = 'pipe' | 'ipc' | 'ignore' | number | Stream | undefined | null;

    interface ExecaOptions {
        input: string | Buffer | Stream;
        preferLocal: boolean;
        stripEof: boolean;
        extendEnv: boolean;
        argv0: string;
        localDir: string;
        reject: boolean;
        cleanup: boolean;
        stdin: StdIOOption;
        stdout: StdIOOption;
        stderr: StdIOOption;
    }

    type Options = SpawnOptions & ExecaOptions & ExecOptions;
    type SyncOptions = SpawnSyncOptions & ExecaOptions & ExecOptions;

    interface ExecaReturns {
        cmd: string;
        code: number;
        failed: boolean;
        killed: boolean;
        signal: string | null;
        stderr: string;
        stdout: string;
        timedOut: boolean;
    }

    type ExecaError = Error & ExecaReturns;

    interface ExecaChildPromise {
        catch<TResult = never>(onrejected?: ((reason: ExecaError) => TResult | PromiseLike<TResult>) | null): Promise<ExecaReturns | TResult>;
    }
    type ExecaChildProcess = ChildProcess & ExecaChildPromise & Promise<ExecaReturns>;

    function stdout(file: string, options?: Partial<Options>): Promise<string>;
    function stdout(file: string, args?: string[], options?: Partial<Options>): Promise<string>;
    function stderr(file: string, options?: Partial<Options>): Promise<string>;
    function stderr(file: string, args?: string[], options?: Partial<Options>): Promise<string>;
    function shell(command: string, options?: Partial<Options>): ExecaChildProcess;
    function sync(file: string, options?: Partial<SyncOptions>): ExecaReturns;
    function sync(file: string, args?: string[], options?: Partial<SyncOptions>): ExecaReturns;
    function shellSync(command: string, options?: Partial<Options>): ExecaReturns;
}

export = execa;
