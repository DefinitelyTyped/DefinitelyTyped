// Type definitions for log-process-errors 6.3
// Project: https://github.com/ehmicky/log-process-errors
// Definitions by: Jørgen Vatle <https://github.com/JorgenVatle>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace logProcessErrors {
    /**
     * Exception type.
     */
    type ExceptionType =
        | "uncaughtException"
        | "unhandledRejection"
        | "rejectionHandled"
        | "multipleResolves"
        | "warning";

    /**
     * Log level
     */
    type LogLevel = "debug" | "info" | "warn" | "error" | "silent" | "default";

    type LogLevelGetter = (error: EnhancedError) => LogLevel;

    /**
     * log-process-errors constructor options.
     */
    interface Options {
        /**
         * Customizes how process errors are logged.
         *
         * By default process errors will be logged to the console using `console.error()`, `console.warn()`, etc.
         * This behavior can be overridden with this option.
         *
         * If logging is asynchronous, the function should return a promise (or use `async`/`await`). This is not
         * necessary if logging is using streams (like [`Winston`](https://github.com/winstonjs/winston)).
         *
         * @param error This error is generated based on the original process error but with an improved `name`,
         * `message` and `stack`. However the original process error is still available as the third argument
         * `originalError`.
         * @param level The log level, see `level` option.
         * @param originalError The original process error thrown by Node.
         *
         * @example
         * import logProcessErrors = require('log-process-errors');
         * import winstonLogger = require('winston');
         *
         * // Log process errors with `Winston` instead of the default:
         *
         * logProcessErrors({
         *   log(error, level, originalError) {
         *     winstonLogger[level](error.stack);
         *   },
         * });
         */
        log?(error: EnhancedError, level: LogLevel, originalError: Error): Promise<any> | void;

        /**
         * Which log level to use for different exceptions.
         *
         * @default { warning: 'warn', multipleResolves: 'info', default: 'error' }
         *
         * @example
         * import logProcessErrors = require('log-process-errors');
         *
         * logProcessErrors({
         *   level: {
         *     // Use `debug` log level for `multipleResolves` instead of `info`
         *     multipleResolves: 'debug',
         *
         *     // Skip some logs based on a condition
         *     default(error) {
         *       return shouldSkip(error) ? 'silent' : 'default';
         *     },
         *   },
         * });
         */
        level?: {
            [key in ExceptionType | "default"]?: LogLevel | LogLevelGetter;
        };

        /**
         * Which process errors should trigger `process.exit(1)`:
         *
         * - `['uncaughtException', 'unhandledRejection']` is Node.js default behavior
         *   since Node.js `15.0.0`. Before, only
         *   [`uncaughtException`](https://nodejs.org/api/process.html#process_warning_using_uncaughtexception_correctly)
         *   was enabled.
         * - use `[]` to prevent any `process.exit(1)`. Recommended if your process is
         *   long-running and does not automatically restart on exit.
         *
         * `process.exit(1)` will only be fired after successfully logging the process
         * error.
         *
         * @default ['uncaughtException', 'unhandledRejection'] for Node >= 15.0.0, ['uncaughtException'] otherwise.
         *
         * @example
         * import logProcessErrors = require('log-process-errors');
         *
         * logProcessErrors({ exitOn: ['uncaughtException', 'unhandledRejection'] });
         */
        exitOn?: ExceptionType[];

        /**
         * When running tests, makes them fail if there are any process errors.
         *
         * @default undefined
         *
         * @example
         * import logProcessErrors = require('log-process-errors');
         * // Should be initialized before requiring other dependencies
         * logProcessErrors({ testing: 'ava' });
         *
         * import test from 'ava';
         *
         * // Tests will fail because a warning is triggered
         * test('Example test', (t) => {
         *   process.emitWarning('Example warning');
         *   t.pass();
         * });
         *
         * @example
         * // To ignore specific process errors, use the `level` option:
         *
         * import logProcessErrors = require('log-process-errors');
         * // Should be initialized before requiring other dependencies
         * logProcessErrors({ testing: 'ava', level: { warning: 'silent' } });
         *
         * import test from 'ava';
         *
         * // Tests will not fail because warnings are `'silent'`
         * test('Example test', (t) => {
         *   process.emitWarning('Example warning');
         *   t.pass();
         * });
         */
        testing?: "ava" | "mocha" | "jasmine" | "tape" | "node-tap";

        /**
         * Whether or not to colorize messages.
         *
         * @default true // if the output is a terminal.
         *
         * @example
         * import logProcessErrors = require('log-process-errors');
         *
         * logProcessErrors({ colors: false });
         */
        colors?: boolean;
    }

    interface EnhancedError extends Error {
        /**
         * Possible values:
         * [`'UncaughtException'`](https://nodejs.org/api/process.html#process_event_uncaughtexception),
         * [`'UnhandledRejection'`](https://nodejs.org/api/process.html#process_event_unhandledrejection),
         * [`'RejectionHandled'`](https://nodejs.org/api/process.html#process_event_rejectionhandled),
         * [`'MultipleResolves'`](https://nodejs.org/api/process.html#process_event_multipleresolves)
         * or [`'Warning'`](https://nodejs.org/api/process.html#process_event_warning)
         */
        name: "UncaughtException" | "UnhandledRejection" | "RejectionHandled" | "MultipleResolves" | "Warning";
        message: string;
        /**
         * @link https://github.com/ehmicky/log-process-errors/blob/main/docs/API.md#errorstack
         */
        stack: string;
    }
}

/**
 * Initializes `log-process-errors`.
 *
 * @returns A function that can be fired to restore Node.js default behavior.
 *
 * @example
 * import logProcessErrors = require('log-process-errors');
 *
 * const restore = logProcessErrors();
 * restore();
 *
 * @example
 * // Full example
 *
 * import logProcessErrors = require('log-process-errors');
 * import winstonLogger = require('winston');
 *
 * logProcessErrors({
 *   log(error, level) {
 *     winstonLogger[level](error.stack);
 *   },
 *   level: { multipleResolves: 'debug' },
 *   exitOn: ['uncaughtException', 'unhandledRejection'],
 *   testing: 'ava',
 *   colors: false,
 * });
 */
declare function logProcessErrors(options?: logProcessErrors.Options): () => void;

export = logProcessErrors;
