declare module goog {
    function require(name: 'goog.debug'): typeof goog.debug;
}

declare module goog.debug {

    /**
     * Max length of stack to try and output
     * @type {number}
     */
    var MAX_STACK_DEPTH: number;

    /**
     * Catches onerror events fired by windows and similar objects.
     * @param {function(Object)} logFunc The function to call with the error
     *    information.
     * @param {boolean=} opt_cancel Whether to stop the error from reaching the
     *    browser.
     * @param {Object=} opt_target Object that fires onerror events.
     */
    function catchErrors(logFunc: (arg0: Object) => any, opt_cancel?: boolean, opt_target?: Object): void;

    /**
     * Creates a string representing an object and all its properties.
     * @param {Object|null|undefined} obj Object to expose.
     * @param {boolean=} opt_showFn Show the functions as well as the properties,
     *     default is false.
     * @return {string} The string representation of {@code obj}.
     */
    function expose(obj: Object|void|void, opt_showFn?: boolean): string;

    /**
     * Creates a string representing a given primitive or object, and for an
     * object, all its properties and nested objects.  WARNING: If an object is
     * given, it and all its nested objects will be modified.  To detect reference
     * cycles, this method identifies objects using goog.getUid() which mutates the
     * object.
     * @param {*} obj Object to expose.
     * @param {boolean=} opt_showFn Also show properties that are functions (by
     *     default, functions are omitted).
     * @return {string} A string representation of {@code obj}.
     */
    function deepExpose(obj: any, opt_showFn?: boolean): string;

    /**
     * Recursively outputs a nested array as a string.
     * @param {Array<?>} arr The array.
     * @return {string} String representing nested array.
     */
    function exposeArray(arr: Array<any>): string;

    /**
     * Exposes an exception that has been caught by a try...catch and outputs the
     * error as HTML with a stack trace.
     * @param {Object} err Error object or string.
     * @param {Function=} opt_fn Optional function to start stack trace from.
     * @return {string} Details of exception, as HTML.
     */
    function exposeException(err: Object, opt_fn?: Function): string;

    /**
     * Exposes an exception that has been caught by a try...catch and outputs the
     * error with a stack trace.
     * @param {Object} err Error object or string.
     * @param {Function=} opt_fn Optional function to start stack trace from.
     * @return {!goog.html.SafeHtml} Details of exception.
     */
    function exposeExceptionAsHtml(err: Object, opt_fn?: Function): goog.html.SafeHtml;

    /**
     * Normalizes the error/exception object between browsers.
     * @param {Object} err Raw error object.
     * @return {!Object} Normalized error object.
     */
    function normalizeErrorObject(err: Object): Object;

    /**
     * Converts an object to an Error if it's a String,
     * adds a stacktrace if there isn't one,
     * and optionally adds an extra message.
     * @param {Error|string} err  the original thrown object or string.
     * @param {string=} opt_message  optional additional message to add to the
     *     error.
     * @return {!Error} If err is a string, it is used to create a new Error,
     *     which is enhanced and returned.  Otherwise err itself is enhanced
     *     and returned.
     */
    function enhanceError(err: Error|string, opt_message?: string): Error;

    /**
     * Gets the current stack trace. Simple and iterative - doesn't worry about
     * catching circular references or getting the args.
     * @param {number=} opt_depth Optional maximum depth to trace back to.
     * @return {string} A string with the function names of all functions in the
     *     stack, separated by \n.
     * @suppress {es5Strict}
     */
    function getStacktraceSimple(opt_depth?: number): string;

    /**
     * Gets the current stack trace, either starting from the caller or starting
     * from a specified function that's currently on the call stack.
     * @param {Function=} opt_fn Optional function to start getting the trace from.
     *     If not provided, defaults to the function that called this.
     * @return {string} Stack trace.
     * @suppress {es5Strict}
     */
    function getStacktrace(opt_fn?: Function): string;

    /**
     * Set a custom function name resolver.
     * @param {function(Function): string} resolver Resolves functions to their
     *     names.
     */
    function setFunctionResolver(resolver: (arg0: Function) => string): void;

    /**
     * Gets a function name
     * @param {Function} fn Function to get name of.
     * @return {string} Function's name.
     */
    function getFunctionName(fn: Function): string;

    /**
     * Makes whitespace visible by replacing it with printable characters.
     * This is useful in finding diffrences between the expected and the actual
     * output strings of a testcase.
     * @param {string} string whose whitespace needs to be made visible.
     * @return {string} string whose whitespace is made visible.
     */
    function makeWhitespaceVisible(string: string): string;
}
