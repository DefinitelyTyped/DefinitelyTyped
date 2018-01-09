declare namespace pc {

    /**
    * @name pc.Mat3
    * @class A 3x3 matrix.
    * @description Creates a new Mat3 object
    * @param {Number} [v0] The value in row 0, column 0. If v0 is an array of length 9, the array will be used to populate all components.
    * @param {Number} [v1] The value in row 1, column 0.
    * @param {Number} [v2] The value in row 2, column 0.
    * @param {Number} [v3] The value in row 0, column 1.
    * @param {Number} [v4] The value in row 1, column 1.
    * @param {Number} [v5] The value in row 2, column 1.
    * @param {Number} [v6] The value in row 0, column 2.
    * @param {Number} [v7] The value in row 1, column 2.
    * @param {Number} [v8] The value in row 2, column 2.
    */
    class Mat3 {
        constructor(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number)
        constructor(v0: [number, number, number, number, number, number, number, number, number])

        /**
         * @function
         * @name pc.Mat3#clone
         * @description Creates a duplicate of the specified matrix.
         * @returns {pc.Mat3} A duplicate matrix.
         * @example
         * var src = new pc.Mat3().translate(10, 20, 30);
         * var dst = new pc.Mat3();
         * dst.copy(src);
         * console.log("The two matrices are " + (src.equal(dst) ? "equal" : "different"));
         */
        clone(): pc.Mat3;

        /**
         * @function
         * @name pc.Mat3#copy
         * @description Copies the contents of a source 3x3 matrix to a destination 3x3 matrix.
         * @param {pc.Mat3} src A 3x3 matrix to be copied.
         * @returns {pc.Mat3} Self for chaining
         * @example
         * var src = new pc.Mat3().translate(10, 20, 30);
         * var dst = new pc.Mat3();
         * dst.copy(src);
         * console.log("The two matrices are " + (src.equal(dst) ? "equal" : "different"));
         */
        copy(rhs: pc.Mat3): this;

        /**
         * @function
         * @name pc.Mat3#equals
         * @param {pc.Mat3} rhs The other matrix.
         * @description Reports whether two matrices are equal.
         * @returns {Boolean} true if the matrices are equal and false otherwise.
         * @example
         * var a = new pc.Mat3().translate(10, 20, 30);
         * var b = new pc.Mat3();
         * console.log("The two matrices are " + (a.equals(b) ? "equal" : "different"));
         */
        equals(rhs: pc.Mat3): boolean;

        /**
         * @function
         * @name pc.Mat3#isIdentity
         * @description Reports whether the specified matrix is the identity matrix.
         * @returns {Boolean} true if the matrix is identity and false otherwise.
         * @example
         * var m = new pc.Mat3();
         * console.log("The matrix is " + (m.isIdentity() ? "identity" : "not identity"));
         */
        isIdentity(): boolean;

        /**
         * @function
         * @name pc.Mat3#setIdentity
         * @description Sets the matrix to the identity matrix.
         * @returns {pc.Mat3} Self for chaining.
         * @example
         * m.setIdentity();
         * console.log("The two matrices are " + (src.equal(dst) ? "equal" : "different"));
         */
        setIdentity(): this;

        /**
         * @function
         * @name pc.Mat3#toString
         * @description Converts the matrix to string form.
         * @returns {String} The matrix in string form.
         * @example
         * var m = new pc.Mat3();
         * // Should output '[1, 0, 0, 0, 1, 0, 0, 0, 1]'
         * console.log(m.toString());
         */
        toString(): string;

        /**
         * @function
         * @name pc.Mat3#transpose
         * @description Generates the transpose of the specified 3x3 matrix.
         * @returns {pc.Mat3} Self for chaining.
         * @example
         * var m = new pc.Mat3();
         *
         * // Transpose in place
         * m.transpose();
         */
        transpose(): this;

        /**
         * @field
         * @static
         * @readonly
         * @type pc.Mat3
         * @name pc.Mat3.IDENTITY
         * @description A constant matrix set to the identity.
         */
        static readonly IDENTITY: pc.Mat3;

        /**
         * @field
         * @static
         * @readonly
         * @type pc.Mat3
         * @name pc.Mat3.ZERO
         * @description A constant matrix with all elements set to 0.
         */
        static readonly ZERO: pc.Mat3;
    }
}
