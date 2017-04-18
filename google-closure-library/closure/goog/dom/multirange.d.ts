declare module goog {
    function require(name: 'goog.dom.MultiRange'): typeof goog.dom.MultiRange;
    function require(name: 'goog.dom.MultiRangeIterator'): typeof goog.dom.MultiRangeIterator;
}

declare module goog.dom {

    /**
     * Creates a new multi part range with no properties.  Do not use this
     * constructor: use one of the goog.dom.Range.createFrom* methods instead.
     * @constructor
     * @extends {goog.dom.AbstractMultiRange}
     * @final
     */
    class MultiRange extends goog.dom.AbstractMultiRange {
        constructor();
        
        /**
         * Creates a new range wrapper from the given browser selection object.  Do not
         * use this method directly - please use goog.dom.Range.createFrom* instead.
         * @param {Selection} selection The browser selection object.
         * @return {!goog.dom.MultiRange} A range wrapper object.
         */
        static createFromBrowserSelection(selection: Selection): goog.dom.MultiRange;
        
        /**
         * Creates a new range wrapper from the given browser ranges.  Do not
         * use this method directly - please use goog.dom.Range.createFrom* instead.
         * @param {Array<Range>} browserRanges The browser ranges.
         * @return {!goog.dom.MultiRange} A range wrapper object.
         */
        static createFromBrowserRanges(browserRanges: Array<Range>): goog.dom.MultiRange;
        
        /**
         * Creates a new range wrapper from the given goog.dom.TextRange objects.  Do
         * not use this method directly - please use goog.dom.Range.createFrom* instead.
         * @param {Array<goog.dom.TextRange>} textRanges The text range objects.
         * @return {!goog.dom.MultiRange} A range wrapper object.
         */
        static createFromTextRanges(textRanges: Array<goog.dom.TextRange>): goog.dom.MultiRange;
        
        /**
         * @return {!goog.dom.MultiRange} A clone of this range.
         * @override
         */
        clone(): goog.dom.MultiRange;
        
        /**
         * @return {!Array<goog.dom.TextRange>} An array of sub-ranges, sorted by start
         *     point.
         */
        getSortedRanges(): Array<goog.dom.TextRange>;
        
        /**
         * Collapses this range to a single point, either the first or last point
         * depending on the parameter.  This will result in the number of ranges in this
         * multi range becoming 1.
         * @param {boolean} toAnchor Whether to collapse to the anchor.
         * @override
         */
        collapse(toAnchor: boolean): void;
    }

    /**
     * A SavedRange implementation using DOM endpoints.
     * @param {goog.dom.MultiRange} range The range to save.
     * @constructor
     * @extends {goog.dom.SavedRange}
     * @private
     */
    interface DomSavedMultiRange_ extends goog.dom.SavedRange {
        
        /**
         * @return {!goog.dom.MultiRange} The restored range.
         * @override
         */
        restoreInternal(): goog.dom.MultiRange;
    }

    /**
     * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
     * adds functions to determine the portion of each text node that is selected.
     *
     * @param {goog.dom.MultiRange} range The range to traverse.
     * @constructor
     * @extends {goog.dom.RangeIterator}
     * @final
     */
    class MultiRangeIterator extends goog.dom.RangeIterator {
        constructor(range: goog.dom.MultiRange);
        
        /**
         * @return {!goog.dom.MultiRangeIterator} An identical iterator.
         * @override
         */
        clone(): goog.dom.MultiRangeIterator;
    }
}
