declare module goog {
    function require(name: 'goog.html.TrustedResourceUrl'): typeof goog.html.TrustedResourceUrl;
}

declare module goog.html {

    /**
     * A URL which is under application control and from which script, CSS, and
     * other resources that represent executable code, can be fetched.
     *
     * Given that the URL can only be constructed from strings under application
     * control and is used to load resources, bugs resulting in a malformed URL
     * should not have a security impact and are likely to be easily detectable
     * during testing. Given the wide number of non-RFC compliant URLs in use,
     * stricter validation could prevent some applications from being able to use
     * this type.
     *
     * Instances of this type must be created via the factory method,
     * ({@code goog.html.TrustedResourceUrl.fromConstant}), and not by invoking its
     * constructor. The constructor intentionally takes no parameters and the type
     * is immutable; hence only a default instance corresponding to the empty
     * string can be obtained via constructor invocation.
     *
     * @see goog.html.TrustedResourceUrl#fromConstant
     * @constructor
     * @final
     * @struct
     * @implements {goog.i18n.bidi.DirectionalString}
     * @implements {goog.string.TypedString}
     */
    class TrustedResourceUrl {
        constructor();
        
        /**
         * Performs a runtime check that the provided object is indeed a
         * TrustedResourceUrl object, and returns its value.
         *
         * @param {!goog.html.TrustedResourceUrl} trustedResourceUrl The object to
         *     extract from.
         * @return {string} The trustedResourceUrl object's contained string, unless
         *     the run-time type check fails. In that case, {@code unwrap} returns an
         *     innocuous string, or, if assertions are enabled, throws
         *     {@code goog.asserts.AssertionError}.
         */
        static unwrap(trustedResourceUrl: goog.html.TrustedResourceUrl): string;
        
        /**
         * Creates a TrustedResourceUrl object from a compile-time constant string.
         *
         * Compile-time constant strings are inherently program-controlled and hence
         * trusted.
         *
         * @param {!goog.string.Const} url A compile-time-constant string from which to
         *     create a TrustedResourceUrl.
         * @return {!goog.html.TrustedResourceUrl} A TrustedResourceUrl object
         *     initialized to {@code url}.
         */
        static fromConstant(url: goog.string$.Const): goog.html.TrustedResourceUrl;
        
        /**
         * Package-internal utility method to create TrustedResourceUrl instances.
         *
         * @param {string} url The string to initialize the TrustedResourceUrl object
         *     with.
         * @return {!goog.html.TrustedResourceUrl} The initialized TrustedResourceUrl
         *     object.
         * @package
         */
        static createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(url: string): goog.html.TrustedResourceUrl;
    }
}
