declare module goog {
    function require(name: 'goog.dom.pattern.Matcher'): typeof goog.dom.pattern.Matcher;
}

declare module goog.dom.pattern {

    /**
     * Given a set of patterns and a root node, this class tests the patterns in
     * parallel.
     *
     * It is not (yet) a smart matcher - it doesn't do any advanced backtracking.
     * Given the pattern <code>DIV, SPAN</code> the matcher will not match
     * <code>DIV, DIV, SPAN</code> because it starts matching at the first
     * <code>DIV</code>, fails to match <code>SPAN</code> at the second, and never
     * backtracks to try again.
     *
     * It is also possible to have a set of complex patterns that when matched in
     * parallel will miss some possible matches.  Running multiple times will catch
     * all matches eventually.
     *
     * @constructor
     * @final
     */
    class Matcher {
        constructor();
        
        /**
         * Adds a pattern to be matched.  The callback can return an object whose keys
         * are processing instructions.
         *
         * @param {goog.dom.pattern.AbstractPattern} pattern The pattern to add.
         * @param {Function} callback Function to call when a match is found.  Uses
         *     the above semantics.
         */
        addPattern(pattern: goog.dom.pattern.AbstractPattern, callback: Function): void;
        
        /**
         * Match the set of patterns against a match tree.
         *
         * @param {Node} node The root node of the tree to match.
         */
        match(node: Node): void;
    }
}
