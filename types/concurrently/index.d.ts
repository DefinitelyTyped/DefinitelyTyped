// Type definitions for concurrently 6.0
// Project: https://github.com/kimmobrunfeldt/concurrently#readme
// Definitions by: Michael B. <https://github.com/Blasz>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Ryan Ling <https://github.com/72636c>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

declare function concurrently(
    commands: Array<concurrently.CommandObj | string>,
    options?: concurrently.Options,
): Promise<concurrently.ExitInfos[]>;

declare namespace concurrently {
    interface CommandObj {
        command: string;
        cwd?: Options['cwd'];
        env?: NodeJS.ProcessEnv;
        name?: string;
        prefixColor?: string;
    }
    interface ExitInfos {
        command: CommandObj;
        /** process completion index */
        index: number;
        /** process exit code */
        exitCode: number;
    }
    interface Options {
        /**
         * The working directory to be used by all commands. Can be overridden per command.
         * @default process.cwd()
         */
        cwd?: string;
        /** the default input target when reading from `inputStream`. Default: `0`. */
        defaultInputTarget?: number;
        /** a Readable stream to read the input from, eg `process.stdin` */
        inputStream?: NodeJS.ReadableStream;
        /** an array of exiting conditions that will cause a process to kill others. Can contain any of success or failure. */
        killOthers?: Array<'success' | 'failure'>;
        /**
         * how many processes should run at once
         * @default 0
         */
        maxProcesses?: number;
        /**  a Writable stream to write logs to. Default: `process.stdout` */
        outputStream?: NodeJS.WritableStream;
        /**
         * the prefix type to use when logging processes output.
         */
        prefix?: 'index' | 'pid' | 'time' | 'command' | 'name' | 'none' | string;
        /** how many characters to show when prefixing with `command`. Default: `10` */
        prefixLength?: number;
        /** whether raw mode should be used, meaning strictly process output will be logged, without any prefixes, colouring or extra stuff. */
        raw?: boolean;
        /** the condition to consider the run was successful. */
        successCondition?: 'first' | 'last';
        /** how many attempts to restart a process that dies will be made. Default: `0` */
        restartTries?: number;
        /** how many milliseconds to wait between process restarts. Default: 0 */
        restartDelay?: number;
        /** a date-fns format to use when prefixing with time. Default: `yyyy-MM-dd HH:mm:ss.ZZZ` */
        timestampFormat?: string;
    }
}

export = concurrently;
