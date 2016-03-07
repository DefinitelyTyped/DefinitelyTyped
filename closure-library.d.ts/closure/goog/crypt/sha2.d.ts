declare module goog {
    function require(name: 'goog.crypt.Sha2'): typeof goog.crypt.Sha2;
}

declare module goog.crypt {

    /**
     * SHA-2 cryptographic hash constructor.
     * This constructor should not be used directly to create the object. Rather,
     * one should use the constructor of the sub-classes.
     * @param {number} numHashBlocks The size of output in 16-byte blocks.
     * @param {!Array<number>} initHashBlocks The hash-specific initialization
     * @constructor
     * @extends {goog.crypt.Hash}
     * @struct
     */
    class Sha2 extends goog.crypt.Hash {
        constructor(numHashBlocks: number, initHashBlocks: Array<number>);
    }
}
