// Type definitions for hunspell-spellchecker 1.0
// Project: https://github.com/GitbookIO/hunspell-spellchecker
// Definitions by: Kyle Hensel <https://github.com/k-yle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace Spellchecker {
    interface Dictionary {
        rules: object;
        dictionaryTable: object;
        compoundRules: unknown[];
        compoundRuleCodes: object;
        replacementTable: unknown[];
        flags: object;
    }
}

declare class Spellchecker {
    constructor(dictionary?: Spellchecker.Dictionary);

    /** Parse a dicitonary */
    parse(files: { aff: Buffer; dic: Buffer }): Spellchecker.Dictionary;

    /** Use a parsed dictionary */
    use(dictionary: Spellchecker.Dictionary): void;

    /**
     * Checks whether a word or a capitalization variant exists in the current dictionary.
     * The word is trimmed and several variations of capitalizations are checked.
     * If you want to check a word without any changes made to it, call checkExact()
     */
    check(word: string): boolean;

    /** Checks whether a word exists in the current dictionary. */
    checkExact(word: string): boolean;

    /** Looks up whether a given word is flagged with a given flag. */
    hasFlag(word: string, flag: string): boolean;

    /**
     * Returns a list of suggestions for a misspelled word.
     *
     * @see http://www.norvig.com/spell-correct.html for the basis of this suggestor.
     * This suggestor is primitive, but it works.
     *
     * @param limit The maximum number of suggestions to return.
     */
    suggest(word: string, limit?: number): string[];
}

export = Spellchecker;
