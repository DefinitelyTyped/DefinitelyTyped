declare module goog {
    function require(name: 'goog.graphics.Element'): typeof goog.graphics.Element;
}

declare module goog.graphics {

    /**
     * Base class for a thin wrapper around the DOM element returned from
     * the different draw methods of the graphics.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {Element} element  The DOM element to wrap.
     * @param {goog.graphics.AbstractGraphics} graphics  The graphics creating
     *     this element.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class Element extends goog.events.EventTarget {
        constructor(element: Element, graphics: goog.graphics.AbstractGraphics);
        
        /**
         * Returns the underlying object.
         * @return {Element} The underlying element.
         */
        getElement(): Element;
        
        /**
         * Returns the graphics.
         * @return {goog.graphics.AbstractGraphics} The graphics that created the
         *     element.
         */
        getGraphics(): goog.graphics.AbstractGraphics;
        
        /**
         * Set the translation and rotation of the element.
         *
         * If a more general affine transform is needed than this provides
         * (e.g. skew and scale) then use setTransform.
         * @param {number} x The x coordinate of the translation transform.
         * @param {number} y The y coordinate of the translation transform.
         * @param {number} rotate The angle of the rotation transform.
         * @param {number} centerX The horizontal center of the rotation transform.
         * @param {number} centerY The vertical center of the rotation transform.
         */
        setTransformation(x: number, y: number, rotate: number, centerX: number, centerY: number): void;
        
        /**
         * @return {!goog.graphics.AffineTransform} The transformation applied to
         *     this element.
         */
        getTransform(): goog.graphics.AffineTransform;
        
        /**
         * Set the affine transform of the element.
         * @param {!goog.graphics.AffineTransform} affineTransform The
         *     transformation applied to this element.
         */
        setTransform(affineTransform: goog.graphics.AffineTransform): void;
    }
}
