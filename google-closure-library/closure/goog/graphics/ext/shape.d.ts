declare module goog {
    function require(name: 'goog.graphics.ext.Shape'): typeof goog.graphics.ext.Shape;
}

declare module goog.graphics.ext {

    /**
     * Wrapper for a graphics shape element.
     * @param {goog.graphics.ext.Group} group Parent for this element.
     * @param {!goog.graphics.ext.Path} path  The path to draw.
     * @param {boolean=} opt_autoSize Optional flag to specify the path should
     *     automatically resize to fit the element.  Defaults to false.
     * @constructor
     * @extends {goog.graphics.ext.StrokeAndFillElement}
     * @final
     */
    class Shape extends goog.graphics.ext.StrokeAndFillElement {
        constructor(group: goog.graphics.ext.Group, path: goog.graphics.ext.Path, opt_autoSize?: boolean);
        
        /**
         * Get the path drawn by this shape.
         * @return {goog.graphics.Path?} The path drawn by this shape.
         */
        getPath(): goog.graphics.Path;
        
        /**
         * Set the path to draw.
         * @param {goog.graphics.ext.Path} path The path to draw.
         */
        setPath(path: goog.graphics.ext.Path): void;
        
        /**
         * @return {boolean} Whether the shape is parent dependent.
         * @protected
         * @override
         */
        checkParentDependent(): boolean;
    }
}
