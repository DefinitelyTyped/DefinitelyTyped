// Type definitions for concurrently 6.4
// Project: https://github.com/open-cli-tools/concurrently#readme
// Definitions by: Michael B. <https://github.com/Blasz>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Ryan Ling <https://github.com/72636c>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Color as ChalkColor } from 'chalk';

declare function concurrently(
    commands: Array<concurrently.CommandObj | string>,
    options?: concurrently.Options,
): Promise<concurrently.ExitInfos[]>;

declare namespace concurrently {
    interface CommandObj {
        command: string;
        cwd?: Options['cwd'] | undefined;
        env?: NodeJS.ProcessEnv | undefined;
        name?: string | undefined;
        prefixColor?: typeof ChalkColor | undefined;
    }
    interface ExitInfos {
        command: CommandObj;
        /** process completion index */
        index: number;
        /** process exit code */
        exitCode: number;
        /** indicates if the process was killed as a result of `killOthers` */
        killed: boolean;
    }
    interface Options {
        /**
         * The working directory to be used by all commands. Can be overridden per command.
         * @default process.cwd()
         */
        cwd?: string | undefined;
        /** the default input target when reading from `inputStream`. Default: `0`. */
        defaultInputTarget?: number | undefined;
        /** Indices or names of commands whose output should not be logged */
        hide?: Array<string | number> | undefined;
        /** a Readable stream to read the input from, eg `process.stdin` */
        inputStream?: NodeJS.ReadableStream | undefined;
        /** an array of exiting conditions that will cause a process to kill others. Can contain any of success or failure. */
        killOthers?: Array<'success' | 'failure'> | undefined;
        /**
         * how many processes should run at once
         * @default 0
         */
        maxProcesses?: number | undefined;
        /**  a Writable stream to write logs to. Default: `process.stdout` */
        outputStream?: NodeJS.WritableStream | undefined;
        /**
         * the prefix type to use when logging processes output.
         */
        prefix?: 'index' | 'pid' | 'time' | 'command' | 'name' | 'none' | string | undefined;
        /**
         * list of chalk colors to use on prefixes.
         * If there are more commands than colors, the last color will be repeated.
         */
        prefixColors?: Array<typeof ChalkColor> | undefined;
        /** how many characters to show when prefixing with `command`. Default: `10` */
        prefixLength?: number | undefined;
        /** whether raw mode should be used, meaning strictly process output will be logged, without any prefixes, colouring or extra stuff. */
        raw?: boolean | undefined;
        /** the condition to consider the run was successful. */
        successCondition?: 'first' | 'last' | undefined;
        /** how many attempts to restart a process that dies will be made. Default: `0` */
        restartTries?: number | undefined;
        /** how many milliseconds to wait between process restarts. Default: 0 */
        restartDelay?: number | undefined;
        /** a date-fns format to use when prefixing with time. Default: `yyyy-MM-dd HH:mm:ss.ZZZ` */
        timestampFormat?: string | undefined;
    }
}

export = concurrently;
