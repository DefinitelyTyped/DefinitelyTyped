// Type definitions for Selenium WebDriverJS 3.0
// Project: https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver
// Definitions by: Bill Armstrong <https://github.com/BillArmstrong>,
//   Yuki Kokubun <https://github.com/Kuniwak>,
//   Craig Nishina <https://github.com/cnishina>,
//   Simon Gellis <https://github.com/SupernaviX>,
//   Ben Dixon <https://github.com/bendxn>,
//   Ziyu <https://github.com/oddui>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as chrome from './chrome';
import * as edge from './edge';
import * as firefox from './firefox';
import * as ie from './ie';
import * as opera from './opera';
import * as safari from './safari';

export namespace error {
  class IError extends Error {
    constructor(opt_error?: string);
  }

  /**
   * The base WebDriver error type. This error type is only used directly when a
   * more appropriate category is not defined for the offending error.
   */
  class WebDriverError extends IError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * An attempt was made to select an element that cannot be selected.
   */
  class ElementNotSelectableError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * An element command could not be completed because the element is not visible
   * on the page.
   */
  class ElementNotVisibleError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * The arguments passed to a command are either invalid or malformed.
   */
  class InvalidArgumentError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * An illegal attempt was made to set a cookie under a different domain than
   * the current page.
   */
  class InvalidCookieDomainError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * The coordinates provided to an interactions operation are invalid.
   */
  class InvalidElementCoordinatesError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * An element command could not be completed because the element is in an
   * invalid state, e.g. attempting to click an element that is no longer attached
   * to the document.
   */
  class InvalidElementStateError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * Argument was an invalid selector.
   */
  class InvalidSelectorError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * Occurs when a command is directed to a session that does not exist.
   */
  class NoSuchSessionError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * An error occurred while executing JavaScript supplied by the user.
   */
  class JavascriptError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * The target for mouse interaction is not in the browser’s viewport and cannot
   * be brought into that viewport.
   */
  class MoveTargetOutOfBoundsError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * An attempt was made to operate on a modal dialog when one was not open.
   */
  class NoSuchAlertError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * An element could not be located on the page using the given search
   * parameters.
   */
  class NoSuchElementError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * A request to switch to a frame could not be satisfied because the frame
   * could not be found.
   */
  class NoSuchFrameError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * A request to switch to a window could not be satisfied because the window
   * could not be found.
   */
  class NoSuchWindowError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * A script did not complete before its timeout expired.
   */
  class ScriptTimeoutError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * A new session could not be created.
   */
  class SessionNotCreatedError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * An element command failed because the referenced element is no longer
   * attached to the DOM.
   */
  class StaleElementReferenceError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * An operation did not completErrorCodee before its timeout expired.
   */
  class TimeoutError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * A request to set a cookie’s value could not be satisfied.
   */
  class UnableToSetCookieError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * A screen capture operation was not possible.
   */
  class UnableToCaptureScreenError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * A modal dialog was open, blocking this operation.
   */
  class UnexpectedAlertOpenError extends WebDriverError {
    /**
     * @param {string=} opt_error the error message, if any.
     * @param {string=} opt_text the text of the open dialog, if available.
     */
    constructor(opt_error?: string, opt_text?: string);

    /**
     * @return {(string|undefined)} The text displayed with the unhandled alert,
     *     if available.
     */
    getAlertText(): string;
  }

  /**
   * A command could not be executed because the remote end is not aware of it.
   */
  class UnknownCommandError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * The requested command matched a known URL but did not match an method for
   * that URL.
   */
  class UnknownMethodError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }

  /**
   * Reports an unsupport operation.
   */
  class UnsupportedOperationError extends WebDriverError {
    /** @param {string=} opt_error the error message, if any. */
    constructor(opt_error?: string);
  }
}

export namespace logging {
  /**
   * A hash describing log preferences.
   * @typedef {Object.<logging.Type, logging.LevelName>}
   */
  class Preferences {
    setLevel(type: string, level: Level | string | number): void;
    toJSON(): { [key: string]: string };
  }

  interface IType {
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
   * @enum {string}
   */
  const Type: IType;

  /**
   * Defines a message level that may be used to control logging output.
   *
   * @final
   */
  class Level {
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
     * @const
     */
    static OFF: Level;
    /**
     * Log messages with a level of `1000` or higher.
     * @const
     */
    static SEVERE: Level;
    /**
     * Log messages with a level of `900` or higher.
     * @const
     */
    static WARNING: Level;
    /**
     * Log messages with a level of `800` or higher.
     * @const
     */
    static INFO: Level;
    /**
     * Log messages with a level of `700` or higher.
     * @const
     */
    static DEBUG: Level;
    /**
     * Log messages with a level of `500` or higher.
     * @const
     */
    static FINE: Level;
    /**
     * Log messages with a level of `400` or higher.
     * @const
     */
    static FINER: Level;
    /**
     * Log messages with a level of `300` or higher.
     * @const
     */
    static FINEST: Level;
    /**
     * Indicates all log messages should be recorded.
     * @const
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
  function getLevel(nameOrValue: string | number): Level;

  interface IEntryJSON {
    level: string;
    message: string;
    timestamp: number;
    type: string;
  }

  /**
   * A single log entry.
   */
  class Entry {
    /**
     * @param {(!logging.Level|string)} level The entry level.
     * @param {string} message The log message.
     * @param {number=} opt_timestamp The time this entry was generated, in
     *     milliseconds since 0:00:00, January 1, 1970 UTC. If omitted, the
     *     current time will be used.
     * @param {string=} opt_type The log type, if known.
     * @constructor
     */
    constructor(level: Level | string | number, message: string, opt_timestamp?: number, opt_type?: string | IType);

    /** @type {!logging.Level} */
    level: Level;

    /** @type {string} */
    message: string;

    /** @type {number} */
    timestamp: number;

    /** @type {string} */
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
  class Logger {
    /**
     * @param {string} name the name of this logger.
     * @param {Level=} opt_level the initial level for this logger.
     */
    constructor(name: string, opt_level?: Level);

    /** @private {string} */
    name_: string;
    /** @private {Level} */
    level_: Level;
    /** @private {Logger} */
    parent_: Logger;
    /** @private {Set<function(!Entry)>} */
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
  class LogManager {
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
     * @private
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
  function getLogger(name?: string): Logger;

  /**
   * Adds the console handler to the given logger. The console handler will log
   * all messages using the JavaScript Console API.
   *
   * @param {Logger=} opt_logger The logger to add the handler to; defaults
   *     to the root logger.
   */
  function addConsoleHandler(opt_logger?: Logger): void;

  /**
   * Removes the console log handler from the given logger.
   *
   * @param {Logger=} opt_logger The logger to remove the handler from; defaults
   *     to the root logger.
   * @see exports.addConsoleHandler
   */
  function removeConsoleHandler(opt_logger?: Logger): void;
}

export namespace promise {
  // region Functions

  /**
   * Set `USE_PROMISE_MANAGER` to `false` to disable the promise manager.
   * This is useful, if you use async/await (see https://github.com/SeleniumHQ/selenium/issues/2969
   * and https://github.com/SeleniumHQ/selenium/issues/3037).
   */
  let USE_PROMISE_MANAGER: boolean;

  /**
   * Given an array of promises, will return a promise that will be fulfilled
   * with the fulfillment values of the input array's values. If any of the
   * input array's promises are rejected, the returned promise will be rejected
   * with the same reason.
   *
   * @param {!Array<(T|!ManagedPromise<T>)>} arr An array of
   *     promises to wait on.
   * @return {!ManagedPromise<!T[]>} A promise that is
   *     fulfilled with an array containing the fulfilled values of the
   *     input array, or rejected with the same reason as the first
   *     rejected value.
   * @template T
   */
  function all<T>(arr: Array<T | Promise<T>>): Promise<T[]>;

  /**
   * Invokes the appropriate callback function as soon as a promised
   * {@code value} is resolved. This function is similar to
   * {@link promise.when}, except it does not return a new promise.
   * @param {*} value The value to observe.
   * @param {Function} callback The function to call when the value is
   *     resolved successfully.
   * @param {Function=} opt_errback The function to call when the value is
   *     rejected.
   */
  function asap(value: any, callback: Function, opt_errback?: Function): void;

  /**
   * @return {!promise.ControlFlow} The currently active control flow.
   */
  function controlFlow(): ControlFlow;

  /**
   * Creates a new control flow. The provided callback will be invoked as the
   * first task within the new flow, with the flow as its sole argument. Returns
   * a promise that resolves to the callback result.
   * @param {function(!ControlFlow)} callback The entry point
   *     to the newly created flow.
   * @return {!ManagedPromise} A promise that resolves to the callback
   *     result.
   */
  function createFlow<R>(callback: (flow: ControlFlow) => R): Promise<R>;

  /**
   * Determines whether a {@code value} should be treated as a promise.
   * Any object whose 'then' property is a function will be considered a promise.
   *
   * @param {*} value The value to test.
   * @return {boolean} Whether the value is a promise.
   */
  function isPromise(value: any): boolean;

  /**
   * Tests is a function is a generator.
   * @param {!Function} fn The function to test.
   * @return {boolean} Whether the function is a generator.
   */
  function isGenerator(fn: Function): boolean;

  /**
   * Creates a promise that will be resolved at a set time in the future.
   * @param {number} ms The amount of time, in milliseconds, to wait before
   *     resolving the promise.
   * @return {!ManagedPromise} The promise.
   */
  function delayed(ms: number): Promise<void>;

  /**
   * Calls a function for each element in an array, and if the function returns
   * true adds the element to a new array.
   *
   * If the return value of the filter function is a promise, this function
   * will wait for it to be fulfilled before determining whether to insert the
   * element into the new array.
   *
   * If the filter function throws or returns a rejected promise, the promise
   * returned by this function will be rejected with the same reason. Only the
   * first failure will be reported; all subsequent errors will be silently
   * ignored.
   *
   * @param {!(Array<TYPE>|ManagedPromise<!Array<TYPE>>)} arr The
   *     array to iterator over, or a promise that will resolve to said array.
   * @param {function(this: SELF, TYPE, number, !Array<TYPE>): (
   *             boolean|ManagedPromise<boolean>)} fn The function
   *     to call for each element in the array.
   * @param {SELF=} opt_self The object to be used as the value of 'this' within
   *     {@code fn}.
   * @template TYPE, SELF
   */
  function filter<T>(arr: T[] | Promise<T[]>, fn: (element: T, type: any, index: number, array: T[]) => any, opt_self?: any): Promise<T[]>;

  /**
   * Creates a new deferred object.
   * @return {!promise.Deferred} The new deferred object.
   */
  function defer<T>(): Deferred<T>;

  /**
   * Creates a promise that has been resolved with the given value.
   * @param {T=} opt_value The resolved value.
   * @return {!Promise<T>} The resolved promise.
   * @deprecated Use {@link Promise#resolve Promise.resolve(value)}.
   * @template T
   */
  function fulfilled<T>(opt_value?: T): Promise<T>;

  /**
   * Calls a function for each element in an array and inserts the result into a
   * new array, which is used as the fulfillment value of the promise returned
   * by this function.
   *
   * If the return value of the mapping function is a promise, this function
   * will wait for it to be fulfilled before inserting it into the new array.
   *
   * If the mapping function throws or returns a rejected promise, the
   * promise returned by this function will be rejected with the same reason.
   * Only the first failure will be reported; all subsequent errors will be
   * silently ignored.
   *
   * @param {!(Array<TYPE>|ManagedPromise<!Array<TYPE>>)} arr The
   *     array to iterator over, or a promise that will resolve to said array.
   * @param {function(this: SELF, TYPE, number, !Array<TYPE>): ?} fn The
   *     function to call for each element in the array. This function should
   *     expect three arguments (the element, the index, and the array itself.
   * @param {SELF=} opt_self The object to be used as the value of 'this' within
   *     {@code fn}.
   * @template TYPE, SELF
   */
  function map<T>(arr: T[] | Promise<T[]>, fn: (self: any, type: any, index: number, array: T[]) => any, opt_self?: any): Promise<any[]>;

  /**
   * Creates a promise that has been rejected with the given reason.
   * @param {*=} opt_reason The rejection reason; may be any value, but is
   *     usually an Error or a string.
   * @return {!Promise<?>} The rejected promise.
   * @deprecated Use {@link Promise#reject Promise.Promise(reason)}.
   */
  function rejected<T>(opt_reason?: any): Promise<T>;

  /**
   * Wraps a function that expects a node-style callback as its final
   * argument. This callback expects two arguments: an error value (which will be
   * null if the call succeeded), and the success value as the second argument.
   * The callback will the resolve or reject the returned promise, based on its
   * arguments.
   * @param {!Function} fn The function to wrap.
   * @param {...?} var_args The arguments to apply to the function, excluding the
   *     final callback.
   * @return {!ManagedPromise} A promise that will be resolved with the
   *     result of the provided function's callback.
   */
  function checkedNodeCall<T>(fn: Function, ...var_args: any[]): Promise<T>;

  /**
   * Consumes a {@code GeneratorFunction}. Each time the generator yields a
   * promise, this function will wait for it to be fulfilled before feeding the
   * fulfilled value back into {@code next}. Likewise, if a yielded promise is
   * rejected, the rejection error will be passed to {@code throw}.
   *
   * __Example 1:__ the Fibonacci Sequence.
   *
   *     promise.consume(function* fibonacci() {
   *       var n1 = 1, n2 = 1;
   *       for (var i = 0; i < 4; ++i) {
   *         var tmp = yield n1 + n2;
   *         n1 = n2;
   *         n2 = tmp;
   *       }
   *       return n1 + n2;
   *     }).then(function(result) {
   *       console.log(result);  // 13
   *     });
   *
   * __Example 2:__ a generator that throws.
   *
   *     promise.consume(function* () {
   *       yield promise.delayed(250).then(function() {
   *         throw Error('boom');
   *       });
   *     }).catch(function(e) {
   *       console.log(e.toString());  // Error: boom
   *     });
   *
   * @param {!Function} generatorFn The generator function to execute.
   * @param {Object=} opt_self The object to use as 'this' when invoking the
   *     initial generator.
   * @param {...*} var_args Any arguments to pass to the initial generator.
   * @return {!ManagedPromise<?>} A promise that will resolve to the
   *     generator's final result.
   * @throws {TypeError} If the given function is not a generator.
   */
  function consume<T>(generatorFn: Function, opt_self?: any, ...var_args: any[]): Promise<T>;

  /**
   * Registers an observer on a promised {@code value}, returning a new promise
   * that will be resolved when the value is. If {@code value} is not a promise,
   * then the return promise will be immediately resolved.
   * @param {*} value The value to observe.
   * @param {Function=} opt_callback The function to call when the value is
   *     resolved successfully.
   * @param {Function=} opt_errback The function to call when the value is
   *     rejected.
   * @return {!ManagedPromise} A new promise.
   */
  function when<T>(value: T | Promise<T>, opt_callback?: (value: T) => any, opt_errback?: (error: any) => any): Promise<any>;

  /**
   * Returns a promise that will be resolved with the input value in a
   * fully-resolved state. If the value is an array, each element will be fully
   * resolved. Likewise, if the value is an object, all keys will be fully
   * resolved. In both cases, all nested arrays and objects will also be
   * fully resolved.  All fields are resolved in place; the returned promise will
   * resolve on {@code value} and not a copy.
   *
   * Warning: This function makes no checks against objects that contain
   * cyclical references:
   *
   *     var value = {};
   *     value['self'] = value;
   *     promise.fullyResolved(value);  // Stack overflow.
   *
   * @param {*} value The value to fully resolve.
   * @return {!ManagedPromise} A promise for a fully resolved version
   *     of the input value.
   */
  function fullyResolved<T>(value: any): Promise<T>;

  /**
   * Changes the default flow to use when no others are active.
   * @param {!ControlFlow} flow The new default flow.
   * @throws {Error} If the default flow is not currently active.
   */
  function setDefaultFlow(flow: ControlFlow): void;

  // endregion

  /**
   * Error used when the computation of a promise is cancelled.
   */
  class CancellationError extends Error {
    /**
     * @param {string=} opt_msg The cancellation message.
     */
    constructor(opt_msg?: string);
  }

  interface IThenable<T> extends PromiseLike<T> {
    /**
     * Registers listeners for when this instance is resolved.
     *
     * @param onfulfilled
     *     The function to call if this promise is successfully resolved. The function
     *     should expect a single argument: the promise's resolved value.
     * @param onrejected
     *     The function to call if this promise is rejected. The function should
     *     expect a single argument: the rejection reason.
     * @return A new promise which will be resolved with the result
     *     of the invoked callback.
     * @template R
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): PromiseLike<TResult1 | TResult2>;

    /**
     * Registers a listener for when this promise is rejected. This is synonymous
     * with the {@code catch} clause in a synchronous API:
     *
     *     // Synchronous API:
     *     try {
     *       doSynchronousWork();
     *     } catch (ex) {
     *       console.error(ex);
     *     }
     *
     *     // Asynchronous promise API:
     *     doAsynchronousWork().catch(function(ex) {
     *       console.error(ex);
     *     });
     *
     * @param {function(*): (R|IThenable<R>)} errback The
     *     function to call if this promise is rejected. The function should
     *     expect a single argument: the rejection reason.
     * @return {!ManagedPromise<R>} A new promise which will be
     *     resolved with the result of the invoked callback.
     * @template R
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
  }

  /**
   * Thenable is a promise-like object with a {@code then} method which may be
   * used to schedule callbacks on a promised value.
   *
   * @interface
   * @template T
   */
  interface Thenable<T> extends IThenable<T> {}
  class Thenable<T> {
    /**
     * Registers a listener to invoke when this promise is resolved, regardless
     * of whether the promise's value was successfully computed. This function
     * is synonymous with the {@code finally} clause in a synchronous API:
     *
     *     // Synchronous API:
     *     try {
     *       doSynchronousWork();
     *     } finally {
     *       cleanUp();
     *     }
     *
     *     // Asynchronous promise API:
     *     doAsynchronousWork().finally(cleanUp);
     *
     * __Note:__ similar to the {@code finally} clause, if the registered
     * callback returns a rejected promise or throws an error, it will silently
     * replace the rejection error (if any) from this promise:
     *
     *     try {
     *       throw Error('one');
     *     } finally {
     *       throw Error('two');  // Hides Error: one
     *     }
     *
     *     promise.rejected(Error('one'))
     *         .finally(function() {
     *           throw Error('two');  // Hides Error: one
     *         });
     *
     * @param {function(): (R|IThenable<R>)} callback The function to call when
     *     this promise is resolved.
     * @return {!ManagedPromise<R>} A promise that will be fulfilled
     *     with the callback result.
     * @template R
     */
    finally<R>(callback: Function): Promise<R>;

    /**
     * Adds a property to a class prototype to allow runtime checks of whether
     * instances of that class implement the Thenable interface. This function
     * will also ensure the prototype's {@code then} function is exported from
     * compiled code.
     * @param {function(new: Thenable, ...?)} ctor The
     *     constructor whose prototype to modify.
     */
    static addImplementation(ctor: Function): void;

    /**
     * Checks if an object has been tagged for implementing the Thenable
     * interface as defined by {@link Thenable.addImplementation}.
     * @param {*} object The object to test.
     * @return {boolean} Whether the object is an implementation of the Thenable
     *     interface.
     */
    static isImplementation(object: any): boolean;
  }

  interface IFulfilledCallback<T> {
    (value: T | IThenable<T> | Thenable<T> | undefined): void;
  }

  interface IRejectedCallback {
    (reason: any): void;
  }

  /**
   * Represents the eventual value of a completed operation. Each promise may be
   * in one of three states: pending, fulfilled, or rejected. Each promise starts
   * in the pending state and may make a single transition to either a
   * fulfilled or rejected state, at which point the promise is considered
   * resolved.
   *
   * @implements {promise.Thenable<T>}
   * @template T
   * @see http://promises-aplus.github.io/promises-spec/
   */
  class Promise<T> implements IThenable<T>, PromiseLike<T> {
    /**
     * @param {function(
     *           function((T|IThenable<T>|Thenable)=),
     *           function(*=))} resolver
     *     Function that is invoked immediately to begin computation of this
     *     promise's value. The function should accept a pair of callback
     *     functions, one for fulfilling the promise and another for rejecting it.
     * @param {ControlFlow=} opt_flow The control flow
     *     this instance was created under. Defaults to the currently active flow.
     */
    constructor(resolver: (resolve: IFulfilledCallback<T>, reject: IRejectedCallback) => void, opt_flow?: ControlFlow);

    /**
     * Creates a promise that is immediately resolved with the given value.
     *
     * @param {T=} opt_value The value to resolve.
     * @return {!ManagedPromise<T>} A promise resolved with the given value.
     * @template T
     */
    static resolve<T>(opt_value?: T): Promise<T>;

    /**
     * Creates a promise that is immediately rejected with the given reason.
     *
     * @param {*=} opt_reason The rejection reason.
     * @return {!ManagedPromise<?>} A new rejected promise.
     */
    static reject(opt_reason?: any): Promise<never>;

    /**
     * Registers listeners for when this instance is resolved.
     *
     * @param onfulfilled
     *     The function to call if this promise is successfully resolved. The function
     *     should expect a single argument: the promise's resolved value.
     * @param onrejected
     *     The function to call if this promise is rejected. The function should
     *     expect a single argument: the rejection reason.
     * @return A new promise which will be resolved with the result
     *     of the invoked callback.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;

    /**
     * Registers a listener for when this promise is rejected. This is synonymous
     * with the {@code catch} clause in a synchronous API:
     *
     *     // Synchronous API:
     *     try {
     *       doSynchronousWork();
     *     } catch (ex) {
     *       console.error(ex);
     *     }
     *
     *     // Asynchronous promise API:
     *     doAsynchronousWork().catch(function(ex) {
     *       console.error(ex);
     *     });
     *
     * @param onrejected
     *     The function to call if this promise is rejected. The function should
     *     expect a single argument: the rejection reason.
     * @return A new promise which will be resolved with the result of the invoked callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
  }

  /**
   * Represents a value that will be resolved at some point in the future. This
   * class represents the protected 'producer' half of a Promise - each Deferred
   * has a {@code promise} property that may be returned to consumers for
   * registering callbacks, reserving the ability to resolve the deferred to the
   * producer.
   *
   * <p>If this Deferred is rejected and there are no listeners registered before
   * the next turn of the event loop, the rejection will be passed to the
   * {@link promise.ControlFlow} as an unhandled failure.
   *
   */
  class Deferred<T> {
    // region Constructors

    /**
     *
     * @param {promise.ControlFlow=} opt_flow The control flow
     *     this instance was created under. This should only be provided during
     *     unit tests.
     * @constructor
     */
    constructor(opt_flow?: ControlFlow);

    // endregion

    static State_: {
      BLOCKED: number;
      PENDING: number;
      REJECTED: number;
      RESOLVED: number;
    };

    // region Properties

    /**
     * The consumer promise for this instance. Provides protected access to the
     * callback registering functions.
     * @type {!promise.Promise}
     */
    promise: Promise<T>;

    // endregion

    // region Methods

    /**
     * Rejects this promise. If the error is itself a promise, this instance will
     * be chained to it and be rejected with the error's resolved value.
     * @param {*=} opt_error The rejection reason, typically either a
     *     {@code Error} or a {@code string}.
     */
    reject(opt_error?: any): void;
    errback(opt_error?: any): void;

    /**
     * Resolves this promise with the given value. If the value is itself a
     * promise and not a reference to this deferred, this instance will wait for
     * it before resolving.
     * @param {*=} opt_value The resolved value.
     */
    fulfill(opt_value?: T): void;

    /**
     * Removes all of the listeners previously registered on this deferred.
     * @throws {Error} If this deferred has already been resolved.
     */
    removeAll(): void;

    // endregion
  }

  interface IControlFlowTimer {
    clearInterval(ms: number): void;
    clearTimeout(ms: number): void;
    setInterval(fn: Function, ms: number): number;
    setTimeout(fn: Function, ms: number): number;
  }

  interface IEventType {
    /** Emitted when all tasks have been successfully executed. */
    IDLE: string;

    /** Emitted when a ControlFlow has been reset. */
    RESET: string;

    /** Emitted whenever a new task has been scheduled. */
    SCHEDULE_TASK: string;

    /**
     * Emitted whenever a control flow aborts due to an unhandled promise
     * rejection. This event will be emitted along with the offending rejection
     * reason. Upon emitting this event, the control flow will empty its task
     * queue and revert to its initial state.
     */
    UNCAUGHT_EXCEPTION: string;
  }

  /**
   * Handles the execution of scheduled tasks, each of which may be an
   * asynchronous operation. The control flow will ensure tasks are executed in
   * the ordered scheduled, starting each task only once those before it have
   * completed.
   *
   * Each task scheduled within this flow may return a
   * {@link promise.Promise} to indicate it is an asynchronous
   * operation. The ControlFlow will wait for such promises to be resolved before
   * marking the task as completed.
   *
   * Tasks and each callback registered on a {@link promise.Promise}
   * will be run in their own ControlFlow frame.  Any tasks scheduled within a
   * frame will take priority over previously scheduled tasks. Furthermore, if any
   * of the tasks in the frame fail, the remainder of the tasks in that frame will
   * be discarded and the failure will be propagated to the user through the
   * callback/task's promised result.
   *
   * Each time a ControlFlow empties its task queue, it will fire an
   * {@link promise.ControlFlow.EventType.IDLE IDLE} event. Conversely,
   * whenever the flow terminates due to an unhandled error, it will remove all
   * remaining tasks in its queue and fire an
   * {@link promise.ControlFlow.EventType.UNCAUGHT_EXCEPTION
   * UNCAUGHT_EXCEPTION} event. If there are no listeners registered with the
   * flow, the error will be rethrown to the global error handler.
   *
   * @extends {EventEmitter}
   * @final
   */
  class ControlFlow extends EventEmitter {
    /**
     * @constructor
     */
    constructor();

    /**
     * Events that may be emitted by an {@link promise.ControlFlow}.
     * @enum {string}
     */
    static EventType: IEventType;

    /**
     * Returns a string representation of this control flow, which is its current
     * {@link #getSchedule() schedule}, sans task stack traces.
     * @return {string} The string representation of this contorl flow.
     * @override
     */
    toString(): string;

    /**
     * Resets this instance, clearing its queue and removing all event listeners.
     */
    reset(): void;

    /**
     * Generates an annotated string describing the internal state of this control
     * flow, including the currently executing as well as pending tasks. If
     * {@code opt_includeStackTraces === true}, the string will include the
     * stack trace from when each task was scheduled.
     * @param {string=} opt_includeStackTraces Whether to include the stack traces
     *     from when each task was scheduled. Defaults to false.
     * @return {string} String representation of this flow's internal state.
     */
    getSchedule(opt_includeStackTraces?: boolean): string;

    /**
     * Schedules a task for execution. If there is nothing currently in the
     * queue, the task will be executed in the next turn of the event loop. If
     * the task function is a generator, the task will be executed using
     * {@link promise.consume}.
     *
     * @param {function(): (T|promise.Promise<T>)} fn The function to
     *     call to start the task. If the function returns a
     *     {@link promise.Promise}, this instance will wait for it to be
     *     resolved before starting the next task.
     * @param {string=} opt_description A description of the task.
     * @return {!promise.Promise<T>} A promise that will be resolved
     *     with the result of the action.
     * @template T
     */
    execute<T>(fn: () => (T | Promise<T>), opt_description?: string): Promise<T>;

    /**
     * Inserts a {@code setTimeout} into the command queue. This is equivalent to
     * a thread sleep in a synchronous programming language.
     *
     * @param {number} ms The timeout delay, in milliseconds.
     * @param {string=} opt_description A description to accompany the timeout.
     * @return {!promise.Promise} A promise that will be resolved with
     *     the result of the action.
     */
    timeout(ms: number, opt_description?: string): Promise<void>;

    /**
     * Schedules a task that shall wait for a condition to hold. Each condition
     * function may return any value, but it will always be evaluated as a boolean.
     *
     * Condition functions may schedule sub-tasks with this instance, however,
     * their execution time will be factored into whether a wait has timed out.
     *
     * In the event a condition returns a Promise, the polling loop will wait for
     * it to be resolved before evaluating whether the condition has been satisfied.
     * The resolution time for a promise is factored into whether a wait has timed
     * out.
     *
     * If the condition function throws, or returns a rejected promise, the
     * wait task will fail.
     *
     * If the condition is defined as a promise, the flow will wait for it to
     * settle. If the timeout expires before the promise settles, the promise
     * returned by this function will be rejected.
     *
     * If this function is invoked with `timeout === 0`, or the timeout is omitted,
     * the flow will wait indefinitely for the condition to be satisfied.
     *
     * @param {(!promise.Promise<T>|function())} condition The condition to poll,
     *     or a promise to wait on.
     * @param {number=} opt_timeout How long to wait, in milliseconds, for the
     *     condition to hold before timing out. If omitted, the flow will wait
     *     indefinitely.
     * @param {string=} opt_message An optional error message to include if the
     *     wait times out; defaults to the empty string.
     * @return {!promise.Promise<T>} A promise that will be fulfilled
     *     when the condition has been satisified. The promise shall be rejected if
     *     the wait times out waiting for the condition.
     * @throws {TypeError} If condition is not a function or promise or if timeout
     *     is not a number >= 0.
     * @template T
     */
    wait<T>(condition: Promise<T> | Function, opt_timeout?: number, opt_message?: string): Promise<T>;
  }
}

/**
 * Defines a condition for use with WebDriver's WebDriver#wait wait command.
 */
export class Condition<T> {
  /**
   * @param {string} message A descriptive error message. Should complete the
   *     sentence 'Waiting [...]'
   * @param {function(!WebDriver): OUT} fn The condition function to
   *     evaluate on each iteration of the wait loop.
   * @constructor
   */
  constructor(message: string, fn: (webdriver: WebDriver) => any);

  /** @return {string} A description of this condition. */
  description(): string;

  /** @type {function(!WebDriver): OUT} */
  fn(webdriver: WebDriver): any;
}

/**
 * Defines a condition that will result in a {@link WebElement}.
 *
 * @extends {Condition<!(WebElement|IThenable<!WebElement>)>}
 */
export class WebElementCondition extends Condition<WebElement> {
  // add an unused private member so the compiler treats this
  // class distinct from other Conditions
  private _nominal: undefined;
}

export namespace until {
    /**
   * Creates a condition that will wait until the input driver is able to switch
   * to the designated frame. The target frame may be specified as
   *
   * 1. a numeric index into
   *     [window.frames](https://developer.mozilla.org/en-US/docs/Web/API/Window.frames)
   *     for the currently selected frame.
   * 2. a {@link ./WebElement}, which must reference a FRAME or IFRAME
   *     element on the current page.
   * 3. a locator which may be used to first locate a FRAME or IFRAME on the
   *     current page before attempting to switch to it.
   *
   * Upon successful resolution of this condition, the driver will be left
   * focused on the new frame.
   *
   * @param {!(number|./WebElement|By|
   *           function(!./WebDriver): !./WebElement)} frame
   *     The frame identifier.
   * @return {!Condition<boolean>} A new condition.
   */
  function ableToSwitchToFrame(frame: number | WebElement | By | ((webdriver: WebDriver) => WebElement) | ByHash): Condition<boolean>;

  /**
   * Creates a condition that waits for an alert to be opened. Upon success, the
   * returned promise will be fulfilled with the handle for the opened alert.
   *
   * @return {!Condition<!./Alert>} The new condition.
   */
  function alertIsPresent(): Condition<Alert>;

  /**
   * Creates a condition that will wait for the given element to be disabled.
   *
   * @param {!WebElement} element The element to test.
   * @return {!WebElementCondition} The new condition.
   * @see WebDriver#isEnabled
   */
  function elementIsDisabled(element: WebElement): WebElementCondition;

  /**
   * Creates a condition that will wait for the given element to be enabled.
   *
   * @param {!WebElement} element The element to test.
   * @return {!WebElementCondition} The new condition.
   * @see WebDriver#isEnabled
   */
  function elementIsEnabled(element: WebElement): WebElementCondition;

  /**
   * Creates a condition that will wait for the given element to be deselected.
   *
   * @param {!WebElement} element The element to test.
   * @return {!WebElementCondition} The new condition.
   * @see WebDriver#isSelected
   */
  function elementIsNotSelected(element: WebElement): WebElementCondition;

  /**
   * Creates a condition that will wait for the given element to be in the DOM,
   * yet not visible to the user.
   *
   * @param {!WebElement} element The element to test.
   * @return {!WebElementCondition} The new condition.
   * @see WebDriver#isDisplayed
   */
  function elementIsNotVisible(element: WebElement): WebElementCondition;

  /**
   * Creates a condition that will wait for the given element to be selected.
   * @param {!WebElement} element The element to test.
   * @return {!WebElementCondition} The new condition.
   * @see WebDriver#isSelected
   */
  function elementIsSelected(element: WebElement): WebElementCondition;

  /**
   * Creates a condition that will wait for the given element to become visible.
   *
   * @param {!WebElement} element The element to test.
   * @return {!WebElementCondition} The new condition.
   * @see WebDriver#isDisplayed
   */
  function elementIsVisible(element: WebElement): WebElementCondition;

  /**
   * Creates a condition that will loop until an element is
   * {@link ./WebDriver#findElement found} with the given locator.
   *
   * @param {!(By|Function)} locator The locator to use.
   * @return {!WebElementCondition} The new condition.
   */
  function elementLocated(locator: Locator): WebElementCondition;

  /**
   * Creates a condition that will wait for the given element's
   * {@link WebDriver#getText visible text} to contain the given
   * substring.
   *
   * @param {!WebElement} element The element to test.
   * @param {string} substr The substring to search for.
   * @return {!WebElementCondition} The new condition.
   * @see WebDriver#getText
   */
  function elementTextContains(element: WebElement, substr: string): WebElementCondition;

  /**
   * Creates a condition that will wait for the given element's
   * {@link WebDriver#getText visible text} to match the given
   * {@code text} exactly.
   *
   * @param {!WebElement} element The element to test.
   * @param {string} text The expected text.
   * @return {!WebElementCondition} The new condition.
   * @see WebDriver#getText
   */
  function elementTextIs(element: WebElement, text: string): WebElementCondition;

  /**
   * Creates a condition that will wait for the given element's
   * {@link WebDriver#getText visible text} to match a regular
   * expression.
   *
   * @param {!WebElement} element The element to test.
   * @param {!RegExp} regex The regular expression to test against.
   * @return {!WebElementCondition} The new condition.
   * @see WebDriver#getText
   */
  function elementTextMatches(element: WebElement, regex: RegExp): WebElementCondition;

  /**
   * Creates a condition that will loop until at least one element is
   * {@link WebDriver#findElement found} with the given locator.
   *
   * @param {!(Locator|By.Hash|Function)} locator The locator
   *     to use.
   * @return {!Condition.<!Array.<!WebElement>>} The new
   *     condition.
   */
  function elementsLocated(locator: Locator): Condition<WebElement[]>;

  /**
   * Creates a condition that will wait for the given element to become stale. An
   * element is considered stale once it is removed from the DOM, or a new page
   * has loaded.
   *
   * @param {!WebElement} element The element that should become stale.
   * @return {!Condition<boolean>} The new condition.
   */
  function stalenessOf(element: WebElement): Condition<boolean>;

  /**
   * Creates a condition that will wait for the current page's title to contain
   * the given substring.
   *
   * @param {string} substr The substring that should be present in the page
   *     title.
   * @return {!Condition.<boolean>} The new condition.
   */
  function titleContains(substr: string): Condition<boolean>;

  /**
   * Creates a condition that will wait for the current page's title to match the
   * given value.
   *
   * @param {string} title The expected page title.
   * @return {!Condition<boolean>} The new condition.
   */
  function titleIs(title: string): Condition<boolean>;

  /**
   * Creates a condition that will wait for the current page's title to match the
   * given regular expression.
   *
   * @param {!RegExp} regex The regular expression to test against.
   * @return {!Condition.<boolean>} The new condition.
   */
  function titleMatches(regex: RegExp): Condition<boolean>;

  /**
   * Creates a condition that will wait for the current page's url to contain
   * the given substring.
   *
   * @param {string} substrUrl The substring that should be present in the current
   *     URL.
   * @return {!Condition<boolean>} The new condition.
   */
  function urlContains(substrUrl: string): Condition<boolean>;

  /**
   * Creates a condition that will wait for the current page's url to match the
   * given value.
   *
   * @param {string} url The expected page url.
   * @return {!Condition<boolean>} The new condition.
   */
  function urlIs(url: string): Condition<boolean>;

  /**
   * Creates a condition that will wait for the current page's url to match the
   * given regular expression.
   *
   * @param {!RegExp} regex The regular expression to test against.
   * @return {!Condition<boolean>} The new condition.
   */
  function urlMatches(regex: RegExp): Condition<boolean>;
}

export interface ILocation {
  x: number;
  y: number;
}

export interface ISize {
  width: number;
  height: number;
}

export interface IButton {
  LEFT: string;
  MIDDLE: string;
  RIGHT: string;
}

/**
 * Representations of pressable keys that aren't text.  These are stored in
 * the Unicode PUA (Private Use Area) code points, 0xE000-0xF8FF.  Refer to
 * http://www.google.com.au/search?&q=unicode+pua&btnG=Search
 *
 * @enum {string}
 */
export const Button: IButton;

export interface IKey {
  NULL: string;
  CANCEL: string;  // ^break
  HELP: string;
  BACK_SPACE: string;
  TAB: string;
  CLEAR: string;
  RETURN: string;
  ENTER: string;
  SHIFT: string;
  CONTROL: string;
  ALT: string;
  PAUSE: string;
  ESCAPE: string;
  SPACE: string;
  PAGE_UP: string;
  PAGE_DOWN: string;
  END: string;
  HOME: string;
  ARROW_LEFT: string;
  LEFT: string;
  ARROW_UP: string;
  UP: string;
  ARROW_RIGHT: string;
  RIGHT: string;
  ARROW_DOWN: string;
  DOWN: string;
  INSERT: string;
  DELETE: string;
  SEMICOLON: string;
  EQUALS: string;

  NUMPAD0: string;  // number pad keys
  NUMPAD1: string;
  NUMPAD2: string;
  NUMPAD3: string;
  NUMPAD4: string;
  NUMPAD5: string;
  NUMPAD6: string;
  NUMPAD7: string;
  NUMPAD8: string;
  NUMPAD9: string;
  MULTIPLY: string;
  ADD: string;
  SEPARATOR: string;
  SUBTRACT: string;
  DECIMAL: string;
  DIVIDE: string;

  F1: string;  // function keys
  F2: string;
  F3: string;
  F4: string;
  F5: string;
  F6: string;
  F7: string;
  F8: string;
  F9: string;
  F10: string;
  F11: string;
  F12: string;

  COMMAND: string;  // Apple command key
  META: string;     // alias for Windows key

  /**
    * Simulate pressing many keys at once in a 'chord'. Takes a sequence of
    * keys or strings, appends each of the values to a string,
    * and adds the chord termination key ({@link Key.NULL}) and returns
    * the resulting string.
    *
    * Note: when the low-level webdriver key handlers see Keys.NULL, active
    * modifier keys (CTRL/ALT/SHIFT/etc) release via a keyup event.
    *
    * @param {...string} var_args The key sequence to concatenate.
    * @return {string} The null-terminated key sequence.
    */
  chord(...var_args: Array<string|IKey>): string;
}

/**
 * Representations of pressable keys that aren't text.  These are stored in
 * the Unicode PUA (Private Use Area) code points, 0xE000-0xF8FF.  Refer to
 * http://www.google.com.au/search?&q=unicode+pua&btnG=Search
 *
 * @enum {string}
 */
export const Key: IKey;

/**
 * Class for defining sequences of complex user interactions. Each sequence
 * will not be executed until {@link #perform} is called.
 *
 * Example:
 *
 *     new ActionSequence(driver).
 *         keyDown(Key.SHIFT).
 *         click(element1).
 *         click(element2).
 *         dragAndDrop(element3, element4).
 *         keyUp(Key.SHIFT).
 *         perform();
 *
 */
export class ActionSequence {
  // region Constructors

  /**
   * @param {!WebDriver} driver The driver instance to use.
   * @constructor
   */
  constructor(driver: WebDriver);

  // endregion

  // region Methods

  /**
   * Executes this action sequence.
   * @return {!promise.Promise} A promise that will be resolved once
   *     this sequence has completed.
   */
  perform(): promise.Promise<void>;

  /**
   * Moves the mouse.  The location to move to may be specified in terms of the
   * mouse's current location, an offset relative to the top-left corner of an
   * element, or an element (in which case the middle of the element is used).
   *
   * @param {(!./WebElement|{x: number, y: number})} location The
   *     location to drag to, as either another WebElement or an offset in
   *     pixels.
   * @param {{x: number, y: number}=} opt_offset If the target {@code location}
   *     is defined as a {@link ./WebElement}, this parameter defines
   *     an offset within that element. The offset should be specified in pixels
   *     relative to the top-left corner of the element's bounding box. If
   *     omitted, the element's center will be used as the target offset.
   * @return {!ActionSequence} A self reference.
   */
  mouseMove(location: WebElement | ILocation, opt_offset?: ILocation): ActionSequence;

  /**
   * Presses a mouse button. The mouse button will not be released until
   * {@link #mouseUp} is called, regardless of whether that call is made in this
   * sequence or another. The behavior for out-of-order events (e.g. mouseDown,
   * click) is undefined.
   *
   * If an element is provided, the mouse will first be moved to the center
   * of that element. This is equivalent to:
   *
   *     sequence.mouseMove(element).mouseDown()
   *
   * Warning: this method currently only supports the left mouse button. See
   * [issue 4047](http://code.google.com/p/selenium/issues/detail?id=4047).
   *
   * @param {(./WebElement|input.Button)=} opt_elementOrButton Either
   *     the element to interact with or the button to click with.
   *     Defaults to {@link input.Button.LEFT} if neither an element nor
   *     button is specified.
   * @param {input.Button=} opt_button The button to use. Defaults to
   *     {@link input.Button.LEFT}. Ignored if a button is provided as the
   *     first argument.
   * @return {!ActionSequence} A self reference.
   */
  mouseDown(opt_elementOrButton?: WebElement | string, opt_button?: string): ActionSequence;

  /**
   * Releases a mouse button. Behavior is undefined for calling this function
   * without a previous call to {@link #mouseDown}.
   *
   * If an element is provided, the mouse will first be moved to the center
   * of that element. This is equivalent to:
   *
   *     sequence.mouseMove(element).mouseUp()
   *
   * Warning: this method currently only supports the left mouse button. See
   * [issue 4047](http://code.google.com/p/selenium/issues/detail?id=4047).
   *
   * @param {(./WebElement|input.Button)=} opt_elementOrButton Either
   *     the element to interact with or the button to click with.
   *     Defaults to {@link input.Button.LEFT} if neither an element nor
   *     button is specified.
   * @param {input.Button=} opt_button The button to use. Defaults to
   *     {@link input.Button.LEFT}. Ignored if a button is provided as the
   *     first argument.
   * @return {!ActionSequence} A self reference.
   */
  mouseUp(opt_elementOrButton?: WebElement | string, opt_button?: string): ActionSequence;

  /**
   * Convenience function for performing a 'drag and drop' manuever. The target
   * element may be moved to the location of another element, or by an offset (in
   * pixels).
   *
   * @param {!./WebElement} element The element to drag.
   * @param {(!./WebElement|{x: number, y: number})} location The
   *     location to drag to, either as another WebElement or an offset in
   *     pixels.
   * @return {!ActionSequence} A self reference.
   */
  dragAndDrop(element: WebElement, location: WebElement | ILocation): ActionSequence;

  /**
   * Clicks a mouse button.
   *
   * If an element is provided, the mouse will first be moved to the center
   * of that element. This is equivalent to:
   *
   *     sequence.mouseMove(element).click()
   *
   * @param {(./WebElement|input.Button)=} opt_elementOrButton Either
   *     the element to interact with or the button to click with.
   *     Defaults to {@link input.Button.LEFT} if neither an element nor
   *     button is specified.
   * @param {input.Button=} opt_button The button to use. Defaults to
   *     {@link input.Button.LEFT}. Ignored if a button is provided as the
   *     first argument.
   * @return {!ActionSequence} A self reference.
   */
  click(opt_elementOrButton?: WebElement | string, opt_button?: string): ActionSequence;

  /**
   * Double-clicks a mouse button.
   *
   * If an element is provided, the mouse will first be moved to the center of
   * that element. This is equivalent to:
   *
   *     sequence.mouseMove(element).doubleClick()
   *
   * Warning: this method currently only supports the left mouse button. See
   * [issue 4047](http://code.google.com/p/selenium/issues/detail?id=4047).
   *
   * @param {(./WebElement|input.Button)=} opt_elementOrButton Either
   *     the element to interact with or the button to click with.
   *     Defaults to {@link input.Button.LEFT} if neither an element nor
   *     button is specified.
   * @param {input.Button=} opt_button The button to use. Defaults to
   *     {@link input.Button.LEFT}. Ignored if a button is provided as the
   *     first argument.
   * @return {!ActionSequence} A self reference.
   */
  doubleClick(opt_elementOrButton?: WebElement | string, opt_button?: string): ActionSequence;

  /**
   * Performs a modifier key press. The modifier key is <em>not released</em>
   * until {@link #keyUp} or {@link #sendKeys} is called. The key press will be
   * targetted at the currently focused element.
   * @param {!Key} key The modifier key to push. Must be one of
   *     {ALT, CONTROL, SHIFT, COMMAND, META}.
   * @return {!ActionSequence} A self reference.
   * @throws {Error} If the key is not a valid modifier key.
   */
  keyDown(key: string): ActionSequence;

  /**
   * Performs a modifier key release. The release is targetted at the currently
   * focused element.
   * @param {!Key} key The modifier key to release. Must be one of
   *     {ALT, CONTROL, SHIFT, COMMAND, META}.
   * @return {!ActionSequence} A self reference.
   * @throws {Error} If the key is not a valid modifier key.
   */
  keyUp(key: string): ActionSequence;

  /**
   * Simulates typing multiple keys. Each modifier key encountered in the
   * sequence will not be released until it is encountered again. All key events
   * will be targeted at the currently focused element.
   *
   * @param {...(string|!input.Key|!Array<(string|!input.Key)>)} var_args
   *     The keys to type.
   * @return {!ActionSequence} A self reference.
   * @throws {Error} If the key is not a valid modifier key.
   */
  sendKeys(...var_args: Array<string|promise.Promise<string>>): ActionSequence;

  // endregion
}

/**
 * Class for defining sequences of user touch interactions. Each sequence
 * will not be executed until {@link #perform} is called.
 *
 * Example:
 *
 *     new TouchSequence(driver).
 *         tapAndHold({x: 0, y: 0}).
 *         move({x: 3, y: 4}).
 *         release({x: 10, y: 10}).
 *         perform();
 */
export class TouchSequence {
  /*
    * @param {!WebDriver} driver The driver instance to use.
    * @constructor
    */
  constructor(driver: WebDriver);

  /**
   * Executes this action sequence.
   * @return {!promise.Promise} A promise that will be resolved once
   *     this sequence has completed.
   */
  perform(): promise.Promise<void>;

  /**
   * Taps an element.
   *
   * @param {!WebElement} elem The element to tap.
   * @return {!TouchSequence} A self reference.
   */
  tap(elem: WebElement): TouchSequence;

  /**
   * Double taps an element.
   *
   * @param {!WebElement} elem The element to double tap.
   * @return {!TouchSequence} A self reference.
   */
  doubleTap(elem: WebElement): TouchSequence;

  /**
   * Long press on an element.
   *
   * @param {!WebElement} elem The element to long press.
   * @return {!TouchSequence} A self reference.
   */
  longPress(elem: WebElement): TouchSequence;

  /**
   * Touch down at the given location.
   *
   * @param {{ x: number, y: number }} location The location to touch down at.
   * @return {!TouchSequence} A self reference.
   */
  tapAndHold(location: ILocation): TouchSequence;

  /**
   * Move a held {@linkplain #tapAndHold touch} to the specified location.
   *
   * @param {{x: number, y: number}} location The location to move to.
   * @return {!TouchSequence} A self reference.
   */
  move(location: ILocation): TouchSequence;

  /**
   * Release a held {@linkplain #tapAndHold touch} at the specified location.
   *
   * @param {{x: number, y: number}} location The location to release at.
   * @return {!TouchSequence} A self reference.
   */
  release(location: ILocation): TouchSequence;

  /**
   * Scrolls the touch screen by the given offset.
   *
   * @param {{x: number, y: number}} offset The offset to scroll to.
   * @return {!TouchSequence} A self reference.
   */
  scroll(offset: IOffset): TouchSequence;

  /**
   * Scrolls the touch screen, starting on `elem` and moving by the specified
   * offset.
   *
   * @param {!WebElement} elem The element where scroll starts.
   * @param {{x: number, y: number}} offset The offset to scroll to.
   * @return {!TouchSequence} A self reference.
   */
  scrollFromElement(elem: WebElement, offset: IOffset): TouchSequence;

  /**
   * Flick, starting anywhere on the screen, at speed xspeed and yspeed.
   *
   * @param {{xspeed: number, yspeed: number}} speed The speed to flick in each
   direction, in pixels per second.
   * @return {!TouchSequence} A self reference.
   */
  flick(speed: ISpeed): TouchSequence;

  /**
   * Flick starting at elem and moving by x and y at specified speed.
   *
   * @param {!WebElement} elem The element where flick starts.
   * @param {{x: number, y: number}} offset The offset to flick to.
   * @param {number} speed The speed to flick at in pixels per second.
   * @return {!TouchSequence} A self reference.
   */
  flickElement(elem: WebElement, offset: IOffset, speed: number): TouchSequence;
}

export interface IOffset {
  x: number;
  y: number;
}

export interface ISpeed {
  xspeed: number;
  yspeed: number;
}

/**
 * Represents a modal dialog such as {@code alert}, {@code confirm}, or
 * {@code prompt}. Provides functions to retrieve the message displayed with
 * the alert, accept or dismiss the alert, and set the response text (in the
 * case of {@code prompt}).
 */
export class Alert {
  /**
   * @param {!WebDriver} driver The driver controlling the browser this alert
   *     is attached to.
   * @param {string} text The message text displayed with this alert.
   */
  constructor(driver: WebDriver, text: string);

  // region Methods

  /**
   * Retrieves the message text displayed with this alert. For instance, if the
   * alert were opened with alert('hello'), then this would return 'hello'.
   * @return {!promise.Promise} A promise that will be resolved to the
   *     text displayed with this alert.
   */
  getText(): promise.Promise<string>;

  /**
   * Sets the username and password in an alert prompting for credentials (such
   * as a Basic HTTP Auth prompt). This method will implicitly
   * {@linkplain #accept() submit} the dialog.
   *
   * @param {string} username The username to send.
   * @param {string} password The password to send.
   * @return {!promise.Promise<void>} A promise that will be resolved when this
   *     command has completed.
   */
  authenticateAs(username: string, password: string): promise.Promise<void>;

  /**
   * Accepts this alert.
   * @return {!promise.Promise} A promise that will be resolved when
   *     this command has completed.
   */
  accept(): promise.Promise<void>;

  /**
   * Dismisses this alert.
   * @return {!promise.Promise} A promise that will be resolved when
   *     this command has completed.
   */
  dismiss(): promise.Promise<void>;

  /**
   * Sets the response text on this alert. This command will return an error if
   * the underlying alert does not support response text (e.g. window.alert and
   * window.confirm).
   * @param {string} text The text to set.
   * @return {!promise.Promise} A promise that will be resolved when
   *     this command has completed.
   */
  sendKeys(text: string): promise.Promise<void>;

  // endregion
}

/**
 * AlertPromise is a promise that will be fulfilled with an Alert. This promise
 * serves as a forward proxy on an Alert, allowing calls to be scheduled
 * directly on this instance before the underlying Alert has been fulfilled. In
 * other words, the following two statements are equivalent:
 *
 *     driver.switchTo().alert().dismiss();
 *     driver.switchTo().alert().then(function(alert) {
 *       return alert.dismiss();
 *     });
 *
 * @implements {promise.Thenable.<!Alert>}
 * @final
 */
export interface AlertPromise extends promise.IThenable<Alert> {}
export class AlertPromise extends Alert {
  /**
   * @param {!WebDriver} driver The driver controlling the browser this
   *     alert is attached to.
   * @param {!promise.Thenable<!Alert>} alert A thenable
   *     that will be fulfilled with the promised alert.
   */
  constructor(driver: WebDriver, alert: promise.Promise<Alert>);
}

/**
 * Recognized browser names.
 * @enum {string}
 */
export interface IBrowser {
  ANDROID: string;
  CHROME: string;
  EDGE: string;
  FIREFOX: string;
  IE: string;
  INTERNET_EXPLORER: string;
  IPAD: string;
  IPHONE: string;
  OPERA: string;
  PHANTOM_JS: string;
  SAFARI: string;
  HTMLUNIT: string;
}

export const Browser: IBrowser;

export interface ProxyConfig {
  proxyType: string;
  proxyAutoconfigUrl?: string;
  ftpProxy?: string;
  httpProxy?: string;
  sslProxy?: string;
  noProxy?: string;
  socksProxy?: string;
  socksUsername?: string;
  socksPassword?: string;
}

/**
 * Creates new {@link WebDriver WebDriver} instances. The environment
 * variables listed below may be used to override a builder's configuration,
 * allowing quick runtime changes.
 *
 * - {@code SELENIUM_BROWSER}: defines the target browser in the form
 *   {@code browser[:version][:platform]}.
 *
 * - {@code SELENIUM_REMOTE_URL}: defines the remote URL for all builder
 *   instances. This environment variable should be set to a fully qualified
 *   URL for a WebDriver server (e.g. http://localhost:4444/wd/hub). This
 *   option always takes precedence over {@code SELENIUM_SERVER_JAR}.
 *
 * - {@code SELENIUM_SERVER_JAR}: defines the path to the
 *   <a href='http://selenium-release.storage.googleapis.com/index.html'>
 *   standalone Selenium server</a> jar to use. The server will be started the
 *   first time a WebDriver instance and be killed when the process exits.
 *
 * Suppose you had mytest.js that created WebDriver with
 *
 *     var driver = new Builder()
 *         .forBrowser('chrome')
 *         .build();
 *
 * This test could be made to use Firefox on the local machine by running with
 * `SELENIUM_BROWSER=firefox node mytest.js`. Rather than change the code to
 * target Google Chrome on a remote machine, you can simply set the
 * `SELENIUM_BROWSER` and `SELENIUM_REMOTE_URL` environment variables:
 *
 *     SELENIUM_BROWSER=chrome:36:LINUX \
 *     SELENIUM_REMOTE_URL=http://www.example.com:4444/wd/hub \
 *     node mytest.js
 *
 * You could also use a local copy of the standalone Selenium server:
 *
 *     SELENIUM_BROWSER=chrome:36:LINUX \
 *     SELENIUM_SERVER_JAR=/path/to/selenium-server-standalone.jar \
 *     node mytest.js
 */
export class Builder {
  // region Constructors

  /**
   * @constructor
   */
  constructor();

  // endregion

  // region Methods

  /**
   * Configures this builder to ignore any environment variable overrides and to
   * only use the configuration specified through this instance's API.
   *
   * @return {!Builder} A self reference.
   */
  disableEnvironmentOverrides(): Builder;

  /**
   * Creates a new WebDriver client based on this builder's current
   * configuration.
   *
   * This method will return a {@linkplain ThenableWebDriver} instance, allowing
   * users to issue commands directly without calling `then()`. The returned
   * thenable wraps a promise that will resolve to a concrete
   * {@linkplain webdriver.WebDriver WebDriver} instance. The promise will be
   * rejected if the remote end fails to create a new session.
   *
   * @return {!ThenableWebDriver} A new WebDriver instance.
   * @throws {Error} If the current configuration is invalid.
   */
  build(): ThenableWebDriver;

  /**
   * Configures the target browser for clients created by this instance.
   * Any calls to {@link #withCapabilities} after this function will
   * overwrite these settings.
   *
   * <p>You may also define the target browser using the {@code SELENIUM_BROWSER}
   * environment variable. If set, this environment variable should be of the
   * form {@code browser[:[version][:platform]]}.
   *
   * @param {(string|Browser)} name The name of the target browser;
   *     common defaults are available on the {@link Browser} enum.
   * @param {string=} opt_version A desired version; may be omitted if any
   *     version should be used.
   * @param {string=} opt_platform The desired platform; may be omitted if any
   *     version may be used.
   * @return {!Builder} A self reference.
   */
  forBrowser(name: string, opt_version?: string, opt_platform?: string): Builder;

  /**
   * Returns the base set of capabilities this instance is currently configured
   * to use.
   * @return {!Capabilities} The current capabilities for this builder.
   */
  getCapabilities(): Capabilities;

  /**
   * @return {string} The URL of the WebDriver server this instance is configured
   *     to use.
   */
  getServerUrl(): string;

  /**
   * @return {?string} The URL of the proxy server to use for the WebDriver's
   *    HTTP connections, or `null` if not set.
   */
  getWebDriverProxy(): string;

  /**
   * Sets the default action to take with an unexpected alert before returning
   * an error.
   * @param {string} beahvior The desired behavior; should be 'accept', 'dismiss',
   *     or 'ignore'. Defaults to 'dismiss'.
   * @return {!Builder} A self reference.
   */
  setAlertBehavior(behavior: string): Builder;

  /**
   * Sets Chrome-specific options for drivers created by this builder. Any
   * logging or proxy settings defined on the given options will take precedence
   * over those set through {@link #setLoggingPrefs} and {@link #setProxy},
   * respectively.
   *
   * @param {!chrome.Options} options The ChromeDriver options to use.
   * @return {!Builder} A self reference.
   */
  setChromeOptions(options: chrome.Options): Builder;

  /**
   * @return {chrome.Options} the Chrome specific options currently configured
   *     for this builder.
   */
  getChromeOptions(): chrome.Options;

  /**
   * Sets the service builder to use for managing the chromedriver child process
   * when creating new Chrome sessions.
   *
   * @param {chrome.ServiceBuilder} service the service to use.
   * @return {!Builder} A self reference.
   */
  setChromeService(service: chrome.ServiceBuilder): Builder;

  /**
   * Sets the control flow that created drivers should execute actions in. If
   * the flow is never set, or is set to {@code null}, it will use the active
   * flow at the time {@link #build()} is called.
   * @param {promise.ControlFlow} flow The control flow to use, or
   *     {@code null} to
   * @return {!Builder} A self reference.
   */
  setControlFlow(flow: promise.ControlFlow): Builder;

  /**
   * Set {@linkplain edge.Options options} specific to Microsoft's Edge browser
   * for drivers created by this builder. Any proxy settings defined on the
   * given options will take precedence over those set through
   * {@link #setProxy}.
   *
   * @param {!edge.Options} options The MicrosoftEdgeDriver options to use.
   * @return {!Builder} A self reference.
   */
  setEdgeOptions(options: edge.Options): Builder;

  /**
   * Sets the {@link edge.ServiceBuilder} to use to manage the
   * MicrosoftEdgeDriver child process when creating sessions locally.
   *
   * @param {edge.ServiceBuilder} service the service to use.
   * @return {!Builder} a self reference.
   */
  setEdgeService(service: edge.ServiceBuilder): Builder;

  /**
   * Sets whether native events should be used.
   * @param {boolean} enabled Whether to enable native events.
   * @return {!Builder} A self reference.
   */
  setEnableNativeEvents(enabled: boolean): Builder;

  /**
   * Sets Firefox-specific options for drivers created by this builder. Any
   * logging or proxy settings defined on the given options will take precedence
   * over those set through {@link #setLoggingPrefs} and {@link #setProxy},
   * respectively.
   *
   * @param {!firefox.Options} options The FirefoxDriver options to use.
   * @return {!Builder} A self reference.
   */
  setFirefoxOptions(options: firefox.Options): Builder;

  /**
   * @return {firefox.Options} the Firefox specific options currently configured
   *     for this instance.
   */
  getFirefoxOptions(): firefox.Options;

  /**
   * Sets the {@link firefox.ServiceBuilder} to use to manage the geckodriver
   * child process when creating Firefox sessions locally.
   *
   * @param {firefox.ServiceBuilder} service the service to use.
   * @return {!Builder} a self reference.
   */
  setFirefoxService(service: firefox.ServiceBuilder): Builder;

  /**
   * Set Internet Explorer specific {@linkplain ie.Options options} for drivers
   * created by this builder. Any proxy settings defined on the given options
   * will take precedence over those set through {@link #setProxy}.
   *
   * @param {!ie.Options} options The IEDriver options to use.
   * @return {!Builder} A self reference.
   */
  setIeOptions(options: ie.Options): Builder;

  /**
   * Sets the logging preferences for the created session. Preferences may be
   * changed by repeated calls, or by calling {@link #withCapabilities}.
   * @param {!(logging.Preferences|Object.<string, string>)} prefs The
   *     desired logging preferences.
   * @return {!Builder} A self reference.
   */
  setLoggingPrefs(prefs: logging.Preferences | Object): Builder;

  /**
   * Sets Opera specific {@linkplain opera.Options options} for drivers created
   * by this builder. Any logging or proxy settings defined on the given options
   * will take precedence over those set through {@link #setLoggingPrefs} and
   * {@link #setProxy}, respectively.
   *
   * @param {!opera.Options} options The OperaDriver options to use.
   * @return {!Builder} A self reference.
   */
  setOperaOptions(options: opera.Options): Builder;

  /**
   * Sets the proxy configuration to use for WebDriver clients created by this
   * builder. Any calls to {@link #withCapabilities} after this function will
   * overwrite these settings.
   * @param {!capabilities.ProxyConfig} config The configuration to use.
   * @return {!Builder} A self reference.
   */
  setProxy(config: ProxyConfig): Builder;

  /**
   * Sets Safari specific {@linkplain safari.Options options} for drivers
   * created by this builder. Any logging settings defined on the given options
   * will take precedence over those set through {@link #setLoggingPrefs}.
   *
   * @param {!safari.Options} options The Safari options to use.
   * @return {!Builder} A self reference.
   */
  setSafariOptions(options: safari.Options): Builder;

  /**
   * @return {safari.Options} the Safari specific options currently configured
   *     for this instance.
   */
  getSafariOptions(): safari.Options;

  /**
   * Sets how elements should be scrolled into view for interaction.
   * @param {number} behavior The desired scroll behavior: either 0 to align with
   *     the top of the viewport or 1 to align with the bottom.
   * @return {!Builder} A self reference.
   */
  setScrollBehavior(behavior: number): Builder;

  /**
   * Sets the http agent to use for each request.
   * If this method is not called, the Builder will use http.globalAgent by default.
   *
   * @param {http.Agent} agent The agent to use for each request.
   * @return {!Builder} A self reference.
   */
  usingHttpAgent(agent: any): Builder;

  /**
   * Sets the URL of a remote WebDriver server to use. Once a remote URL has been
   * specified, the builder direct all new clients to that server. If this method
   * is never called, the Builder will attempt to create all clients locally.
   *
   * <p>As an alternative to this method, you may also set the
   * {@code SELENIUM_REMOTE_URL} environment variable.
   *
   * @param {string} url The URL of a remote server to use.
   * @return {!Builder} A self reference.
   */
  usingServer(url: string): Builder;

  /**
   * Sets the URL of the proxy to use for the WebDriver's HTTP connections.
   * If this method is never called, the Builder will create a connection
   * without a proxy.
   *
   * @param {string} proxy The URL of a proxy to use.
   * @return {!Builder} A self reference.
   */
  usingWebDriverProxy(proxy: string): Builder;

  /**
   * Sets the desired capabilities when requesting a new session. This will
   * overwrite any previously set capabilities.
   * @param {!(Object|Capabilities)} capabilities The desired
   *     capabilities for a new session.
   * @return {!Builder} A self reference.
   */
  withCapabilities(capabilities: Object | Capabilities): Builder;

  // endregion
}

/**
 * Describes a mechanism for locating an element on the page.
 * @final
 */
export class By {
  /**
   * @param {string} using the name of the location strategy to use.
   * @param {string} value the value to search for.
   */
  constructor(using: string, value: string);

  /**
   * Locates elements that have a specific class name.
   *
   * @param {string} name The class name to search for.
   * @return {!By} The new locator.
   * @see http://www.w3.org/TR/2011/WD-html5-20110525/elements.html#classes
   * @see http://www.w3.org/TR/CSS2/selector.html#class-html
   */
  static className(name: string): By;

  /**
   * Locates elements using a CSS selector.
   *
   * @param {string} selector The CSS selector to use.
   * @return {!By} The new locator.
   * @see http://www.w3.org/TR/CSS2/selector.html
   */
  static css(selector: string): By;

  /**
   * Locates eleemnts by the ID attribute. This locator uses the CSS selector
   * `*[id='$ID']`, _not_ `document.getElementById`.
   *
   * @param {string} id The ID to search for.
   * @return {!By} The new locator.
   */
  static id(id: string): By;

  /**
   * Locates link elements whose
   * {@linkplain WebElement#getText visible text} matches the given
   * string.
   *
   * @param {string} text The link text to search for.
   * @return {!By} The new locator.
   */
  static linkText(text: string): By;

  /**
   * Locates an elements by evaluating a
   * {@linkplain WebDriver#executeScript JavaScript expression}.
   * The result of this expression must be an element or list of elements.
   *
   * @param {!(string|Function)} script The script to execute.
   * @param {...*} var_args The arguments to pass to the script.
   * @return {function(!./WebDriver): !./promise.Promise}
   *     A new JavaScript-based locator function.
   */
  static js(script: string | Function, ...var_args: any[]): (webdriver: WebDriver) => promise.Promise<any>;

  /**
   * Locates elements whose `name` attribute has the given value.
   *
   * @param {string} name The name attribute to search for.
   * @return {!By} The new locator.
   */
  static name(name: string): By;

  /**
   * Locates link elements whose
   * {@linkplain WebElement#getText visible text} contains the given
   * substring.
   *
   * @param {string} text The substring to check for in a link's visible text.
   * @return {!By} The new locator.
   */
  static partialLinkText(text: string): By;

  /**
   * Locates elements with a given tag name.
   *
   * @param {string} name The tag name to search for.
   * @return {!By} The new locator.
   * @deprecated Use {@link By.css() By.css(tagName)} instead.
   */
  static tagName(name: string): By;

  /**
   * Locates elements matching a XPath selector. Care should be taken when
   * using an XPath selector with a {@link WebElement} as WebDriver
   * will respect the context in the specified in the selector. For example,
   * given the selector `//div`, WebDriver will search from the document root
   * regardless of whether the locator was used with a WebElement.
   *
   * @param {string} xpath The XPath selector to use.
   * @return {!By} The new locator.
   * @see http://www.w3.org/TR/xpath/
   */
  static xpath(xpath: string): By;

  /** @override */
  toString(): string;
}

/**
 * Short-hand expressions for the primary element locator strategies.
 * For example the following two statements are equivalent:
 *
 *     var e1 = driver.findElement(By.id('foo'));
 *     var e2 = driver.findElement({id: 'foo'});
 *
 * Care should be taken when using JavaScript minifiers (such as the
 * Closure compiler), as locator hashes will always be parsed using
 * the un-obfuscated properties listed.
 *
 * @typedef {(
 *     {className: string}|
 *     {css: string}|
 *     {id: string}|
 *     {js: string}|
 *     {linkText: string}|
 *     {name: string}|
 *     {partialLinkText: string}|
 *     {tagName: string}|
 *     {xpath: string})}
 */
export type ByHash = { className: string } |
  { css: string } |
  { id: string } |
  { js: string } |
  { linkText: string } |
  { name: string } |
  { partialLinkText: string } |
  { tagName: string } |
  { xpath: string };

export type Locator = By | Function | ByHash;

/**
 * Common webdriver capability keys.
 * @enum {string}
 */
export interface ICapability {
  /**
   * Indicates whether a driver should accept all SSL certs by default. This
   * capability only applies when requesting a new session. To query whether
   * a driver can handle insecure SSL certs, see
   * {@link Capability.SECURE_SSL}.
   */
  ACCEPT_SSL_CERTS: string;

  /**
   * The browser name. Common browser names are defined in the
   * {@link Browser} enum.
   */
  BROWSER_NAME: string;

  /**
   * Defines how elements should be scrolled into the viewport for interaction.
   * This capability will be set to zero (0) if elements are aligned with the
   * top of the viewport, or one (1) if aligned with the bottom. The default
   * behavior is to align with the top of the viewport.
   */
  ELEMENT_SCROLL_BEHAVIOR: string;

  /**
   * Whether the driver is capable of handling modal alerts (e.g. alert,
   * confirm, prompt). To define how a driver <i>should</i> handle alerts,
   * use {@link Capability.UNEXPECTED_ALERT_BEHAVIOR}.
   */
  HANDLES_ALERTS: string;

  /**
   * Key for the logging driver logging preferences.
   */
  LOGGING_PREFS: string;

  /**
 * Whether this session generates native events when simulating user input.
   */
  NATIVE_EVENTS: string;

  /**
   * Describes the platform the browser is running on. Will be one of
   * ANDROID, IOS, LINUX, MAC, UNIX, or WINDOWS. When <i>requesting</i> a
   * session, ANY may be used to indicate no platform preference (this is
   * semantically equivalent to omitting the platform capability).
   */
  PLATFORM: string;

  /**
   * Describes the proxy configuration to use for a new WebDriver session.
   */
  PROXY: string;

  /** Whether the driver supports changing the brower's orientation. */
  ROTATABLE: string;

  /**
   * Whether a driver is only capable of handling secure SSL certs. To request
   * that a driver accept insecure SSL certs by default, use
   * {@link Capability.ACCEPT_SSL_CERTS}.
   */
  SECURE_SSL: string;

  /** Whether the driver supports manipulating the app cache. */
  SUPPORTS_APPLICATION_CACHE: string;

  /** Whether the driver supports locating elements with CSS selectors. */
  SUPPORTS_CSS_SELECTORS: string;

  /** Whether the browser supports JavaScript. */
  SUPPORTS_JAVASCRIPT: string;

  /** Whether the driver supports controlling the browser's location info. */
  SUPPORTS_LOCATION_CONTEXT: string;

  /** Whether the driver supports taking screenshots. */
  TAKES_SCREENSHOT: string;

  /**
   * Defines how the driver should handle unexpected alerts. The value should
   * be one of 'accept', 'dismiss', or 'ignore.
   */
  UNEXPECTED_ALERT_BEHAVIOR: string;

  /** Defines the browser version. */
  VERSION: string;
}

export const Capability: ICapability;

export class Capabilities {
  // region Constructors

  /**
   * @param {(Capabilities|Object)=} opt_other Another set of
   *     capabilities to merge into this instance.
   * @constructor
   */
  constructor(opt_other?: Capabilities | Object);

  // endregion

  // region Methods

  /** @return {!Object} The JSON representation of this instance. */
  toJSON(): any;

  /**
   * Merges another set of capabilities into this instance. Any duplicates in
   * the provided set will override those already set on this instance.
   * @param {!(Capabilities|Object)} other The capabilities to
   *     merge into this instance.
   * @return {!Capabilities} A self reference.
   */
  merge(other: Capabilities | Object): Capabilities;

  /**
   * @param {string} key The capability to set.
   * @param {*} value The capability value.  Capability values must be JSON
   *     serializable. Pass {@code null} to unset the capability.
   * @return {!Capabilities} A self reference.
   */
  set(key: string, value: any): Capabilities;

  /**
   * Sets the logging preferences. Preferences may be specified as a
   * {@link logging.Preferences} instance, or a as a map of log-type to
   * log-level.
   * @param {!(logging.Preferences|Object.<string, string>)} prefs The
   *     logging preferences.
   * @return {!Capabilities} A self reference.
   */
  setLoggingPrefs(prefs: logging.Preferences | Object): Capabilities;

  /**
   * Sets the proxy configuration for this instance.
   * @param {ProxyConfig} proxy The desired proxy configuration.
   * @return {!Capabilities} A self reference.
   */
  setProxy(proxy: ProxyConfig): Capabilities;

  /**
   * Sets whether native events should be used.
   * @param {boolean} enabled Whether to enable native events.
   * @return {!Capabilities} A self reference.
   */
  setEnableNativeEvents(enabled: boolean): Capabilities;

  /**
   * Sets how elements should be scrolled into view for interaction.
   * @param {number} behavior The desired scroll behavior: either 0 to align with
   *     the top of the viewport or 1 to align with the bottom.
   * @return {!Capabilities} A self reference.
   */
  setScrollBehavior(behavior: number): Capabilities;

  /**
   * Sets the default action to take with an unexpected alert before returning
   * an error.
   * @param {string} behavior The desired behavior; should be 'accept', 'dismiss',
   *     or 'ignore'. Defaults to 'dismiss'.
   * @return {!Capabilities} A self reference.
   */
  setAlertBehavior(behavior: string): Capabilities;

  /**
   * @param {string} key The capability to return.
   * @return {*} The capability with the given key, or {@code null} if it has
   *     not been set.
   */
  get(key: string): any;

  /**
   * @param {string} key The capability to check.
   * @return {boolean} Whether the specified capability is set.
   */
  has(key: string): boolean;

  // endregion

  // region Static Methods

  /**
   * @return {!Capabilities} A basic set of capabilities for Android.
   */
  static android(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for Chrome.
   */
  static chrome(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for Microsoft Edge.
   */
  static edge(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for Firefox.
   */
  static firefox(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for
   *     Internet Explorer.
   */
  static ie(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for iPad.
   */
  static ipad(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for iPhone.
   */
  static iphone(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for Opera.
   */
  static opera(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for
   *     PhantomJS.
   */
  static phantomjs(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for Safari.
   */
  static safari(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for HTMLUnit.
   */
  static htmlunit(): Capabilities;

  /**
   * @return {!Capabilities} A basic set of capabilities for HTMLUnit
   *                                   with enabled Javascript.
   */
  static htmlunitwithjs(): Capabilities;

  // endregion
}

/**
 * An enumeration of valid command string.
 */
export interface ICommandName {
  GET_SERVER_STATUS: string;

  NEW_SESSION: string;
  GET_SESSIONS: string;
  DESCRIBE_SESSION: string;

  CLOSE: string;
  QUIT: string;

  GET_CURRENT_URL: string;
  GET: string;
  GO_BACK: string;
  GO_FORWARD: string;
  REFRESH: string;

  ADD_COOKIE: string;
  GET_COOKIE: string;
  GET_ALL_COOKIES: string;
  DELETE_COOKIE: string;
  DELETE_ALL_COOKIES: string;

  GET_ACTIVE_ELEMENT: string;
  FIND_ELEMENT: string;
  FIND_ELEMENTS: string;
  FIND_CHILD_ELEMENT: string;
  FIND_CHILD_ELEMENTS: string;

  CLEAR_ELEMENT: string;
  CLICK_ELEMENT: string;
  SEND_KEYS_TO_ELEMENT: string;
  SUBMIT_ELEMENT: string;

  GET_CURRENT_WINDOW_HANDLE: string;
  GET_WINDOW_HANDLES: string;
  GET_WINDOW_POSITION: string;
  SET_WINDOW_POSITION: string;
  GET_WINDOW_SIZE: string;
  SET_WINDOW_SIZE: string;
  MAXIMIZE_WINDOW: string;

  SWITCH_TO_WINDOW: string;
  SWITCH_TO_FRAME: string;
  GET_PAGE_SOURCE: string;
  GET_TITLE: string;

  EXECUTE_SCRIPT: string;
  EXECUTE_ASYNC_SCRIPT: string;

  GET_ELEMENT_TEXT: string;
  GET_ELEMENT_TAG_NAME: string;
  IS_ELEMENT_SELECTED: string;
  IS_ELEMENT_ENABLED: string;
  IS_ELEMENT_DISPLAYED: string;
  GET_ELEMENT_LOCATION: string;
  GET_ELEMENT_LOCATION_IN_VIEW: string;
  GET_ELEMENT_SIZE: string;
  GET_ELEMENT_ATTRIBUTE: string;
  GET_ELEMENT_VALUE_OF_CSS_PROPERTY: string;
  ELEMENT_EQUALS: string;

  SCREENSHOT: string;
  IMPLICITLY_WAIT: string;
  SET_SCRIPT_TIMEOUT: string;
  SET_TIMEOUT: string;

  ACCEPT_ALERT: string;
  DISMISS_ALERT: string;
  GET_ALERT_TEXT: string;
  SET_ALERT_TEXT: string;

  EXECUTE_SQL: string;
  GET_LOCATION: string;
  SET_LOCATION: string;
  GET_APP_CACHE: string;
  GET_APP_CACHE_STATUS: string;
  CLEAR_APP_CACHE: string;
  IS_BROWSER_ONLINE: string;
  SET_BROWSER_ONLINE: string;

  GET_LOCAL_STORAGE_ITEM: string;
  GET_LOCAL_STORAGE_KEYS: string;
  SET_LOCAL_STORAGE_ITEM: string;
  REMOVE_LOCAL_STORAGE_ITEM: string;
  CLEAR_LOCAL_STORAGE: string;
  GET_LOCAL_STORAGE_SIZE: string;

  GET_SESSION_STORAGE_ITEM: string;
  GET_SESSION_STORAGE_KEYS: string;
  SET_SESSION_STORAGE_ITEM: string;
  REMOVE_SESSION_STORAGE_ITEM: string;
  CLEAR_SESSION_STORAGE: string;
  GET_SESSION_STORAGE_SIZE: string;

  SET_SCREEN_ORIENTATION: string;
  GET_SCREEN_ORIENTATION: string;

  // These belong to the Advanced user interactions - an element is
  // optional for these commands.
  CLICK: string;
  DOUBLE_CLICK: string;
  MOUSE_DOWN: string;
  MOUSE_UP: string;
  MOVE_TO: string;
  SEND_KEYS_TO_ACTIVE_ELEMENT: string;

  // These belong to the Advanced Touch API
  TOUCH_SINGLE_TAP: string;
  TOUCH_DOWN: string;
  TOUCH_UP: string;
  TOUCH_MOVE: string;
  TOUCH_SCROLL: string;
  TOUCH_DOUBLE_TAP: string;
  TOUCH_LONG_PRESS: string;
  TOUCH_FLICK: string;

  GET_AVAILABLE_LOG_TYPES: string;
  GET_LOG: string;
  GET_SESSION_LOGS: string;

  UPLOAD_FILE: string;
}

export const CommandName: ICommandName;

/**
 * Describes a command to be executed by the WebDriverJS framework.
 * @param {!CommandName} name The name of this command.
 * @constructor
 */
export class Command {
  // region Constructors

  /**
   * @param {!CommandName} name The name of this command.
   * @constructor
   */
  constructor(name: string);

  // endregion

  // region Methods

  /**
   * @return {!CommandName} This command's name.
   */
  getName(): string;

  /**
   * Sets a parameter to send with this command.
   * @param {string} name The parameter name.
   * @param {*} value The parameter value.
   * @return {!Command} A self reference.
   */
  setParameter(name: string, value: any): Command;

  /**
   * Sets the parameters for this command.
   * @param {!Object.<*>} parameters The command parameters.
   * @return {!Command} A self reference.
   */
  setParameters(parameters: any): Command;

  /**
   * Returns a named command parameter.
   * @param {string} key The parameter key to look up.
   * @return {*} The parameter value, or undefined if it has not been set.
   */
  getParameter(key: string): any;

  /**
   * @return {!Object.<*>} The parameters to send with this command.
   */
  getParameters(): any;

  // endregion
}

/**
 * Handles the execution of WebDriver {@link Command commands}.
 * @interface
 */
export class Executor {
  /**
   * Executes the given {@code command}. If there is an error executing the
   * command, the provided callback will be invoked with the offending error.
   * Otherwise, the callback will be invoked with a null Error and non-null
   * response object.
   *
   * @param {!Command} command The command to execute.
   * @return {!promise.Promise<?>} A promise that will be fulfilled with
   *     the command result.
   */
  execute(command: Command): promise.Promise<any>
}

/**
 * Describes an event listener registered on an {@linkplain EventEmitter}.
 */
export class Listener {
  /**
   * @param {!Function} fn The acutal listener function.
   * @param {(Object|undefined)} scope The object in whose scope to invoke the
   *     listener.
   * @param {boolean} oneshot Whether this listener should only be used once.
   */
  constructor(fn: Function, scope: Object, oneshot: boolean);
}

/**
 * Object that can emit events for others to listen for. This is used instead
 * of Closure's event system because it is much more light weight. The API is
 * based on Node's EventEmitters.
 */
export class EventEmitter {
  // region Constructors

  /**
   * @constructor
   */
  constructor();

  // endregion

  // region Methods

  /**
   * Fires an event and calls all listeners.
   * @param {string} type The type of event to emit.
   * @param {...*} var_args Any arguments to pass to each listener.
   */
  emit(type: string, ...var_args: any[]): void;

  /**
   * Returns a mutable list of listeners for a specific type of event.
   * @param {string} type The type of event to retrieve the listeners for.
   * @return {!Set<!Listener>} The registered listeners for the given event
   *     type.
   */
  listeners(type: string): any;

  /**
   * Registers a listener.
   * @param {string} type The type of event to listen for.
   * @param {!Function} fn The function to invoke when the event is fired.
   * @param {Object=} opt_self The object in whose scope to invoke the listener.
   * @param {boolean=} opt_oneshot Whether the listener should b (e removed after
   *    the first event is fired.
   * @return {!EventEmitter} A self reference.
   * @private
   */
  addListener(type: string, fn: Function, opt_scope?: any, opt_oneshot?: boolean): EventEmitter;

  /**
   * Registers a one-time listener which will be called only the first time an
   * event is emitted, after which it will be removed.
   * @param {string} type The type of event to listen for.
   * @param {!Function} fn The function to invoke when the event is fired.
   * @param {Object=} opt_scope The object in whose scope to invoke the listener.
   * @return {!EventEmitter} A self reference.
   */
  once(type: string, fn: any, opt_scope?: any): EventEmitter;

  /**
   * An alias for {@code #addListener()}.
   * @param {string} type The type of event to listen for.
   * @param {!Function} fn The function to invoke when the event is fired.
   * @param {Object=} opt_scope The object in whose scope to invoke the listener.
   * @return {!EventEmitter} A self reference.
   */
  on(type: string, fn: Function, opt_scope?: any): EventEmitter;

  /**
   * Removes a previously registered event listener.
   * @param {string} type The type of event to unregister.
   * @param {!Function} listenerFn The handler function to remove.
   * @return {!EventEmitter} A self reference.
   */
  removeListener(type: string, listenerFn: Function): EventEmitter;

  /**
   * Removes all listeners for a specific type of event. If no event is
   * specified, all listeners across all types will be removed.
   * @param {string=} opt_type The type of event to remove listeners from.
   * @return {!EventEmitter} A self reference.
   */
  removeAllListeners(opt_type?: string): EventEmitter;

  // endregion
}

/**
 * Interface for navigating back and forth in the browser history.
 */
export class Navigation {
  // region Constructors

  /**
   * Interface for navigating back and forth in the browser history.
   *
   * This class should never be instantiated directly. Insead, obtain an instance
   * with
   *
   *    navigate()
   *
   * @see WebDriver#navigate()
   */
  constructor(driver: WebDriver);

  // endregion

  // region Methods

  /**
   * Schedules a command to navigate to a new URL.
   * @param {string} url The URL to navigate to.
   * @return {!promise.Promise.<void>} A promise that will be resolved
   *     when the URL has been loaded.
   */
  to(url: string): promise.Promise<void>;

  /**
   * Schedules a command to move backwards in the browser history.
   * @return {!promise.Promise.<void>} A promise that will be resolved
   *     when the navigation event has completed.
   */
  back(): promise.Promise<void>;

  /**
   * Schedules a command to move forwards in the browser history.
   * @return {!promise.Promise.<void>} A promise that will be resolved
   *     when the navigation event has completed.
   */
  forward(): promise.Promise<void>;

  /**
   * Schedules a command to refresh the current page.
   * @return {!promise.Promise.<void>} A promise that will be resolved
   *     when the navigation event has completed.
   */
  refresh(): promise.Promise<void>;

  // endregion
}

export interface IWebDriverOptionsCookie {
  /**
   * The name of the cookie.
   */
  name: string;

  /**
   * The cookie value.
   */
  value: string;

  /**
   * The cookie path. Defaults to "/" when adding a cookie.
   */
  path?: string;

  /**
   * The domain the cookie is visible to. Defaults to the current browsing
   * context's document's URL when adding a cookie.
   */
  domain?: string;

  /**
   * Whether the cookie is a secure cookie. Defaults to false when adding a new
   * cookie.
   */
  secure?: boolean;

  /**
   * Whether the cookie is an HTTP only cookie. Defaults to false when adding a
   * new cookie.
   */
  httpOnly?: boolean;

  /**
   * When the cookie expires.
   *
   * When {@linkplain Options#addCookie() adding a cookie}, this may be specified
   * in _seconds_ since Unix epoch (January 1, 1970). The expiry will default to
   * 20 years in the future if omitted.
   *
   * The expiry is always returned in seconds since epoch when
   * {@linkplain Options#getCookies() retrieving cookies} from the browser.
   *
   * @type {(!Date|number|undefined)}
   */
  expiry?: number | Date;
}

export interface IWebDriverCookie extends IWebDriverOptionsCookie {
    /**
     * When the cookie expires.
     *
     * The expiry is always returned in seconds since epoch when
     * {@linkplain Options#getCookies() retrieving cookies} from the browser.
     *
     * @type {(!number|undefined)}
     */
    expiry?: number;
}

/**
 * Provides methods for managing browser and driver state.
 */
export class Options {
  // region Constructors

  /**
   * @param {!WebDriver} driver The parent driver.
   * @constructor
   */
  constructor(driver: WebDriver);

  // endregion

  // region Methods

  /**
   * Schedules a command to add a cookie.
   * @param {IWebDriverOptionsCookie} spec Defines the cookie to add.
   * @return {!promise.Promise<void>} A promise that will be resolved
   *     when the cookie has been added to the page.
   * @throws {error.InvalidArgumentError} if any of the cookie parameters are
   *     invalid.
   * @throws {TypeError} if `spec` is not a cookie object.
   */
  addCookie(spec: IWebDriverOptionsCookie): promise.Promise<void>;

  /**
   * Schedules a command to delete all cookies visible to the current page.
   * @return {!promise.Promise} A promise that will be resolved when all
   *     cookies have been deleted.
   */
  deleteAllCookies(): promise.Promise<void>;

  /**
   * Schedules a command to delete the cookie with the given name. This command is
   * a no-op if there is no cookie with the given name visible to the current
   * page.
   * @param {string} name The name of the cookie to delete.
   * @return {!promise.Promise} A promise that will be resolved when the
   *     cookie has been deleted.
   */
  deleteCookie(name: string): promise.Promise<void>;

  /**
   * Schedules a command to retrieve all cookies visible to the current page.
   * Each cookie will be returned as a JSON object as described by the WebDriver
   * wire protocol.
   * @return {!promise.Promise} A promise that will be resolved with the
   *     cookies visible to the current page.
   * @see http://code.google.com/p/selenium/wiki/JsonWireProtocol#Cookie_JSON_Object
   */
  getCookies(): promise.Promise<IWebDriverOptionsCookie[]>;

  /**
   * Schedules a command to retrieve the cookie with the given name. Returns null
   * if there is no such cookie. The cookie will be returned as a JSON object as
   * described by the WebDriver wire protocol.
   * @param {string} name The name of the cookie to retrieve.
   * @return {!promise.Promise} A promise that will be resolved with the
   *     named cookie, or {@code null} if there is no such cookie.
   * @see http://code.google.com/p/selenium/wiki/JsonWireProtocol#Cookie_JSON_Object
   */
  getCookie(name: string): promise.Promise<IWebDriverOptionsCookie>;

  /**
   * @return {!Logs} The interface for managing driver
   *     logs.
   */
  logs(): Logs;

  /**
   * @return {!Timeouts} The interface for managing driver
   *     timeouts.
   */
  timeouts(): Timeouts;

  /**
   * @return {!Window} The interface for managing the
   *     current window.
   */
  window(): Window;

  // endregion
}

/**
 * An interface for managing timeout behavior for WebDriver instances.
 */
export class Timeouts {
  // region Constructors

  /**
   * @param {!WebDriver} driver The parent driver.
   * @constructor
   */
  constructor(driver: WebDriver);

  // endregion

  // region Methods

  /**
   * Specifies the amount of time the driver should wait when searching for an
   * element if it is not immediately present.
   * <p/>
   * When searching for a single element, the driver should poll the page
   * until the element has been found, or this timeout expires before failing
   * with a {@code bot.ErrorCode.NO_SUCH_ELEMENT} error. When searching
   * for multiple elements, the driver should poll the page until at least one
   * element has been found or this timeout has expired.
   * <p/>
   * Setting the wait timeout to 0 (its default value), disables implicit
   * waiting.
   * <p/>
   * Increasing the implicit wait timeout should be used judiciously as it
   * will have an adverse effect on test run time, especially when used with
   * slower location strategies like XPath.
   *
   * @param {number} ms The amount of time to wait, in milliseconds.
   * @return {!promise.Promise} A promise that will be resolved when the
   *     implicit wait timeout has been set.
   */
  implicitlyWait(ms: number): promise.Promise<void>;

  /**
   * Sets the amount of time to wait, in milliseconds, for an asynchronous script
   * to finish execution before returning an error. If the timeout is less than or
   * equal to 0, the script will be allowed to run indefinitely.
   *
   * @param {number} ms The amount of time to wait, in milliseconds.
   * @return {!promise.Promise} A promise that will be resolved when the
   *     script timeout has been set.
   */
  setScriptTimeout(ms: number): promise.Promise<void>;

  /**
   * Sets the amount of time to wait for a page load to complete before returning
   * an error.  If the timeout is negative, page loads may be indefinite.
   * @param {number} ms The amount of time to wait, in milliseconds.
   * @return {!promise.Promise} A promise that will be resolved when
   *     the timeout has been set.
   */
  pageLoadTimeout(ms: number): promise.Promise<void>;

  // endregion
}

/**
 * An interface for managing the current window.
 */
export class Window {
  // region Constructors

  /**
   * @param {!WebDriver} driver The parent driver.
   * @constructor
   */
  constructor(driver: WebDriver);

  // endregion

  // region Methods

  /**
   * Retrieves the window's current position, relative to the top left corner of
   * the screen.
   * @return {!promise.Promise} A promise that will be resolved with the
   *     window's position in the form of a {x:number, y:number} object literal.
   */
  getPosition(): promise.Promise<ILocation>;

  /**
   * Repositions the current window.
   * @param {number} x The desired horizontal position, relative to the left side
   *     of the screen.
   * @param {number} y The desired vertical position, relative to the top of the
   *     of the screen.
   * @return {!promise.Promise} A promise that will be resolved when the
   *     command has completed.
   */
  setPosition(x: number, y: number): promise.Promise<void>;

  /**
   * Retrieves the window's current size.
   * @return {!promise.Promise} A promise that will be resolved with the
   *     window's size in the form of a {width:number, height:number} object
   *     literal.
   */
  getSize(): promise.Promise<ISize>;

  /**
   * Resizes the current window.
   * @param {number} width The desired window width.
   * @param {number} height The desired window height.
   * @return {!promise.Promise} A promise that will be resolved when the
   *     command has completed.
   */
  setSize(width: number, height: number): promise.Promise<void>;

  /**
   * Maximizes the current window.
   * @return {!promise.Promise} A promise that will be resolved when the
   *     command has completed.
   */
  maximize(): promise.Promise<void>;

  // endregion
}

/**
 * Interface for managing WebDriver log records.
 */
export class Logs {
  // region Constructors

  /**
   * @param {!WebDriver} driver The parent driver.
   * @constructor
   */
  constructor(driver: WebDriver);

  // endregion

  // region

  /**
   * Fetches available log entries for the given type.
   *
   * <p/>Note that log buffers are reset after each call, meaning that
   * available log entries correspond to those entries not yet returned for a
   * given log type. In practice, this means that this call will return the
   * available log entries since the last call, or from the start of the
   * session.
   *
   * @param {!logging.Type} type The desired log type.
   * @return {!promise.Promise.<!Array.<!logging.Entry>>} A
   *   promise that will resolve to a list of log entries for the specified
   *   type.
   */
  get(type: string): promise.Promise<logging.Entry[]>;

  /**
   * Retrieves the log types available to this driver.
   * @return {!promise.Promise.<!Array.<!logging.Type>>} A
   *     promise that will resolve to a list of available log types.
   */
  getAvailableLogTypes(): promise.Promise<string[]>;

  // endregion
}

/**
 * An interface for changing the focus of the driver to another frame or window.
 */
export class TargetLocator {
  // region Constructors

  /**
   * @param {!WebDriver} driver The parent driver.
   * @constructor
   */
  constructor(driver: WebDriver);

  // endregion

  // region Methods

  /**
   * Schedules a command retrieve the {@code document.activeElement} element on
   * the current document, or {@code document.body} if activeElement is not
   * available.
   * @return {!WebElement} The active element.
   */
  activeElement(): WebElementPromise;

  /**
   * Schedules a command to switch focus of all future commands to the first frame
   * on the page.
   * @return {!promise.Promise} A promise that will be resolved when the
   *     driver has changed focus to the default content.
   */
  defaultContent(): promise.Promise<void>;

  /**
   * Schedules a command to switch the focus of all future commands to another
   * frame on the page. The target frame may be specified as one of the
   * following:
   *
   * - A number that specifies a (zero-based) index into [window.frames](
   *   https://developer.mozilla.org/en-US/docs/Web/API/Window.frames).
   * - A {@link WebElement} reference, which correspond to a `frame` or `iframe`
   *   DOM element.
   * - The `null` value, to select the topmost frame on the page. Passing `null`
   *   is the same as calling {@link #defaultContent defaultContent()}.
   *
   * If the specified frame can not be found, the returned promise will be
   * rejected with a {@linkplain error.NoSuchFrameError}.
   *
   * @param {(number|WebElement|null)} id The frame locator.
   * @return {!promise.Promise<void>} A promise that will be resolved
   *     when the driver has changed focus to the specified frame.
   */
  frame(nameOrIndex: number | WebElement | null): promise.Promise<void>;

  /**
   * Schedules a command to switch the focus of all future commands to another
   * window. Windows may be specified by their {@code window.name} attribute or
   * by its handle (as returned by {@link WebDriver#getWindowHandles}).
   *
   * If the specified window cannot be found, the returned promise will be
   * rejected with a {@linkplain error.NoSuchWindowError}.
   *
   * @param {string} nameOrHandle The name or window handle of the window to
   *     switch focus to.
   * @return {!promise.Promise<void>} A promise that will be resolved
   *     when the driver has changed focus to the specified window.
   */
  window(nameOrHandle: string): promise.Promise<void>;

  /**
   * Schedules a command to change focus to the active modal dialog, such as
   * those opened by `window.alert()`, `window.confirm()`, and
   * `window.prompt()`. The returned promise will be rejected with a
   * {@linkplain error.NoSuchAlertError} if there are no open alerts.
   *
   * @return {!AlertPromise} The open alert.
   */
  alert(): AlertPromise;

  // endregion
}

/**
 * Used with {@link WebElement#sendKeys WebElement#sendKeys} on file
 * input elements ({@code <input type='file'>}) to detect when the entered key
 * sequence defines the path to a file.
 *
 * By default, {@linkplain WebElement WebElement's} will enter all
 * key sequences exactly as entered. You may set a
 * {@linkplain WebDriver#setFileDetector file detector} on the parent
 * WebDriver instance to define custom behavior for handling file elements. Of
 * particular note is the {@link selenium-webdriver/remote.FileDetector}, which
 * should be used when running against a remote
 * [Selenium Server](http://docs.seleniumhq.org/download/).
 */
export class FileDetector {
  /** @constructor */
  constructor();

  /**
   * Handles the file specified by the given path, preparing it for use with
   * the current browser. If the path does not refer to a valid file, it will
   * be returned unchanged, otherwisee a path suitable for use with the current
   * browser will be returned.
   *
   * This default implementation is a no-op. Subtypes may override this
   * function for custom tailored file handling.
   *
   * @param {!WebDriver} driver The driver for the current browser.
   * @param {string} path The path to process.
   * @return {!promise.Promise<string>} A promise for the processed
   *     file path.
   * @package
   */
  handleFile(driver: WebDriver, path: string): promise.Promise<string>;
}

export type CreateSessionCapabilities = Capabilities | {
  desired?: Capabilities,
  required?: Capabilities
};

/**
 * Creates a new WebDriver client, which provides control over a browser.
 *
 * Every WebDriver command returns a {@code promise.Promise} that
 * represents the result of that command. Callbacks may be registered on this
 * object to manipulate the command result or catch an expected error. Any
 * commands scheduled with a callback are considered sub-commands and will
 * execute before the next command in the current frame. For example:
 *
 *   var message = [];
 *   driver.call(message.push, message, 'a').then(function() {
 *     driver.call(message.push, message, 'b');
 *   });
 *   driver.call(message.push, message, 'c');
 *   driver.call(function() {
 *     alert('message is abc? ' + (message.join('') == 'abc'));
 *   });
 *
 */
export class WebDriver {
  // region Constructors

  /**
   * @param {!(Session|promise.Promise<!Session>)} session Either a
   *     known session or a promise that will be resolved to a session.
   * @param {!command.Executor} executor The executor to use when sending
   *     commands to the browser.
   * @param {promise.ControlFlow=} opt_flow The flow to
   *     schedule commands through. Defaults to the active flow object.
   */
  constructor(session: Session | promise.Promise<Session>, executor: Executor, opt_flow?: promise.ControlFlow);

  // endregion

  // region StaticMethods

  /**
   * Creates a new WebDriver client for an existing session.
   * @param {!command.Executor} executor Command executor to use when querying
   *     for session details.
   * @param {string} sessionId ID of the session to attach to.
   * @param {promise.ControlFlow=} opt_flow The control flow all
   *     driver commands should execute under. Defaults to the
   *     {@link promise.controlFlow() currently active}  control flow.
   * @return {!WebDriver} A new client for the specified session.
   */
  static attachToSession(executor: Executor, sessionId: string, opt_flow?: promise.ControlFlow): WebDriver;

  /**
   * Creates a new WebDriver session.
   *
   * By default, the requested session `capabilities` are merely "desired" and
   * the remote end will still create a new session even if it cannot satisfy
   * all of the requested capabilities. You can query which capabilities a
   * session actually has using the
   * {@linkplain #getCapabilities() getCapabilities()} method on the returned
   * WebDriver instance.
   *
   * To define _required capabilities_, provide the `capabilities` as an object
   * literal with `required` and `desired` keys. The `desired` key may be
   * omitted if all capabilities are required, and vice versa. If the server
   * cannot create a session with all of the required capabilities, it will
   * return an {@linkplain error.SessionNotCreatedError}.
   *
   *     let required = new Capabilities().set('browserName', 'firefox');
   *     let desired = new Capabilities().set('version', '45');
   *     let driver = WebDriver.createSession(executor, {required, desired});
   *
   * This function will always return a WebDriver instance. If there is an error
   * creating the session, such as the aforementioned SessionNotCreatedError,
   * the driver will have a rejected {@linkplain #getSession session} promise.
   * It is recommended that this promise is left _unhandled_ so it will
   * propagate through the {@linkplain promise.ControlFlow control flow} and
   * cause subsequent commands to fail.
   *
   *     let required = Capabilities.firefox();
   *     let driver = WebDriver.createSession(executor, {required});
   *
   *     // If the createSession operation failed, then this command will also
   *     // also fail, propagating the creation failure.
   *     driver.get('http://www.google.com').catch(e => console.log(e));
   *
   * @param {!command.Executor} executor The executor to create the new session
   *     with.
   * @param {(!Capabilities|
   *          {desired: (Capabilities|undefined),
   *           required: (Capabilities|undefined)})} capabilities The desired
   *     capabilities for the new session.
   * @param {promise.ControlFlow=} opt_flow The control flow all driver
   *     commands should execute under, including the initial session creation.
   *     Defaults to the {@link promise.controlFlow() currently active}
   *     control flow.
   * @param {(function(new: WebDriver,
   *                   !IThenable<!Session>,
   *                   !command.Executor,
   *                   promise.ControlFlow=))=} opt_ctor
   *    A reference to the constructor of the specific type of WebDriver client
   *    to instantiate. Will create a vanilla {@linkplain WebDriver} instance
   *    if a constructor is not provided.
   * @param {(function(this: void): ?)=} opt_onQuit A callback to invoke when
   *    the newly created session is terminated. This should be used to clean
   *    up any resources associated with the session.
   * @return {!WebDriver} The driver for the newly created session.
   */
  // This method's arguments are untyped so that its overloads can have correct types.
  // Typescript doesn't allow static methods to be overridden with incompatible signatures.
  static createSession(...var_args: any[]): WebDriver;

  // endregion

  // region Methods

  /**
   * @return {!promise.ControlFlow} The control flow used by this
   *     instance.
   */
  controlFlow(): promise.ControlFlow;

  /**
   * Schedules a {@link command.Command} to be executed by this driver's
   * {@link command.Executor}.
   *
   * @param {!command.Command} command The command to schedule.
   * @param {string} description A description of the command for debugging.
   * @return {!promise.Promise<T>} A promise that will be resolved
   *     with the command result.
   * @template T
   */
  schedule<T>(command: Command, description: string): promise.Promise<T>;

  /**
   * Sets the {@linkplain input.FileDetector file detector} that should be
   * used with this instance.
   * @param {input.FileDetector} detector The detector to use or {@code null}.
   */
  setFileDetector(detector: FileDetector): void;

  /**
   * @return {!promise.Promise.<!Session>} A promise for this
   *     client's session.
   */
  getSession(): promise.Promise<Session>;

  /**
   * @return {!promise.Promise.<!Capabilities>} A promise
   *     that will resolve with the this instance's capabilities.
   */
  getCapabilities(): promise.Promise<Capabilities>;

  /**
   * Schedules a command to quit the current session. After calling quit, this
   * instance will be invalidated and may no longer be used to issue commands
   * against the browser.
   * @return {!promise.Promise.<void>} A promise that will be resolved
   *     when the command has completed.
   */
  quit(): promise.Promise<void>;

  /**
   * Creates a new action sequence using this driver. The sequence will not be
   * scheduled for execution until {@link actions.ActionSequence#perform} is
   * called. Example:
   *
   *     driver.actions().
   *         mouseDown(element1).
   *         mouseMove(element2).
   *         mouseUp().
   *         perform();
   *
   * @return {!actions.ActionSequence} A new action sequence for this instance.
   */
  actions(): ActionSequence;

  /**
   * Creates a new touch sequence using this driver. The sequence will not be
   * scheduled for execution until {@link actions.TouchSequence#perform} is
   * called. Example:
   *
   *     driver.touchActions().
   *         tap(element1).
   *         doubleTap(element2).
   *         perform();
   *
   * @return {!actions.TouchSequence} A new touch sequence for this instance.
   */
  touchActions(): TouchSequence;

  /**
   * Schedules a command to execute JavaScript in the context of the currently
   * selected frame or window. The script fragment will be executed as the body
   * of an anonymous function. If the script is provided as a function object,
   * that function will be converted to a string for injection into the target
   * window.
   *
   * Any arguments provided in addition to the script will be included as script
   * arguments and may be referenced using the {@code arguments} object.
   * Arguments may be a boolean, number, string, or {@code WebElement}.
   * Arrays and objects may also be used as script arguments as long as each item
   * adheres to the types previously mentioned.
   *
   * The script may refer to any variables accessible from the current window.
   * Furthermore, the script will execute in the window's context, thus
   * {@code document} may be used to refer to the current document. Any local
   * variables will not be available once the script has finished executing,
   * though global variables will persist.
   *
   * If the script has a return value (i.e. if the script contains a return
   * statement), then the following steps will be taken for resolving this
   * functions return value:
   *
   * - For a HTML element, the value will resolve to a
   *     {@link WebElement}
   * - Null and undefined return values will resolve to null</li>
   * - Booleans, numbers, and strings will resolve as is</li>
   * - Functions will resolve to their string representation</li>
   * - For arrays and objects, each member item will be converted according to
   *     the rules above
   *
   * @param {!(string|Function)} script The script to execute.
   * @param {...*} var_args The arguments to pass to the script.
   * @return {!promise.Promise.<T>} A promise that will resolve to the
   *    scripts return value.
   * @template T
   */
  executeScript<T>(script: string | Function, ...var_args: any[]): promise.Promise<T>;

  /**
   * Schedules a command to execute asynchronous JavaScript in the context of the
   * currently selected frame or window. The script fragment will be executed as
   * the body of an anonymous function. If the script is provided as a function
   * object, that function will be converted to a string for injection into the
   * target window.
   *
   * Any arguments provided in addition to the script will be included as script
   * arguments and may be referenced using the {@code arguments} object.
   * Arguments may be a boolean, number, string, or {@code WebElement}.
   * Arrays and objects may also be used as script arguments as long as each item
   * adheres to the types previously mentioned.
   *
   * Unlike executing synchronous JavaScript with {@link #executeScript},
   * scripts executed with this function must explicitly signal they are finished
   * by invoking the provided callback. This callback will always be injected
   * into the executed function as the last argument, and thus may be referenced
   * with {@code arguments[arguments.length - 1]}. The following steps will be
   * taken for resolving this functions return value against the first argument
   * to the script's callback function:
   *
   * - For a HTML element, the value will resolve to a
   *     {@link WebElement}
   * - Null and undefined return values will resolve to null
   * - Booleans, numbers, and strings will resolve as is
   * - Functions will resolve to their string representation
   * - For arrays and objects, each member item will be converted according to
   *     the rules above
   *
   * __Example #1:__ Performing a sleep that is synchronized with the currently
   * selected window:
   *
   *     var start = new Date().getTime();
   *     driver.executeAsyncScript(
   *         'window.setTimeout(arguments[arguments.length - 1], 500);').
   *         then(function() {
   *           console.log(
   *               'Elapsed time: ' + (new Date().getTime() - start) + ' ms');
   *         });
   *
   * __Example #2:__ Synchronizing a test with an AJAX application:
   *
   *     var button = driver.findElement(By.id('compose-button'));
   *     button.click();
   *     driver.executeAsyncScript(
   *         'var callback = arguments[arguments.length - 1];' +
   *         'mailClient.getComposeWindowWidget().onload(callback);');
   *     driver.switchTo().frame('composeWidget');
   *     driver.findElement(By.id('to')).sendKeys('dog@example.com');
   *
   * __Example #3:__ Injecting a XMLHttpRequest and waiting for the result. In
   * this example, the inject script is specified with a function literal. When
   * using this format, the function is converted to a string for injection, so it
   * should not reference any symbols not defined in the scope of the page under
   * test.
   *
   *     driver.executeAsyncScript(function() {
   *       var callback = arguments[arguments.length - 1];
   *       var xhr = new XMLHttpRequest();
   *       xhr.open('GET', '/resource/data.json', true);
   *       xhr.onreadystatechange = function() {
   *         if (xhr.readyState == 4) {
   *           callback(xhr.responseText);
   *         }
   *       }
   *       xhr.send('');
   *     }).then(function(str) {
   *       console.log(JSON.parse(str)['food']);
   *     });
   *
   * @param {!(string|Function)} script The script to execute.
   * @param {...*} var_args The arguments to pass to the script.
   * @return {!promise.Promise.<T>} A promise that will resolve to the
   *    scripts return value.
   * @template T
   */
  executeAsyncScript<T>(script: string | Function, ...var_args: any[]): promise.Promise<T>;

  /**
   * Schedules a command to execute a custom function.
   * @param {function(...): (T|promise.Promise.<T>)} fn The function to
   *     execute.
   * @param {Object=} opt_scope The object in whose scope to execute the function.
   * @param {...*} var_args Any arguments to pass to the function.
   * @return {!promise.Promise.<T>} A promise that will be resolved'
   *     with the function's result.
   * @template T
   */
  call<T>(fn: (...var_args: any[]) => (T | promise.Promise<T>), opt_scope?: any, ...var_args: any[]): promise.Promise<T>;

  /**
   * Schedules a command to wait for a condition to hold. The condition may be
   * specified by a {@link Condition}, as a custom function, or
   * as a {@link promise.Promise}.
   *
   * For a {@link Condition} or function, the wait will repeatedly
   * evaluate the condition until it returns a truthy value. If any errors occur
   * while evaluating the condition, they will be allowed to propagate. In the
   * event a condition returns a {@link promise.Promise promise}, the
   * polling loop will wait for it to be resolved and use the resolved value for
   * whether the condition has been satisified. Note the resolution time for
   * a promise is factored into whether a wait has timed out.
   *
   * Note, if the provided condition is a {@link WebElementCondition}, then
   * the wait will return a {@link WebElementPromise} that will resolve to the
   * element that satisified the condition.
   *
   * *Example:* waiting up to 10 seconds for an element to be present and visible
   * on the page.
   *
   *     var button = driver.wait(until.elementLocated(By.id('foo'), 10000);
   *     button.click();
   *
   * This function may also be used to block the command flow on the resolution
   * of a {@link promise.Promise promise}. When given a promise, the
   * command will simply wait for its resolution before completing. A timeout may
   * be provided to fail the command if the promise does not resolve before the
   * timeout expires.
   *
   * *Example:* Suppose you have a function, `startTestServer`, that returns a
   * promise for when a server is ready for requests. You can block a `WebDriver`
   * client on this promise with:
   *
   *     var started = startTestServer();
   *     driver.wait(started, 5 * 1000, 'Server should start within 5 seconds');
   *     driver.get(getServerUrl());
   *
   * @param {!WebElementCondition} condition The condition to
   *     wait on, defined as a promise, condition object, or  a function to
   *     evaluate as a condition.
   * @param {number=} opt_timeout How long to wait for the condition to be true.
   * @param {string=} opt_message An optional message to use if the wait times
   *     out.
   * @return {!WebElementPromise} A promise that will be fulfilled
   *     with the first truthy value returned by the condition function, or
   *     rejected if the condition times out.
   * @template T
   */
  wait(condition: WebElementCondition, opt_timeout?: number, opt_message?: string): WebElementPromise;

  /**
   * Schedules a command to wait for a condition to hold. The condition may be
   * specified by a {@link webdriver.Condition}, as a custom function, or
   * as a {@link webdriver.promise.Promise}.
   *
   * For a {@link webdriver.Condition} or function, the wait will repeatedly
   * evaluate the condition until it returns a truthy value. If any errors occur
   * while evaluating the condition, they will be allowed to propagate. In the
   * event a condition returns a {@link webdriver.promise.Promise promise}, the
   * polling loop will wait for it to be resolved and use the resolved value for
   * whether the condition has been satisified. Note the resolution time for
   * a promise is factored into whether a wait has timed out.
   *
   * Note, if the provided condition is a {@link WebElementCondition}, then
   * the wait will return a {@link WebElementPromise} that will resolve to the
   * element that satisified the condition.
   *
   * *Example:* waiting up to 10 seconds for an element to be present and visible
   * on the page.
   *
   *     var button = driver.wait(until.elementLocated(By.id('foo'), 10000);
   *     button.click();
   *
   * This function may also be used to block the command flow on the resolution
   * of a {@link webdriver.promise.Promise promise}. When given a promise, the
   * command will simply wait for its resolution before completing. A timeout may
   * be provided to fail the command if the promise does not resolve before the
   * timeout expires.
   *
   * *Example:* Suppose you have a function, `startTestServer`, that returns a
   * promise for when a server is ready for requests. You can block a `WebDriver`
   * client on this promise with:
   *
   *     var started = startTestServer();
   *     driver.wait(started, 5 * 1000, 'Server should start within 5 seconds');
   *     driver.get(getServerUrl());
   *
   * @param {!(promise.Promise<T>|
   *           Condition<T>|
   *           function(!WebDriver): T)} condition The condition to
   *     wait on, defined as a promise, condition object, or  a function to
   *     evaluate as a condition.
   * @param {number=} opt_timeout How long to wait for the condition to be true.
   * @param {string=} opt_message An optional message to use if the wait times
   *     out.
   * @return {!promise.Promise<T>} A promise that will be fulfilled
   *     with the first truthy value returned by the condition function, or
   *     rejected if the condition times out.
   * @template T
   */
  wait<T>(condition: PromiseLike<T> | Condition<T> | ((driver: WebDriver) => T | PromiseLike<T>) | Function, opt_timeout?: number, opt_message?: string): promise.Promise<T>;

  /**
   * Schedules a command to make the driver sleep for the given amount of time.
   * @param {number} ms The amount of time, in milliseconds, to sleep.
   * @return {!promise.Promise.<void>} A promise that will be resolved
   *     when the sleep has finished.
   */
  sleep(ms: number): promise.Promise<void>;

  /**
   * Schedules a command to retrieve they current window handle.
   * @return {!promise.Promise.<string>} A promise that will be
   *     resolved with the current window handle.
   */
  getWindowHandle(): promise.Promise<string>;

  /**
   * Schedules a command to retrieve the current list of available window handles.
   * @return {!promise.Promise.<!Array.<string>>} A promise that will
   *     be resolved with an array of window handles.
   */
  getAllWindowHandles(): promise.Promise<string[]>;

  /**
   * Schedules a command to retrieve the current page's source. The page source
   * returned is a representation of the underlying DOM: do not expect it to be
   * formatted or escaped in the same way as the response sent from the web
   * server.
   * @return {!promise.Promise.<string>} A promise that will be
   *     resolved with the current page source.
   */
  getPageSource(): promise.Promise<string>;

  /**
   * Schedules a command to close the current window.
   * @return {!promise.Promise.<void>} A promise that will be resolved
   *     when this command has completed.
   */
  close(): promise.Promise<void>;

  /**
   * Schedules a command to navigate to the given URL.
   * @param {string} url The fully qualified URL to open.
   * @return {!promise.Promise.<void>} A promise that will be resolved
   *     when the document has finished loading.
   */
  get(url: string): promise.Promise<void>;

  /**
   * Schedules a command to retrieve the URL of the current page.
   * @return {!promise.Promise.<string>} A promise that will be
   *     resolved with the current URL.
   */
  getCurrentUrl(): promise.Promise<string>;

  /**
   * Schedules a command to retrieve the current page's title.
   * @return {!promise.Promise.<string>} A promise that will be
   *     resolved with the current page's title.
   */
  getTitle(): promise.Promise<string>;

  /**
   * Schedule a command to find an element on the page. If the element cannot be
   * found, a {@link bot.ErrorCode.NO_SUCH_ELEMENT} result will be returned
   * by the driver. Unlike other commands, this error cannot be suppressed. In
   * other words, scheduling a command to find an element doubles as an assert
   * that the element is present on the page. To test whether an element is
   * present on the page, use {@link #findElements}.
   *
   * The search criteria for an element may be defined using one of the
   * factories in the {@link By} namespace, or as a short-hand
   * {@link By.Hash} object. For example, the following two statements
   * are equivalent:
   *
   *     var e1 = driver.findElement(By.id('foo'));
   *     var e2 = driver.findElement({id:'foo'});
   *
   * You may also provide a custom locator function, which takes as input this
   * instance and returns a {@link WebElement}, or a promise that will resolve
   * to a WebElement. If the returned promise resolves to an array of
   * WebElements, WebDriver will use the first element. For example, to find the
   * first visible link on a page, you could write:
   *
   *     var link = driver.findElement(firstVisibleLink);
   *
   *     function firstVisibleLink(driver) {
   *       var links = driver.findElements(By.tagName('a'));
   *       return promise.filter(links, function(link) {
   *         return link.isDisplayed();
   *       });
   *     }
   *
   * @param {!(by.By|Function)} locator The locator to use.
   * @return {!WebElementPromise} A WebElement that can be used to issue
   *     commands against the located element. If the element is not found, the
   *     element will be invalidated and all scheduled commands aborted.
   */
  findElement(locator: Locator): WebElementPromise;

  /**
   * Schedule a command to search for multiple elements on the page.
   *
   * @param {!(by.By|Function)} locator The locator to use.
   * @return {!promise.Promise.<!Array.<!WebElement>>} A
   *     promise that will resolve to an array of WebElements.
   */
  findElements(locator: Locator): promise.Promise<WebElement[]>;

  /**
   * Schedule a command to take a screenshot. The driver makes a best effort to
   * return a screenshot of the following, in order of preference:
   *
   * 1. Entire page
   * 2. Current window
   * 3. Visible portion of the current frame
   * 4. The entire display containing the browser
   *
   * @return {!promise.Promise<string>} A promise that will be
   *     resolved to the screenshot as a base-64 encoded PNG.
   */
  takeScreenshot(): promise.Promise<string>;

  /**
   * @return {!Options} The options interface for this
   *     instance.
   */
  manage(): Options;

  /**
   * @return {!Navigation} The navigation interface for this
   *     instance.
   */
  navigate(): Navigation;

  /**
   * @return {!TargetLocator} The target locator interface for
   *     this instance.
   */
  switchTo(): TargetLocator;

  // endregion
}

/**
 * A thenable wrapper around a {@linkplain webdriver.IWebDriver IWebDriver}
 * instance that allows commands to be issued directly instead of having to
 * repeatedly call `then`:
 *
 *     let driver = new Builder().build();
 *     driver.then(d => d.get(url));  // You can do this...
 *     driver.get(url);               // ...or this
 *
 * If the driver instance fails to resolve (e.g. the session cannot be created),
 * every issued command will fail.
 *
 * @extends {webdriver.IWebDriver}
 * @extends {promise.IThenable<!webdriver.IWebDriver>}
 * @interface
 */
export interface ThenableWebDriver extends WebDriver, promise.IThenable<WebDriver> { }

export interface IWebElementId {
  [ELEMENT: string]: string;
}

/**
 * Represents a DOM element. WebElements can be found by searching from the
 * document root using a {@code WebDriver} instance, or by searching
 * under another {@code WebElement}:
 * <pre><code>
 *   driver.get('http://www.google.com');
 *   var searchForm = driver.findElement(By.tagName('form'));
 *   var searchBox = searchForm.findElement(By.name('q'));
 *   searchBox.sendKeys('webdriver');
 * </code></pre>
 *
 * The WebElement is implemented as a promise for compatibility with the promise
 * API. It will always resolve itself when its internal state has been fully
 * resolved and commands may be issued against the element. This can be used to
 * catch errors when an element cannot be located on the page:
 * <pre><code>
 *   driver.findElement(By.id('not-there')).then(function(element) {
 *     alert('Found an element that was not expected to be there!');
 *   }, function(error) {
 *     alert('The element was not found, as expected');
 *   });
 * </code></pre>
 */
export interface IWebElement {
  // region Methods

  /**
   * Schedules a command to click on this element.
   * @return {!promise.Promise} A promise that will be resolved when
   *     the click command has completed.
   */
  click(): promise.Promise<void>;

  /**
   * Schedules a command to type a sequence on the DOM element represented by
   * this instance.
   *
   * Modifier keys (SHIFT, CONTROL, ALT, META) are stateful; once a modifier is
   * processed in the key sequence, that key state is toggled until one of the
   * following occurs:
   *
   * - The modifier key is encountered again in the sequence. At this point the
   *   state of the key is toggled (along with the appropriate keyup/down
   *   events).
   * - The {@link input.Key.NULL} key is encountered in the sequence. When
   *   this key is encountered, all modifier keys current in the down state are
   *   released (with accompanying keyup events). The NULL key can be used to
   *   simulate common keyboard shortcuts:
   *
   *         element.sendKeys('text was',
   *                          Key.CONTROL, 'a', Key.NULL,
   *                          'now text is');
   *         // Alternatively:
   *         element.sendKeys('text was',
   *                          Key.chord(Key.CONTROL, 'a'),
   *                          'now text is');
   *
   * - The end of the key sequence is encountered. When there are no more keys
   *   to type, all depressed modifier keys are released (with accompanying
   *   keyup events).
   *
   * If this element is a file input ({@code <input type='file'>}), the
   * specified key sequence should specify the path to the file to attach to
   * the element. This is analogous to the user clicking 'Browse...' and entering
   * the path into the file select dialog.
   *
   *     var form = driver.findElement(By.css('form'));
   *     var element = form.findElement(By.css('input[type=file]'));
   *     element.sendKeys('/path/to/file.txt');
   *     form.submit();
   *
   * For uploads to function correctly, the entered path must reference a file
   * on the _browser's_ machine, not the local machine running this script. When
   * running against a remote Selenium server, a {@link input.FileDetector}
   * may be used to transparently copy files to the remote machine before
   * attempting to upload them in the browser.
   *
   * __Note:__ On browsers where native keyboard events are not supported
   * (e.g. Firefox on OS X), key events will be synthesized. Special
   * punctuation keys will be synthesized according to a standard QWERTY en-us
   * keyboard layout.
   *
   * @param {...(number|string|!IThenable<(number|string)>)} var_args The
   *     sequence of keys to type. Number keys may be referenced numerically or
   *     by string (1 or '1'). All arguments will be joined into a single
   *     sequence.
   * @return {!promise.Promise} A promise that will be resolved when all
   *     keys have been typed.
   */
  sendKeys(...var_args: Array<number|string|promise.Promise<string|number>>): promise.Promise<void>;

  /**
   * Schedules a command to query for the tag/node name of this element.
   * @return {!promise.Promise} A promise that will be resolved with the
   *     element's tag name.
   */
  getTagName(): promise.Promise<string>;

  /**
   * Schedules a command to query for the computed style of the element
   * represented by this instance. If the element inherits the named style from
   * its parent, the parent will be queried for its value.  Where possible, color
   * values will be converted to their hex representation (e.g. #00ff00 instead of
   * rgb(0, 255, 0)).
   * <p/>
   * <em>Warning:</em> the value returned will be as the browser interprets it, so
   * it may be tricky to form a proper assertion.
   *
   * @param {string} cssStyleProperty The name of the CSS style property to look
   *     up.
   * @return {!promise.Promise} A promise that will be resolved with the
   *     requested CSS value.
   */
  getCssValue(cssStyleProperty: string): promise.Promise<string>;

  /**
   * Schedules a command to query for the value of the given attribute of the
   * element. Will return the current value even if it has been modified after the
   * page has been loaded. More exactly, this method will return the value of the
   * given attribute, unless that attribute is not present, in which case the
   * value of the property with the same name is returned. If neither value is
   * set, null is returned. The 'style' attribute is converted as best can be to a
   * text representation with a trailing semi-colon. The following are deemed to
   * be 'boolean' attributes and will be returned as thus:
   *
   * <p>async, autofocus, autoplay, checked, compact, complete, controls, declare,
   * defaultchecked, defaultselected, defer, disabled, draggable, ended,
   * formnovalidate, hidden, indeterminate, iscontenteditable, ismap, itemscope,
   * loop, multiple, muted, nohref, noresize, noshade, novalidate, nowrap, open,
   * paused, pubdate, readonly, required, reversed, scoped, seamless, seeking,
   * selected, spellcheck, truespeed, willvalidate
   *
   * <p>Finally, the following commonly mis-capitalized attribute/property names
   * are evaluated as expected:
   * <ul>
   *   <li>'class'
   *   <li>'readonly'
   * </ul>
   * @param {string} attributeName The name of the attribute to query.
   * @return {!promise.Promise} A promise that will be resolved with the
   *     attribute's value.
   */
  getAttribute(attributeName: string): promise.Promise<string>;

  /**
   * Get the visible (i.e. not hidden by CSS) innerText of this element, including
   * sub-elements, without any leading or trailing whitespace.
   * @return {!promise.Promise} A promise that will be resolved with the
   *     element's visible text.
   */
  getText(): promise.Promise<string>;

  /**
   * Schedules a command to compute the size of this element's bounding box, in
   * pixels.
   * @return {!promise.Promise} A promise that will be resolved with the
   *     element's size as a {@code {width:number, height:number}} object.
   */
  getSize(): promise.Promise<ISize>;

  /**
   * Schedules a command to compute the location of this element in page space.
   * @return {!promise.Promise} A promise that will be resolved to the
   *     element's location as a {@code {x:number, y:number}} object.
   */
  getLocation(): promise.Promise<ILocation>;

  /**
   * Schedules a command to query whether the DOM element represented by this
   * instance is enabled, as dicted by the {@code disabled} attribute.
   * @return {!promise.Promise} A promise that will be resolved with
   *     whether this element is currently enabled.
   */
  isEnabled(): promise.Promise<boolean>;

  /**
   * Schedules a command to query whether this element is selected.
   * @return {!promise.Promise} A promise that will be resolved with
   *     whether this element is currently selected.
   */
  isSelected(): promise.Promise<boolean>;

  /**
   * Schedules a command to submit the form containing this element (or this
   * element if it is a FORM element). This command is a no-op if the element is
   * not contained in a form.
   * @return {!promise.Promise} A promise that will be resolved when
   *     the form has been submitted.
   */
  submit(): promise.Promise<void>;

  /**
   * Schedules a command to clear the {@code value} of this element. This command
   * has no effect if the underlying DOM element is neither a text INPUT element
   * nor a TEXTAREA element.
   * @return {!promise.Promise} A promise that will be resolved when
   *     the element has been cleared.
   */
  clear(): promise.Promise<void>;

  /**
   * Schedules a command to test whether this element is currently displayed.
   * @return {!promise.Promise} A promise that will be resolved with
   *     whether this element is currently visible on the page.
   */
  isDisplayed(): promise.Promise<boolean>;

  /**
   * @return {!promise.Promise.<WebElement.Id>} A promise
   *     that resolves to this element's JSON representation as defined by the
   *     WebDriver wire protocol.
   * @see http://code.google.com/p/selenium/wiki/JsonWireProtocol
   */
  getId(): promise.Promise<IWebElementId>;

  // endregion
}

export interface IWebElementFinders {
  /**
   * Schedule a command to find a descendant of this element. If the element
   * cannot be found, a {@code bot.ErrorCode.NO_SUCH_ELEMENT} result will
   * be returned by the driver. Unlike other commands, this error cannot be
   * suppressed. In other words, scheduling a command to find an element doubles
   * as an assert that the element is present on the page. To test whether an
   * element is present on the page, use {@code #findElements}.
   *
   * <p>The search criteria for an element may be defined using one of the
   * factories in the {@link By} namespace, or as a short-hand
   * {@link By.Hash} object. For example, the following two statements
   * are equivalent:
   * <code><pre>
   * var e1 = element.findElement(By.id('foo'));
   * var e2 = element.findElement({id:'foo'});
   * </pre></code>
   *
   * <p>You may also provide a custom locator function, which takes as input
   * this WebDriver instance and returns a {@link WebElement}, or a
   * promise that will resolve to a WebElement. For example, to find the first
   * visible link on a page, you could write:
   * <code><pre>
   * var link = element.findElement(firstVisibleLink);
   *
   * function firstVisibleLink(element) {
   *   var links = element.findElements(By.tagName('a'));
   *   return promise.filter(links, function(link) {
   *     return links.isDisplayed();
   *   }).then(function(visibleLinks) {
   *     return visibleLinks[0];
   *   });
   * }
   * </pre></code>
   *
   * @param {!(Locator|By.Hash|Function)} locator The
   *     locator strategy to use when searching for the element.
   * @return {!WebElement} A WebElement that can be used to issue
   *     commands against the located element. If the element is not found, the
   *     element will be invalidated and all scheduled commands aborted.
   */
  findElement(locator: Locator): WebElementPromise;

  /**
   * Schedules a command to find all of the descendants of this element that
   * match the given search criteria.
   *
   * @param {!(Locator|By.Hash|Function)} locator The
   *     locator strategy to use when searching for the elements.
   * @return {!promise.Promise.<!Array.<!WebElement>>} A
   *     promise that will resolve to an array of WebElements.
   */
  findElements(locator: Locator): promise.Promise<WebElement[]>;
}

/**
 * Defines an object that can be asynchronously serialized to its WebDriver
 * wire representation.
 *
 * @constructor
 * @template T
 */
export interface Serializable<T> {
  /**
   * Returns either this instance's serialized represention, if immediately
   * available, or a promise for its serialized representation. This function is
   * conceptually equivalent to objects that have a {@code toJSON()} property,
   * except the serialize() result may be a promise or an object containing a
   * promise (which are not directly JSON friendly).
   *
   * @return {!(T|IThenable.<!T>)} This instance's serialized wire format.
   */
  serialize(): T | promise.IThenable<T>;
}

/**
 * Represents a DOM element. WebElements can be found by searching from the
 * document root using a {@link WebDriver} instance, or by searching
 * under another WebElement:
 *
 *     driver.get('http://www.google.com');
 *     var searchForm = driver.findElement(By.tagName('form'));
 *     var searchBox = searchForm.findElement(By.name('q'));
 *     searchBox.sendKeys('webdriver');
 *
 * The WebElement is implemented as a promise for compatibility with the promise
 * API. It will always resolve itself when its internal state has been fully
 * resolved and commands may be issued against the element. This can be used to
 * catch errors when an element cannot be located on the page:
 *
 *     driver.findElement(By.id('not-there')).then(function(element) {
 *       alert('Found an element that was not expected to be there!');
 *     }, function(error) {
 *       alert('The element was not found, as expected');
 *     });
 *
 * @extends {Serializable.<WebElement.Id>}
 */
export class WebElement implements Serializable<IWebElementId> {
  /**
   * @param {!WebDriver} driver the parent WebDriver instance for this element.
   * @param {(!IThenable<string>|string)} id The server-assigned opaque ID for
   *     the underlying DOM element.
   */
  constructor(driver: WebDriver, id: promise.Promise<string> | string);

  /**
   * @param {string} id The raw ID.
   * @param {boolean=} opt_noLegacy Whether to exclude the legacy element key.
   * @return {!Object} The element ID for use with WebDriver's wire protocol.
   */
  static buildId(id: string, opt_noLegacy?: boolean): Object;

  /**
   * Extracts the encoded WebElement ID from the object.
   *
   * @param {?} obj The object to extract the ID from.
   * @return {string} the extracted ID.
   * @throws {TypeError} if the object is not a valid encoded ID.
   */
  static extractId(obj: IWebElementId): string;

  /**
   * @param {?} obj the object to test.
   * @return {boolean} whether the object is a valid encoded WebElement ID.
   */
  static isId(obj: IWebElementId): boolean;

  /**
   * Compares two WebElements for equality.
   *
   * @param {!WebElement} a A WebElement.
   * @param {!WebElement} b A WebElement.
   * @return {!promise.Promise<boolean>} A promise that will be
   *     resolved to whether the two WebElements are equal.
   */
  static equals(a: WebElement, b: WebElement): promise.Promise<boolean>;

  /**
   * @return {!WebDriver} The parent driver for this instance.
   */
  getDriver(): WebDriver;

  /**
   * @return {!promise.Promise<string>} A promise that resolves to
   *     the server-assigned opaque ID assigned to this element.
   */
  getId(): promise.Promise<string>;

  /**
   * Schedule a command to find a descendant of this element. If the element
   * cannot be found, a {@link bot.ErrorCode.NO_SUCH_ELEMENT} result will
   * be returned by the driver. Unlike other commands, this error cannot be
   * suppressed. In other words, scheduling a command to find an element doubles
   * as an assert that the element is present on the page. To test whether an
   * element is present on the page, use {@link #findElements}.
   *
   * The search criteria for an element may be defined using one of the
   * factories in the {@link By} namespace, or as a short-hand
   * {@link By.Hash} object. For example, the following two statements
   * are equivalent:
   *
   *     var e1 = element.findElement(By.id('foo'));
   *     var e2 = element.findElement({id:'foo'});
   *
   * You may also provide a custom locator function, which takes as input
   * this WebDriver instance and returns a {@link WebElement}, or a
   * promise that will resolve to a WebElement. For example, to find the first
   * visible link on a page, you could write:
   *
   *     var link = element.findElement(firstVisibleLink);
   *
   *     function firstVisibleLink(element) {
   *       var links = element.findElements(By.tagName('a'));
   *       return promise.filter(links, function(link) {
   *         return links.isDisplayed();
   *       }).then(function(visibleLinks) {
   *         return visibleLinks[0];
   *       });
   *     }
   *
   * @param {!(by.By|Function)} locator The locator strategy to use when
   *     searching for the element.
   * @return {!WebElementPromise} A WebElement that can be used to issue
   *     commands against the located element. If the element is not found, the
   *     element will be invalidated and all scheduled commands aborted.
   */
  findElement(locator: Locator): WebElementPromise;

  /**
   * Schedules a command to find all of the descendants of this element that
   * match the given search criteria.
   *
   * @param {!(by.By|Function)} locator The locator strategy to use when
   *     searching for the element.
   * @return {!promise.Promise<!Array<!WebElement>>} A
   *     promise that will resolve to an array of WebElements.
   */
  findElements(locator: Locator): promise.Promise<WebElement[]>;

  /**
   * Schedules a command to click on this element.
   * @return {!promise.Promise.<void>} A promise that will be resolved
   *     when the click command has completed.
   */
  click(): promise.Promise<void>;

  /**
   * Schedules a command to type a sequence on the DOM element represented by this
   * promsieinstance.
   *
   * Modifier keys (SHIFT, CONTROL, ALT, META) are stateful; once a modifier is
   * processed in the keysequence, that key state is toggled until one of the
   * following occurs:
   *
   * - The modifier key is encountered again in the sequence. At this point the
   *   state of the key is toggled (along with the appropriate keyup/down events).
   * - The {@link Key.NULL} key is encountered in the sequence. When
   *   this key is encountered, all modifier keys current in the down state are
   *   released (with accompanying keyup events). The NULL key can be used to
   *   simulate common keyboard shortcuts:
   *
   *         element.sendKeys('text was',
   *                          Key.CONTROL, 'a', Key.NULL,
   *                          'now text is');
   *         // Alternatively:
   *         element.sendKeys('text was',
   *                          Key.chord(Key.CONTROL, 'a'),
   *                          'now text is');
   *
   * - The end of the keysequence is encountered. When there are no more keys
   *   to type, all depressed modifier keys are released (with accompanying keyup
   *   events).
   *
   * If this element is a file input ({@code <input type='file'>}), the
   * specified key sequence should specify the path to the file to attach to
   * the element. This is analgous to the user clicking 'Browse...' and entering
   * the path into the file select dialog.
   *
   *     var form = driver.findElement(By.css('form'));
   *     var element = form.findElement(By.css('input[type=file]'));
   *     element.sendKeys('/path/to/file.txt');
   *     form.submit();
   *
   * For uploads to function correctly, the entered path must reference a file
   * on the _browser's_ machine, not the local machine running this script. When
   * running against a remote Selenium server, a {@link FileDetector}
   * may be used to transparently copy files to the remote machine before
   * attempting to upload them in the browser.
   *
   * __Note:__ On browsers where native keyboard events are not supported
   * (e.g. Firefox on OS X), key events will be synthesized. Special
   * punctionation keys will be synthesized according to a standard QWERTY en-us
   * keyboard layout.
   *
   * @param {...(string|!promise.Promise<string>)} var_args The sequence
   *     of keys to type. All arguments will be joined into a single sequence.
   * @return {!promise.Promise.<void>} A promise that will be resolved
   *     when all keys have been typed.
   */
  sendKeys(...var_args: Array<string|number|promise.Promise<string|number>>): promise.Promise<void>;

  /**
   * Schedules a command to query for the tag/node name of this element.
   * @return {!promise.Promise.<string>} A promise that will be
   *     resolved with the element's tag name.
   */
  getTagName(): promise.Promise<string>;

  /**
   * Schedules a command to query for the computed style of the element
   * represented by this instance. If the element inherits the named style from
   * its parent, the parent will be queried for its value.  Where possible, color
   * values will be converted to their hex representation (e.g. #00ff00 instead of
   * rgb(0, 255, 0)).
   *
   * _Warning:_ the value returned will be as the browser interprets it, so
   * it may be tricky to form a proper assertion.
   *
   * @param {string} cssStyleProperty The name of the CSS style property to look
   *     up.
   * @return {!promise.Promise<string>} A promise that will be
   *     resolved with the requested CSS value.
   */
  getCssValue(cssStyleProperty: string): promise.Promise<string>;

  /**
   * Schedules a command to query for the value of the given attribute of the
   * element. Will return the current value, even if it has been modified after
   * the page has been loaded. More exactly, this method will return the value of
   * the given attribute, unless that attribute is not present, in which case the
   * value of the property with the same name is returned. If neither value is
   * set, null is returned (for example, the 'value' property of a textarea
   * element). The 'style' attribute is converted as best can be to a
   * text representation with a trailing semi-colon. The following are deemed to
   * be 'boolean' attributes and will return either 'true' or null:
   *
   * async, autofocus, autoplay, checked, compact, complete, controls, declare,
   * defaultchecked, defaultselected, defer, disabled, draggable, ended,
   * formnovalidate, hidden, indeterminate, iscontenteditable, ismap, itemscope,
   * loop, multiple, muted, nohref, noresize, noshade, novalidate, nowrap, open,
   * paused, pubdate, readonly, required, reversed, scoped, seamless, seeking,
   * selected, spellcheck, truespeed, willvalidate
   *
   * Finally, the following commonly mis-capitalized attribute/property names
   * are evaluated as expected:
   *
   * - 'class'
   * - 'readonly'
   *
   * @param {string} attributeName The name of the attribute to query.
   * @return {!promise.Promise.<?string>} A promise that will be
   *     resolved with the attribute's value. The returned value will always be
   *     either a string or null.
   */
  getAttribute(attributeName: string): promise.Promise<string>;

  /**
   * Get the visible (i.e. not hidden by CSS) innerText of this element, including
   * sub-elements, without any leading or trailing whitespace.
   * @return {!promise.Promise.<string>} A promise that will be
   *     resolved with the element's visible text.
   */
  getText(): promise.Promise<string>;

  /**
   * Schedules a command to compute the size of this element's bounding box, in
   * pixels.
   * @return {!promise.Promise.<{width: number, height: number}>} A
   *     promise that will be resolved with the element's size as a
   *     {@code {width:number, height:number}} object.
   */
  getSize(): promise.Promise<ISize>;

  /**
   * Schedules a command to compute the location of this element in page space.
   * @return {!promise.Promise.<{x: number, y: number}>} A promise that
   *     will be resolved to the element's location as a
   *     {@code {x:number, y:number}} object.
   */
  getLocation(): promise.Promise<ILocation>;

  /**
   * Schedules a command to query whether the DOM element represented by this
   * instance is enabled, as dicted by the {@code disabled} attribute.
   * @return {!promise.Promise.<boolean>} A promise that will be
   *     resolved with whether this element is currently enabled.
   */
  isEnabled(): promise.Promise<boolean>;

  /**
   * Schedules a command to query whether this element is selected.
   * @return {!promise.Promise.<boolean>} A promise that will be
   *     resolved with whether this element is currently selected.
   */
  isSelected(): promise.Promise<boolean>;

  /**
   * Schedules a command to submit the form containing this element (or this
   * element if it is a FORM element). This command is a no-op if the element is
   * not contained in a form.
   * @return {!promise.Promise.<void>} A promise that will be resolved
   *     when the form has been submitted.
   */
  submit(): promise.Promise<void>;

  /**
   * Schedules a command to clear the `value` of this element. This command has
   * no effect if the underlying DOM element is neither a text INPUT element
   * nor a TEXTAREA element.
   * @return {!promise.Promise<void>} A promise that will be resolved
   *     when the element has been cleared.
   */
  clear(): promise.Promise<void>;

  /**
   * Schedules a command to test whether this element is currently displayed.
   * @return {!promise.Promise.<boolean>} A promise that will be
   *     resolved with whether this element is currently visible on the page.
   */
  isDisplayed(): promise.Promise<boolean>;

  /**
   * Take a screenshot of the visible region encompassed by this element's
   * bounding rectangle.
   *
   * @param {boolean=} opt_scroll Optional argument that indicates whether the
   *     element should be scrolled into view before taking a screenshot.
   *     Defaults to false.
   * @return {!promise.Promise<string>} A promise that will be
   *     resolved to the screenshot as a base-64 encoded PNG.
   */
  takeScreenshot(opt_scroll?: boolean): promise.Promise<string>;

  /** @override */
  serialize(): promise.Promise<IWebElementId>;
}

/**
 * WebElementPromise is a promise that will be fulfilled with a WebElement.
 * This serves as a forward proxy on WebElement, allowing calls to be
 * scheduled without directly on this instance before the underlying
 * WebElement has been fulfilled. In other words, the following two statements
 * are equivalent:
 * <pre><code>
 *     driver.findElement({id: 'my-button'}).click();
 *     driver.findElement({id: 'my-button'}).then(function(el) {
 *       return el.click();
 *     });
 * </code></pre>
 *
 * @param {!WebDriver} driver The parent WebDriver instance for this
 *     element.
 * @param {!promise.Promise.<!WebElement>} el A promise
 *     that will resolve to the promised element.
 * @constructor
 * @extends {WebElement}
 * @implements {promise.Thenable.<!WebElement>}
 * @final
 */
export interface WebElementPromise extends promise.IThenable<WebElement> {}
export class WebElementPromise extends WebElement {
  /**
   * @param {!WebDriver} driver The parent WebDriver instance for this
   *     element.
   * @param {!promise.Promise<!WebElement>} el A promise
   *     that will resolve to the promised element.
   */
  constructor(driver: WebDriver, el: promise.Promise<WebElement>);
}

/**
 * Contains information about a WebDriver session.
 */
export class Session {
  // region Constructors

  /**
   * @param {string} id The session ID.
   * @param {!(Object|Capabilities)} capabilities The session
   *     capabilities.
   * @constructor
   */
  constructor(id: string, capabilities: Capabilities | Object);

  // endregion

  // region Methods

  /**
   * @return {string} This session's ID.
   */
  getId(): string;

  /**
   * @return {!Capabilities} This session's capabilities.
   */
  getCapabilities(): Capabilities;

  /**
   * Retrieves the value of a specific capability.
   * @param {string} key The capability to retrieve.
   * @return {*} The capability value.
   */
  getCapability(key: string): any;

  /**
   * Returns the JSON representation of this object, which is just the string
   * session ID.
   * @return {string} The JSON representation of this Session.
   */
  toJSON(): string;

  // endregion
}
