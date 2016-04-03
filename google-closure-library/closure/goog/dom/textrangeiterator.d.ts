declare module goog {
    function require(name: 'goog.dom.TextRangeIterator'): typeof goog.dom.TextRangeIterator;
}

declare module goog.dom {

    /**
     * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
     * adds functions to determine the portion of each text node that is selected.
     *
     * @param {Node} startNode The starting node position.
     * @param {number} startOffset The offset in to startNode.  If startNode is
     *     an element, indicates an offset in to childNodes.  If startNode is a
     *     text node, indicates an offset in to nodeValue.
     * @param {Node} endNode The ending node position.
     * @param {number} endOffset The offset in to endNode.  If endNode is
     *     an element, indicates an offset in to childNodes.  If endNode is a
     *     text node, indicates an offset in to nodeValue.
     * @param {boolean=} opt_reverse Whether to traverse nodes in reverse.
     * @constructor
     * @extends {goog.dom.RangeIterator}
     * @final
     */
    class TextRangeIterator extends goog.dom.RangeIterator {
        constructor(startNode: Node, startOffset: number, endNode: Node, endOffset: number, opt_reverse?: boolean);
        
        /**
         * Change the start node of the iterator.
         * @param {Node} node The new start node.
         */
        setStartNode(node: Node): void;
        
        /**
         * Change the end node of the iterator.
         * @param {Node} node The new end node.
         */
        setEndNode(node: Node): void;
        
        /**
         * Move to the next position in the selection.
         * Throws {@code goog.iter.StopIteration} when it passes the end of the range.
         * @return {Node} The node at the next position.
         * @override
         */
        next(): Node;
        
        /**
         * @return {!goog.dom.TextRangeIterator} An identical iterator.
         * @override
         */
        clone(): goog.dom.TextRangeIterator;
    }
}
