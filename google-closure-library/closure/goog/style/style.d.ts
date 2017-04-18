declare module goog {
    function require(name: 'goog.style'): typeof goog.style;
}

declare module goog.style {

    /**
     * Sets a style value on an element.
     *
     * This function is not indended to patch issues in the browser's style
     * handling, but to allow easy programmatic access to setting dash-separated
     * style properties.  An example is setting a batch of properties from a data
     * object without overwriting old styles.  When possible, use native APIs:
     * elem.style.propertyKey = 'value' or (if obliterating old styles is fine)
     * elem.style.cssText = 'property1: value1; property2: value2'.
     *
     * @param {Element} element The element to change.
     * @param {string|Object} style If a string, a style name. If an object, a hash
     *     of style names to style values.
     * @param {string|number|boolean=} opt_value If style was a string, then this
     *     should be the value.
     */
    function setStyle(element: Element, style: string|Object, opt_value?: string|number|boolean): void;

    /**
     * Retrieves an explicitly-set style value of a node. This returns '' if there
     * isn't a style attribute on the element or if this style property has not been
     * explicitly set in script.
     *
     * @param {Element} element Element to get style of.
     * @param {string} property Property to get, css-style (if you have a camel-case
     * property, use element.style[style]).
     * @return {string} Style value.
     */
    function getStyle(element: Element, property: string): string;

    /**
     * Retrieves a computed style value of a node. It returns empty string if the
     * value cannot be computed (which will be the case in Internet Explorer) or
     * "none" if the property requested is an SVG one and it has not been
     * explicitly set (firefox and webkit).
     *
     * @param {Element} element Element to get style of.
     * @param {string} property Property to get (camel-case).
     * @return {string} Style value.
     */
    function getComputedStyle(element: Element, property: string): string;

    /**
     * Gets the cascaded style value of a node, or null if the value cannot be
     * computed (only Internet Explorer can do this).
     *
     * @param {Element} element Element to get style of.
     * @param {string} style Property to get (camel-case).
     * @return {string} Style value.
     */
    function getCascadedStyle(element: Element, style: string): string;

    /**
     * Retrieves the computed value of the box-sizing CSS attribute.
     * Browser support: http://caniuse.com/css3-boxsizing.
     * @param {!Element} element The element whose box-sizing to get.
     * @return {?string} 'content-box', 'border-box' or 'padding-box'. null if
     *     box-sizing is not supported (IE7 and below).
     */
    function getComputedBoxSizing(element: Element): string;

    /**
     * Retrieves the computed value of the position CSS attribute.
     * @param {Element} element The element to get the position of.
     * @return {string} Position value.
     */
    function getComputedPosition(element: Element): string;

    /**
     * Retrieves the computed background color string for a given element. The
     * string returned is suitable for assigning to another element's
     * background-color, but is not guaranteed to be in any particular string
     * format. Accessing the color in a numeric form may not be possible in all
     * browsers or with all input.
     *
     * If the background color for the element is defined as a hexadecimal value,
     * the resulting string can be parsed by goog.color.parse in all supported
     * browsers.
     *
     * Whether named colors like "red" or "lightblue" get translated into a
     * format which can be parsed is browser dependent. Calling this function on
     * transparent elements will return "transparent" in most browsers or
     * "rgba(0, 0, 0, 0)" in WebKit.
     * @param {Element} element The element to get the background color of.
     * @return {string} The computed string value of the background color.
     */
    function getBackgroundColor(element: Element): string;

    /**
     * Retrieves the computed value of the overflow-x CSS attribute.
     * @param {Element} element The element to get the overflow-x of.
     * @return {string} The computed string value of the overflow-x attribute.
     */
    function getComputedOverflowX(element: Element): string;

    /**
     * Retrieves the computed value of the overflow-y CSS attribute.
     * @param {Element} element The element to get the overflow-y of.
     * @return {string} The computed string value of the overflow-y attribute.
     */
    function getComputedOverflowY(element: Element): string;

    /**
     * Retrieves the computed value of the z-index CSS attribute.
     * @param {Element} element The element to get the z-index of.
     * @return {string|number} The computed value of the z-index attribute.
     */
    function getComputedZIndex(element: Element): string|number;

    /**
     * Retrieves the computed value of the text-align CSS attribute.
     * @param {Element} element The element to get the text-align of.
     * @return {string} The computed string value of the text-align attribute.
     */
    function getComputedTextAlign(element: Element): string;

    /**
     * Retrieves the computed value of the cursor CSS attribute.
     * @param {Element} element The element to get the cursor of.
     * @return {string} The computed string value of the cursor attribute.
     */
    function getComputedCursor(element: Element): string;

    /**
     * Retrieves the computed value of the CSS transform attribute.
     * @param {Element} element The element to get the transform of.
     * @return {string} The computed string representation of the transform matrix.
     */
    function getComputedTransform(element: Element): string;

    /**
     * Sets the top/left values of an element.  If no unit is specified in the
     * argument then it will add px. The second argument is required if the first
     * argument is a string or number and is ignored if the first argument
     * is a coordinate.
     * @param {Element} el Element to move.
     * @param {string|number|goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {string|number=} opt_arg2 Top position.
     */
    function setPosition(el: Element, arg1: string|number|goog.math.Coordinate, opt_arg2?: string|number): void;

    /**
     * Gets the offsetLeft and offsetTop properties of an element and returns them
     * in a Coordinate object
     * @param {Element} element Element.
     * @return {!goog.math.Coordinate} The position.
     */
    function getPosition(element: Element): goog.math.Coordinate;

    /**
     * Returns the viewport element for a particular document
     * @param {Node=} opt_node DOM node (Document is OK) to get the viewport element
     *     of.
     * @return {Element} document.documentElement or document.body.
     */
    function getClientViewportElement(opt_node?: Node): Element;

    /**
     * Calculates the viewport coordinates relative to the page/document
     * containing the node. The viewport may be the browser viewport for
     * non-iframe document, or the iframe container for iframe'd document.
     * @param {!Document} doc The document to use as the reference point.
     * @return {!goog.math.Coordinate} The page offset of the viewport.
     */
    function getViewportPageOffset(doc: Document): goog.math.Coordinate;

    /**
     * Returns the first parent that could affect the position of a given element.
     * @param {Element} element The element to get the offset parent for.
     * @return {Element} The first offset parent or null if one cannot be found.
     */
    function getOffsetParent(element: Element): Element;

    /**
     * Calculates and returns the visible rectangle for a given element. Returns a
     * box describing the visible portion of the nearest scrollable offset ancestor.
     * Coordinates are given relative to the document.
     *
     * @param {Element} element Element to get the visible rect for.
     * @return {goog.math.Box} Bounding elementBox describing the visible rect or
     *     null if scrollable ancestor isn't inside the visible viewport.
     */
    function getVisibleRectForElement(element: Element): goog.math.Box;

    /**
     * Calculate the scroll position of {@code container} with the minimum amount so
     * that the content and the borders of the given {@code element} become visible.
     * If the element is bigger than the container, its top left corner will be
     * aligned as close to the container's top left corner as possible.
     *
     * @param {Element} element The element to make visible.
     * @param {Element} container The container to scroll.
     * @param {boolean=} opt_center Whether to center the element in the container.
     *     Defaults to false.
     * @return {!goog.math.Coordinate} The new scroll position of the container,
     *     in form of goog.math.Coordinate(scrollLeft, scrollTop).
     */
    function getContainerOffsetToScrollInto(element: Element, container: Element, opt_center?: boolean): goog.math.Coordinate;

    /**
     * Changes the scroll position of {@code container} with the minimum amount so
     * that the content and the borders of the given {@code element} become visible.
     * If the element is bigger than the container, its top left corner will be
     * aligned as close to the container's top left corner as possible.
     *
     * @param {Element} element The element to make visible.
     * @param {Element} container The container to scroll.
     * @param {boolean=} opt_center Whether to center the element in the container.
     *     Defaults to false.
     */
    function scrollIntoContainerView(element: Element, container: Element, opt_center?: boolean): void;

    /**
     * Returns clientLeft (width of the left border and, if the directionality is
     * right to left, the vertical scrollbar) and clientTop as a coordinate object.
     *
     * @param {Element} el Element to get clientLeft for.
     * @return {!goog.math.Coordinate} Client left and top.
     */
    function getClientLeftTop(el: Element): goog.math.Coordinate;

    /**
     * Returns a Coordinate object relative to the top-left of the HTML document.
     * Implemented as a single function to save having to do two recursive loops in
     * opera and safari just to get both coordinates.  If you just want one value do
     * use goog.style.getPageOffsetLeft() and goog.style.getPageOffsetTop(), but
     * note if you call both those methods the tree will be analysed twice.
     *
     * @param {Element} el Element to get the page offset for.
     * @return {!goog.math.Coordinate} The page offset.
     */
    function getPageOffset(el: Element): goog.math.Coordinate;

    /**
     * Returns the left coordinate of an element relative to the HTML document
     * @param {Element} el Elements.
     * @return {number} The left coordinate.
     */
    function getPageOffsetLeft(el: Element): number;

    /**
     * Returns the top coordinate of an element relative to the HTML document
     * @param {Element} el Elements.
     * @return {number} The top coordinate.
     */
    function getPageOffsetTop(el: Element): number;

    /**
     * Returns a Coordinate object relative to the top-left of an HTML document
     * in an ancestor frame of this element. Used for measuring the position of
     * an element inside a frame relative to a containing frame.
     *
     * @param {Element} el Element to get the page offset for.
     * @param {Window} relativeWin The window to measure relative to. If relativeWin
     *     is not in the ancestor frame chain of the element, we measure relative to
     *     the top-most window.
     * @return {!goog.math.Coordinate} The page offset.
     */
    function getFramedPageOffset(el: Element, relativeWin: Window): goog.math.Coordinate;

    /**
     * Translates the specified rect relative to origBase page, for newBase page.
     * If origBase and newBase are the same, this function does nothing.
     *
     * @param {goog.math.Rect} rect The source rectangle relative to origBase page,
     *     and it will have the translated result.
     * @param {goog.dom.DomHelper} origBase The DomHelper for the input rectangle.
     * @param {goog.dom.DomHelper} newBase The DomHelper for the resultant
     *     coordinate.  This must be a DOM for an ancestor frame of origBase
     *     or the same as origBase.
     */
    function translateRectForAnotherFrame(rect: goog.math.Rect, origBase: goog.dom.DomHelper, newBase: goog.dom.DomHelper): void;

    /**
     * Returns the position of an element relative to another element in the
     * document.  A relative to B
     * @param {Element|Event|goog.events.Event} a Element or mouse event whose
     *     position we're calculating.
     * @param {Element|Event|goog.events.Event} b Element or mouse event position
     *     is relative to.
     * @return {!goog.math.Coordinate} The relative position.
     */
    function getRelativePosition(a: Element|Event|goog.events.Event, b: Element|Event|goog.events.Event): goog.math.Coordinate;

    /**
     * Returns the position of the event or the element's border box relative to
     * the client viewport.
     * @param {Element|Event|goog.events.Event} el Element or a mouse / touch event.
     * @return {!goog.math.Coordinate} The position.
     */
    function getClientPosition(el: Element|Event|goog.events.Event): goog.math.Coordinate;

    /**
     * Moves an element to the given coordinates relative to the client viewport.
     * @param {Element} el Absolutely positioned element to set page offset for.
     *     It must be in the document.
     * @param {number|goog.math.Coordinate} x Left position of the element's margin
     *     box or a coordinate object.
     * @param {number=} opt_y Top position of the element's margin box.
     */
    function setPageOffset(el: Element, x: number|goog.math.Coordinate, opt_y?: number): void;

    /**
     * Sets the width/height values of an element.  If an argument is numeric,
     * or a goog.math.Size is passed, it is assumed to be pixels and will add
     * 'px' after converting it to an integer in string form. (This just sets the
     * CSS width and height properties so it might set content-box or border-box
     * size depending on the box model the browser is using.)
     *
     * @param {Element} element Element to set the size of.
     * @param {string|number|goog.math.Size} w Width of the element, or a
     *     size object.
     * @param {string|number=} opt_h Height of the element. Required if w is not a
     *     size object.
     */
    function setSize(element: Element, w: string|number|goog.math.Size, opt_h?: string|number): void;

    /**
     * Set the height of an element.  Sets the element's style property.
     * @param {Element} element Element to set the height of.
     * @param {string|number} height The height value to set.  If a number, 'px'
     *     will be appended, otherwise the value will be applied directly.
     */
    function setHeight(element: Element, height: string|number): void;

    /**
     * Set the width of an element.  Sets the element's style property.
     * @param {Element} element Element to set the width of.
     * @param {string|number} width The width value to set.  If a number, 'px'
     *     will be appended, otherwise the value will be applied directly.
     */
    function setWidth(element: Element, width: string|number): void;

    /**
     * Gets the height and width of an element, even if its display is none.
     *
     * Specifically, this returns the height and width of the border box,
     * irrespective of the box model in effect.
     *
     * Note that this function does not take CSS transforms into account. Please see
     * {@code goog.style.getTransformedSize}.
     * @param {Element} element Element to get size of.
     * @return {!goog.math.Size} Object with width/height properties.
     */
    function getSize(element: Element): goog.math.Size;

    /**
     * Gets the height and width of an element, post transform, even if its display
     * is none.
     *
     * This is like {@code goog.style.getSize}, except:
     * <ol>
     * <li>Takes webkitTransforms such as rotate and scale into account.
     * <li>Will return null if {@code element} doesn't respond to
     *     {@code getBoundingClientRect}.
     * <li>Currently doesn't make sense on non-WebKit browsers which don't support
     *    webkitTransforms.
     * </ol>
     * @param {!Element} element Element to get size of.
     * @return {goog.math.Size} Object with width/height properties.
     */
    function getTransformedSize(element: Element): goog.math.Size;

    /**
     * Returns a bounding rectangle for a given element in page space.
     * @param {Element} element Element to get bounds of. Must not be display none.
     * @return {!goog.math.Rect} Bounding rectangle for the element.
     */
    function getBounds(element: Element): goog.math.Rect;

    /**
     * Converts a CSS selector in the form style-property to styleProperty.
     * @param {*} selector CSS Selector.
     * @return {string} Camel case selector.
     * @deprecated Use goog.string.toCamelCase instead.
     */
    function toCamelCase(selector: any): string;

    /**
     * Converts a CSS selector in the form styleProperty to style-property.
     * @param {string} selector Camel case selector.
     * @return {string} Selector cased.
     * @deprecated Use goog.string.toSelectorCase instead.
     */
    function toSelectorCase(selector: string): string;

    /**
     * Gets the opacity of a node (x-browser). This gets the inline style opacity
     * of the node, and does not take into account the cascaded or the computed
     * style for this node.
     * @param {Element} el Element whose opacity has to be found.
     * @return {number|string} Opacity between 0 and 1 or an empty string {@code ''}
     *     if the opacity is not set.
     */
    function getOpacity(el: Element): number|string;

    /**
     * Sets the opacity of a node (x-browser).
     * @param {Element} el Elements whose opacity has to be set.
     * @param {number|string} alpha Opacity between 0 and 1 or an empty string
     *     {@code ''} to clear the opacity.
     */
    function setOpacity(el: Element, alpha: number|string): void;

    /**
     * Sets the background of an element to a transparent image in a browser-
     * independent manner.
     *
     * This function does not support repeating backgrounds or alternate background
     * positions to match the behavior of Internet Explorer. It also does not
     * support sizingMethods other than crop since they cannot be replicated in
     * browsers other than Internet Explorer.
     *
     * @param {Element} el The element to set background on.
     * @param {string} src The image source URL.
     */
    function setTransparentBackgroundImage(el: Element, src: string): void;

    /**
     * Clears the background image of an element in a browser independent manner.
     * @param {Element} el The element to clear background image for.
     */
    function clearTransparentBackgroundImage(el: Element): void;

    /**
     * Shows or hides an element from the page. Hiding the element is done by
     * setting the display property to "none", removing the element from the
     * rendering hierarchy so it takes up no space. To show the element, the default
     * inherited display property is restored (defined either in stylesheets or by
     * the browser's default style rules.)
     *
     * Caveat 1: if the inherited display property for the element is set to "none"
     * by the stylesheets, that is the property that will be restored by a call to
     * showElement(), effectively toggling the display between "none" and "none".
     *
     * Caveat 2: if the element display style is set inline (by setting either
     * element.style.display or a style attribute in the HTML), a call to
     * showElement will clear that setting and defer to the inherited style in the
     * stylesheet.
     * @param {Element} el Element to show or hide.
     * @param {*} display True to render the element in its default style,
     *     false to disable rendering the element.
     * @deprecated Use goog.style.setElementShown instead.
     */
    function showElement(el: Element, display: any): void;

    /**
     * Shows or hides an element from the page. Hiding the element is done by
     * setting the display property to "none", removing the element from the
     * rendering hierarchy so it takes up no space. To show the element, the default
     * inherited display property is restored (defined either in stylesheets or by
     * the browser's default style rules).
     *
     * Caveat 1: if the inherited display property for the element is set to "none"
     * by the stylesheets, that is the property that will be restored by a call to
     * setElementShown(), effectively toggling the display between "none" and
     * "none".
     *
     * Caveat 2: if the element display style is set inline (by setting either
     * element.style.display or a style attribute in the HTML), a call to
     * setElementShown will clear that setting and defer to the inherited style in
     * the stylesheet.
     * @param {Element} el Element to show or hide.
     * @param {*} isShown True to render the element in its default style,
     *     false to disable rendering the element.
     */
    function setElementShown(el: Element, isShown: any): void;

    /**
     * Test whether the given element has been shown or hidden via a call to
     * {@link #setElementShown}.
     *
     * Note this is strictly a companion method for a call
     * to {@link #setElementShown} and the same caveats apply; in particular, this
     * method does not guarantee that the return value will be consistent with
     * whether or not the element is actually visible.
     *
     * @param {Element} el The element to test.
     * @return {boolean} Whether the element has been shown.
     * @see #setElementShown
     */
    function isElementShown(el: Element): boolean;

    /**
     * Installs the styles string into the window that contains opt_element.  If
     * opt_element is null, the main window is used.
     * @param {string} stylesString The style string to install.
     * @param {Node=} opt_node Node whose parent document should have the
     *     styles installed.
     * @return {Element|StyleSheet} The style element created.
     */
    function installStyles(stylesString: string, opt_node?: Node): Element|StyleSheet;

    /**
     * Removes the styles added by {@link #installStyles}.
     * @param {Element|StyleSheet} styleSheet The value returned by
     *     {@link #installStyles}.
     */
    function uninstallStyles(styleSheet: Element|StyleSheet): void;

    /**
     * Sets the content of a style element.  The style element can be any valid
     * style element.  This element will have its content completely replaced by
     * the new stylesString.
     * @param {Element|StyleSheet} element A stylesheet element as returned by
     *     installStyles.
     * @param {string} stylesString The new content of the stylesheet.
     */
    function setStyles(element: Element|StyleSheet, stylesString: string): void;

    /**
     * Sets 'white-space: pre-wrap' for a node (x-browser).
     *
     * There are as many ways of specifying pre-wrap as there are browsers.
     *
     * CSS3/IE8: white-space: pre-wrap;
     * Mozilla:  white-space: -moz-pre-wrap;
     * Opera:    white-space: -o-pre-wrap;
     * IE6/7:    white-space: pre; word-wrap: break-word;
     *
     * @param {Element} el Element to enable pre-wrap for.
     */
    function setPreWrap(el: Element): void;

    /**
     * Sets 'display: inline-block' for an element (cross-browser).
     * @param {Element} el Element to which the inline-block display style is to be
     *    applied.
     * @see ../demos/inline_block_quirks.html
     * @see ../demos/inline_block_standards.html
     */
    function setInlineBlock(el: Element): void;

    /**
     * Returns true if the element is using right to left (rtl) direction.
     * @param {Element} el  The element to test.
     * @return {boolean} True for right to left, false for left to right.
     */
    function isRightToLeft(el: Element): boolean;

    /**
     * Returns true if the element is set to be unselectable, false otherwise.
     * Note that on some platforms (e.g. Mozilla), even if an element isn't set
     * to be unselectable, it will behave as such if any of its ancestors is
     * unselectable.
     * @param {Element} el  Element to check.
     * @return {boolean}  Whether the element is set to be unselectable.
     */
    function isUnselectable(el: Element): boolean;

    /**
     * Makes the element and its descendants selectable or unselectable.  Note
     * that on some platforms (e.g. Mozilla), even if an element isn't set to
     * be unselectable, it will behave as such if any of its ancestors is
     * unselectable.
     * @param {Element} el  The element to alter.
     * @param {boolean} unselectable  Whether the element and its descendants
     *     should be made unselectable.
     * @param {boolean=} opt_noRecurse  Whether to only alter the element's own
     *     selectable state, and leave its descendants alone; defaults to false.
     */
    function setUnselectable(el: Element, unselectable: boolean, opt_noRecurse?: boolean): void;

    /**
     * Gets the border box size for an element.
     * @param {Element} element  The element to get the size for.
     * @return {!goog.math.Size} The border box size.
     */
    function getBorderBoxSize(element: Element): goog.math.Size;

    /**
     * Sets the border box size of an element. This is potentially expensive in IE
     * if the document is CSS1Compat mode
     * @param {Element} element  The element to set the size on.
     * @param {goog.math.Size} size  The new size.
     */
    function setBorderBoxSize(element: Element, size: goog.math.Size): void;

    /**
     * Gets the content box size for an element.  This is potentially expensive in
     * all browsers.
     * @param {Element} element  The element to get the size for.
     * @return {!goog.math.Size} The content box size.
     */
    function getContentBoxSize(element: Element): goog.math.Size;

    /**
     * Sets the content box size of an element. This is potentially expensive in IE
     * if the document is BackCompat mode.
     * @param {Element} element  The element to set the size on.
     * @param {goog.math.Size} size  The new size.
     */
    function setContentBoxSize(element: Element, size: goog.math.Size): void;

    /**
     * Gets the computed paddings (on all sides) in pixels.
     * @param {Element} element  The element to get the padding for.
     * @return {!goog.math.Box} The computed paddings.
     */
    function getPaddingBox(element: Element): goog.math.Box;

    /**
     * Gets the computed margins (on all sides) in pixels.
     * @param {Element} element  The element to get the margins for.
     * @return {!goog.math.Box} The computed margins.
     */
    function getMarginBox(element: Element): goog.math.Box;

    /**
     * Gets the computed border widths (on all sides) in pixels
     * @param {Element} element  The element to get the border widths for.
     * @return {!goog.math.Box} The computed border widths.
     */
    function getBorderBox(element: Element): goog.math.Box;

    /**
     * Returns the font face applied to a given node. Opera and IE should return
     * the font actually displayed. Firefox returns the author's most-preferred
     * font (whether the browser is capable of displaying it or not.)
     * @param {Element} el  The element whose font family is returned.
     * @return {string} The font family applied to el.
     */
    function getFontFamily(el: Element): string;

    /**
     * Returns the units used for a CSS length measurement.
     * @param {string} value  A CSS length quantity.
     * @return {?string} The units of measurement.
     */
    function getLengthUnits(value: string): string;

    /**
     * Returns the font size, in pixels, of text in an element.
     * @param {Element} el  The element whose font size is returned.
     * @return {number} The font size (in pixels).
     */
    function getFontSize(el: Element): number;

    /**
     * Parses a style attribute value.  Converts CSS property names to camel case.
     * @param {string} value The style attribute value.
     * @return {!Object} Map of CSS properties to string values.
     */
    function parseStyleAttribute(value: string): Object;

    /**
     * Reverse of parseStyleAttribute; that is, takes a style object and returns the
     * corresponding attribute value.  Converts camel case property names to proper
     * CSS selector names.
     * @param {Object} obj Map of CSS properties to values.
     * @return {string} The style attribute value.
     */
    function toStyleAttribute(obj: Object): string;

    /**
     * Sets CSS float property on an element.
     * @param {Element} el The element to set float property on.
     * @param {string} value The value of float CSS property to set on this element.
     */
    function setFloat(el: Element, value: string): void;

    /**
     * Gets value of explicitly-set float CSS property on an element.
     * @param {Element} el The element to get float property of.
     * @return {string} The value of explicitly-set float CSS property on this
     *     element.
     */
    function getFloat(el: Element): string;

    /**
     * Returns the scroll bar width (represents the width of both horizontal
     * and vertical scroll).
     *
     * @param {string=} opt_className An optional class name (or names) to apply
     *     to the invisible div created to measure the scrollbar. This is necessary
     *     if some scrollbars are styled differently than others.
     * @return {number} The scroll bar width in px.
     */
    function getScrollbarWidth(opt_className?: string): number;

    /**
     * Returns the x,y translation component of any CSS transforms applied to the
     * element, in pixels.
     *
     * @param {!Element} element The element to get the translation of.
     * @return {!goog.math.Coordinate} The CSS translation of the element in px.
     */
    function getCssTranslation(element: Element): goog.math.Coordinate;
}
