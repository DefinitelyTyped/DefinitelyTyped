// Type definitions for pino 5.15
// Project: https://github.com/pinojs/pino.git, http://getpino.io
// Definitions by: Peter Snider <https://github.com/psnider>
//                 BendingBender <https://github.com/BendingBender>
//                 Christian Rackerseder <https://github.com/screendriver>
//                 GP <https://github.com/paambaati>
//                 Alex Ferrando <https://github.com/alferpal>
//                 Oleksandr Sidko <https://github.com/mortiy>
//                 Harris Lummis <https://github.com/lummish>
//                 Raoul Jaeckel <https://github.com/raoulus>
//                 Cory Donkin <https://github.com/Cooryd>
//                 Adam Vigneaux <https://github.com/AdamVig>
//                 Austin Beer <https://github.com/austin-beer>
//                 Michel Nemnom <https://github.com/Pegase745>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="node"/>

import stream = require('stream');
import http = require('http');
import { EventEmitter } from 'events';
import SonicBoom = require('sonic-boom');
import * as pinoStdSerializers from 'pino-std-serializers';

export = P;

/**
 * @param [optionsOrStream]: an options object or a writable stream where the logs will be written. It can also receive some log-line metadata, if the
 * relative protocol is enabled. Default: process.stdout
 * @returns a new logger instance.
 */
declare function P(optionsOrStream?: P.LoggerOptions | P.DestinationStream): P.Logger;

/**
 * @param [options]: an options object
 * @param [stream]: a writable stream where the logs will be written. It can also receive some log-line metadata, if the
 * relative protocol is enabled. Default: process.stdout
 * @returns a new logger instance.
 */
declare function P(options: P.LoggerOptions, stream: P.DestinationStream): P.Logger;

declare namespace P {
    /**
     * Holds the current log format version (as output in the v property of each log record).
     */
    const LOG_VERSION: number;
    const levels: LevelMapping;

    type SerializedError = pinoStdSerializers.SerializedError;
    type SerializedResponse = pinoStdSerializers.SerializedResponse;
    type SerializedRequest = pinoStdSerializers.SerializedRequest;

    /**
     * Provides functions for serializing objects common to many projects.
     */
    const stdSerializers: {
        /**
         * Generates a JSONifiable object from the HTTP `request` object passed to the `createServer` callback of Node's HTTP server.
         */
        req: typeof pinoStdSerializers.req;
        /**
         * Generates a JSONifiable object from the HTTP `response` object passed to the `createServer` callback of Node's HTTP server.
         */
        res: typeof pinoStdSerializers.res;
        /**
         * Serializes an Error object.
         */
        err: typeof pinoStdSerializers.err;
        /**
         * Returns an object:
         * ```
         * {
         *   req: {}
         * }
         * ```
         * where req is the request as serialized by the standard request serializer.
         * @param req The request to serialize
         * @return An object
         */
        mapHttpRequest: typeof pinoStdSerializers.mapHttpRequest;
        /**
         * Returns an object:
         * ```
         * {
         *   res: {}
         * }
         * ```
         * where res is the response as serialized by the standard response serializer.
         * @param res The response to serialize.
         * @return An object.
         */
        mapHttpResponse: typeof pinoStdSerializers.mapHttpResponse;
        /**
         * A utility method for wrapping the default error serializer. Allows custom serializers to work with the
         * already serialized object.
         * @param customSerializer The custom error serializer. Accepts a single parameter: the newly serialized
         * error object. Returns the new (or updated) error object.
         * @return A new error serializer.
         */
        wrapErrorSerializer: typeof pinoStdSerializers.wrapErrorSerializer;
        /**
         * A utility method for wrapping the default request serializer. Allows custom serializers to work with the
         * already serialized object.
         * @param customSerializer The custom request serializer. Accepts a single parameter: the newly serialized
         * request object. Returns the new (or updated) request object.
         * @return A new error serializer.
         */
        wrapRequestSerializer: typeof pinoStdSerializers.wrapRequestSerializer;
        /**
         * A utility method for wrapping the default response serializer. Allows custom serializers to work with the
         * already serialized object.
         * @param customSerializer The custom response serializer. Accepts a single parameter: the newly serialized
         * response object. Returns the new (or updated) response object.
         * @return A new error serializer.
         */
        wrapResponseSerializer: typeof pinoStdSerializers.wrapResponseSerializer;
    };
    /**
     * Provides functions for generating the timestamp property in the log output. You can set the `timestamp` option during
     * initialization to one of these functions to adjust the output format. Alternatively, you can specify your own time function.
     * A time function must synchronously return a string that would be a valid component of a JSON string. For example,
     * the default function returns a string like `,"time":1493426328206`.
     */
    const stdTimeFunctions: {
        /**
         * The default time function for Pino. Returns a string like `,"time":1493426328206`.
         */
        epochTime: TimeFn;
        /*
         * Returns the seconds since Unix epoch
         */
        unixTime: TimeFn;
        /**
         * Returns an empty string. This function is used when the `timestamp` option is set to `false`.
         */
        nullTime: TimeFn;
        /*
         * Returns ISO 8601-formatted time in UTC
         */
        isoTime: TimeFn;
    };

    /**
     * Create a Pino Destination instance: a stream-like object with significantly more throughput (over 30%) than a standard Node.js stream.
     * @param [fileDescriptor]: File path or numerical file descriptor, by default 1
     * @returns A Sonic-Boom  stream to be used as destination for the pino function
     */
    function destination(fileDescriptor?: string | number): SonicBoom;

    /**
     * Create an extreme mode destination. This yields an additional 60% performance boost.
     * There are trade-offs that should be understood before usage.
     * @param [fileDescriptor]: File path or numerical file descriptor, by default 1
     * @returns A Sonic-Boom  stream to be used as destination for the pino function
     */
    function extreme(fileDescriptor?: string | number): SonicBoom;

    /**
     * The pino.final method can be used to create an exit listener function.
     * This listener function can be supplied to process exit events.
     * The exit listener function will cal the handler with
     * @param [logger]: pino logger that serves as reference for the final logger
     * @param [handler]: Function that will be called by the handler returned from this function
     * @returns Exit listener function that can be supplied to process exit events and will call the supplied handler function
     */
    function final(
        logger: Logger,
        handler: (error: Error, finalLogger: Logger, ...args: any[]) => void,
    ): (error: Error | null, ...args: any[]) => void;

    /**
     * The pino.final method can be used to acquire a final logger instance that synchronously flushes on every write.
     * @param [logger]: pino logger that serves as reference for the final logger
     * @returns Final, synchronous logger
     */
    function final(logger: Logger): Logger;

    interface LevelMapping {
        /**
         * Returns the mappings of level names to their respective internal number representation.
         */
        values: { [level: string]: number };
        /**
         * Returns the mappings of level internal level numbers to their string representations.
         */
        labels: { [level: number]: string };
    }
    type TimeFn = () => string;
    type MixinFn = () => object;

    interface DestinationStream {
        write(msg: string): void;
    }

    interface LoggerOptions {
        /**
         * Avoid error causes by circular references in the object tree. Default: `true`.
         */
        safe?: boolean;
        /**
         * The name of the logger. Default: `undefined`.
         */
        name?: string;
        /**
         * an object containing functions for custom serialization of objects.
         * These functions should return an JSONifiable object and they should never throw. When logging an object,
         * each top-level property matching the exact key of a serializer will be serialized using the defined serializer.
         */
        serializers?: { [key: string]: SerializerFn };
        /**
         * Enables or disables the inclusion of a timestamp in the log message. If a function is supplied, it must
         * synchronously return a JSON string representation of the time. If set to `false`, no timestamp will be included in the output.
         * See stdTimeFunctions for a set of available functions for passing in as a value for this option.
         * Caution: any sort of formatted time will significantly slow down Pino's performance.
         */
        timestamp?: TimeFn | boolean;
        /**
         * One of the supported levels or `silent` to disable logging. Any other value defines a custom level and
         * requires supplying a level value via `levelVal`. Default: 'info'.
         */
        level?: LevelWithSilent | string;
        /**
         * Outputs the level as a string instead of integer. Default: `false`.
         */
        useLevelLabels?: boolean;
        /**
         * Changes the property `level` to any string value you pass in. Default: 'level'
         */
        changeLevelName?: string;
        /**
         * Use this option to define additional logging levels.
         * The keys of the object correspond the namespace of the log level, and the values should be the numerical value of the level.
         */
        customLevels?: { [key: string]: number };
        /**
         * Use this option to only use defined `customLevels` and omit Pino's levels.
         * Logger's default `level` must be changed to a value in `customLevels` in order to use `useOnlyCustomLevels`
         * Warning: this option may not be supported by downstream transports.
         */
        useOnlyCustomLevels?: boolean;

        /**
         * If provided, the `mixin` function is called each time one of the active logging methods
         * is called. The function must synchronously return an object. The properties of the
         * returned object will be added to the logged JSON.
         */
        mixin?: MixinFn;

        /**
         * As an array, the redact option specifies paths that should have their values redacted from any log output.
         *
         * Each path must be a string using a syntax which corresponds to JavaScript dot and bracket notation.
         *
         * If an object is supplied, three options can be specified:
         *
         *      paths (String[]): Required. An array of paths
         *      censor (String): Optional. A value to overwrite key which are to be redacted. Default: '[Redacted]'
         *      remove (Boolean): Optional. Instead of censoring the value, remove both the key and the value. Default: false
         */
        redact?: string[] | redactOptions;

        /**
         * When defining a custom log level via level, set to an integer value to define the new level. Default: `undefined`.
         */
        levelVal?: number;
        /**
         * The string key for the 'message' in the JSON object. Default: "msg".
         */
        messageKey?: string;
        /**
         * The string key to place any logged object under.
         */
        nestedKey?: string;
        /**
         * Enables pino.pretty. This is intended for non-production configurations. This may be set to a configuration
         * object as outlined in http://getpino.io/#/docs/API?id=pretty. Default: `false`.
         */
        prettyPrint?: boolean | PrettyOptions;
        /**
         * This function will be invoked during process shutdown when `extreme` is set to `true`. If you do not specify
         * a function, Pino will invoke `process.exit(0)` when no error has occurred, and `process.exit(1)` otherwise.
         * If you do specify a function, it is up to you to terminate the process; you must perform only synchronous
         * operations at this point. See http://getpino.io/#/docs/extreme for more detail.
         */
        onTerminated?(eventName: string, err: any): void;
        /**
         * Enables logging. Default: `true`.
         */
        enabled?: boolean;
        /**
         * Browser only, see http://getpino.io/#/docs/browser.
         */
        browser?: {
            /**
             * The `asObject` option will create a pino-like log object instead of passing all arguments to a console
             * method. When `write` is set, `asObject` will always be true.
             *
             * @example
             * pino.info('hi') // creates and logs {msg: 'hi', level: 30, time: <ts>}
             */
            asObject?: boolean;
            /**
             * Instead of passing log messages to `console.log` they can be passed to a supplied function. If `write` is
             * set to a single function, all logging objects are passed to this function. If `write` is an object, it
             * can have methods that correspond to the levels. When a message is logged at a given level, the
             * corresponding method is called. If a method isn't present, the logging falls back to using the `console`.
             *
             * @example
             * const pino = require('pino')({
             *   browser: {
             *     write: (o) => {
             *       // do something with o
             *     }
             *   }
             * })
             *
             * @example
             * const pino = require('pino')({
             *   browser: {
             *     write: {
             *       info: function (o) {
             *         //process info log object
             *       },
             *       error: function (o) {
             *         //process error log object
             *       }
             *     }
             *   }
             * })
             */
            write?:
                | WriteFn
                | ({
                      fatal?: WriteFn;
                      error?: WriteFn;
                      warn?: WriteFn;
                      info?: WriteFn;
                      debug?: WriteFn;
                      trace?: WriteFn;
                  } & { [logLevel: string]: WriteFn });

            /**
             * The serializers provided to `pino` are ignored by default in the browser, including the standard
             * serializers provided with Pino. Since the default destination for log messages is the console, values
             * such as `Error` objects are enhanced for inspection, which they otherwise wouldn't be if the Error
             * serializer was enabled. We can turn all serializers on or we can selectively enable them via an array.
             *
             * When `serialize` is `true` the standard error serializer is also enabled (see
             * {@link https://github.com/pinojs/pino/blob/master/docs/api.md#pino-stdserializers}). This is a global
             * serializer which will apply to any `Error` objects passed to the logger methods.
             *
             * If `serialize` is an array the standard error serializer is also automatically enabled, it can be
             * explicitly disabled by including a string in the serialize array: `!stdSerializers.err` (see example).
             *
             * The `serialize` array also applies to any child logger serializers (see
             * {@link https://github.com/pinojs/pino/blob/master/docs/api.md#bindingsserializers-object} for how to
             * set child-bound serializers).
             *
             * Unlike server pino the serializers apply to every object passed to the logger method, if the `asObject`
             * option is `true`, this results in the serializers applying to the first object (as in server pino).
             *
             * For more info on serializers see
             * {@link https://github.com/pinojs/pino/blob/master/docs/api.md#serializers-object}.
             *
             * @example
             * const pino = require('pino')({
             *   browser: {
             *     serialize: true
             *   }
             * })
             *
             * @example
             * const pino = require('pino')({
             *   serializers: {
             *     custom: myCustomSerializer,
             *     another: anotherSerializer
             *   },
             *   browser: {
             *     serialize: ['custom']
             *   }
             * })
             * // following will apply myCustomSerializer to the custom property,
             * // but will not apply anotherSerializer to another key
             * pino.info({custom: 'a', another: 'b'})
             *
             * @example
             * const pino = require('pino')({
             *   serializers: {
             *     custom: myCustomSerializer,
             *     another: anotherSerializer
             *   },
             *   browser: {
             *     serialize: ['!stdSerializers.err', 'custom'] //will not serialize Errors, will serialize `custom` keys
             *   }
             * })
             */
            serialize?: boolean | string[];

            /**
             * Options for transmission of logs.
             *
             * @example
             * const pino = require('pino')({
             *   browser: {
             *     transmit: {
             *       level: 'warn',
             *       send: function (level, logEvent) {
             *         if (level === 'warn') {
             *           // maybe send the logEvent to a separate endpoint
             *           // or maybe analyse the messages further before sending
             *         }
             *         // we could also use the `logEvent.level.value` property to determine
             *         // numerical value
             *         if (logEvent.level.value >= 50) { // covers error and fatal
             *
             *           // send the logEvent somewhere
             *         }
             *       }
             *     }
             *   }
             * })
             */
            transmit?: {
                /**
                 * Specifies the minimum level (inclusive) of when the `send` function should be called, if not supplied
                 * the `send` function will be called based on the main logging `level` (set via `options.level`,
                 * defaulting to `info`).
                 */
                level?: Level | string;
                /**
                 * Remotely record log messages.
                 *
                 * @description Called after writing the log message.
                 */
                send: (level: Level, logEvent: LogEvent) => void;
            };
        };
        /**
         * key-value object added as child logger to each log line. If set to null the base child logger is not added
         */
        base?: { [key: string]: any } | null;
    }

    interface PrettyOptions {
        /**
         * Translate the epoch time value into a human readable date and time string.
         * This flag also can set the format string to apply when translating the date to human readable format.
         * The default format is yyyy-mm-dd HH:MM:ss.l o in UTC.
         * For a list of available pattern letters see the {@link https://www.npmjs.com/package/dateformat|dateformat documentation}.
         */
        translateTime?: boolean | string;
        /**
         * If set to true, it will print the name of the log level as the first field in the log line. Default: `false`.
         */
        levelFirst?: boolean;
        /**
         * The key in the JSON object to use as the highlighted message. Default: "msg".
         */
        messageKey?: string;
        /**
         * The key in the JSON object to use for timestamp display. Default: "time".
         */
        timestampKey?: string;
        /**
         * Format output of message, e.g. {level} - {pid} will output message: INFO - 1123 Default: `false`.
         */
        messageFormat?: false | string;
        /**
         * If set to true, will add color information to the formatted output message. Default: `false`.
         */
        colorize?: boolean;
        /**
         * Appends carriage return and line feed, instead of just a line feed, to the formatted log line.
         */
        crlf?: boolean;
        /**
         * Define the log keys that are associated with error like objects. Default: ["err", "error"]
         */
        errorLikeObjectKeys?: string[];
        /**
         *  When formatting an error object, display this list of properties.
         *  The list should be a comma separated list of properties. Default: ''
         */
        errorProps?: string;
        /**
         * Specify a search pattern according to {@link http://jmespath.org|jmespath}
         */
        search?: string;
        /**
         * Ignore one or several keys. Example: "time,hostname"
         */
        ignore?: string;
    }

    type Level = 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace';
    type LevelWithSilent = Level | 'silent';

    type SerializerFn = (value: any) => any;
    type WriteFn = (o: object) => void;

    interface LogDescriptor {
        pid: number;
        hostname: string;
        level: number;
        time: string;
        msg: string;
        v: number;
        [key: string]: any;
    }

    interface Bindings {
        level?: Level | string;
        serializers?: { [key: string]: SerializerFn };
        [key: string]: any;
    }

    /**
     * A data structure representing a log message, it represents the arguments passed to a logger statement, the level
     * at which they were logged and the hierarchy of child bindings.
     *
     * @description By default serializers are not applied to log output in the browser, but they will always be applied
     * to `messages` and `bindings` in the `logEvent` object. This allows  us to ensure a consistent format for all
     * values between server and client.
     */
    interface LogEvent {
        /**
         * Unix epoch timestamp in milliseconds, the time is taken from the moment the logger method is called.
         */
        ts: number;
        /**
         * All arguments passed to logger method, (for instance `logger.info('a', 'b', 'c')` would result in `messages`
         * array `['a', 'b', 'c']`).
         */
        messages: any[];
        /**
         * Represents each child logger (if any), and the relevant bindings.
         *
         * @description For instance, given `logger.child({a: 1}).child({b: 2}).info({c: 3})`, the bindings array would
         * hold `[{a: 1}, {b: 2}]` and the `messages` array would be `[{c: 3}]`. The `bindings` are ordered according to
         * their position in the child logger hierarchy, with the lowest index being the top of the hierarchy.
         */
        bindings: Bindings[];
        /**
         * Holds the `label` (for instance `info`), and the corresponding numerical `value` (for instance `30`).
         * This could be important in cases where client side level values and labels differ from server side.
         */
        level: {
            label: string;
            value: number;
        };
    }

    type Logger = BaseLogger & { [key: string]: LogFn };

    interface BaseLogger extends EventEmitter {
        /**
         * Exposes the current version of Pino.
         */
        readonly pino: string;
        /**
         * Holds the current log format version (as output in the v property of each log record).
         */
        readonly LOG_VERSION: number;

        levels: LevelMapping;

        /**
         * Set this property to the desired logging level. In order of priority, available levels are:
         *
         * - 'fatal'
         * - 'error'
         * - 'warn'
         * - 'info'
         * - 'debug'
         * - 'trace'
         *
         * The logging level is a __minimum__ level. For instance if `logger.level` is `'info'` then all `'fatal'`, `'error'`, `'warn'`,
         * and `'info'` logs will be enabled.
         *
         * You can pass `'silent'` to disable logging.
         */
        level: LevelWithSilent | string;
        /**
         * Outputs the level as a string instead of integer.
         */
        useLevelLabels: boolean;
        /**
         * Define additional logging levels.
         */
        customLevels: { [key: string]: number };
        /**
         * Use only defined `customLevels` and omit Pino's levels.
         */
        useOnlyCustomLevels: boolean;
        /**
         * Returns the integer value for the logger instance's logging level.
         */
        levelVal: number;

        /**
         * Registers a listener function that is triggered when the level is changed.
         * Note: When browserified, this functionality will only be available if the `events` module has been required elsewhere
         * (e.g. if you're using streams in the browser). This allows for a trade-off between bundle size and functionality.
         *
         * @param event: only ever fires the `'level-change'` event
         * @param listener: The listener is passed four arguments: `levelLabel`, `levelValue`, `previousLevelLabel`, `previousLevelValue`.
         */
        on(event: 'level-change', listener: LevelChangeEventListener): this;
        addListener(event: 'level-change', listener: LevelChangeEventListener): this;
        once(event: 'level-change', listener: LevelChangeEventListener): this;
        prependListener(event: 'level-change', listener: LevelChangeEventListener): this;
        prependOnceListener(event: 'level-change', listener: LevelChangeEventListener): this;
        removeListener(event: 'level-change', listener: LevelChangeEventListener): this;

        /**
         * Creates a child logger, setting all key-value pairs in `bindings` as properties in the log lines. All serializers will be applied to the given pair.
         * Child loggers use the same output stream as the parent and inherit the current log level of the parent at the time they are spawned.
         * From v2.x.x the log level of a child is mutable (whereas in v1.x.x it was immutable), and can be set independently of the parent.
         * If a `level` property is present in the object passed to `child` it will override the child logger level.
         *
         * @param bindings: an object of key-value pairs to include in log lines as properties.
         * @returns a child logger instance.
         */
        child(bindings: Bindings): Logger;

        /**
         * Log at `'fatal'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
         * If more args follows `msg`, these will be used to format `msg` using `util.format`.
         *
         * @param obj: object to be serialized
         * @param msg: the log message to write
         * @param ...args: format string values when `msg` is a format string
         */
        fatal: LogFn;
        /**
         * Log at `'error'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
         * If more args follows `msg`, these will be used to format `msg` using `util.format`.
         *
         * @param obj: object to be serialized
         * @param msg: the log message to write
         * @param ...args: format string values when `msg` is a format string
         */
        error: LogFn;
        /**
         * Log at `'warn'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
         * If more args follows `msg`, these will be used to format `msg` using `util.format`.
         *
         * @param obj: object to be serialized
         * @param msg: the log message to write
         * @param ...args: format string values when `msg` is a format string
         */
        warn: LogFn;
        /**
         * Log at `'info'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
         * If more args follows `msg`, these will be used to format `msg` using `util.format`.
         *
         * @param obj: object to be serialized
         * @param msg: the log message to write
         * @param ...args: format string values when `msg` is a format string
         */
        info: LogFn;
        /**
         * Log at `'debug'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
         * If more args follows `msg`, these will be used to format `msg` using `util.format`.
         *
         * @param obj: object to be serialized
         * @param msg: the log message to write
         * @param ...args: format string values when `msg` is a format string
         */
        debug: LogFn;
        /**
         * Log at `'trace'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
         * If more args follows `msg`, these will be used to format `msg` using `util.format`.
         *
         * @param obj: object to be serialized
         * @param msg: the log message to write
         * @param ...args: format string values when `msg` is a format string
         */
        trace: LogFn;

        /**
         * Flushes the content of the buffer in extreme mode. It has no effect if extreme mode is not enabled.
         */
        flush(): void;

        /**
         * A utility method for determining if a given log level will write to the destination.
         */
        isLevelEnabled(level: LevelWithSilent | string): boolean;

        /**
         * Returns an object containing all the current bindings, cloned from the ones passed in via logger.child().
         */
        bindings(): Bindings;
    }

    type LevelChangeEventListener = (
        lvl: LevelWithSilent | string,
        val: number,
        prevLvl: LevelWithSilent | string,
        prevVal: number,
    ) => void;

    interface LogFn {
        (msg: string, ...args: any[]): void;
        (obj: object, msg?: string, ...args: any[]): void;
    }

    interface redactOptions {
        paths: string[];
        censor?: string | ((v: any) => any);
        remove?: boolean;
    }
}
