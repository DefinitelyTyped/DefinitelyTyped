declare module goog {
    function require(name: 'goog.ui.ac.RichRemoteArrayMatcher'): typeof goog.ui.ac.RichRemoteArrayMatcher;
}

declare module goog.ui.ac {

    /**
     * An array matcher that requests rich matches via ajax and converts them into
     * rich rows.
     *
     * This class makes use of goog.html.legacyconversions and provides no
     * HTML-type-safe alternative. As such, it is not compatible with
     * code that sets goog.html.legacyconversions.ALLOW_LEGACY_CONVERSIONS to
     * false.
     *
     * @param {string} url The Uri which generates the auto complete matches.  The
     *     search term is passed to the server as the 'token' query param.
     * @param {boolean=} opt_noSimilar If true, request that the server does not do
     *     similarity matches for the input token against the dictionary.
     *     The value is sent to the server as the 'use_similar' query param which is
     *     either "1" (opt_noSimilar==false) or "0" (opt_noSimilar==true).
     * @constructor
     * @extends {goog.ui.ac.RemoteArrayMatcher}
     */
    class RichRemoteArrayMatcher extends goog.ui.ac.RemoteArrayMatcher {
        constructor(url: string, opt_noSimilar?: boolean);
        
        /**
         * Set the filter that is called before the array matches are returned.
         * @param {Function} rowFilter A function(rows) that returns an array of rows as
         *     a subset of the rows input array.
         */
        setRowFilter(rowFilter: Function): void;
        
        /**
         * Retrieve a set of matching rows from the server via ajax and convert them
         * into rich rows.
         * @param {string} token The text that should be matched; passed to the server
         *     as the 'token' query param.
         * @param {number} maxMatches The maximum number of matches requested from the
         *     server; passed as the 'max_matches' query param. The server is
         *     responsible for limiting the number of matches that are returned.
         * @param {Function} matchHandler Callback to execute on the result after
         *     matching.
         * @override
         */
        requestMatchingRows(token: string, maxMatches: number, matchHandler: Function): void;
    }
}
