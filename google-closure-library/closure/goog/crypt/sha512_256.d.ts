declare module goog {
    function require(name: 'goog.crypt.Sha512_256'): typeof goog.crypt.Sha512_256;
}

declare module goog.crypt {

    /**
     * Constructs a SHA-512/256 cryptographic hash.
     *
     * @constructor
     * @extends {goog.crypt.Sha2_64bit}
     * @final
     * @struct
     */
    class Sha512_256 extends goog.crypt.Sha2_64bit {
        constructor();
    }
}
