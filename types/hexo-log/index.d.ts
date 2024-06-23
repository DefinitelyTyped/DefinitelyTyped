import bunyan = require("hexo-bunyan");
import streams = require("stream");

declare class HexoLogger extends bunyan {
    /**
     * Returns a boolean: is the `debug` level enabled?
     *
     * This is equivalent to `log.isDebugEnabled()` or `log.isEnabledFor(DEBUG)` in log4j.
     */
    d(): boolean;

    /**
     * Special case to log an `Error` instance to the record.
     * This adds an `err` field with exception details
     * (including the stack) and sets `msg` to the exception
     * message or you can specify the `msg`.
     */
    d(error: Error, ...params: any[]): void;

    /**
     * The first field can optionally be a "fields" object, which
     * is merged into the log record.
     *
     * To pass in an Error *and* other fields, use the `err`
     * field name for the Error instance.
     */
    d(obj: object, ...params: any[]): void;

    /**
     * Uses `util.format` for msg formatting.
     */
    d(format: any, ...params: any[]): void;

    /**
     * Returns a boolean: is the `info` level enabled?
     *
     * This is equivalent to `log.isInfoEnabled()` or `log.isEnabledFor(INFO)` in log4j.
     */
    i(): boolean;

    /**
     * Special case to log an `Error` instance to the record.
     * This adds an `err` field with exception details
     * (including the stack) and sets `msg` to the exception
     * message or you can specify the `msg`.
     */
    i(error: Error, ...params: any[]): void;

    /**
     * The first field can optionally be a "fields" object, which
     * is merged into the log record.
     *
     * To pass in an Error *and* other fields, use the `err`
     * field name for the Error instance.
     */
    i(obj: object, ...params: any[]): void;

    /**
     * Uses `util.format` for msg formatting.
     */
    i(format: any, ...params: any[]): void;

    /**
     * Returns a boolean: is the `warn` level enabled?
     *
     * This is equivalent to `log.isWarnEnabled()` or `log.isEnabledFor(WARN)` in log4j.
     */
    w(): boolean;

    /**
     * Special case to log an `Error` instance to the record.
     * This adds an `err` field with exception details
     * (including the stack) and sets `msg` to the exception
     * message or you can specify the `msg`.
     */
    w(error: Error, ...params: any[]): void;

    /**
     * The first field can optionally be a "fields" object, which
     * is merged into the log record.
     *
     * To pass in an Error *and* other fields, use the `err`
     * field name for the Error instance.
     */
    w(obj: object, ...params: any[]): void;

    /**
     * Uses `util.format` for msg formatting.
     */
    w(format: any, ...params: any[]): void;

    /**
     * Returns a boolean: is the `error` level enabled?
     *
     * This is equivalent to `log.isErrorEnabled()` or `log.isEnabledFor(ERROR)` in log4j.
     */
    e(): boolean;

    /**
     * Special case to log an `Error` instance to the record.
     * This adds an `err` field with exception details
     * (including the stack) and sets `msg` to the exception
     * message or you can specify the `msg`.
     */
    e(error: Error, ...params: any[]): void;

    /**
     * The first field can optionally be a "fields" object, which
     * is merged into the log record.
     *
     * To pass in an Error *and* other fields, use the `err`
     * field name for the Error instance.
     */
    e(obj: object, ...params: any[]): void;

    /**
     * Uses `util.format` for msg formatting.
     */
    e(format: any, ...params: any[]): void;

    /**
     * Returns a boolean: is the `info` level enabled?
     *
     * This is equivalent to `log.isInfoEnabled()` or `log.isEnabledFor(INFO)` in log4j.
     */
    log(): boolean;

    /**
     * Special case to log an `Error` instance to the record.
     * This adds an `err` field with exception details
     * (including the stack) and sets `msg` to the exception
     * message or you can specify the `msg`.
     */
    log(error: Error, ...params: any[]): void;

    /**
     * The first field can optionally be a "fields" object, which
     * is merged into the log record.
     *
     * To pass in an Error *and* other fields, use the `err`
     * field name for the Error instance.
     */
    log(obj: object, ...params: any[]): void;

    /**
     * Uses `util.format` for msg formatting.
     */
    log(format: any, ...params: any[]): void;
}

declare function createLogger(
    options?: { name?: string | undefined; silent?: boolean | undefined; debug?: boolean | undefined },
): HexoLogger;

export = createLogger;
