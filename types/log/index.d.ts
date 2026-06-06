interface LogFunction {
    /**
     * log doesn't force any specific arguments handling.
     * Still it is recommended to assume printf-like message format, as all currently available writers are setup to support it.
     * Placeholders support reflects one implemented in Node.js [`util.format`](https://nodejs.org/api/util.html#utilformatformat-args).
     *
     * If using placeholders, the first argument is a string containing zero or more placeholder tokens.
     * Each placeholder token is replaced with the converted value from the corresponding argument.
     * Supported placeholders are:
     * * %s - String.
     * * %d - Number (integer or floating point value).
     * * %i - Integer.
     * * %f - Floating point value.
     * * %j - JSON. Replaced with the string '[Circular]' if the argument contains circular references.
     * * %o - Object. A string representation of an object with generic JavaScript object formatting.
     *                Similar to [`util.inspect`](https://nodejs.org/api/util.html#utilinspectobject-options) with options `{ showHidden: true, depth: 4, showProxy: true }`.
     *                This will show the full object including non-enumerable symbols and properties.
     * * %O - Object. A string representation of an object with generic JavaScript object formatting.
     *                Similar to [`util.inspect`](https://nodejs.org/api/util.html#utilinspectobject-options) without options.
     *                This will show the full object not including non-enumerable symbols and properties.
     * * %% - single percent sign ('%'). This does not consume an argument.
     *
     * ```
     * log.info("Log out different things!", 123, { "prop": true })
     * log.info("This uses %i format %s", 2, "placeholders")
     * ```
     */
    (...args: any[]): void;

    /** Dynamically disable log output at runtime */
    disable: () => {
        /** Restore previous logs visibility state */
        restore: () => void;
    };
}

interface Logger {
    /** debugging information (hidden by default) */
    debug: LogFunction;
    /** a purely informational message (hidden by default) */
    info: LogFunction;
    /** condition normal, but significant */
    notice: LogFunction;
    /** condition warning */
    warning: LogFunction;
    /** @see warning */
    warn: LogFunction;
    /** condition error - to notify of errors accompanied with recovery mechanism (hence reported as log and not as uncaught exception) */
    error: LogFunction;

    /** Get namespaced logger (debug lib style) */
    get: (namespace: string) => Logger;
}

declare const log: Logger;
export = log;
