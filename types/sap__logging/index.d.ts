import * as express from "express-serve-static-core";
import * as http from "http";

export interface AppContextOptions {
    /**
     * Only applicable to SAP applications
     */
    csnComponent?: string;
}

/**
 * Contains information that is valid for the whole application
 */
export interface AppContext {
    /**
     * Change severity level
     * @param path file path
     * @param level severity level
     */
    setLevel(path: string, level: LogLevels | TraceLevels): void;
    /**
     * Clears the security level to default
     * @param path file path
     */
    unsetLevel(path: string): void;

    /**
     * Use custom fields
     * @param fields field names
     */
    setCustomFields(fields: string[]): void;
    /**
     * A separate log context should be created for each new event (HTTP request received, job execution started, message from
     * messaging service received). Because of the asynchronous nature of Node.js, entries produced during the processing of
     * different events can be mixed. All entries contain information specific to the log context they are associated with,
     * which helps to distinguish between entries produced during the processing of different events.
     *
     * @param options Options to create log context
     */
    createLogContext(options?: LogContextOptions): LogContext;
}

export interface LogContextOptions {
    /**
     * Included in all logs and traces, should be unique. Used to distinguish entries from different log contexts.
     * Defaults to an auto-generated value. If `req` is provided, the value is taken from the request headers `x-request-id`
     * and `x-vcap-request-id` if present. It is recommended to explicitly pass an empty string for log contexts used during
     * application startup. If `req` is present, then this `id` can be thought of as a request id, because all log/trace entries
     * for that request will have the same id.
     */
    id?: string;
    /**
     * Used to correlate entries for a logical transaction which involves processing within different applications. If the value
     * is not set explicitly, then it is taken from the `x-correlationid` header (if req is provided and the header is present) or
     * from the `id` of the log context.
     */
    correlationId?: string;
    /**
     * Represents an HTTP request
     */
    req?: http.IncomingMessage;
}

/**
 * Contains information that is valid for the current context.
 */
export interface LogContext {
    /**
     * The id of the log context.
     */
    id: string;
    /**
     * The correlation id of the log context. This property is useful when the value needs to be sent to another application.
     */
    correlationId: string;
    /**
     * AppContext object associated with this log context
     */
    getAppContext(): AppContext;
    /**
     * Logger instance
     * @param path file name or path
     * @example Usage
     * ```js
     * logContext.getLogger('/Application/Network')
     * ```
     */
    getLogger(path: string): Logger;
    /**
     * Tracer instance
     * @param path file name or path
     * @example Usage
     * ```js
     * logContext.getTracer(__filename)
     * ```
     */
    getTracer(path: string): Tracer;
    /**
     * log request metrics for an HTTP response
     * @param res HTTP response
     */
    enableNetworkLog(res: http.ServerResponse): void;
}

export type LogLevels = "info" | "warning" | "error" | "fatal";

export interface Logger {
    /**
     * Gets the severity level
     */
    getLevel(): LogLevels;
    /**
     * Check whether an entry with a specific severity level will be logged with the current level configuration
     * @param level
     */
    isEnabled(level: LogLevels): boolean;

    /**
     * Uses the same string interpolation mechanism as with {@link https://nodejs.org/api/util.html#util_util_format_format_args util.format}.
     *
     * If the first argument is an error, its message is appended to the log message. Also, the error stack is written to the trace.
     *
     * If the last argument is an object with a custom field, the custom field will be included in the log output as a custom field
     * and not as part of the message.
     */
    info(...args: any[]): void;
    /**
     * Uses the same string interpolation mechanism as with {@link https://nodejs.org/api/util.html#util_util_format_format_args util.format}.
     *
     * If the first argument is an error, its message is appended to the log message. Also, the error stack is written to the trace.
     *
     * If the last argument is an object with a custom field, the custom field will be included in the log output as a custom field
     * and not as part of the message.
     */
    warning(...args: any[]): void;
    /**
     * Uses the same string interpolation mechanism as with {@link https://nodejs.org/api/util.html#util_util_format_format_args util.format}.
     *
     * If the first argument is an error, its message is appended to the log message. Also, the error stack is written to the trace.
     *
     * If the last argument is an object with a custom field, the custom field will be included in the log output as a custom field
     * and not as part of the message.
     */
    error(...args: any[]): void;
    /**
     * Uses the same string interpolation mechanism as with {@link https://nodejs.org/api/util.html#util_util_format_format_args util.format}.
     *
     * If the first argument is an error, its message is appended to the log message. Also, the error stack is written to the trace.
     *
     * If the last argument is an object with a custom field, the custom field will be included in the log output as a custom field
     * and not as part of the message.
     */
    fatal(...args: any[]): void;
}

export type TraceLevels = "debug" | "path" | "info" | "warning" | "error" | "fatal";

export interface Tracer {
    /**
     * Gets the severity level
     */
    getLevel(): TraceLevels;
    /**
     * Check whether an entry with a specific severity level will be logged with the current level configuration
     * @param level
     */
    isEnabled(level: TraceLevels): boolean;

    /**
     * Uses the same string interpolation mechanism as with {@link https://nodejs.org/api/util.html#util_util_format_format_args util.format}.
     *
     * If the first argument is an error, its message is appended to the log message. Also, the error stack is written to the trace.
     */
    debug(...args: any[]): void;
    /**
     * Uses the same string interpolation mechanism as with {@link https://nodejs.org/api/util.html#util_util_format_format_args util.format}.
     *
     * If the first argument is an error, its message is appended to the log message. Also, the error stack is written to the trace.
     */
    path(...args: any[]): void;
    /**
     * Uses the same string interpolation mechanism as with {@link https://nodejs.org/api/util.html#util_util_format_format_args util.format}.
     *
     * If the first argument is an error, its message is appended to the log message. Also, the error stack is written to the trace.
     */
    info(...args: any[]): void;
    /**
     * Uses the same string interpolation mechanism as with {@link https://nodejs.org/api/util.html#util_util_format_format_args util.format}.
     *
     * If the first argument is an error, its message is appended to the log message. Also, the error stack is written to the trace.
     */
    warning(...args: any[]): void;
    /**
     * Uses the same string interpolation mechanism as with {@link https://nodejs.org/api/util.html#util_util_format_format_args util.format}.
     *
     * If the first argument is an error, its message is appended to the log message. Also, the error stack is written to the trace.
     */
    error(...args: any[]): void;
    /**
     * Uses the same string interpolation mechanism as with {@link https://nodejs.org/api/util.html#util_util_format_format_args util.format}.
     *
     * If the first argument is an error, its message is appended to the log message. Also, the error stack is written to the trace.
     */
    fatal(...args: any[]): void;

    /**
     * Used to record that a function has been entered in the program flow. You may pass all of the arguments of your function to the entering function and they will be traced.
     * @param fnName function name
     * @param args arguments of function
     */
    entering(fnName: string, ...args: any[]): void;
    /**
     * Typically used in pair with the entering method. You may pass the return value of your function to the exiting function.
     * @param fnName function name
     * @param args arguments of function
     */
    exiting(fnName: string, ...args: any[]): void;
    /**
     * Used when you would like to trace when the code is about to throw an error. You may pass the error that is about to be thrown as an argument.
     * @param fnName function name
     * @param error error being thrown
     */
    throwing(fnName: string, error?: Error): void;
    /**
     * Used in catch blocks. You may pass the caught error as an argument.
     * @param fnName function name
     * @param error error thrown
     */
    catching(fnName: string, error?: Error): void;
}

/**
 * To create the application context, pass some application-wide options. The application context contains information
 * that is valid for the whole application
 */
export function createAppContext(options?: AppContextOptions): AppContext;

/**
 * Utility middleware that can be used for logging. It automatically attaches a property named "loggingContext"
 * to the HTTP request object.
 */
export function middleware(options: {
    /**
     * An application context object
     */
    appContext: AppContext;
    /**
     * boolean specifying whether an entry containing request metrics will be logged for every finished HTTP request.
     * @default false
     */
    logNetwork?: boolean;
}): ReturnType<express.IRouter["use"]>;
