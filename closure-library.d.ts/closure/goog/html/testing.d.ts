declare module goog {
    function require(name: 'goog.html.testing'): typeof goog.html.testing;
}

declare module goog.html.testing {

    /**
     * Creates a SafeHtml wrapping the given value. No validation is performed.
     *
     * This function is for use in tests only and must never be used in production
     * code.
     *
     * @param {string} html The string to wrap into a SafeHtml.
     * @param {?goog.i18n.bidi.Dir=} opt_dir The optional directionality of the
     *     SafeHtml to be constructed. A null or undefined value signifies an
     *     unknown directionality.
     * @return {!goog.html.SafeHtml}
     */
    function newSafeHtmlForTest(html: string, opt_dir?: goog.i18n.bidi.Dir): goog.html.SafeHtml;

    /**
     * Creates a SafeScript wrapping the given value. No validation is performed.
     *
     * This function is for use in tests only and must never be used in production
     * code.
     *
     * @param {string} script The string to wrap into a SafeScript.
     * @return {!goog.html.SafeScript}
     */
    function newSafeScriptForTest(script: string): goog.html.SafeScript;

    /**
     * Creates a SafeStyle wrapping the given value. No validation is performed.
     *
     * This function is for use in tests only and must never be used in production
     * code.
     *
     * @param {string} style String to wrap into a SafeStyle.
     * @return {!goog.html.SafeStyle}
     */
    function newSafeStyleForTest(style: string): goog.html.SafeStyle;

    /**
     * Creates a SafeStyleSheet wrapping the given value. No validation is
     * performed.
     *
     * This function is for use in tests only and must never be used in production
     * code.
     *
     * @param {string} styleSheet String to wrap into a SafeStyleSheet.
     * @return {!goog.html.SafeStyleSheet}
     */
    function newSafeStyleSheetForTest(styleSheet: string): goog.html.SafeStyleSheet;

    /**
     * Creates a SafeUrl wrapping the given value. No validation is performed.
     *
     * This function is for use in tests only and must never be used in production
     * code.
     *
     * @param {string} url String to wrap into a SafeUrl.
     * @return {!goog.html.SafeUrl}
     */
    function newSafeUrlForTest(url: string): goog.html.SafeUrl;

    /**
     * Creates a TrustedResourceUrl wrapping the given value. No validation is
     * performed.
     *
     * This function is for use in tests only and must never be used in production
     * code.
     *
     * @param {string} url String to wrap into a TrustedResourceUrl.
     * @return {!goog.html.TrustedResourceUrl}
     */
    function newTrustedResourceUrlForTest(url: string): goog.html.TrustedResourceUrl;
}
