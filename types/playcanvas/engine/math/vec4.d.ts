declare namespace pc {

    /**
    * @name pc.Vec4
    * @class A 4-dimensional vector.
    * @description Creates a new Vec4 object
    * @param {Number} [x] The x value. If x is an array of length 4, the array will be used to populate all components.
    * @param {Number} [y] The y value
    * @param {Number} [z] The z value
    * @param {Number} [w] The w value
    */
    class Vec4 {
        constructor(x: number, y: number, z: number, w: number)
        constructor(x: [number, number, number, number])
        constructor();


        /**
             * @function
             * @name pc.Vec4#add
             * @description Adds a 4-dimensional vector to another in place.
             * @param {pc.Vec4} rhs The vector to add to the specified vector.
             * @returns {pc.Vec4} Self for chaining.
             * @example
             * var a = new pc.Vec4(10, 10, 10, 10);
             * var b = new pc.Vec4(20, 20, 20, 20);
             *
             * a.add(b);
             *
             * // Should output [30, 30, 30]
             * console.log("The result of the addition is: " + a.toString());
             */
        add(rhs: pc.Vec4): this;

        /**
         * @function
         * @name pc.Vec4#add2
         * @description Adds two 4-dimensional vectors together and returns the result.
         * @param {pc.Vec4} lhs The first vector operand for the addition.
         * @param {pc.Vec4} rhs The second vector operand for the addition.
         * @returns {pc.Vec4} Self for chaining.
         * @example
         * var a = new pc.Vec4(10, 10, 10, 10);
         * var b = new pc.Vec4(20, 20, 20, 20);
         * var r = new pc.Vec4();
         *
         * r.add2(a, b);
         * // Should output [30, 30, 30]
         *
         * console.log("The result of the addition is: " + r.toString());
         */
        add2(lhs: pc.Vec4, rhs: pc.Vec4): this;

        /**
         * @function
         * @name pc.Vec4#clone
         * @description Returns an identical copy of the specified 4-dimensional vector.
         * @returns {pc.Vec4} A 4-dimensional vector containing the result of the cloning.
         * @example
         * var v = new pc.Vec4(10, 20, 30, 40);
         * var vclone = v.clone();
         * console.log("The result of the cloning is: " + vclone.toString());
         */
        clone(): pc.Vec4;

        /**
         * @function
         * @name pc.Vec4#copy
         * @description Copied the contents of a source 4-dimensional vector to a destination 4-dimensional vector.
         * @param {pc.Vec4} rhs A vector to copy to the specified vector.
         * @returns {pc.Vec4} Self for chaining.
         * @example
         * var src = new pc.Vec4(10, 20, 30, 40);
         * var dst = new pc.Vec4();
         *
         * dst.copy(src);
         *
         * console.log("The two vectors are " + (dst.equals(src) ? "equal" : "different"));
         */
        copy(rhs: pc.Vec4): this;

        /**
         * @function
         * @name pc.Vec4#dot
         * @description Returns the result of a dot product operation performed on the two specified 4-dimensional vectors.
         * @param {pc.Vec4} rhs The second 4-dimensional vector operand of the dot product.
         * @returns {Number} The result of the dot product operation.
         * @example
         * var v1 = new pc.Vec4(5, 10, 20, 40);
         * var v2 = new pc.Vec4(10, 20, 40, 80);
         * var v1dotv2 = v1.dot(v2);
         * console.log("The result of the dot product is: " + v1dotv2);
         */
        dot(rhs: pc.Vec4): this;

        /**
         * @function
         * @name pc.Vec4#equals
         * @description Reports whether two vectors are equal.
         * @param {pc.Vec4} rhs The vector to compare to the specified vector.
         * @returns {Boolean} true if the vectors are equal and false otherwise.
         * @example
         * var a = new pc.Vec4(1, 2, 3, 4);
         * var b = new pc.Vec4(5, 6, 7, 8);
         * console.log("The two vectors are " + (a.equals(b) ? "equal" : "different"));
         */
        equals(rhs: pc.Vec4): boolean;

        /**
         * @function
         * @name pc.Vec4#length
         * @description Returns the magnitude of the specified 4-dimensional vector.
         * @returns {Number} The magnitude of the specified 4-dimensional vector.
         * @example
         * var vec = new pc.Vec4(3, 4, 0, 0);
         * var len = vec.length();
         * // Should output 5
         * console.log("The length of the vector is: " + len);
         */
        length(): number;

        /**
         * @function
         * @name pc.Vec4#lengthSq
         * @description Returns the magnitude squared of the specified 4-dimensional vector.
         * @returns {Number} The magnitude of the specified 4-dimensional vector.
         * @example
         * var vec = new pc.Vec4(3, 4, 0);
         * var len = vec.lengthSq();
         * // Should output 25
         * console.log("The length squared of the vector is: " + len);
         */
        lengthSq(): number;

        /**
         * @function
         * @name pc.Vec4#lerp
         * @description Returns the result of a linear interpolation between two specified 4-dimensional vectors.
         * @param {pc.Vec4} lhs The 4-dimensional to interpolate from.
         * @param {pc.Vec4} rhs The 4-dimensional to interpolate to.
         * @param {Number} alpha The value controlling the point of interpolation. Between 0 and 1, the linear interpolant
         * will occur on a straight line between lhs and rhs. Outside of this range, the linear interpolant will occur on
         * a ray extrapolated from this line.
         * @returns {pc.Vec4} Self for chaining.
         * @example
         * var a = new pc.Vec4(0, 0, 0, 0);
         * var b = new pc.Vec4(10, 10, 10, 10);
         * var r = new pc.Vec4();
         *
         * r.lerp(a, b, 0);   // r is equal to a
         * r.lerp(a, b, 0.5); // r is 5, 5, 5, 5
         * r.lerp(a, b, 1);   // r is equal to b
         */
        lerp(lhs: pc.Vec4, rhs: pc.Vec4, alpha: number): this;

        /**
         * @function
         * @name pc.Vec4#mul
         * @description Multiplies a 4-dimensional vector to another in place.
         * @param {pc.Vec4} rhs The 4-dimensional vector used as the second multiplicand of the operation.
         * @returns {pc.Vec4} Self for chaining.
         * @example
         * var a = new pc.Vec4(2, 3, 4, 5);
         * var b = new pc.Vec4(4, 5, 6, 7);
         *
         * a.mul(b);
         *
         * // Should output 8, 15, 24, 35
         * console.log("The result of the multiplication is: " + a.toString());
         */
        mul(rhs: pc.Vec4): this;

        /**
         * @function
         * @name pc.Vec4#mul2
         * @description Returns the result of multiplying the specified 4-dimensional vectors together.
         * @param {pc.Vec4} lhs The 4-dimensional vector used as the first multiplicand of the operation.
         * @param {pc.Vec4} rhs The 4-dimensional vector used as the second multiplicand of the operation.
         * @returns {pc.Vec4} Self for chaining.
         * @example
         * var a = new pc.Vec4(2, 3, 4, 5);
         * var b = new pc.Vec4(4, 5, 6, 7);
         * var r = new pc.Vec4();
         *
         * r.mul2(a, b);
         *
         * // Should output 8, 15, 24, 35
         * console.log("The result of the multiplication is: " + r.toString());
         */
        mul2(lhs: pc.Vec4, rhs: pc.Vec4): this;

        /**
         * @function
         * @name pc.Vec4#normalize
         * @description Returns the specified 4-dimensional vector copied and converted to a unit vector.
         * If the vector has a length of zero, the vector's elements will be set to zero.
         * @returns {pc.Vec4} The result of the normalization.
         * @example
         * var v = new pc.Vec4(25, 0, 0, 0);
         *
         * v.normalize();
         *
         * // Should output 1, 0, 0, 0
         * console.log("The result of the vector normalization is: " + v.toString());
         */
        normalize(): this;

        /**
         * @function
         * @name pc.Vec4#scale
         * @description Scales each dimension of the specified 4-dimensional vector by the supplied
         * scalar value.
         * @param {Number} scalar The value by which each vector component is multiplied.
         * @returns {pc.Vec4} Self for chaining.
         * @example
         * var v = new pc.Vec4(2, 4, 8, 16);
         *
         * // Multiply by 2
         * v.scale(2);
         *
         * // Negate
         * v.scale(-1);
         *
         * // Divide by 2
         * v.scale(0.5);
         */
        scale(scalar: number): this;

        /**
         * @function
         * @name pc.Vec4#set
         * @description Sets the specified 4-dimensional vector to the supplied numerical values.
         * @param {Number} x The value to set on the first component of the vector.
         * @param {Number} y The value to set on the second component of the vector.
         * @param {Number} z The value to set on the third component of the vector.
         * @param {Number} w The value to set on the fourth component of the vector.
         * @example
         * var v = new pc.Vec4();
         * v.set(5, 10, 20, 40);
         *
         * // Should output 5, 10, 20, 40
         * console.log("The result of the vector set is: " + v.toString());
         */
        set(x: number, y: number, z: number, w: number): this;

        /**
         * @function
         * @name pc.Vec4#sub
         * @description Subtracts a 4-dimensional vector from another in place.
         * @param {pc.Vec4} rhs The vector to add to the specified vector.
         * @returns {pc.Vec4} Self for chaining.
         * @example
         * var a = new pc.Vec4(10, 10, 10, 10);
         * var b = new pc.Vec4(20, 20, 20, 20);
         *
         * a.sub(b);
         *
         * // Should output [-10, -10, -10, -10]
         * console.log("The result of the subtraction is: " + a.toString());
         */
        sub(rhs: pc.Vec4): this;

        /**
         * @function
         * @name pc.Vec4#sub2
         * @description Subtracts two 4-dimensional vectors from one another and returns the result.
         * @param {pc.Vec4} lhs The first vector operand for the subtraction.
         * @param {pc.Vec4} rhs The second vector operand for the subtraction.
         * @returns {pc.Vec4} Self for chaining.
         * @example
         * var a = new pc.Vec4(10, 10, 10, 10);
         * var b = new pc.Vec4(20, 20, 20, 20);
         * var r = new pc.Vec4();
         *
         * r.sub2(a, b);
         *
         * // Should output [-10, -10, -10, -10]
         * console.log("The result of the subtraction is: " + r.toString());
         */
        sub2(lhs: pc.Vec4, rhs: pc.Vec4): this;

        /**
         * @function
         * @name pc.Vec4#toString
         * @description Converts the vector to string form.
         * @returns {String} The vector in string form.
         * @example
         * var v = new pc.Vec4(20, 10, 5, 0);
         * // Should output '[20, 10, 5, 0]'
         * console.log(v.toString());
         */
        toString(): string;

        /**
         * @field
         * @type Number
         * @name pc.Vec4#x
         * @description The first component of the vector.
         * @example
         * var vec = new pc.Vec4(10, 20, 30, 40);
         *
         * // Get x
         * var x = vec.x;
         *
         * // Set x
         * vec.x = 0;
         */
        x: number;

        /**
         * @field
         * @type Number
         * @name pc.Vec4#y
         * @description The second component of the vector.
         * @example
         * var vec = new pc.Vec4(10, 20, 30, 40);
         *
         * // Get y
         * var y = vec.y;
         *
         * // Set y
         * vec.y = 0;
         */
        y: number;

        /**
         * @field
         * @type Number
         * @name pc.Vec4#z
         * @description The third component of the vector.
         * @example
         * var vec = new pc.Vec4(10, 20, 30, 40);
         *
         * // Get z
         * var z = vec.z;
         *
         * // Set z
         * vec.z = 0;
         */
        z: number;

        /**
         * @field
         * @type Number
         * @name pc.Vec4#w
         * @description The fourth component of the vector.
         * @example
         * var vec = new pc.Vec4(10, 20, 30, 40);
         *
         * // Get w
         * var w = vec.w;
         *
         * // Set w
         * vec.w = 0;
         */
        w: number;

        /**
         * @field
         * @static
         * @readonly
         * @type pc.Vec4
         * @name pc.Vec4.ONE
         * @description A constant vector set to [1, 1, 1, 1].
         */
        static readonly ONE: pc.Vec4

        /**
         * @field
         * @static
         * @readonly
         * @type pc.Vec4
         * @name pc.Vec4.ZERO
         * @description A constant vector set to [0, 0, 0, 0].
         */
        static readonly ZERO: pc.Vec4
    }
}
