declare module goog {
    function require(name: 'goog.html.SafeHtml'): typeof goog.html.SafeHtml;
}

declare module goog.html {

    /**
     * A string that is safe to use in HTML context in DOM APIs and HTML documents.
     *
     * A SafeHtml is a string-like object that carries the security type contract
     * that its value as a string will not cause untrusted script execution when
     * evaluated as HTML in a browser.
     *
     * Values of this type are guaranteed to be safe to use in HTML contexts,
     * such as, assignment to the innerHTML DOM property, or interpolation into
     * a HTML template in HTML PC_DATA context, in the sense that the use will not
     * result in a Cross-Site-Scripting vulnerability.
     *
     * Instances of this type must be created via the factory methods
     * ({@code goog.html.SafeHtml.create}, {@code goog.html.SafeHtml.htmlEscape}),
     * etc and not by invoking its constructor.  The constructor intentionally
     * takes no parameters and the type is immutable; hence only a default instance
     * corresponding to the empty string can be obtained via constructor invocation.
     *
     * @see goog.html.SafeHtml#create
     * @see goog.html.SafeHtml#htmlEscape
     * @constructor
     * @final
     * @struct
     * @implements {goog.i18n.bidi.DirectionalString}
     * @implements {goog.string.TypedString}
     */
    class SafeHtml {
        constructor();
        
        /**
         * A SafeHtml instance corresponding to the empty string.
         * @const {!goog.html.SafeHtml}
         */
        static EMPTY: any;
        
        /**
         * Performs a runtime check that the provided object is indeed a SafeHtml
         * object, and returns its value.
         * @param {!goog.html.SafeHtml} safeHtml The object to extract from.
         * @return {string} The SafeHtml object's contained string, unless the run-time
         *     type check fails. In that case, {@code unwrap} returns an innocuous
         *     string, or, if assertions are enabled, throws
         *     {@code goog.asserts.AssertionError}.
         */
        static unwrap(safeHtml: goog.html.SafeHtml): string;
        
        /**
         * Returns HTML-escaped text as a SafeHtml object.
         *
         * If text is of a type that implements
         * {@code goog.i18n.bidi.DirectionalString}, the directionality of the new
         * {@code SafeHtml} object is set to {@code text}'s directionality, if known.
         * Otherwise, the directionality of the resulting SafeHtml is unknown (i.e.,
         * {@code null}).
         *
         * @param {!goog.html.SafeHtml.TextOrHtml_} textOrHtml The text to escape. If
         *     the parameter is of type SafeHtml it is returned directly (no escaping
         *     is done).
         * @return {!goog.html.SafeHtml} The escaped text, wrapped as a SafeHtml.
         */
        static htmlEscape(textOrHtml: goog.html.SafeHtml.TextOrHtml_): goog.html.SafeHtml;
        
        /**
         * Returns HTML-escaped text as a SafeHtml object, with newlines changed to
         * &lt;br&gt;.
         * @param {!goog.html.SafeHtml.TextOrHtml_} textOrHtml The text to escape. If
         *     the parameter is of type SafeHtml it is returned directly (no escaping
         *     is done).
         * @return {!goog.html.SafeHtml} The escaped text, wrapped as a SafeHtml.
         */
        static htmlEscapePreservingNewlines(textOrHtml: goog.html.SafeHtml.TextOrHtml_): goog.html.SafeHtml;
        
        /**
         * Returns HTML-escaped text as a SafeHtml object, with newlines changed to
         * &lt;br&gt; and escaping whitespace to preserve spatial formatting. Character
         * entity #160 is used to make it safer for XML.
         * @param {!goog.html.SafeHtml.TextOrHtml_} textOrHtml The text to escape. If
         *     the parameter is of type SafeHtml it is returned directly (no escaping
         *     is done).
         * @return {!goog.html.SafeHtml} The escaped text, wrapped as a SafeHtml.
         */
        static htmlEscapePreservingNewlinesAndSpaces(textOrHtml: goog.html.SafeHtml.TextOrHtml_): goog.html.SafeHtml;
        
        /**
         * Coerces an arbitrary object into a SafeHtml object.
         *
         * If {@code textOrHtml} is already of type {@code goog.html.SafeHtml}, the same
         * object is returned. Otherwise, {@code textOrHtml} is coerced to string, and
         * HTML-escaped. If {@code textOrHtml} is of a type that implements
         * {@code goog.i18n.bidi.DirectionalString}, its directionality, if known, is
         * preserved.
         *
         * @param {!goog.html.SafeHtml.TextOrHtml_} textOrHtml The text or SafeHtml to
         *     coerce.
         * @return {!goog.html.SafeHtml} The resulting SafeHtml object.
         * @deprecated Use goog.html.SafeHtml.htmlEscape.
         */
        static from(textOrHtml: goog.html.SafeHtml.TextOrHtml_): goog.html.SafeHtml;
        
        /**
         * Creates a SafeHtml content consisting of a tag with optional attributes and
         * optional content.
         *
         * For convenience tag names and attribute names are accepted as regular
         * strings, instead of goog.string.Const. Nevertheless, you should not pass
         * user-controlled values to these parameters. Note that these parameters are
         * syntactically validated at runtime, and invalid values will result in
         * an exception.
         *
         * Example usage:
         *
         * goog.html.SafeHtml.create('br');
         * goog.html.SafeHtml.create('div', {'class': 'a'});
         * goog.html.SafeHtml.create('p', {}, 'a');
         * goog.html.SafeHtml.create('p', {}, goog.html.SafeHtml.create('br'));
         *
         * goog.html.SafeHtml.create('span', {
         *   'style': {'margin': '0'}
         * });
         *
         * To guarantee SafeHtml's type contract is upheld there are restrictions on
         * attribute values and tag names.
         *
         * - For attributes which contain script code (on*), a goog.string.Const is
         *   required.
         * - For attributes which contain style (style), a goog.html.SafeStyle or a
         *   goog.html.SafeStyle.PropertyMap is required.
         * - For attributes which are interpreted as URLs (e.g. src, href) a
         *   goog.html.SafeUrl or goog.string.Const is required.
         * - For tags which can load code, more specific goog.html.SafeHtml.create*()
         *   functions must be used. Tags which can load code and are not supported by
         *   this function are embed, iframe, link, object, script, style, and template.
         *
         * @param {string} tagName The name of the tag. Only tag names consisting of
         *     [a-zA-Z0-9-] are allowed. Tag names documented above are disallowed.
         * @param {!Object<string, goog.html.SafeHtml.AttributeValue_>=}
         *     opt_attributes Mapping from attribute names to their values. Only
         *     attribute names consisting of [a-zA-Z0-9-] are allowed. Value of null or
         *     undefined causes the attribute to be omitted.
         * @param {!goog.html.SafeHtml.TextOrHtml_|
         *     !Array<!goog.html.SafeHtml.TextOrHtml_>=} opt_content Content to
         *     HTML-escape and put inside the tag. This must be empty for void tags
         *     like <br>. Array elements are concatenated.
         * @return {!goog.html.SafeHtml} The SafeHtml content with the tag.
         * @throws {Error} If invalid tag name, attribute name, or attribute value is
         *     provided.
         * @throws {goog.asserts.AssertionError} If content for void tag is provided.
         */
        static create(tagName: string, opt_attributes?: {[index: string]: goog.html.SafeHtml.AttributeValue_}, opt_content?: goog.html.SafeHtml.TextOrHtml_|Array<goog.html.SafeHtml.TextOrHtml_>): goog.html.SafeHtml;
        
        /**
         * Creates a SafeHtml representing an iframe tag.
         *
         * By default the sandbox attribute is set to an empty value, which is the most
         * secure option, as it confers the iframe the least privileges. If this
         * is too restrictive then granting individual privileges is the preferable
         * option. Unsetting the attribute entirely is the least secure option and
         * should never be done unless it's stricly necessary.
         *
         * @param {goog.html.TrustedResourceUrl=} opt_src The value of the src
         *     attribute. If null or undefined src will not be set.
         * @param {goog.html.SafeHtml=} opt_srcdoc The value of the srcdoc attribute.
         *     If null or undefined srcdoc will not be set.
         * @param {!Object<string, goog.html.SafeHtml.AttributeValue_>=}
         *     opt_attributes Mapping from attribute names to their values. Only
         *     attribute names consisting of [a-zA-Z0-9-] are allowed. Value of null or
         *     undefined causes the attribute to be omitted.
         * @param {!goog.html.SafeHtml.TextOrHtml_|
         *     !Array<!goog.html.SafeHtml.TextOrHtml_>=} opt_content Content to
         *     HTML-escape and put inside the tag. Array elements are concatenated.
         * @return {!goog.html.SafeHtml} The SafeHtml content with the tag.
         * @throws {Error} If invalid tag name, attribute name, or attribute value is
         *     provided. If opt_attributes contains the src or srcdoc attributes.
         */
        static createIframe(opt_src?: goog.html.TrustedResourceUrl, opt_srcdoc?: goog.html.SafeHtml, opt_attributes?: {[index: string]: goog.html.SafeHtml.AttributeValue_}, opt_content?: goog.html.SafeHtml.TextOrHtml_|Array<goog.html.SafeHtml.TextOrHtml_>): goog.html.SafeHtml;
        
        /**
         * Creates a SafeHtml representing a style tag. The type attribute is set
         * to "text/css".
         * @param {!goog.html.SafeStyleSheet|!Array<!goog.html.SafeStyleSheet>}
         *     styleSheet Content to put inside the tag. Array elements are
         *     concatenated.
         * @param {!Object<string, goog.html.SafeHtml.AttributeValue_>=}
         *     opt_attributes Mapping from attribute names to their values. Only
         *     attribute names consisting of [a-zA-Z0-9-] are allowed. Value of null or
         *     undefined causes the attribute to be omitted.
         * @return {!goog.html.SafeHtml} The SafeHtml content with the tag.
         * @throws {Error} If invalid attribute name or attribute value is provided. If
         *     opt_attributes contains the type attribute.
         */
        static createStyle(styleSheet: goog.html.SafeStyleSheet|Array<goog.html.SafeStyleSheet>, opt_attributes?: {[index: string]: goog.html.SafeHtml.AttributeValue_}): goog.html.SafeHtml;
        
        /**
         * Creates a SafeHtml content with known directionality consisting of a tag with
         * optional attributes and optional content.
         * @param {!goog.i18n.bidi.Dir} dir Directionality.
         * @param {string} tagName
         * @param {!Object<string, goog.html.SafeHtml.AttributeValue_>=} opt_attributes
         * @param {!goog.html.SafeHtml.TextOrHtml_|
         *     !Array<!goog.html.SafeHtml.TextOrHtml_>=} opt_content
         * @return {!goog.html.SafeHtml} The SafeHtml content with the tag.
         */
        static createWithDir(dir: goog.i18n.bidi.Dir, tagName: string, opt_attributes?: {[index: string]: goog.html.SafeHtml.AttributeValue_}, opt_content?: goog.html.SafeHtml.TextOrHtml_|Array<goog.html.SafeHtml.TextOrHtml_>): goog.html.SafeHtml;
        
        /**
         * Creates a new SafeHtml object by concatenating values.
         * @param {...(!goog.html.SafeHtml.TextOrHtml_|
         *     !Array<!goog.html.SafeHtml.TextOrHtml_>)} var_args Values to concatenate.
         * @return {!goog.html.SafeHtml}
         */
        static concat(...var_args: (goog.html.SafeHtml.TextOrHtml_|Array<goog.html.SafeHtml.TextOrHtml_>)[]): goog.html.SafeHtml;
        
        /**
         * Creates a new SafeHtml object with known directionality by concatenating the
         * values.
         * @param {!goog.i18n.bidi.Dir} dir Directionality.
         * @param {...(!goog.html.SafeHtml.TextOrHtml_|
         *     !Array<!goog.html.SafeHtml.TextOrHtml_>)} var_args Elements of array
         *     arguments would be processed recursively.
         * @return {!goog.html.SafeHtml}
         */
        static concatWithDir(dir: goog.i18n.bidi.Dir, ...var_args: (goog.html.SafeHtml.TextOrHtml_|Array<goog.html.SafeHtml.TextOrHtml_>)[]): goog.html.SafeHtml;
        
        /**
         * Package-internal utility method to create SafeHtml instances.
         *
         * @param {string} html The string to initialize the SafeHtml object with.
         * @param {?goog.i18n.bidi.Dir} dir The directionality of the SafeHtml to be
         *     constructed, or null if unknown.
         * @return {!goog.html.SafeHtml} The initialized SafeHtml object.
         * @package
         */
        static createSafeHtmlSecurityPrivateDoNotAccessOrElse(html: string, dir: goog.i18n.bidi.Dir): goog.html.SafeHtml;
        
        /**
         * Like create() but does not restrict which tags can be constructed.
         *
         * @param {string} tagName Tag name. Set or validated by caller.
         * @param {!Object<string, goog.html.SafeHtml.AttributeValue_>=} opt_attributes
         * @param {(!goog.html.SafeHtml.TextOrHtml_|
         *     !Array<!goog.html.SafeHtml.TextOrHtml_>)=} opt_content
         * @return {!goog.html.SafeHtml}
         * @throws {Error} If invalid or unsafe attribute name or value is provided.
         * @throws {goog.asserts.AssertionError} If content for void tag is provided.
         * @package
         */
        static createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(tagName: string, opt_attributes?: {[index: string]: goog.html.SafeHtml.AttributeValue_}, opt_content?: goog.html.SafeHtml.TextOrHtml_|Array<goog.html.SafeHtml.TextOrHtml_>): goog.html.SafeHtml;
        
        /**
         * @param {!Object<string, string>} fixedAttributes
         * @param {!Object<string, string>} defaultAttributes
         * @param {!Object<string, goog.html.SafeHtml.AttributeValue_>=}
         *     opt_attributes Optional attributes passed to create*().
         * @return {!Object<string, goog.html.SafeHtml.AttributeValue_>}
         * @throws {Error} If opt_attributes contains an attribute with the same name
         *     as an attribute in fixedAttributes.
         * @package
         */
        static combineAttributes(fixedAttributes: {[index: string]: string}, defaultAttributes: {[index: string]: string}, opt_attributes?: {[index: string]: goog.html.SafeHtml.AttributeValue_}): {[index: string]: goog.html.SafeHtml.AttributeValue_};
    }
}

declare module goog.html.SafeHtml {

    /**
     * Shorthand for union of types that can sensibly be converted to strings
     * or might already be SafeHtml (as SafeHtml is a goog.string.TypedString).
     * @private
     * @typedef {string|number|boolean|!goog.string.TypedString|
     *           !goog.i18n.bidi.DirectionalString}
     */
    type TextOrHtml_ = string|number|boolean|goog.string$.TypedString|goog.i18n.bidi.DirectionalString;

    /**
     * @typedef {string|number|goog.string.TypedString|
     *     goog.html.SafeStyle.PropertyMap}
     * @private
     */
    type AttributeValue_ = string|number|goog.string$.TypedString|goog.html.SafeStyle.PropertyMap;
}
