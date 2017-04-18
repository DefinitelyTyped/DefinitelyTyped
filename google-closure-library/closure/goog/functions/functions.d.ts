declare module goog {
    function require(name: 'goog.functions'): typeof goog.functions;
}

declare module goog.functions {

    /**
     * Always returns false.
     * @type {function(...): boolean}
     */
    var FALSE: (...arg0: any[]) => boolean;

    /**
     * Always returns true.
     * @type {function(...): boolean}
     */
    var TRUE: (...arg0: any[]) => boolean;

    /**
     * Always returns NULL.
     * @type {function(...): null}
     */
    var NULL: (...arg0: any[]) => void;

    /**
     * Creates a function that always returns the same value.
     * @param {T} retValue The value to return.
     * @return {function():T} The new function.
     * @template T
     */
    function constant<T>(retValue: T): () => T;

    /**
     * A simple function that returns the first argument of whatever is passed
     * into it.
     * @param {T=} opt_returnValue The single value that will be returned.
     * @param {...*} var_args Optional trailing arguments. These are ignored.
     * @return {T} The first argument passed in, or undefined if nothing was passed.
     * @template T
     */
    function identity<T>(opt_returnValue?: T, ...var_args: any[]): T;

    /**
     * Creates a function that always throws an error with the given message.
     * @param {string} message The error message.
     * @return {!Function} The error-throwing function.
     */
    function error(message: string): Function;

    /**
     * Creates a function that throws the given object.
     * @param {*} err An object to be thrown.
     * @return {!Function} The error-throwing function.
     */
    function fail(err: any): Function;

    /**
     * Given a function, create a function that keeps opt_numArgs arguments and
     * silently discards all additional arguments.
     * @param {Function} f The original function.
     * @param {number=} opt_numArgs The number of arguments to keep. Defaults to 0.
     * @return {!Function} A version of f that only keeps the first opt_numArgs
     *     arguments.
     */
    function lock(f: Function, opt_numArgs?: number): Function;

    /**
     * Creates a function that returns its nth argument.
     * @param {number} n The position of the return argument.
     * @return {!Function} A new function.
     */
    function nth(n: number): Function;

    /**
     * Given a function, create a new function that swallows its return value
     * and replaces it with a new one.
     * @param {Function} f A function.
     * @param {T} retValue A new return value.
     * @return {function(...?):T} A new function.
     * @template T
     */
    function withReturnValue<T>(f: Function, retValue: T): (...arg0: any[]) => T;

    /**
     * Creates a function that returns whether its arguement equals the given value.
     *
     * Example:
     * var key = goog.object.findKey(obj, goog.functions.equalTo('needle'));
     *
     * @param {*} value The value to compare to.
     * @param {boolean=} opt_useLooseComparison Whether to use a loose (==)
     *     comparison rather than a strict (===) one. Defaults to false.
     * @return {function(*):boolean} The new function.
     */
    function equalTo(value: any, opt_useLooseComparison?: boolean): (arg0: any) => boolean;

    /**
     * Creates the composition of the functions passed in.
     * For example, (goog.functions.compose(f, g))(a) is equivalent to f(g(a)).
     * @param {function(...?):T} fn The final function.
     * @param {...Function} var_args A list of functions.
     * @return {function(...?):T} The composition of all inputs.
     * @template T
     */
    function compose<T>(fn: (...arg0: any[]) => T, ...var_args: Function[]): (...arg0: any[]) => T;

    /**
     * Creates a function that calls the functions passed in in sequence, and
     * returns the value of the last function. For example,
     * (goog.functions.sequence(f, g))(x) is equivalent to f(x),g(x).
     * @param {...Function} var_args A list of functions.
     * @return {!Function} A function that calls all inputs in sequence.
     */
    function sequence(...var_args: Function[]): Function;

    /**
     * Creates a function that returns true if each of its components evaluates
     * to true. The components are evaluated in order, and the evaluation will be
     * short-circuited as soon as a function returns false.
     * For example, (goog.functions.and(f, g))(x) is equivalent to f(x) && g(x).
     * @param {...Function} var_args A list of functions.
     * @return {function(...?):boolean} A function that ANDs its component
     *      functions.
     */
    function and(...var_args: Function[]): (...arg0: any[]) => boolean;

    /**
     * Creates a function that returns true if any of its components evaluates
     * to true. The components are evaluated in order, and the evaluation will be
     * short-circuited as soon as a function returns true.
     * For example, (goog.functions.or(f, g))(x) is equivalent to f(x) || g(x).
     * @param {...Function} var_args A list of functions.
     * @return {function(...?):boolean} A function that ORs its component
     *    functions.
     */
    function or(...var_args: Function[]): (...arg0: any[]) => boolean;

    /**
     * Creates a function that returns the Boolean opposite of a provided function.
     * For example, (goog.functions.not(f))(x) is equivalent to !f(x).
     * @param {!Function} f The original function.
     * @return {function(...?):boolean} A function that delegates to f and returns
     * opposite.
     */
    function not(f: Function): (...arg0: any[]) => boolean;

    /**
     * Generic factory function to construct an object given the constructor
     * and the arguments. Intended to be bound to create object factories.
     *
     * Example:
     *
     * var factory = goog.partial(goog.functions.create, Class);
     *
     * @param {function(new:T, ...)} constructor The constructor for the Object.
     * @param {...*} var_args The arguments to be passed to the constructor.
     * @return {T} A new instance of the class given in {@code constructor}.
     * @template T
     */
    function create<T>(constructor: (...arg0: any[]) => any, ...var_args: any[]): T;

    /**
     * Gives a wrapper function that caches the return value of a parameterless
     * function when first called.
     *
     * When called for the first time, the given function is called and its
     * return value is cached (thus this is only appropriate for idempotent
     * functions).  Subsequent calls will return the cached return value. This
     * allows the evaluation of expensive functions to be delayed until first used.
     *
     * To cache the return values of functions with parameters, see goog.memoize.
     *
     * @param {!function():T} fn A function to lazily evaluate.
     * @return {!function():T} A wrapped version the function.
     * @template T
     */
    function cacheReturnValue<T>(fn: () => T): () => T;
}
