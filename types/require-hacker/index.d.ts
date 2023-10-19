export interface Resolve {
    /**
     * @param path Path that is `require`d
     * @param module Module in which the `require` call originated
     * @return Valid CommonJS JavaScript module source code or `undefined` to skip this hook
     */
    (path: string, module: any): string | undefined;
}

export interface Unmount {
    /** Unmount this `require` hook from the system. */
    unmount(): void;
}

export interface LogOptions {
    /* Log debug messages to the console. */
    debug?: boolean | undefined;
}

export interface GlobalResolve {
    /**
     * @param path Path that is `require`d
     * @param module Module in which the `require` call originated
     */
    (path: string, module: any):
        | {
            /**
             * The absolute path of the path argument passed to this `require` function (which could be relative).
             */
            path: string;
            /** Valid CommonJS JavaScript module source code. */
            source: string;
        }
        | undefined;
}

export interface GlobalHookOptions {
    /**
     * Set the `require` interception behavior:
     * - `true` Intercept all `require` calls before they are passed to the Node.js `require` loader.
     * - `false` Intercept only those `require` calls which failed to be resolved by the Node.js `require`
     * loader.
     */
    precede_node_loader?: boolean | undefined;
}

declare class Log {
    options: LogOptions;

    constructor(preamble: unknown, options: LogOptions);

    debug(...args: unknown[]): void;
    error(...args: unknown[]): void;
    trace(...args: unknown[]): void;
    warning(...args: unknown[]): void;
}

declare const requireHacker: {
    global_hook_resolved_modules: {
        [path: string]: string;
    };
    global_hooks_enabled: boolean;
    log: Log;
    occupied_file_extensions: Set<string>;
    path_resolvers: Resolve[];
    preceding_path_resolvers: Resolve[];

    /**
     * Intercept all `require` calls.
     *
     * @param id Unique ID
     * @param resolve Function to resolve a matching path to a valid path and JavaScript source.
     * @param options Options for setting global hook behaviour.
     * @return Object containing `unmount` method.
     */
    global_hook(id: string, resolve: GlobalResolve, options?: GlobalHookOptions): Unmount;
    /**
     * Intercept all `require` calls for paths with this file extension and reroute them to the resolve function.
     *
     * @param extension Require paths to match to `resolve`.
     * @param resolve Function to resolve a matching path to valid JavaScript source.
     * @return Object containing `unmount` method.
     */
    hook(extension: string, resolve: Resolve): Unmount;
    /**
     * Resolve a requireable path to a real filesystem path to a JavaScript or JSON file.
     * Resolution is performed relative to the passed module.
     */
    resolve: Resolve;
    /**
     * Intercept all `require` calls and tamper with the path, modifying it if needed.
     * Resolver should return a path to a valid JavaScript or JSON file, or return nothing.
     */
    resolver(resolve: Resolve): Unmount;
    /** Convert anything to valid CommonJS JavaScript module source code. */
    to_javascript_module_source(anything: unknown): string;
};

export default requireHacker;
