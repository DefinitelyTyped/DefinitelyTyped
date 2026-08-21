declare class Subtag {
    /**
     * Get the subtag type (either 'language', 'extlang', 'script', 'region' or 'variant'). See
     * [RFC 5646 section 2.2](http://tools.ietf.org/html/rfc5646#section-2.2) for type definitions.
     */
    type(): "language" | "extlang" | "script" | "region" | "variant";

    /**
     * Returns an array of description strings (a subtag may have more than one description).
     *
     * ```
     * > tags.language('ro').descriptions();
     * ['Romanian', 'Moldavian', 'Moldovan']
     * ```
     */
    descriptions(): string[];

    /**
     * Returns a preferred subtag as a `Subtag` object if the subtag is deprecated. For example, `ro` is preferred over
     * deprecated `mo`.
     *
     * ```
     * > tags.language('mo').preferred();
     * Subtag
     * ```
     */
    preferred(): Subtag | null;

    /**
     * For subtags of type 'language' or 'extlang', returns a `Subtag` object representing the language's default
     * script. See [RFC 5646 section 3.1.9](http://tools.ietf.org/html/rfc5646#section-3.1.9) for a definition of
     * 'Suppress-Script'.
     */
    script(): Subtag | null;

    /**
     * Returns the subtag scope as a string, or `null` if the subtag has no scope.
     *
     * Tip: if the subtag represents a macrolanguage, you can use `tags.languages(macrolanguage)` to get a list of all
     * the macrolanguage's individual languages.
     *
     * ```
     * > tags.language('zh').scope();
     * 'macrolanguage'
     * > tags.language('nah').scope();
     * 'collection'
     * ```
     */
    scope(): string | null;

    /**
     * Returns a date string reflecting the deprecation date if the subtag is deprecated, otherwise returns `null`.
     *
     * ```
     * > tags.language('ja').deprecated();
     * '2008-11-22'
     * ```
     */
    deprecated(): string | null;

    /**
     * Returns a date string reflecting the date the subtag was added to the registry.
     *
     * ```
     * > tags.language('ja').added();
     * '2005-10-16'
     * ```
     */
    added(): string;

    /**
     * Returns an array of comments, if any, otherwise returns an empty array.
     *
     * ```
     * > tags.language('nmf').comments();
     * ['see ntx']
     * ```
     */
    comments(): string[];

    /**
     * Return the subtag code formatted according to the case conventions defined in
     * [RFC 5646 section 2.1.1](http://tools.ietf.org/html/rfc5646#section-2.1.1).
     *
     * - language codes are made lowercase ('mn' for Mongolian)
     * - script codes are made lowercase with the initial letter capitalized ('Cyrl' for Cyrillic)
     * - country codes are capitalized ('MN' for Mongolia)
     */
    format(): string;
}

export = Subtag;
