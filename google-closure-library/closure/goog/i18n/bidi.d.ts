declare module goog {
    function require(name: 'goog.i18n.bidi'): typeof goog.i18n.bidi;
    function require(name: 'goog.i18n.bidi.Format'): typeof goog.i18n.bidi.Format;
    function require(name: 'goog.i18n.bidi.Dir'): typeof goog.i18n.bidi.Dir;
}

declare module goog.i18n.bidi {

    /**
     * Unicode formatting characters and directionality string constants.
     * @enum {string}
     */
    type Format = string;
    var Format: {
        LRE: Format;
        RLE: Format;
        PDF: Format;
        LRM: Format;
        RLM: Format;
    };

    /**
     * Directionality enum.
     * @enum {number}
     */
    type Dir = number;
    var Dir: {
        LTR: Dir;
        RTL: Dir;
        NEUTRAL: Dir;
    };

    /**
     * Strings that have an (optional) known direction.
     *
     * Implementations of this interface are string-like objects that carry an
     * attached direction, if known.
     * @interface
     */
    interface DirectionalString {
        
        /**
         * Interface marker of the DirectionalString interface.
         *
         * This property can be used to determine at runtime whether or not an object
         * implements this interface.  All implementations of this interface set this
         * property to {@code true}.
         * @type {boolean}
         */
        implementsGoogI18nBidiDirectionalString: boolean;
        
        /**
         * Retrieves this object's known direction (if any).
         * @return {?goog.i18n.bidi.Dir} The known direction. Null if unknown.
         */
        getDirection(): goog.i18n.bidi.Dir;
    }

    /**
     * Constant that defines whether or not the current locale is a RTL locale.
     * If {@link goog.i18n.bidi.FORCE_RTL} is not true, this constant will default
     * to check that {@link goog.LOCALE} is one of a few major RTL locales.
     *
     * <p>This is designed to be a maximally efficient compile-time constant. For
     * example, for the default goog.LOCALE, compiling
     * "if (goog.i18n.bidi.IS_RTL) alert('rtl') else {}" should produce no code. It
     * is this design consideration that limits the implementation to only
     * supporting a few major RTL locales, as opposed to the broader repertoire of
     * something like goog.i18n.bidi.isRtlLanguage.
     *
     * <p>Since this constant refers to the directionality of the locale, it is up
     * to the caller to determine if this constant should also be used for the
     * direction of the UI.
     *
     * {@see goog.LOCALE}
     *
     * @type {boolean}
     *
     * TODO(user): write a test that checks that this is a compile-time constant.
     */
    var IS_RTL: boolean;

    /**
     * 'right' string constant.
     * @type {string}
     */
    var RIGHT: string;

    /**
     * 'left' string constant.
     * @type {string}
     */
    var LEFT: string;

    /**
     * 'left' if locale is RTL, 'right' if not.
     * @type {string}
     */
    var I18N_RIGHT: string;

    /**
     * 'right' if locale is RTL, 'left' if not.
     * @type {string}
     */
    var I18N_LEFT: string;

    /**
     * Convert a directionality given in various formats to a goog.i18n.bidi.Dir
     * constant. Useful for interaction with different standards of directionality
     * representation.
     *
     * @param {goog.i18n.bidi.Dir|number|boolean|null} givenDir Directionality given
     *     in one of the following formats:
     *     1. A goog.i18n.bidi.Dir constant.
     *     2. A number (positive = LTR, negative = RTL, 0 = neutral).
     *     3. A boolean (true = RTL, false = LTR).
     *     4. A null for unknown directionality.
     * @param {boolean=} opt_noNeutral Whether a givenDir of zero or
     *     goog.i18n.bidi.Dir.NEUTRAL should be treated as null, i.e. unknown, in
     *     order to preserve legacy behavior.
     * @return {?goog.i18n.bidi.Dir} A goog.i18n.bidi.Dir constant matching the
     *     given directionality. If given null, returns null (i.e. unknown).
     */
    function toDir(givenDir: goog.i18n.bidi.Dir|number|boolean|void, opt_noNeutral?: boolean): goog.i18n.bidi.Dir;

    /**
     * Test whether the given string has any RTL characters in it.
     * @param {string} str The given string that need to be tested.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether the string contains RTL characters.
     */
    function hasAnyRtl(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Test whether the given string has any RTL characters in it.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the string contains RTL characters.
     * @deprecated Use hasAnyRtl.
     */
    function hasRtlChar(str: string): boolean;

    /**
     * Test whether the given string has any LTR characters in it.
     * @param {string} str The given string that need to be tested.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether the string contains LTR characters.
     */
    function hasAnyLtr(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Check if the first character in the string is RTL or not.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the first character in str is an RTL char.
     */
    function isRtlChar(str: string): boolean;

    /**
     * Check if the first character in the string is LTR or not.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the first character in str is an LTR char.
     */
    function isLtrChar(str: string): boolean;

    /**
     * Check if the first character in the string is neutral or not.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the first character in str is a neutral char.
     */
    function isNeutralChar(str: string): boolean;

    /**
     * Check whether the first strongly directional character (if any) is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL directionality is detected using the first
     *     strongly-directional character method.
     */
    function startsWithRtl(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Check whether the first strongly directional character (if any) is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL directionality is detected using the first
     *     strongly-directional character method.
     * @deprecated Use startsWithRtl.
     */
    function isRtlText(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Check whether the first strongly directional character (if any) is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR directionality is detected using the first
     *     strongly-directional character method.
     */
    function startsWithLtr(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Check whether the first strongly directional character (if any) is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR directionality is detected using the first
     *     strongly-directional character method.
     * @deprecated Use startsWithLtr.
     */
    function isLtrText(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Check whether the input string either contains no strongly directional
     * characters or looks like a url.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether neutral directionality is detected.
     */
    function isNeutralText(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Check if the exit directionality a piece of text is LTR, i.e. if the last
     * strongly-directional character in the string is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR exit directionality was detected.
     */
    function endsWithLtr(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Check if the exit directionality a piece of text is LTR, i.e. if the last
     * strongly-directional character in the string is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR exit directionality was detected.
     * @deprecated Use endsWithLtr.
     */
    function isLtrExitText(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Check if the exit directionality a piece of text is RTL, i.e. if the last
     * strongly-directional character in the string is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL exit directionality was detected.
     */
    function endsWithRtl(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Check if the exit directionality a piece of text is RTL, i.e. if the last
     * strongly-directional character in the string is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL exit directionality was detected.
     * @deprecated Use endsWithRtl.
     */
    function isRtlExitText(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Check if a BCP 47 / III language code indicates an RTL language, i.e. either:
     * - a language code explicitly specifying one of the right-to-left scripts,
     *   e.g. "az-Arab", or<p>
     * - a language code specifying one of the languages normally written in a
     *   right-to-left script, e.g. "fa" (Farsi), except ones explicitly specifying
     *   Latin or Cyrillic script (which are the usual LTR alternatives).<p>
     * The list of right-to-left scripts appears in the 100-199 range in
     * http://www.unicode.org/iso15924/iso15924-num.html, of which Arabic and
     * Hebrew are by far the most widely used. We also recognize Thaana, N'Ko, and
     * Tifinagh, which also have significant modern usage. The rest (Syriac,
     * Samaritan, Mandaic, etc.) seem to have extremely limited or no modern usage
     * and are not recognized to save on code size.
     * The languages usually written in a right-to-left script are taken as those
     * with Suppress-Script: Hebr|Arab|Thaa|Nkoo|Tfng  in
     * http://www.iana.org/assignments/language-subtag-registry,
     * as well as Central (or Sorani) Kurdish (ckb), Sindhi (sd) and Uyghur (ug).
     * Other subtags of the language code, e.g. regions like EG (Egypt), are
     * ignored.
     * @param {string} lang BCP 47 (a.k.a III) language code.
     * @return {boolean} Whether the language code is an RTL language.
     */
    function isRtlLanguage(lang: string): boolean;

    /**
     * Apply bracket guard using html span tag. This is to address the problem of
     * messy bracket display frequently happens in RTL layout.
     * @param {string} s The string that need to be processed.
     * @param {boolean=} opt_isRtlContext specifies default direction (usually
     *     direction of the UI).
     * @return {string} The processed string, with all bracket guarded.
     */
    function guardBracketInHtml(s: string, opt_isRtlContext?: boolean): string;

    /**
     * Apply bracket guard using LRM and RLM. This is to address the problem of
     * messy bracket display frequently happens in RTL layout.
     * This version works for both plain text and html. But it does not work as
     * good as guardBracketInHtml in some cases.
     * @param {string} s The string that need to be processed.
     * @param {boolean=} opt_isRtlContext specifies default direction (usually
     *     direction of the UI).
     * @return {string} The processed string, with all bracket guarded.
     */
    function guardBracketInText(s: string, opt_isRtlContext?: boolean): string;

    /**
     * Enforce the html snippet in RTL directionality regardless overall context.
     * If the html piece was enclosed by tag, dir will be applied to existing
     * tag, otherwise a span tag will be added as wrapper. For this reason, if
     * html snippet start with with tag, this tag must enclose the whole piece. If
     * the tag already has a dir specified, this new one will override existing
     * one in behavior (tested on FF and IE).
     * @param {string} html The string that need to be processed.
     * @return {string} The processed string, with directionality enforced to RTL.
     */
    function enforceRtlInHtml(html: string): string;

    /**
     * Enforce RTL on both end of the given text piece using unicode BiDi formatting
     * characters RLE and PDF.
     * @param {string} text The piece of text that need to be wrapped.
     * @return {string} The wrapped string after process.
     */
    function enforceRtlInText(text: string): string;

    /**
     * Enforce the html snippet in RTL directionality regardless overall context.
     * If the html piece was enclosed by tag, dir will be applied to existing
     * tag, otherwise a span tag will be added as wrapper. For this reason, if
     * html snippet start with with tag, this tag must enclose the whole piece. If
     * the tag already has a dir specified, this new one will override existing
     * one in behavior (tested on FF and IE).
     * @param {string} html The string that need to be processed.
     * @return {string} The processed string, with directionality enforced to RTL.
     */
    function enforceLtrInHtml(html: string): string;

    /**
     * Enforce LTR on both end of the given text piece using unicode BiDi formatting
     * characters LRE and PDF.
     * @param {string} text The piece of text that need to be wrapped.
     * @return {string} The wrapped string after process.
     */
    function enforceLtrInText(text: string): string;

    /**
     * Swap location parameters and 'left'/'right' in CSS specification. The
     * processed string will be suited for RTL layout. Though this function can
     * cover most cases, there are always exceptions. It is suggested to put
     * those exceptions in separate group of CSS string.
     * @param {string} cssStr CSS spefication string.
     * @return {string} Processed CSS specification string.
     */
    function mirrorCSS(cssStr: string): string;

    /**
     * Replace the double and single quote directly after a Hebrew character with
     * GERESH and GERSHAYIM. In such case, most likely that's user intention.
     * @param {string} str String that need to be processed.
     * @return {string} Processed string with double/single quote replaced.
     */
    function normalizeHebrewQuote(str: string): string;

    /**
     * Estimates the directionality of a string based on relative word counts.
     * If the number of RTL words is above a certain percentage of the total number
     * of strongly directional words, returns RTL.
     * Otherwise, if any words are strongly or weakly LTR, returns LTR.
     * Otherwise, returns UNKNOWN, which is used to mean "neutral".
     * Numbers are counted as weakly LTR.
     * @param {string} str The string to be checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {goog.i18n.bidi.Dir} Estimated overall directionality of {@code str}.
     */
    function estimateDirection(str: string, opt_isHtml?: boolean): goog.i18n.bidi.Dir;

    /**
     * Check the directionality of a piece of text, return true if the piece of
     * text should be laid out in RTL direction.
     * @param {string} str The piece of text that need to be detected.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether this piece of text should be laid out in RTL.
     */
    function detectRtlDirectionality(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Sets text input element's directionality and text alignment based on a
     * given directionality. Does nothing if the given directionality is unknown or
     * neutral.
     * @param {Element} element Input field element to set directionality to.
     * @param {goog.i18n.bidi.Dir|number|boolean|null} dir Desired directionality,
     *     given in one of the following formats:
     *     1. A goog.i18n.bidi.Dir constant.
     *     2. A number (positive = LRT, negative = RTL, 0 = neutral).
     *     3. A boolean (true = RTL, false = LTR).
     *     4. A null for unknown directionality.
     */
    function setElementDirAndAlign(element: Element, dir: goog.i18n.bidi.Dir|number|boolean|void): void;
}
