declare module goog {
    function require(name: 'goog.graphics.SvgGroupElement'): typeof goog.graphics.SvgGroupElement;
    function require(name: 'goog.graphics.SvgEllipseElement'): typeof goog.graphics.SvgEllipseElement;
    function require(name: 'goog.graphics.SvgRectElement'): typeof goog.graphics.SvgRectElement;
    function require(name: 'goog.graphics.SvgPathElement'): typeof goog.graphics.SvgPathElement;
    function require(name: 'goog.graphics.SvgTextElement'): typeof goog.graphics.SvgTextElement;
    function require(name: 'goog.graphics.SvgImageElement'): typeof goog.graphics.SvgImageElement;
}

declare module goog.graphics {

    /**
     * Thin wrapper for SVG group elements.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.SvgGraphics} graphics The graphics creating
     *     this element.
     * @constructor
     * @extends {goog.graphics.GroupElement}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     * @final
     */
    class SvgGroupElement extends goog.graphics.GroupElement {
        constructor(element: Element, graphics: goog.graphics.SvgGraphics);
        
        /**
         * Set the size of the group element.
         * @param {number|string} width The width of the group element.
         * @param {number|string} height The height of the group element.
         * @override
         */
        setSize(width: number|string, height: number|string): void;
    }

    /**
     * Thin wrapper for SVG ellipse elements.
     * This is an implementation of the goog.graphics.EllipseElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.SvgGraphics} graphics The graphics creating
     *     this element.
     * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
     * @param {goog.graphics.Fill?} fill The fill to use for this element.
     * @constructor
     * @extends {goog.graphics.EllipseElement}
     * @final
     */
    class SvgEllipseElement extends goog.graphics.EllipseElement {
        constructor(element: Element, graphics: goog.graphics.SvgGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
        
        /**
         * Update the center point of the ellipse.
         * @param {number} cx Center X coordinate.
         * @param {number} cy Center Y coordinate.
         * @override
         */
        setCenter(cx: number, cy: number): void;
        
        /**
         * Update the radius of the ellipse.
         * @param {number} rx Radius length for the x-axis.
         * @param {number} ry Radius length for the y-axis.
         * @override
         */
        setRadius(rx: number, ry: number): void;
    }

    /**
     * Thin wrapper for SVG rectangle elements.
     * This is an implementation of the goog.graphics.RectElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.SvgGraphics} graphics The graphics creating
     *     this element.
     * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
     * @param {goog.graphics.Fill?} fill The fill to use for this element.
     * @constructor
     * @extends {goog.graphics.RectElement}
     * @final
     */
    class SvgRectElement extends goog.graphics.RectElement {
        constructor(element: Element, graphics: goog.graphics.SvgGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
        
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
     * Thin wrapper for SVG path elements.
     * This is an implementation of the goog.graphics.PathElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.SvgGraphics} graphics The graphics creating
     *     this element.
     * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
     * @param {goog.graphics.Fill?} fill The fill to use for this element.
     * @constructor
     * @extends {goog.graphics.PathElement}
     * @final
     */
    class SvgPathElement extends goog.graphics.PathElement {
        constructor(element: Element, graphics: goog.graphics.SvgGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
        
        /**
         * Update the underlying path.
         * @param {!goog.graphics.Path} path The path object to draw.
         * @override
         */
        setPath(path: goog.graphics.Path): void;
    }

    /**
     * Thin wrapper for SVG text elements.
     * This is an implementation of the goog.graphics.TextElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.SvgGraphics} graphics The graphics creating
     *     this element.
     * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
     * @param {goog.graphics.Fill?} fill The fill to use for this element.
     * @constructor
     * @extends {goog.graphics.TextElement}
     * @final
     */
    class SvgTextElement extends goog.graphics.TextElement {
        constructor(element: Element, graphics: goog.graphics.SvgGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
        
        /**
         * Update the displayed text of the element.
         * @param {string} text The text to draw.
         * @override
         */
        setText(text: string): void;
    }

    /**
     * Thin wrapper for SVG image elements.
     * This is an implementation of the goog.graphics.ImageElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.SvgGraphics} graphics The graphics creating
     *     this element.
     * @constructor
     * @extends {goog.graphics.ImageElement}
     * @final
     */
    class SvgImageElement extends goog.graphics.ImageElement {
        constructor(element: Element, graphics: goog.graphics.SvgGraphics);
        
        /**
         * Update the position of the image.
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @override
         */
        setPosition(x: number, y: number): void;
        
        /**
         * Update the size of the image.
         * @param {number} width Width of image.
         * @param {number} height Height of image.
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
}
