// Type definitions for nodemon 1.19
// Project: http://nodemon.io
// Definitions by: Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = nodemon;

declare function nodemon(options: nodemon.Settings | string): typeof nodemon;

declare namespace nodemon {
    function restart(): void;

    function addListener(event: string | symbol, listener: (...args: any[]) => void): typeof nodemon;
    function addListener(
        event: 'start' | 'exit' | 'crash' | 'config:update' | 'readable',
        listener: () => void,
    ): typeof nodemon;
    function addListener(event: 'restart', listener: (files?: string[]) => void): typeof nodemon;
    function addListener(event: 'quit', listener: (code?: number) => void): typeof nodemon;
    function addListener(event: 'watching', listener: (file: string) => void): typeof nodemon;
    function addListener(event: 'log', listener: (msg: LogMessage) => void): typeof nodemon;
    function addListener(event: 'stdout' | 'stderr', listener: (data: Buffer) => void): typeof nodemon;

    function on(event: string | symbol, listener: (...args: any[]) => void): typeof nodemon;
    function on(event: 'start' | 'exit' | 'crash' | 'config:update' | 'readable', listener: () => void): typeof nodemon;
    function on(event: 'restart', listener: (files?: string[]) => void): typeof nodemon;
    function on(event: 'quit', listener: (code?: number) => void): typeof nodemon;
    function on(event: 'watching', listener: (file: string) => void): typeof nodemon;
    function on(event: 'log', listener: (msg: LogMessage) => void): typeof nodemon;
    function on(event: 'stdout' | 'stderr', listener: (data: Buffer) => void): typeof nodemon;

    function once(event: string | symbol, listener: (...args: any[]) => void): typeof nodemon;
    function once(
        event: 'start' | 'exit' | 'crash' | 'config:update' | 'readable',
        listener: () => void,
    ): typeof nodemon;
    function once(event: 'quit', listener: (code?: number) => void): typeof nodemon;
    function once(event: 'restart', listener: (files?: string[]) => void): typeof nodemon;
    function once(event: 'watching', listener: (file: string) => void): typeof nodemon;
    function once(event: 'log', listener: (msg: LogMessage) => void): typeof nodemon;
    function once(event: 'stdout' | 'stderr', listener: (data: Buffer) => void): typeof nodemon;

    function removeAllListeners(event?: string | symbol): typeof nodemon;

    function emit(event: string | symbol, ...args: any[]): boolean;
    function emit(event: 'start' | 'exit' | 'crash' | 'config:update' | 'readable'): boolean;
    function emit(event: 'quit', code?: number): boolean;
    function emit(event: 'restart', files?: string[]): boolean;
    function emit(event: 'watching', listener: (file: string) => void): boolean;
    function emit(event: 'log', msg: LogMessage): boolean;
    function emit(event: 'stdout' | 'stderr', data: Buffer): boolean;

    function reset(done?: () => void): void;

    interface Settings {
        env?: { [key: string]: string | boolean | number } | undefined;
        script?: string | undefined;
        /**
         * Extensions to look for, ie. js,jade,hbs.
         */
        ext?: string | undefined;
        /**
         * Execute script with "app", ie. -x "python -v". May use variables.
         */
        exec?: string | undefined;
        /**
         * Watch directory or file.  One entry per watched value.  Wildcards are allowed.
         */
        watch?: ReadonlyArray<string | { re: string }> | undefined;
        /**
         * Ignore specific files or directories.  One entry per ignored value.  Wildcards are allowed.
         */
        ignore?: ReadonlyArray<string | { re: string }> | undefined;
        /**
         * Minimise nodemon messages to start/stop only.
         */
        quiet?: boolean | undefined;
        /**
         * Show detail on what is causing restarts.
         */
        verbose?: boolean | undefined;
        /**
         * Try to read from stdin. Set to false to have nodemon pass stdin directly to child process
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
         *
         * Use polling to watch for changes (typically needed when watching over a network/Docker)
         */
        legacyWatch?: boolean | undefined;
        /**
         * Exit on crash, allows use of nodemon with daemon tools like forever.js.
         */
        exitcrash?: boolean | undefined;
        /**
         * The global config file is useful for setting up default executables
         */
        execMap?: {
            [k: string]: any;
        } | undefined;
        events?: { [key: string]: string } | undefined;
        restartable?: string | undefined;
        args?: ReadonlyArray<string> | undefined;
        /**
         * Arguments to pass to node if exec is "node"
         */
        nodeArgs?: ReadonlyArray<string> | undefined;
        scriptPosition?: number | undefined;
        /**
         * Set to false to disable color output
         */
        colours?: boolean | undefined;
        /**
         * Change into <dir> before running the script
         */
        cwd?: string | undefined;
        /**
         * Print full debug configuration
         */
        dump?: boolean | undefined;
        /**
         * Root paths to ignore
         */
        ignoreRoot?: string[] | undefined;
        /**
         * Opt-out of update version check
         */
        noUpdateNotifier?: boolean | undefined;
        /**
         * Combined with legacyWatch, milliseconds to poll for (default 100)
         */
        pollingInterval?: number | undefined;
        /**
         * Use specified kill signal instead of default (ex. SIGTERM)
         */
        signal?: {
            [k: string]: any;
        } | undefined;
        /**
         * Force nodemon to use spawn (over fork) [node only]
         */
        spawn?: boolean | undefined;
        [k: string]: any;
    }

    interface LogMessage {
        type: string;
        message: string;
        colour: string;
    }
}
