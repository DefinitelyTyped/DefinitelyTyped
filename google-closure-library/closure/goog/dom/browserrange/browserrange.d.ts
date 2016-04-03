declare module goog {
    function require(name: 'goog.dom.browserrange'): typeof goog.dom.browserrange;
    function require(name: 'goog.dom.browserrange.Error'): typeof goog.dom.browserrange.Error;
}

declare module goog.dom.browserrange {

    /**
     * Common error constants.
     * @enum {string}
     */
    type Error = string;
    var Error: {
        NOT_IMPLEMENTED: Error;
    };

    /**
     * Static method that returns the proper type of browser range.
     * @param {Range|TextRange} range A browser range object.
     * @return {!goog.dom.browserrange.AbstractRange} A wrapper object.
     */
    function createRange(range: Range|TextRange): goog.dom.browserrange.AbstractRange;

    /**
     * Static method that returns the proper type of browser range.
     * @param {Node} node The node to select.
     * @return {!goog.dom.browserrange.AbstractRange} A wrapper object.
     */
    function createRangeFromNodeContents(node: Node): goog.dom.browserrange.AbstractRange;

    /**
     * Static method that returns the proper type of browser range.
     * @param {Node} startNode The node to start with.
     * @param {number} startOffset The offset within the node to start.  This is
     *     either the index into the childNodes array for element startNodes or
     *     the index into the character array for text startNodes.
     * @param {Node} endNode The node to end with.
     * @param {number} endOffset The offset within the node to end.  This is
     *     either the index into the childNodes array for element endNodes or
     *     the index into the character array for text endNodes.
     * @return {!goog.dom.browserrange.AbstractRange} A wrapper object.
     */
    function createRangeFromNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number): goog.dom.browserrange.AbstractRange;

    /**
     * Tests whether the given node can contain a range end point.
     * @param {Node} node The node to check.
     * @return {boolean} Whether the given node can contain a range end point.
     */
    function canContainRangeEndpoint(node: Node): boolean;
}
