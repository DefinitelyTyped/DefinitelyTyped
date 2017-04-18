declare module goog {
    function require(name: 'goog.math.interpolator.Pchip1'): typeof goog.math.interpolator.Pchip1;
}

declare module goog.math.interpolator {

    /**
     * A one dimensional monotone cubic spline interpolator.
     * @extends {goog.math.interpolator.Spline1}
     * @constructor
     * @final
     */
    class Pchip1 extends goog.math.interpolator.Spline1 {
        constructor();
    }
}
