declare module goog {
    function require(name: 'goog.dom.TextRange'): typeof goog.dom.TextRange;
}

declare module goog.dom {

    /**
     * Create a new text selection with no properties.  Do not use this constructor:
     * use one of the goog.dom.Range.createFrom* methods instead.
     * @constructor
     * @extends {goog.dom.AbstractRange}
     * @final
     */
    class TextRange extends goog.dom.AbstractRange {
        constructor();
        
        /**
         * Create a new range wrapper from the given browser range object.  Do not use
         * this method directly - please use goog.dom.Range.createFrom* instead.
         * @param {Range|TextRange} range The browser range object.
         * @param {boolean=} opt_isReversed Whether the focus node is before the anchor
         *     node.
         * @return {!goog.dom.TextRange} A range wrapper object.
         */
        static createFromBrowserRange(range: Range|TextRange, opt_isReversed?: boolean): goog.dom.TextRange;
        
        /**
         * Create a new range wrapper that selects the given node's text.  Do not use
         * this method directly - please use goog.dom.Range.createFrom* instead.
         * @param {Node} node The node to select.
         * @param {boolean=} opt_isReversed Whether the focus node is before the anchor
         *     node.
         * @return {!goog.dom.TextRange} A range wrapper object.
         */
        static createFromNodeContents(node: Node, opt_isReversed?: boolean): goog.dom.TextRange;
        
        /**
         * Create a new range wrapper that selects the area between the given nodes,
         * accounting for the given offsets.  Do not use this method directly - please
         * use goog.dom.Range.createFrom* instead.
         * @param {Node} anchorNode The node to start with.
         * @param {number} anchorOffset The offset within the node to start.
         * @param {Node} focusNode The node to end with.
         * @param {number} focusOffset The offset within the node to end.
         * @return {!goog.dom.TextRange} A range wrapper object.
         */
        static createFromNodes(anchorNode: Node, anchorOffset: number, focusNode: Node, focusOffset: number): goog.dom.TextRange;
        
        /**
         * @return {!goog.dom.TextRange} A clone of this range.
         * @override
         */
        clone(): goog.dom.TextRange;
        
        /**
         * Moves a TextRange to the provided nodes and offsets.
         * @param {Node} startNode The node to start with.
         * @param {number} startOffset The offset within the node to start.
         * @param {Node} endNode The node to end with.
         * @param {number} endOffset The offset within the node to end.
         * @param {boolean} isReversed Whether the range is reversed.
         */
        moveToNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number, isReversed: boolean): void;
        
        /**
         * Tests if the given node is in a document.
         * @param {Node} node The node to check.
         * @return {boolean} Whether the given node is in the given document.
         */
        static isAttachedNode(node: Node): boolean;
        
        /**
         * Returns a TextRangeIterator over the contents of the range.  Regardless of
         * the direction of the range, the iterator will move in document order.
         * @param {boolean=} opt_keys Unused for this iterator.
         * @return {!goog.dom.TextRangeIterator} An iterator over tags in the range.
         * @override
         */
        __iterator__(opt_keys?: boolean): goog.dom.TextRangeIterator;
        
        /**
         * Surrounds the text range with the specified element (on Mozilla) or with a
         * clone of the specified element (on IE).  Returns a reference to the
         * surrounding element if the operation was successful; returns null if the
         * operation failed.
         * @param {Element} element The element with which the selection is to be
         *    surrounded.
         * @return {Element} The surrounding element (same as the argument on Mozilla,
         *    but not on IE), or null if unsuccessful.
         */
        surroundContents(element: Element): Element;
    }

    /**
     * A SavedRange implementation using DOM endpoints.
     * @param {goog.dom.AbstractRange} range The range to save.
     * @constructor
     * @extends {goog.dom.SavedRange}
     * @private
     */
    interface DomSavedTextRange_ extends goog.dom.SavedRange {
        
        /**
         * @return {!goog.dom.AbstractRange} The restored range.
         * @override
         */
        restoreInternal(): goog.dom.AbstractRange;
    }
}
