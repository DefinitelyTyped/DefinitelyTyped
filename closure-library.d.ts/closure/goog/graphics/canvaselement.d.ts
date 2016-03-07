declare module goog {
    function require(name: 'goog.graphics.CanvasGroupElement'): typeof goog.graphics.CanvasGroupElement;
    function require(name: 'goog.graphics.CanvasEllipseElement'): typeof goog.graphics.CanvasEllipseElement;
    function require(name: 'goog.graphics.CanvasRectElement'): typeof goog.graphics.CanvasRectElement;
    function require(name: 'goog.graphics.CanvasPathElement'): typeof goog.graphics.CanvasPathElement;
    function require(name: 'goog.graphics.CanvasTextElement'): typeof goog.graphics.CanvasTextElement;
    function require(name: 'goog.graphics.CanvasImageElement'): typeof goog.graphics.CanvasImageElement;
}

declare module goog.graphics {

    /**
     * Object representing a group of objects in a canvas.
     * This is an implementation of the goog.graphics.GroupElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {goog.graphics.CanvasGraphics} graphics The graphics creating
     *     this element.
     * @constructor
     * @extends {goog.graphics.GroupElement}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     * @final
     */
    class CanvasGroupElement extends goog.graphics.GroupElement {
        constructor(graphics: goog.graphics.CanvasGraphics);
        
        /**
         * Set the size of the group element.
         * @param {number|string} width The width of the group element.
         * @param {number|string} height The height of the group element.
         * @override
         */
        setSize(width: number|string, height: number|string): void;
        
        /**
         * Append a child to the group.  Does not draw it
         * @param {goog.graphics.Element} element The child to append.
         */
        appendChild(element: goog.graphics.Element): void;
        
        /**
         * Draw the group.
         * @param {CanvasRenderingContext2D} ctx The context to draw the element in.
         */
        draw(ctx: CanvasRenderingContext2D): void;
    }

    /**
     * Thin wrapper for canvas ellipse elements.
     * This is an implementation of the goog.graphics.EllipseElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.CanvasGraphics} graphics  The graphics creating
     *     this element.
     * @param {number} cx Center X coordinate.
     * @param {number} cy Center Y coordinate.
     * @param {number} rx Radius length for the x-axis.
     * @param {number} ry Radius length for the y-axis.
     * @param {goog.graphics.Stroke} stroke The stroke to use for this element.
     * @param {goog.graphics.Fill} fill The fill to use for this element.
     * @constructor
     * @extends {goog.graphics.EllipseElement}
     * @final
     */
    class CanvasEllipseElement extends goog.graphics.EllipseElement {
        constructor(element: Element, graphics: goog.graphics.CanvasGraphics, cx: number, cy: number, rx: number, ry: number, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
        
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
        
        /**
         * Draw the ellipse.  Should be treated as package scope.
         * @param {CanvasRenderingContext2D} ctx The context to draw the element in.
         */
        draw(ctx: CanvasRenderingContext2D): void;
    }

    /**
     * Thin wrapper for canvas rectangle elements.
     * This is an implementation of the goog.graphics.RectElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.CanvasGraphics} graphics The graphics creating
     *     this element.
     * @param {number} x X coordinate (left).
     * @param {number} y Y coordinate (top).
     * @param {number} w Width of rectangle.
     * @param {number} h Height of rectangle.
     * @param {goog.graphics.Stroke} stroke The stroke to use for this element.
     * @param {goog.graphics.Fill} fill The fill to use for this element.
     * @constructor
     * @extends {goog.graphics.RectElement}
     * @final
     */
    class CanvasRectElement extends goog.graphics.RectElement {
        constructor(element: Element, graphics: goog.graphics.CanvasGraphics, x: number, y: number, w: number, h: number, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
        
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
        
        /**
         * Draw the rectangle.  Should be treated as package scope.
         * @param {CanvasRenderingContext2D} ctx The context to draw the element in.
         */
        draw(ctx: CanvasRenderingContext2D): void;
    }

    /**
     * Thin wrapper for canvas path elements.
     * This is an implementation of the goog.graphics.PathElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.CanvasGraphics} graphics The graphics creating
     *     this element.
     * @param {!goog.graphics.Path} path The path object to draw.
     * @param {goog.graphics.Stroke} stroke The stroke to use for this element.
     * @param {goog.graphics.Fill} fill The fill to use for this element.
     * @constructor
     * @extends {goog.graphics.PathElement}
     * @final
     */
    class CanvasPathElement extends goog.graphics.PathElement {
        constructor(element: Element, graphics: goog.graphics.CanvasGraphics, path: goog.graphics.Path, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
        
        /**
         * Update the underlying path.
         * @param {!goog.graphics.Path} path The path object to draw.
         * @override
         */
        setPath(path: goog.graphics.Path): void;
        
        /**
         * Draw the path.  Should be treated as package scope.
         * @param {CanvasRenderingContext2D} ctx The context to draw the element in.
         * @suppress {deprecated} goog.graphics is deprecated.
         */
        draw(ctx: CanvasRenderingContext2D): void;
    }

    /**
     * Thin wrapper for canvas text elements.
     * This is an implementation of the goog.graphics.TextElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {!goog.graphics.CanvasGraphics} graphics The graphics creating
     *     this element.
     * @param {string} text The text to draw.
     * @param {number} x1 X coordinate of start of line.
     * @param {number} y1 Y coordinate of start of line.
     * @param {number} x2 X coordinate of end of line.
     * @param {number} y2 Y coordinate of end of line.
     * @param {?string} align Horizontal alignment: left (default), center, right.
     * @param {!goog.graphics.Font} font Font describing the font properties.
     * @param {goog.graphics.Stroke} stroke The stroke to use for this element.
     * @param {goog.graphics.Fill} fill The fill to use for this element.
     * @constructor
     * @extends {goog.graphics.TextElement}
     * @final
     */
    class CanvasTextElement extends goog.graphics.TextElement {
        constructor(graphics: goog.graphics.CanvasGraphics, text: string, x1: number, y1: number, x2: number, y2: number, align: string, font: goog.graphics.Font, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
        
        /**
         * Update the displayed text of the element.
         * @param {string} text The text to draw.
         * @override
         */
        setText(text: string): void;
        
        /**
         * Sets the fill for this element.
         * @param {goog.graphics.Fill} fill The fill object.
         * @override
         */
        setFill(fill: goog.graphics.Fill): void;
        
        /**
         * Sets the stroke for this element.
         * @param {goog.graphics.Stroke} stroke The stroke object.
         * @override
         */
        setStroke(stroke: goog.graphics.Stroke): void;
        
        /**
         * Draw the text.  Should be treated as package scope.
         * @param {CanvasRenderingContext2D} ctx The context to draw the element in.
         */
        draw(ctx: CanvasRenderingContext2D): void;
    }

    /**
     * Thin wrapper for canvas image elements.
     * This is an implementation of the goog.graphics.ImageElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.CanvasGraphics} graphics The graphics creating
     *     this element.
     * @param {number} x X coordinate (left).
     * @param {number} y Y coordinate (top).
     * @param {number} w Width of rectangle.
     * @param {number} h Height of rectangle.
     * @param {string} src Source of the image.
     * @constructor
     * @extends {goog.graphics.ImageElement}
     * @final
     */
    class CanvasImageElement extends goog.graphics.ImageElement {
        constructor(element: Element, graphics: goog.graphics.CanvasGraphics, x: number, y: number, w: number, h: number, src: string);
        
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
        
        /**
         * Draw the image.  Should be treated as package scope.
         * @param {CanvasRenderingContext2D} ctx The context to draw the element in.
         */
        draw(ctx: CanvasRenderingContext2D): void;
    }
}
