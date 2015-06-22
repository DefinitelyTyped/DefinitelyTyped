// Type definitions for loglevel 1.3.1
// Project: https://github.com/pimterry/loglevel
// Definitions by: Stefan Profanter <https://github.com/Pro/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module loglevel {

	/**
	 * Log levels
	 */
	export enum levels {
		TRACE = 0,
		DEBUG = 1,
		INFO = 2,
		WARN = 3,
		ERROR = 4,
		SILENT = 5
	}

	/**
	 * Output trace message to console.
	 * This will also include a full stack trace
	 *
	 * @param msg any data to log to the console
	 */
	export function trace(msg:any):void;

	/**
	 * Output debug message to console including appropriate icons
	 *
	 * @param msg any data to log to the console
	 */
	export function debug(msg:any):void;

	/**
	 * Output info message to console including appropriate icons
	 *
	 * @param msg any data to log to the console
	 */
	export function info(msg:any):void;

	/**
	 * Output warn message to console including appropriate icons
	 *
	 * @param msg any data to log to the console
	 */
	export function warn(msg:any):void;

	/**
	 * Output error message to console including appropriate icons
	 *
	 * @param msg any data to log to the console
	 */
	export function error(msg:any):void;


	/**
	 * This disables all logging below the given level, so that after a log.setLevel("warn") call log.warn("something")
	 * or log.error("something") will output messages, but log.info("something") will not.
	 *
	 * @param level 0=trace to 5=silent
	 * @param persist Where possible the log level will be persisted. LocalStorage will be used if available, falling back
	 *            to cookies if not. If neither is available in the current environment (i.e. in Node), or if you pass
	 *            false as the optional 'persist' second argument, persistence will be skipped.
	 */
	export function setLevel(level:number, persist?:boolean):void;


	/**
	 * This disables all logging below the given level, so that after a log.setLevel("warn") call log.warn("something")
	 * or log.error("something") will output messages, but log.info("something") will not.
	 *
	 * @param level as a string, like 'error' (case-insensitive)
	 * @param persist Where possible the log level will be persisted. LocalStorage will be used if available, falling back
	 *            to cookies if not. If neither is available in the current environment (i.e. in Node), or if you pass
	 *            false as the optional 'persist' second argument, persistence will be skipped.
	 */
	export function setLevel(level:string, persist?:boolean):void;


	/**
	 * This disables all logging below the given level, so that after a log.setLevel("warn") call log.warn("something")
	 * or log.error("something") will output messages, but log.info("something") will not.
	 *
	 * @param level as the value from the enum
	 * @param persist Where possible the log level will be persisted. LocalStorage will be used if available, falling back
	 *            to cookies if not. If neither is available in the current environment (i.e. in Node), or if you pass
	 *            false as the optional 'persist' second argument, persistence will be skipped.
	 */
	export function setLevel(level:levels, persist?:boolean):void;

	/**
	 * If you're using another JavaScript library that exposes a 'log' global, you can run into conflicts with loglevel.
	 * Similarly to jQuery, you can solve this by putting loglevel into no-conflict mode immediately after it is loaded
	 * onto the page. This resets to 'log' global to its value before loglevel was loaded (typically undefined), and
	 * returns the loglevel object, which you can then bind to another name yourself.
	 */
	export function noConflict():any;
}

declare
var log:typeof loglevel;
