declare module goog {
    function require(name: 'goog.dom.browserrange.W3cRange'): typeof goog.dom.browserrange.W3cRange;
}

declare module goog.dom.browserrange {

    /**
     * The constructor for W3C specific browser ranges.
     * @param {Range} range The range object.
     * @constructor
     * @extends {goog.dom.browserrange.AbstractRange}
     */
    class W3cRange extends goog.dom.browserrange.AbstractRange {
        constructor(range: Range);
        
        /**
         * Returns a browser range spanning the given node's contents.
         * @param {Node} node The node to select.
         * @return {!Range} A browser range spanning the node's contents.
         * @protected
         */
        static getBrowserRangeForNode(node: Node): Range;
        
        /**
         * Returns a browser range spanning the given nodes.
         * @param {Node} startNode The node to start with - should not be a BR.
         * @param {number} startOffset The offset within the start node.
         * @param {Node} endNode The node to end with - should not be a BR.
         * @param {number} endOffset The offset within the end node.
         * @return {!Range} A browser range spanning the node's contents.
         * @protected
         */
        static getBrowserRangeForNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): Range;
        
        /**
         * Creates a range object that selects the given node's text.
         * @param {Node} node The node to select.
         * @return {!goog.dom.browserrange.W3cRange} A Gecko range wrapper object.
         */
        static createFromNodeContents(node: Node): goog.dom.browserrange.W3cRange;
        
        /**
         * Creates a range object that selects between the given nodes.
         * @param {Node} startNode The node to start with.
         * @param {number} startOffset The offset within the start node.
         * @param {Node} endNode The node to end with.
         * @param {number} endOffset The offset within the end node.
         * @return {!goog.dom.browserrange.W3cRange} A wrapper object.
         */
        static createFromNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): goog.dom.browserrange.W3cRange;
        
        /**
         * @return {!goog.dom.browserrange.W3cRange} A clone of this range.
         * @override
         */
        clone(): goog.dom.browserrange.W3cRange;
        
        /**
         * Select this range.
         * @param {Selection} selection Browser selection object.
         * @param {*} reverse Whether to select this range in reverse.
         * @protected
         */
        selectInternal(selection: Selection, reverse: any): void;
    }
}
