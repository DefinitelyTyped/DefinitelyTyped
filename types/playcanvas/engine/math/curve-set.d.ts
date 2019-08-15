declare namespace pc {
    /**
     * @name pc.CurveSet
     * @class A curve set is a collection of curves.
     * @description Creates a new curve set.
     * @param {Array} [curveKeys] An array of arrays of keys (pairs of numbers with
     * the time first and value second).
     */
    class CurveSet {
        constructor(curveKeys?: number[][])

        /**
         * @function
         * @name pc.CurveSet#get
         * @description Return a specific curve in the curve set.
         * @param {Number} index The index of the curve to return
         * @returns {pc.Curve} The curve at the specified index
         */
        get(index: number): pc.Curve;

        /**
         * @function
         * @name pc.CurveSet#value
         * @description Returns the interpolated value of all curves in the curve
         * set at the specified time.
         * @param {Number} time The time at which to calculate the value
         * @param {Array} [result] The interpolated curve values at the specified time.
         * If this parameter is not supplied, the function allocates a new array internally
         * to return the result.
         * @return {Array} The interpolated curve values at the specified time
         */
        value(time: number, result?: any[]): any[];

        /**
         * @function
         * @name pc.CurveSet#clone
         * @description Returns a clone of the specified curve set object.
         * @returns {pc.CurveSet} A clone of the specified curve set
         */
        clone(): pc.CurveSet

        /**
         * @readonly
         * @name pc.CurveSet#length
         * @type Number
         * @description The number of curves in the curve set.
         */
        readonly length: number;

        /**
         * @name pc.CurveSet#type
         * @type Number
         * @description The interpolation scheme applied to all curves in the curve set. Can be:
         * <ul>
         *     <li>pc.CURVE_LINEAR</li>
         *     <li>pc.CURVE_SMOOTHSTEP</li>
         *     <li>pc.CURVE_CATMULL</li>
         *     <li>pc.CURVE_CARDINAL</li>
         * </ul>
         */
        type: number;
    }
}
