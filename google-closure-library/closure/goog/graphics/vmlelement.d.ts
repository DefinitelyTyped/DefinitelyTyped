declare module goog {
    function require(name: 'goog.graphics.VmlGroupElement'): typeof goog.graphics.VmlGroupElement;
    function require(name: 'goog.graphics.VmlEllipseElement'): typeof goog.graphics.VmlEllipseElement;
    function require(name: 'goog.graphics.VmlRectElement'): typeof goog.graphics.VmlRectElement;
    function require(name: 'goog.graphics.VmlPathElement'): typeof goog.graphics.VmlPathElement;
    function require(name: 'goog.graphics.VmlTextElement'): typeof goog.graphics.VmlTextElement;
    function require(name: 'goog.graphics.VmlImageElement'): typeof goog.graphics.VmlImageElement;
}

declare module goog.graphics {

    /**
     * Thin wrapper for VML group elements.
     * This is an implementation of the goog.graphics.GroupElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.VmlGraphics} graphics The graphics creating
     *     this element.
     * @constructor
     * @extends {goog.graphics.GroupElement}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     * @final
     */
    class VmlGroupElement extends goog.graphics.GroupElement {
        constructor(element: Element, graphics: goog.graphics.VmlGraphics);
        
        /**
         * Set the size of the group element.
         * @param {number|string} width The width of the group element.
         * @param {number|string} height The height of the group element.
         * @override
         */
        setSize(width: number|string, height: number|string): void;
    }

    /**
     * Thin wrapper for VML ellipse elements.
     * This is an implementation of the goog.graphics.EllipseElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.VmlGraphics} graphics  The graphics creating
     *     this element.
     * @param {number} cx Center X coordinate.
     * @param {number} cy Center Y coordinate.
     * @param {number} rx Radius length for the x-axis.
     * @param {number} ry Radius length for the y-axis.
     * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
     * @param {goog.graphics.Fill?} fill The fill to use for this element.
     * @constructor
     * @extends {goog.graphics.EllipseElement}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     * @final
     */
    class VmlEllipseElement extends goog.graphics.EllipseElement {
        constructor(element: Element, graphics: goog.graphics.VmlGraphics, cx: number, cy: number, rx: number, ry: number, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
        
        /**
         * Update the center point of the ellipse.
         * @param {number} cx Center X coordinate.
         * @param {number} cy Center Y coordinate.
         * @override
         */
        setCenter(cx: number, cy: number): void;
        
        /**
         * Update the radius of the ellipse.
         * @param {number} rx Center X coordinate.
         * @param {number} ry Center Y coordinate.
         * @override
         */
        setRadius(rx: number, ry: number): void;
    }

    /**
     * Thin wrapper for VML rectangle elements.
     * This is an implementation of the goog.graphics.RectElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.VmlGraphics} graphics The graphics creating
     *     this element.
     * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
     * @param {goog.graphics.Fill?} fill The fill to use for this element.
     * @constructor
     * @extends {goog.graphics.RectElement}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     * @final
     */
    class VmlRectElement extends goog.graphics.RectElement {
        constructor(element: Element, graphics: goog.graphics.VmlGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
        
        /**
         * Update the position of the rectangle.
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @override
         */
        setPosition(x: number, y: number): void;
        
        /**
         * Update the size of the rectangle.
         * @param {number} width Width of rectangle.
         * @param {number} height Height of rectangle.
         * @override
         */
        setSize(width: number, height: number): void;
    }

    /**
     * Thin wrapper for VML path elements.
     * This is an implementation of the goog.graphics.PathElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.VmlGraphics} graphics The graphics creating
     *     this element.
     * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
     * @param {goog.graphics.Fill?} fill The fill to use for this element.
     * @constructor
     * @extends {goog.graphics.PathElement}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     * @final
     */
    class VmlPathElement extends goog.graphics.PathElement {
        constructor(element: Element, graphics: goog.graphics.VmlGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
        
        /**
         * Update the underlying path.
         * @param {!goog.graphics.Path} path The path object to draw.
         * @override
         */
        setPath(path: goog.graphics.Path): void;
    }

    /**
     * Thin wrapper for VML text elements.
     * This is an implementation of the goog.graphics.TextElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.VmlGraphics} graphics The graphics creating
     *     this element.
     * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
     * @param {goog.graphics.Fill?} fill The fill to use for this element.
     * @constructor
     * @extends {goog.graphics.TextElement}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     * @final
     */
    class VmlTextElement extends goog.graphics.TextElement {
        constructor(element: Element, graphics: goog.graphics.VmlGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
        
        /**
         * Update the displayed text of the element.
         * @param {string} text The text to draw.
         * @override
         */
        setText(text: string): void;
    }

    /**
     * Thin wrapper for VML image elements.
     * This is an implementation of the goog.graphics.ImageElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.VmlGraphics} graphics The graphics creating
     *     this element.
     * @constructor
     * @extends {goog.graphics.ImageElement}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     * @final
     */
    class VmlImageElement extends goog.graphics.ImageElement {
        constructor(element: Element, graphics: goog.graphics.VmlGraphics);
        
        /**
         * Update the position of the image.
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @override
         */
        setPosition(x: number, y: number): void;
        
        /**
         * Update the size of the image.
         * @param {number} width Width of rectangle.
         * @param {number} height Height of rectangle.
         * @override
         */
        setSize(width: number, height: number): void;
        
        /**
         * Update the source of the image.
         * @param {string} src Source of the image.
         * @override
         */
        setSource(src: string): void;
    }

    /**
     * Returns the VML element corresponding to this object.  This method is added
     * to several classes below.  Note that the return value of this method may
     * change frequently in IE8, so it should not be cached externally.
     * @return {Element} The VML element corresponding to this object.
     * @this {goog.graphics.VmlGroupElement|goog.graphics.VmlEllipseElement|
     *     goog.graphics.VmlRectElement|goog.graphics.VmlPathElement|
     *     goog.graphics.VmlTextElement|goog.graphics.VmlImageElement}
     * @private
     */
    function vmlGetElement_(): Element;
}
