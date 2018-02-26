// Type definitions for execa 0.8
// Project: https://github.com/sindresorhus/execa#readme
// Definitions by: Douglas Duteil <https://github.com/douglasduteil>
//                 BendingBender <https://github.com/BendingBender>
//                 Borek Bernard <https://github.com/borekb>
//                 Mick Dekkers <https://github.com/mickdekkers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { ChildProcess } from 'child_process';
import { Stream } from 'stream';

/**
 * A better `child_process`
 */
declare namespace execa {
    interface ExecaStatic {
        /**
         * Execute a file.
         *
         * Think of this as a mix of `child_process.execFile` and `child_process.spawn`.
         * @returns a `child_process` instance which is enhanced to also be a `Promise` for a result `Object` with `stdout` and `stderr` properties.
         */
        (file: string, args?: string[], options?: Options): ExecaChildProcess;
        (file: string, options?: Options): ExecaChildProcess;

        /**
         * Execute a file.
         *
         * Think of this as a mix of `child_process.execFile` and `child_process.spawn`.
         * @returns a `child_process` instance which is enhanced to also be a `Promise` for `stdout`.
         */
        stdout(file: string, args?: string[], options?: Options): Promise<string>;
        stdout(file: string, options?: Options): Promise<string>;

        /**
         * Execute a file.
         *
         * Think of this as a mix of `child_process.execFile` and `child_process.spawn`.
         * @returns a `child_process` instance which is enhanced to also be a `Promise` for `stderr`.
         */
        stderr(file: string, args?: string[], options?: Options): Promise<string>;
        stderr(file: string, options?: Options): Promise<string>;

        /**
         * Execute a command through the system shell.
         *
         * Prefer `execa()` whenever possible, as it's both faster and safer.
         * @returns a `child_process` instance which is enhanced to also be a `Promise` for a result `Object` with `stdout` and `stderr` properties.
         */
        shell(command: string, options?: Options): ExecaChildProcess;

        /**
         * Execute a file synchronously.
         *
         * Think of this as a mix of `child_process.execFile` and `child_process.spawn`.
         * @returns the same result object as `child_process.spawnSync`.
         * @throws an `Error` if the command fails.
         */
        sync(file: string, args?: string[], options?: SyncOptions): ExecaReturns;
        sync(file: string, options?: SyncOptions): ExecaReturns;

        /**
         * Execute a command synchronously through the system shell.
         *
         * @returns the same result object as `child_process.spawnSync`.
         * @throws an `Error` if the command fails.
         */
        shellSync(command: string, options?: Options): ExecaReturns;
    }

    type StdIOOption = 'pipe' | 'ipc' | 'ignore' | Stream | number | null | undefined;

    interface CommonOptions {
        /**
         * Current working directory of the child process.
         * @default `process.cwd()`
         */
        cwd?: string;
        /**
         * Environment key-value pairs.
         * Extends automatically from `process.env`.
         * Set `extendEnv` to `false` if you don't want this.
         * @default `process.env`
         */
        env?: NodeJS.ProcessEnv;
        /**
         * Set to `false` if you don't want to extend the environment variables when providing the `env` property.
         * @default `true`
         */
        extendEnv?: boolean;
        /**
         * Explicitly set the value of `argv[0]` sent to the child process.
         * This will be set to `command` or `file` if not specified.
         */
        argv0?: string;
        /**
         * The `stdio` option is used to configure the pipes that are established between the parent and child process.
         * By default, the child's stdin, stdout, and stderr are redirected to corresponding `subprocess.stdin`, `subprocess.stdout`, and `subprocess.stderr` streams on the `ChildProcess` object.
         * @default `'pipe'`
         *
         * @see https://nodejs.org/api/child_process.html#child_process_options_stdio
         */
        stdio?: 'pipe' | 'ignore' | 'inherit' | StdIOOption[];
        /**
         * Prepare child to run independently of its parent process.
         * Specific behavior depends on the platform.
         * @see https://nodejs.org/api/child_process.html#child_process_options_detached
         */
        detached?: boolean;
        /**
         * Sets the user identity of the process.
         */
        uid?: number;
        /**
         * Sets the group identity of the process.
         */
        gid?: number;
        /**
         * If `true`, runs `command` inside of a shell.
         * Uses `/bin/sh` on UNIX and `cmd.exe` on Windows.
         * A different shell can be specified as a string.
         * The shell should understand the `-c` switch on UNIX or `/d /s /c` on Windows.
         * @default `false`
         */
        shell?: boolean | string;
        /**
         * If `true`, no quoting or escaping of arguments is done on Windows.
         * Ignored on other platforms.
         * This is set to `true` automatically when `shell` is specified.
         * @default `false`
         */
        windowsVerbatimArguments?: boolean;
        /**
         * Strip EOF (last newline) from the output.
         * @default `true`
         * @see https://github.com/sindresorhus/strip-eof
         */
        stripEof?: boolean;
        /**
         * Prefer locally installed binaries when looking for a binary to execute.
         * If you `$ npm install foo`, you can then `execa('foo')`.
         * @default `true`
         */
        preferLocal?: boolean;
        /**
         * Preferred path to find locally installed binaries in (use with `preferLocal`).
         * @default `process.cwd()`
         */
        localDir?: string;
        /**
         * Setting this to `false` resolves the promise with the error instead of rejecting it.
         * @default `true`
         */
        reject?: boolean;
        /**
         * Keep track of the spawned process and `kill` it when the parent process exits.
         * @default `true`
         */
        cleanup?: boolean;
        /**
         * Specify the character encoding used to decode the `stdout` and `stderr` output.
         * @default `utf8`
         */
        encoding?: string;
        /**
         * If `timeout` is greater than `0`, the parent will send the signal identified by the `killSignal` property (the default is `SIGTERM`) if the child runs longer than `timeout` milliseconds.
         * @default `0`
         */
        timeout?: number;
        /**
         * Largest amount of data in bytes allowed on `stdout` or `stderr`.
         * @default `10000000` (10MB)
         */
        maxBuffer?: number;
        /**
         * Signal value to be used when the spawned process will be killed.
         * @default `SIGTERM`
         */
        killSignal?: string | number;
        /**
         * Used to configure the stdin pipe that is established between the parent and child process.
         * @default `'pipe'`
         * @see https://nodejs.org/api/child_process.html#child_process_options_stdio
         */
        stdin?: StdIOOption;
        /**
         * Used to configure the stdout pipe that is established between the parent and child process.
         * @default `'pipe'`
         * @see https://nodejs.org/api/child_process.html#child_process_options_stdio
         */
        stdout?: StdIOOption;
        /**
         * Used to configure the stderr pipe that is established between the parent and child process.
         * @default `'pipe'`
         * @see https://nodejs.org/api/child_process.html#child_process_options_stdio
         */
        stderr?: StdIOOption;
    }

    interface Options extends CommonOptions {
        /**
         * Write some input to the `stdin` of your binary.
         */
        input?: string | Buffer | Stream;
    }

    interface SyncOptions extends CommonOptions {
        /**
         * Write some input to the `stdin` of your binary.
         * Streams are not allowed when using the synchronous methods.
         */
        input?: string | Buffer;
    }

    interface ExecaReturns {
        /**
         * The command that was run.
         */
        cmd: string;
        /**
         * The exit code of the process that was run.
         */
        code: number;
        /**
         * Whether the process failed to run.
         */
        failed: boolean;
        /**
         * Whether the process was killed.
         */
        killed: boolean;
        /**
         * The signal that was used to terminate the process.
         */
        signal: string | null;
        /**
         * The output of the process on stderr.
         */
        stderr: string;
        /**
         * The output of the process on stdout.
         */
        stdout: string;
        /**
         * Whether the process timed out.
         */
        timedOut: boolean;
    }

    type ExecaError = Error & ExecaReturns;

    interface ExecaChildPromise {
        catch<TResult = never>(onrejected?: ((reason: ExecaError) => TResult | PromiseLike<TResult>) | null): Promise<ExecaReturns | TResult>;
    }

    type ExecaChildProcess = ChildProcess & ExecaChildPromise & Promise<ExecaReturns>;
}

declare var execa: execa.ExecaStatic;

export = execa;
