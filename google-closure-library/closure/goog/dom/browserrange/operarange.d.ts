declare module goog {
    function require(name: 'goog.dom.browserrange.OperaRange'): typeof goog.dom.browserrange.OperaRange;
}

declare module goog.dom.browserrange {

    /**
     * The constructor for Opera specific browser ranges.
     * @param {Range} range The range object.
     * @constructor
     * @extends {goog.dom.browserrange.W3cRange}
     * @final
     */
    class OperaRange extends goog.dom.browserrange.W3cRange {
        constructor(range: Range);
        
        /**
         * Creates a range object that selects the given node's text.
         * @param {Node} node The node to select.
         * @return {!goog.dom.browserrange.OperaRange} A Opera range wrapper object.
         */
        static createFromNodeContents(node: Node): goog.dom.browserrange.OperaRange;
        
        /**
         * Creates a range object that selects between the given nodes.
         * @param {Node} startNode The node to start with.
         * @param {number} startOffset The offset within the node to start.
         * @param {Node} endNode The node to end with.
         * @param {number} endOffset The offset within the node to end.
         * @return {!goog.dom.browserrange.OperaRange} A wrapper object.
         */
        static createFromNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): goog.dom.browserrange.OperaRange;
    }
}
