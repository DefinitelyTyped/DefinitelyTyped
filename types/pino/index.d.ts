// Type definitions for pino 4.7
// Project: https://github.com/mcollina/pino.git
// Definitions by: Peter Snider <https://github.com/psnider>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node"/>

import * as stream from 'stream';
import * as http from 'http';
import { EventEmitter } from 'events';

export = P;

/**
 * @param [optionsOrStream]: an options object or a writable stream where the logs will be written. It can also receive some log-line metadata, if the
 * relative protocol is enabled. Default: process.stdout
 * @returns a new logger instance.
 */
declare function P(optionsOrStream?: P.LoggerOptions | stream.Writable | stream.Duplex | stream.Transform): P.Logger;

/**
 * @param [options]: an options object
 * @param [stream]: a writable stream where the logs will be written. It can also receive some log-line metadata, if the
 * relative protocol is enabled. Default: process.stdout
 * @returns a new logger instance.
 */
declare function P(options: P.LoggerOptions, stream: stream.Writable | stream.Duplex | stream.Transform): P.Logger;

declare namespace P {
    /**
     * Holds the current log format version (as output in the v property of each log record).
     */
    const LOG_VERSION: number;
    const levels: LevelMapping;
    /**
     * Provides functions for serializing objects common to many projects.
     */
    const stdSerializers: {
        /**
         * Generates a JSONifiable object from the HTTP `request` object passed to the `createServer` callback of Node's HTTP server.
         */
        req(req: http.IncomingMessage): {
            method: string;
            url: string;
            headers: http.IncomingHttpHeaders;
            remoteAddress: string;
            remotePort: number;
        };
        /**
         * Generates a JSONifiable object from the HTTP `response` object passed to the `createServer` callback of Node's HTTP server.
         */
        res(res: http.ServerResponse): { statusCode: number; header: string; };
        /**
         * Serializes an Error object.
         */
        err(err: Error): {
            type: string;
            message: string;
            stack: string;
            [key: string]: any;
        };
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
        /**
         * Returns an ISO formatted string like `,"time":"2017-04-29T004749.354Z"`. It is highly recommended that you avoid this function.
         * It incurs a significant performance penalty.
         */
        slowTime: TimeFn;
        /**
         * Returns an empty string. This function is used when the `timestamp` option is set to `false`.
         */
        nullTime: TimeFn;
    };

    /**
     * Provides access to the CLI log prettifier as an API.
     * This can also be enabled via the constructor by setting the `prettyPrint` option to either `true` or a configuration object described in this section.
     * @param [options]: an options object
     * @returns A transform stream to be used as input for the constructor.
     */
    function pretty(options?: PrettyOptions): stream.Transform;

    interface LevelMapping {
        /**
         * Returns the mappings of level names to their respective internal number representation.
         */
        values: { [level: string]: number; };
        /**
         * Returns the mappings of level internal level numbers to their string representations.
         */
        labels: { [level: number]: string; };
    }
    type TimeFn = () => string;

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
        timestamp?: TimeFn | false;
        /**
         * @deprecated
         * This option is scheduled to be removed in Pino 5.0.0. Use `timestamp: pino.stdTimeFunctions.slowTime` instead.
         * Outputs ISO time stamps ('2016-03-09T15:18:53.889Z') instead of Epoch time stamps (1457536759176).
         * WARNING: This option carries a 25% performance drop, we recommend using default Epoch timestamps and transforming logs after if required.
         * The pino -t command will do this for you (see CLI). Default: `false`.
         */
        slowtime?: boolean;
        /**
         * Enables extreme mode, yields an additional 60% performance (from 250ms down to 100ms per 10000 ops).
         * There are trade-off's should be understood before usage. See Extreme mode explained. Default: `false`.
         */
        extreme?: boolean;
        /**
         * One of the supported levels or `silent` to disable logging. Any other value defines a custom level and
         * requires supplying a level value via `levelVal`. Default: 'info'.
         */
        level?: LevelWithSilent | string;
        /**
         * When defining a custom log level via level, set to an integer value to define the new level. Default: `undefined`.
         */
        levelVal?: number;
        /**
         * The string key for the 'message' in the JSON object. Default: "msg".
         */
        messageKey?: string;
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
         * Browser only, see http://getpino.io/#/?id=pino-in-the-browser.
         */
        browser?: {
            /**
             * This option will create a pino-like log object instead of passing all arguments to a console method.
             * When `write` is set, `asObject` will always be `true`.
             */
            asObject?: boolean,
            /**
             * Instead of passing log messages to console.log they can be passed to a supplied function. If `write` is
             * set to a single function, all logging objects are passed to this function. If write is an object, it can
             * have methods that correspond to the levels. When a message is logged at a given level, the corresponding
             * method is called. If a method isn't present, the logging falls back to using the `console`.
             */
            write?: WriteFn | ({
                fatal?: WriteFn;
                error?: WriteFn;
                warn?: WriteFn;
                info?: WriteFn;
                debug?: WriteFn;
                trace?: WriteFn;
            } & { [logLevel: string]: WriteFn });
        };
    }

    interface PrettyOptions {
        /**
         * If set to true, it will only covert the unix timestamp to ISO 8601 date format, and reserialize the JSON (equivalent to pino -t).
         */
        timeTransOnly?: boolean;
        /**
         * A custom function to format the line, is passed the JSON object as an argument and should return a string value.
         */
        formatter?(log: LogDescriptor): string;
        /**
         * If set to true, it will print the name of the log level as the first field in the log line. Default: `false`.
         */
        levelFirst?: boolean;
        /**
         * The key in the JSON object to use as the highlighted message. Default: "msg".
         */
        messageKey?: string;
        /**
         * If set to true, will add color information to the formatted output message. Default: `false`.
         */
        forceColor?: boolean;
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

    type Logger = BaseLogger & { [key: string]: LogFn; };

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
         * Returns the integer value for the logger instance's logging level.
         */
        levelVal: number;

        /**
         * Defines a new level on the logger instance. Returns `true` on success and `false` if there was a conflict (level name or number already exists).
         * When using this method, the current level of the logger instance does not change. You must adjust the level with the `level` property after
         * adding your custom level.
         *
         * @param name: defines the method name of the new level
         * @param lvl: value for the level, e.g. `35` is between `info` and `warn`
         * @returns whether level was correctly created or not
         */
        addLevel(name: string, lvl: number): boolean;
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
        child(bindings: {
            level?: Level | string;
            serializers?: { [key: string]: SerializerFn };
            [key: string]: any;
        }): Logger;

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
    }

    type LevelChangeEventListener = (lvl: LevelWithSilent | string, val: number, prevLvl: LevelWithSilent | string, prevVal: number) => void;

    interface LogFn {
        (msg: string, ...args: any[]): void;
        (obj: object, msg?: string, ...args: any[]): void;
    }
}
