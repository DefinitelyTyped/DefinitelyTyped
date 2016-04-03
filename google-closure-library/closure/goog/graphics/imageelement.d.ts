declare module goog {
    function require(name: 'goog.graphics.ImageElement'): typeof goog.graphics.ImageElement;
}

declare module goog.graphics {

    /**
     * Interface for a graphics image element.
     * You should not construct objects from this constructor. Instead,
     * you should use {@code goog.graphics.Graphics.drawImage} and it
     * will return an implementation of this interface for you.
     *
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
     *     this element.
     * @constructor
     * @extends {goog.graphics.Element}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class ImageElement extends goog.graphics.Element {
        constructor(element: Element, graphics: goog.graphics.AbstractGraphics);
        
        /**
         * Update the position of the image.
         *
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         */
        setPosition(x: number, y: number): void;
        
        /**
         * Update the size of the image.
         *
         * @param {number} width Width of image.
         * @param {number} height Height of image.
         */
        setSize(width: number, height: number): void;
        
        /**
         * Update the source of the image.
         * @param {string} src Source of the image.
         */
        setSource(src: string): void;
    }
}
