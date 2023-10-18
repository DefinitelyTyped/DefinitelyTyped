export = generatePassphrase;

/**
 * Generate a list of `count` words, randomly shuffled and without replacement.
 *
 * @example
 * import generatePassphrase = require('eff-diceware-passphrase')
 *
 * generatePassphrase(8) // List of 8 words
 */
declare function generatePassphrase(count: number): string[];

declare namespace generatePassphrase {
    /**
     * Sorted array of all words in the Diceware list.
     */
    const words: readonly string[];
    /**
     * Convenience function for generating a password with at least `mimimum` bits of entropy.
     *
     * @example
     * import generatePassphrase = require('eff-diceware-passphrase')
     *
     * generatePassphrase.entropy(100) // List of words with at least 100 bits of entropy
     */
    function entropy(minimum: number): string[];
    /**
     * Like `Array.prototype.indexOf`.
     *
     * @returns The index in `generatePassphrase.words` or `-1` if not found.
     */
    function indexOf(word: string): number;
    /**
     * Like `Array.prototype.includes`.
     *
     * @returns `true` if part of `generatePassphrase.words` or `false` if not found.
     */
    function includes(word: string): boolean;
    /**
     * Can be used to slice the list for eg. autocomplete.
     *
     * @returns The index of the first occurrence of the `prefix`, or the end of the wordlist if no prefixes match.
     */
    function indexOfPrefix(prefix: string): number;
}
