declare module goog {
    function require(name: 'goog.math.interpolator.Spline1'): typeof goog.math.interpolator.Spline1;
}

declare module goog.math.interpolator {

    /**
     * A one dimensional cubic spline interpolator with natural boundary conditions.
     * @implements {goog.math.interpolator.Interpolator1}
     * @constructor
     */
    class Spline1 {
        constructor();
        
        /**
         * Computes the derivative at each point of the spline such that
         * the curve is C2. It uses not-a-knot boundary conditions.
         * @param {Array<number>} dx The spacing between consecutive data points.
         * @param {Array<number>} slope The slopes between consecutive data points.
         * @return {!Array<number>} The Spline derivative at each data point.
         * @protected
         */
        computeDerivatives(dx: Array<number>, slope: Array<number>): Array<number>;
    }
}
