// Type definitions for concurrently 4.1
// Project: https://github.com/kimmobrunfeldt/concurrently#readme
// Definitions by: Michael B. <https://github.com/Blasz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = concurrently;

declare function concurrently(
    commands: Array<concurrently.CommandObj | string>,
    options?: concurrently.Options,
): Promise<null>;

declare namespace concurrently {
    interface CommandObj {
        command: string;
        name?: string;
        prefixColor?: string;
    }
    interface Options {
        defaultInputTarget?: number;
        inputStream?: NodeJS.ReadableStream;
        killOthers?: Array<'success' | 'failure'>;
        outputStream?: NodeJS.WritableStream;
        prefix?: 'index' | 'pid' | 'time' | 'command' | 'name' | 'none' | string;
        prefixLength?: number;
        raw?: boolean;
        restartTries?: number;
        restartDelay?: number;
        successCondition?: 'first' | 'last';
        timestampFormat?: string;
    }
}
