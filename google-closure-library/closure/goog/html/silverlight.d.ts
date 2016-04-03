declare module goog {
    function require(name: 'goog.html.silverlight'): typeof goog.html.silverlight;
}

declare module goog.html.silverlight {

    /**
     * Creates a SafeHtml representing an object tag, for loading Silverlight files.
     *
     * The following attributes are set to these fixed values:
     * - data: data:application/x-silverlight-2,
     * - type: application/x-silverlight-2
     * - typemustmatch: "" (the empty string, meaning true for a boolean attribute)
     *
     * @param {!goog.html.TrustedResourceUrl} source The value of the source param.
     * @param {!Object<string, string>=} opt_params Mapping used to generate child
     *     param tags. Each tag has a name and value attribute, as defined in
     *     mapping. Only names consisting of [a-zA-Z0-9-] are allowed. Value of
     *     null or undefined causes the param tag to be omitted.
     * @param {!Object<string, goog.html.SafeHtml.AttributeValue_>=}
     *     opt_attributes Mapping from other attribute names to their values. Only
     *     attribute names consisting of [a-zA-Z0-9-] are allowed. Value of null or
     *     undefined causes the attribute to be omitted.
     * @return {!goog.html.SafeHtml} The SafeHtml content with the object tag.
     * @throws {Error} If invalid attribute or param name, or attribute or param
     *     value is provided. Also if opt_attributes or opt_params contains any of
     *     the attributes set to fixed values, documented above, or contains source.
     *
     */
    function createObject(source: goog.html.TrustedResourceUrl, opt_params?: {[index: string]: string}, opt_attributes?: {[index: string]: goog.html.SafeHtml.AttributeValue_}): goog.html.SafeHtml;
}
