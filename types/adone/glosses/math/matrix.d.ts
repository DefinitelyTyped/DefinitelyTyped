// based on https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/gl-matrix

declare namespace adone.math {
    /**
     * vector and matrix operations
     */
    namespace matrix {
        let EPSILON: number;

        /**
         * Convert Degree To Radian
         *
         * @param a - Angle in Degrees
         */
        function toRadian(a: number): number;

        /**
         * Tests whether or not the arguments have approximately the same value, within an absolute
         * or relative tolerance of EPSILON (an absolute tolerance is used for values less
         * than or equal to 1.0, and a relative tolerance is used for larger values)
         *
         * @param a - The first number to test.
         * @param b - The second number to test.
         * @returns True if the numbers are approximately equal, false otherwise.
         */
        function equals(a: number, b: number): boolean;

        namespace I {
            type vec2 = Float32Array;
        }

        /**
         * 2 Dimensional Vector
         */
        namespace vec2 {
            /**
             * Creates a new, empty vec2
             *
             * @returns a new 2D vector
             */
            function create(): I.vec2;

            /**
             * Creates a new vec2 initialized with values from an existing vector
             *
             * @param a a vector to clone
             * @returns a new 2D vector
             */
            function clone(a: I.vec2 | number[]): I.vec2;

            /**
             * Creates a new vec2 initialized with the given values
             *
             * @param x X component
             * @param y Y component
             * @returns a new 2D vector
             */
            function fromValues(x: number, y: number): I.vec2;

            /**
             * Copy the values from one vec2 to another
             *
             * @param out the receiving vector
             * @param a the source vector
             * @returns out
             */
            function copy(out: I.vec2, a: I.vec2 | number[]): I.vec2;

            /**
             * Set the components of a vec2 to the given values
             *
             * @param out the receiving vector
             * @param x X component
             * @param y Y component
             * @returns out
             */
            function set(out: I.vec2, x: number, y: number): I.vec2;

            /**
             * Adds two vec2's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function add(out: I.vec2, a: I.vec2 | number[], b: I.vec2 | number[]): I.vec2;

            /**
             * Subtracts vector b from vector a
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function subtract(out: I.vec2, a: I.vec2 | number[], b: I.vec2 | number[]): I.vec2;

            /**
             * Subtracts vector b from vector a
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function sub(out: I.vec2, a: I.vec2 | number[], b: I.vec2 | number[]): I.vec2;

            /**
             * Multiplies two vec2's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function multiply(out: I.vec2, a: I.vec2 | number[], b: I.vec2 | number[]): I.vec2;

            /**
             * Multiplies two vec2's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function mul(out: I.vec2, a: I.vec2 | number[], b: I.vec2 | number[]): I.vec2;

            /**
             * Divides two vec2's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function divide(out: I.vec2, a: I.vec2 | number[], b: I.vec2 | number[]): I.vec2;

            /**
             * Divides two vec2's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function div(out: I.vec2, a: I.vec2 | number[], b: I.vec2 | number[]): I.vec2;

            /**
             * Math.ceil the components of a vec2
             *
             * @param out the receiving vector
             * @param a vector to ceil
             * @returns out
             */
            function ceil(out: I.vec2, a: I.vec2 | number[]): I.vec2;

            /**
             * Math.floor the components of a vec2
             *
             * @param out the receiving vector
             * @param a vector to floor
             * @returns out
             */
            function floor(out: I.vec2, a: I.vec2 | number[]): I.vec2;

            /**
             * Returns the minimum of two vec2's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function min(out: I.vec2, a: I.vec2 | number[], b: I.vec2 | number[]): I.vec2;

            /**
             * Returns the maximum of two vec2's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function max(out: I.vec2, a: I.vec2 | number[], b: I.vec2 | number[]): I.vec2;

            /**
             * Math.round the components of a vec2
             *
             * @param out the receiving vector
             * @param a vector to round
             * @returns out
             */
            function round(out: I.vec2, a: I.vec2 | number[]): I.vec2;

            /**
             * Scales a vec2 by a scalar number
             *
             * @param out the receiving vector
             * @param a the vector to scale
             * @param b amount to scale the vector by
             * @returns out
             */
            function scale(out: I.vec2, a: I.vec2 | number[], b: number): I.vec2;

            /**
             * Adds two vec2's after scaling the second operand by a scalar value
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @param scale the amount to scale b by before adding
             * @returns out
             */
            function scaleAndAdd(out: I.vec2, a: I.vec2 | number[], b: I.vec2 | number[], scale: number): I.vec2;

            /**
             * Calculates the euclidian distance between two vec2's
             *
             * @param a the first operand
             * @param b the second operand
             * @returns distance between a and b
             */
            function distance(a: I.vec2 | number[], b: I.vec2 | number[]): number;

            /**
             * Calculates the euclidian distance between two vec2's
             *
             * @param a the first operand
             * @param b the second operand
             * @returns distance between a and b
             */
            function dist(a: I.vec2 | number[], b: I.vec2 | number[]): number;

            /**
             * Calculates the squared euclidian distance between two vec2's
             *
             * @param a the first operand
             * @param b the second operand
             * @returns squared distance between a and b
             */
            function squaredDistance(a: I.vec2 | number[], b: I.vec2 | number[]): number;

            /**
             * Calculates the squared euclidian distance between two vec2's
             *
             * @param a the first operand
             * @param b the second operand
             * @returns squared distance between a and b
             */
            function sqrDist(a: I.vec2 | number[], b: I.vec2 | number[]): number;

            /**
             * Calculates the length of a vec2
             *
             * @param a vector to calculate length of
             * @returns length of a
             */
            function length(a: I.vec2 | number[]): number;

            /**
             * Calculates the length of a vec2
             *
             * @param a vector to calculate length of
             * @returns length of a
             */
            function len(a: I.vec2 | number[]): number;

            /**
             * Calculates the squared length of a vec2
             *
             * @param a vector to calculate squared length of
             * @returns squared length of a
             */
            function squaredLength(a: I.vec2 | number[]): number;

            /**
             * Calculates the squared length of a vec2
             *
             * @param a vector to calculate squared length of
             * @returns squared length of a
             */
            function sqrLen(a: I.vec2 | number[]): number;

            /**
             * Negates the components of a vec2
             *
             * @param out the receiving vector
             * @param a vector to negate
             * @returns out
             */
            function negate(out: I.vec2, a: I.vec2 | number[]): I.vec2;

            /**
             * Returns the inverse of the components of a vec2
             *
             * @param out the receiving vector
             * @param a vector to invert
             * @returns out
             */
            function inverse(out: I.vec2, a: I.vec2 | number[]): I.vec2;

            /**
             * Normalize a vec2
             *
             * @param out the receiving vector
             * @param a vector to normalize
             * @returns out
             */
            function normalize(out: I.vec2, a: I.vec2 | number[]): I.vec2;

            /**
             * Calculates the dot product of two vec2's
             *
             * @param a the first operand
             * @param b the second operand
             * @returns dot product of a and b
             */
            function dot(a: I.vec2 | number[], b: I.vec2 | number[]): number;

            /**
             * Computes the cross product of two vec2's
             * Note that the cross product must by definition produce a 3D vector
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function cross(out: I.vec2, a: I.vec2 | number[], b: I.vec2 | number[]): I.vec2;

            /**
             * Performs a linear interpolation between two vec2's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @param t interpolation amount between the two inputs
             * @returns out
             */
            function lerp(out: I.vec2, a: I.vec2 | number[], b: I.vec2 | number[], t: number): I.vec2;

            /**
             * Generates a random unit vector
             *
             * @param out the receiving vector
             * @returns out
             */
            function random(out: I.vec2): I.vec2;

            /**
             * Generates a random vector with the given scale
             *
             * @param out the receiving vector
             * @param scale Length of the resulting vector. If ommitted, a unit vector will be returned
             * @returns out
             */
            function random(out: I.vec2, scale: number): I.vec2;

            /**
             * Transforms the vec2 with a mat2
             *
             * @param out the receiving vector
             * @param a the vector to transform
             * @param m matrix to transform with
             * @returns out
             */
            function transformMat2(out: I.vec2, a: I.vec2 | number[], m: I.mat2): I.vec2;

            /**
             * Transforms the vec2 with a mat2d
             *
             * @param out the receiving vector
             * @param a the vector to transform
             * @param m matrix to transform with
             * @returns out
             */
            function transformMat2d(out: I.vec2, a: I.vec2 | number[], m: I.mat2d): I.vec2;

            /**
             * Transforms the vec2 with a mat3
             * 3rd vector component is implicitly '1'
             *
             * @param out the receiving vector
             * @param a the vector to transform
             * @param m matrix to transform with
             * @returns out
             */
            function transformMat3(out: I.vec2, a: I.vec2 | number[], m: I.mat3): I.vec2;

            /**
             * Transforms the vec2 with a mat4
             * 3rd vector component is implicitly '0'
             * 4th vector component is implicitly '1'
             *
             * @param out the receiving vector
             * @param a the vector to transform
             * @param m matrix to transform with
             * @returns out
             */
            function transformMat4(out: I.vec2, a: I.vec2 | number[], m: I.mat4): I.vec2;

            /**
             * Perform some operation over an array of vec2s.
             *
             * @param a the array of vectors to iterate over
             * @param stride Number of elements between the start of each vec2. If 0 assumes tightly packed
             * @param offset Number of elements to skip at the beginning of the array
             * @param count Number of vec2s to iterate over. If 0 iterates over entire array
             * @param fn Function to call for each vector in the array
             * @param arg additional argument to pass to fn
             * @returns a
             */
            function forEach(a: Float32Array, stride: number, offset: number, count: number,
                                    fn: (a: I.vec2 | number[], b: I.vec2 | number[], arg: any) => void, arg: any): Float32Array;

            /**
             * Perform some operation over an array of vec2s.
             *
             * @param a the array of vectors to iterate over
             * @param stride Number of elements between the start of each vec2. If 0 assumes tightly packed
             * @param offset Number of elements to skip at the beginning of the array
             * @param count Number of vec2s to iterate over. If 0 iterates over entire array
             * @param fn Function to call for each vector in the array
             * @returns a
             */
            function forEach(a: Float32Array, stride: number, offset: number, count: number,
                                    fn: (a: I.vec2 | number[], b: I.vec2 | number[]) => void): Float32Array;

            /**
             * Returns a string representation of a vector
             *
             * @param a vector to represent as a string
             * @returns string representation of the vector
             */
            function str(a: I.vec2 | number[]): string;

            /**
             * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
             *
             * @param a The first vector.
             * @param b The second vector.
             * @returns True if the vectors are equal, false otherwise.
             */
            function exactEquals(a: I.vec2 | number[], b: I.vec2 | number[]): boolean;

            /**
             * Returns whether or not the vectors have approximately the same elements in the same position.
             *
             * @param a The first vector.
             * @param b The second vector.
             * @returns True if the vectors are equal, false otherwise.
             */
            function equals(a: I.vec2 | number[], b: I.vec2 | number[]): boolean;
        }

        namespace I {
            type vec3 = Float32Array;
        }

        /**
         * 3 Dimensional Vector
         */
        namespace vec3 {
            /**
             * Creates a new, empty vec3
             *
             * @returns a new 3D vector
             */
            function create(): I.vec3;

            /**
             * Creates a new vec3 initialized with values from an existing vector
             *
             * @param a vector to clone
             * @returns a new 3D vector
             */
            function clone(a: I.vec3 | number[]): I.vec3;

            /**
             * Creates a new vec3 initialized with the given values
             *
             * @param x X component
             * @param y Y component
             * @param z Z component
             * @returns a new 3D vector
             */
            function fromValues(x: number, y: number, z: number): I.vec3;

            /**
             * Copy the values from one vec3 to another
             *
             * @param out the receiving vector
             * @param a the source vector
             * @returns out
             */
            function copy(out: I.vec3, a: I.vec3 | number[]): I.vec3;

            /**
             * Set the components of a vec3 to the given values
             *
             * @param out the receiving vector
             * @param x X component
             * @param y Y component
             * @param z Z component
             * @returns out
             */
            function set(out: I.vec3, x: number, y: number, z: number): I.vec3;

            /**
             * Adds two vec3's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function add(out: I.vec3, a: I.vec3 | number[], b: I.vec3 | number[]): I.vec3;

            /**
             * Subtracts vector b from vector a
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function subtract(out: I.vec3, a: I.vec3 | number[], b: I.vec3 | number[]): I.vec3;

            /**
             * Subtracts vector b from vector a
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function sub(out: I.vec3, a: I.vec3 | number[], b: I.vec3 | number[]): I.vec3;

            /**
             * Multiplies two vec3's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function multiply(out: I.vec3, a: I.vec3 | number[], b: I.vec3 | number[]): I.vec3;

            /**
             * Multiplies two vec3's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function mul(out: I.vec3, a: I.vec3 | number[], b: I.vec3 | number[]): I.vec3;

            /**
             * Divides two vec3's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function divide(out: I.vec3, a: I.vec3 | number[], b: I.vec3 | number[]): I.vec3;

            /**
             * Divides two vec3's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function div(out: I.vec3, a: I.vec3 | number[], b: I.vec3 | number[]): I.vec3;

            /**
             * Math.ceil the components of a vec3
             *
             * @param out the receiving vector
             * @param a vector to ceil
             * @returns out
             */
            function ceil(out: I.vec3, a: I.vec3 | number[]): I.vec3;

            /**
             * Math.floor the components of a vec3
             *
             * @param out the receiving vector
             * @param a vector to floor
             * @returns out
             */
            function floor(out: I.vec3, a: I.vec3 | number[]): I.vec3;

            /**
             * Returns the minimum of two vec3's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function min(out: I.vec3, a: I.vec3 | number[], b: I.vec3 | number[]): I.vec3;

            /**
             * Returns the maximum of two vec3's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function max(out: I.vec3, a: I.vec3 | number[], b: I.vec3 | number[]): I.vec3;

            /**
             * Math.round the components of a vec3
             *
             * @param out the receiving vector
             * @param a vector to round
             * @returns out
             */
            function round(out: I.vec3, a: I.vec3 | number[]): I.vec3;

            /**
             * Scales a vec3 by a scalar number
             *
             * @param out the receiving vector
             * @param a the vector to scale
             * @param b amount to scale the vector by
             * @returns out
             */
            function scale(out: I.vec3, a: I.vec3 | number[], b: number): I.vec3;

            /**
             * Adds two vec3's after scaling the second operand by a scalar value
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @param scale the amount to scale b by before adding
             * @returns out
             */
            function scaleAndAdd(out: I.vec3, a: I.vec3 | number[], b: I.vec3 | number[], scale: number): I.vec3;

            /**
             * Calculates the euclidian distance between two vec3's
             *
             * @param a the first operand
             * @param b the second operand
             * @returns distance between a and b
             */
            function distance(a: I.vec3 | number[], b: I.vec3 | number[]): number;

            /**
             * Calculates the euclidian distance between two vec3's
             *
             * @param a the first operand
             * @param b the second operand
             * @returns distance between a and b
             */
            function dist(a: I.vec3 | number[], b: I.vec3 | number[]): number;

            /**
             * Calculates the squared euclidian distance between two vec3's
             *
             * @param a the first operand
             * @param b the second operand
             * @returns squared distance between a and b
             */
            function squaredDistance(a: I.vec3 | number[], b: I.vec3 | number[]): number;

            /**
             * Calculates the squared euclidian distance between two vec3's
             *
             * @param a the first operand
             * @param b the second operand
             * @returns squared distance between a and b
             */
            function sqrDist(a: I.vec3 | number[], b: I.vec3 | number[]): number;

            /**
             * Calculates the length of a vec3
             *
             * @param a vector to calculate length of
             * @returns length of a
             */
            function length(a: I.vec3 | number[]): number;

            /**
             * Calculates the length of a vec3
             *
             * @param a vector to calculate length of
             * @returns length of a
             */
            function len(a: I.vec3 | number[]): number;

            /**
             * Calculates the squared length of a vec3
             *
             * @param a vector to calculate squared length of
             * @returns squared length of a
             */
            function squaredLength(a: I.vec3 | number[]): number;

            /**
             * Calculates the squared length of a vec3
             *
             * @param a vector to calculate squared length of
             * @returns squared length of a
             */
            function sqrLen(a: I.vec3 | number[]): number;

            /**
             * Negates the components of a vec3
             *
             * @param out the receiving vector
             * @param a vector to negate
             * @returns out
             */
            function negate(out: I.vec3, a: I.vec3 | number[]): I.vec3;

            /**
             * Returns the inverse of the components of a vec3
             *
             * @param out the receiving vector
             * @param a vector to invert
             * @returns out
             */
            function inverse(out: I.vec3, a: I.vec3 | number[]): I.vec3;

            /**
             * Normalize a vec3
             *
             * @param out the receiving vector
             * @param a vector to normalize
             * @returns out
             */
            function normalize(out: I.vec3, a: I.vec3 | number[]): I.vec3;

            /**
             * Calculates the dot product of two vec3's
             *
             * @param a the first operand
             * @param b the second operand
             * @returns dot product of a and b
             */
            function dot(a: I.vec3 | number[], b: I.vec3 | number[]): number;

            /**
             * Computes the cross product of two vec3's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function cross(out: I.vec3, a: I.vec3 | number[], b: I.vec3 | number[]): I.vec3;

            /**
             * Performs a linear interpolation between two vec3's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @param t interpolation amount between the two inputs
             * @returns out
             */
            function lerp(out: I.vec3, a: I.vec3 | number[], b: I.vec3 | number[], t: number): I.vec3;

            /**
             * Performs a hermite interpolation with two control points
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @param c the third operand
             * @param d the fourth operand
             * @param t interpolation amount between the two inputs
             * @returns out
             */
            function hermite(out: I.vec3, a: I.vec3 | number[], b: I.vec3 | number[], c: I.vec3 | number[], d: I.vec3 | number[], t: number): I.vec3;

            /**
             * Performs a bezier interpolation with two control points
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @param c the third operand
             * @param d the fourth operand
             * @param t interpolation amount between the two inputs
             * @returns out
             */
            function bezier(out: I.vec3, a: I.vec3 | number[], b: I.vec3 | number[], c: I.vec3 | number[], d: I.vec3 | number[], t: number): I.vec3;

            /**
             * Generates a random unit vector
             *
             * @param out the receiving vector
             * @returns out
             */
            function random(out: I.vec3): I.vec3;

            /**
             * Generates a random vector with the given scale
             *
             * @param out the receiving vector
             * @param [scale] Length of the resulting vector. If omitted, a unit vector will be returned
             * @returns out
             */
            function random(out: I.vec3, scale: number): I.vec3;

            /**
             * Transforms the vec3 with a mat3.
             *
             * @param out the receiving vector
             * @param a the vector to transform
             * @param m the 3x3 matrix to transform with
             * @returns out
             */
            function transformMat3(out: I.vec3, a: I.vec3 | number[], m: I.mat3): I.vec3;

            /**
             * Transforms the vec3 with a mat4.
             * 4th vector component is implicitly '1'
             *
             * @param out the receiving vector
             * @param a the vector to transform
             * @param m matrix to transform with
             * @returns out
             */
            function transformMat4(out: I.vec3, a: I.vec3 | number[], m: I.mat4): I.vec3;

             /**
              * Transforms the vec3 with a quat
              *
              * @param out the receiving vector
              * @param a the vector to transform
              * @param q quaternion to transform with
              * @returns out
              */
            function transformQuat(out: I.vec3, a: I.vec3 | number[], q: I.quat): I.vec3;

            /**
             * Rotate a 3D vector around the x-axis
             * @param out The receiving vec3
             * @param a The vec3 point to rotate
             * @param b The origin of the rotation
             * @param c The angle of rotation
             * @returns out
             */
            function rotateX(out: I.vec3, a: I.vec3 | number[], b: I.vec3 | number[], c: number): I.vec3;

            /**
             * Rotate a 3D vector around the y-axis
             * @param out The receiving vec3
             * @param a The vec3 point to rotate
             * @param b The origin of the rotation
             * @param c The angle of rotation
             * @returns out
             */
            function rotateY(out: I.vec3, a: I.vec3 | number[], b: I.vec3 | number[], c: number): I.vec3;

            /**
             * Rotate a 3D vector around the z-axis
             * @param out The receiving vec3
             * @param a The vec3 point to rotate
             * @param b The origin of the rotation
             * @param c The angle of rotation
             * @returns out
             */
            function rotateZ(out: I.vec3, a: I.vec3 | number[], b: I.vec3 | number[], c: number): I.vec3;

            /**
             * Perform some operation over an array of vec3s.
             *
             * @param a the array of vectors to iterate over
             * @param stride Number of elements between the start of each vec3. If 0 assumes tightly packed
             * @param offset Number of elements to skip at the beginning of the array
             * @param count Number of vec3s to iterate over. If 0 iterates over entire array
             * @param fn Function to call for each vector in the array
             * @param arg additional argument to pass to fn
             * @returns a
             */
            function forEach(a: Float32Array, stride: number, offset: number, count: number,
                                  fn: (a: I.vec3 | number[], b: I.vec3 | number[], arg: any) => void, arg: any): Float32Array;

            /**
             * Perform some operation over an array of vec3s.
             *
             * @param a the array of vectors to iterate over
             * @param stride Number of elements between the start of each vec3. If 0 assumes tightly packed
             * @param offset Number of elements to skip at the beginning of the array
             * @param count Number of vec3s to iterate over. If 0 iterates over entire array
             * @param fn Function to call for each vector in the array
             * @returns a
             */
            function forEach(a: Float32Array, stride: number, offset: number, count: number,
                                  fn: (a: I.vec3 | number[], b: I.vec3 | number[]) => void): Float32Array;

            /**
             * Get the angle between two 3D vectors
             * @param a The first operand
             * @param b The second operand
             * @returns The angle in radians
             */
            function angle(a: I.vec3 | number[], b: I.vec3 | number[]): number;

            /**
             * Returns a string representation of a vector
             *
             * @param a vector to represent as a string
             * @returns string representation of the vector
             */
            function str(a: I.vec3 | number[]): string;

            /**
             * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
             *
             * @param a The first vector.
             * @param b The second vector.
             * @returns True if the vectors are equal, false otherwise.
             */
            function exactEquals(a: I.vec3 | number[], b: I.vec3 | number[]): boolean;

            /**
             * Returns whether or not the vectors have approximately the same elements in the same position.
             *
             * @param a The first vector.
             * @param b The second vector.
             * @returns True if the vectors are equal, false otherwise.
             */
            function equals(a: I.vec3 | number[], b: I.vec3 | number[]): boolean;
        }

        namespace I {
            type vec4 = Float32Array;
        }

        /**
         * 4 Dimensional Vector
         */
        namespace vec4 {
            /**
             * Creates a new, empty vec4
             *
             * @returns a new 4D vector
             */
            function create(): I.vec4;

            /**
             * Creates a new vec4 initialized with values from an existing vector
             *
             * @param a vector to clone
             * @returns a new 4D vector
             */
            function clone(a: I.vec4 | number[]): I.vec4;

            /**
             * Creates a new vec4 initialized with the given values
             *
             * @param x X component
             * @param y Y component
             * @param z Z component
             * @param w W component
             * @returns a new 4D vector
             */
            function fromValues(x: number, y: number, z: number, w: number): I.vec4;

            /**
             * Copy the values from one vec4 to another
             *
             * @param out the receiving vector
             * @param a the source vector
             * @returns out
             */
            function copy(out: I.vec4, a: I.vec4 | number[]): I.vec4;

            /**
             * Set the components of a vec4 to the given values
             *
             * @param out the receiving vector
             * @param x X component
             * @param y Y component
             * @param z Z component
             * @param w W component
             * @returns out
             */
            function set(out: I.vec4, x: number, y: number, z: number, w: number): I.vec4;

            /**
             * Adds two vec4's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function add(out: I.vec4, a: I.vec4 | number[], b: I.vec4 | number[]): I.vec4;

            /**
             * Subtracts vector b from vector a
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function subtract(out: I.vec4, a: I.vec4 | number[], b: I.vec4 | number[]): I.vec4;

            /**
             * Subtracts vector b from vector a
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function sub(out: I.vec4, a: I.vec4 | number[], b: I.vec4 | number[]): I.vec4;

            /**
             * Multiplies two vec4's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function multiply(out: I.vec4, a: I.vec4 | number[], b: I.vec4 | number[]): I.vec4;

            /**
             * Multiplies two vec4's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function mul(out: I.vec4, a: I.vec4 | number[], b: I.vec4 | number[]): I.vec4;

            /**
             * Divides two vec4's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function divide(out: I.vec4, a: I.vec4 | number[], b: I.vec4 | number[]): I.vec4;

            /**
             * Divides two vec4's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function div(out: I.vec4, a: I.vec4 | number[], b: I.vec4 | number[]): I.vec4;

            /**
             * Math.ceil the components of a vec4
             *
             * @param out the receiving vector
             * @param a vector to ceil
             * @returns out
             */
            function ceil(out: I.vec4, a: I.vec4 | number[]): I.vec4;

            /**
             * Math.floor the components of a vec4
             *
             * @param out the receiving vector
             * @param a vector to floor
             * @returns out
             */
            function floor(out: I.vec4, a: I.vec4 | number[]): I.vec4;

            /**
             * Returns the minimum of two vec4's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function min(out: I.vec4, a: I.vec4 | number[], b: I.vec4 | number[]): I.vec4;

            /**
             * Returns the maximum of two vec4's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function max(out: I.vec4, a: I.vec4 | number[], b: I.vec4 | number[]): I.vec4;

            /**
             * Math.round the components of a vec4
             *
             * @param out the receiving vector
             * @param a vector to round
             * @returns out
             */
            function round(out: I.vec4, a: I.vec4 | number[]): I.vec4;

            /**
             * Scales a vec4 by a scalar number
             *
             * @param out the receiving vector
             * @param a the vector to scale
             * @param b amount to scale the vector by
             * @returns out
             */
            function scale(out: I.vec4, a: I.vec4 | number[], b: number): I.vec4;

            /**
             * Adds two vec4's after scaling the second operand by a scalar value
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @param scale the amount to scale b by before adding
             * @returns out
             */
            function scaleAndAdd(out: I.vec4, a: I.vec4 | number[], b: I.vec4 | number[], scale: number): I.vec4;

            /**
             * Calculates the euclidian distance between two vec4's
             *
             * @param a the first operand
             * @param b the second operand
             * @returns distance between a and b
             */
            function distance(a: I.vec4 | number[], b: I.vec4 | number[]): number;

            /**
             * Calculates the euclidian distance between two vec4's
             *
             * @param a the first operand
             * @param b the second operand
             * @returns distance between a and b
             */
            function dist(a: I.vec4 | number[], b: I.vec4 | number[]): number;

            /**
             * Calculates the squared euclidian distance between two vec4's
             *
             * @param a the first operand
             * @param b the second operand
             * @returns squared distance between a and b
             */
            function squaredDistance(a: I.vec4 | number[], b: I.vec4 | number[]): number;

            /**
             * Calculates the squared euclidian distance between two vec4's
             *
             * @param a the first operand
             * @param b the second operand
             * @returns squared distance between a and b
             */
            function sqrDist(a: I.vec4 | number[], b: I.vec4 | number[]): number;

            /**
             * Calculates the length of a vec4
             *
             * @param a vector to calculate length of
             * @returns length of a
             */
            function length(a: I.vec4 | number[]): number;

            /**
             * Calculates the length of a vec4
             *
             * @param a vector to calculate length of
             * @returns length of a
             */
            function len(a: I.vec4 | number[]): number;

            /**
             * Calculates the squared length of a vec4
             *
             * @param a vector to calculate squared length of
             * @returns squared length of a
             */
            function squaredLength(a: I.vec4 | number[]): number;

            /**
             * Calculates the squared length of a vec4
             *
             * @param a vector to calculate squared length of
             * @returns squared length of a
             */
            function sqrLen(a: I.vec4 | number[]): number;

            /**
             * Negates the components of a vec4
             *
             * @param out the receiving vector
             * @param a vector to negate
             * @returns out
             */
            function negate(out: I.vec4, a: I.vec4 | number[]): I.vec4;

            /**
             * Returns the inverse of the components of a vec4
             *
             * @param out the receiving vector
             * @param a vector to invert
             * @returns out
             */
            function inverse(out: I.vec4, a: I.vec4 | number[]): I.vec4;

            /**
             * Normalize a vec4
             *
             * @param out the receiving vector
             * @param a vector to normalize
             * @returns out
             */
            function normalize(out: I.vec4, a: I.vec4 | number[]): I.vec4;

            /**
             * Calculates the dot product of two vec4's
             *
             * @param a the first operand
             * @param b the second operand
             * @returns dot product of a and b
             */
            function dot(a: I.vec4 | number[], b: I.vec4 | number[]): number;

            /**
             * Performs a linear interpolation between two vec4's
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @param t interpolation amount between the two inputs
             * @returns out
             */
            function lerp(out: I.vec4, a: I.vec4 | number[], b: I.vec4 | number[], t: number): I.vec4;

            /**
             * Generates a random unit vector
             *
             * @param out the receiving vector
             * @returns out
             */
            function random(out: I.vec4): I.vec4;

            /**
             * Generates a random vector with the given scale
             *
             * @param out the receiving vector
             * @param scale length of the resulting vector. If ommitted, a unit vector will be returned
             * @returns out
             */
            function random(out: I.vec4, scale: number): I.vec4;

            /**
             * Transforms the vec4 with a mat4.
             *
             * @param out the receiving vector
             * @param a the vector to transform
             * @param m matrix to transform with
             * @returns out
             */
            function transformMat4(out: I.vec4, a: I.vec4 | number[], m: I.mat4): I.vec4;

            /**
             * Transforms the vec4 with a quat
             *
             * @param out the receiving vector
             * @param a the vector to transform
             * @param q quaternion to transform with
             * @returns out
             */

            function transformQuat(out: I.vec4, a: I.vec4 | number[], q: I.quat): I.vec4;

            /**
             * Perform some operation over an array of vec4s.
             *
             * @param a the array of vectors to iterate over
             * @param stride Number of elements between the start of each vec4. If 0 assumes tightly packed
             * @param offset Number of elements to skip at the beginning of the array
             * @param count Number of vec4s to iterate over. If 0 iterates over entire array
             * @param fn Function to call for each vector in the array
             * @param arg additional argument to pass to fn
             * @returns a
             */
            function forEach(a: Float32Array, stride: number, offset: number, count: number,
                                  fn: (a: I.vec4 | number[], b: I.vec4 | number[], arg: any) => void, arg: any): Float32Array;

            /**
             * Perform some operation over an array of vec4s.
             *
             * @param a the array of vectors to iterate over
             * @param stride Number of elements between the start of each vec4. If 0 assumes tightly packed
             * @param offset Number of elements to skip at the beginning of the array
             * @param count Number of vec4s to iterate over. If 0 iterates over entire array
             * @param fn Function to call for each vector in the array
             * @returns a
             */
            function forEach(a: Float32Array, stride: number, offset: number, count: number,
                                  fn: (a: I.vec4 | number[], b: I.vec4 | number[]) => void): Float32Array;

            /**
             * Returns a string representation of a vector
             *
             * @param a vector to represent as a string
             * @returns string representation of the vector
             */
            function str(a: I.vec4 | number[]): string;

            /**
             * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
             *
             * @param a The first vector.
             * @param b The second vector.
             * @returns True if the vectors are equal, false otherwise.
             */
            function exactEquals(a: I.vec4 | number[], b: I.vec4 | number[]): boolean;

            /**
             * Returns whether or not the vectors have approximately the same elements in the same position.
             *
             * @param a The first vector.
             * @param b The second vector.
             * @returns True if the vectors are equal, false otherwise.
             */
            function equals(a: I.vec4 | number[], b: I.vec4 | number[]): boolean;
        }

        namespace I {
            type mat2 = Float32Array;
        }

        /**
         * 2x2 Matrix
         */
        namespace mat2 {
            /**
             * Creates a new identity mat2
             *
             * @returns a new 2x2 matrix
             */
            function create(): I.mat2;

            /**
             * Creates a new mat2 initialized with values from an existing matrix
             *
             * @param a matrix to clone
             * @returns a new 2x2 matrix
             */
            function clone(a: I.mat2): I.mat2;

            /**
             * Copy the values from one mat2 to another
             *
             * @param out the receiving matrix
             * @param a the source matrix
             * @returns out
             */
            function copy(out: I.mat2, a: I.mat2): I.mat2;

            /**
             * Set a mat2 to the identity matrix
             *
             * @param out the receiving matrix
             * @returns out
             */
            function identity(out: I.mat2): I.mat2;

            /**
             * Create a new mat2 with the given values
             *
             * @param m00 Component in column 0, row 0 position (index 0)
             * @param m01 Component in column 0, row 1 position (index 1)
             * @param m10 Component in column 1, row 0 position (index 2)
             * @param m11 Component in column 1, row 1 position (index 3)
             * @returns out A new 2x2 matrix
             */
            function fromValues(m00: number, m01: number, m10: number, m11: number): I.mat2;

            /**
             * Set the components of a mat2 to the given values
             *
             * @param out the receiving matrix
             * @param m00 Component in column 0, row 0 position (index 0)
             * @param m01 Component in column 0, row 1 position (index 1)
             * @param m10 Component in column 1, row 0 position (index 2)
             * @param m11 Component in column 1, row 1 position (index 3)
             * @returns out
             */
            function set(out: I.mat2, m00: number, m01: number, m10: number, m11: number): I.mat2;

            /**
             * Transpose the values of a mat2
             *
             * @param out the receiving matrix
             * @param a the source matrix
             * @returns out
             */
            function transpose(out: I.mat2, a: I.mat2): I.mat2;

            /**
             * Inverts a mat2
             *
             * @param out the receiving matrix
             * @param a the source matrix
             * @returns out
             */
            function invert(out: I.mat2, a: I.mat2): I.mat2 | null;

            /**
             * Calculates the adjugate of a mat2
             *
             * @param out the receiving matrix
             * @param a the source matrix
             * @returns out
             */
            function adjoint(out: I.mat2, a: I.mat2): I.mat2;

            /**
             * Calculates the determinant of a mat2
             *
             * @param a the source matrix
             * @returns determinant of a
             */
            function determinant(a: I.mat2): number;

            /**
             * Multiplies two mat2's
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function multiply(out: I.mat2, a: I.mat2, b: I.mat2): I.mat2;

            /**
             * Multiplies two mat2's
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function mul(out: I.mat2, a: I.mat2, b: I.mat2): I.mat2;

            /**
             * Rotates a mat2 by the given angle
             *
             * @param out the receiving matrix
             * @param a the matrix to rotate
             * @param rad the angle to rotate the matrix by
             * @returns out
             */
            function rotate(out: I.mat2, a: I.mat2, rad: number): I.mat2;

            /**
             * Scales the mat2 by the dimensions in the given vec2
             *
             * @param out the receiving matrix
             * @param a the matrix to rotate
             * @param v the vec2 to scale the matrix by
             * @returns out
             */
            function scale(out: I.mat2, a: I.mat2, v: I.vec2 | number[]): I.mat2;

            /**
             * Creates a matrix from a given angle
             * This is equivalent to (but much faster than):
             *
             *     mat2.identity(dest);
             *     mat2.rotate(dest, dest, rad);
             *
             * @param out mat2 receiving operation result
             * @param rad the angle to rotate the matrix by
             * @returns out
             */
            function fromRotation(out: I.mat2, rad: number): I.mat2;

            /**
             * Creates a matrix from a vector scaling
             * This is equivalent to (but much faster than):
             *
             *     mat2.identity(dest);
             *     mat2.scale(dest, dest, vec);
             *
             * @param out mat2 receiving operation result
             * @param v Scaling vector
             * @returns out
             */
            function fromScaling(out: I.mat2, v: I.vec2 | number[]): I.mat2;

            /**
             * Returns a string representation of a mat2
             *
             * @param a matrix to represent as a string
             * @returns string representation of the matrix
             */
            function str(a: I.mat2): string;

            /**
             * Returns Frobenius norm of a mat2
             *
             * @param a the matrix to calculate Frobenius norm of
             * @returns Frobenius norm
             */
            function frob(a: I.mat2): number;

            /**
             * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
             * @param L the lower triangular matrix
             * @param D the diagonal matrix
             * @param U the upper triangular matrix
             * @param a the input matrix to factorize
             */
            function LDU(L: I.mat2, D: I.mat2, U: I.mat2, a: I.mat2): I.mat2;

            /**
             * Adds two mat2's
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function add(out: I.mat2, a: I.mat2, b: I.mat2): I.mat2;

            /**
             * Subtracts matrix b from matrix a
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function subtract(out: I.mat2, a: I.mat2, b: I.mat2): I.mat2;

            /**
             * Subtracts matrix b from matrix a
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function sub(out: I.mat2, a: I.mat2, b: I.mat2): I.mat2;

            /**
             * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
             *
             * @param a The first matrix.
             * @param b The second matrix.
             * @returns True if the matrices are equal, false otherwise.
             */
            function exactEquals(a: I.mat2, b: I.mat2): boolean;

            /**
             * Returns whether or not the matrices have approximately the same elements in the same position.
             *
             * @param a The first matrix.
             * @param b The second matrix.
             * @returns True if the matrices are equal, false otherwise.
             */
            function equals(a: I.mat2, b: I.mat2): boolean;

            /**
             * Multiply each element of the matrix by a scalar.
             *
             * @param out the receiving matrix
             * @param a the matrix to scale
             * @param b amount to scale the matrix's elements by
             * @returns out
             */
            function multiplyScalar(out: I.mat2, a: I.mat2, b: number): I.mat2;

            /**
             * Adds two mat2's after multiplying each element of the second operand by a scalar value.
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @param scale the amount to scale b's elements by before adding
             * @returns out
             */
            function multiplyScalarAndAdd(out: I.mat2, a: I.mat2, b: I.mat2, scale: number): I.mat2;
        }

        namespace I {
            type mat2d = Float32Array;
        }

        /**
         * 2x3 Matrix
         */
        namespace mat2d {
            /**
             * Creates a new identity mat2d
             *
             * @returns a new 2x3 matrix
             */
            function create(): I.mat2d;

            /**
             * Creates a new mat2d initialized with values from an existing matrix
             *
             * @param a matrix to clone
             * @returns a new 2x3 matrix
             */
            function clone(a: I.mat2d): I.mat2d;

            /**
             * Copy the values from one mat2d to another
             *
             * @param out the receiving matrix
             * @param a the source matrix
             * @returns out
             */
            function copy(out: I.mat2d, a: I.mat2d): I.mat2d;

            /**
             * Set a mat2d to the identity matrix
             *
             * @param out the receiving matrix
             * @returns out
             */
            function identity(out: I.mat2d): I.mat2d;

            /**
             * Create a new mat2d with the given values
             *
             * @param a Component A (index 0)
             * @param b Component B (index 1)
             * @param c Component C (index 2)
             * @param d Component D (index 3)
             * @param tx Component TX (index 4)
             * @param ty Component TY (index 5)
             * @returns A new mat2d
             */
            function fromValues(a: number, b: number, c: number, d: number, tx: number, ty: number): I.mat2d;

            /**
             * Set the components of a mat2d to the given values
             *
             * @param out the receiving matrix
             * @param a Component A (index 0)
             * @param b Component B (index 1)
             * @param c Component C (index 2)
             * @param d Component D (index 3)
             * @param tx Component TX (index 4)
             * @param ty Component TY (index 5)
             * @returns out
             */
            function set(out: I.mat2d, a: number, b: number, c: number, d: number, tx: number, ty: number): I.mat2d;

            /**
             * Inverts a mat2d
             *
             * @param out the receiving matrix
             * @param a the source matrix
             * @returns out
             */
            function invert(out: I.mat2d, a: I.mat2d): I.mat2d | null;

            /**
             * Calculates the determinant of a mat2d
             *
             * @param a the source matrix
             * @returns determinant of a
             */
            function determinant(a: I.mat2d): number;

            /**
             * Multiplies two mat2d's
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function multiply(out: I.mat2d, a: I.mat2d, b: I.mat2d): I.mat2d;

            /**
             * Multiplies two mat2d's
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function mul(out: I.mat2d, a: I.mat2d, b: I.mat2d): I.mat2d;

            /**
             * Rotates a mat2d by the given angle
             *
             * @param out the receiving matrix
             * @param a the matrix to rotate
             * @param rad the angle to rotate the matrix by
             * @returns out
             */
            function rotate(out: I.mat2d, a: I.mat2d, rad: number): I.mat2d;

            /**
             * Scales the mat2d by the dimensions in the given vec2
             *
             * @param out the receiving matrix
             * @param a the matrix to translate
             * @param v the vec2 to scale the matrix by
             * @returns out
             */
            function scale(out: I.mat2d, a: I.mat2d, v: I.vec2 | number[]): I.mat2d;

            /**
             * Translates the mat2d by the dimensions in the given vec2
             *
             * @param out the receiving matrix
             * @param a the matrix to translate
             * @param v the vec2 to translate the matrix by
             * @returns out
             */
            function translate(out: I.mat2d, a: I.mat2d, v: I.vec2 | number[]): I.mat2d;

            /**
             * Creates a matrix from a given angle
             * This is equivalent to (but much faster than):
             *
             *     mat2d.identity(dest);
             *     mat2d.rotate(dest, dest, rad);
             *
             * @param out mat2d receiving operation result
             * @param rad the angle to rotate the matrix by
             * @returns out
             */
            function fromRotation(out: I.mat2d, rad: number): I.mat2d;

            /**
             * Creates a matrix from a vector scaling
             * This is equivalent to (but much faster than):
             *
             *     mat2d.identity(dest);
             *     mat2d.scale(dest, dest, vec);
             *
             * @param out mat2d receiving operation result
             * @param v Scaling vector
             * @returns out
             */
            function fromScaling(out: I.mat2d, v: I.vec2 | number[]): I.mat2d;

            /**
             * Creates a matrix from a vector translation
             * This is equivalent to (but much faster than):
             *
             *     mat2d.identity(dest);
             *     mat2d.translate(dest, dest, vec);
             *
             * @param out mat2d receiving operation result
             * @param v Translation vector
             * @returns out
             */
            function fromTranslation(out: I.mat2d, v: I.vec2 | number[]): I.mat2d;

            /**
             * Returns a string representation of a mat2d
             *
             * @param a matrix to represent as a string
             * @returns string representation of the matrix
             */
            function str(a: I.mat2d): string;

            /**
             * Returns Frobenius norm of a mat2d
             *
             * @param a the matrix to calculate Frobenius norm of
             * @returns Frobenius norm
             */
            function frob(a: I.mat2d): number;

            /**
             * Adds two mat2d's
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function add(out: I.mat2d, a: I.mat2d, b: I.mat2d): I.mat2d;

            /**
             * Subtracts matrix b from matrix a
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function subtract(out: I.mat2d, a: I.mat2d, b: I.mat2d): I.mat2d;

            /**
             * Subtracts matrix b from matrix a
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function sub(out: I.mat2d, a: I.mat2d, b: I.mat2d): I.mat2d;

            /**
             * Multiply each element of the matrix by a scalar.
             *
             * @param out the receiving matrix
             * @param a the matrix to scale
             * @param b amount to scale the matrix's elements by
             * @returns out
             */
            function multiplyScalar(out: I.mat2d, a: I.mat2d, b: number): I.mat2d;

            /**
             * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @param scale the amount to scale b's elements by before adding
             * @returns out
             */
            function multiplyScalarAndAdd(out: I.mat2d, a: I.mat2d, b: I.mat2d, scale: number): I.mat2d;

            /**
             * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
             *
             * @param a The first matrix.
             * @param b The second matrix.
             * @returns True if the matrices are equal, false otherwise.
             */
            function exactEquals(a: I.mat2d, b: I.mat2d): boolean;

            /**
             * Returns whether or not the matrices have approximately the same elements in the same position.
             *
             * @param a The first matrix.
             * @param b The second matrix.
             * @returns True if the matrices are equal, false otherwise.
             */
            function equals(a: I.mat2d, b: I.mat2d): boolean;
        }

        namespace I {
            type mat3 = Float32Array;
        }

        /**
         * 3x3 Matrix
         */
        namespace mat3 {
            /**
             * Creates a new identity mat3
             *
             * @returns a new 3x3 matrix
             */
            function create(): I.mat3;

            /**
             * Copies the upper-left 3x3 values into the given mat3.
             *
             * @param out the receiving 3x3 matrix
             * @param a   the source 4x4 matrix
             * @returns out
             */
            function fromMat4(out: I.mat3, a: I.mat4): I.mat3;

            /**
             * Creates a new mat3 initialized with values from an existing matrix
             *
             * @param a matrix to clone
             * @returns a new 3x3 matrix
             */
            function clone(a: I.mat3): I.mat3;

            /**
             * Copy the values from one mat3 to another
             *
             * @param out the receiving matrix
             * @param a the source matrix
             * @returns out
             */
            function copy(out: I.mat3, a: I.mat3): I.mat3;

            /**
             * Create a new mat3 with the given values
             *
             * @param m00 Component in column 0, row 0 position (index 0)
             * @param m01 Component in column 0, row 1 position (index 1)
             * @param m02 Component in column 0, row 2 position (index 2)
             * @param m10 Component in column 1, row 0 position (index 3)
             * @param m11 Component in column 1, row 1 position (index 4)
             * @param m12 Component in column 1, row 2 position (index 5)
             * @param m20 Component in column 2, row 0 position (index 6)
             * @param m21 Component in column 2, row 1 position (index 7)
             * @param m22 Component in column 2, row 2 position (index 8)
             * @returns A new mat3
             */
            function fromValues(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): I.mat3;

            /**
             * Set the components of a mat3 to the given values
             *
             * @param out the receiving matrix
             * @param m00 Component in column 0, row 0 position (index 0)
             * @param m01 Component in column 0, row 1 position (index 1)
             * @param m02 Component in column 0, row 2 position (index 2)
             * @param m10 Component in column 1, row 0 position (index 3)
             * @param m11 Component in column 1, row 1 position (index 4)
             * @param m12 Component in column 1, row 2 position (index 5)
             * @param m20 Component in column 2, row 0 position (index 6)
             * @param m21 Component in column 2, row 1 position (index 7)
             * @param m22 Component in column 2, row 2 position (index 8)
             * @returns out
             */
            function set(out: I.mat3, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): I.mat3;

            /**
             * Set a mat3 to the identity matrix
             *
             * @param out the receiving matrix
             * @returns out
             */
            function identity(out: I.mat3): I.mat3;

            /**
             * Transpose the values of a mat3
             *
             * @param out the receiving matrix
             * @param a the source matrix
             * @returns out
             */
            function transpose(out: I.mat3, a: I.mat3): I.mat3;

            /**
             * Inverts a mat3
             *
             * @param out the receiving matrix
             * @param a the source matrix
             * @returns out
             */
            function invert(out: I.mat3, a: I.mat3): I.mat3 | null;

            /**
             * Calculates the adjugate of a mat3
             *
             * @param out the receiving matrix
             * @param a the source matrix
             * @returns out
             */
            function adjoint(out: I.mat3, a: I.mat3): I.mat3;

            /**
             * Calculates the determinant of a mat3
             *
             * @param a the source matrix
             * @returns determinant of a
             */
            function determinant(a: I.mat3): number;

            /**
             * Multiplies two mat3's
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function multiply(out: I.mat3, a: I.mat3, b: I.mat3): I.mat3;

            /**
             * Multiplies two mat3's
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function mul(out: I.mat3, a: I.mat3, b: I.mat3): I.mat3;

            /**
             * Translate a mat3 by the given vector
             *
             * @param out the receiving matrix
             * @param a the matrix to translate
             * @param v vector to translate by
             * @returns out
             */
            function translate(out: I.mat3, a: I.mat3, v: I.vec3 | number[]): I.mat3;

            /**
             * Rotates a mat3 by the given angle
             *
             * @param out the receiving matrix
             * @param a the matrix to rotate
             * @param rad the angle to rotate the matrix by
             * @returns out
             */
            function rotate(out: I.mat3, a: I.mat3, rad: number): I.mat3;

            /**
             * Scales the mat3 by the dimensions in the given vec2
             *
             * @param out the receiving matrix
             * @param a the matrix to rotate
             * @param v the vec2 to scale the matrix by
             * @returns out
             */
            function scale(out: I.mat3, a: I.mat3, v: I.vec2 | number[]): I.mat3;

            /**
             * Creates a matrix from a vector translation
             * This is equivalent to (but much faster than):
             *
             *     mat3.identity(dest);
             *     mat3.translate(dest, dest, vec);
             *
             * @param out mat3 receiving operation result
             * @param v Translation vector
             * @returns out
             */
            function fromTranslation(out: I.mat3, v: I.vec2 | number[]): I.mat3;

            /**
             * Creates a matrix from a given angle
             * This is equivalent to (but much faster than):
             *
             *     mat3.identity(dest);
             *     mat3.rotate(dest, dest, rad);
             *
             * @param out mat3 receiving operation result
             * @param rad the angle to rotate the matrix by
             * @returns out
             */
            function fromRotation(out: I.mat3, rad: number): I.mat3;

            /**
             * Creates a matrix from a vector scaling
             * This is equivalent to (but much faster than):
             *
             *     mat3.identity(dest);
             *     mat3.scale(dest, dest, vec);
             *
             * @param out mat3 receiving operation result
             * @param v Scaling vector
             * @returns out
             */
            function fromScaling(out: I.mat3, v: I.vec2 | number[]): I.mat3;

            /**
             * Copies the values from a mat2d into a mat3
             *
             * @param out the receiving matrix
             * @param a the matrix to copy
             * @returns out
             */
            function fromMat2d(out: I.mat3, a: I.mat2d): I.mat3;

            /**
             * Calculates a 3x3 matrix from the given quaternion
             *
             * @param out mat3 receiving operation result
             * @param q Quaternion to create matrix from
             *
             * @returns out
             */
            function fromQuat(out: I.mat3, q: I.quat): I.mat3;

            /**
             * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
             *
             * @param out mat3 receiving operation result
             * @param a Mat4 to derive the normal matrix from
             *
             * @returns out
             */
            function normalFromMat4(out: I.mat3, a: I.mat4): I.mat3 | null;

            /**
             * Returns a string representation of a mat3
             *
             * @param mat matrix to represent as a string
             * @returns string representation of the matrix
             */
            function str(mat: I.mat3): string;

            /**
             * Returns Frobenius norm of a mat3
             *
             * @param a the matrix to calculate Frobenius norm of
             * @returns Frobenius norm
             */
            function frob(a: I.mat3): number;

            /**
             * Adds two mat3's
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function add(out: I.mat3, a: I.mat3, b: I.mat3): I.mat3;

            /**
             * Subtracts matrix b from matrix a
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function subtract(out: I.mat3, a: I.mat3, b: I.mat3): I.mat3;

            /**
             * Subtracts matrix b from matrix a
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function sub(out: I.mat3, a: I.mat3, b: I.mat3): I.mat3;

            /**
             * Multiply each element of the matrix by a scalar.
             *
             * @param out the receiving matrix
             * @param a the matrix to scale
             * @param b amount to scale the matrix's elements by
             * @returns out
             */
            function multiplyScalar(out: I.mat3, a: I.mat3, b: number): I.mat3;

            /**
             * Adds two mat3's after multiplying each element of the second operand by a scalar value.
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @param scale the amount to scale b's elements by before adding
             * @returns out
             */
            function multiplyScalarAndAdd(out: I.mat3, a: I.mat3, b: I.mat3, scale: number): I.mat3;

            /**
             * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
             *
             * @param a The first matrix.
             * @param b The second matrix.
             * @returns True if the matrices are equal, false otherwise.
             */
            function exactEquals(a: I.mat3, b: I.mat3): boolean;

            /**
             * Returns whether or not the matrices have approximately the same elements in the same position.
             *
             * @param a The first matrix.
             * @param b The second matrix.
             * @returns True if the matrices are equal, false otherwise.
             */
            function equals(a: I.mat3, b: I.mat3): boolean;
        }

        namespace I {
            type mat4 = Float32Array;
        }

        /**
         * 4x4 Matrix
         */
        namespace mat4 {
            /**
             * Creates a new identity mat4
             *
             * @returns a new 4x4 matrix
             */
            function create(): I.mat4;

            /**
             * Creates a new mat4 initialized with values from an existing matrix
             *
             * @param a matrix to clone
             * @returns a new 4x4 matrix
             */
            function clone(a: I.mat4): I.mat4;

            /**
             * Copy the values from one mat4 to another
             *
             * @param out the receiving matrix
             * @param a the source matrix
             * @returns out
             */
            function copy(out: I.mat4, a: I.mat4): I.mat4;

            /**
             * Create a new mat4 with the given values
             *
             * @param m00 Component in column 0, row 0 position (index 0)
             * @param m01 Component in column 0, row 1 position (index 1)
             * @param m02 Component in column 0, row 2 position (index 2)
             * @param m03 Component in column 0, row 3 position (index 3)
             * @param m10 Component in column 1, row 0 position (index 4)
             * @param m11 Component in column 1, row 1 position (index 5)
             * @param m12 Component in column 1, row 2 position (index 6)
             * @param m13 Component in column 1, row 3 position (index 7)
             * @param m20 Component in column 2, row 0 position (index 8)
             * @param m21 Component in column 2, row 1 position (index 9)
             * @param m22 Component in column 2, row 2 position (index 10)
             * @param m23 Component in column 2, row 3 position (index 11)
             * @param m30 Component in column 3, row 0 position (index 12)
             * @param m31 Component in column 3, row 1 position (index 13)
             * @param m32 Component in column 3, row 2 position (index 14)
             * @param m33 Component in column 3, row 3 position (index 15)
             * @returns A new mat4
             */
            function fromValues(
                m00: number,
                m01: number,
                m02: number,
                m03: number,
                m10: number,
                m11: number,
                m12: number,
                m13: number,
                m20: number,
                m21: number,
                m22: number,
                m23: number,
                m30: number,
                m31: number,
                m32: number,
                m33: number
            ): I.mat4;

            /**
             * Set the components of a mat4 to the given values
             *
             * @param out the receiving matrix
             * @param m00 Component in column 0, row 0 position (index 0)
             * @param m01 Component in column 0, row 1 position (index 1)
             * @param m02 Component in column 0, row 2 position (index 2)
             * @param m03 Component in column 0, row 3 position (index 3)
             * @param m10 Component in column 1, row 0 position (index 4)
             * @param m11 Component in column 1, row 1 position (index 5)
             * @param m12 Component in column 1, row 2 position (index 6)
             * @param m13 Component in column 1, row 3 position (index 7)
             * @param m20 Component in column 2, row 0 position (index 8)
             * @param m21 Component in column 2, row 1 position (index 9)
             * @param m22 Component in column 2, row 2 position (index 10)
             * @param m23 Component in column 2, row 3 position (index 11)
             * @param m30 Component in column 3, row 0 position (index 12)
             * @param m31 Component in column 3, row 1 position (index 13)
             * @param m32 Component in column 3, row 2 position (index 14)
             * @param m33 Component in column 3, row 3 position (index 15)
             * @returns out
             */
            function set(
                out: I.mat4,
                m00: number,
                m01: number,
                m02: number,
                m03: number,
                m10: number,
                m11: number,
                m12: number,
                m13: number,
                m20: number,
                m21: number,
                m22: number,
                m23: number,
                m30: number,
                m31: number,
                m32: number,
                m33: number
            ): I.mat4;

            /**
             * Set a mat4 to the identity matrix
             *
             * @param out the receiving matrix
             * @returns out
             */
            function identity(out: I.mat4): I.mat4;

            /**
             * Transpose the values of a mat4
             *
             * @param out the receiving matrix
             * @param a the source matrix
             * @returns out
             */
            function transpose(out: I.mat4, a: I.mat4): I.mat4;

            /**
             * Inverts a mat4
             *
             * @param out the receiving matrix
             * @param a the source matrix
             * @returns out
             */
            function invert(out: I.mat4, a: I.mat4): I.mat4 | null;

            /**
             * Calculates the adjugate of a mat4
             *
             * @param out the receiving matrix
             * @param a the source matrix
             * @returns out
             */
            function adjoint(out: I.mat4, a: I.mat4): I.mat4;

            /**
             * Calculates the determinant of a mat4
             *
             * @param a the source matrix
             * @returns determinant of a
             */
            function determinant(a: I.mat4): number;

            /**
             * Multiplies two mat4's
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function multiply(out: I.mat4, a: I.mat4, b: I.mat4): I.mat4;

            /**
             * Multiplies two mat4's
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function mul(out: I.mat4, a: I.mat4, b: I.mat4): I.mat4;

            /**
             * Translate a mat4 by the given vector
             *
             * @param out the receiving matrix
             * @param a the matrix to translate
             * @param v vector to translate by
             * @returns out
             */
            function translate(out: I.mat4, a: I.mat4, v: I.vec3 | number[]): I.mat4;

            /**
             * Scales the mat4 by the dimensions in the given vec3
             *
             * @param out the receiving matrix
             * @param a the matrix to scale
             * @param v the vec3 to scale the matrix by
             * @returns out
             */
            function scale(out: I.mat4, a: I.mat4, v: I.vec3 | number[]): I.mat4;

            /**
             * Rotates a mat4 by the given angle
             *
             * @param out the receiving matrix
             * @param a the matrix to rotate
             * @param rad the angle to rotate the matrix by
             * @param axis the axis to rotate around
             * @returns out
             */
            function rotate(out: I.mat4, a: I.mat4, rad: number, axis: I.vec3 | number[]): I.mat4;

            /**
             * Rotates a matrix by the given angle around the X axis
             *
             * @param out the receiving matrix
             * @param a the matrix to rotate
             * @param rad the angle to rotate the matrix by
             * @returns out
             */
            function rotateX(out: I.mat4, a: I.mat4, rad: number): I.mat4;

            /**
             * Rotates a matrix by the given angle around the Y axis
             *
             * @param out the receiving matrix
             * @param a the matrix to rotate
             * @param rad the angle to rotate the matrix by
             * @returns out
             */
            function rotateY(out: I.mat4, a: I.mat4, rad: number): I.mat4;

            /**
             * Rotates a matrix by the given angle around the Z axis
             *
             * @param out the receiving matrix
             * @param a the matrix to rotate
             * @param rad the angle to rotate the matrix by
             * @returns out
             */
            function rotateZ(out: I.mat4, a: I.mat4, rad: number): I.mat4;

            /**
             * Creates a matrix from a vector translation
             * This is equivalent to (but much faster than):
             *
             *     mat4.identity(dest);
             *     mat4.translate(dest, dest, vec);
             *
             * @param out mat4 receiving operation result
             * @param v Translation vector
             * @returns out
             */
            function fromTranslation(out: I.mat4, v: I.vec3 | number[]): I.mat4;

            /**
             * Creates a matrix from a vector scaling
             * This is equivalent to (but much faster than):
             *
             *     mat4.identity(dest);
             *     mat4.scale(dest, dest, vec);
             *
             * @param out mat4 receiving operation result
             * @param v Scaling vector
             * @returns out
             */
            function fromScaling(out: I.mat4, v: I.vec3 | number[]): I.mat4;

            /**
             * Creates a matrix from a given angle around a given axis
             * This is equivalent to (but much faster than):
             *
             *     mat4.identity(dest);
             *     mat4.rotate(dest, dest, rad, axis);
             *
             * @param out mat4 receiving operation result
             * @param rad the angle to rotate the matrix by
             * @param axis the axis to rotate around
             * @returns out
             */
            function fromRotation(out: I.mat4, rad: number, axis: I.vec3 | number[]): I.mat4;

            /**
             * Creates a matrix from the given angle around the X axis
             * This is equivalent to (but much faster than):
             *
             *     mat4.identity(dest);
             *     mat4.rotateX(dest, dest, rad);
             *
             * @param out mat4 receiving operation result
             * @param rad the angle to rotate the matrix by
             * @returns out
             */
            function fromXRotation(out: I.mat4, rad: number): I.mat4;

            /**
             * Creates a matrix from the given angle around the Y axis
             * This is equivalent to (but much faster than):
             *
             *     mat4.identity(dest);
             *     mat4.rotateY(dest, dest, rad);
             *
             * @param out mat4 receiving operation result
             * @param rad the angle to rotate the matrix by
             * @returns out
             */
            function fromYRotation(out: I.mat4, rad: number): I.mat4;

            /**
             * Creates a matrix from the given angle around the Z axis
             * This is equivalent to (but much faster than):
             *
             *     mat4.identity(dest);
             *     mat4.rotateZ(dest, dest, rad);
             *
             * @param out mat4 receiving operation result
             * @param rad the angle to rotate the matrix by
             * @returns out
             */
            function fromZRotation(out: I.mat4, rad: number): I.mat4;

            /**
             * Creates a matrix from a quaternion rotation and vector translation
             * This is equivalent to (but much faster than):
             *
             *     mat4.identity(dest);
             *     mat4.translate(dest, vec);
             *     var quatMat = mat4.create();
             *     quat4.toMat4(quat, quatMat);
             *     mat4.multiply(dest, quatMat);
             *
             * @param out mat4 receiving operation result
             * @param q Rotation quaternion
             * @param v Translation vector
             * @returns out
             */
            function fromRotationTranslation(out: I.mat4, q: I.quat, v: I.vec3 | number[]): I.mat4;

            /**
             * Returns the translation vector component of a transformation
             *  matrix. If a matrix is built with fromRotationTranslation,
             *  the returned vector will be the same as the translation vector
             *  originally supplied.
             * @param  out Vector to receive translation component
             * @param  mat Matrix to be decomposed (input)
             * @return out
             */
            function getTranslation(out: I.vec3, mat: I.mat4): I.vec3;

            /**
             * Returns the scaling factor component of a transformation matrix.
             * If a matrix is built with fromRotationTranslationScale with a
             * normalized Quaternion parameter, the returned vector will be
             * the same as the scaling vector originally supplied.
             * @param out Vector to receive scaling factor component
             * @param mat Matrix to be decomposed (input)
             * @return out
             */
            function getScaling(out: I.vec3, mat: I.mat4): I.vec3;

            /**
             * Returns a quaternion representing the rotational component
             *  of a transformation matrix. If a matrix is built with
             *  fromRotationTranslation, the returned quaternion will be the
             *  same as the quaternion originally supplied.
             * @param out Quaternion to receive the rotation component
             * @param mat Matrix to be decomposed (input)
             * @return out
             */
            function getRotation(out: I.quat, mat: I.mat4): I.quat;

            /**
             * Creates a matrix from a quaternion rotation, vector translation and vector scale
             * This is equivalent to (but much faster than):
             *
             *     mat4.identity(dest);
             *     mat4.translate(dest, vec);
             *     var quatMat = mat4.create();
             *     quat4.toMat4(quat, quatMat);
             *     mat4.multiply(dest, quatMat);
             *     mat4.scale(dest, scale)
             *
             * @param out mat4 receiving operation result
             * @param q Rotation quaternion
             * @param v Translation vector
             * @param s Scaling vector
             * @returns out
             */
            function fromRotationTranslationScale(out: I.mat4, q: I.quat, v: I.vec3 | number[], s: I.vec3 | number[]): I.mat4;

            /**
             * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
             * This is equivalent to (but much faster than):
             *
             *     mat4.identity(dest);
             *     mat4.translate(dest, vec);
             *     mat4.translate(dest, origin);
             *     var quatMat = mat4.create();
             *     quat4.toMat4(quat, quatMat);
             *     mat4.multiply(dest, quatMat);
             *     mat4.scale(dest, scale)
             *     mat4.translate(dest, negativeOrigin);
             *
             * @param out mat4 receiving operation result
             * @param q Rotation quaternion
             * @param v Translation vector
             * @param s Scaling vector
             * @param o The origin vector around which to scale and rotate
             * @returns out
             */
            function fromRotationTranslationScaleOrigin(out: I.mat4, q: I.quat, v: I.vec3 | number[], s: I.vec3 | number[], o: I.vec3 | number[]): I.mat4;

            /**
             * Calculates a 4x4 matrix from the given quaternion
             *
             * @param out mat4 receiving operation result
             * @param q Quaternion to create matrix from
             *
             * @returns out
             */
            function fromQuat(out: I.mat4, q: I.quat): I.mat4;

            /**
             * Generates a frustum matrix with the given bounds
             *
             * @param out mat4 frustum matrix will be written into
             * @param left Left bound of the frustum
             * @param right Right bound of the frustum
             * @param bottom Bottom bound of the frustum
             * @param top Top bound of the frustum
             * @param near Near bound of the frustum
             * @param far Far bound of the frustum
             * @returns out
             */
            function frustum(out: I.mat4, left: number, right: number,
                                  bottom: number, top: number, near: number, far: number): I.mat4;

            /**
             * Generates a perspective projection matrix with the given bounds
             *
             * @param out mat4 frustum matrix will be written into
             * @param fovy Vertical field of view in radians
             * @param aspect Aspect ratio. typically viewport width/height
             * @param near Near bound of the frustum
             * @param far Far bound of the frustum
             * @returns out
             */
            function perspective(out: I.mat4, fovy: number, aspect: number,
                                      near: number, far: number): I.mat4;

            /**
             * Generates a perspective projection matrix with the given field of view.
             * This is primarily useful for generating projection matrices to be used
             * with the still experimental WebVR API.
             *
             * @param out mat4 frustum matrix will be written into
             * @param fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
             * @param near Near bound of the frustum
             * @param far Far bound of the frustum
             * @returns out
             */
            function perspectiveFromFieldOfView(
                out: I.mat4,
                fov: {
                    upDegrees: number,
                    downDegrees: number,
                    leftDegrees: number,
                    rightDegrees: number
                },
                near: number,
                far: number
            ): I.mat4;

            /**
             * Generates a orthogonal projection matrix with the given bounds
             *
             * @param out mat4 frustum matrix will be written into
             * @param left Left bound of the frustum
             * @param right Right bound of the frustum
             * @param bottom Bottom bound of the frustum
             * @param top Top bound of the frustum
             * @param near Near bound of the frustum
             * @param far Far bound of the frustum
             * @returns out
             */
            function ortho(out: I.mat4, left: number, right: number, bottom: number, top: number, near: number, far: number): I.mat4;

            /**
             * Generates a look-at matrix with the given eye position, focal point, and up axis
             *
             * @param out mat4 frustum matrix will be written into
             * @param eye Position of the viewer
             * @param center Point the viewer is looking at
             * @param up vec3 pointing up
             * @returns out
             */
            function lookAt(out: I.mat4, eye: I.vec3 | number[], center: I.vec3 | number[], up: I.vec3 | number[]): I.mat4;

            /**
             * Returns a string representation of a mat4
             *
             * @param mat matrix to represent as a string
             * @returns string representation of the matrix
             */
            function str(mat: I.mat4): string;

            /**
             * Returns Frobenius norm of a mat4
             *
             * @param a the matrix to calculate Frobenius norm of
             * @returns Frobenius norm
             */
            function frob(a: I.mat4): number;

            /**
             * Adds two mat4's
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function add(out: I.mat4, a: I.mat4, b: I.mat4): I.mat4;

            /**
             * Subtracts matrix b from matrix a
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function subtract(out: I.mat4, a: I.mat4, b: I.mat4): I.mat4;

            /**
             * Subtracts matrix b from matrix a
             *
             * @param out the receiving matrix
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function sub(out: I.mat4, a: I.mat4, b: I.mat4): I.mat4;

            /**
             * Multiply each element of the matrix by a scalar.
             *
             * @param out the receiving matrix
             * @param a the matrix to scale
             * @param b amount to scale the matrix's elements by
             * @returns out
             */
            function multiplyScalar(out: I.mat4, a: I.mat4, b: number): I.mat4;

            /**
             * Adds two mat4's after multiplying each element of the second operand by a scalar value.
             *
             * @param out the receiving vector
             * @param a the first operand
             * @param b the second operand
             * @param scale the amount to scale b's elements by before adding
             * @returns out
             */
            function multiplyScalarAndAdd(out: I.mat4, a: I.mat4, b: I.mat4, scale: number): I.mat4;

            /**
             * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
             *
             * @param a The first matrix.
             * @param b The second matrix.
             * @returns True if the matrices are equal, false otherwise.
             */
            function exactEquals(a: I.mat4, b: I.mat4): boolean;

            /**
             * Returns whether or not the matrices have approximately the same elements in the same position.
             *
             * @param a The first matrix.
             * @param b The second matrix.
             * @returns True if the matrices are equal, false otherwise.
             */
            function equals(a: I.mat4, b: I.mat4): boolean;
        }

        namespace I {
            type quat = Float32Array;
        }

        /**
         * Quaternion
         */
        namespace quat {
            /**
             * Creates a new identity quat
             *
             * @returns a new quaternion
             */
            function create(): I.quat;

            /**
             * Creates a new quat initialized with values from an existing quaternion
             *
             * @param a quaternion to clone
             * @returns a new quaternion
             */
            function clone(a: I.quat): I.quat;

            /**
             * Creates a new quat initialized with the given values
             *
             * @param x X component
             * @param y Y component
             * @param z Z component
             * @param w W component
             * @returns a new quaternion
             */
            function fromValues(x: number, y: number, z: number, w: number): I.quat;

            /**
             * Copy the values from one quat to another
             *
             * @param out the receiving quaternion
             * @param a the source quaternion
             * @returns out
             */
            function copy(out: I.quat, a: I.quat): I.quat;

            /**
             * Set the components of a quat to the given values
             *
             * @param out the receiving quaternion
             * @param x X component
             * @param y Y component
             * @param z Z component
             * @param w W component
             * @returns out
             */
            function set(out: I.quat, x: number, y: number, z: number, w: number): I.quat;

            /**
             * Set a quat to the identity quaternion
             *
             * @param out the receiving quaternion
             * @returns out
             */
            function identity(out: I.quat): I.quat;

            /**
             * Sets a quaternion to represent the shortest rotation from one
             * vector to another.
             *
             * Both vectors are assumed to be unit length.
             *
             * @param out the receiving quaternion.
             * @param a the initial vector
             * @param b the destination vector
             * @returns out
             */
            function rotationTo(out: I.quat, a: I.vec3 | number[], b: I.vec3 | number[]): I.quat;

            /**
             * Sets a quaternion to represent the shortest rotation from one
             * vector to another.
             *
             * Both vectors are assumed to be unit length.
             *
             * @param out the receiving quaternion.
             * @param a the initial vector
             * @param b the destination vector
             * @returns out
             */
            function rotationTo(out: I.quat, a: I.vec3 | number[], b: I.vec3 | number[]): I.quat;

            /**
             * Sets the specified quaternion with values corresponding to the given
             * axes. Each axis is a vec3 and is expected to be unit length and
             * perpendicular to all other specified axes.
             *
             * @param view  the vector representing the viewing direction
             * @param right the vector representing the local "right" direction
             * @param up    the vector representing the local "up" direction
             * @returns out
             */
            function setAxes(out: I.quat, view: I.vec3 | number[], right: I.vec3 | number[], up: I.vec3 | number[]): I.quat;

            /**
             * Sets the specified quaternion with values corresponding to the given
             * axes. Each axis is a vec3 and is expected to be unit length and
             * perpendicular to all other specified axes.
             *
             * @param out the receiving quat
             * @param view  the vector representing the viewing direction
             * @param right the vector representing the local "right" direction
             * @param up    the vector representing the local "up" direction
             * @returns out
             */
            function setAxes(out: I.quat, view: I.vec3 | number[], right: I.vec3 | number[], up: I.vec3 | number[]): I.quat;

            /**
             * Sets a quat from the given angle and rotation axis,
             * then returns it.
             *
             * @param out the receiving quaternion
             * @param axis the axis around which to rotate
             * @param rad the angle in radians
             * @returns out
             */
            function setAxisAngle(out: I.quat, axis: I.vec3 | number[], rad: number): I.quat;

            /**
             * Gets the rotation axis and angle for a given
             *  quaternion. If a quaternion is created with
             *  setAxisAngle, this method will return the same
             *  values as providied in the original parameter list
             *  OR functionally equivalent values.
             * Example: The quaternion formed by axis [0, 0, 1] and
             *  angle -90 is the same as the quaternion formed by
             *  [0, 0, 1] and 270. This method favors the latter.
             * @param  out_axis  Vector receiving the axis of rotation
             * @param  q     Quaternion to be decomposed
             * @return     Angle, in radians, of the rotation
             */
            function getAxisAngle(out_axis: I.vec3 | number[], q: I.quat): number;

            /**
             * Adds two quat's
             *
             * @param out the receiving quaternion
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function add(out: I.quat, a: I.quat, b: I.quat): I.quat;

            /**
             * Multiplies two quat's
             *
             * @param out the receiving quaternion
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function multiply(out: I.quat, a: I.quat, b: I.quat): I.quat;

            /**
             * Multiplies two quat's
             *
             * @param out the receiving quaternion
             * @param a the first operand
             * @param b the second operand
             * @returns out
             */
            function mul(out: I.quat, a: I.quat, b: I.quat): I.quat;

            /**
             * Scales a quat by a scalar number
             *
             * @param out the receiving vector
             * @param a the vector to scale
             * @param b amount to scale the vector by
             * @returns out
             */
            function scale(out: I.quat, a: I.quat, b: number): I.quat;

            /**
             * Calculates the length of a quat
             *
             * @param a vector to calculate length of
             * @returns length of a
             */
            function length(a: I.quat): number;

            /**
             * Calculates the length of a quat
             *
             * @param a vector to calculate length of
             * @returns length of a
             */
            function len(a: I.quat): number;

            /**
             * Calculates the squared length of a quat
             *
             * @param a vector to calculate squared length of
             * @returns squared length of a
             */
            function squaredLength(a: I.quat): number;

            /**
             * Calculates the squared length of a quat
             *
             * @param a vector to calculate squared length of
             * @returns squared length of a
             */
            function sqrLen(a: I.quat): number;

            /**
             * Normalize a quat
             *
             * @param out the receiving quaternion
             * @param a quaternion to normalize
             * @returns out
             */
            function normalize(out: I.quat, a: I.quat): I.quat;

            /**
             * Calculates the dot product of two quat's
             *
             * @param a the first operand
             * @param b the second operand
             * @returns dot product of a and b
             */
            function dot(a: I.quat, b: I.quat): number;

            /**
             * Performs a linear interpolation between two quat's
             *
             * @param out the receiving quaternion
             * @param a the first operand
             * @param b the second operand
             * @param t interpolation amount between the two inputs
             * @returns out
             */
            function lerp(out: I.quat, a: I.quat, b: I.quat, t: number): I.quat;

            /**
             * Performs a spherical linear interpolation between two quat
             *
             * @param out the receiving quaternion
             * @param a the first operand
             * @param b the second operand
             * @param t interpolation amount between the two inputs
             * @returns out
             */
            function slerp(out: I.quat, a: I.quat, b: I.quat, t: number): I.quat;

            /**
             * Performs a spherical linear interpolation with two control points
             *
             * @param out the receiving quaternion
             * @param a the first operand
             * @param b the second operand
             * @param c the third operand
             * @param d the fourth operand
             * @param t interpolation amount
             * @returns out
             */
            function sqlerp(out: I.quat, a: I.quat, b: I.quat, c: I.quat, d: I.quat, t: number): I.quat;

            /**
             * Calculates the inverse of a quat
             *
             * @param out the receiving quaternion
             * @param a quat to calculate inverse of
             * @returns out
             */
            function invert(out: I.quat, a: I.quat): I.quat;

            /**
             * Calculates the conjugate of a quat
             * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
             *
             * @param out the receiving quaternion
             * @param a quat to calculate conjugate of
             * @returns out
             */
            function conjugate(out: I.quat, a: I.quat): I.quat;

            /**
             * Returns a string representation of a quaternion
             *
             * @param a quat to represent as a string
             * @returns string representation of the quat
             */
            function str(a: I.quat): string;

            /**
             * Rotates a quaternion by the given angle about the X axis
             *
             * @param out quat receiving operation result
             * @param a quat to rotate
             * @param rad angle (in radians) to rotate
             * @returns out
             */
            function rotateX(out: I.quat, a: I.quat, rad: number): I.quat;

            /**
             * Rotates a quaternion by the given angle about the Y axis
             *
             * @param out quat receiving operation result
             * @param a quat to rotate
             * @param rad angle (in radians) to rotate
             * @returns out
             */
            function rotateY(out: I.quat, a: I.quat, rad: number): I.quat;

            /**
             * Rotates a quaternion by the given angle about the Z axis
             *
             * @param out quat receiving operation result
             * @param a quat to rotate
             * @param rad angle (in radians) to rotate
             * @returns out
             */
            function rotateZ(out: I.quat, a: I.quat, rad: number): I.quat;

            /**
             * Creates a quaternion from the given 3x3 rotation matrix.
             *
             * NOTE: The resultant quaternion is not normalized, so you should be sure
             * to renormalize the quaternion yourself where necessary.
             *
             * @param out the receiving quaternion
             * @param m rotation matrix
             * @returns out
             */
            function fromMat3(out: I.quat, m: I.mat3): I.quat;

            /**
             * Calculates the W component of a quat from the X, Y, and Z components.
             * Assumes that quaternion is 1 unit in length.
             * Any existing W component will be ignored.
             *
             * @param out the receiving quaternion
             * @param a quat to calculate W component of
             * @returns out
             */
            function calculateW(out: I.quat, a: I.quat): I.quat;

            /**
             * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
             *
             * @param a The first vector.
             * @param b The second vector.
             * @returns True if the quaternions are equal, false otherwise.
             */
            function exactEquals(a: I.quat, b: I.quat): boolean;

            /**
             * Returns whether or not the quaternions have approximately the same elements in the same position.
             *
             * @param a The first vector.
             * @param b The second vector.
             * @returns True if the quaternions are equal, false otherwise.
             */
            function equals(a: I.quat, b: I.quat): boolean;
        }
    }
}
