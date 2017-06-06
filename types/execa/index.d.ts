// Type definitions for execa 0.6
// Project: https://github.com/sindresorhus/execa#readme
// Definitions by: Douglas Duteil <https://github.com/douglasduteil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { ExecOptions, SpawnOptions, SpawnSyncOptions, SpawnSyncReturns, ChildProcess } from "child_process";
import { Stream } from 'stream';

interface ExecaOptions {
    input: string | Buffer | Stream;
    preferLocal: boolean;
    stripEof: boolean;
}

type Options = SpawnOptions & ExecaOptions & ExecOptions;

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
    catch<TResult = never>(onrejected?: ((reason: ExecaError) => TResult | PromiseLike<TResult>) | undefined | null): Promise<ExecaReturns | TResult>;
}
type ExecaChildProcess = ChildProcess & ExecaChildPromise & Promise<ExecaReturns>;

declare function execa(file: string, options?: Partial<Options>): ExecaChildProcess;
declare function execa(file: string, args?: string[], options?: Partial<Options>): ExecaChildProcess;
declare namespace execa {
    function stdout(file: string, options?: Partial<Options>): Promise<string>;
    function stdout(file: string, args?: string[], options?: Partial<Options>): Promise<string>;
    function stderr(file: string, options?: Partial<Options>): Promise<string>;
    function stderr(file: string, args?: string[], options?: Partial<Options>): Promise<string>;
    function shell(command: string, options?: SpawnOptions): ExecaChildProcess;
    function sync<T = string>(file: string, options?: SpawnSyncOptions): ExecaReturns;
    function sync<T = string>(file: string, args?: string[], options?: SpawnSyncOptions): ExecaReturns;
    function shellSync(command: string, options?: SpawnOptions): ExecaReturns;
}

export = execa;
