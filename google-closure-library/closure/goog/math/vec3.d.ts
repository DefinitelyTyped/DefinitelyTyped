declare module goog {
    function require(name: 'goog.math.Vec3'): typeof goog.math.Vec3;
}

declare module goog.math {

    /**
     * Class for a three-dimensional vector object and assorted functions useful for
     * manipulation.
     *
     * Inherits from goog.math.Coordinate3 so that a Vec3 may be passed in to any
     * function that requires a Coordinate.
     *
     * @param {number} x The x value for the vector.
     * @param {number} y The y value for the vector.
     * @param {number} z The z value for the vector.
     * @struct
     * @constructor
     * @extends {goog.math.Coordinate3}
     */
    class Vec3 extends goog.math.Coordinate3 {
        constructor(x: number, y: number, z: number);
        
        /**
         * Generates a random unit vector.
         *
         * http://mathworld.wolfram.com/SpherePointPicking.html
         * Using (6), (7), and (8) to generate coordinates.
         * @return {!goog.math.Vec3} A random unit-length vector.
         */
        static randomUnit(): goog.math.Vec3;
        
        /**
         * Generates a random vector inside the unit sphere.
         *
         * @return {!goog.math.Vec3} A random vector.
         */
        static random(): goog.math.Vec3;
        
        /**
         * Returns a new Vec3 object from a given coordinate.
         *
         * @param {goog.math.Coordinate3} a The coordinate.
         * @return {!goog.math.Vec3} A new vector object.
         */
        static fromCoordinate3(a: goog.math.Coordinate3): goog.math.Vec3;
        
        /**
         * Creates a new copy of this Vec3.
         *
         * @return {!goog.math.Vec3} A new vector with the same coordinates as this one.
         * @override
         */
        clone(): goog.math.Vec3;
        
        /**
         * Returns the magnitude of the vector measured from the origin.
         *
         * @return {number} The length of the vector.
         */
        magnitude(): number;
        
        /**
         * Returns the squared magnitude of the vector measured from the origin.
         * NOTE(brenneman): Leaving out the square root is not a significant
         * optimization in JavaScript.
         *
         * @return {number} The length of the vector, squared.
         */
        squaredMagnitude(): number;
        
        /**
         * Scales the current vector by a constant.
         *
         * @param {number} s The scale factor.
         * @return {!goog.math.Vec3} This vector, scaled.
         */
        scale(s: number): goog.math.Vec3;
        
        /**
         * Reverses the sign of the vector. Equivalent to scaling the vector by -1.
         *
         * @return {!goog.math.Vec3} This vector, inverted.
         */
        invert(): goog.math.Vec3;
        
        /**
         * Normalizes the current vector to have a magnitude of 1.
         *
         * @return {!goog.math.Vec3} This vector, normalized.
         */
        normalize(): goog.math.Vec3;
        
        /**
         * Adds another vector to this vector in-place.
         *
         * @param {goog.math.Vec3} b The vector to add.
         * @return {!goog.math.Vec3} This vector with {@code b} added.
         */
        add(b: goog.math.Vec3): goog.math.Vec3;
        
        /**
         * Subtracts another vector from this vector in-place.
         *
         * @param {goog.math.Vec3} b The vector to subtract.
         * @return {!goog.math.Vec3} This vector with {@code b} subtracted.
         */
        subtract(b: goog.math.Vec3): goog.math.Vec3;
        
        /**
         * Compares this vector with another for equality.
         *
         * @param {goog.math.Vec3} b The other vector.
         * @return {boolean} True if this vector's x, y and z equal the given vector's
         *     x, y, and z, respectively.
         */
        equals(b: goog.math.Vec3): boolean;
        
        /**
         * Returns the distance between two vectors.
         *
         * @param {goog.math.Vec3} a The first vector.
         * @param {goog.math.Vec3} b The second vector.
         * @return {number} The distance.
         */
        static distance(a: goog.math.Vec3, b: goog.math.Vec3): number;
        
        /**
         * Returns the squared distance between two vectors.
         *
         * @param {goog.math.Vec3} a The first vector.
         * @param {goog.math.Vec3} b The second vector.
         * @return {number} The squared distance.
         */
        static squaredDistance(a: goog.math.Vec3, b: goog.math.Vec3): number;
        
        /**
         * Compares vectors for equality.
         *
         * @param {goog.math.Vec3} a The first vector.
         * @param {goog.math.Vec3} b The second vector.
         * @return {boolean} True if the vectors have equal x, y, and z coordinates.
         */
        static equals(a: goog.math.Vec3, b: goog.math.Vec3): boolean;
        
        /**
         * Returns the sum of two vectors as a new Vec3.
         *
         * @param {goog.math.Vec3} a The first vector.
         * @param {goog.math.Vec3} b The second vector.
         * @return {!goog.math.Vec3} The sum vector.
         */
        static sum(a: goog.math.Vec3, b: goog.math.Vec3): goog.math.Vec3;
        
        /**
         * Returns the difference of two vectors as a new Vec3.
         *
         * @param {goog.math.Vec3} a The first vector.
         * @param {goog.math.Vec3} b The second vector.
         * @return {!goog.math.Vec3} The difference vector.
         */
        static difference(a: goog.math.Vec3, b: goog.math.Vec3): goog.math.Vec3;
        
        /**
         * Returns the dot-product of two vectors.
         *
         * @param {goog.math.Vec3} a The first vector.
         * @param {goog.math.Vec3} b The second vector.
         * @return {number} The dot-product of the two vectors.
         */
        static dot(a: goog.math.Vec3, b: goog.math.Vec3): number;
        
        /**
         * Returns the cross-product of two vectors.
         *
         * @param {goog.math.Vec3} a The first vector.
         * @param {goog.math.Vec3} b The second vector.
         * @return {!goog.math.Vec3} The cross-product of the two vectors.
         */
        static cross(a: goog.math.Vec3, b: goog.math.Vec3): goog.math.Vec3;
        
        /**
         * Returns a new Vec3 that is the linear interpolant between vectors a and b at
         * scale-value x.
         *
         * @param {goog.math.Vec3} a Vector a.
         * @param {goog.math.Vec3} b Vector b.
         * @param {number} x The proportion between a and b.
         * @return {!goog.math.Vec3} The interpolated vector.
         */
        static lerp(a: goog.math.Vec3, b: goog.math.Vec3, x: number): goog.math.Vec3;
    }
}
