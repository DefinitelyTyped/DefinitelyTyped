declare module goog {
    function require(name: 'goog.graphics.TextElement'): typeof goog.graphics.TextElement;
}

declare module goog.graphics {

    /**
     * Interface for a graphics text element.
     * You should not construct objects from this constructor. The graphics
     * will return an implementation of this interface for you.
     *
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
    class TextElement extends goog.graphics.StrokeAndFillElement {
        constructor(element: Element, graphics: goog.graphics.AbstractGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
        
        /**
         * Update the displayed text of the element.
         * @param {string} text The text to draw.
         */
        setText(text: string): void;
    }
}
