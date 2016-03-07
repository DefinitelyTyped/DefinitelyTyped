declare module goog {
    function require(name: 'goog.crypt.Md5'): typeof goog.crypt.Md5;
}

declare module goog.crypt {

    /**
     * MD5 cryptographic hash constructor.
     * @constructor
     * @extends {goog.crypt.Hash}
     * @final
     * @struct
     */
    class Md5 extends goog.crypt.Hash {
        constructor();
    }
}
