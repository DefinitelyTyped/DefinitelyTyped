declare module goog {
    function require(name: 'goog.graphics'): typeof goog.graphics;
}

declare module goog.graphics {

    /**
     * Returns an instance of goog.graphics.AbstractGraphics that knows how to draw
     * for the current platform (A factory for the proper Graphics implementation)
     * @param {string|number} width The width in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {string|number} height The height in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {?number=} opt_coordWidth The optional coordinate width - if
     *     omitted or null, defaults to same as width.
     * @param {?number=} opt_coordHeight The optional coordinate height - if
     *     omitted or null, defaults to same as height.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @return {!goog.graphics.AbstractGraphics} The created instance.
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    function createGraphics(width: string|number, height: string|number, opt_coordWidth?: number, opt_coordHeight?: number, opt_domHelper?: goog.dom.DomHelper): goog.graphics.AbstractGraphics;

    /**
     * Returns an instance of goog.graphics.AbstractGraphics that knows how to draw
     * for the current platform (A factory for the proper Graphics implementation)
     * @param {string|number} width The width in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {string|number} height The height in pixels.   Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {?number=} opt_coordWidth The optional coordinate width, defaults to
     *     same as width.
     * @param {?number=} opt_coordHeight The optional coordinate height, defaults to
     *     same as height.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @return {!goog.graphics.AbstractGraphics} The created instance.
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    function createSimpleGraphics(width: string|number, height: string|number, opt_coordWidth?: number, opt_coordHeight?: number, opt_domHelper?: goog.dom.DomHelper): goog.graphics.AbstractGraphics;

    /**
     * Static function to check if the current browser has Graphics support.
     * @return {boolean} True if the current browser has Graphics support.
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    function isBrowserSupported(): boolean;
}
