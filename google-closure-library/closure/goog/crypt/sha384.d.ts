declare module goog {
    function require(name: 'goog.crypt.Sha384'): typeof goog.crypt.Sha384;
}

declare module goog.crypt {

    /**
     * Constructs a SHA-384 cryptographic hash.
     *
     * @constructor
     * @extends {goog.crypt.Sha2_64bit}
     * @final
     * @struct
     */
    class Sha384 extends goog.crypt.Sha2_64bit {
        constructor();
    }
}
