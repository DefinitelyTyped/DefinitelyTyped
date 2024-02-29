declare namespace PhpDevelopmentServerConnection {
    interface Options {
        /**
         * The port to run on
         * @default 8000
         */
        port?: number | undefined;
        /**
         * The hostname to run on
         * @default "127.0.0.1"
         */
        hostname?: string | undefined;
        /**
         * @default "."
         */
        base?: string | undefined;
        /**
         * @default false
         */
        open?: boolean | undefined;
        /**
         * The PHP binary
         * @default "php"
         */
        bin?: string | undefined;
        root?: string | undefined;
        stdio?: string | undefined;
        /**
         * Callback to modify config options
         * @param type Either OPTIONS_SPAWN_OBJ or OPTIONS_PHP_CLI_ARR
         * @param collection An object if type is OPTIONS_SPAWN_OBJ,
         * or an array if type is OPTIONS_PHP_CLI_ARR
         * @returns Possibly modified version of collection to use instead of original
         */
        configCallback?: ConfigCallback | null | undefined;
        debug?: boolean | undefined;
        /**
         * Passed with `-c` flag
         */
        ini?: string | undefined;
        router?: string | undefined;
    }

    type ConfigCallbackType = typeof OPTIONS_SPAWN_OBJ | typeof OPTIONS_PHP_CLI_ARR;

    type ConfigCallback = (
        type: ConfigCallbackType,
        collection: Record<string, any> & string[],
    ) => Record<string, any> | string[];

    /**
     * @deprecated Used only to create static server and closeServer functions
     */
    let compat: PhpDevelopmentServerConnection & {
        OPTIONS_SPAWN_OBJ: typeof OPTIONS_SPAWN_OBJ;
        OPTIONS_PHP_CLI_ARR: typeof OPTIONS_PHP_CLI_ARR;
    };

    /**
     * @param options Options
     * @param callback Called when the sever is connected. May be passed an error
     */
    let server: PhpDevelopmentServerConnection["server"];

    /**
     * Close/Shutdown the PHP development server
     * @param callback Optional callback, passed the return of `ChildProcess.kill(...)` or nothing if not started
     */
    let closeServer: PhpDevelopmentServerConnection["closeServer"];

    let OPTIONS_SPAWN_OBJ: "spawn";
    let OPTIONS_PHP_CLI_ARR: "php_args";
}

declare class PhpDevelopmentServerConnection {
    constructor(opts?: PhpDevelopmentServerConnection.Options);

    /**
     * @param options Options to override ones set in the constructor
     * @param callback Called when the sever is connected. May be passed an error
     */
    server(options?: PhpDevelopmentServerConnection.Options, callback?: (err?: Error) => void): void;

    /**
     * Close/Shutdown the PHP development server
     * @param callback Optional callback, passed the return of `ChildProcess.kill(...)` or nothing if not started
     */
    closeServer(callback?: (killResult?: boolean) => void): void;

    /**
     * The port the server is running on
     */
    get port(): number;
}

export = PhpDevelopmentServerConnection;
