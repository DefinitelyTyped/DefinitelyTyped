declare module goog {
    function require(name: 'goog.dom.safe'): typeof goog.dom.safe;
}

declare module goog.dom.safe {

    /**
     * Assigns known-safe HTML to an element's innerHTML property.
     * @param {!Element} elem The element whose innerHTML is to be assigned to.
     * @param {!goog.html.SafeHtml} html The known-safe HTML to assign.
     */
    function setInnerHtml(elem: Element, html: goog.html.SafeHtml): void;

    /**
     * Assigns known-safe HTML to an element's outerHTML property.
     * @param {!Element} elem The element whose outerHTML is to be assigned to.
     * @param {!goog.html.SafeHtml} html The known-safe HTML to assign.
     */
    function setOuterHtml(elem: Element, html: goog.html.SafeHtml): void;

    /**
     * Writes known-safe HTML to a document.
     * @param {!Document} doc The document to be written to.
     * @param {!goog.html.SafeHtml} html The known-safe HTML to assign.
     */
    function documentWrite(doc: Document, html: goog.html.SafeHtml): void;

    /**
     * Safely assigns a URL to an anchor element's href property.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and assigned to
     * anchor's href property.  If url is of type string however, it is first
     * sanitized using goog.html.SafeUrl.sanitize.
     *
     * Example usage:
     *   goog.dom.safe.setAnchorHref(anchorEl, url);
     * which is a safe alternative to
     *   anchorEl.href = url;
     * The latter can result in XSS vulnerabilities if url is a
     * user-/attacker-controlled value.
     *
     * @param {!HTMLAnchorElement} anchor The anchor element whose href property
     *     is to be assigned to.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function setAnchorHref(anchor: HTMLAnchorElement, url: string|goog.html.SafeUrl): void;

    /**
     * Safely assigns a URL to a Location object's href property.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and assigned to
     * loc's href property.  If url is of type string however, it is first sanitized
     * using goog.html.SafeUrl.sanitize.
     *
     * Example usage:
     *   goog.dom.safe.setLocationHref(document.location, redirectUrl);
     * which is a safe alternative to
     *   document.location.href = redirectUrl;
     * The latter can result in XSS vulnerabilities if redirectUrl is a
     * user-/attacker-controlled value.
     *
     * @param {!Location} loc The Location object whose href property is to be
     *     assigned to.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function setLocationHref(loc: Location, url: string|goog.html.SafeUrl): void;
}
