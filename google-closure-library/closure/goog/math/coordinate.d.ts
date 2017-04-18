declare module goog {
    function require(name: 'goog.math.Coordinate'): typeof goog.math.Coordinate;
}

declare module goog.math {

    /**
     * Class for representing coordinates and positions.
     * @param {number=} opt_x Left, defaults to 0.
     * @param {number=} opt_y Top, defaults to 0.
     * @struct
     * @constructor
     */
    class Coordinate {
        constructor(opt_x?: number, opt_y?: number);
        
        /**
         * Returns a new copy of the coordinate.
         * @return {!goog.math.Coordinate} A clone of this coordinate.
         */
        clone(): goog.math.Coordinate;
        
        /**
         * Compares coordinates for equality.
         * @param {goog.math.Coordinate} a A Coordinate.
         * @param {goog.math.Coordinate} b A Coordinate.
         * @return {boolean} True iff the coordinates are equal, or if both are null.
         */
        static equals(a: goog.math.Coordinate, b: goog.math.Coordinate): boolean;
        
        /**
         * Returns the distance between two coordinates.
         * @param {!goog.math.Coordinate} a A Coordinate.
         * @param {!goog.math.Coordinate} b A Coordinate.
         * @return {number} The distance between {@code a} and {@code b}.
         */
        static distance(a: goog.math.Coordinate, b: goog.math.Coordinate): number;
        
        /**
         * Returns the magnitude of a coordinate.
         * @param {!goog.math.Coordinate} a A Coordinate.
         * @return {number} The distance between the origin and {@code a}.
         */
        static magnitude(a: goog.math.Coordinate): number;
        
        /**
         * Returns the angle from the origin to a coordinate.
         * @param {!goog.math.Coordinate} a A Coordinate.
         * @return {number} The angle, in degrees, clockwise from the positive X
         *     axis to {@code a}.
         */
        static azimuth(a: goog.math.Coordinate): number;
        
        /**
         * Returns the squared distance between two coordinates. Squared distances can
         * be used for comparisons when the actual value is not required.
         *
         * Performance note: eliminating the square root is an optimization often used
         * in lower-level languages, but the speed difference is not nearly as
         * pronounced in JavaScript (only a few percent.)
         *
         * @param {!goog.math.Coordinate} a A Coordinate.
         * @param {!goog.math.Coordinate} b A Coordinate.
         * @return {number} The squared distance between {@code a} and {@code b}.
         */
        static squaredDistance(a: goog.math.Coordinate, b: goog.math.Coordinate): number;
        
        /**
         * Returns the difference between two coordinates as a new
         * goog.math.Coordinate.
         * @param {!goog.math.Coordinate} a A Coordinate.
         * @param {!goog.math.Coordinate} b A Coordinate.
         * @return {!goog.math.Coordinate} A Coordinate representing the difference
         *     between {@code a} and {@code b}.
         */
        static difference(a: goog.math.Coordinate, b: goog.math.Coordinate): goog.math.Coordinate;
        
        /**
         * Returns the sum of two coordinates as a new goog.math.Coordinate.
         * @param {!goog.math.Coordinate} a A Coordinate.
         * @param {!goog.math.Coordinate} b A Coordinate.
         * @return {!goog.math.Coordinate} A Coordinate representing the sum of the two
         *     coordinates.
         */
        static sum(a: goog.math.Coordinate, b: goog.math.Coordinate): goog.math.Coordinate;
        
        /**
         * Rounds the x and y fields to the next larger integer values.
         * @return {!goog.math.Coordinate} This coordinate with ceil'd fields.
         */
        ceil(): goog.math.Coordinate;
        
        /**
         * Rounds the x and y fields to the next smaller integer values.
         * @return {!goog.math.Coordinate} This coordinate with floored fields.
         */
        floor(): goog.math.Coordinate;
        
        /**
         * Rounds the x and y fields to the nearest integer values.
         * @return {!goog.math.Coordinate} This coordinate with rounded fields.
         */
        round(): goog.math.Coordinate;
        
        /**
         * Translates this box by the given offsets. If a {@code goog.math.Coordinate}
         * is given, then the x and y values are translated by the coordinate's x and y.
         * Otherwise, x and y are translated by {@code tx} and {@code opt_ty}
         * respectively.
         * @param {number|goog.math.Coordinate} tx The value to translate x by or the
         *     the coordinate to translate this coordinate by.
         * @param {number=} opt_ty The value to translate y by.
         * @return {!goog.math.Coordinate} This coordinate after translating.
         */
        translate(tx: number|goog.math.Coordinate, opt_ty?: number): goog.math.Coordinate;
        
        /**
         * Scales this coordinate by the given scale factors. The x and y values are
         * scaled by {@code sx} and {@code opt_sy} respectively.  If {@code opt_sy}
         * is not given, then {@code sx} is used for both x and y.
         * @param {number} sx The scale factor to use for the x dimension.
         * @param {number=} opt_sy The scale factor to use for the y dimension.
         * @return {!goog.math.Coordinate} This coordinate after scaling.
         */
        scale(sx: number, opt_sy?: number): goog.math.Coordinate;
        
        /**
         * Rotates this coordinate clockwise about the origin (or, optionally, the given
         * center) by the given angle, in radians.
         * @param {number} radians The angle by which to rotate this coordinate
         *     clockwise about the given center, in radians.
         * @param {!goog.math.Coordinate=} opt_center The center of rotation. Defaults
         *     to (0, 0) if not given.
         */
        rotateRadians(radians: number, opt_center?: goog.math.Coordinate): void;
        
        /**
         * Rotates this coordinate clockwise about the origin (or, optionally, the given
         * center) by the given angle, in degrees.
         * @param {number} degrees The angle by which to rotate this coordinate
         *     clockwise about the given center, in degrees.
         * @param {!goog.math.Coordinate=} opt_center The center of rotation. Defaults
         *     to (0, 0) if not given.
         */
        rotateDegrees(degrees: number, opt_center?: goog.math.Coordinate): void;
    }
}
