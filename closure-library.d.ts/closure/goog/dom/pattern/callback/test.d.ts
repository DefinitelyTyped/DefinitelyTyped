declare module goog {
    function require(name: 'goog.dom.pattern.callback.Test'): typeof goog.dom.pattern.callback.Test;
}

declare module goog.dom.pattern.callback {

    /**
     * Callback class for testing for at least one match.
     * @constructor
     * @final
     */
    class Test {
        constructor();
        
        /**
         * Whether or not the pattern matched.
         *
         * @type {boolean}
         */
        matched: boolean;
        
        /**
         * Get a bound callback function that is suitable as a callback for
         * {@link goog.dom.pattern.Matcher}.
         *
         * @return {!Function} A callback function.
         */
        getCallback(): Function;
        
        /**
         * Reset the counter.
         */
        reset(): void;
    }
}
