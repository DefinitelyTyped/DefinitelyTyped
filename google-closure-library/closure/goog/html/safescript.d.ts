declare module goog {
    function require(name: 'goog.html.SafeScript'): typeof goog.html.SafeScript;
}

declare module goog.html {

    /**
     * A string-like object which represents JavaScript code and that carries the
     * security type contract that its value, as a string, will not cause execution
     * of unconstrained attacker controlled code (XSS) when evaluated as JavaScript
     * in a browser.
     *
     * Instances of this type must be created via the factory method
     * {@code goog.html.SafeScript.fromConstant} and not by invoking its
     * constructor. The constructor intentionally takes no parameters and the type
     * is immutable; hence only a default instance corresponding to the empty string
     * can be obtained via constructor invocation.
     *
     * A SafeScript's string representation can safely be interpolated as the
     * content of a script element within HTML. The SafeScript string should not be
     * escaped before interpolation.
     *
     * Note that the SafeScript might contain text that is attacker-controlled but
     * that text should have been interpolated with appropriate escaping,
     * sanitization and/or validation into the right location in the script, such
     * that it is highly constrained in its effect (for example, it had to match a
     * set of whitelisted words).
     *
     * A SafeScript can be constructed via security-reviewed unchecked
     * conversions. In this case producers of SafeScript must ensure themselves that
     * the SafeScript does not contain unsafe script. Note in particular that
     * {@code &lt;} is dangerous, even when inside JavaScript strings, and so should
     * always be forbidden or JavaScript escaped in user controlled input. For
     * example, if {@code &lt;/script&gt;&lt;script&gt;evil&lt;/script&gt;"} were
     * interpolated inside a JavaScript string, it would break out of the context
     * of the original script element and {@code evil} would execute. Also note
     * that within an HTML script (raw text) element, HTML character references,
     * such as "&lt;" are not allowed. See
     * http://www.w3.org/TR/html5/scripting-1.html#restrictions-for-contents-of-script-elements.
     *
     * @see goog.html.SafeScript#fromConstant
     * @constructor
     * @final
     * @struct
     * @implements {goog.string.TypedString}
     */
    class SafeScript {
        constructor();
        
        /**
         * A SafeScript instance corresponding to the empty string.
         * @const {!goog.html.SafeScript}
         */
        static EMPTY: any;
        
        /**
         * Creates a SafeScript object from a compile-time constant string.
         *
         * @param {!goog.string.Const} script A compile-time-constant string from which
         *     to create a SafeScript.
         * @return {!goog.html.SafeScript} A SafeScript object initialized to
         *     {@code script}.
         */
        static fromConstant(script: goog.string$.Const): goog.html.SafeScript;
        
        /**
         * Performs a runtime check that the provided object is indeed a
         * SafeScript object, and returns its value.
         *
         * @param {!goog.html.SafeScript} safeScript The object to extract from.
         * @return {string} The safeScript object's contained string, unless
         *     the run-time type check fails. In that case, {@code unwrap} returns an
         *     innocuous string, or, if assertions are enabled, throws
         *     {@code goog.asserts.AssertionError}.
         */
        static unwrap(safeScript: goog.html.SafeScript): string;
        
        /**
         * Package-internal utility method to create SafeScript instances.
         *
         * @param {string} script The string to initialize the SafeScript object with.
         * @return {!goog.html.SafeScript} The initialized SafeScript object.
         * @package
         */
        static createSafeScriptSecurityPrivateDoNotAccessOrElse(script: string): goog.html.SafeScript;
    }
}
