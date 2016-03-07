declare module goog {
    function require(name: 'goog.dom.pattern.ChildMatches'): typeof goog.dom.pattern.ChildMatches;
}

declare module goog.dom.pattern {

    /**
     * Pattern object that matches any nodes at or below the current tree depth.
     *
     * @param {goog.dom.pattern.AbstractPattern} childPattern Pattern to collect
     *     child matches of.
     * @param {number=} opt_minimumMatches Enforce a minimum nuber of matches.
     *     Defaults to 0.
     * @constructor
     * @extends {goog.dom.pattern.AllChildren}
     * @final
     */
    class ChildMatches extends goog.dom.pattern.AllChildren {
        constructor(childPattern: goog.dom.pattern.AbstractPattern, opt_minimumMatches?: number);
        
        /**
         * Array of matched child nodes.
         *
         * @type {Array<Node>}
         */
        matches: Array<Node>;
        
        /**
         * Test whether the given token is on the same level.
         *
         * @param {Node} token Token to match against.
         * @param {goog.dom.TagWalkType} type The type of token.
         * @return {goog.dom.pattern.MatchType} {@code MATCHING} if the token is on the
         *     same level or deeper and {@code BACKTRACK_MATCH} if not.
         * @override
         */
        matchToken(token: Node, type: goog.dom.TagWalkType): goog.dom.pattern.MatchType;
    }
}
