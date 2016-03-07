declare module goog {
    function require(name: 'goog.graphics.EllipseElement'): typeof goog.graphics.EllipseElement;
}

declare module goog.graphics {

    /**
     * Interface for a graphics ellipse element.
     * You should not construct objects from this constructor. The graphics
     * will return an implementation of this interface for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
     *     this element.
     * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
     * @param {goog.graphics.Fill?} fill The fill to use for this element.
     * @constructor
     * @extends {goog.graphics.StrokeAndFillElement}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class EllipseElement extends goog.graphics.StrokeAndFillElement {
        constructor(element: Element, graphics: goog.graphics.AbstractGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
        
        /**
         * Update the center point of the ellipse.
         * @param {number} cx  Center X coordinate.
         * @param {number} cy  Center Y coordinate.
         */
        setCenter(cx: number, cy: number): void;
        
        /**
         * Update the radius of the ellipse.
         * @param {number} rx  Radius length for the x-axis.
         * @param {number} ry  Radius length for the y-axis.
         */
        setRadius(rx: number, ry: number): void;
    }
}
