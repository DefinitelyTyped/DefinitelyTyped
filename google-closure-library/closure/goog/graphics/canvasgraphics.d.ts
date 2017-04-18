declare module goog {
    function require(name: 'goog.graphics.CanvasGraphics'): typeof goog.graphics.CanvasGraphics;
}

declare module goog.graphics {

    /**
     * A Graphics implementation for drawing using canvas.
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
     */
    class CanvasGraphics extends goog.graphics.AbstractGraphics {
        constructor(width: string|number, height: string|number, opt_coordWidth?: number, opt_coordHeight?: number, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Sets the fill for the given element.
         * @param {goog.graphics.StrokeAndFillElement} element The element
         *     wrapper.
         * @param {goog.graphics.Fill} fill The fill object.
         * @override
         */
        setElementFill(element: goog.graphics.StrokeAndFillElement, fill: goog.graphics.Fill): void;
        
        /**
         * Sets the stroke for the given element.
         * @param {goog.graphics.StrokeAndFillElement} element The element
         *     wrapper.
         * @param {goog.graphics.Stroke} stroke The stroke object.
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
         *
         * Note that in this implementation this method just calls this.redraw()
         * and the affineTransform param is unused.
         * @param {!goog.graphics.Element} element The element wrapper.
         * @param {!goog.graphics.AffineTransform} affineTransform The
         *     transformation applied to this element.
         * @override
         */
        setElementAffineTransform(element: goog.graphics.Element, affineTransform: goog.graphics.AffineTransform): void;
        
        /**
         * Push an element transform on to the transform stack.
         * @param {goog.graphics.Element} element The transformed element.
         */
        pushElementTransform(element: goog.graphics.Element): void;
        
        /**
         * Pop an element transform off of the transform stack.
         */
        popElementTransform(): void;
        
        /**
         * Returns the drawing context.
         * @return {Object} The canvas element rendering context.
         */
        getContext(): Object;
        
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
         * Update the size of the canvas.
         */
        updateSize(): void;
        
        /**
         * Reset the canvas.
         */
        reset(): void;
        
        /**
         * Redraw the entire canvas.
         */
        redraw(): void;
        
        /**
         * Draw an element, including any stroke or fill.
         * @param {goog.graphics.Element} element The element to draw.
         */
        drawElement(element: goog.graphics.Element): void;
        
        /**
         * Append an element.
         *
         * @param {goog.graphics.Element} element The element to draw.
         * @param {goog.graphics.GroupElement|undefined} group The group to draw
         *     it in. If null or undefined, defaults to the root group.
         * @protected
         */
        append(element: goog.graphics.Element, group: goog.graphics.GroupElement|void): void;
        
        /**
         * Draw an ellipse.
         *
         * @param {number} cx Center X coordinate.
         * @param {number} cy Center Y coordinate.
         * @param {number} rx Radius length for the x-axis.
         * @param {number} ry Radius length for the y-axis.
         * @param {goog.graphics.Stroke} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper
         *     element to append to.  If not specified, appends to the main canvas.
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
         * @param {goog.graphics.Stroke} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper
         *     element to append to. If not specified, appends to the main canvas.
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
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper
         *     element to append to. If not specified, appends to the main canvas.
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
         * @param {goog.graphics.Stroke} stroke Stroke object describing the stroke.
         * @param {goog.graphics.Fill} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper
         *     element to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.TextElement} The newly created element.
         * @override
         */
        drawTextOnLine(text: string, x1: number, y1: number, x2: number, y2: number, align: string, font: goog.graphics.Font, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.TextElement;
        
        /**
         * Draw a path.
         * @param {!goog.graphics.Path} path The path object to draw.
         * @param {goog.graphics.Stroke} stroke Stroke object describing the stroke.
         * @param {goog.graphics.Fill} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper
         *     element to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.PathElement} The newly created element.
         * @override
         */
        drawPath(path: goog.graphics.Path, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.PathElement;
        
        /**
         * @param {goog.graphics.GroupElement} group The group to possibly
         *     draw to.
         * @return {boolean} Whether drawing can occur now.
         */
        isDrawable(group: goog.graphics.GroupElement): boolean;
        
        /**
         * Returns true if drawing to the given group means a redraw is required.
         * @param {goog.graphics.GroupElement} group The group to draw to.
         * @return {boolean} Whether drawing to this group should force a redraw.
         */
        isRedrawRequired(group: goog.graphics.GroupElement): boolean;
        
        /**
         * Create an empty group of drawing elements.
         *
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper
         *     element to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.CanvasGroupElement} The newly created group.
         * @override
         */
        createGroup(opt_group?: goog.graphics.GroupElement): goog.graphics.CanvasGroupElement;
        
        /**
         * Measure and return the width (in pixels) of a given text string.
         * Text measurement is needed to make sure a text can fit in the allocated
         * area. The way text length is measured is by writing it into a div that is
         * after the visible area, measure the div width, and immediatly erase the
         * written value.
         *
         * @param {string} text The text string to measure.
         * @param {goog.graphics.Font} font The font object describing the font style.
         * @return {number} The width in pixels of the text strings.
         * @override
         */
        getTextWidth(text: string, font: goog.graphics.Font): number;
    }
}
