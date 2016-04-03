declare module goog {
    function require(name: 'goog.ui.ac'): typeof goog.ui.ac;
}

declare module goog.ui.ac {

    /**
     * Factory function for building a basic autocomplete widget that autocompletes
     * an inputbox or text area from a data array.
     * @param {Array<?>} data Data array.
     * @param {Element} input Input element or text area.
     * @param {boolean=} opt_multi Whether to allow multiple entries separated with
     *     semi-colons or commas.
     * @param {boolean=} opt_useSimilar use similar matches. e.g. "gost" => "ghost".
     * @return {!goog.ui.ac.AutoComplete} A new autocomplete object.
     */
    function createSimpleAutoComplete(data: Array<any>, input: Element, opt_multi?: boolean, opt_useSimilar?: boolean): goog.ui.ac.AutoComplete;
}
