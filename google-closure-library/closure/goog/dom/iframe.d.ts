declare module goog {
    function require(name: 'goog.dom.iframe'): typeof goog.dom.iframe;
}

declare module goog.dom.iframe {

    /**
     * Safe source for a blank iframe.
     *
     * Intentionally not about:blank, which gives mixed content warnings in IE6
     * over HTTPS.
     *
     * @type {string}
     */
    var BLANK_SOURCE: string;

    /**
     * Safe source for a new blank iframe that may not cause a new load of the
     * iframe. This is different from {@code goog.dom.iframe.BLANK_SOURCE} in that
     * it will allow an iframe to be loaded synchronously in more browsers, notably
     * Gecko, following the javascript protocol spec.
     *
     * NOTE: This should not be used to replace the source of an existing iframe.
     * The new src value will be ignored, per the spec.
     *
     * Due to cross-browser differences, the load is not guaranteed  to be
     * synchronous. If code depends on the load of the iframe,
     * then {@code goog.net.IframeLoadMonitor} or a similar technique should be
     * used.
     *
     * According to
     * http://www.whatwg.org/specs/web-apps/current-work/multipage/webappapis.html#javascript-protocol
     * the 'javascript:""' URL should trigger a new load of the iframe, which may be
     * asynchronous. A void src, such as 'javascript:undefined', does not change
     * the browsing context document's, and thus should not trigger another load.
     *
     * Intentionally not about:blank, which also triggers a load.
     *
     * NOTE: 'javascript:' URL handling spec compliance varies per browser. IE
     * throws an error with 'javascript:undefined'. Webkit browsers will reload the
     * iframe when setting this source on an existing iframe.
     *
     * @type {string}
     */
    var BLANK_SOURCE_NEW_FRAME: string;

    /**
     * Creates a completely blank iframe element.
     *
     * The iframe will not caused mixed-content warnings for IE6 under HTTPS.
     * The iframe will also have no borders or padding, so that the styled width
     * and height will be the actual width and height of the iframe.
     *
     * This function currently only attempts to create a blank iframe.  There
     * are no guarantees to the contents of the iframe or whether it is rendered
     * in quirks mode.
     *
     * @param {goog.dom.DomHelper} domHelper The dom helper to use.
     * @param {!goog.html.SafeStyle|string=} opt_styles CSS styles for the
     *     iframe. If possible pass a SafeStyle; string is supported for
     *     backwards-compatibility only.
     * @return {!HTMLIFrameElement} A completely blank iframe.
     */
    function createBlank(domHelper: goog.dom.DomHelper, opt_styles?: goog.html.SafeStyle|string): HTMLIFrameElement;

    /**
     * Writes the contents of a blank iframe that has already been inserted
     * into the document. If possible use {@link #writeSafeContent},
     * this function exists for backwards-compatibility only.
     * @param {!HTMLIFrameElement} iframe An iframe with no contents, such as
     *     one created by goog.dom.iframe.createBlank, but already appended to
     *     a parent document.
     * @param {string} content Content to write to the iframe, from doctype to
     *     the HTML close tag.
     */
    function writeContent(iframe: HTMLIFrameElement, content: string): void;

    /**
     * Writes the contents of a blank iframe that has already been inserted
     * into the document.
     * @param {!HTMLIFrameElement} iframe An iframe with no contents, such as
     *     one created by {@link #createBlank}, but already appended to
     *     a parent document.
     * @param {!goog.html.SafeHtml} content Content to write to the iframe,
     *     from doctype to the HTML close tag.
     */
    function writeSafeContent(iframe: HTMLIFrameElement, content: goog.html.SafeHtml): void;

    /**
     * Creates a same-domain iframe containing preloaded content.
     *
     * This is primarily useful for DOM sandboxing.  One use case is to embed
     * a trusted Javascript app with potentially conflicting CSS styles.  The
     * second case is to reduce the cost of layout passes by the browser -- for
     * example, you can perform sandbox sizing of characters in an iframe while
     * manipulating a heavy DOM in the main window.  The iframe and parent frame
     * can access each others' properties and functions without restriction.
     *
     * @param {!Element} parentElement The parent element in which to append the
     *     iframe.
     * @param {!goog.html.SafeHtml|string=} opt_headContents Contents to go into
     *     the iframe's head. If possible pass a SafeHtml; string is supported for
     *     backwards-compatibility only.
     * @param {!goog.html.SafeHtml|string=} opt_bodyContents Contents to go into
     *     the iframe's body. If possible pass a SafeHtml; string is supported for
     *     backwards-compatibility only.
     * @param {!goog.html.SafeStyle|string=} opt_styles CSS styles for the iframe
     *     itself, before adding to the parent element. If possible pass a
     *     SafeStyle; string is supported for backwards-compatibility only.
     * @param {boolean=} opt_quirks Whether to use quirks mode (false by default).
     * @return {!HTMLIFrameElement} An iframe that has the specified contents.
     */
    function createWithContent(parentElement: Element, opt_headContents?: goog.html.SafeHtml|string, opt_bodyContents?: goog.html.SafeHtml|string, opt_styles?: goog.html.SafeStyle|string, opt_quirks?: boolean): HTMLIFrameElement;
}
