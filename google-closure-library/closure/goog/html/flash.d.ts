declare module goog {
    function require(name: 'goog.html.flash'): typeof goog.html.flash;
}

declare module goog.html.flash {

    /**
     * @param {!Object<string, string|!goog.string.TypedString>} defaultParams
     * @param {!Object<string, string>=}
     *     opt_params Optional params passed to create*().
     * @return {!Array<!goog.html.SafeHtml>} Combined params.
     * @throws {Error} If opt_attributes contains an attribute with the same name
     *     as an attribute in fixedAttributes.
     * @package
     */
    function combineParams(defaultParams: {[index: string]: string|goog.string$.TypedString}, opt_params?: {[index: string]: string}): Array<goog.html.SafeHtml>;

    /**
     * Checks that keys are not present as keys in maps.
     * @param {!Array<string>} keys Keys that must not be present, lower-case.
     * @param {!Object<string, goog.html.SafeHtml.AttributeValue_>=}
     *     opt_attributes Optional attributes passed to create*().
     * @param {!Object<string, string>=}  opt_params Optional params passed to
     *     createObject*().
     * @throws {Error} If any of keys exist as a key, ignoring case, in
     *     opt_attributes or opt_params.
     * @package
     */
    function verifyKeysNotInMaps(keys: Array<string>, opt_attributes?: {[index: string]: goog.html.SafeHtml.AttributeValue_}, opt_params?: {[index: string]: string}): void;
}
