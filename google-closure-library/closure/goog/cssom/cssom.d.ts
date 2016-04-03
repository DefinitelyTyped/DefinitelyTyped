declare module goog {
    function require(name: 'goog.cssom'): typeof goog.cssom;
    function require(name: 'goog.cssom.CssRuleType'): typeof goog.cssom.CssRuleType;
}

declare module goog.cssom {

    /**
     * Enumeration of {@code CSSRule} types.
     * @enum {number}
     */
    type CssRuleType = number;
    var CssRuleType: {
        STYLE: CssRuleType;
        IMPORT: CssRuleType;
        MEDIA: CssRuleType;
        FONT_FACE: CssRuleType;
        PAGE: CssRuleType;
        NAMESPACE: CssRuleType;
    };

    /**
     * Recursively gets all CSS as text, optionally starting from a given
     * CSSStyleSheet.
     * @param {(CSSStyleSheet|StyleSheetList)=} opt_styleSheet The CSSStyleSheet.
     * @return {string} css text.
     */
    function getAllCssText(opt_styleSheet?: CSSStyleSheet|StyleSheetList): string;

    /**
     * Recursively gets all CSSStyleRules, optionally starting from a given
     * CSSStyleSheet.
     * Note that this excludes any CSSImportRules, CSSMediaRules, etc..
     * @param {(CSSStyleSheet|StyleSheetList)=} opt_styleSheet The CSSStyleSheet.
     * @return {Array<CSSStyleRule>} A list of CSSStyleRules.
     */
    function getAllCssStyleRules(opt_styleSheet?: CSSStyleSheet|StyleSheetList): Array<CSSStyleRule>;

    /**
     * Returns the CSSRules from a styleSheet.
     * Worth noting here is that IE and FF differ in terms of what they will return.
     * Firefox will return styleSheet.cssRules, which includes ImportRules and
     * anything which implements the CSSRules interface. IE returns simply a list of
     * CSSRules.
     * @param {CSSStyleSheet} styleSheet The CSSStyleSheet.
     * @throws {Error} If we cannot access the rules on a stylesheet object - this
     *     can  happen if a stylesheet object's rules are accessed before the rules
     *     have been downloaded and parsed and are "ready".
     * @return {CSSRuleList} An array of CSSRules or null.
     */
    function getCssRulesFromStyleSheet(styleSheet: CSSStyleSheet): CSSRuleList;

    /**
     * Gets all CSSStyleSheet objects starting from some CSSStyleSheet. Note that we
     * want to return the sheets in the order of the cascade, therefore if we
     * encounter an import, we will splice that CSSStyleSheet object in front of
     * the CSSStyleSheet that contains it in the returned array of CSSStyleSheets.
     * @param {(CSSStyleSheet|StyleSheetList)=} opt_styleSheet A CSSStyleSheet.
     * @param {boolean=} opt_includeDisabled If true, includes disabled stylesheets,
     *    defaults to false.
     * @return {!Array<CSSStyleSheet>} A list of CSSStyleSheet objects.
     */
    function getAllCssStyleSheets(opt_styleSheet?: CSSStyleSheet|StyleSheetList, opt_includeDisabled?: boolean): Array<CSSStyleSheet>;

    /**
     * Gets the cssText from a CSSRule object cross-browserly.
     * @param {CSSRule} cssRule A CSSRule.
     * @return {string} cssText The text for the rule, including the selector.
     */
    function getCssTextFromCssRule(cssRule: CSSRule): string;

    /**
     * Get the index of the CSSRule in it's CSSStyleSheet.
     * @param {CSSRule} cssRule A CSSRule.
     * @param {CSSStyleSheet=} opt_parentStyleSheet A reference to the stylesheet
     *     object this cssRule belongs to.
     * @throws {Error} When we cannot get the parentStyleSheet.
     * @return {number} The index of the CSSRule, or -1.
     */
    function getCssRuleIndexInParentStyleSheet(cssRule: CSSRule, opt_parentStyleSheet?: CSSStyleSheet): number;

    /**
     * We do some trickery in getAllCssStyleRules that hacks this in for IE.
     * If the cssRule object isn't coming from a result of that function call, this
     * method will return undefined in IE.
     * @param {CSSRule} cssRule The CSSRule.
     * @return {CSSStyleSheet} A styleSheet object.
     */
    function getParentStyleSheet(cssRule: CSSRule): CSSStyleSheet;

    /**
     * Replace a cssRule with some cssText for a new rule.
     * If the cssRule object is not one of objects returned by
     * getAllCssStyleRules, then you'll need to provide both the styleSheet and
     * possibly the index, since we can't infer them from the standard cssRule
     * object in IE. We do some trickery in getAllCssStyleRules to hack this in.
     * @param {CSSRule} cssRule A CSSRule.
     * @param {string} cssText The text for the new CSSRule.
     * @param {CSSStyleSheet=} opt_parentStyleSheet A reference to the stylesheet
     *     object this cssRule belongs to.
     * @param {number=} opt_index The index of the cssRule in its parentStylesheet.
     * @throws {Error} If we cannot find a parentStyleSheet.
     * @throws {Error} If we cannot find a css rule index.
     */
    function replaceCssRule(cssRule: CSSRule, cssText: string, opt_parentStyleSheet?: CSSStyleSheet, opt_index?: number): void;

    /**
     * Cross browser function to add a CSSRule into a CSSStyleSheet, optionally
     * at a given index.
     * @param {CSSStyleSheet} cssStyleSheet The CSSRule's parentStyleSheet.
     * @param {string} cssText The text for the new CSSRule.
     * @param {number=} opt_index The index of the cssRule in its parentStylesheet.
     * @throws {Error} If the css rule text appears to be ill-formatted.
     * TODO(bowdidge): Inserting at index 0 fails on Firefox 2 and 3 with an
     *     exception warning "Node cannot be inserted at the specified point in
     *     the hierarchy."
     */
    function addCssRule(cssStyleSheet: CSSStyleSheet, cssText: string, opt_index?: number): void;

    /**
     * Cross browser function to remove a CSSRule in a CSSStyleSheet at an index.
     * @param {CSSStyleSheet} cssStyleSheet The CSSRule's parentStyleSheet.
     * @param {number} index The CSSRule's index in the parentStyleSheet.
     */
    function removeCssRule(cssStyleSheet: CSSStyleSheet, index: number): void;

    /**
     * Appends a DOM node to HEAD containing the css text that's passed in.
     * @param {string} cssText CSS to add to the end of the document.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper user for
     *     document interactions.
     * @return {!Element} The newly created STYLE element.
     */
    function addCssText(cssText: string, opt_domHelper?: goog.dom.DomHelper): Element;

    /**
     * Cross browser method to get the filename from the StyleSheet's href.
     * Explorer only returns the filename in the href, while other agents return
     * the full path.
     * @param {!StyleSheet} styleSheet Any valid StyleSheet object with an href.
     * @throws {Error} When there's no href property found.
     * @return {?string} filename The filename, or null if not an external
     *    styleSheet.
     */
    function getFileNameFromStyleSheet(styleSheet: StyleSheet): string;
}
