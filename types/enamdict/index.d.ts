// Type definitions for enamdict 0.1
// Project: https://github.com/jeresig/node-enamdict#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * A module for efficiently querying name records from `ENAMDICT` (A Japanese-English mapping of proper names).
 * Specifically this module is designed for the use case of finding a good English/Kana/Kanji mapping for given names and surnames.
 * Finding these mappings can be especially challenging and ENAMDICT appears to have the best available mapping.
 * At this time all other entries in ENAMDICT are ignored (such as place names, full names, company names, etc.).
 */

/**
 * Asynchronously loads the previously-generated reduced ENAMDICT.
 * Must be called before attempting to call `.find()` or `.findKanji()`.
 */
export function init(callback: () => void): void;

/**
 * Finds matching entries by Romaji name (English name).
 * This is the default search mechanism, the search index is optimized for this particular method
 */
export function find(romajiName: string): Entries;

/**
 * Finds matching entries by Kanji name (Japanese name).
 * The search index is NOT optimized for this particular method and may be slow
 */
export function findKanji(kanjiName: string): Entries;

/**
 * The result object returned from the `.find()` and `.findKanji()` methods.
 * Holds a collection of entries that are then used in aggregate
 */
export interface Entries {
    /**
     * Returns an array of objects representing matching entries.
     */
    entries(): Entry[];
    /**
     * Returns the most popular type of the name, aggregated from all matching entries.
     * For example if 5 entries were found, three of which were "surname", 1 of which was "given", and 1 of which was "unknown" then this method would return "surname".
     * Returns the same possible values as the type property itself.
     */
    type(): NameType;

    /**
     * If a query was done with `.find()` then this will return a string representing the Kana reading of the name.
     *
     * If a query was done with `.findKanji()` then this will return an array of all the possible Kana readings of the Kanji.
     */
    kana(): string | string[];
    /**
     * If a query was done with .find() then this will return a string representing the Romaji reading of the name.
     *
     * If a query was done with `.findKanji()` then this will return an array of all the possible Romaji readings of the Kanji.
     */
    romaji(): string | string[];
    /**
     * If a query was done with `.find()` then this will return an array of all the possible Kanji versions of the name.
     *
     * If a query was done with `.findKanji()` then this will return a string representing the Kanji version of the name.
     */
    kanji(): string | string[];
}

export interface Entry {
    /**
     * A string holding an English (Romaji) representation of a name.
     */
    romaji: string | string[];
    /**
     *  A string holding a Kana representation of a name.
     */
    kana: string | string[];
    /**
     * A string holding a Kanji representation of a name.
     */
    kanji: string | string[];
    /**
     * A string that represents the type of the name.
     */
    type: NameType;
}

/**
 * the type of the name.
 */
export type NameType = 'unknown' | 'surname' | 'given';
