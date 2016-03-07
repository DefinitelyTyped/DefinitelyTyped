declare module goog {
    function require(name: 'goog.graphics.ext.Path'): typeof goog.graphics.ext.Path;
}

declare module goog.graphics.ext {

    /**
     * Creates a path object
     * @constructor
     * @extends {goog.graphics.Path}
     * @final
     */
    class Path extends goog.graphics.Path {
        constructor();
        
        /**
         * Clones the path.
         * @return {!goog.graphics.ext.Path} A clone of this path.
         * @override
         */
        clone(): goog.graphics.ext.Path;
        
        /**
         * Transforms the path. Only simple paths are transformable. Attempting
         * to transform a non-simple path will throw an error.
         * @param {!goog.graphics.AffineTransform} tx The transformation to perform.
         * @return {!goog.graphics.ext.Path} The path itself.
         * @override
         */
        transform(tx: goog.graphics.AffineTransform): goog.graphics.ext.Path;
        
        /**
         * Modify the bounding box of the path.  This may cause the path to be
         * simplified (i.e. arcs converted to curves) as a side-effect.
         * @param {number} deltaX How far to translate the x coordinates.
         * @param {number} deltaY How far to translate the y coordinates.
         * @param {number} xFactor After translation, all x coordinates are multiplied
         *     by this number.
         * @param {number} yFactor After translation, all y coordinates are multiplied
         *     by this number.
         * @return {!goog.graphics.ext.Path} The path itself.
         */
        modifyBounds(deltaX: number, deltaY: number, xFactor: number, yFactor: number): goog.graphics.ext.Path;
        
        /**
         * Set the precomputed bounds.
         * @param {goog.math.Rect?} bounds The bounds to use, or set to null to clear
         *     and recompute on the next call to getBoundingBox.
         */
        useBoundingBox(bounds: goog.math.Rect): void;
        
        /**
         * @return {goog.math.Rect?} The bounding box of the path, or null if the
         *     path is empty.
         */
        getBoundingBox(): goog.math.Rect;
    }
}
