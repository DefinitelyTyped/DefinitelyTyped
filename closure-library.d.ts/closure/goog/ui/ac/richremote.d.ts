declare module goog {
    function require(name: 'goog.ui.ac.RichRemote'): typeof goog.ui.ac.RichRemote;
}

declare module goog.ui.ac {

    /**
     * Factory class to create a rich autocomplete widget that autocompletes an
     * inputbox or textarea from data provided via ajax.  The server returns a
     * complex data structure that is used with client-side javascript functions to
     * render the results.
     *
     * This class makes use of goog.html.legacyconversions and provides no
     * HTML-type-safe alternative. As such, it is not compatible with
     * code that sets goog.html.legacyconversions.ALLOW_LEGACY_CONVERSIONS to
     * false.
     *
     * @param {string} url The Uri which generates the auto complete matches.
     * @param {Element} input Input element or text area.
     * @param {boolean=} opt_multi Whether to allow multiple entries; defaults
     *     to false.
     * @param {boolean=} opt_useSimilar Whether to use similar matches; e.g.
     *     "gost" => "ghost".
     * @constructor
     * @extends {goog.ui.ac.Remote}
     */
    class RichRemote extends goog.ui.ac.Remote {
        constructor(url: string, input: Element, opt_multi?: boolean, opt_useSimilar?: boolean);
        
        /**
         * Set the filter that is called before the array matches are returned.
         * @param {Function} rowFilter A function(rows) that returns an array of rows as
         *     a subset of the rows input array.
         */
        setRowFilter(rowFilter: Function): void;
    }
}
