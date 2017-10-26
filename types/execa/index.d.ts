// Type definitions for execa 0.8
// Project: https://github.com/sindresorhus/execa#readme
// Definitions by: Douglas Duteil <https://github.com/douglasduteil>
//                 BendingBender <https://github.com/BendingBender>
//                 Borek Bernard <https://github.com/borekb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.5

/// <reference types="node" />

import { ChildProcess, ExecOptions, SpawnOptions, SpawnSyncOptions } from "child_process";
import { Stream } from 'stream';

declare function execa(file: string, options?: Partial<execa.Options>): execa.ExecaChildProcess;
declare function execa(file: string, args?: string[], options?: Partial<execa.Options>): execa.ExecaChildProcess;
declare namespace execa {

    export type StdIOOption = 'pipe' | 'ipc' | 'ignore' | number | Stream | undefined | null;

    export interface ExecaOptions {
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

    export type Options = SpawnOptions & ExecaOptions & ExecOptions;
    export type SyncOptions = SpawnSyncOptions & ExecaOptions & ExecOptions;

    export interface ExecaReturns {
        cmd: string;
        code: number;
        failed: boolean;
        killed: boolean;
        signal: string | null;
        stderr: string;
        stdout: string;
        timedOut: boolean;
    }

    export type ExecaError = Error & ExecaReturns;

    export interface ExecaChildPromise {
        catch<TResult = never>(onrejected?: ((reason: ExecaError) => TResult | PromiseLike<TResult>) | null): Promise<ExecaReturns | TResult>;
    }
    export type ExecaChildProcess = ChildProcess & ExecaChildPromise & Promise<ExecaReturns>;

    export function stdout(file: string, options?: Partial<Options>): Promise<string>;
    export function stdout(file: string, args?: string[], options?: Partial<Options>): Promise<string>;
    export function stderr(file: string, options?: Partial<Options>): Promise<string>;
    export function stderr(file: string, args?: string[], options?: Partial<Options>): Promise<string>;
    export function shell(command: string, options?: Partial<Options>): ExecaChildProcess;
    export function sync(file: string, options?: Partial<SyncOptions>): ExecaReturns;
    export function sync(file: string, args?: string[], options?: Partial<SyncOptions>): ExecaReturns;
    export function shellSync(command: string, options?: Partial<Options>): ExecaReturns;
}

export = execa;
