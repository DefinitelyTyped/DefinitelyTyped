declare module goog {
    function require(name: 'goog.dom.pattern.AbstractPattern'): typeof goog.dom.pattern.AbstractPattern;
}

declare module goog.dom.pattern {

    /**
     * Base pattern class for DOM matching.
     *
     * @constructor
     */
    class AbstractPattern {
        constructor();
        
        /**
         * The first node matched by this pattern.
         * @type {Node}
         */
        matchedNode: Node;
        
        /**
         * Reset any internal state this pattern keeps.
         */
        reset(): void;
        
        /**
         * Test whether this pattern matches the given token.
         *
         * @param {Node} token Token to match against.
         * @param {goog.dom.TagWalkType} type The type of token.
         * @return {goog.dom.pattern.MatchType} {@code MATCH} if the pattern matches.
         */
        matchToken(token: Node, type: goog.dom.TagWalkType): goog.dom.pattern.MatchType;
    }
}
