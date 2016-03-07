declare module goog {
    function require(name: 'goog.dom.ControlRange'): typeof goog.dom.ControlRange;
    function require(name: 'goog.dom.ControlRangeIterator'): typeof goog.dom.ControlRangeIterator;
}

declare module goog.dom {

    /**
     * Create a new control selection with no properties.  Do not use this
     * constructor: use one of the goog.dom.Range.createFrom* methods instead.
     * @constructor
     * @extends {goog.dom.AbstractMultiRange}
     * @final
     */
    class ControlRange extends goog.dom.AbstractMultiRange {
        constructor();
        
        /**
         * Create a new range wrapper from the given browser range object.  Do not use
         * this method directly - please use goog.dom.Range.createFrom* instead.
         * @param {Object} controlRange The browser range object.
         * @return {!goog.dom.ControlRange} A range wrapper object.
         */
        static createFromBrowserRange(controlRange: Object): goog.dom.ControlRange;
        
        /**
         * Create a new range wrapper that selects the given element.  Do not use
         * this method directly - please use goog.dom.Range.createFrom* instead.
         * @param {...Element} var_args The element(s) to select.
         * @return {!goog.dom.ControlRange} A range wrapper object.
         */
        static createFromElements(...var_args: Element[]): goog.dom.ControlRange;
        
        /**
         * @return {!Array<Element>} Array of elements in the control range.
         */
        getElements(): Array<Element>;
        
        /**
         * @return {!Array<Element>} Array of elements comprising the control range,
         *     sorted by document order.
         */
        getSortedElements(): Array<Element>;
    }

    /**
     * A SavedRange implementation using DOM endpoints.
     * @param {goog.dom.ControlRange} range The range to save.
     * @constructor
     * @extends {goog.dom.SavedRange}
     * @private
     */
    interface DomSavedControlRange_ extends goog.dom.SavedRange {
    }

    /**
     * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
     * adds functions to determine the portion of each text node that is selected.
     *
     * @param {goog.dom.ControlRange?} range The range to traverse.
     * @constructor
     * @extends {goog.dom.RangeIterator}
     * @final
     */
    class ControlRangeIterator extends goog.dom.RangeIterator {
        constructor(range: goog.dom.ControlRange);
        
        /**
         * Move to the next position in the selection.
         * Throws {@code goog.iter.StopIteration} when it passes the end of the range.
         * @return {Node} The node at the next position.
         * @override
         */
        next(): Node;
        
        /**
         * @return {!goog.dom.ControlRangeIterator} An identical iterator.
         * @override
         */
        clone(): goog.dom.ControlRangeIterator;
    }
}
