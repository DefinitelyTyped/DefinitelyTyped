declare module goog {
    function require(name: 'goog.crypt.Sha1'): typeof goog.crypt.Sha1;
}

declare module goog.crypt {

    /**
     * SHA-1 cryptographic hash constructor.
     *
     * The properties declared here are discussed in the above algorithm document.
     * @constructor
     * @extends {goog.crypt.Hash}
     * @final
     * @struct
     */
    class Sha1 extends goog.crypt.Hash {
        constructor();
    }
}
