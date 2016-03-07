declare module goog {
    function require(name: 'goog.crypt.Sha512'): typeof goog.crypt.Sha512;
}

declare module goog.crypt {

    /**
     * Constructs a SHA-512 cryptographic hash.
     *
     * @constructor
     * @extends {goog.crypt.Sha2_64bit}
     * @final
     * @struct
     */
    class Sha512 extends goog.crypt.Sha2_64bit {
        constructor();
    }
}
