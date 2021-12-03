// Type definitions for nspell 2.1
// Project: https://github.com/wooorm/nspell#readme
// Definitions by: Ulrich Block <https://github.com/ulrichblock>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

/// <reference types="node" />

/**
 * Returned by NSpell.spell with the following properties:
 * @param correct - Whether word is correctly spelled
 * @param forbidden - Whether word is actually correct, but forbidden from showing up as such (often by the users wish)
 * @param warn - Whether word is correct, but should trigger a warning (rarely used in dictionaries)
 */
interface SpellCheck {
    correct: boolean;
    forbidden: boolean;
    warn: boolean;
}

interface Dictionary {
    aff: Buffer | string;
    dic?: Buffer | string | undefined;
}

declare function NSpell(aff: Buffer | string, dic?: Buffer | string): NSpell;
declare function NSpell(dictionary: Dictionary | Dictionary[]): NSpell;

/**
 * Describes instance of NSpell, which is returned by the default factory function.
 */
declare class NSpell {
    constructor(aff: Buffer | string, dic?: Buffer | string)
    constructor(dictionary: Dictionary | Dictionary[])

    /**
     * Add word to known words.
     * If no model is given, the word will be marked as correct in the future, and will show up in spelling suggestions.
     * If a model is given, word will be handled the same as model.
     * @returns Operated on instance.
     */
    add(word: string, model?: string): NSpell;

    /**
     * Check if word is correctly spelled
     * @returns Whether word is correctly spelled.
     */
    correct(word: string): boolean;

    /**
     * Add an extra dictionary to the spellchecker.
     * @returns Operated on instance.
     */
    dictionary(words: string | Buffer): NSpell;

    /**
     * Add a personal dictionary.
     * @returns Operated on instance.
     */
    personal(words: string | Buffer): NSpell;

    /**
     * Remove word from the known words.
     * @returns  Operated on instance.
     */
    remove(word: string): NSpell;

    /**
     * Suggest correctly spelled words close to word.
     * @returns List with zero or more suggestions.
     */
    suggest(word: string): string[];

    /**
     * Get spelling information for word.
     * @returns Object, with the properties correct, forbidden and warn
     */
    spell(word: string): SpellCheck;

    /**
     * Get extra word characters defined by the loaded affix file.
     * Most affix files don’t set these, but for example the en-US dictionary sets 0123456789.
     * @returns Defined word characters, if any.
     */
    wordCharacters(): string | undefined;
}

/**
 * Create a new spell checker. Passing an affix document is required, through any of the below mentioned signatures.
 * nspell is useless without at least one dic passed:
 * make sure to pass one either in the constructor or to NSpell.dictionary
 * @param aff - Affix document to use. Must be in UTF-8 when buffer
 * @param dic - Dictionary document to use. Must be in UTF-8 when buffer
 * @param dictionary - Object with aff (required) and dic (optional) properties
 * @param dictionary - List of dictionary objects. The first must have an aff key, other aff keys are ignored
 */
export = NSpell;
