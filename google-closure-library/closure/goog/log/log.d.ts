declare module goog {
    function require(name: 'goog.log'): typeof goog.log;
    function require(name: 'goog.log.Logger'): typeof goog.log.Logger;
    function require(name: 'goog.log.Level'): typeof goog.log.Level;
    function require(name: 'goog.log.LogRecord'): typeof goog.log.LogRecord;
}

declare module goog.log {

    /**
     * @constructor
     * @final
     */
    class Logger {
        constructor();
    }

    /**
     * @constructor
     * @final
     */
    class Level {
        constructor();
    }

    /**
     * @constructor
     * @final
     */
    class LogRecord {
        constructor();
    }

    /** @const */
    var ROOT_LOGGER_NAME: any;

    /**
     * Finds or creates a logger for a named subsystem. If a logger has already been
     * created with the given name it is returned. Otherwise a new logger is
     * created. If a new logger is created its log level will be configured based
     * on the goog.debug.LogManager configuration and it will configured to also
     * send logging output to its parent's handlers.
     * @see goog.debug.LogManager
     *
     * @param {string} name A name for the logger. This should be a dot-separated
     *     name and should normally be based on the package name or class name of
     *     the subsystem, such as goog.net.BrowserChannel.
     * @param {goog.log.Level=} opt_level If provided, override the
     *     default logging level with the provided level.
     * @return {goog.log.Logger} The named logger or null if logging is disabled.
     */
    function getLogger(name: string, opt_level?: goog.log.Level): goog.log.Logger;

    /**
     * Adds a handler to the logger. This doesn't use the event system because
     * we want to be able to add logging to the event system.
     * @param {goog.log.Logger} logger
     * @param {Function} handler Handler function to add.
     */
    function addHandler(logger: goog.log.Logger, handler: Function): void;

    /**
     * Removes a handler from the logger. This doesn't use the event system because
     * we want to be able to add logging to the event system.
     * @param {goog.log.Logger} logger
     * @param {Function} handler Handler function to remove.
     * @return {boolean} Whether the handler was removed.
     */
    function removeHandler(logger: goog.log.Logger, handler: Function): boolean;

    /**
     * Logs a message. If the logger is currently enabled for the
     * given message level then the given message is forwarded to all the
     * registered output Handler objects.
     * @param {goog.log.Logger} logger
     * @param {goog.log.Level} level One of the level identifiers.
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error|Object=} opt_exception An exception associated with the
     *     message.
     */
    function log(logger: goog.log.Logger, level: goog.log.Level, msg: goog.debug.Loggable, opt_exception?: Error|Object): void;

    /**
     * Logs a message at the Level.SEVERE level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.log.Logger} logger
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    function error(logger: goog.log.Logger, msg: goog.debug.Loggable, opt_exception?: Error): void;

    /**
     * Logs a message at the Level.WARNING level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.log.Logger} logger
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    function warning(logger: goog.log.Logger, msg: goog.debug.Loggable, opt_exception?: Error): void;

    /**
     * Logs a message at the Level.INFO level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.log.Logger} logger
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    function info(logger: goog.log.Logger, msg: goog.debug.Loggable, opt_exception?: Error): void;

    /**
     * Logs a message at the Level.Fine level.
     * If the logger is currently enabled for the given message level then the
     * given message is forwarded to all the registered output Handler objects.
     * @param {goog.log.Logger} logger
     * @param {goog.debug.Loggable} msg The message to log.
     * @param {Error=} opt_exception An exception associated with the message.
     */
    function fine(logger: goog.log.Logger, msg: goog.debug.Loggable, opt_exception?: Error): void;
}
