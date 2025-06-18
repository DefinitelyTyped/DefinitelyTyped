/// <reference types="node" />

import { Transform } from "node:stream";
import Command = require("./command");

declare namespace GulpRunner {
    export { Command };

    export interface Options {
        /**
         * The environment variables.
         * @default process.env
         */
        env?: Record<string, string> | undefined;
        /**
         * The working directory.
         * @default process.cwd()
         */
        cwd?: string | undefined;
        /**
         * Whether the output should *not* be printed.
         * @default false
         */
        silent?: boolean | undefined;
        /**
         * The verbosity level.
         * @default 2
         */
        verbosity?: 0 | 1 | 2 | 3 | undefined;
        /**
         * (Windows only) whether to use powershell instead of cmd.exe.
         * @default false
         */
        usePowerShell?: boolean | undefined;
    }
}

/**
 * A GulpRunner is a Vinyl transform stream that spawns a child process to
 * transform the file. A separate process is spawned to handle each file
 * passing through the stream.
 */
declare class GulpRunner extends Transform {
    constructor(template: string, options?: GulpRunner.Options);

    /**
     * Start a gulp pipeline and execute the command immediately, pushing the results downstream.
     *
     * Whenever an object is written into the GulpRunner, a new process is
     * spawned taking that data as standard input, and a Vinyl file wrapping the
     * process's standard output is pushed downstream.
     */
    exec(stdin?: any, callback?: (error: Error | null | undefined) => void): this;
}

declare function GulpRunner(...args: ConstructorParameters<typeof GulpRunner>): GulpRunner;

export = GulpRunner;
