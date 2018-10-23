declare namespace pc {

    /**
     * @name pc.math
     * @namespace
     * @description Math API
     */
    namespace math {
        /**
         * @name pc.math.DEG_TO_RAD
         * @description Conversion factor between degrees and radians
         * @type Number
         * @example
         * // Convert 180 degrees to pi radians
         * var rad = 180 * pc.math.DEG_TO_RAD;
         */
        const DEG_TO_RAD: number;

        /**
         * @name pc.math.RAD_TO_DEG
         * @description Conversion factor between degrees and radians
         * @type Number
         * @example
         * // Convert pi radians to 180 degrees
         * var deg = Math.PI * pc.math.RAD_TO_DEG;
         */
        const RAD_TO_DEG: number;

        /**
        * @name pc.math.INV_LOG2
        * @description Inverse log 2
        * @type Number
        */
        const INV_LOG2: number;

        /**
         * @function
         * @name pc.math.clamp
         * @description Clamp a number between min and max inclusive.
         * @param {Number} value Number to clamp
         * @param {Number} min Min value
         * @param {Number} max Max value
         * @returns {Number} The clamped value
         */
        function clamp(value: number, min: number, max: number): number;

        /**
         * @function
         * @name pc.math.intToBytes24
         * @description Convert an 24 bit integer into an array of 3 bytes.
         * @param {Number} i Number holding an integer value
         * @returns {Number[]} An array of 3 bytes.
         * @example
         * // Set bytes to [0x11, 0x22, 0x33]
         * var bytes = pc.math.intToBytes24(0x112233);
         */
        function intToBytes24(i: number): [number, number, number];

        /**
         * @function
         * @name pc.math.intToBytes32
         * @description Convert an 32 bit integer into an array of 4 bytes.
         * @returns {Number[]} An array of 4 bytes
         * @param {Number} i Number holding an integer value
         * @example
         * // Set bytes to [0x11, 0x22, 0x33, 0x44]
         * var bytes = pc.math.intToBytes32(0x11223344);
         */
        function intToBytes32(i: number): [number, number, number, number];

        /**
         * @function
         * @name pc.math.bytesToInt24
         * @description Convert 3 8 bit Numbers into a single unsigned 24 bit Number.
         * @example
         * // Set result1 to 0x112233 from an array of 3 values
         * var result1 = pc.math.bytesToInt24([0x11, 0x22, 0x33]);
         *
         * // Set result2 to 0x112233 from 3 discrete values
         * var result2 = pc.math.bytesToInt24(0x11, 0x22, 0x33);
         * @param {Number} r A single byte (0-255)
         * @param {Number} g A single byte (0-255)
         * @param {Number} b A single byte (0-255)
         * @returns {Number} A single unsigned 24 bit Number.
         */
        function bytesToInt24(r: number, g: number, b: number): number;

        /**
         * @function
         * @name pc.math.bytesToInt32
         * @description Convert 4 1-byte Numbers into a single unsigned 32bit Number.
         * @returns {Number} A single unsigned 32bit Number.
         * @example
          * // Set result1 to 0x11223344 from an array of 4 values
          * var result1 = pc.math.bytesToInt32([0x11, 0x22, 0x33, 0x44]);
          *
          * // Set result2 to 0x11223344 from 4 discrete values
          * var result2 = pc.math.bytesToInt32(0x11, 0x22, 0x33, 0x44);
         * @param {Number} r A single byte (0-255)
         * @param {Number} g A single byte (0-255)
         * @param {Number} b A single byte (0-255)
         * @param {Number} a A single byte (0-255)
         */
        function bytesToInt32(r: number, g: number, b: number, a: number): number

        /**
         * @function
         * @name pc.math.lerp
         * @returns {Number} The linear interpolation of two numbers.
         * @description Calculates the linear interpolation of two numbers.
         * @param {Number} a Number to linearly interpolate from.
         * @param {Number} b Number to linearly interpolate to.
         * @param {Number} alpha The value controlling the result of interpolation. When alpha is 0,
         * a is returned. When alpha is 1, b is returned. Between 0 and 1, a linear interpolation between
         * a and b is returned. alpha is clamped between 0 and 1.
         */
        function lerp(a: number, b: number, alpha: number): number

        /**
         * @function
         * @name pc.math.lerpAngle
         * @description Calculates the linear interpolation of two angles ensuring that interpolation
         * is correctly performed across the 360 to 0 degree boundary. Angles are supplied in degrees.
         * @returns {Number} The linear interpolation of two angles
         * @param {Number} a Angle (in degrees) to linearly interpolate from.
         * @param {Number} b Angle (in degrees) to linearly interpolate to.
         * @param {Number} alpha The value controlling the result of interpolation. When alpha is 0,
         * a is returned. When alpha is 1, b is returned. Between 0 and 1, a linear interpolation between
         * a and b is returned. alpha is clamped between 0 and 1.
         */
        function lerpAngle(a: number, b: number, alpha: number): number;

        /**
         * @function
         * @name pc.math.powerOfTwo
         * @description Returns true if argument is a power-of-two and false otherwise.
         * @param {Number} x Number to check for power-of-two property.
         * @returns {Boolean} true if power-of-two and false otherwise.
         */
        function powerOfTwo(x: number): boolean;

        /**
         * @function
         * @name pc.math.nextPowerOfTwo
         * @description Returns the next power of 2 for the specified value.
         * @param {Number} val The value for which to calculate the next power of 2.
         * @return {Number} The next power of 2.
         */
        function nextPowerOfTwo(val: number): number;

        /**
         * @function
         * @name pc.math.random
         * @description Return a pseudo-random number between min and max.
         * The number generated is in the range [min, max), that is inclusive of the minimum but exclusive of the maximum.
         * @param {Number} min Lower bound for range.
         * @param {Number} max Upper bound for range.
         * @returns {Number} Pseudo-random number between the supplied range.
         */
        function random(min: number, max: number): number

        /**
         * @function
         * @name pc.math.smoothstep
         * @description The function interpolates smoothly between two input values based on
         * a third one that should be between the first two. The returned value is clamped
         * between 0 and 1.
         * <br/>The slope (i.e. derivative) of the smoothstep function starts at 0 and ends at 0.
         * This makes it easy to create a sequence of transitions using smoothstep to interpolate
         * each segment rather than using a more sophisticated or expensive interpolation technique.
         * <br/>See http://en.wikipedia.org/wiki/Smoothstep for more details.
         * @param {Number} min The lower bound of the interpolation range.
         * @param {Number} max The upper bound of the interpolation range.
         * @param {Number} x The value to interpolate.
         * @returns {Number} The smoothly interpolated value clamped between zero and one.
         */
        function smoothstep(min: number, max: number, x: number): number;

        /**
         * @function
         * @name pc.math.smootherstep
         * @description An improved version of the pc.math.smoothstep function which has zero
         * 1st and 2nd order derivatives at t=0 and t=1.
         * <br/>See http://en.wikipedia.org/wiki/Smoothstep for more details.
         * @param {Number} min The lower bound of the interpolation range.
         * @param {Number} max The upper bound of the interpolation range.
         * @param {Number} x The value to interpolate.
         * @returns {Number} The smoothly interpolated value clamped between zero and one.
         */
        function smootherstep(min: number, max: number, x: number): number;
    }
}