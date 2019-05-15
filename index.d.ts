// Type definitions for log-process-errors 4.1
// Project: https://git.io/fhSGY
// Definitions by: Jørgen Vatle <https://github.com/JorgenVatle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Log level
 */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'silent' | 'default';

/**
 * Exception type.
 */
export type ExceptionType = 'uncaughtException' | 'unhandledRejection' | 'rejectionHandled' | 'multipleResolves' | 'warning';

/**
 * log-process-errors constructor options.
 */
export interface LogProcessErrorsOptions {
    /**
     * Override logger
     *
     * @link https://github.com/ehmicky/log-process-errors/blob/master/docs/API.md#log
     */
    log?(error: Error, level: LogLevel): Promise<void> | void;

    /**
     * Which log level to use for different exceptions.
     *
     * https://github.com/ehmicky/log-process-errors/blob/master/docs/API.md#log
     */
    level?: Partial<Record<ExceptionType, LogLevel>> & {
        default?(error: Error): 'silent' | 'default';
    };

    /**
     * Which process should trigger `process.exit(1)`
     *
     * @link https://github.com/ehmicky/log-process-errors/blob/master/docs/API.md#exiton
     */
    exitOn?: ExceptionType[];

    /**
     * When running tests, makes them fail if there are any process errors.
     *
     * @link https://github.com/ehmicky/log-process-errors/blob/master/docs/API.md#testing
     */
    testing: 'ava' | 'mocha' | 'jasmine' | 'tape' | 'node-tap';

    /**
     * Whether or not to colorize messages.
     *
     * @link https://github.com/ehmicky/log-process-errors/blob/master/docs/API.md#colors
     */
    colors: boolean;
}

/**
 * Log Process Errors
 *
 * @link https://github.com/ehmicky/log-process-errors/blob/master/docs/API.md#logprocesserrorsoptions
 */
export default function LogProcessErrors(options: LogProcessErrorsOptions): void;
