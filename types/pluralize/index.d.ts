/**
 * Pluralize or singularize a word based on the passed in count.
 *
 * @param word
 * @param count
 * @param inclusive
 */
declare function pluralize(word: string, count?: number, inclusive?: boolean): string;

declare namespace pluralize {
    /**
     * Pluralize a word based.
     *
     * @param word
     */
    function plural(word: string): string;

    /**
     * Singularize a word based.
     *
     * @param word
     */
    function singular(word: string): string;

    /**
     * Add a pluralization rule to the collection.
     *
     * @param rule
     * @param replacement
     */
    function addPluralRule(rule: string | RegExp, replacement: string): void;

    /**
     * Add a singularization rule to the collection.
     *
     * @param rule
     * @param replacement
     */
    function addSingularRule(rule: string | RegExp, replacement: string): void;

    /**
     * Add an irregular word definition.
     *
     * @param single
     * @param plural
     */
    function addIrregularRule(single: string, plural: string): void;

    /**
     * Add an uncountable word rule.
     *
     * @param word
     */
    function addUncountableRule(word: string | RegExp): void;

    /**
     * Test if provided word is plural.
     *
     * @param word
     */
    function isPlural(word: string): boolean;

    /**
     * Test if provided word is singular.
     *
     * @param word
     */
    function isSingular(word: string): boolean;
}

export = pluralize;
export as namespace pluralize;
