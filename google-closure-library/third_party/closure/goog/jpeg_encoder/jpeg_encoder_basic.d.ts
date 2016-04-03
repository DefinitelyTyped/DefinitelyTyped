declare module goog {
    function require(name: 'goog.crypt.JpegEncoder'): typeof goog.crypt.JpegEncoder;
}

declare module goog.crypt {

    /**
     * Initializes the JpegEncoder.
     *
     * @constructor
     * @param {number=} opt_quality The compression quality. Default 50.
     */
    class JpegEncoder {
        constructor(opt_quality?: number);
    }
}
