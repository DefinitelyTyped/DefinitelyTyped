declare namespace RegexEscape {
    /**
     * Adds the `escape` function to the {@link RegExp} class.
     * Note that this behaviour is **not** reflected by the types
     */
    function proto(): typeof RegexEscape;
    /**
     * A version of the `proto` function that will modify
     * the {@link RegExp} class's types
     *
     * This *does not technically reflect the real code*,
     * but can be useful for the type assertion provided
     *
     * @param regexp The actual {@link RegExp} object
     * @example
     * RegexEscape.proto(RegExp);
     * RegExp.escape("$foo"); // "\\$foo"
     */
    function proto(regexp: RegExpConstructor): asserts regexp is RegExpConstructor & { escape: typeof RegexEscape };
}

/**
 * Escapes a string for use in a regular expression
 * @param input The string to escape
 * @return The escaped string
 * @example
 * RegExp.escape("$foo"); // "\\$foo"
 */
declare function RegexEscape(input: string): string;

export = RegexEscape;
