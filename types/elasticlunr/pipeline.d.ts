/*!
 * elasticlunr.Pipeline
 * Copyright (C) @YEAR Oliver Nightingale
 * Copyright (C) @YEAR Wei Song
 */
export declare class Pipeline {
    _queue: any[];
    /**
     * elasticlunr.Pipelines maintain an ordered list of functions to be applied to
     * both documents tokens and query tokens.
     *
     * An instance of elasticlunr.Index will contain a pipeline
     * with a trimmer, a stop word filter, an English stemmer. Extra
     * functions can be added before or after either of these functions or these
     * default functions can be removed.
     *
     * When run the pipeline, it will call each function in turn.
     *
     * The output of the functions in the pipeline will be passed to the next function
     * in the pipeline. To exclude a token from entering the index the function
     * should return undefined, the rest of the pipeline will not be called with
     * this token.
     *
     * For serialisation of pipelines to work, all functions used in an instance of
     * a pipeline should be registered with elasticlunr.Pipeline. Registered functions can
     * then be loaded. If trying to load a serialised pipeline that uses functions
     * that are not registered an error will be thrown.
     *
     * If not planning on serialising the pipeline then registering pipeline functions
     * is not necessary.
     *
     * @constructor
     */
    constructor();
    static registeredFunctions: {};
    /**
     * Register a function in the pipeline.
     *
     * Functions that are used in the pipeline should be registered if the pipeline
     * needs to be serialised, or a serialised pipeline needs to be loaded.
     *
     * Registering a function does not add it to a pipeline, functions must still be
     * added to instances of the pipeline for them to be used when running a pipeline.
     *
     * @param {Function} fn The function to register.
     * @param {String} label The label to register this function with
     * @memberOf Pipeline
     */
    static registerFunction(fn: Function, label: string): void;
    /**
     * Get a registered function in the pipeline.
     *
     * @param {String} label The label of registered function.
     * @return {Function}
     * @memberOf Pipeline
     */
    static getRegisteredFunction(label: string): any;
    /**
     * Warns if the function is not registered as a Pipeline function.
     *
     * @param {Function} fn The function to check for.
     * @private
     * @memberOf Pipeline
     */
    static warnIfFunctionNotRegistered(fn: Function): void;
    /**
     * Loads a previously serialised pipeline.
     *
     * All functions to be loaded must already be registered with elasticlunr.Pipeline.
     * If any function from the serialised data has not been registered then an
     * error will be thrown.
     *
     * @param {Object} serialised The serialised pipeline to load.
     * @return {elasticlunr.Pipeline}
     * @memberOf Pipeline
     */
    static load(serialised: any[]): Pipeline;
    /**
     * Adds new functions to the end of the pipeline.
     *
     * Logs a warning if the function has not been registered.
     *
     * @param {Function} functions Any number of functions to add to the pipeline.
     * @memberOf Pipeline
     */
    add(...fns: Function[]): void;
    /**
     * Adds a single function after a function that already exists in the
     * pipeline.
     *
     * Logs a warning if the function has not been registered.
     * If existingFn is not found, throw an Exception.
     *
     * @param {Function} existingFn A function that already exists in the pipeline.
     * @param {Function} newFn The new function to add to the pipeline.
     * @memberOf Pipeline
     */
    after(existingFn: Function, newFn: Function): void;
    /**
     * Adds a single function before a function that already exists in the
     * pipeline.
     *
     * Logs a warning if the function has not been registered.
     * If existingFn is not found, throw an Exception.
     *
     * @param {Function} existingFn A function that already exists in the pipeline.
     * @param {Function} newFn The new function to add to the pipeline.
     * @memberOf Pipeline
     */
    before(existingFn: Function, newFn: Function): void;
    /**
     * Removes a function from the pipeline.
     *
     * @param {Function} fn The function to remove from the pipeline.
     * @memberOf Pipeline
     */
    remove(fn: Function): void;
    /**
     * Runs the current list of functions that registered in the pipeline against the
     * input tokens.
     *
     * @param {Array} tokens The tokens to run through the pipeline.
     * @return {Array}
     * @memberOf Pipeline
     */
    run(tokens: string[]): string[];
    /**
     * Resets the pipeline by removing any existing processors.
     *
     * @memberOf Pipeline
     */
    reset(): void;
    /**
     * Get the pipeline if user want to check the pipeline.
     *
     * @memberOf Pipeline
     */
    get(): any[];
    /**
     * Returns a representation of the pipeline ready for serialisation.
     * Only serialize pipeline function's name. Not storing function, so when
     * loading the archived JSON index file, corresponding pipeline function is
     * added by registered function of elasticlunr.Pipeline.registeredFunctions
     *
     * Logs a warning if the function has not been registered.
     *
     * @return {Array}
     * @memberOf Pipeline
     */
    toJSON(): string[];
}
