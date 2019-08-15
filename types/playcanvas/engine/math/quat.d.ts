declare namespace pc {
    /**
    * @name pc.Quat
    * @class A quaternion.
    * @description Create a new Quat object
    * @param {Number} [x] The quaternion's x component. Default value 0. If x is an array of length 4, the array will be used to populate all components.
    * @param {Number} [y] The quaternion's y component. Default value 0.
    * @param {Number} [z] The quaternion's z component. Default value 0.
    * @param {Number} [w] The quaternion's w component. Default value 1.
    */

    class Quat {
        constructor(x: number, y: number, z: number, w: number)
        constructor(x: [number, number, number, number])
        constructor()

        /**
         * @field
         * @type Number
         * @name pc.Quat#x
         * @description The x component of the quaternion.
         * @example
         * var quat = new pc.Quat();
         *
         * // Get x
         * var x = quat.x;
         *
         * // Set x
         * quat.x = 0;
         */
        x: number;

        /**
         * @field
         * @type Number
         * @name pc.Quat#y
         * @description The y component of the quaternion.
         * @example
         * var quat = new pc.Quat();
         *
         * // Get y
         * var y = quat.y;
         *
         * // Set y
         * quat.y = 0;
         */
        y: number;

        /**
         * @field
         * @type Number
         * @name pc.Quat#z
         * @description The z component of the quaternion.
         * @example
         * var quat = new pc.Quat();
         *
         * // Get z
         * var z = quat.z;
         *
         * // Set z
         * quat.z = 0;
         */
        z: number;

        /**
         * @field
         * @type Number
         * @name pc.Quat#w
         * @description The w component of the quaternion.
         * @example
         * var quat = new pc.Quat();
         *
         * // Get w
         * var w = quat.w;
         *
         * // Set w
         * quat.w = 0;
         */
        w: number;

        /**
         * @function
         * @name pc.Quat#clone
         * @description Returns an identical copy of the specified quaternion.
         * @returns {pc.Quat} A quaternion containing the result of the cloning.
         * @example
         * var q = new pc.Quat(-0.11, -0.15, -0.46, 0.87);
         * var qclone = q.clone();
         *
         * console.log("The result of the cloning is: " + q.toString());
         */
        clone(): pc.Quat;

        conjugate(): this;

        /**
         * @function
         * @name pc.Quat#copy
         * @description Copies the contents of a source quaternion to a destination quaternion.
         * @param {pc.Quat} rhs The quaternion to be copied.
         * @returns {pc.Quat} Self for chaining.
         * @example
         * var src = new pc.Quat();
         * var dst = new pc.Quat();
         * dst.copy(src, src);
         * console.log("The two quaternions are " + (src.equals(dst) ? "equal" : "different"));
         */
        copy(rhs: pc.Quat): this;

        /**
         * @function
         * @name pc.Quat#equals
         * @description Reports whether two quaternions are equal.
         * @returns {Boolean} true if the quaternions are equal and false otherwise.
         * @example
         * var a = new pc.Quat();
         * var b = new pc.Quat();
         * console.log("The two quaternions are " + (a.equals(b) ? "equal" : "different"));
         */
        equals(that: pc.Quat): boolean;

        /**
         * @function
         * @name pc.Quat#getEulerAngles
         * @description Converts the supplied quaternion to Euler angles.
         * @param {pc.Vec3} [eulers] The 3-dimensional vector to receive the Euler angles.
         * @returns {pc.Vec3} The 3-dimensional vector holding the Euler angles that
         * correspond to the supplied quaternion.
         */
        getEulerAngles(eulers?: pc.Vec3): pc.Vec3;

        /**
         * @function
         * @name pc.Quat#invert
         * @description Generates the inverse of the specified quaternion.
         * @returns {pc.Quat} Self for chaining.
         * @example
         * // Create a quaternion rotated 180 degrees around the y-axis
         * var rot = new pc.Quat().setFromEulerAngles(0, 180, 0);
         *
         * // Invert in place
         * rot.invert();
         */
        invert(): this;

        /**
         * @function
         * @name pc.Quat#length
         * @description Returns the magnitude of the specified quaternion.
         * @returns {Number} The magnitude of the specified quaternion.
         * @example
         * var q = new pc.Quat(0, 0, 0, 5);
         * var len = q.length();
         * // Should output 5
         * console.log("The length of the quaternion is: " + len);
         */
        length(): number;

        /**
         * @function
         * @name pc.Quat#lengthSq
         * @description Returns the magnitude squared of the specified quaternion.
         * @returns {Number} The magnitude of the specified quaternion.
         * @example
         * var q = new pc.Quat(3, 4, 0);
         * var lenSq = q.lengthSq();
         * // Should output 25
         * console.log("The length squared of the quaternion is: " + lenSq);
         */
        lengthSq(): number;

        /**
         * @function
         * @name pc.Quat#mul
         * @description Returns the result of multiplying the specified quaternions together.
         * @param {pc.Quat} rhs The quaternion used as the second multiplicand of the operation.
         * @returns {pc.Quat} Self for chaining.
         * @example
         * var a = new pc.Quat().setFromEulerAngles(0, 30, 0);
         * var b = new pc.Quat().setFromEulerAngles(0, 60, 0);
         *
         * // a becomes a 90 degree rotation around the Y axis
         * // In other words, a = a * b
         * a.mul(b);
         *
         * console.log("The result of the multiplication is: " a.toString());
         */
        mul(rhs: pc.Quat): this;

        /**
         * @function
         * @name pc.Quat#mul2
         * @description Returns the result of multiplying the specified quaternions together.
         * @param {pc.Quat} lhs The quaternion used as the first multiplicand of the operation.
         * @param {pc.Quat} rhs The quaternion used as the second multiplicand of the operation.
         * @returns {pc.Quat} Self for chaining.
         * @example
         * var a = new pc.Quat().setFromEulerAngles(0, 30, 0);
         * var b = new pc.Quat().setFromEulerAngles(0, 60, 0);
         * var r = new pc.Quat();
         *
         * // r is set to a 90 degree rotation around the Y axis
         * // In other words, r = a * b
         * r.mul2(a, b);
         *
         * console.log("The result of the multiplication is: " r.toString());
         */
        mul2(lhs: pc.Quat, rhs: pc.Quat): pc.Quat;

        /**
         * @function
         * @name pc.Quat#normalize
         * @description Returns the specified quaternion converted in place to a unit quaternion.
         * @returns {pc.Quat} The result of the normalization.
         * @example
         * var v = new pc.Quat(0, 0, 0, 5);
         *
         * v.normalize();
         *
         * // Should output 0, 0, 0, 1
         * console.log("The result of the vector normalization is: " + v.toString());
         */
        normalize(): this;

        /**
         * @function
         * @name pc.Quat#set
         * @description Sets the specified quaternion to the supplied numerical values.
         * @param {Number} x The x component of the quaternion.
         * @param {Number} y The y component of the quaternion.
         * @param {Number} z The z component of the quaternion.
         * @param {Number} w The w component of the quaternion.
         * @example
         * var q = new pc.Quat();
         * q.set(1, 0, 0, 0);
         *
         * // Should output 1, 0, 0, 0
         * console.log("The result of the vector set is: " + q.toString());
         */
        set(x: number, y: number, z: number, w: number): this;

        /**
         * @function
         * @name pc.Quat#setFromAxisAngle
         * @description Sets a quaternion from an angular rotation around an axis.
         * @param {pc.Vec3} axis World space axis around which to rotate.
         * @param {Number} angle Angle to rotate around the given axis in degrees.
         * @returns {pc.Quat} Self for chaining.
         * @example
         * var q = new pc.Quat();
         * q.setFromAxisAngle(pc.Vec3.UP, 90);
         */
        setFromAxisAngle(axis: pc.Vec3, angle: number): this;

        /**
         * @function
         * @name pc.Quat#setFromEulerAngles
         * @description Sets a quaternion from Euler angles specified in XYZ order.
         * @param {Number} ex Angle to rotate around X axis in degrees.
         * @param {Number} ey Angle to rotate around Y axis in degrees.
         * @param {Number} ez Angle to rotate around Z axis in degrees.
         * @returns {pc.Quat} Self for chaining.
         * @example
         * var q = new pc.Quat();
         * q.setFromEulerAngles(45, 90, 180);
         */
        setFromEulerAngles(ex: number, ey: number, ez: number): this;

        /**
         * @function
         * @name pc.Quat#setFromMat4
         * @description Converts the specified 4x4 matrix to a quaternion. Note that since
         * a quaternion is purely a representation for orientation, only the translational part
         * of the matrix is lost.
         * @param {pc.Mat4} m The 4x4 matrix to convert.
         * @returns {pc.Quat} Self for chaining.
         * @example
         * // Create a 4x4 rotation matrix of 180 degrees around the y-axis
         * var rot = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, 180);
         *
         * // Convert to a quaternion
         * var q = new pc.Quat().setFromMat4(rot);
         */
        setFromMat4(m: pc.Mat4): this;

        /**
         * @function
         * @name pc.Quat#slerp
         * @description Performs a spherical interpolation between two quaternions. The result of
         * the interpolation is written to the quaternion calling the function.
         * @param {pc.Quat} lhs The quaternion to interpolate from.
         * @param {pc.Quat} rhs The quaternion to interpolate to.
         * @param {Number} alpha The value controlling the interpolation in relation to the two input
         * quaternions. The value is in the range 0 to 1, 0 generating q1, 1 generating q2 and anything
         * in between generating a spherical interpolation between the two.
         * @returns {pc.Quat} Self for chaining.
         * @example
         * var q1 = new pc.Quat(-0.11,-0.15,-0.46,0.87);
         * var q2 = new pc.Quat(-0.21,-0.21,-0.67,0.68);
         *
         * var result;
         * result = new pc.Quat().slerp(q1, q2, 0);   // Return q1
         * result = new pc.Quat().slerp(q1, q2, 0.5); // Return the midpoint interpolant
         * result = new pc.Quat().slerp(q1, q2, 1);   // Return q2
         */
        slerp(lhs: pc.Quat, rhs: pc.Quat, alpha: number): this;

        /**
         * @function
         * @name pc.Quat#transformVector
         * @description Transforms a 3-dimensional vector by the specified quaternion.
         * @param {pc.Vec3} vec The 3-dimensional vector to be transformed.
         * @param {pc.Vec3} [res] An optional 3-dimensional vector to receive the result of the transformation.
         * @returns {pc.Vec3} The input vector v transformed by the current instance.
         * @example
         * // Create a 3-dimensional vector
         * var v = new pc.Vec3(1, 2, 3);
         *
         * // Create a 4x4 rotation matrix
         * var q = new pc.Quat().setFromEulerAngles(10, 20, 30);
         *
         * var tv = q.transformVector(v);
         */
        transformVector(vec: pc.Vec3, res?: pc.Vec3): pc.Vec3;

        /**
         * @function
         * @name pc.Quat#toString
         * @description Converts the quaternion to string form.
         * @returns {String} The quaternion in string form.
         * @example
         * var v = new pc.Quat(0, 0, 0, 1);
         * // Should output '[0, 0, 0, 1]'
         * console.log(v.toString());
         */
        toString(): string;

        /**
         * @field
         * @static
         * @readonly
         * @type pc.Quat
         * @name pc.Quat.IDENTITY
         * @description A constant quaternion set to [0, 0, 0, 1] (the identity).
         */
        static readonly IDENTITY: pc.Quat;

        /**
         * @field
         * @static
         * @readonly
         * @type pc.Quat
         * @name pc.Quat.ZERO
         * @description A constant quaternion set to [0, 0, 0, 0].
         */
        static readonly ZERO: pc.Quat;
    }
}