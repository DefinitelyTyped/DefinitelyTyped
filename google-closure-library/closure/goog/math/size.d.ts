declare module goog {
    function require(name: 'goog.math.Size'): typeof goog.math.Size;
}

declare module goog.math {

    /**
     * Class for representing sizes consisting of a width and height. Undefined
     * width and height support is deprecated and results in compiler warning.
     * @param {number} width Width.
     * @param {number} height Height.
     * @struct
     * @constructor
     */
    class Size {
        constructor(width: number, height: number);
        
        /**
         * Compares sizes for equality.
         * @param {goog.math.Size} a A Size.
         * @param {goog.math.Size} b A Size.
         * @return {boolean} True iff the sizes have equal widths and equal
         *     heights, or if both are null.
         */
        static equals(a: goog.math.Size, b: goog.math.Size): boolean;
        
        /**
         * @return {!goog.math.Size} A new copy of the Size.
         */
        clone(): goog.math.Size;
        
        /**
         * @return {number} The longer of the two dimensions in the size.
         */
        getLongest(): number;
        
        /**
         * @return {number} The shorter of the two dimensions in the size.
         */
        getShortest(): number;
        
        /**
         * @return {number} The area of the size (width * height).
         */
        area(): number;
        
        /**
         * @return {number} The perimeter of the size (width + height) * 2.
         */
        perimeter(): number;
        
        /**
         * @return {number} The ratio of the size's width to its height.
         */
        aspectRatio(): number;
        
        /**
         * @return {boolean} True if the size has zero area, false if both dimensions
         *     are non-zero numbers.
         */
        isEmpty(): boolean;
        
        /**
         * Clamps the width and height parameters upward to integer values.
         * @return {!goog.math.Size} This size with ceil'd components.
         */
        ceil(): goog.math.Size;
        
        /**
         * @param {!goog.math.Size} target The target size.
         * @return {boolean} True if this Size is the same size or smaller than the
         *     target size in both dimensions.
         */
        fitsInside(target: goog.math.Size): boolean;
        
        /**
         * Clamps the width and height parameters downward to integer values.
         * @return {!goog.math.Size} This size with floored components.
         */
        floor(): goog.math.Size;
        
        /**
         * Rounds the width and height parameters to integer values.
         * @return {!goog.math.Size} This size with rounded components.
         */
        round(): goog.math.Size;
        
        /**
         * Scales this size by the given scale factors. The width and height are scaled
         * by {@code sx} and {@code opt_sy} respectively.  If {@code opt_sy} is not
         * given, then {@code sx} is used for both the width and height.
         * @param {number} sx The scale factor to use for the width.
         * @param {number=} opt_sy The scale factor to use for the height.
         * @return {!goog.math.Size} This Size object after scaling.
         */
        scale(sx: number, opt_sy?: number): goog.math.Size;
        
        /**
         * Uniformly scales the size to perfectly cover the dimensions of a given size.
         * If the size is already larger than the target, it will be scaled down to the
         * minimum size at which it still covers the entire target. The original aspect
         * ratio will be preserved.
         *
         * This function assumes that both Sizes contain strictly positive dimensions.
         * @param {!goog.math.Size} target The target size.
         * @return {!goog.math.Size} This Size object, after optional scaling.
         */
        scaleToCover(target: goog.math.Size): goog.math.Size;
        
        /**
         * Uniformly scales the size to fit inside the dimensions of a given size. The
         * original aspect ratio will be preserved.
         *
         * This function assumes that both Sizes contain strictly positive dimensions.
         * @param {!goog.math.Size} target The target size.
         * @return {!goog.math.Size} This Size object, after optional scaling.
         */
        scaleToFit(target: goog.math.Size): goog.math.Size;
    }
}
