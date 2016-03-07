declare module goog {
    function require(name: 'goog.graphics.ext.Rectangle'): typeof goog.graphics.ext.Rectangle;
}

declare module goog.graphics.ext {

    /**
     * Wrapper for a graphics rectangle element.
     * @param {goog.graphics.ext.Group} group Parent for this element.
     * @constructor
     * @extends {goog.graphics.ext.StrokeAndFillElement}
     * @final
     */
    class Rectangle extends goog.graphics.ext.StrokeAndFillElement {
        constructor(group: goog.graphics.ext.Group);
    }
}
