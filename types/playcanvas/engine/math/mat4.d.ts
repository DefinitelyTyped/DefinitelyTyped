declare namespace pc {

    /**
    * @name pc.Mat4
    * @class A 4x4 matrix.
    * @description Creates a new Mat4 object
    * @param {Number} [v0] The value in row 0, column 0. If v0 is an array of length 16, the array will be used to populate all components.
    * @param {Number} [v1] The value in row 1, column 0.
    * @param {Number} [v2] The value in row 2, column 0.
    * @param {Number} [v3] The value in row 3, column 0.
    * @param {Number} [v4] The value in row 0, column 1.
    * @param {Number} [v5] The value in row 1, column 1.
    * @param {Number} [v6] The value in row 2, column 1.
    * @param {Number} [v7] The value in row 3, column 1.
    * @param {Number} [v8] The value in row 0, column 2.
    * @param {Number} [v9] The value in row 1, column 2.
    * @param {Number} [v10] The value in row 2, column 2.
    * @param {Number} [v11] The value in row 3, column 2.
    * @param {Number} [v12] The value in row 0, column 3.
    * @param {Number} [v13] The value in row 1, column 3.
    * @param {Number} [v14] The value in row 2, column 3.
    * @param {Number} [v15] The value in row 3, column 3.
    */
    class Mat4 {
        constructor(
            v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number,
            v9: number, v10: number, v11: number, v12: number, v13: number, v14: number, v15: number
        );
        constructor(v0: [
            number, number, number, number, number, number, number, number,
            number, number, number, number, number, number, number, number
        ]);
        constructor();

        /**
         * @function
         * @name pc.Mat4#add2
         * @description Adds the specified 4x4 matrices together and stores the result in
         * the current instance.
         * @param {pc.Mat4} lhs The 4x4 matrix used as the first operand of the addition.
         * @param {pc.Mat4} rhs The 4x4 matrix used as the second operand of the addition.
         * @returns {pc.Mat4} Self for chaining.
         * @example
         * var m = new pc.Mat4();
         *
         * m.add2(pc.Mat4.INDENTITY, pc.Mat4.ONE);
         *
         * console.log("The result of the addition is: " a.toString());
         */
        add2(lhs: pc.Mat4, rhs: pc.Mat4): this;

        /**
         * @function
         * @name pc.Mat4#add
         * @description Adds the specified 4x4 matrix to the current instance.
         * @param {pc.Mat4} rhs The 4x4 matrix used as the second operand of the addition.
         * @returns {pc.Mat4} Self for chaining.
         * @example
         * var m = new pc.Mat4();
         *
         * m.add(pc.Mat4.ONE);
         *
         * console.log("The result of the addition is: " a.toString());
         */
        add(rhs: pc.Mat4): this;

        /**
         * @function
         * @name pc.Mat4#clone
         * @description Creates a duplicate of the specified matrix.
         * @returns {pc.Mat4} A duplicate matrix.
         * @example
         * var src = new pc.Mat4().setFromEulerAngles(10, 20, 30);
         * var dst = new pc.Mat4();
         * dst.copy(src);
         * console.log("The two matrices are " + (src.equal(dst) ? "equal" : "different"));
         */
        clone(): pc.Mat4;

        /**
         * @function
         * @name pc.Mat4#copy
         * @description Copies the contents of a source 4x4 matrix to a destination 4x4 matrix.
         * @param {pc.Mat4} rhs A 4x4 matrix to be copied.
         * @returns {pc.Mat4} Self for chaining.
         * @example
         * var src = new pc.Mat4().setFromEulerAngles(10, 20, 30);
         * var dst = new pc.Mat4();
         * dst.copy(src);
         * console.log("The two matrices are " + (src.equal(dst) ? "equal" : "different"));
         */
        copy(rhs: pc.Mat4): this;

        /**
         * @function
         * @name pc.Mat4#equals
         * @description Reports whether two matrices are equal.
         * @param {pc.Mat4} rhs The other matrix.
         * @returns {Boolean} true if the matrices are equal and false otherwise.
         * @example
         * var a = new pc.Mat4().setFromEulerAngles(10, 20, 30);
         * var b = new pc.Mat4();
         * console.log("The two matrices are " + (a.equals(b) ? "equal" : "different"));
         */
        equals(rhs: pc.Mat4): boolean;

        /**
         * @function
         * @name pc.Mat4#isIdentity
         * @description Reports whether the specified matrix is the identity matrix.
         * @returns {Boolean} true if the matrix is identity and false otherwise.
         * @example
         * var m = new pc.Mat4();
         * console.log("The matrix is " + (m.isIdentity() ? "identity" : "not identity"));
         */
        isIdentity(): boolean;

        /**
         * @function
         * @name pc.Mat4#mul2
         * @description Multiplies the specified 4x4 matrices together and stores the result in
         * the current instance.
         * @param {pc.Mat4} lhs The 4x4 matrix used as the first multiplicand of the operation.
         * @param {pc.Mat4} rhs The 4x4 matrix used as the second multiplicand of the operation.
         * @returns {pc.Mat4} Self for chaining.
         * @example
         * var a = new pc.Mat4().setFromEulerAngles(10, 20, 30);
         * var b = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 180);
         * var r = new pc.Mat4();
         *
         * // r = a * b
         * r.mul2(a, b);
         *
         * console.log("The result of the multiplication is: " r.toString());
         */
        mul2(lhs: pc.Mat4, rhs: pc.Mat4): this;

        /**
         * @function
         * @name pc.Mat4#mul
         * @description Multiplies the current instance by the specified 4x4 matrix.
         * @param {pc.Mat4} rhs The 4x4 matrix used as the second multiplicand of the operation.
         * @returns {pc.Mat4} Self for chaining.
         * @example
         * var a = new pc.Mat4().setFromEulerAngles(10, 20, 30);
         * var b = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 180);
         *
         * // a = a * b
         * a.mul(b);
         *
         * console.log("The result of the multiplication is: " a.toString());
         */
        mul(rhs: pc.Mat4): this;

        /**
         * @function
         * @name pc.Mat4#transformPoint
         * @description Transforms a 3-dimensional point by a 4x4 matrix.
         * @param {pc.Vec3} vec The 3-dimensional point to be transformed.
         * @param {pc.Vec3} [res] An optional 3-dimensional point to receive the result of the transformation.
         * @returns {pc.Vec3} The input point v transformed by the current instance.
         * @example
         * // Create a 3-dimensional point
         * var v = new pc.Vec3(1, 2, 3);
         *
         * // Create a 4x4 rotation matrix
         * var m = new pc.Mat4().setFromEulerAngles(10, 20, 30);
         *
         * var tv = m.transformPoint(v);
         */
        transformPoint(vec: pc.Vec3, res?: pc.Vec3): pc.Vec3;

        /**
         * @function
         * @name pc.Mat4#transformVector
         * @description Transforms a 3-dimensional vector by a 4x4 matrix.
         * @param {pc.Vec3} vec The 3-dimensional vector to be transformed.
         * @param {pc.Vec3} [res] An optional 3-dimensional vector to receive the result of the transformation.
         * @returns {pc.Vec3} The input vector v transformed by the current instance.
         * @example
         * // Create a 3-dimensional vector
         * var v = new pc.Vec3(1, 2, 3);
         *
         * // Create a 4x4 rotation matrix
         * var m = new pc.Mat4().setFromEulerAngles(10, 20, 30);
         *
         * var tv = m.transformVector(v);
         */
        transformVector(vec: pc.Vec3, res?: pc.Vec3): pc.Vec3

        /**
         * @function
         * @name pc.Mat4#transformVec4
         * @description Transforms a 4-dimensional vector by a 4x4 matrix.
         * @param {pc.Vec4} vec The 4-dimensional vector to be transformed.
         * @param {pc.Vec4} [res] An optional 4-dimensional vector to receive the result of the transformation.
         * @returns {pc.Vec4} The input vector v transformed by the current instance.
         * @example
         * // Create an input 4-dimensional vector
         * var v = new pc.Vec4(1, 2, 3, 4);
         *
         * // Create an output 4-dimensional vector
         * var result = new pc.Vec4();
         *
         * // Create a 4x4 rotation matrix
         * var m = new pc.Mat4().setFromEulerAngles(10, 20, 30);
         *
         * m.transformVec4(v, result);
         */
        transformVec4(vec: pc.Vec4, res: pc.Vec4): pc.Vec4;

        /**
         * @function
         * @name pc.Mat4#setLookAt
         * @description Sets the specified matrix to a viewing matrix derived from an eye point, a target point
         * and an up vector. The matrix maps the target point to the negative z-axis and the eye point to the
         * origin, so that when you use a typical projection matrix, the center of the scene maps to the center
         * of the viewport. Similarly, the direction described by the up vector projected onto the viewing plane
         * is mapped to the positive y-axis so that it points upward in the viewport. The up vector must not be
         * parallel to the line of sight from the eye to the reference point.
         * @param {pc.Vec3} position 3-d vector holding view position.
         * @param {pc.Vec3} target 3-d vector holding reference point.
         * @param {pc.Vec3} up 3-d vector holding the up direction.
         * @returns {pc.Mat4} Self for chaining.
         * @example
         * var position = new pc.Vec3(10, 10, 10);
         * var target = new pc.Vec3(0, 0, 0);
         * var up = new pc.Vec3(0, 1, 0);
         * var m = new pc.Mat4().setLookAt(position, target, up);
         */
        setLookAt(position: pc.Vec3, target: pc.Vec3, up: pc.Vec3): this;

        /**
         * @private
         * @function
         * @name pc.Mat4#setFrustum
         * @description Sets the specified matrix to a perspective projection matrix. The function's parameters define
         * the shape of a frustum.
         * @param {Number} left The x-coordinate for the left edge of the camera's projection plane in eye space.
         * @param {Number} right The x-coordinate for the right edge of the camera's projection plane in eye space.
         * @param {Number} bottom The y-coordinate for the bottom edge of the camera's projection plane in eye space.
         * @param {Number} top The y-coordinate for the top edge of the camera's projection plane in eye space.
         * @param {Number} znear The near clip plane in eye coordinates.
         * @param {Number} zfar The far clip plane in eye coordinates.
         * @returns {pc.Mat4} Self for chaining.
         * @example
         * // Create a 4x4 perspective projection matrix
         * var f = pc.Mat4().setFrustum(-2, 2, -1, 1, 1, 1000);
         */
        setFrustum(left: number, right: number, bottom: number, top: number, znear: number, zfar: number): this;

        /**
         * @function
         * @name pc.Mat4#setPerspective
         * @description Sets the specified matrix to a perspective projection matrix. The function's
         * parameters define the shape of a frustum.
         * @param {Number} fovy The field of view in the frustum in the Y-axis of eye space (or X axis if fovIsHorizontal is true).
         * @param {Number} aspect The aspect ratio of the frustum's projection plane (width / height).
         * @param {Number} znear The near clip plane in eye coordinates.
         * @param {Number} zfar The far clip plane in eye coordinates.
         * @returns {pc.Mat4} Self for chaining.
         * @example
         * // Create a 4x4 perspective projection matrix
         * var persp = pc.Mat4().setPerspective(45, 16 / 9, 1, 1000);
         */
        setPerspective(fovy: number, aspect: number, znear: number, zfar: number, fovIsHorizontal?: boolean): this;

        /**
         * @function
         * @name pc.Mat4#setOrtho
         * @description Sets the specified matrix to an orthographic projection matrix. The function's parameters
         * define the shape of a cuboid-shaped frustum.
         * @param {Number} left The x-coordinate for the left edge of the camera's projection plane in eye space.
         * @param {Number} right The x-coordinate for the right edge of the camera's projection plane in eye space.
         * @param {Number} bottom The y-coordinate for the bottom edge of the camera's projection plane in eye space.
         * @param {Number} top The y-coordinate for the top edge of the camera's projection plane in eye space.
         * @param {Number} znear The near clip plane in eye coordinates.
         * @param {Number} zfar The far clip plane in eye coordinates.
         * @returns {pc.Mat4} Self for chaining.
         * @example
         * // Create a 4x4 orthographic projection matrix
         * var ortho = pc.Mat4().ortho(-2, 2, -2, 2, 1, 1000);
         */
        setOrtho(left: number, right: number, bottom: number, top: number, near: number, far: number): this;

        /**
         * @function
         * @name pc.Mat4#setFromAxisAngle
         * @description Sets the specified matrix to a rotation matrix equivalent to a rotation around
         * an axis. The axis must be normalized (unit length) and the angle must be specified in degrees.
         * @param {pc.Vec3} axis The normalized axis vector around which to rotate.
         * @param {Number} angle The angle of rotation in degrees.
         * @returns {pc.Mat4} Self for chaining.
         * @example
         * // Create a 4x4 rotation matrix
         * var rm = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 90);
         */
        setFromAxisAngle(axis: pc.Vec3, angle: number): this;

        /**
         * @private
         * @function
         * @name pc.Mat4#setTranslate
         * @description Sets the specified matrix to a translation matrix.
         * @param {Number} x The x-component of the translation.
         * @param {Number} y The y-component of the translation.
         * @param {Number} z The z-component of the translation.
         * @returns {pc.Mat4} Self for chaining.
         * @example
         * // Create a 4x4 translation matrix
         * var tm = new pc.Mat4().setTranslate(10, 10, 10);
         */
        setTranslate(tx: number, ty: number, tz: number): this;

        /**
         * @private
         * @function
         * @name pc.Mat4#setScale
         * @description Sets the specified matrix to a scale matrix.
         * @param {Number} x The x-component of the scale.
         * @param {Number} y The y-component of the scale.
         * @param {Number} z The z-component of the scale.
         * @returns {pc.Mat4} Self for chaining.
         * @example
         * // Create a 4x4 scale matrix
         * var sm = new pc.Mat4().setScale(10, 10, 10);
         */
        setScale(sx: number, sy: number, sz: number): this;

        /**
         * @function
         * @name pc.Mat4#invert
         * @description Sets the specified matrix to its inverse.
         * @returns {pc.Mat4} Self for chaining.
         * @example
         * // Create a 4x4 rotation matrix of 180 degrees around the y-axis
         * var rot = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 180);
         *
         * // Invert in place
         * rot.invert();
         */
        invert(): this;

        /**
         * @function
         * @name pc.Mat4#set
         * @description Sets matrix data from an array.
         * @param {Array} Source array. Must have 16 values.
         */
        set(src: [
            number, number, number, number,
            number, number, number, number,
            number, number, number, number,
            number, number, number, number
        ]): this;

        /**
         * @function
         * @name pc.Mat4#setIdentity
         * @description Sets the specified matrix to the identity matrix.
         * @returns {pc.Mat4} Self for chaining.
         * @example
         * m.setIdentity();
         * console.log("The two matrices are " + (src.equal(dst) ? "equal" : "different"));
         */
        setIdentity(): this;

        /**
         * @function
         * @name pc.Mat4#setTRS
         * @description Sets the specified matrix to the concatenation of a translation, a
         * quaternion rotation and a scale.
         * @param {pc.Vec3} t A 3-d vector translation.
         * @param {pc.Quat} r A quaternion rotation.
         * @param {pc.Vec3} s A 3-d vector scale.
         * @returns {pc.Mat4} Self for chaining.
         * @example
         * var t = new pc.Vec3(10, 20, 30);
         * var r = new pc.Quat();
         * var s = new pc.Vec3(2, 2, 2);
         *
         * var m = new pc.Mat4();
         * m.setTRS(t, r, s);
         */
        setTRS(t: pc.Vec3, r: pc.Quat, s: pc.Vec3): this;

        /**
         * @function
         * @name pc.Mat4#transpose
         * @description Sets the specified matrix to its transpose.
         * @returns {pc.Mat4} Self for chaining.
         * @example
         * var m = new pc.Mat4();
         *
         * // Transpose in place
         * m.transpose();
         */
        transpose(): this;

        invertTo3x3(res: pc.Mat4): this;

        /**
         * @function
         * @name pc.Mat4#getTranslation
         * @description Extracts the translational component from the specified 4x4 matrix.
         * @param {pc.Vec3} [t] The vector to receive the translation of the matrix.
         * @returns {pc.Vec3} The translation of the specified 4x4 matrix.
         * @example
         * // Create a 4x4 matrix
         * var m = new pc.Mat4();
         *
         * // Query the z-axis component
         * var t = new pc.Vec3();
         * m.getTranslation(t);
         */
        getTranslation(t?: pc.Vec3): pc.Vec3;

        /**
         * @function
         * @name pc.Mat4#getX
         * @description Extracts the x-axis from the specified 4x4 matrix.
         * @param {pc.Vec3} [x] The vector to receive the x axis of the matrix.
         * @returns {pc.Vec3} The x-axis of the specified 4x4 matrix.
         * @example
         * // Create a 4x4 matrix
         * var m = new pc.Mat4();
         *
         * // Query the z-axis component
         * var x = new pc.Vec3();
         * m.getX(x);
         */
        getX(x?: pc.Vec3): pc.Vec3;

        /**
         * @function
         * @name pc.Mat4#getY
         * @description Extracts the y-axis from the specified 4x4 matrix.
         * @param {pc.Vec3} [y] The vector to receive the y axis of the matrix.
         * @returns {pc.Vec3} The y-axis of the specified 4x4 matrix.
         * @example
         * // Create a 4x4 matrix
         * var m = new pc.Mat4();
         *
         * // Query the z-axis component
         * var y = new pc.Vec3();
         * m.getY(y);
         */
        getY(y?: pc.Vec3): pc.Vec3;

        /**
         * @function
         * @name pc.Mat4#getZ
         * @description Extracts the z-axis from the specified 4x4 matrix.
         * @param {pc.Vec3} [z] The vector to receive the z axis of the matrix.
         * @returns {pc.Vec3} The z-axis of the specified 4x4 matrix.
         * @example
         * // Create a 4x4 matrix
         * var m = new pc.Mat4();
         *
         * // Query the z-axis component
         * var z = new pc.Vec3();
         * m.getZ(z);
         */
        getZ(z?: pc.Vec3): pc.Vec3;

        /**
         * @function
         * @name pc.Mat4#getScale
         * @description Extracts the scale component from the specified 4x4 matrix.
         * @param {pc.Vec3} [scale] Vector to receive the scale.
         * @returns {pc.Vec3} The scale in X, Y and Z of the specified 4x4 matrix.
         * @example
         * // Create a 4x4 scale matrix
         * var m = new pc.Mat4().scale(2, 3, 4);
         *
         * // Query the scale component
         * var scale = m.getScale();
         */
        getScale(scale?: pc.Vec3): pc.Vec3;

        /**
         * @function
         * @name pc.Mat4#setFromEulerAngles
         * @description Sets the specified matrix to a rotation matrix defined by
         * Euler angles. The Euler angles are specified in XYZ order and in degrees.
         * @param {Number} ex Angle to rotate around X axis in degrees.
         * @param {Number} ey Angle to rotate around Y axis in degrees.
         * @param {Number} ez Angle to rotate around Z axis in degrees.
         * @returns {pc.Mat4} Self for chaining.
         * @example
         * var m = new pc.Mat4();
         * m.setFromEulerAngles(45, 90, 180);
         */
        // http://en.wikipedia.org/wiki/Rotation_matrix#Conversion_from_and_to_axis-angle
        // The 3D space is right-handed, so the rotation around each axis will be counterclockwise
        // for an observer placed so that the axis goes in his or her direction (Right-hand rule).
        setFromEulerAngles(ex: number, ey: number, ez: number): this;

        /**
         * @function
         * @name pc.Mat4#getEulerAngles
         * @description Extracts the Euler angles equivalent to the rotational portion
         * of the specified matrix. The returned Euler angles are in XYZ order an in degrees.
         * @param {pc.Vec3} [eulers] A 3-d vector to receive the Euler angles.
         * @returns {pc.Vec3} A 3-d vector containing the Euler angles.
         * @example
         * // Create a 4x4 rotation matrix of 45 degrees around the y-axis
         * var m = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 45);
         *
         * var eulers = m.getEulerAngles();
         */
        getEulerAngles(eulers?: pc.Vec3): pc.Vec3;

        /**
         * @function
         * @name pc.Mat4#toString
         * @description Converts the specified matrix to string form.
         * @returns {String} The matrix in string form.
         * @example
         * var m = new pc.Mat4();
         * // Should output '[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]'
         * console.log(m.toString());
         */
        toString(): string;

        /**
         * @field
         * @static
         * @readonly
         * @type pc.Mat4
         * @name pc.Mat4.IDENTITY
         * @description A constant matrix set to the identity.
         */
        static readonly IDENTITY: pc.Mat4;

        /**
         * @field
         * @static
         * @readonly
         * @type pc.Mat4
         * @name pc.Mat4.ZERO
         * @description A constant matrix with all elements set to 0.
         */
        static readonly ZERO: pc.Mat4;
    }
}