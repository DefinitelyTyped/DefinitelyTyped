declare module goog {
    function require(name: 'goog.ui.ac.CachingMatcher'): typeof goog.ui.ac.CachingMatcher;
}

declare module goog.ui.ac {

    /**
     * A matcher which wraps another (typically slow) matcher and
     * keeps a client-side cache of the results. For instance, you can use this to
     * wrap a RemoteArrayMatcher to hide the latency of the underlying matcher
     * having to make ajax request.
     *
     * Objects in the cache are deduped on their stringified forms.
     *
     * Note - when the user types a character, they will instantly get a set of
     * local results, and then some time later, the results from the server will
     * show up.
     *
     * @constructor
     * @param {!Object} baseMatcher The underlying matcher to use. Must implement
     *     requestMatchingRows.
     * @final
     */
    class CachingMatcher {
        constructor(baseMatcher: Object);
        
        /**
         * Sets the number of milliseconds with which to throttle the match requests
         * on the underlying matcher.
         *
         * Default value: 150.
         *
         * @param {number} throttleTime .
         */
        setThrottleTime(throttleTime: number): void;
        
        /**
         * Sets the maxMatches to use for the base matcher. If the base matcher makes
         * AJAX requests, it may help to make this a large number so that the local
         * cache gets populated quickly.
         *
         * Default value: 100.
         *
         * @param {number} maxMatches The value to set.
         */
        setBaseMatcherMaxMatches(maxMatches: number): void;
        
        /**
         * Sets the maximum size of the local cache. If the local cache grows larger
         * than this size, it will be emptied.
         *
         * Default value: 1000.
         *
         * @param {number} maxCacheSize .
         */
        setMaxCacheSize(maxCacheSize: number): void;
        
        /**
         * Sets the local matcher to use.
         *
         * The local matcher should be a function with the same signature as
         * {@link goog.ui.ac.ArrayMatcher.getMatchesForRows}, i.e. its arguments are
         * searchToken, maxMatches, rowsToSearch; and it returns a list of matching
         * rows.
         *
         * Default value: {@link goog.ui.ac.ArrayMatcher.getMatchesForRows}.
         *
         * @param {function(string, number, !Array<!Object>): !Array<!Object>}
         *     localMatcher
         */
        setLocalMatcher(localMatcher: (arg0: string, arg1: number, arg2: Array<Object>) => Array<Object>): void;
        
        /**
         * Function used to pass matches to the autocomplete.
         * @param {string} token Token to match.
         * @param {number} maxMatches Max number of matches to return.
         * @param {Function} matchHandler callback to execute after matching.
         */
        requestMatchingRows(token: string, maxMatches: number, matchHandler: Function): void;
    }
}
