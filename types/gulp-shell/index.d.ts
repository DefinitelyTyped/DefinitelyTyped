// Type definitions for gulp-shell
// Project: https://github.com/sun-zheng-an/gulp-shell
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />



declare namespace shell {
    interface Shell {
        (commands: string | string[], options?: Option): NodeJS.ReadWriteStream;
        task(commands: string | string[], options?: Option): (done: Function) => NodeJS.ReadWriteStream;
    }

    interface Option {
        /**
         * You can add a custom error message for when the command fails. This can be a template which can be
         * interpolated with the current command, some file info (e.g. file.path) and some error info
         * (e.g. error.code).
         * @default 'Command `<%= command %>` failed with exit code <%= error.code %>'
         */
        errorMessage?: string;
        /**
         * By default, it will emit an error event when the command finishes unsuccessfully.
         * @default false
         */
        ignoreErrors?: boolean;
        /**
         * By default, it will print the command output.
         * @default false
         */
        quiet?: boolean;
        /**
         * Sets the current working directory for the command.
         * @default process.cwd()
         */
        cwd?: string;
        /**
         * The data that can be accessed in template.
         */
        templateData?: any;
        /**
         * You won't need to set this option unless you encounter a "stdout maxBuffer exceeded" error.
         * @default 16MB(16 * 1024 * 1024)
         */
        maxBuffer?: number;
        /**
         * The maximum amount of time in milliseconds the process is allowed to run.
         * @default
         */
        timeout?: number;
        /**
         * By default, all the commands will be executed in an environment with all the variables in process.env
         * and PATH prepended by ./node_modules/.bin (allowing you to run executables in your Node's dependencies).
         * You can override any environment variables with this option.
         * For example, setting it to {PATH: process.env.PATH} will reset the PATH
         * if the default one brings your some troubles.
         */
        env?: any;
    }
}

declare var shell: shell.Shell;

export = shell;
