declare module goog {
    function require(name: 'goog.crypt.Sha2_64bit'): typeof goog.crypt.Sha2_64bit;
}

declare module goog.crypt {

    /**
     * Constructs a SHA-2 64-bit cryptographic hash.
     * This class should not be used. Rather, one should use one of its
     * subclasses.
     * @constructor
     * @param {number} numHashBlocks The size of the output in 16-byte blocks
     * @param {!Array<number>} initHashBlocks The hash-specific initialization
     *     vector, as a sequence of sixteen 32-bit numbers.
     * @extends {goog.crypt.Hash}
     * @struct
     */
    class Sha2_64bit extends goog.crypt.Hash {
        constructor(numHashBlocks: number, initHashBlocks: Array<number>);
    }
}
