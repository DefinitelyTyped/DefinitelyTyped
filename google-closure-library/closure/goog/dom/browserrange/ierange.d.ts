declare module goog {
    function require(name: 'goog.dom.browserrange.IeRange'): typeof goog.dom.browserrange.IeRange;
}

declare module goog.dom.browserrange {

    /**
     * The constructor for IE specific browser ranges.
     * @param {TextRange} range The range object.
     * @param {Document} doc The document the range exists in.
     * @constructor
     * @extends {goog.dom.browserrange.AbstractRange}
     * @final
     */
    class IeRange extends goog.dom.browserrange.AbstractRange {
        constructor(range: TextRange, doc: Document);
        
        /**
         * Create a range object that selects the given node's text.
         * @param {Node} node The node to select.
         * @return {!goog.dom.browserrange.IeRange} An IE range wrapper object.
         */
        static createFromNodeContents(node: Node): goog.dom.browserrange.IeRange;
        
        /**
         * Static method that returns the proper type of browser range.
         * @param {Node} startNode The node to start with.
         * @param {number} startOffset The offset within the start node.
         * @param {Node} endNode The node to end with.
         * @param {number} endOffset The offset within the end node.
         * @return {!goog.dom.browserrange.AbstractRange} A wrapper object.
         */
        static createFromNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): goog.dom.browserrange.AbstractRange;
        
        /**
         * @return {!goog.dom.browserrange.IeRange} A clone of this range.
         * @override
         */
        clone(): goog.dom.browserrange.IeRange;
        
        /**
         * Tests whether this range is valid (i.e. whether its endpoints are still in
         * the document).  A range becomes invalid when, after this object was created,
         * either one or both of its endpoints are removed from the document.  Use of
         * an invalid range can lead to runtime errors, particularly in IE.
         * @return {boolean} Whether the range is valid.
         */
        isRangeInDocument(): boolean;
    }
}
