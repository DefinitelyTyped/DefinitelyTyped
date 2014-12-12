// Type definitions for Selenium WebDriverJS 2.39.0
// Project: https://code.google.com/p/selenium/
// Definitions by: Bill Armstrong <https://github.com/BillArmstrong>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module webdriver {

    module logging {

        /**
         * A hash describing log preferences.
         * @typedef {Object.<webdriver.logging.Type, webdriver.logging.LevelName>}
         */
        var Preferences: any;

        /**
         * Log level names from WebDriver's JSON wire protocol.
         * @enum {string}
         */
        class LevelName {
            static ALL: string;
            static DEBUG: string;
            static INFO: string;
            static WARNING: string;
            static SEVERE: string;
            static OFF: string;
        }

        /**
         * Common log types.
         * @enum {string}
         */
        class Type {
            /** Logs originating from the browser. */
            static BROWSER: string;
            /** Logs from a WebDriver client. */
            static CLIENT: string;
            /** Logs from a WebDriver implementation. */
            static DRIVER: string;
            /** Logs related to performance. */
            static PERFORMANCE: string;
            /** Logs from the remote server. */
            static SERVER: string;
        }

        /**
         * Logging levels.
         * @enum {{value: number, name: webdriver.logging.LevelName}}
         */
        class Level {
            //region Static Properties

            static ALL: Level;
            static DEBUG: Level;
            static INFO: Level;
            static WARNING: Level;
            static SEVERE: Level;
            static OFF: Level;

            //endregion

            //region Properties

            value: number;
            name: string;

            //endregion
        }

        /**
         * Converts a level name or value to a {@link webdriver.logging.Level} value.
         * If the name/value is not recognized, {@link webdriver.logging.Level.ALL}
         * will be returned.
         * @param {(number|string)} nameOrValue The log level name, or value, to
         *     convert .
         * @return {!webdriver.logging.Level} The converted level.
         */
        function getLevel(nameOrValue: string): webdriver.logging.Level;
        function getLevel(nameOrValue: number): webdriver.logging.Level;

        /**
         * A single log entry.
         */
        class Entry {

            //region Constructors

            /**
             * @param {(!webdriver.logging.Level|string)} level The entry level.
             * @param {string} message The log message.
             * @param {number=} opt_timestamp The time this entry was generated, in
             *     milliseconds since 0:00:00, January 1, 1970 UTC. If omitted, the
             *     current time will be used.
             * @param {string=} opt_type The log type, if known.
             * @constructor
             */
            constructor(level: webdriver.logging.Level, message: string, opt_timestamp?:number, opt_type?:string);
            constructor(level: string, message: string, opt_timestamp?:number, opt_type?:string);

            //endregion

            //region Public Properties

            /** @type {!webdriver.logging.Level} */
            level: webdriver.logging.Level;

            /** @type {string} */
            message: string;

            /** @type {number} */
            timestamp: number;

            /** @type {string} */
            type: string;

            //endregion

            //region Static Methods

            /**
             * Converts a {@link goog.debug.LogRecord} into a
             * {@link webdriver.logging.Entry}.
             * @param {!goog.debug.LogRecord} logRecord The record to convert.
             * @param {string=} opt_type The log type.
             * @return {!webdriver.logging.Entry} The converted entry.
             */
            static fromClosureLogRecord(logRecord: any, opt_type?:string): webdriver.logging.Entry;

            //endregion

            //region Methods

            /**
             * @return {{level: string, message: string, timestamp: number,
             *           type: string}} The JSON representation of this entry.
             */
            toJSON(): webdriver.logging.Level;

            //endregion
        }
    }

    module promise {

        //region Functions

        /**
         * @return {!webdriver.promise.ControlFlow} The currently active control flow.
         */
        function controlFlow(): webdriver.promise.ControlFlow;

        /**
         * Creates a new control flow. The provided callback will be invoked as the
         * first task within the new flow, with the flow as its sole argument. Returns
         * a promise that resolves to the callback result.
         * @param {function(!webdriver.promise.ControlFlow)} callback The entry point
         *     to the newly created flow.
         * @return {!webdriver.promise.Promise} A promise that resolves to the callback
         *     result.
         */
        function createFlow(callback: (flow: webdriver.promise.ControlFlow) => any): webdriver.promise.Promise;

        /**
         * Determines whether a {@code value} should be treated as a promise.
         * Any object whose "then" property is a function will be considered a promise.
         *
         * @param {*} value The value to test.
         * @return {boolean} Whether the value is a promise.
         */
        function isPromise(value: any): boolean;

        /**
         * Creates a promise that will be resolved at a set time in the future.
         * @param {number} ms The amount of time, in milliseconds, to wait before
         *     resolving the promise.
         * @return {!webdriver.promise.Promise} The promise.
         */
        function delayed(ms: number): webdriver.promise.Promise;

        /**
         * Creates a new deferred object.
         * @param {Function=} opt_canceller Function to call when cancelling the
         *     computation of this instance's value.
         * @return {!webdriver.promise.Deferred} The new deferred object.
         */
        function defer(opt_canceller?: any): webdriver.promise.Deferred;

        /**
         * Creates a promise that has been resolved with the given value.
         * @param {*=} opt_value The resolved value.
         * @return {!webdriver.promise.Promise} The resolved promise.
         */
        function fulfilled(opt_value?: any): webdriver.promise.Promise;

        /**
         * Creates a promise that has been rejected with the given reason.
         * @param {*=} opt_reason The rejection reason; may be any value, but is
         *     usually an Error or a string.
         * @return {!webdriver.promise.Promise} The rejected promise.
         */
        function rejected(opt_reason?: any): webdriver.promise.Promise;

        /**
         * Wraps a function that is assumed to be a node-style callback as its final
         * argument. This callback takes two arguments: an error value (which will be
         * null if the call succeeded), and the success value as the second argument.
         * If the call fails, the returned promise will be rejected, otherwise it will
         * be resolved with the result.
         * @param {!Function} fn The function to wrap.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     result of the provided function's callback.
         */
        function checkedNodeCall(fn: (error: any, value: any) => any): webdriver.promise.Promise;

        /**
         * Registers an observer on a promised {@code value}, returning a new promise
         * that will be resolved when the value is. If {@code value} is not a promise,
         * then the return promise will be immediately resolved.
         * @param {*} value The value to observe.
         * @param {Function=} opt_callback The function to call when the value is
         *     resolved successfully.
         * @param {Function=} opt_errback The function to call when the value is
         *     rejected.
         * @return {!webdriver.promise.Promise} A new promise.
         */
        function when(value: any, opt_callback?: (value: any) => any, opt_errback?: (error: any) => any): webdriver.promise.Promise;

        /**
         * Invokes the appropriate callback function as soon as a promised
         * {@code value} is resolved. This function is similar to
         * {@code webdriver.promise.when}, except it does not return a new promise.
         * @param {*} value The value to observe.
         * @param {Function} callback The function to call when the value is
         *     resolved successfully.
         * @param {Function=} opt_errback The function to call when the value is
         *     rejected.
         */
        function asap(value: any, callback: (value: any) => any, opt_errback?: (error: any) => any): void;

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
         *   var value = {};
         *   value['self'] = value;
         *   webdriver.promise.fullyResolved(value);  // Stack overflow.
         *
         * @param {*} value The value to fully resolve.
         * @return {!webdriver.promise.Promise} A promise for a fully resolved version
         *     of the input value.
         */
        function fullyResolved(value: any): webdriver.promise.Promise;

        /**
         * Changes the default flow to use when no others are active.
         * @param {!webdriver.promise.ControlFlow} flow The new default flow.
         * @throws {Error} If the default flow is not currently active.
         */
        function setDefaultFlow(flow: webdriver.promise.ControlFlow): void;

        //endregion

        /**
         * Represents the eventual value of a completed operation. Each promise may be
         * in one of three states: pending, resolved, or rejected. Each promise starts
         * in the pending state and may make a single transition to either a
         * fulfilled or failed state.
         *
         * <p/>This class is based on the Promise/A proposal from CommonJS. Additional
         * functions are provided for API compatibility with Dojo Deferred objects.
         *
         * @see http://wiki.commonjs.org/wiki/Promises/A
         */
        class Promise {

            //region Constructors

            /**
            * @constructor
            * @see http://wiki.commonjs.org/wiki/Promises/A
            */
            constructor();

            //endregion

            //region Methods

            /**
             * Cancels the computation of this promise's value, rejecting the promise in the
             * process.
             * @param {*} reason The reason this promise is being cancelled. If not an
             *     {@code Error}, one will be created using the value's string
             *     representation.
             */
            cancel(reason: any): void;

            /** @return {boolean} Whether this promise's value is still being computed. */
            isPending(): boolean;

            /**
             * Registers listeners for when this instance is resolved. This function most
             * overridden by subtypes.
             *
             * @param {Function=} opt_callback The function to call if this promise is
             *     successfully resolved. The function should expect a single argument: the
             *     promise's resolved value.
             * @param {Function=} opt_errback The function to call if this promise is
             *     rejected. The function should expect a single argument: the rejection
             *     reason.
             * @return {!webdriver.promise.Promise} A new promise which will be resolved
             *     with the result of the invoked callback.
             */
            then(opt_callback?: (value: any) => any, opt_errback?: (error: any) => any): Promise;

            /**
             * Registers a function to be invoked when this promise is successfully
             * resolved. This function is provided for backwards compatibility with the
             * Dojo Deferred API.
             *
             * @param {Function} callback The function to call if this promise is
             *     successfully resolved. The function should expect a single argument: the
             *     promise's resolved value.
             * @param {!Object=} opt_self The object which |this| should refer to when the
             *     function is invoked.
             * @return {!webdriver.promise.Promise} A new promise which will be resolved
             *     with the result of the invoked callback.
             */
            addCallback(callback: (value: any) => any, opt_self?: any): Promise;


            /**
             * Registers a function to be invoked when this promise is rejected.
             * This function is provided for backwards compatibility with the
             * Dojo Deferred API.
             *
             * @param {Function} errback The function to call if this promise is
             *     rejected. The function should expect a single argument: the rejection
             *     reason.
             * @param {!Object=} opt_self The object which |this| should refer to when the
             *     function is invoked.
             * @return {!webdriver.promise.Promise} A new promise which will be resolved
             *     with the result of the invoked callback.
             */
            addErrback(errback: (error: any) => any, opt_self?: any): Promise;

            /**
             * Registers a function to be invoked when this promise is either rejected or
             * resolved. This function is provided for backwards compatibility with the
             * Dojo Deferred API.
             *
             * @param {Function} callback The function to call when this promise is
             *     either resolved or rejected. The function should expect a single
             *     argument: the resolved value or rejection error.
             * @param {!Object=} opt_self The object which |this| should refer to when the
             *     function is invoked.
             * @return {!webdriver.promise.Promise} A new promise which will be resolved
             *     with the result of the invoked callback.
             */
            addBoth(callback : (value: any) => any, opt_self?: any): Promise;

            /**
             * An alias for {@code webdriver.promise.Promise.prototype.then} that permits
             * the scope of the invoked function to be specified. This function is provided
             * for backwards compatibility with the Dojo Deferred API.
             *
             * @param {Function} callback The function to call if this promise is
             *     successfully resolved. The function should expect a single argument: the
             *     promise's resolved value.
             * @param {Function} errback The function to call if this promise is
             *     rejected. The function should expect a single argument: the rejection
             *     reason.
             * @param {!Object=} opt_self The object which |this| should refer to when the
             *     function is invoked.
             * @return {!webdriver.promise.Promise} A new promise which will be resolved
             *     with the result of the invoked callback.
             */
            addCallbacks(callback: (value: any) => any, errback: (error: any) => any, opt_self?: any): Promise;

            //endregion
        }

        /**
         * Represents a value that will be resolved at some point in the future. This
         * class represents the protected "producer" half of a Promise - each Deferred
         * has a {@code promise} property that may be returned to consumers for
         * registering callbacks, reserving the ability to resolve the deferred to the
         * producer.
         *
         * <p>If this Deferred is rejected and there are no listeners registered before
         * the next turn of the event loop, the rejection will be passed to the
         * {@link webdriver.promise.ControlFlow} as an unhandled failure.
         *
         * <p>If this Deferred is cancelled, the cancellation reason will be forward to
         * the Deferred's canceller function (if provided). The canceller may return a
         * truth-y value to override the reason provided for rejection.
         *
         * @extends {webdriver.promise.Promise}
         */
        class Deferred extends Promise {
            //region Constructors

            /**
             *
             * @param {Function=} opt_canceller Function to call when cancelling the
             *     computation of this instance's value.
             * @param {webdriver.promise.ControlFlow=} opt_flow The control flow
             *     this instance was created under. This should only be provided during
             *     unit tests.
             * @constructor
             */
            constructor(opt_canceller?: any, opt_flow?: webdriver.promise.ControlFlow);

            //endregion

            //region Properties

            /**
             * The consumer promise for this instance. Provides protected access to the
             * callback registering functions.
             * @type {!webdriver.promise.Promise}
             */
            promise: webdriver.promise.Promise;

            //endregion

            //region Methods

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
            fulfill(opt_value?: any): void;

            /**
             * Cancels the computation of this promise's value and flags the promise as a
             * rejected value.
             * @param {*=} opt_reason The reason for cancelling this promise.
             */
            cancel(opt_reason?: any): void;

            /**
             * Removes all of the listeners previously registered on this deferred.
             * @throws {Error} If this deferred has already been resolved.
             */
            removeAll(): void;

            //endregion
        }

        interface IControlFlowTimer {
            clearInterval: (ms: number) => void;
            clearTimeout: (ms: number) => void;
            setInterval: (fn: any, ms: number) => number;
            setTimeout: (fn: any, ms: number) => number;
        }

        /**
         * Handles the execution of scheduled tasks, each of which may be an
         * asynchronous operation. The control flow will ensure tasks are executed in
         * the ordered scheduled, starting each task only once those before it have
         * completed.
         *
         * <p>Each task scheduled within this flow may return a
         * {@link webdriver.promise.Promise} to indicate it is an asynchronous
         * operation. The ControlFlow will wait for such promises to be resolved before
         * marking the task as completed.
         *
         * <p>Tasks and each callback registered on a {@link webdriver.promise.Deferred}
         * will be run in their own ControlFlow frame.  Any tasks scheduled within a
         * frame will have priority over previously scheduled tasks. Furthermore, if
         * any of the tasks in the frame fails, the remainder of the tasks in that frame
         * will be discarded and the failure will be propagated to the user through the
         * callback/task's promised result.
         *
         * <p>Each time a ControlFlow empties its task queue, it will fire an
         * {@link webdriver.promise.ControlFlow.EventType.IDLE} event. Conversely,
         * whenever the flow terminates due to an unhandled error, it will remove all
         * remaining tasks in its queue and fire an
         * {@link webdriver.promise.ControlFlow.EventType.UNCAUGHT_EXCEPTION} event. If
         * there are no listeners registered with the flow, the error will be
         * rethrown to the global error handler.
         *
         * @extends {webdriver.EventEmitter}
         */
        class ControlFlow extends webdriver.EventEmitter {

            //region Constructors

            /**
             * @param {webdriver.promise.ControlFlow.Timer=} opt_timer The timer object
             *     to use. Should only be set for testing.
             * @constructor
             */
            constructor(opt_timer?: webdriver.promise.IControlFlowTimer);

            //endregion

            //region Properties

            /**
             * The timer used by this instance.
             * @type {webdriver.promise.ControlFlow.Timer}
             */
            timer: webdriver.promise.IControlFlowTimer;

            //endregion

            //region Static Properties

            /**
             * The default timer object, which uses the global timer functions.
             * @type {webdriver.promise.ControlFlow.Timer}
             */
            static defaultTimer: webdriver.promise.IControlFlowTimer;

            /**
             * Events that may be emitted by an {@link webdriver.promise.ControlFlow}.
             * @enum {string}
             */
            static EventType: {
                /** Emitted when all tasks have been successfully executed. */
                    IDLE: string;

                /** Emitted whenever a new task has been scheduled. */
                    SCHEDULE_TASK: string;

                /**
                 * Emitted whenever a control flow aborts due to an unhandled promise
                 * rejection. This event will be emitted along with the offending rejection
                 * reason. Upon emitting this event, the control flow will empty its task
                 * queue and revert to its initial state.
                 */
                    UNCAUGHT_EXCEPTION: string;
            };

            /**
             * How often, in milliseconds, the event loop should run.
             * @type {number}
             * @const
             */
            static EVENT_LOOP_FREQUENCY: number;

            //endregion

            //region Methods

            /**
             * Resets this instance, clearing its queue and removing all event listeners.
             */
            reset(): void;

            /**
             * Returns a summary of the recent task activity for this instance. This
             * includes the most recently completed task, as well as any parent tasks. In
             * the returned summary, the task at index N is considered a sub-task of the
             * task at index N+1.
             * @return {!Array.<string>} A summary of this instance's recent task
             *     activity.
             */
            getHistory(): string[];

            /** Clears this instance's task history. */
            clearHistory(): void;

            /**
             * Appends a summary of this instance's recent task history to the given
             * error's stack trace. This function will also ensure the error's stack trace
             * is in canonical form.
             * @param {!(Error|goog.testing.JsUnitException)} e The error to annotate.
             * @return {!(Error|goog.testing.JsUnitException)} The annotated error.
             */
            annotateError(e: any): any;

            /**
             * @return {string} The scheduled tasks still pending with this instance.
             */
            getSchedule(): string;

            /**
             * Schedules a task for execution. If there is nothing currently in the
             * queue, the task will be executed in the next turn of the event loop.
             *
             * @param {!Function} fn The function to call to start the task. If the
             *     function returns a {@link webdriver.promise.Promise}, this instance
             *     will wait for it to be resolved before starting the next task.
             * @param {string=} opt_description A description of the task.
             * @return {!webdriver.promise.Promise} A promise that will be resolved with
             *     the result of the action.
             */
            execute(fn: any, opt_description?: string): webdriver.promise.Promise;

            /**
             * Inserts a {@code setTimeout} into the command queue. This is equivalent to
             * a thread sleep in a synchronous programming language.
             *
             * @param {number} ms The timeout delay, in milliseconds.
             * @param {string=} opt_description A description to accompany the timeout.
             * @return {!webdriver.promise.Promise} A promise that will be resolved with
             *     the result of the action.
             */
            timeout(ms: number, opt_description?: string): webdriver.promise.Promise;

            /**
             * Schedules a task that shall wait for a condition to hold. Each condition
             * function may return any value, but it will always be evaluated as a boolean.
             *
             * <p>Condition functions may schedule sub-tasks with this instance, however,
             * their execution time will be factored into whether a wait has timed out.
             *
             * <p>In the event a condition returns a Promise, the polling loop will wait for
             * it to be resolved before evaluating whether the condition has been satisfied.
             * The resolution time for a promise is factored into whether a wait has timed
             * out.
             *
             * <p>If the condition function throws, or returns a rejected promise, the
             * wait task will fail.
             *
             * @param {!Function} condition The condition function to poll.
             * @param {number} timeout How long to wait, in milliseconds, for the condition
             *     to hold before timing out.
             * @param {string=} opt_message An optional error message to include if the
             *     wait times out; defaults to the empty string.
             * @return {!webdriver.promise.Promise} A promise that will be resolved when the
             *     condition has been satisified. The promise shall be rejected if the wait
             *     times out waiting for the condition.
             */
            wait(condition: any, timeout: number, opt_message?: string): webdriver.promise.Promise;

            /**
             * Schedules a task that will wait for another promise to resolve.  The resolved
             * promise's value will be returned as the task result.
             * @param {!webdriver.promise.Promise} promise The promise to wait on.
             * @return {!webdriver.promise.Promise} A promise that will resolve when the
             *     task has completed.
             */
            await(promise: webdriver.promise.Promise): webdriver.promise.Promise;

            //endregion
        }
    }

    module error {

        // NOTE: A class was used instead of an Enum so that it could be extended in Protractor.
        class ErrorCode {
            static SUCCESS: number;

            static NO_SUCH_ELEMENT: number;
            static NO_SUCH_FRAME: number;
            static UNKNOWN_COMMAND: number;
            static UNSUPPORTED_OPERATION: number;  // Alias for UNKNOWN_COMMAND.
            static STALE_ELEMENT_REFERENCE: number;
            static ELEMENT_NOT_VISIBLE: number;
            static INVALID_ELEMENT_STATE: number;
            static UNKNOWN_ERROR: number;
            static ELEMENT_NOT_SELECTABLE: number;
            static JAVASCRIPT_ERROR: number;
            static XPATH_LOOKUP_ERROR: number;
            static TIMEOUT: number;
            static NO_SUCH_WINDOW: number;
            static INVALID_COOKIE_DOMAIN: number;
            static UNABLE_TO_SET_COOKIE: number;
            static MODAL_DIALOG_OPENED: number;
            static NO_MODAL_DIALOG_OPEN: number;
            static SCRIPT_TIMEOUT: number;
            static INVALID_ELEMENT_COORDINATES: number;
            static IME_NOT_AVAILABLE: number;
            static IME_ENGINE_ACTIVATION_FAILED: number;
            static INVALID_SELECTOR_ERROR: number;
            static SESSION_NOT_CREATED: number;
            static MOVE_TARGET_OUT_OF_BOUNDS: number;
            static SQL_DATABASE_ERROR: number;
            static INVALID_XPATH_SELECTOR: number;
            static INVALID_XPATH_SELECTOR_RETURN_TYPE: number;
            // The following error codes are derived straight from HTTP return codes.
            static METHOD_NOT_ALLOWED: number;
        }

        /**
         * Error extension that includes error status codes from the WebDriver wire
         * protocol:
         * http://code.google.com/p/selenium/wiki/JsonWireProtocol#Response_Status_Codes
         *
         * @extends {Error}
         */
        class Error {

            //region Constructors

            /**
             * @param {!bot.ErrorCode} code The error's status code.
             * @param {string=} opt_message Optional error message.
             * @constructor
             */
                constructor(code: number, opt_message?: string);

            //endregion

            //region Static Properties

            /**
             * Status strings enumerated in the W3C WebDriver working draft.
             * @enum {string}
             * @see http://www.w3.org/TR/webdriver/#status-codes
             */
            static State: {
                ELEMENT_NOT_SELECTABLE: string;
                ELEMENT_NOT_VISIBLE: string;
                IME_ENGINE_ACTIVATION_FAILED: string;
                IME_NOT_AVAILABLE: string;
                INVALID_COOKIE_DOMAIN: string;
                INVALID_ELEMENT_COORDINATES: string;
                INVALID_ELEMENT_STATE: string;
                INVALID_SELECTOR: string;
                JAVASCRIPT_ERROR: string;
                MOVE_TARGET_OUT_OF_BOUNDS: string;
                NO_SUCH_ALERT: string;
                NO_SUCH_DOM: string;
                NO_SUCH_ELEMENT: string;
                NO_SUCH_FRAME: string;
                NO_SUCH_WINDOW: string;
                SCRIPT_TIMEOUT: string;
                SESSION_NOT_CREATED: string;
                STALE_ELEMENT_REFERENCE: string;
                SUCCESS: string;
                TIMEOUT: string;
                UNABLE_TO_SET_COOKIE: string;
                UNEXPECTED_ALERT_OPEN: string;
                UNKNOWN_COMMAND: string;
                UNKNOWN_ERROR: string;
                UNSUPPORTED_OPERATION: string;
            }

            //endregion

            //region Properties

            /**
             * This error's status code.
             * @type {!bot.ErrorCode}
             */
            code: number;

            /** @type {string} */
            state: string;

            /** @override */
            message: string;

            /** @override */
            name: string;

            /** @override */
            stack: string;

            /**
             * Flag used for duck-typing when this code is embedded in a Firefox extension.
             * This is required since an Error thrown in one component and then reported
             * to another will fail instanceof checks in the second component.
             * @type {boolean}
             */
            isAutomationError: boolean;

            //endregion

            //region Methods

            /** @return {string} The string representation of this error. */
                toString(): string;

            //endregion
        }
    }

    module process {

        /**
         * Queries for a named environment variable.
         * @param {string} name The name of the environment variable to look up.
         * @param {string=} opt_default The default value if the named variable is not
         *     defined.
         * @return {string} The queried environment variable.
         */
        function getEnv(name: string, opt_default?: string): string;

        /**
         * @return {boolean} Whether the current process is Node's native process
         *     object.
         */
        function isNative(): boolean;

        /**
         * Sets an environment value. If the new value is either null or undefined, the
         *     environment variable will be cleared.
         * @param {string} name The value to set.
         * @param {*} value The new value; will be coerced to a string.
         */
        function setEnv(name: string, value: any): void;

    }

    /**
     * Creates new {@code webdriver.WebDriver} clients.  Upon instantiation, each
     * Builder will configure itself based on the following environment variables:
     * <dl>
     *   <dt>{@code webdriver.AbstractBuilder.SERVER_URL_ENV}</dt>
     *   <dd>Defines the remote WebDriver server that should be used for command
     *       command execution; may be overridden using
     *       {@code webdriver.AbstractBuilder.prototype.usingServer}.</dd>
     * </dl>
     */
    class AbstractBuilder {

        //region Constructors

        /**
         * @constructor
         */
        constructor();

        //endregion

        //region Static Properties

        /**
         * Environment variable that defines the URL of the WebDriver server that
         * should be used for all new WebDriver clients. This setting may be overridden
         * using {@code #usingServer(url)}.
         * @type {string}
         * @const
         * @see webdriver.process.getEnv
         */
        static SERVER_URL_ENV: string;


        /**
         * The default URL of the WebDriver server to use if
         * {@link webdriver.AbstractBuilder.SERVER_URL_ENV} is not set.
         * @type {string}
         * @const
         */
        static DEFAULT_SERVER_URL: string;

        //endregion

        //region Methods

        /**
         * Configures which WebDriver server should be used for new sessions. Overrides
         * the value loaded from the {@link webdriver.AbstractBuilder.SERVER_URL_ENV}
         * upon creation of this instance.
         * @param {string} url URL of the server to use.
         * @return {!webdriver.AbstractBuilder} This Builder instance for chain calling.
         */
        usingServer(url: string): AbstractBuilder;

        /**
         * @return {string} The URL of the WebDriver server this instance is configured
         *     to use.
         */
        getServerUrl(): string;

        /**
         * Sets the desired capabilities when requesting a new session. This will
         * overwrite any previously set desired capabilities.
         * @param {!(Object|webdriver.Capabilities)} capabilities The desired
         *     capabilities for a new session.
         * @return {!webdriver.AbstractBuilder} This Builder instance for chain calling.
         */
        withCapabilities(capabilities: webdriver.Capabilities): AbstractBuilder;
        withCapabilities(capabilities: any): AbstractBuilder;

        /**
         * @return {!webdriver.Capabilities} The current desired capabilities for this
         *     builder.
         */
        getCapabilities(): webdriver.Capabilities;

        /**
         * Builds a new {@link webdriver.WebDriver} instance using this builder's
         * current configuration.
         * @return {!webdriver.WebDriver} A new WebDriver client.
         */
        build(): webdriver.WebDriver;

        //endregion
    }

    interface ILocation {
        x: number;
        y: number;
    }

    /**
     * Enumeration of the buttons used in the advanced interactions API.
     * NOTE: A TypeScript enum was not used so that this class could be extended in Protractor.
     * @enum {number}
     */
    class Button {
        static LEFT: number;
        static MIDDLE: number;
        static RIGHT: number;
    }

    /**
     * Representations of pressable keys that aren't text.  These are stored in
     * the Unicode PUA (Private Use Area) code points, 0xE000-0xF8FF.  Refer to
     * http://www.google.com.au/search?&q=unicode+pua&btnG=Search
     * NOTE: A class was used instead of an Enum so that it could be extended in Protractor
     *
     * @enum {string}
     */
    class Key {
        static NULL: string;
        static CANCEL: string;  // ^break
        static HELP: string;
        static BACK_SPACE: string;
        static TAB: string;
        static CLEAR: string;
        static RETURN: string;
        static ENTER: string;
        static SHIFT: string;
        static CONTROL: string;
        static ALT: string;
        static PAUSE: string;
        static ESCAPE: string;
        static SPACE: string;
        static PAGE_UP: string;
        static PAGE_DOWN: string;
        static END: string;
        static HOME: string;
        static ARROW_LEFT: string;
        static LEFT: string;
        static ARROW_UP: string;
        static UP: string;
        static ARROW_RIGHT: string;
        static RIGHT: string;
        static ARROW_DOWN: string;
        static DOWN: string;
        static INSERT: string;
        static DELETE: string;
        static SEMICOLON: string;
        static EQUALS: string;

        static NUMPAD0: string;  // number pad keys
        static NUMPAD1: string;
        static NUMPAD2: string;
        static NUMPAD3: string;
        static NUMPAD4: string;
        static NUMPAD5: string;
        static NUMPAD6: string;
        static NUMPAD7: string;
        static NUMPAD8: string;
        static NUMPAD9: string;
        static MULTIPLY: string;
        static ADD: string;
        static SEPARATOR: string;
        static SUBTRACT: string;
        static DECIMAL: string;
        static DIVIDE: string;

        static F1: string;  // function keys
        static F2: string;
        static F3: string;
        static F4: string;
        static F5: string;
        static F6: string;
        static F7: string;
        static F8: string;
        static F9: string;
        static F10: string;
        static F11: string;
        static F12: string;

        static COMMAND: string;  // Apple command key
        static META: string;   // alias for Windows key

        /**
         * Simulate pressing many keys at once in a "chord". Takes a sequence of
         * {@link webdriver.Key}s or strings, appends each of the values to a string,
         * and adds the chord termination key ({@link webdriver.Key.NULL}) and returns
         * the resultant string.
         *
         * Note: when the low-level webdriver key handlers see Keys.NULL, active
         * modifier keys (CTRL/ALT/SHIFT/etc) release via a keyup event.
         *
         * @param {...string} var_args The key sequence to concatenate.
         * @return {string} The null-terminated key sequence.
         * @see http://code.google.com/p/webdriver/issues/detail?id=79
         */
        static chord(...var_args: string[]): string;
    }

    /**
     * Class for defining sequences of complex user interactions. Each sequence
     * will not be executed until {@link #perform} is called.
     *
     * <p>Example:<pre><code>
     *   new webdriver.ActionSequence(driver).
     *       keyDown(webdriver.Key.SHIFT).
     *       click(element1).
     *       click(element2).
     *       dragAndDrop(element3, element4).
     *       keyUp(webdriver.Key.SHIFT).
     *       perform();
     * </pre></code>
     *
     */
    class ActionSequence {

        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The driver instance to use.
         * @constructor
         */
        constructor(driver: webdriver.WebDriver);

        //endregion

        //region Methods

        /**
         * Executes this action sequence.
         * @return {!webdriver.promise.Promise} A promise that will be resolved once
         *     this sequence has completed.
         */
        perform(): webdriver.promise.Promise;

        /**
         * Moves the mouse.  The location to move to may be specified in terms of the
         * mouse's current location, an offset relative to the top-left corner of an
         * element, or an element (in which case the middle of the element is used).
         * @param {(!webdriver.WebElement|{x: number, y: number})} location The
         *     location to drag to, as either another WebElement or an offset in pixels.
         * @param {{x: number, y: number}=} opt_offset An optional offset, in pixels.
         *     Defaults to (0, 0).
         * @return {!webdriver.ActionSequence} A self reference.
         */
        mouseMove(location: webdriver.WebElement, opt_offset?: ILocation): ActionSequence
        mouseMove(location: ILocation): ActionSequence

        /**
         * Presses a mouse button. The mouse button will not be released until
         * {@link #mouseUp} is called, regardless of whether that call is made in this
         * sequence or another. The behavior for out-of-order events (e.g. mouseDown,
         * click) is undefined.
         *
         * <p>If an element is provided, the mouse will first be moved to the center
         * of that element. This is equivalent to:
         * <pre><code>sequence.mouseMove(element).mouseDown()</code></pre>
         *
         * <p>Warning: this method currently only supports the left mouse button. See
         * http://code.google.com/p/selenium/issues/detail?id=4047
         *
         * @param {(webdriver.WebElement|webdriver.Button)=} opt_elementOrButton Either
         *     the element to interact with or the button to click with.
         *     Defaults to {@link webdriver.Button.LEFT} if neither an element nor
         *     button is specified.
         * @param {webdriver.Button=} opt_button The button to use. Defaults to
         *     {@link webdriver.Button.LEFT}. Ignored if a button is provided as the
         *     first argument.
         * @return {!webdriver.ActionSequence} A self reference.
         */
        mouseDown(opt_elementOrButton?: webdriver.WebElement, opt_button?: number): ActionSequence;
        mouseDown(opt_elementOrButton?: number): ActionSequence;

        /**
         * Releases a mouse button. Behavior is undefined for calling this function
         * without a previous call to {@link #mouseDown}.
         *
         * <p>If an element is provided, the mouse will first be moved to the center
         * of that element. This is equivalent to:
         * <pre><code>sequence.mouseMove(element).mouseUp()</code></pre>
         *
         * <p>Warning: this method currently only supports the left mouse button. See
         * http://code.google.com/p/selenium/issues/detail?id=4047
         *
         * @param {(webdriver.WebElement|webdriver.Button)=} opt_elementOrButton Either
         *     the element to interact with or the button to click with.
         *     Defaults to {@link webdriver.Button.LEFT} if neither an element nor
         *     button is specified.
         * @param {webdriver.Button=} opt_button The button to use. Defaults to
         *     {@link webdriver.Button.LEFT}. Ignored if a button is provided as the
         *     first argument.
         * @return {!webdriver.ActionSequence} A self reference.
         */
        mouseUp(opt_elementOrButton?: webdriver.WebElement, opt_button?: number): ActionSequence;
        mouseUp(opt_elementOrButton?: number): ActionSequence;

        /**
         * Convenience function for performing a "drag and drop" manuever. The target
         * element may be moved to the location of another element, or by an offset (in
         * pixels).
         * @param {!webdriver.WebElement} element The element to drag.
         * @param {(!webdriver.WebElement|{x: number, y: number})} location The
         *     location to drag to, either as another WebElement or an offset in pixels.
         * @return {!webdriver.ActionSequence} A self reference.
         */
        dragAndDrop(element: webdriver.WebElement, location: webdriver.WebElement): ActionSequence;
        dragAndDrop(element: webdriver.WebElement, location: ILocation): ActionSequence;

        /**
         * Clicks a mouse button.
         *
         * <p>If an element is provided, the mouse will first be moved to the center
         * of that element. This is equivalent to:
         * <pre><code>sequence.mouseMove(element).click()</code></pre>
         *
         * @param {(webdriver.WebElement|webdriver.Button)=} opt_elementOrButton Either
         *     the element to interact with or the button to click with.
         *     Defaults to {@link webdriver.Button.LEFT} if neither an element nor
         *     button is specified.
         * @param {webdriver.Button=} opt_button The button to use. Defaults to
         *     {@link webdriver.Button.LEFT}. Ignored if a button is provided as the
         *     first argument.
         * @return {!webdriver.ActionSequence} A self reference.
         */
        click(opt_elementOrButton?: webdriver.WebElement, opt_button?: number): ActionSequence;
        click(opt_elementOrButton?: number): ActionSequence;

        /**
         * Double-clicks a mouse button.
         *
         * <p>If an element is provided, the mouse will first be moved to the center of
         * that element. This is equivalent to:
         * <pre><code>sequence.mouseMove(element).doubleClick()</code></pre>
         *
         * <p>Warning: this method currently only supports the left mouse button. See
         * http://code.google.com/p/selenium/issues/detail?id=4047
         *
         * @param {(webdriver.WebElement|webdriver.Button)=} opt_elementOrButton Either
         *     the element to interact with or the button to click with.
         *     Defaults to {@link webdriver.Button.LEFT} if neither an element nor
         *     button is specified.
         * @param {webdriver.Button=} opt_button The button to use. Defaults to
         *     {@link webdriver.Button.LEFT}. Ignored if a button is provided as the
         *     first argument.
         * @return {!webdriver.ActionSequence} A self reference.
         */
        doubleClick(opt_elementOrButton?: webdriver.WebElement, opt_button?: number): ActionSequence;
        doubleClick(opt_elementOrButton?: number): ActionSequence;

        /**
         * Performs a modifier key press. The modifier key is <em>not released</em>
         * until {@link #keyUp} or {@link #sendKeys} is called. The key press will be
         * targetted at the currently focused element.
         * @param {!webdriver.Key} key The modifier key to push. Must be one of
         *     {ALT, CONTROL, SHIFT, COMMAND, META}.
         * @return {!webdriver.ActionSequence} A self reference.
         * @throws {Error} If the key is not a valid modifier key.
         */
        keyDown(key: string): ActionSequence;

        /**
         * Performs a modifier key release. The release is targetted at the currently
         * focused element.
         * @param {!webdriver.Key} key The modifier key to release. Must be one of
         *     {ALT, CONTROL, SHIFT, COMMAND, META}.
         * @return {!webdriver.ActionSequence} A self reference.
         * @throws {Error} If the key is not a valid modifier key.
         */
        keyUp(key: string): ActionSequence;

        /**
         * Simulates typing multiple keys. Each modifier key encountered in the
         * sequence will not be released until it is encountered again. All key events
         * will be targetted at the currently focused element.
         * @param {...(string|!webdriver.Key|!Array.<(string|!webdriver.Key)>)} var_args
         *     The keys to type.
         * @return {!webdriver.ActionSequence} A self reference.
         * @throws {Error} If the key is not a valid modifier key.
         */
        sendKeys(...var_args: any[]): ActionSequence;

        //endregion
    }

    /**
     * Represents a modal dialog such as {@code alert}, {@code confirm}, or
     * {@code prompt}. Provides functions to retrieve the message displayed with
     * the alert, accept or dismiss the alert, and set the response text (in the
     * case of {@code prompt}).
     * @extends {webdriver.promise.Deferred}
     */
    class Alert extends webdriver.promise.Deferred {

        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The driver controlling the browser this
         *     alert is attached to.
         * @param {!(string|webdriver.promise.Promise)} text Either the message text
         *     displayed with this alert, or a promise that will be resolved to said
         *     text.
         * @constructor
         */
        constructor(driver: webdriver.WebDriver, text: string);
        constructor(driver: webdriver.WebDriver, text: webdriver.promise.Promise);

        //endregion

        //region Methods

        /**
         * Retrieves the message text displayed with this alert. For instance, if the
         * alert were opened with alert("hello"), then this would return "hello".
         * @return {!webdriver.promise.Promise} A promise that will be resolved to the
         *     text displayed with this alert.
         */
        getText(): webdriver.promise.Promise;

        /**
         * Accepts this alert.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     this command has completed.
         */
        accept(): webdriver.promise.Promise;

        /**
         * Dismisses this alert.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     this command has completed.
         */
        dismiss(): webdriver.promise.Promise;

        /**
         * Sets the response text on this alert. This command will return an error if
         * the underlying alert does not support response text (e.g. window.alert and
         * window.confirm).
         * @param {string} text The text to set.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     this command has completed.
         */
        sendKeys(text: string): webdriver.promise.Promise;

        //endregion

    }

    /**
     * An error returned to indicate that there is an unhandled modal dialog on the
     * current page.
     * @extends {bot.Error}
     */
    class UnhandledAlertError extends webdriver.error.Error {
        //region Constructors

        /**
         * @param {string} message The error message.
         * @param {!webdriver.Alert} alert The alert handle.
         * @constructor
         */
        constructor(message: string, alert: webdriver.Alert);

        //endregion

        //region Methods

        /**
         * @return {!webdriver.Alert} The open alert.
         */
        getAlert(): webdriver.Alert;

        //endregion
    }

    /**
     * Recognized browser names.
     * @enum {string}
     */
    class Browser {
        static ANDROID: string;
        static CHROME: string;
        static FIREFOX: string;
        static INTERNET_EXPLORER: string;
        static IPAD: string;
        static IPHONE: string;
        static OPERA: string;
        static PHANTOM_JS: string;
        static SAFARI: string;
        static HTMLUNIT: string;
    }

    /**
     * @extends {webdriver.AbstractBuilder}
     */
    class Builder extends AbstractBuilder {

        //region Constructors

        /**
         * @constructor
         */
        constructor();

        //endregion

        //region Static Properties

        /**
         * Environment variable that defines the session ID of an existing WebDriver
         * session to use when creating clients. If set, all new Builder instances will
         * default to creating clients that use this session. To create a new session,
         * use {@code #useExistingSession(boolean)}. The use of this environment
         * variable requires that {@link webdriver.AbstractBuilder.SERVER_URL_ENV} also
         * be set.
         * @type {string}
         * @const
         * @see webdriver.process.getEnv
         */
        static SESSION_ID_ENV: string;

        //endregion

        //region Methods

        /**
         * Configures the builder to create a client that will use an existing WebDriver
         * session.
         * @param {string} id The existing session ID to use.
         * @return {!webdriver.AbstractBuilder} This Builder instance for chain calling.
         */
        usingSession(id: string): webdriver.AbstractBuilder;

        /**
         * @return {string} The ID of the session, if any, this builder is configured
         *     to reuse.
         */
        getSession(): string;

        /**
         * @override
         */
        build(): webdriver.WebDriver;

        //endregion
    }

    /**
     * Common webdriver capability keys.
     * @enum {string}
     */
    class Capability {

        /**
         * Indicates whether a driver should accept all SSL certs by default. This
         * capability only applies when requesting a new session. To query whether
         * a driver can handle insecure SSL certs, see
         * {@link webdriver.Capability.SECURE_SSL}.
         */
        static ACCEPT_SSL_CERTS: string;


        /**
         * The browser name. Common browser names are defined in the
         * {@link webdriver.Browser} enum.
         */
        static BROWSER_NAME: string;

        /**
         * Whether the driver is capable of handling modal alerts (e.g. alert,
         * confirm, prompt). To define how a driver <i>should</i> handle alerts,
         * use {@link webdriver.Capability.UNEXPECTED_ALERT_BEHAVIOR}.
         */
        static HANDLES_ALERTS: string;

        /**
         * Key for the logging driver logging preferences.
         */
        static LOGGING_PREFS: string;

        /**
         * Describes the platform the browser is running on. Will be one of
         * ANDROID, IOS, LINUX, MAC, UNIX, or WINDOWS. When <i>requesting</i> a
         * session, ANY may be used to indicate no platform preference (this is
         * semantically equivalent to omitting the platform capability).
         */
        static PLATFORM: string;

        /**
         * Describes the proxy configuration to use for a new WebDriver session.
         */
        static PROXY: string;

        /** Whether the driver supports changing the brower's orientation. */
        static ROTATABLE: string;

        /**
         * Whether a driver is only capable of handling secure SSL certs. To request
         * that a driver accept insecure SSL certs by default, use
         * {@link webdriver.Capability.ACCEPT_SSL_CERTS}.
         */
        static SECURE_SSL: string;

        /** Whether the driver supports manipulating the app cache. */
       static SUPPORTS_APPLICATION_CACHE: string;

        /**
         * Whether the driver supports controlling the browser's internet
         * connectivity.
         */
        static SUPPORTS_BROWSER_CONNECTION: string;

        /** Whether the driver supports locating elements with CSS selectors. */
        static SUPPORTS_CSS_SELECTORS: string;

        /** Whether the browser supports JavaScript. */
        static SUPPORTS_JAVASCRIPT: string;

        /** Whether the driver supports controlling the browser's location info. */
        static SUPPORTS_LOCATION_CONTEXT: string;

        /** Whether the driver supports taking screenshots. */
        static TAKES_SCREENSHOT: string;

        /**
         * Defines how the driver should handle unexpected alerts. The value should
         * be one of "accept", "dismiss", or "ignore.
         */
        static UNEXPECTED_ALERT_BEHAVIOR: string;

        /** Defines the browser version. */
        static VERSION: string;
    }

    class Capabilities {
        //region Constructors

        /**
         * @param {(webdriver.Capabilities|Object)=} opt_other Another set of
         *     capabilities to merge into this instance.
         * @constructor
         */
        constructor(opt_other?: Capabilities);
        constructor(opt_other?: any);

        //endregion

        //region Methods

        /** @return {!Object} The JSON representation of this instance. */
        toJSON(): any;

        /**
         * Merges another set of capabilities into this instance. Any duplicates in
         * the provided set will override those already set on this instance.
         * @param {!(webdriver.Capabilities|Object)} other The capabilities to
         *     merge into this instance.
         * @return {!webdriver.Capabilities} A self reference.
         */
        merge(other: Capabilities): Capabilities;
        merge(other: any): Capabilities;

        /**
         * @param {string} key The capability to set.
         * @param {*} value The capability value.  Capability values must be JSON
         *     serializable. Pass {@code null} to unset the capability.
         * @return {!webdriver.Capabilities} A self reference.
         */
        set(key: string, value: any): Capabilities;

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

        //endregion

        //region Static Methods

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for Android.
         */
        static android(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for Chrome.
         */
        static chrome(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for Firefox.
         */
        static firefox(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for
         *     Internet Explorer.
         */
        static ie(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for iPad.
         */
        static ipad(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for iPhone.
         */
        static iphone(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for Opera.
         */
        static opera(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for
         *     PhantomJS.
         */
        static phantomjs(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for Safari.
         */
        static safari(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for HTMLUnit.
         */
        static htmlunit(): Capabilities;

        /**
         * @return {!webdriver.Capabilities} A basic set of capabilities for HTMLUnit
         *                                   with enabled Javascript.
         */
        static htmlunitwithjs(): Capabilities;

        //endregion
    }

    /**
     * An enumeration of valid command string.
     * NOTE: A Class was used instead of an Enum so that the class could be extended in Protractor.
     */
    class CommandName {
        static GET_SERVER_STATUS: string;

        static NEW_SESSION: string;
        static GET_SESSIONS: string;
        static DESCRIBE_SESSION: string;

        static CLOSE: string;
        static QUIT: string;

        static GET_CURRENT_URL: string;
        static GET: string;
        static GO_BACK: string;
        static GO_FORWARD: string;
        static REFRESH: string;

        static ADD_COOKIE: string;
        static GET_COOKIE: string;
        static GET_ALL_COOKIES: string;
        static DELETE_COOKIE: string;
        static DELETE_ALL_COOKIES: string;

        static GET_ACTIVE_ELEMENT: string;
        static FIND_ELEMENT: string;
        static FIND_ELEMENTS: string;
        static FIND_CHILD_ELEMENT: string;
        static FIND_CHILD_ELEMENTS: string;

        static CLEAR_ELEMENT: string;
        static CLICK_ELEMENT: string;
        static SEND_KEYS_TO_ELEMENT: string;
        static SUBMIT_ELEMENT: string;

        static GET_CURRENT_WINDOW_HANDLE: string;
        static GET_WINDOW_HANDLES: string;
        static GET_WINDOW_POSITION: string;
        static SET_WINDOW_POSITION: string;
        static GET_WINDOW_SIZE: string;
        static SET_WINDOW_SIZE: string;
        static MAXIMIZE_WINDOW: string;

        static SWITCH_TO_WINDOW: string;
        static SWITCH_TO_FRAME: string;
        static GET_PAGE_SOURCE: string;
        static GET_TITLE: string;

        static EXECUTE_SCRIPT: string;
        static EXECUTE_ASYNC_SCRIPT: string;

        static GET_ELEMENT_TEXT: string;
        static GET_ELEMENT_TAG_NAME: string;
        static IS_ELEMENT_SELECTED: string;
        static IS_ELEMENT_ENABLED: string;
        static IS_ELEMENT_DISPLAYED: string;
        static GET_ELEMENT_LOCATION: string;
        static GET_ELEMENT_LOCATION_IN_VIEW: string;
        static GET_ELEMENT_SIZE: string;
        static GET_ELEMENT_ATTRIBUTE: string;
        static GET_ELEMENT_VALUE_OF_CSS_PROPERTY: string;
        static ELEMENT_EQUALS: string;

        static SCREENSHOT: string;
        static IMPLICITLY_WAIT: string;
        static SET_SCRIPT_TIMEOUT: string;
        static SET_TIMEOUT: string;

        static ACCEPT_ALERT: string;
        static DISMISS_ALERT: string;
        static GET_ALERT_TEXT: string;
        static SET_ALERT_TEXT: string;

        static EXECUTE_SQL: string;
        static GET_LOCATION: string;
        static SET_LOCATION: string;
        static GET_APP_CACHE: string;
        static GET_APP_CACHE_STATUS: string;
        static CLEAR_APP_CACHE: string;
        static IS_BROWSER_ONLINE: string;
        static SET_BROWSER_ONLINE: string;

        static GET_LOCAL_STORAGE_ITEM: string;
        static GET_LOCAL_STORAGE_KEYS: string;
        static SET_LOCAL_STORAGE_ITEM: string;
        static REMOVE_LOCAL_STORAGE_ITEM: string;
        static CLEAR_LOCAL_STORAGE: string;
        static GET_LOCAL_STORAGE_SIZE: string;

        static GET_SESSION_STORAGE_ITEM: string;
        static GET_SESSION_STORAGE_KEYS: string;
        static SET_SESSION_STORAGE_ITEM: string;
        static REMOVE_SESSION_STORAGE_ITEM: string;
        static CLEAR_SESSION_STORAGE: string;
        static GET_SESSION_STORAGE_SIZE: string;

        static SET_SCREEN_ORIENTATION: string;
        static GET_SCREEN_ORIENTATION: string;

        // These belong to the Advanced user interactions - an element is
        // optional for these commands.
        static CLICK: string;
        static DOUBLE_CLICK: string;
        static MOUSE_DOWN: string;
        static MOUSE_UP: string;
        static MOVE_TO: string;
        static SEND_KEYS_TO_ACTIVE_ELEMENT: string;

        // These belong to the Advanced Touch API
        static TOUCH_SINGLE_TAP: string;
        static TOUCH_DOWN: string;
        static TOUCH_UP: string;
        static TOUCH_MOVE: string;
        static TOUCH_SCROLL: string;
        static TOUCH_DOUBLE_TAP: string;
        static TOUCH_LONG_PRESS: string;
        static TOUCH_FLICK: string;

        static GET_AVAILABLE_LOG_TYPES: string;
        static GET_LOG: string;
        static GET_SESSION_LOGS: string;
    }

    /**
     * Describes a command to be executed by the WebDriverJS framework.
     * @param {!webdriver.CommandName} name The name of this command.
     * @constructor
     */
    class Command {
        //region Constructors

        /**
         * @param {!webdriver.CommandName} name The name of this command.
         * @constructor
         */
        constructor(name: string);

        //endregion

        //region Methods

        /**
         * @return {!webdriver.CommandName} This command's name.
         */
        getName(): string;

        /**
         * Sets a parameter to send with this command.
         * @param {string} name The parameter name.
         * @param {*} value The parameter value.
         * @return {!webdriver.Command} A self reference.
         */
        setParameter(name: string, value: any): webdriver.Command;

        /**
         * Sets the parameters for this command.
         * @param {!Object.<*>} parameters The command parameters.
         * @return {!webdriver.Command} A self reference.
         */
        setParameters(parameters: any): webdriver.Command;

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

        //endregion
    }

    /**
     * Handles the execution of {@code webdriver.Command} objects.
     */
    interface CommandExecutor {
        /**
         * Executes the given {@code command}. If there is an error executing the
         * command, the provided callback will be invoked with the offending error.
         * Otherwise, the callback will be invoked with a null Error and non-null
         * {@link bot.response.ResponseObject} object.
         * @param {!webdriver.Command} command The command to execute.
         * @param {function(Error, !bot.response.ResponseObject=)} callback the function
         *     to invoke when the command response is ready.
         */
        execute(command: webdriver.Command, callback: (error: Error, responseObject: any) => any ): void;
    }

    /**
     * Object that can emit events for others to listen for. This is used instead
     * of Closure's event system because it is much more light weight. The API is
     * based on Node's EventEmitters.
     */
    class EventEmitter {
        //region Constructors

        /**
         * @constructor
         */
        constructor();

        //endregion

        //region Methods

        /**
         * Fires an event and calls all listeners.
         * @param {string} type The type of event to emit.
         * @param {...*} var_args Any arguments to pass to each listener.
         */
        emit(type: string, ...var_args: any[]): void;

        /**
         * Returns a mutable list of listeners for a specific type of event.
         * @param {string} type The type of event to retrieve the listeners for.
         * @return {!Array.<{fn: !Function, oneshot: boolean,
         *                   scope: (Object|undefined)}>} The registered listeners for
         *     the given event type.
         */
        listeners(type: string): Array<{fn: any; oneshot: boolean; scope: any;}>;

        /**
         * Registers a listener.
         * @param {string} type The type of event to listen for.
         * @param {!Function} listenerFn The function to invoke when the event is fired.
         * @param {Object=} opt_scope The object in whose scope to invoke the listener.
         * @return {!webdriver.EventEmitter} A self reference.
         */
        addListener(type: string, listenerFn: any, opt_scope?:any): EventEmitter;

        /**
         * Registers a one-time listener which will be called only the first time an
         * event is emitted, after which it will be removed.
         * @param {string} type The type of event to listen for.
         * @param {!Function} listenerFn The function to invoke when the event is fired.
         * @param {Object=} opt_scope The object in whose scope to invoke the listener.
         * @return {!webdriver.EventEmitter} A self reference.
         */
        once(type: string, listenerFn: any, opt_scope?: any): EventEmitter;

        /**
         * An alias for {@code #addListener()}.
         * @param {string} type The type of event to listen for.
         * @param {!Function} listenerFn The function to invoke when the event is fired.
         * @param {Object=} opt_scope The object in whose scope to invoke the listener.
         * @return {!webdriver.EventEmitter} A self reference.
         */
        on(type: string, listenerFn: any, opt_scope?:any): EventEmitter;

        /**
         * Removes a previously registered event listener.
         * @param {string} type The type of event to unregister.
         * @param {!Function} listenerFn The handler function to remove.
         * @return {!webdriver.EventEmitter} A self reference.
         */
        removeListener(type: string, listenerFn: any): EventEmitter;

        /**
         * Removes all listeners for a specific type of event. If no event is
         * specified, all listeners across all types will be removed.
         * @param {string=} opt_type The type of event to remove listeners from.
         * @return {!webdriver.EventEmitter} A self reference.
         */
        removeAllListeners(opt_type?: string): EventEmitter;

        //endregion
    }

    /**
     * @implements {webdriver.CommandExecutor}
     */
    class FirefoxDomExecutor implements webdriver.CommandExecutor {
        //region Constructors

        /**
         * @constructor
         */
        constructor();

        //endregion

        //region Static Methods

        /**
         * @return {boolean} Whether the current environment supports the
         *     FirefoxDomExecutor.
         */
        static isAvailable(): boolean;

        //endretion

        //region Methods

        /** @override */
        execute(command: webdriver.Command, callback: (error: Error, responseObject: any) => any ): void;

        //endregion
    }

    /**
     * Interface for navigating back and forth in the browser history.
     */
    class WebDriverNavigation {
        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The parent driver.
         * @constructor
         */
        constructor(driver: webdriver.WebDriver);

        //endregion

        //region Methods

        /**
         * Schedules a command to navigate to a new URL.
         * @param {string} url The URL to navigate to.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     URL has been loaded.
         */
        to(url: string): webdriver.promise.Promise;

        /**
         * Schedules a command to move backwards in the browser history.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     navigation event has completed.
         */
        back(): webdriver.promise.Promise;

        /**
         * Schedules a command to move forwards in the browser history.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     navigation event has completed.
         */
        forward(): webdriver.promise.Promise;

        /**
         * Schedules a command to refresh the current page.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     navigation event has completed.
         */
        refresh(): webdriver.promise.Promise;

        //endregion
    }

    /**
     * Provides methods for managing browser and driver state.
     */
    class WebDriverOptions {
        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The parent driver.
         * @constructor
         */
        constructor(driver: webdriver.WebDriver);

        //endregion

        //region Methods

        /**
         * Schedules a command to add a cookie.
         * @param {string} name The cookie name.
         * @param {string} value The cookie value.
         * @param {string=} opt_path The cookie path.
         * @param {string=} opt_domain The cookie domain.
         * @param {boolean=} opt_isSecure Whether the cookie is secure.
         * @param {(number|!Date)=} opt_expiry When the cookie expires. If specified as
         *     a number, should be in milliseconds since midnight, January 1, 1970 UTC.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     cookie has been added to the page.
         */
        addCookie(name: string, value: string, opt_path?: string, opt_domain?: string, opt_isSecure?: boolean, opt_expiry?: number): webdriver.promise.Promise;
        addCookie(name: string, value: string, opt_path?: string, opt_domain?: string, opt_isSecure?: boolean, opt_expiry?: Date): webdriver.promise.Promise;

        /**
         * Schedules a command to delete all cookies visible to the current page.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when all
         *     cookies have been deleted.
         */
        deleteAllCookies(): webdriver.promise.Promise;

        /**
         * Schedules a command to delete the cookie with the given name. This command is
         * a no-op if there is no cookie with the given name visible to the current
         * page.
         * @param {string} name The name of the cookie to delete.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     cookie has been deleted.
         */
        deleteCookie(name: string): webdriver.promise.Promise;

        /**
         * Schedules a command to retrieve all cookies visible to the current page.
         * Each cookie will be returned as a JSON object as described by the WebDriver
         * wire protocol.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     cookies visible to the current page.
         * @see http://code.google.com/p/selenium/wiki/JsonWireProtocol#Cookie_JSON_Object
         */
        getCookies(): webdriver.promise.Promise;

        /**
         * Schedules a command to retrieve the cookie with the given name. Returns null
         * if there is no such cookie. The cookie will be returned as a JSON object as
         * described by the WebDriver wire protocol.
         * @param {string} name The name of the cookie to retrieve.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     named cookie, or {@code null} if there is no such cookie.
         * @see http://code.google.com/p/selenium/wiki/JsonWireProtocol#Cookie_JSON_Object
         */
        getCookie(name: string): webdriver.promise.Promise;

        /**
         * @return {!webdriver.WebDriver.Logs} The interface for managing driver
         *     logs.
         */
        logs(): webdriver.WebDriverLogs;

        /**
         * @return {!webdriver.WebDriver.Timeouts} The interface for managing driver
         *     timeouts.
         */
        timeouts(): webdriver.WebDriverTimeouts;

        /**
         * @return {!webdriver.WebDriver.Window} The interface for managing the
         *     current window.
         */
        window(): webdriver.WebDriverWindow;

        //endregion
    }

    /**
     * An interface for managing timeout behavior for WebDriver instances.
     */
    class WebDriverTimeouts {
        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The parent driver.
         * @constructor
         */
        constructor(driver: webdriver.WebDriver);

        //endregion

        //region Methods

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
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     implicit wait timeout has been set.
         */
        implicitlyWait(ms: number): webdriver.promise.Promise;

        /**
         * Sets the amount of time to wait, in milliseconds, for an asynchronous script
         * to finish execution before returning an error. If the timeout is less than or
         * equal to 0, the script will be allowed to run indefinitely.
         *
         * @param {number} ms The amount of time to wait, in milliseconds.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     script timeout has been set.
         */
        setScriptTimeout(ms: number): webdriver.promise.Promise;

        /**
         * Sets the amount of time to wait for a page load to complete before returning
         * an error.  If the timeout is negative, page loads may be indefinite.
         * @param {number} ms The amount of time to wait, in milliseconds.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the timeout has been set.
         */
        pageLoadTimeout(ms: number): webdriver.promise.Promise;

        //endregion
    }

    /**
     * An interface for managing the current window.
     */
    class WebDriverWindow {

        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The parent driver.
         * @constructor
         */
        constructor(driver: webdriver.WebDriver);

        //endregion

        //region Methods

        /**
         * Retrieves the window's current position, relative to the top left corner of
         * the screen.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     window's position in the form of a {x:number, y:number} object literal.
         */
        getPosition(): webdriver.promise.Promise;

        /**
         * Repositions the current window.
         * @param {number} x The desired horizontal position, relative to the left side
         *     of the screen.
         * @param {number} y The desired vertical position, relative to the top of the
         *     of the screen.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     command has completed.
         */
        setPosition(x: number, y: number): webdriver.promise.Promise;

        /**
         * Retrieves the window's current size.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     window's size in the form of a {width:number, height:number} object
         *     literal.
         */
        getSize(): webdriver.promise.Promise;

        /**
         * Resizes the current window.
         * @param {number} width The desired window width.
         * @param {number} height The desired window height.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     command has completed.
         */
        setSize(width: number, height: number): webdriver.promise.Promise;

        /**
         * Maximizes the current window.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     command has completed.
         */
        maximize(): webdriver.promise.Promise;

        //endregion
    }

    /**
     * Interface for managing WebDriver log records.
     */
    class WebDriverLogs {

        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The parent driver.
         * @constructor
         */
        constructor(driver: webdriver.WebDriver);

        //endregion

        //region

        /**
         * Fetches available log entries for the given type.
         *
         * <p/>Note that log buffers are reset after each call, meaning that
         * available log entries correspond to those entries not yet returned for a
         * given log type. In practice, this means that this call will return the
         * available log entries since the last call, or from the start of the
         * session.
         *
         * @param {!webdriver.logging.Type} type The desired log type.
         * @return {!webdriver.promise.Promise.<!Array.<!webdriver.logging.Entry>>} A
         *   promise that will resolve to a list of log entries for the specified
         *   type.
         */
        get(type: string): webdriver.promise.Promise;

        /**
         * Retrieves the log types available to this driver.
         * @return {!webdriver.promise.Promise.<!Array.<!webdriver.logging.Type>>} A
         *     promise that will resolve to a list of available log types.
         */
        getAvailableLogTypes(): webdriver.promise.Promise;

        //endregion
    }

    /**
     * An interface for changing the focus of the driver to another frame or window.
     */
    class WebDriverTargetLocator {

        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The parent driver.
         * @constructor
         */
        constructor(driver: webdriver.WebDriver);

        //endregion

        //region Methods

        /**
         * Schedules a command retrieve the {@code document.activeElement} element on
         * the current document, or {@code document.body} if activeElement is not
         * available.
         * @return {!webdriver.WebElement} The active element.
         */
        activeElement(): webdriver.WebElement;

        /**
         * Schedules a command to switch focus of all future commands to the first frame
         * on the page.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     driver has changed focus to the default content.
         */
        defaultContent(): webdriver.promise.Promise;

        /**
         * Schedules a command to switch the focus of all future commands to another
         * frame on the page.
         * <p/>
         * If the frame is specified by a number, the command will switch to the frame
         * by its (zero-based) index into the {@code window.frames} collection.
         * <p/>
         * If the frame is specified by a string, the command will select the frame by
         * its name or ID. To select sub-frames, simply separate the frame names/IDs by
         * dots. As an example, "main.child" will select the frame with the name "main"
         * and then its child "child".
         * <p/>
         * If the specified frame can not be found, the deferred result will errback
         * with a {@code bot.ErrorCode.NO_SUCH_FRAME} error.
         * @param {string|number} nameOrIndex The frame locator.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     driver has changed focus to the specified frame.
         */
        frame(nameOrIndex: string): webdriver.promise.Promise;
        frame(nameOrIndex: number): webdriver.promise.Promise;

        /**
         * Schedules a command to switch the focus of all future commands to another
         * window. Windows may be specified by their {@code window.name} attribute or
         * by its handle (as returned by {@code webdriver.WebDriver#getWindowHandles}).
         * <p/>
         * If the specificed window can not be found, the deferred result will errback
         * with a {@code bot.ErrorCode.NO_SUCH_WINDOW} error.
         * @param {string} nameOrHandle The name or window handle of the window to
         *     switch focus to.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     driver has changed focus to the specified window.
         */
        window(nameOrHandle: string): webdriver.promise.Promise;

        /**
         * Schedules a command to change focus to the active alert dialog. This command
         * will return a {@link bot.ErrorCode.NO_MODAL_DIALOG_OPEN} error if a modal
         * dialog is not currently open.
         * @return {!webdriver.Alert} The open alert.
         */
        alert(): webdriver.Alert;

        //endregion
    }

    /**
     * Creates a new WebDriver client, which provides control over a browser.
     *
     * Every WebDriver command returns a {@code webdriver.promise.Promise} that
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
    class WebDriver {
        //region Constructors

        /**
         * @param {!(webdriver.Session|webdriver.promise.Promise)} session Either a
         *     known session or a promise that will be resolved to a session.
         * @param {!webdriver.CommandExecutor} executor The executor to use when
         *     sending commands to the browser.
         * @param {webdriver.promise.ControlFlow=} opt_flow The flow to
         *     schedule commands through. Defaults to the active flow object.
         * @constructor
         */
         constructor(session: webdriver.Session, executor: webdriver.CommandExecutor, opt_flow?: webdriver.promise.ControlFlow);
         constructor(session: webdriver.promise.Promise, executor: webdriver.CommandExecutor, opt_flow?: webdriver.promise.ControlFlow);

        //endregion

        //region Static Properties

        static Navigation: WebDriverNavigation;
        static Options: WebDriverOptions;
        static Timeouts: WebDriverTimeouts;
        static Window: WebDriverWindow;
        static Logs: WebDriverLogs;
        static TargetLocator: WebDriverTargetLocator;

        //endregion

        //region StaticMethods

        /**
         * Creates a new WebDriver client for an existing session.
         * @param {!webdriver.CommandExecutor} executor Command executor to use when
         *     querying for session details.
         * @param {string} sessionId ID of the session to attach to.
         * @return {!webdriver.WebDriver} A new client for the specified session.
         */
         static attachToSession(executor: webdriver.CommandExecutor, sessionId: string): WebDriver;

        /**
         * Creates a new WebDriver session.
         * @param {!webdriver.CommandExecutor} executor The executor to create the new
         *     session with.
         * @param {!webdriver.Capabilities} desiredCapabilities The desired
         *     capabilities for the new session.
         * @return {!webdriver.WebDriver} The driver for the newly created session.
         */
        static createSession(executor: webdriver.CommandExecutor, desiredCapabilities: webdriver.Capabilities): WebDriver;

        //endregion

        //region Methods

        /**
         * @return {!webdriver.promise.ControlFlow} The control flow used by this
         *     instance.
         */
        controlFlow(): webdriver.promise.ControlFlow;

        /**
         * Schedules a {@code webdriver.Command} to be executed by this driver's
         * {@code webdriver.CommandExecutor}.
         * @param {!webdriver.Command} command The command to schedule.
         * @param {string} description A description of the command for debugging.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     the command result.
         */
        schedule(command: webdriver.Command, description: string): webdriver.promise.Promise;

        /**
         * @return {!webdriver.promise.Promise} A promise for this client's session.
         */
        getSession(): webdriver.promise.Promise;

        /**
         * @return {!webdriver.promise.Promise} A promise that will resolve with the
         *     this instance's capabilities.
         */
        getCapabilities(): webdriver.promise.Promise;

        /**
         * Schedules a command to quit the current session. After calling quit, this
         * instance will be invalidated and may no longer be used to issue commands
         * against the browser.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the command has completed.
         */
        quit(): webdriver.promise.Promise;

        /**
         * Creates a new action sequence using this driver. The sequence will not be
         * scheduled for execution until {@link webdriver.ActionSequence#perform} is
         * called. Example:
         * <pre><code>
         *   driver.actions().
         *       mouseDown(element1).
         *       mouseMove(element2).
         *       mouseUp().
         *       perform();
         * </code></pre>
         * @return {!webdriver.ActionSequence} A new action sequence for this instance.
         */
        actions(): webdriver.ActionSequence;

        /**
         * Schedules a command to execute JavaScript in the context of the currently
         * selected frame or window. The script fragment will be executed as the body
         * of an anonymous function. If the script is provided as a function object,
         * that function will be converted to a string for injection into the target
         * window.
         *
         * Any arguments provided in addition to the script will be included as script
         * arguments and may be referenced using the {@code arguments} object.
         * Arguments may be a boolean, number, string, or {@code webdriver.WebElement}.
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
         * <ul>
         * <li>For a HTML element, the value will resolve to a
         *     {@code webdriver.WebElement}</li>
         * <li>Null and undefined return values will resolve to null</li>
         * <li>Booleans, numbers, and strings will resolve as is</li>
         * <li>Functions will resolve to their string representation</li>
         * <li>For arrays and objects, each member item will be converted according to
         *     the rules above</li>
         * </ul>
         *
         * @param {!(string|Function)} script The script to execute.
         * @param {...*} var_args The arguments to pass to the script.
         * @return {!webdriver.promise.Promise} A promise that will resolve to the
         *    scripts return value.
         */
        executeScript(script: string, ...var_args: any[]): webdriver.promise.Promise;
        executeScript(script: any, ...var_args: any[]): webdriver.promise.Promise;

        /**
         * Schedules a command to execute asynchronous JavaScript in the context of the
         * currently selected frame or window. The script fragment will be executed as
         * the body of an anonymous function. If the script is provided as a function
         * object, that function will be converted to a string for injection into the
         * target window.
         *
         * Any arguments provided in addition to the script will be included as script
         * arguments and may be referenced using the {@code arguments} object.
         * Arguments may be a boolean, number, string, or {@code webdriver.WebElement}.
         * Arrays and objects may also be used as script arguments as long as each item
         * adheres to the types previously mentioned.
         *
         * Unlike executing synchronous JavaScript with
         * {@code webdriver.WebDriver.prototype.executeScript}, scripts executed with
         * this function must explicitly signal they are finished by invoking the
         * provided callback. This callback will always be injected into the
         * executed function as the last argument, and thus may be referenced with
         * {@code arguments[arguments.length - 1]}. The following steps will be taken
         * for resolving this functions return value against the first argument to the
         * script's callback function:
         * <ul>
         * <li>For a HTML element, the value will resolve to a
         *     {@code webdriver.WebElement}</li>
         * <li>Null and undefined return values will resolve to null</li>
         * <li>Booleans, numbers, and strings will resolve as is</li>
         * <li>Functions will resolve to their string representation</li>
         * <li>For arrays and objects, each member item will be converted according to
         *     the rules above</li>
         * </ul>
         *
         * Example #1: Performing a sleep that is synchronized with the currently
         * selected window:
         * <code><pre>
         * var start = new Date().getTime();
         * driver.executeAsyncScript(
         *     'window.setTimeout(arguments[arguments.length - 1], 500);').
         *     then(function() {
         *       console.log('Elapsed time: ' + (new Date().getTime() - start) + ' ms');
         *     });
         * </pre></code>
         *
         * Example #2: Synchronizing a test with an AJAX application:
         * <code><pre>
         * var button = driver.findElement(By.id('compose-button'));
         * button.click();
         * driver.executeAsyncScript(
         *     'var callback = arguments[arguments.length - 1];' +
         *     'mailClient.getComposeWindowWidget().onload(callback);');
         * driver.switchTo().frame('composeWidget');
         * driver.findElement(By.id('to')).sendKEys('dog@example.com');
         * </pre></code>
         *
         * Example #3: Injecting a XMLHttpRequest and waiting for the result. In this
         * example, the inject script is specified with a function literal. When using
         * this format, the function is converted to a string for injection, so it
         * should not reference any symbols not defined in the scope of the page under
         * test.
         * <code><pre>
         * driver.executeAsyncScript(function() {
         *   var callback = arguments[arguments.length - 1];
         *   var xhr = new XMLHttpRequest();
         *   xhr.open("GET", "/resource/data.json", true);
         *   xhr.onreadystatechange = function() {
         *     if (xhr.readyState == 4) {
         *       callback(xhr.resposneText);
         *     }
         *   }
         *   xhr.send('');
         * }).then(function(str) {
         *   console.log(JSON.parse(str)['food']);
         * });
         * </pre></code>
         *
         * @param {!(string|Function)} script The script to execute.
         * @param {...*} var_args The arguments to pass to the script.
         * @return {!webdriver.promise.Promise} A promise that will resolve to the
         *    scripts return value.
         */
        executeAsyncScript(script: string, ...var_args: any[]): webdriver.promise.Promise;
        executeAsyncScript(script: any, ...var_args: any[]): webdriver.promise.Promise;

        /**
         * Schedules a command to execute a custom function.
         * @param {!Function} fn The function to execute.
         * @param {Object=} opt_scope The object in whose scope to execute the function.
         * @param {...*} var_args Any arguments to pass to the function.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     function's result.
         */
        call(fn: any, opt_scope?: any, ...var_args: any[]): webdriver.promise.Promise;

        /**
         * Schedules a command to wait for a condition to hold, as defined by some
         * user supplied function. If any errors occur while evaluating the wait, they
         * will be allowed to propagate.
         * @param {function():boolean|!webdriver.promise.Promise} fn The function to
         *      evaluate as a wait condition.
         * @param {number} timeout How long to wait for the condition to be true.
         * @param {string=} opt_message An optional message to use if the wait times
         *     out.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     wait condition has been satisfied.
         */
        wait(fn: () => any, timeout: number, opt_message?: string): webdriver.promise.Promise;

        /**
         * Schedules a command to make the driver sleep for the given amount of time.
         * @param {number} ms The amount of time, in milliseconds, to sleep.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     sleep has finished.
         */
        sleep(ms: number): webdriver.promise.Promise;

        /**
         * Schedules a command to retrieve they current window handle.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     current window handle.
         */
        getWindowHandle(): webdriver.promise.Promise;

        /**
         * Schedules a command to retrieve the current list of available window handles.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with an
         *     array of window handles.
         */
        getAllWindowHandles(): webdriver.promise.Promise;

        /**
         * Schedules a command to retrieve the current page's source. The page source
         * returned is a representation of the underlying DOM: do not expect it to be
         * formatted or escaped in the same way as the response sent from the web
         * server.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     current page source.
         */
        getPageSource(): webdriver.promise.Promise;

        /**
         * Schedules a command to close the current window.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     this command has completed.
         */
        close(): webdriver.promise.Promise;

        /**
         * Schedules a command to navigate to the given URL.
         * @param {string} url The fully qualified URL to open.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when the
         *     document has finished loading.
         */
        get(url: string): webdriver.promise.Promise;

        /**
         * Schedules a command to retrieve the URL of the current page.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     current URL.
         */
        getCurrentUrl(): webdriver.promise.Promise;

        /**
         * Schedules a command to retrieve the current page's title.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     current page's title.
         */
        getTitle(): webdriver.promise.Promise;

        /**
         * Schedule a command to find an element on the page. If the element cannot be
         * found, a {@code bot.ErrorCode.NO_SUCH_ELEMENT} result will be returned
         * by the driver. Unlike other commands, this error cannot be suppressed. In
         * other words, scheduling a command to find an element doubles as an assert
         * that the element is present on the page. To test whether an element is
         * present on the page, use {@code #isElementPresent} instead.
         *
         * <p>The search criteria for find an element may either be a
         * {@code webdriver.Locator} object, or a simple JSON object whose sole key
         * is one of the accepted locator strategies, as defined by
         * {@code webdriver.Locator.Strategy}. For example, the following two statements
         * are equivalent:
         * <code><pre>
         * var e1 = driver.findElement(By.id('foo'));
         * var e2 = driver.findElement({id:'foo'});
         * </pre></code>
         *
         * <p>When running in the browser, a WebDriver cannot manipulate DOM elements
         * directly; it may do so only through a {@link webdriver.WebElement} reference.
         * This function may be used to generate a WebElement from a DOM element. A
         * reference to the DOM element will be stored in a known location and this
         * driver will attempt to retrieve it through {@link #executeScript}. If the
         * element cannot be found (eg, it belongs to a different document than the
         * one this instance is currently focused on), a
         * {@link bot.ErrorCode.NO_SUCH_ELEMENT} error will be returned.
         *
         * @param {!(webdriver.Locator|Object.<string>|Element)} locatorOrElement The
         *     locator strategy to use when searching for the element, or the actual
         *     DOM element to be located by the server.
         * @param {...} var_args Arguments to pass to {@code #executeScript} if using a
         *     JavaScript locator.  Otherwise ignored.
         * @return {!webdriver.WebElement} A WebElement that can be used to issue
         *     commands against the located element. If the element is not found, the
         *     element will be invalidated and all scheduled commands aborted.
         */
        findElement(locatorOrElement: webdriver.Locator, ...var_args: any[]): webdriver.WebElement;
        findElement(locatorOrElement: any, ...var_args: any[]): webdriver.WebElement;

        /**
         * Schedules a command to test if an element is present on the page.
         *
         * <p>If given a DOM element, this function will check if it belongs to the
         * document the driver is currently focused on. Otherwise, the function will
         * test if at least one element can be found with the given search criteria.
         *
         * @param {!(webdriver.Locator|Object.<string>|Element)} locatorOrElement The
         *     locator strategy to use when searching for the element, or the actual
         *     DOM element to be located by the server.
         * @param {...} var_args Arguments to pass to {@code #executeScript} if using a
         *     JavaScript locator.  Otherwise ignored.
         * @return {!webdriver.promise.Promise} A promise that will resolve to whether
         *     the element is present on the page.
         */
        isElementPresent(locatorOrElement: webdriver.Locator, ...var_args: any[]): webdriver.promise.Promise;
        isElementPresent(locatorOrElement: any, ...var_args: any[]): webdriver.promise.Promise;

        /**
         * Schedule a command to search for multiple elements on the page.
         *
         * @param {webdriver.Locator|Object.<string>} locator The locator
         *     strategy to use when searching for the element.
         * @param {...} var_args Arguments to pass to {@code #executeScript} if using a
         *     JavaScript locator.  Otherwise ignored.
         * @return {!webdriver.promise.Promise} A promise that will be resolved to an
         *     array of the located {@link webdriver.WebElement}s.
         */
        findElements(locator: webdriver.Locator, ...var_args: any[]): webdriver.promise.Promise;
        findElements(locator: any, ...var_args: any[]): webdriver.promise.Promise;

        /**
         * Schedule a command to take a screenshot. The driver makes a best effort to
         * return a screenshot of the following, in order of preference:
         * <ol>
         *   <li>Entire page
         *   <li>Current window
         *   <li>Visible portion of the current frame
         *   <li>The screenshot of the entire display containing the browser
         * </ol>
         *
         * @return {!webdriver.promise.Promise} A promise that will be resolved to the
         *     screenshot as a base-64 encoded PNG.
         */
        takeScreenshot(): webdriver.promise.Promise;

        /**
         * @return {!webdriver.WebDriver.Options} The options interface for this
         *     instance.
         */
        manage(): webdriver.WebDriverOptions;

        /**
         * @return {!webdriver.WebDriver.Navigation} The navigation interface for this
         *     instance.
         */
        navigate(): webdriver.WebDriverNavigation;

        /**
         * @return {!webdriver.WebDriver.TargetLocator} The target locator interface for
         *     this instance.
         */
        switchTo(): webdriver.WebDriverTargetLocator

        //endregion
    }

    /**
     * Represents a DOM element. WebElements can be found by searching from the
     * document root using a {@code webdriver.WebDriver} instance, or by searching
     * under another {@code webdriver.WebElement}:
     *
     *   driver.get('http://www.google.com');
     *   var searchForm = driver.findElement(By.tagName('form'));
     *   var searchBox = searchForm.findElement(By.name('q'));
     *   searchBox.sendKeys('webdriver');
     *
     * The WebElement is implemented as a promise for compatibility with the promise
     * API. It will always resolve itself when its internal state has been fully
     * resolved and commands may be issued against the element. This can be used to
     * catch errors when an element cannot be located on the page:
     *
     *   driver.findElement(By.id('not-there')).then(function(element) {
     *     alert('Found an element that was not expected to be there!');
     *   }, function(error) {
     *     alert('The element was not found, as expected');
     *   });
     *
     * @extends {webdriver.promise.Deferred}
     */
    class WebElement extends webdriver.promise.Deferred {
        //region Constructors

        /**
         * @param {!webdriver.WebDriver} driver The parent WebDriver instance for this
         *     element.
         * @param {!(string|webdriver.promise.Promise)} id Either the opaque ID for the
         *     underlying DOM element assigned by the server, or a promise that will
         *     resolve to that ID or another WebElement.
         * @constructor
         */
        constructor(driver: webdriver.WebDriver, id: webdriver.promise.Promise);
        constructor(driver: webdriver.WebDriver, id: string);

        //endregion

        //region Static Properties

        /**
         * The property key used in the wire protocol to indicate that a JSON object
         * contains the ID of a WebElement.
         * @type {string}
         * @const
         */
        static ELEMENT_KEY: string;

        //endregion

        //region Methods

        /**
         * @return {!webdriver.WebDriver} The parent driver for this instance.
         */
        getDriver(): webdriver.WebDriver;

        /**
         * @return {!webdriver.promise.Promise} A promise that resolves to this
         *     element's JSON representation as defined by the WebDriver wire protocol.
         * @see http://code.google.com/p/selenium/wiki/JsonWireProtocol
         */
        toWireValue(): webdriver.promise.Promise;

        /**
         * Schedule a command to find a descendant of this element. If the element
         * cannot be found, a {@code bot.ErrorCode.NO_SUCH_ELEMENT} result will
         * be returned by the driver. Unlike other commands, this error cannot be
         * suppressed. In other words, scheduling a command to find an element doubles
         * as an assert that the element is present on the page. To test whether an
         * element is present on the page, use {@code #isElementPresent} instead.
         * <p/>
         * The search criteria for find an element may either be a
         * {@code webdriver.Locator} object, or a simple JSON object whose sole key
         * is one of the accepted locator strategies, as defined by
         * {@code webdriver.Locator.Strategy}. For example, the following two
         * statements are equivalent:
         * <code><pre>
         * var e1 = element.findElement(By.id('foo'));
         * var e2 = element.findElement({id:'foo'});
         * </pre></code>
         * <p/>
         * Note that JS locator searches cannot be restricted to a subtree. All such
         * searches are delegated to this instance's parent WebDriver.
         *
         * @param {webdriver.Locator|Object.<string>} locator The locator
         *     strategy to use when searching for the element.
         * @param {...} var_args Arguments to pass to {@code WebDriver#executeScript} if
         *     using a JavaScript locator.  Otherwise ignored.
         * @return {webdriver.WebElement} A WebElement that can be used to issue
         *     commands against the located element. If the element is not found, the
         *     element will be invalidated and all scheduled commands aborted.
         */
        findElement(locator: webdriver.Locator, ...var_args: any[]): WebElement;
        findElement(locator: any, ...var_args: any[]): WebElement;

        /**
         * Schedules a command to test if there is at least one descendant of this
         * element that matches the given search criteria.
         *
         * <p>Note that JS locator searches cannot be restricted to a subtree of the
         * DOM. All such searches are delegated to this instance's parent WebDriver.
         *
         * @param {webdriver.Locator|Object.<string>} locator The locator
         *     strategy to use when searching for the element.
         * @param {...} var_args Arguments to pass to {@code WebDriver#executeScript} if
         *     using a JavaScript locator.  Otherwise ignored.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     whether an element could be located on the page.
         */
        isElementPresent(locator: webdriver.Locator, ...var_args: any[]): webdriver.promise.Promise;
        isElementPresent(locator: any, ...var_args: any[]): webdriver.promise.Promise;

        /**
         * Schedules a command to find all of the descendants of this element that match
         * the given search criteria.
         * <p/>
         * Note that JS locator searches cannot be restricted to a subtree. All such
         * searches are delegated to this instance's parent WebDriver.
         *
         * @param {webdriver.Locator|Object.<string>} locator The locator
         *     strategy to use when searching for the elements.
         * @param {...} var_args Arguments to pass to {@code WebDriver#executeScript} if
         *     using a JavaScript locator.  Otherwise ignored.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with an
         *     array of located {@link webdriver.WebElement}s.
         */
        findElements(locator: webdriver.Locator, ...var_args: any[]): webdriver.promise.Promise;
        findElements(locator: any, ...var_args: any[]): webdriver.promise.Promise;

        /**
         * Schedules a command to click on this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the click command has completed.
         */
        click(): webdriver.promise.Promise;

        /**
         * Schedules a command to type a sequence on the DOM element represented by this
         * instance.
         * <p/>
         * Modifier keys (SHIFT, CONTROL, ALT, META) are stateful; once a modifier is
         * processed in the keysequence, that key state is toggled until one of the
         * following occurs:
         * <ul>
         * <li>The modifier key is encountered again in the sequence. At this point the
         * state of the key is toggled (along with the appropriate keyup/down events).
         * </li>
         * <li>The {@code webdriver.Key.NULL} key is encountered in the sequence. When
         * this key is encountered, all modifier keys current in the down state are
         * released (with accompanying keyup events). The NULL key can be used to
         * simulate common keyboard shortcuts:
         * <code>
         *     element.sendKeys("text was",
         *                      webdriver.Key.CONTROL, "a", webdriver.Key.NULL,
         *                      "now text is");
         *     // Alternatively:
         *     element.sendKeys("text was",
         *                      webdriver.Key.chord(webdriver.Key.CONTROL, "a"),
         *                      "now text is");
         * </code></li>
         * <li>The end of the keysequence is encountered. When there are no more keys
         * to type, all depressed modifier keys are released (with accompanying keyup
         * events).
         * </li>
         * </ul>
         * <strong>Note:</strong> On browsers where native keyboard events are not yet
         * supported (e.g. Firefox on OS X), key events will be synthesized. Special
         * punctionation keys will be synthesized according to a standard QWERTY en-us
         * keyboard layout.
         *
         * @param {...string} var_args The sequence of keys to
         *     type. All arguments will be joined into a single sequence (var_args is
         *     permitted for convenience).
         * @return {!webdriver.promise.Promise} A promise that will be resolved when all
         *     keys have been typed.
         */
        sendKeys(...var_args: string[]): webdriver.promise.Promise;

        /**
         * Schedules a command to query for the tag/node name of this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's tag name.
         */
        getTagName(): webdriver.promise.Promise;

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
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     requested CSS value.
         */
        getCssValue(cssStyleProperty: string): webdriver.promise.Promise;

        /**
         * Schedules a command to query for the value of the given attribute of the
         * element. Will return the current value even if it has been modified after the
         * page has been loaded. More exactly, this method will return the value of the
         * given attribute, unless that attribute is not present, in which case the
         * value of the property with the same name is returned. If neither value is
         * set, null is returned. The "style" attribute is converted as best can be to a
         * text representation with a trailing semi-colon. The following are deemed to
         * be "boolean" attributes and will be returned as thus:
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
         *   <li>"class"
         *   <li>"readonly"
         * </ul>
         * @param {string} attributeName The name of the attribute to query.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     attribute's value.
         */
        getAttribute(attributeName: string): webdriver.promise.Promise;

        /**
         * Get the visible (i.e. not hidden by CSS) innerText of this element, including
         * sub-elements, without any leading or trailing whitespace.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's visible text.
         */
        getText(): webdriver.promise.Promise;

        /**
         * Schedules a command to compute the size of this element's bounding box, in
         * pixels.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's size as a {@code {width:number, height:number}} object.
         */
        getSize(): webdriver.promise.Promise;

        /**
         * Schedules a command to compute the location of this element in page space.
         * @return {!webdriver.promise.Promise} A promise that will be resolved to the
         *     element's location as a {@code {x:number, y:number}} object.
         */
        getLocation(): webdriver.promise.Promise;

        /**
         * Schedules a command to query whether the DOM element represented by this
         * instance is enabled, as dicted by the {@code disabled} attribute.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     whether this element is currently enabled.
         */
        isEnabled(): webdriver.promise.Promise;

        /**
         * Schedules a command to query whether this element is selected.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     whether this element is currently selected.
         */
        isSelected(): webdriver.promise.Promise;

        /**
         * Schedules a command to submit the form containing this element (or this
         * element if it is a FORM element). This command is a no-op if the element is
         * not contained in a form.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the form has been submitted.
         */
        submit(): webdriver.promise.Promise;

        /**
         * Schedules a command to clear the {@code value} of this element. This command
         * has no effect if the underlying DOM element is neither a text INPUT element
         * nor a TEXTAREA element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved when
         *     the element has been cleared.
         */
        clear(): webdriver.promise.Promise;

        /**
         * Schedules a command to test whether this element is currently displayed.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     whether this element is currently visible on the page.
         */
        isDisplayed(): webdriver.promise.Promise;

        /**
         * Schedules a command to retrieve the outer HTML of this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with
         *     the element's outer HTML.
         */
        getOuterHtml(): webdriver.promise.Promise;

        /**
         * Schedules a command to retrieve the inner HTML of this element.
         * @return {!webdriver.promise.Promise} A promise that will be resolved with the
         *     element's inner HTML.
         */
        getInnerHtml(): webdriver.promise.Promise;

        //endregion

        //region Static Methods

        /**
         * Compares to WebElements for equality.
         * @param {!webdriver.WebElement} a A WebElement.
         * @param {!webdriver.WebElement} b A WebElement.
         * @return {!webdriver.promise.Promise} A promise that will be resolved to
         *     whether the two WebElements are equal.
         */
        static equals(a: WebElement, b: WebElement): webdriver.promise.Promise;

        //endregion
    }

    interface ILocatorStrategy {
        className(value: string): Locator;
        'class name'(value: string): Locator;
        css(value: string): Locator;
        id(value: string): Locator;
        js(value: string): Locator;
        linkText(value: string): Locator;
        'link text'(value: string): Locator;
        name(value: string): Locator;
        partialLinkText(value: string): Locator;
        'partial link text'(value: string): Locator;
        tagName(value: string): Locator;
        'tag name'(value: string): Locator;
        xpath(value: string): Locator;
    }

    var By: ILocatorStrategy;

    /**
     * An element locator.
     */
    class Locator {

        //region Constructors

        /**
         * An element locator.
         * @param {string} using The type of strategy to use for this locator.
         * @param {string} value The search target of this locator.
         * @constructor
         */
        constructor(using: string, value: string);

        //endregion

        //region Properties

        /**
         * The search strategy to use when searching for an element.
         * @type {string}
         */
        using: string;

        /**
         * The search target for this locator.
         * @type {string}
         */
        value: string;

        //endregion

        //region Static Properties

        /**
         * Factory methods for the supported locator strategies.
         * @type {Object.<function(string):!webdriver.Locator>}
         */
        static Strategy: ILocatorStrategy;

        //endregion

        //region Methods

        /** @return {string} String representation of this locator. */
        toString(): string;

        //endregion

        //region Static Methods

        /**
         * Creates a new Locator from an object whose only property is also a key in
         * the {@code webdriver.Locator.Strategy} map.
         * @param {Object.<string>} obj The object to convert into a locator.
         * @return {webdriver.Locator} The new locator object.
         */
        static createFromObj(obj: any): Locator

        /**
         * Verifies that a {@code locator} is a valid locator to use for searching for
         * elements on the page.
         * @param {webdriver.Locator|Object.<string>} locator The locator
         *     to verify, or a short-hand object that can be converted into a locator
         *     to verify.
         * @return {!webdriver.Locator} The validated locator.
         */
        static checkLocator(locator: Locator): Locator;
        static checkLocator(obj: any): Locator;

        //endregion
    }

    /**
     * Contains information about a WebDriver session.
     */
    class Session {

        //region Constructors

        /**
         * @param {string} id The session ID.
         * @param {!(Object|webdriver.Capabilities)} capabilities The session
         *     capabilities.
         * @constructor
         */
        constructor(id: string, capabilities: webdriver.Capabilities);
        constructor(id: string, capabilities: any);

        //endregion

        //region Methods

        /**
         * @return {string} This session's ID.
         */
        getId(): string;

        /**
         * @return {!webdriver.Capabilities} This session's capabilities.
         */
        getCapabilities(): webdriver.Capabilities;

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

        //endregion
    }
}

declare module 'selenium-webdriver' {
    export = webdriver;
}

declare module 'selenium-webdriver/testing' {

    /**
    * Registers a new test suite.
    * @param name The suite name.
    * @param fn The suite function, or {@code undefined} to define a pending test suite.
    */
    function describe(name: string, fn: Function): void;

    /**
     * Defines a suppressed test suite.
     * @param name The suite name.
     * @param fn The suite function, or {@code undefined} to define a pending test suite.
     */
    function xdescribe(name: string, fn: Function): void;

    /**
     * Register a function to call after the current suite finishes.
     * @param fn
     */
    function after(fn: Function): void;

    /**
     * Register a function to call after each test in a suite.
     * @param fn
     */
    function afterEach(fn: Function): void;

    /**
     * Register a function to call before the current suite starts.
     * @param fn
     */
    function before(fn: Function): void;

    /**
     * Register a function to call before each test in a suite.
     * @param fn
     */
    function beforeEach(fn: Function): void;

    /**
     * Add a test to the current suite.
     * @param name The test name.
     * @param fn The test function, or {@code undefined} to define a pending test case.
     */
    function it(name: string, fn: Function): void;

    /**
     * An alias for {@link #it()} that flags the test as the only one that should
     * be run within the current suite.
     * @param name The test name.
     * @param fn The test function, or {@code undefined} to define a pending test case.
     */
    function iit(name: string, fn: Function): void;

    /**
     * Adds a test to the current suite while suppressing it so it is not run.
     * @param name The test name.
     * @param fn The test function, or {@code undefined} to define a pending test case.
     */
    function xit(name: string, fn: Function): void;
}

declare module 'selenium-webdriver/executors' {
    /**
     * Creates a command executor that uses WebDriver's JSON wire protocol.
     * @param url The server's URL, or a promise that will resolve to that URL.
     * @returns {!webdriver.CommandExecutor} The new command executor.
     */
    function createExecutor(url: any): webdriver.CommandExecutor;
}
