declare module goog {
    function require(name: 'goog.graphics.VmlGraphics'): typeof goog.graphics.VmlGraphics;
}

declare module goog.graphics {

    /**
     * A Graphics implementation for drawing using VML.
     * @param {string|number} width The (non-zero) width in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {string|number} height The (non-zero) height in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {?number=} opt_coordWidth The coordinate width - if
     *     omitted or null, defaults to same as width.
     * @param {?number=} opt_coordHeight The coordinate height - if
     *     omitted or null, defaults to same as height.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @constructor
     * @extends {goog.graphics.AbstractGraphics}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     * @final
     */
    class VmlGraphics extends goog.graphics.AbstractGraphics {
        constructor(width: string|number, height: string|number, opt_coordWidth?: number, opt_coordHeight?: number, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * The coordinate multiplier to allow sub-pixel rendering
         * @type {number}
         */
        static COORD_MULTIPLIER: number;
        
        /**
         * Converts the given size to a css size.  If it is a percentage, leaves it
         * alone.  Otherwise assumes px.
         *
         * @param {number|string} size The size to use.
         * @return {string} The position adjusted for COORD_MULTIPLIER.
         */
        static toCssSize(size: number|string): string;
        
        /**
         * Multiplies positioning coordinates by COORD_MULTIPLIER to allow sub-pixel
         * coordinates.  Also adds a half pixel offset to match SVG.
         *
         * This function is internal for the VML supporting classes, and
         * should not be used externally.
         *
         * @param {number|string} number A position in pixels.
         * @return {number} The position adjusted for COORD_MULTIPLIER.
         */
        static toPosCoord(number: number|string): number;
        
        /**
         * Add a "px" suffix to a number of pixels, and multiplies all coordinates by
         * COORD_MULTIPLIER to allow sub-pixel coordinates.
         *
         * This function is internal for the VML supporting classes, and
         * should not be used externally.
         *
         * @param {number|string} number A position in pixels.
         * @return {string} The position with suffix 'px'.
         */
        static toPosPx(number: number|string): string;
        
        /**
         * Multiplies the width or height coordinate by COORD_MULTIPLIER to allow
         * sub-pixel coordinates.
         *
         * This function is internal for the VML supporting classes, and
         * should not be used externally.
         *
         * @param {string|number} number A size in units.
         * @return {number} The size multiplied by the correct factor.
         */
        static toSizeCoord(number: string|number): number;
        
        /**
         * Add a "px" suffix to a number of pixels, and multiplies all coordinates by
         * COORD_MULTIPLIER to allow sub-pixel coordinates.
         *
         * This function is internal for the VML supporting classes, and
         * should not be used externally.
         *
         * @param {number|string} number A size in pixels.
         * @return {string} The size with suffix 'px'.
         */
        static toSizePx(number: number|string): string;
        
        /**
         * Sets an attribute on the given VML element, in the way best suited to the
         * current version of IE.  Should only be used in the goog.graphics package.
         * @param {Element} element The element to set an attribute
         *     on.
         * @param {string} name The name of the attribute to set.
         * @param {string} value The value to set it to.
         */
        static setAttribute(element: Element, name: string, value: string): void;
        
        /**
         * Creates a VML element. Used internally and by different VML classes.
         * @param {string} tagName The type of element to create.
         * @return {!Element} The created element.
         */
        createVmlElement(tagName: string): Element;
        
        /**
         * Returns the VML element with the given id that is a child of this graphics
         * object.
         * Should be considered package private, and not used externally.
         * @param {string} id The element id to find.
         * @return {Element} The element with the given id, or null if none is found.
         */
        getVmlElement(id: string): Element;
        
        /**
         * Sets the fill for the given element.
         * @param {goog.graphics.StrokeAndFillElement} element The element wrapper.
         * @param {goog.graphics.Fill?} fill The fill object.
         * @override
         */
        setElementFill(element: goog.graphics.StrokeAndFillElement, fill: goog.graphics.Fill): void;
        
        /**
         * Sets the stroke for the given element.
         * @param {goog.graphics.StrokeAndFillElement} element The element wrapper.
         * @param {goog.graphics.Stroke?} stroke The stroke object.
         * @override
         */
        setElementStroke(element: goog.graphics.StrokeAndFillElement, stroke: goog.graphics.Stroke): void;
        
        /**
         * Set the translation and rotation of an element.
         *
         * If a more general affine transform is needed than this provides
         * (e.g. skew and scale) then use setElementAffineTransform.
         * @param {goog.graphics.Element} element The element wrapper.
         * @param {number} x The x coordinate of the translation transform.
         * @param {number} y The y coordinate of the translation transform.
         * @param {number} angle The angle of the rotation transform.
         * @param {number} centerX The horizontal center of the rotation transform.
         * @param {number} centerY The vertical center of the rotation transform.
         * @override
         */
        setElementTransform(element: goog.graphics.Element, x: number, y: number, angle: number, centerX: number, centerY: number): void;
        
        /**
         * Set the transformation of an element.
         * @param {!goog.graphics.Element} element The element wrapper.
         * @param {!goog.graphics.AffineTransform} affineTransform The
         *     transformation applied to this element.
         * @override
         */
        setElementAffineTransform(element: goog.graphics.Element, affineTransform: goog.graphics.AffineTransform): void;
        
        /**
         * Set top, left, width and height for an element.
         * This function is internal for the VML supporting classes, and
         * should not be used externally.
         *
         * @param {Element} element DOM element.
         * @param {number} left Left ccordinate in pixels.
         * @param {number} top Top ccordinate in pixels.
         * @param {number} width Width in pixels.
         * @param {number} height Height in pixels.
         */
        static setPositionAndSize(element: Element, left: number, top: number, width: number, height: number): void;
        
        /**
         * Changes the coordinate system position.
         * @param {number} left The coordinate system left bound.
         * @param {number} top The coordinate system top bound.
         * @override
         */
        setCoordOrigin(left: number, top: number): void;
        
        /**
         * Changes the coordinate size.
         * @param {number} coordWidth The coordinate width.
         * @param {number} coordHeight The coordinate height.
         * @override
         */
        setCoordSize(coordWidth: number, coordHeight: number): void;
        
        /**
         * Change the size of the canvas.
         * @param {number} pixelWidth The width in pixels.
         * @param {number} pixelHeight The height in pixels.
         * @override
         */
        setSize(pixelWidth: number, pixelHeight: number): void;
        
        /**
         * @return {!goog.math.Size} Returns the number of pixels spanned by the
         *     surface.
         * @override
         */
        getPixelSize(): goog.math.Size;
        
        /**
         * Draw an ellipse.
         *
         * @param {number} cx Center X coordinate.
         * @param {number} cy Center Y coordinate.
         * @param {number} rx Radius length for the x-axis.
         * @param {number} ry Radius length for the y-axis.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.EllipseElement} The newly created element.
         * @override
         */
        drawEllipse(cx: number, cy: number, rx: number, ry: number, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.EllipseElement;
        
        /**
         * Draw a rectangle.
         *
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @param {number} width Width of rectangle.
         * @param {number} height Height of rectangle.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.RectElement} The newly created element.
         * @override
         */
        drawRect(x: number, y: number, width: number, height: number, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.RectElement;
        
        /**
         * Draw an image.
         *
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @param {number} width Width of image.
         * @param {number} height Height of image.
         * @param {string} src Source of the image.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.ImageElement} The newly created element.
         */
        drawImage(x: number, y: number, width: number, height: number, src: string, opt_group?: goog.graphics.GroupElement): goog.graphics.ImageElement;
        
        /**
         * Draw a text string vertically centered on a given line.
         *
         * @param {string} text The text to draw.
         * @param {number} x1 X coordinate of start of line.
         * @param {number} y1 Y coordinate of start of line.
         * @param {number} x2 X coordinate of end of line.
         * @param {number} y2 Y coordinate of end of line.
         * @param {?string} align Horizontal alignment: left (default), center, right.
         * @param {goog.graphics.Font} font Font describing the font properties.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.TextElement} The newly created element.
         * @override
         */
        drawTextOnLine(text: string, x1: number, y1: number, x2: number, y2: number, align: string, font: goog.graphics.Font, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.TextElement;
        
        /**
         * Draw a path.
         *
         * @param {!goog.graphics.Path} path The path object to draw.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.PathElement} The newly created element.
         * @override
         */
        drawPath(path: goog.graphics.Path, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.PathElement;
        
        /**
         * Returns a string representation of a logical path suitable for use in
         * a VML element.
         *
         * @param {goog.graphics.Path} path The logical path.
         * @return {string} The VML path representation.
         * @suppress {deprecated} goog.graphics is deprecated.
         */
        static getVmlPath(path: goog.graphics.Path): string;
        
        /**
         * Create an empty group of drawing elements.
         *
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.GroupElement} The newly created group.
         * @override
         */
        createGroup(opt_group?: goog.graphics.GroupElement): goog.graphics.GroupElement;
        
        /**
         * Measure and return the width (in pixels) of a given text string.
         * Text measurement is needed to make sure a text can fit in the allocated
         * area. The way text length is measured is by writing it into a div that is
         * after the visible area, measure the div width, and immediatly erase the
         * written value.
         *
         * @param {string} text The text string to measure.
         * @param {goog.graphics.Font} font The font object describing the font style.
         *
         * @return {number} The width in pixels of the text strings.
         * @override
         */
        getTextWidth(text: string, font: goog.graphics.Font): number;
    }
}
