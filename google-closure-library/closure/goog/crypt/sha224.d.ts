declare module goog {
    function require(name: 'goog.crypt.Sha224'): typeof goog.crypt.Sha224;
}

declare module goog.crypt {

    /**
     * SHA-224 cryptographic hash constructor.
     *
     * @constructor
     * @extends {goog.crypt.Sha2}
     * @final
     * @struct
     */
    class Sha224 extends goog.crypt.Sha2 {
        constructor();
    }
}
