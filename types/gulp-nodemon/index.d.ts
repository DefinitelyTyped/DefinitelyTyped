/// <reference types="node" />
import * as Gulp from "gulp";

declare namespace nodemon {
    interface Nodemon {
        (option?: Option): EventEmitter;
    }

    interface Option extends _Option {
        tasks?: string[] | ((changedFiles: string[]) => string[]) | undefined;
    }

    // TODO: Properties may be insufficient
    // TODO: In future this interface should be moved to nodemon.d.ts
    interface _Option {
        env?: { [key: string]: string | boolean | number } | undefined;
        script?: string | undefined;
        /**
         * Extensions to look for, ie. js,jade,hbs.
         */
        ext?: string | undefined;
        /**
         * Execute script with "app", ie. -x "python -v".
         */
        exec?: string | undefined;
        /**
         * Watch directory "dir" or files. use once for each directory or file to watch.
         */
        watch?: string[] | undefined;
        /**
         * Ignore specific files or directories.
         */
        ignore?: string[] | undefined;
        /**
         * Minimise nodemon messages to start/stop only.
         */
        quiet?: boolean | undefined;
        /**
         * Show detail on what is causing restarts.
         */
        verbose?: boolean | undefined;
        /**
         * Try to read from stdin.
         */
        stdin?: boolean | undefined;
        stdout?: boolean | undefined;
        /**
         * Execute script on change only, not startup
         */
        runOnChangeOnly?: boolean | undefined;
        /**
         * Debounce restart in seconds.
         */
        delay?: number | undefined;
        /**
         * Forces node to use the most compatible version for watching file changes.
         */
        legacyWatch?: boolean | undefined;
        /**
         * Exit on crash, allows use of nodemon with daemon tools like forever.js.
         */
        exitcrash?: boolean | undefined;
        execMap?: { [key: string]: string | boolean | number } | undefined;
        events?: { [key: string]: string } | undefined;
        restartable?: string | undefined;
        args?: string[] | undefined;
        nodeArgs?: string[] | undefined;
        scriptPosition?: number | undefined;
        done?: Gulp.TaskFunctionCallback | undefined;
    }

    interface EventEmitter extends NodeJS.EventEmitter {
        addListener(event: string, listener: Function): this;
        addListener(event: string, tasks: string[]): this;
        on(event: string, listener: Function): this;
        on(event: string, tasks: string[]): this;
        once(event: string, listener: Function): this;
        once(event: string, tasks: string[]): this;
    }
}

declare var nodemon: nodemon.Nodemon;

export = nodemon;
