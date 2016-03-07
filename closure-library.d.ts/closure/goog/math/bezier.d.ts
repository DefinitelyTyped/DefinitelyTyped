declare module goog {
    function require(name: 'goog.math.Bezier'): typeof goog.math.Bezier;
}

declare module goog.math {

    /**
     * Object representing a cubic bezier curve.
     * @param {number} x0 X coordinate of the start point.
     * @param {number} y0 Y coordinate of the start point.
     * @param {number} x1 X coordinate of the first control point.
     * @param {number} y1 Y coordinate of the first control point.
     * @param {number} x2 X coordinate of the second control point.
     * @param {number} y2 Y coordinate of the second control point.
     * @param {number} x3 X coordinate of the end point.
     * @param {number} y3 Y coordinate of the end point.
     * @struct
     * @constructor
     * @final
     */
    class Bezier {
        constructor(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number);
        
        /**
         * Constant used to approximate ellipses.
         * See: http://canvaspaint.org/blog/2006/12/ellipse/
         * @type {number}
         */
        static KAPPA: number;
        
        /**
         * @return {!goog.math.Bezier} A copy of this curve.
         */
        clone(): goog.math.Bezier;
        
        /**
         * Test if the given curve is exactly the same as this one.
         * @param {goog.math.Bezier} other The other curve.
         * @return {boolean} Whether the given curve is the same as this one.
         */
        equals(other: goog.math.Bezier): boolean;
        
        /**
         * Modifies the curve in place to progress in the opposite direction.
         */
        flip(): void;
        
        /**
         * Computes the curve's X coordinate at a point between 0 and 1.
         * @param {number} t The point on the curve to find.
         * @return {number} The computed coordinate.
         */
        getPointX(t: number): number;
        
        /**
         * Computes the curve's Y coordinate at a point between 0 and 1.
         * @param {number} t The point on the curve to find.
         * @return {number} The computed coordinate.
         */
        getPointY(t: number): number;
        
        /**
         * Computes the curve at a point between 0 and 1.
         * @param {number} t The point on the curve to find.
         * @return {!goog.math.Coordinate} The computed coordinate.
         */
        getPoint(t: number): goog.math.Coordinate;
        
        /**
         * Changes this curve in place to be the portion of itself from [t, 1].
         * @param {number} t The start of the desired portion of the curve.
         */
        subdivideLeft(t: number): void;
        
        /**
         * Changes this curve in place to be the portion of itself from [0, t].
         * @param {number} t The end of the desired portion of the curve.
         */
        subdivideRight(t: number): void;
        
        /**
         * Changes this curve in place to be the portion of itself from [s, t].
         * @param {number} s The start of the desired portion of the curve.
         * @param {number} t The end of the desired portion of the curve.
         */
        subdivide(s: number, t: number): void;
        
        /**
         * Computes the position t of a point on the curve given its x coordinate.
         * That is, for an input xVal, finds t s.t. getPointX(t) = xVal.
         * As such, the following should always be true up to some small epsilon:
         * t ~ solvePositionFromXValue(getPointX(t)) for t in [0, 1].
         * @param {number} xVal The x coordinate of the point to find on the curve.
         * @return {number} The position t.
         */
        solvePositionFromXValue(xVal: number): number;
        
        /**
         * Computes the y coordinate of a point on the curve given its x coordinate.
         * @param {number} xVal The x coordinate of the point on the curve.
         * @return {number} The y coordinate of the point on the curve.
         */
        solveYValueFromXValue(xVal: number): number;
    }
}
