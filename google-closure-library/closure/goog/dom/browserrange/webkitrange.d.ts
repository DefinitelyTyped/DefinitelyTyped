declare module goog {
    function require(name: 'goog.dom.browserrange.WebKitRange'): typeof goog.dom.browserrange.WebKitRange;
}

declare module goog.dom.browserrange {

    /**
     * The constructor for WebKit specific browser ranges.
     * @param {Range} range The range object.
     * @constructor
     * @extends {goog.dom.browserrange.W3cRange}
     * @final
     */
    class WebKitRange extends goog.dom.browserrange.W3cRange {
        constructor(range: Range);
        
        /**
         * Creates a range object that selects the given node's text.
         * @param {Node} node The node to select.
         * @return {!goog.dom.browserrange.WebKitRange} A WebKit range wrapper object.
         */
        static createFromNodeContents(node: Node): goog.dom.browserrange.WebKitRange;
        
        /**
         * Creates a range object that selects between the given nodes.
         * @param {Node} startNode The node to start with.
         * @param {number} startOffset The offset within the start node.
         * @param {Node} endNode The node to end with.
         * @param {number} endOffset The offset within the end node.
         * @return {!goog.dom.browserrange.WebKitRange} A wrapper object.
         */
        static createFromNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): goog.dom.browserrange.WebKitRange;
    }
}
