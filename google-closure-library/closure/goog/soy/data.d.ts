declare module goog {
    function require(name: 'goog.soy.data.SanitizedContentKind'): typeof goog.soy.data.SanitizedContentKind;
    function require(name: 'goog.soy.data.SanitizedContent'): typeof goog.soy.data.SanitizedContent;
}

declare module goog.soy.data {

    /**
     * A type of textual content.
     *
     * This is an enum of type Object so that these values are unforgeable.
     *
     * @enum {!Object}
     */
    type SanitizedContentKind = Object;
    var SanitizedContentKind: {
        HTML: SanitizedContentKind;
        JS: SanitizedContentKind;
        URI: SanitizedContentKind;
        ATTRIBUTES: SanitizedContentKind;
        CSS: SanitizedContentKind;
        TEXT: SanitizedContentKind;
    };

    /**
     * A string-like object that carries a content-type and a content direction.
     *
     * IMPORTANT! Do not create these directly, nor instantiate the subclasses.
     * Instead, use a trusted, centrally reviewed library as endorsed by your team
     * to generate these objects. Otherwise, you risk accidentally creating
     * SanitizedContent that is attacker-controlled and gets evaluated unescaped in
     * templates.
     *
     * @constructor
     */
    class SanitizedContent {
        constructor();
        
        /**
         * The context in which this content is safe from XSS attacks.
         * @type {goog.soy.data.SanitizedContentKind}
         */
        contentKind: goog.soy.data.SanitizedContentKind;
        
        /**
         * The content's direction; null if unknown and thus to be estimated when
         * necessary.
         * @type {?goog.i18n.bidi.Dir}
         */
        contentDir: goog.i18n.bidi.Dir;
        
        /**
         * The already-safe content.
         * @protected {string}
         */
        content(): void;
        
        /**
         * Gets the already-safe content.
         * @return {string}
         */
        getContent(): string;
        
        /**
         * Converts sanitized content of kind TEXT or HTML into SafeHtml. HTML content
         * is converted without modification, while text content is HTML-escaped.
         * @return {!goog.html.SafeHtml}
         * @throws {Error} when the content kind is not TEXT or HTML.
         */
        toSafeHtml(): goog.html.SafeHtml;
    }
}
