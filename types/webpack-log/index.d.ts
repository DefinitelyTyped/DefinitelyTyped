/**
 * Options for creating a webpack logger.
 */
interface WebpackLogOptions {
    /**
     * Log level. Default: 'info'.
     */
    level?: "trace" | "debug" | "info" | "warn" | "error" | "silent";

    /**
     * Name of the logger. Default: '<webpack-log>'.
     */
    name?: string;

    /**
     * Whether to include timestamp in output. Default: false.
     */
    timestamp?: boolean;

    /**
     * Whether to generate unique logger ID. Default: true.
     */
    unique?: boolean;
}

/**
 * Logger instance returned by webpack-log.
 */
interface WebpackLogger {
    /**
     * Log at trace level.
     */
    trace(...args: unknown[]): void;

    /**
     * Log at debug level.
     */
    debug(...args: unknown[]): void;

    /**
     * Log at info level.
     */
    info(...args: unknown[]): void;

    /**
     * Log at warn level.
     */
    warn(...args: unknown[]): void;

    /**
     * Log at error level.
     */
    error(...args: unknown[]): void;
}

/**
 * Creates a logger for the Webpack ecosystem.
 *
 * @param options - Logger configuration options
 * @returns A logger instance with trace, debug, info, warn, and error methods
 *
 * @example
 * ```javascript
 * const getLogger = require('webpack-log');
 *
 * const log = getLogger({ name: 'my-plugin' });
 * log.info('Starting plugin');
 * log.error('Something went wrong');
 * ```
 */
declare function getLogger(options?: WebpackLogOptions): WebpackLogger;

declare namespace getLogger {
    export { WebpackLogger, WebpackLogOptions };
}

export = getLogger;
