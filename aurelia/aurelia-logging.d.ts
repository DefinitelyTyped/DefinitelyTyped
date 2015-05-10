declare module 'aurelia-logging/index' {
	/**
	 * This library is part of the Aurelia platform and contains a minimal but effective logging mechanism
	 * with support for log levels and pluggable log appenders.
	 *
	 * @module logging
	 */
	/**
	* Creates an instance of Error that aggregates and preserves an innerError.
	*
	* @class AggregateError
	* @constructor
	*/
	export function AggregateError(msg: any, inner: any, skipIfAlreadyAggregate?: any): any;
	/**
	* Enum specifying the levels of the logger
	*
	* @property levels
	* @type Enum
	* @for export
	*/
	export var levels: {
	    none: number;
	    error: number;
	    warn: number;
	    info: number;
	    debug: number;
	};
	/**
	* Gets an instance of a logger by the Id used when creating.
	*
	* @method getLogger
	* @param {string} id The id of the logger you wish to get an instance of.
	* @return {Logger} The instance of the logger, or creates a new logger if none exists for that Id.
	* @for export
	*/
	export function getLogger(id: any): any;
	/**
	 * Adds an appender capable of processing logs and channeling them to an output.
	 *
	 * @method addAppender
	 * @param {Object} appender An appender instance to begin processing logs with.
	 * @for export
	 */
	export function addAppender(appender: any): void;
	/**
	* Sets the level of the logging for the application loggers
	*
	* @method setLevel
	* @param {Number} level Matches an enum specifying the level of logging.
	* @for export
	*/
	export function setLevel(level: any): void;
	/**
	* The logger is essentially responsible for having log statements that appear during debugging but are squelched
	* when using the build tools, depending on the log level that is set.  The available levels are -
	* 1. none
	* 2. error
	* 3. warn
	* 4. info
	* 5. debug
	*
	* You cannot instantiate the logger directly - you must use the getLogger method instead.
	*
	* @class Logger
	* @constructor
	*/
	export class Logger {
	    id: any;
	    constructor(id: any, key: any);
	    /**
	     * Logs a debug message.
	     *
	     * @method debug
	     * @param {string} message The message to log
	     */
	    debug(): void;
	    /**
	     * Logs info.
	     *
	     * @method info
	     * @param {string} message The message to log
	     */
	    info(): void;
	    /**
	     * Logs a warning.
	     *
	     * @method warn
	     * @param {string} message The message to log
	     */
	    warn(): void;
	    /**
	     * Logs an error.
	     *
	     * @method error
	     * @param {string} message The message to log
	     */
	    error(): void;
	}

}
declare module 'aurelia-logging' {
	export * from 'aurelia-logging/index';
}
