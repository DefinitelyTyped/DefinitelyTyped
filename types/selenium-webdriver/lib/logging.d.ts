/**
 * Defines a message level that may be used to control logging output.
 *
 * @final
 */
export class Level {
    name_: string;
    value_: number;

    /**
     * @param {string} name the level's name.
     * @param {number} level the level's numeric value.
     */
    constructor(name: string, level: number);

    /** @override */
    toString(): string;

    /** This logger's name. */
    name: string;

    /** The numeric log level. */
    value: number;

    /**
     * Indicates no log messages should be recorded.
     * @constant
     */
    static OFF: Level;
    /**
     * Log messages with a level of `1000` or higher.
     * @constant
     */
    static SEVERE: Level;
    /**
     * Log messages with a level of `900` or higher.
     * @constant
     */
    static WARNING: Level;
    /**
     * Log messages with a level of `800` or higher.
     * @constant
     */
    static INFO: Level;
    /**
     * Log messages with a level of `700` or higher.
     * @constant
     */
    static DEBUG: Level;
    /**
     * Log messages with a level of `500` or higher.
     * @constant
     */
    static FINE: Level;
    /**
     * Log messages with a level of `400` or higher.
     * @constant
     */
    static FINER: Level;
    /**
     * Log messages with a level of `300` or higher.
     * @constant
     */
    static FINEST: Level;
    /**
     * Indicates all log messages should be recorded.
     * @constant
     */
    static ALL: Level;
}

/**
 * Converts a level name or value to a {@link logging.Level} value.
 * If the name/value is not recognized, {@link logging.Level.ALL}
 * will be returned.
 * @param {(number|string)} nameOrValue The log level name, or value, to
 *     convert .
 * @return {!logging.Level} The converted level.
 */
export function getLevel(nameOrValue: string | number): Level;

export interface IEntryJSON {
    level: string;
    message: string;
    timestamp: number;
    type: string;
}

/**
 * A single log entry.
 */
export class Entry {
    /**
     * @param {(!logging.Level|string)} level The entry level.
     * @param {string} message The log message.
     * @param {number=} opt_timestamp The time this entry was generated, in
     *     milliseconds since 0:00:00, January 1, 1970 UTC. If omitted, the
     *     current time will be used.
     * @param {string=} opt_type The log type, if known.
     */
    constructor(level: Level | string | number, message: string, opt_timestamp?: number, opt_type?: string | IType);

    level: Level;

    message: string;

    timestamp: number;

    type: string;

    /**
     * @return {{level: string, message: string, timestamp: number,
     *           type: string}} The JSON representation of this entry.
     */
    toJSON(): IEntryJSON;
}

/**
 * An object used to log debugging messages. Loggers use a hierarchical,
 * dot-separated naming scheme. For instance, 'foo' is considered the parent of
 * the 'foo.bar' and an ancestor of 'foo.bar.baz'.
 *
 * Each logger may be assigned a {@linkplain #setLevel log level}, which
 * controls which level of messages will be reported to the
 * {@linkplain #addHandler handlers} attached to this instance. If a log level
 * is not explicitly set on a logger, it will inherit its parent.
 *
 * This class should never be directly instantiated. Instead, users should
 * obtain logger references using the {@linkplain ./logging.getLogger()
 * getLogger()} function.
 *
 * @final
 */
export class Logger {
    /**
     * @param {string} name the name of this logger.
     * @param {Level=} opt_level the initial level for this logger.
     */
    constructor(name: string, opt_level?: Level);

    name_: string;
    level_: Level;
    parent_: Logger;
    handlers_: any;

    /** @return {string} the name of this logger. */
    getName(): string;

    /**
     * @param {Level} level the new level for this logger, or `null` if the logger
     *     should inherit its level from its parent logger.
     */
    setLevel(level: Level): void;

    /** @return {Level} the log level for this logger. */
    getLevel(): Level;

    /**
     * @return {!Level} the effective level for this logger.
     */
    getEffectiveLevel(): Level;

    /**
     * @param {!Level} level the level to check.
     * @return {boolean} whether messages recorded at the given level are loggable
     *     by this instance.
     */
    isLoggable(level: Level): boolean;

    /**
     * Adds a handler to this logger. The handler will be invoked for each message
     * logged with this instance, or any of its descendants.
     *
     * @param {function(!Entry)} handler the handler to add.
     */
    addHandler(handler: any): void;

    /**
     * Removes a handler from this logger.
     *
     * @param {function(!Entry)} handler the handler to remove.
     * @return {boolean} whether a handler was successfully removed.
     */
    removeHandler(handler: any): void;

    /**
     * Logs a message at the given level. The message may be defined as a string
     * or as a function that will return the message. If a function is provided,
     * it will only be invoked if this logger's
     * {@linkplain #getEffectiveLevel() effective log level} includes the given
     * `level`.
     *
     * @param {!Level} level the level at which to log the message.
     * @param {(string|function(): string)} loggable the message to log, or a
     *     function that will return the message.
     */
    log(level: Level, loggable: string | Function): void;

    /**
     * Logs a message at the {@link Level.SEVERE} log level.
     * @param {(string|function(): string)} loggable the message to log, or a
     *     function that will return the message.
     */
    severe(loggable: string | Function): void;

    /**
     * Logs a message at the {@link Level.WARNING} log level.
     * @param {(string|function(): string)} loggable the message to log, or a
     *     function that will return the message.
     */
    warning(loggable: string | Function): void;

    /**
     * Logs a message at the {@link Level.INFO} log level.
     * @param {(string|function(): string)} loggable the message to log, or a
     *     function that will return the message.
     */
    info(loggable: string | Function): void;

    /**
     * Logs a message at the {@link Level.DEBUG} log level.
     * @param {(string|function(): string)} loggable the message to log, or a
     *     function that will return the message.
     */
    debug(loggable: string | Function): void;

    /**
     * Logs a message at the {@link Level.FINE} log level.
     * @param {(string|function(): string)} loggable the message to log, or a
     *     function that will return the message.
     */
    fine(loggable: string | Function): void;

    /**
     * Logs a message at the {@link Level.FINER} log level.
     * @param {(string|function(): string)} loggable the message to log, or a
     *     function that will return the message.
     */
    finer(loggable: string | Function): void;

    /**
     * Logs a message at the {@link Level.FINEST} log level.
     * @param {(string|function(): string)} loggable the message to log, or a
     *     function that will return the message.
     */
    finest(loggable: string | Function): void;
}

/**
 * Maintains a collection of loggers.
 *
 * @final
 */
export class LogManager {
    /**
     * Retrieves a named logger, creating it in the process. This function will
     * implicitly create the requested logger, and any of its parents, if they
     * do not yet exist.
     *
     * @param {string} name the logger's name.
     * @return {!Logger} the requested logger.
     */
    getLogger(name?: string): Logger;

    /**
     * Creates a new logger.
     *
     * @param {string} name the logger's name.
     * @param {!Logger} parent the logger's parent.
     * @return {!Logger} the new logger.
     */
    createLogger_(name: string, parent: Logger): Logger;
}

/**
 * Retrieves a named logger, creating it in the process. This function will
 * implicitly create the requested logger, and any of its parents, if they
 * do not yet exist.
 *
 * @param {string} name the logger's name.
 * @return {!Logger} the requested logger.
 */
export function getLogger(name?: string): Logger;

/**
 * Adds the console handler to the given logger. The console handler will log
 * all messages using the JavaScript Console API.
 *
 * @param {Logger=} opt_logger The logger to add the handler to; defaults
 *     to the root logger.
 */
export function addConsoleHandler(opt_logger?: Logger): void;

/**
 * Removes the console log handler from the given logger.
 *
 * @param {Logger=} opt_logger The logger to remove the handler from; defaults
 *     to the root logger.
 * @see exports.addConsoleHandler
 */
export function removeConsoleHandler(opt_logger?: Logger): void;

/**
 * Installs the console log handler on the root logger.
 */
export function installConsoleHandler(): void;

export interface IType {
    /** Logs originating from the browser. */
    BROWSER: string;
    /** Logs from a WebDriver client. */
    CLIENT: string;
    /** Logs from a WebDriver implementation. */
    DRIVER: string;
    /** Logs related to performance. */
    PERFORMANCE: string;
    /** Logs from the remote server. */
    SERVER: string;
}

/**
 * Common log types.
 */
export const Type: IType;

/**
 * Describes the log preferences for a WebDriver session.
 */
export class Preferences {
    prefs_: Map<string, Level>;

    constructor();

    /**
     * Sets the desired logging level for a particular log type.
     * @param {(string|Type)} type The log type.
     * @param {(!Level|string|number)} level The desired log level.
     * @throws {TypeError} if `type` is not a `string`.
     */
    setLevel(type: string | IType, level: Level): void;

    /**
     * Converts this instance to its JSON representation.
     * @return {!Object<string, string>} The JSON representation of this set of
     *     preferences.
     */
    toJSON(): { [key: string]: string };
}
