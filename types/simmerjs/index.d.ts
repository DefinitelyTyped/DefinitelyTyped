// Type definitions for simmerjs 0.5
// Project: https://github.com/gmmorris/simmerjs#readme
// Definitions by: Felix Becker <https://github.com/felixfbecker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Simmer {
    /**
     * Analyze an element and produce a unique CSS selector for it.
     */
    (element: Element): string;

    /**
     * If you have an existing instance of Simmer, you can use its configure
     * method to instanciate a new Simmer which has the same scope and
     * configuration as the existing one, with any new configuration you wish to
     * apply.
     */
    configure(options: Options): Simmer;
}

/**
 * What this means is that the function you provide should expect to receive a
 * string CSS selector and a function. It should then query for elements
 * matching the selector and return an array of the results (even if there is
 * only one result, it should be returned in an Array.).
 *
 * The second argument is a function which should be called if any error is
 * encountered when querying for the elements. If an error occurs or a problem
 * is encountered, instead of throwing, you should call the function and pass
 * the error object to it. Simmer will then handle the error as per its
 * configuration.
 */
export type QueryEngine = (selector: string, onError: (error: any) => void) => ArrayLike<Element>;

/**
 * A document or element with `querySelectorAll()`.
 */
export interface Queryable {
    querySelectorAll: QueryEngine;
}

export interface WindowLike {
    document: Queryable;
}

/**
 * Generally speaking this would be the window, which is the default value,
 * but it would be overriden in a situation where you might be using Simmer
 * against a Virtual Dom implementation. If you are using a Virtual DOM, you
 * should provide the Window object of the Virtual DOM
 */
export type Scope = Queryable | WindowLike;

export interface Options {
    /**
     * A minimum specificty level. Once the parser reaches this level it starts
     * verifying the selector after every method is called. This can cut down
     * our execution time by avoiding needless parsing but can also hurt
     * execution times by performing many verifications. Specificity is
     * calculated based on the W3C spec:
     * http://www.w3.org/TR/css3-selectors/#specificity
     *
     * @default 100
     */
    specificityThreshold?: number;

    /**
     * How deep into the DOM hierarchy should Simmer go in order to reach a
     * unique selector. This is a delicate game because the higher the number
     * the more likely you are to reach a unique selector, but it also means a
     * longer and more breakable one. Assuming you want to store this selector
     * to use later, making it longer also means it is more likely to change and
     * loose it's validity.
     *
     * @default 3
     */
    depth?: number;

    /**
     * A maximum length for the CSS selector can be specified - if no specific
     * selector can be found which is shorter than this length then it is
     * treated as if no selector could be found.
     *
     * @default 520
     */
    selectorMaxLength?: number;

    /**
     * How to handle errors which occur during the analysis
     *
     * Valid Options
     *  - `false`: errors are ignored by Simmer
     *  - `true`: errors rethrown and expected to be caught by the user
     *  - _a function callback will be called with two parameters_: the
     *    exception and the element being analyzed
     */
    errorHandling?: boolean | ((error: any, element: Element) => void);
}

interface SimmerConstructor {
    /**
     * @param scope The context in which Simmer should query for elements.
     * Generally speaking this would be the window, which is the default value,
     * but it would be overriden in a situation where you might be using Simmer
     * against a Virtual Dom implementation. If you are using a Virtual DOM, you
     * should provide the Window object of the Virtual DOM
     * @param options Options object allowing you to override the default
     * configuration for Simmer's behaviour.
     * @param query A query engine you wish Simmer to use when evaluating
     * generated selectors. By default Simmer uses the
     * `window.document.querySelectorAll` function and if you provide a window
     * to the scope, Simmer will assume that you want it to use the
     * `document.querySelectorAll` on that window. But if you wish Simmer to use
     * another custom function, such as your own tweaked version of jQuery, you
     * can do so by passing the third argument to the Simmer constructor.
     */
    new(scope?: Scope, options?: Options, query?: QueryEngine): Simmer;

    /**
     * @param scope The context in which Simmer should query for elements.
     * Generally speaking this would be the window, which is the default value,
     * but it would be overriden in a situation where you might be using Simmer
     * against a Virtual Dom implementation. If you are using a Virtual DOM, you
     * should provide the Window object of the Virtual DOM
     * @param options Options object allowing you to override the default
     * configuration for Simmer's behaviour.
     * @param query A query engine you wish Simmer to use when evaluating
     * generated selectors. By default Simmer uses the
     * `window.document.querySelectorAll` function and if you provide a window
     * to the scope, Simmer will assume that you want it to use the
     * `document.querySelectorAll` on that window. But if you wish Simmer to use
     * another custom function, such as your own tweaked version of jQuery, you
     * can do so by passing the third argument to the Simmer constructor.
     */
    (scope?: Scope, options?: Options, query?: QueryEngine): Simmer;
}
declare const Simmer: SimmerConstructor;
export default Simmer;

declare global {
    interface Window {
        /**
         * A global Simmer function will be exposed on the window. This is not the
         * constructor, but rather a default instance which has exposed itself on
         * the window wit ha default configuration. This is not an idea API and is
         * meant to maintain the original API dating back to 2011 when this library
         * was originally written.
         */
        Simmer: Simmer & {
            /**
             * Just in case you also had the brilliant idea of using a variable
             * called "Simmer", or you wish to move it off of the global object then
             * you can use the noConflict method to receive a reference to the
             * object and remove it from the window. Calling it will also revert the
             * original value of window.Simmer which was there before loading the
             * Simmer.js script (if there was one)
             */
            noConflict(): any
        };
    }
}
