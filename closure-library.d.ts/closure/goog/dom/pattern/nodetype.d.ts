declare module goog {
    function require(name: 'goog.dom.pattern.NodeType'): typeof goog.dom.pattern.NodeType;
}

declare module goog.dom.pattern {

    /**
     * Pattern object that matches any node of the given type.
     * @param {goog.dom.NodeType} nodeType The node type to match.
     * @constructor
     * @extends {goog.dom.pattern.AbstractPattern}
     * @final
     */
    class NodeType extends goog.dom.pattern.AbstractPattern {
        constructor(nodeType: goog.dom.NodeType);
        
        /**
         * Test whether the given token is a text token which matches the string or
         * regular expression provided in the constructor.
         * @param {Node} token Token to match against.
         * @param {goog.dom.TagWalkType} type The type of token.
         * @return {goog.dom.pattern.MatchType} <code>MATCH</code> if the pattern
         *     matches, <code>NO_MATCH</code> otherwise.
         * @override
         */
        matchToken(token: Node, type: goog.dom.TagWalkType): goog.dom.pattern.MatchType;
    }
}
