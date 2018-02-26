// Type definitions for gl-matrix 2.4
// Project: https://github.com/toji/gl-matrix
// Definitions by: Mattijs Kneppers <https://github.com/mattijskneppers>, based on definitions by Tat <https://github.com/tatchx>
//                 Nikolay Babanov <https://github.com/nbabanov>
//                 Austin Martin <https://github.com/auzmartist>
//                 Wayne Langman <https://github.com/surtr-isaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'gl-matrix' {
    // Global Utilities
    export class glMatrix {
        // Configuration constants
        public static EPSILON: number;
        public static ARRAY_TYPE: any;
        public static RANDOM(): number;
        public static ENABLE_SIMD: boolean;

        // Compatibility detection
        public static SIMD_AVAILABLE: boolean;
        public static USE_SIMD: boolean;

        /**
         * Sets the type of array used when creating new vectors and matrices
         *
         * @param {any} type - Array type, such as Float32Array or Array
         */
        public static setMatrixArrayType(type: any): void;

        /**
         * Convert Degree To Radian
         *
         * @param {number} a - Angle in Degrees
         */
        public static toRadian(a: number): number;

        /**
         * Tests whether or not the arguments have approximately the same value, within an absolute
         * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
         * than or equal to 1.0, and a relative tolerance is used for larger values)
         *
         * @param {number} a - The first number to test.
         * @param {number} b - The second number to test.
         * @returns {boolean} True if the numbers are approximately equal, false otherwise.
         */
        public static equals(a: number, b: number): boolean;
    }

    // vec2
    export class vec2 extends Float32Array {
        private typeVec2: number;

        /**
         * Creates a new, empty vec2
         *
         * @returns a new 2D vector
         */
        public static create(): vec2;

        /**
         * Creates a new vec2 initialized with values from an existing vector
         *
         * @param a a vector to clone
         * @returns a new 2D vector
         */
        public static clone(a: vec2 | number[]): vec2;

        /**
         * Creates a new vec2 initialized with the given values
         *
         * @param x X component
         * @param y Y component
         * @returns a new 2D vector
         */
        public static fromValues(x: number, y: number): vec2;

        /**
         * Copy the values from one vec2 to another
         *
         * @param out the receiving vector
         * @param a the source vector
         * @returns out
         */
        public static copy(out: vec2, a: vec2 | number[]): vec2;

        /**
         * Set the components of a vec2 to the given values
         *
         * @param out the receiving vector
         * @param x X component
         * @param y Y component
         * @returns out
         */
        public static set(out: vec2, x: number, y: number): vec2;

        /**
         * Adds two vec2's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static add(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2;

        /**
         * Subtracts vector b from vector a
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static subtract(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2;

        /**
         * Subtracts vector b from vector a
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static sub(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2;

        /**
         * Multiplies two vec2's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static multiply(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2;

        /**
         * Multiplies two vec2's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static mul(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2;

        /**
         * Divides two vec2's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static divide(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2;

        /**
         * Divides two vec2's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static div(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2;

        /**
         * Math.ceil the components of a vec2
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a vector to ceil
         * @returns {vec2} out
         */
        public static ceil(out: vec2, a: vec2 | number[]): vec2;

        /**
         * Math.floor the components of a vec2
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a vector to floor
         * @returns {vec2} out
         */
        public static floor (out: vec2, a: vec2 | number[]): vec2;

        /**
         * Returns the minimum of two vec2's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static min(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2;

        /**
         * Returns the maximum of two vec2's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static max(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2;

        /**
         * Math.round the components of a vec2
         *
         * @param {vec2} out the receiving vector
         * @param {vec2} a vector to round
         * @returns {vec2} out
         */
        public static round(out: vec2, a: vec2 | number[]): vec2;


        /**
         * Scales a vec2 by a scalar number
         *
         * @param out the receiving vector
         * @param a the vector to scale
         * @param b amount to scale the vector by
         * @returns out
         */
        public static scale(out: vec2, a: vec2 | number[], b: number): vec2;

        /**
         * Adds two vec2's after scaling the second operand by a scalar value
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @param scale the amount to scale b by before adding
         * @returns out
         */
        public static scaleAndAdd(out: vec2, a: vec2 | number[], b: vec2 | number[], scale: number): vec2;

        /**
         * Calculates the euclidian distance between two vec2's
         *
         * @param a the first operand
         * @param b the second operand
         * @returns distance between a and b
         */
        public static distance(a: vec2 | number[], b: vec2 | number[]): number;

        /**
         * Calculates the euclidian distance between two vec2's
         *
         * @param a the first operand
         * @param b the second operand
         * @returns distance between a and b
         */
        public static dist(a: vec2 | number[], b: vec2 | number[]): number;

        /**
         * Calculates the squared euclidian distance between two vec2's
         *
         * @param a the first operand
         * @param b the second operand
         * @returns squared distance between a and b
         */
        public static squaredDistance(a: vec2 | number[], b: vec2 | number[]): number;

        /**
         * Calculates the squared euclidian distance between two vec2's
         *
         * @param a the first operand
         * @param b the second operand
         * @returns squared distance between a and b
         */
        public static sqrDist(a: vec2 | number[], b: vec2 | number[]): number;

        /**
         * Calculates the length of a vec2
         *
         * @param a vector to calculate length of
         * @returns length of a
         */
        public static length(a: vec2 | number[]): number;

        /**
         * Calculates the length of a vec2
         *
         * @param a vector to calculate length of
         * @returns length of a
         */
        public static len(a: vec2 | number[]): number;

        /**
         * Calculates the squared length of a vec2
         *
         * @param a vector to calculate squared length of
         * @returns squared length of a
         */
        public static squaredLength(a: vec2 | number[]): number;

        /**
         * Calculates the squared length of a vec2
         *
         * @param a vector to calculate squared length of
         * @returns squared length of a
         */
        public static sqrLen(a: vec2 | number[]): number;

        /**
         * Negates the components of a vec2
         *
         * @param out the receiving vector
         * @param a vector to negate
         * @returns out
         */
        public static negate(out: vec2, a: vec2 | number[]): vec2;

        /**
         * Returns the inverse of the components of a vec2
         *
         * @param out the receiving vector
         * @param a vector to invert
         * @returns out
         */
        public static inverse(out: vec2, a: vec2 | number[]): vec2;

        /**
         * Normalize a vec2
         *
         * @param out the receiving vector
         * @param a vector to normalize
         * @returns out
         */
        public static normalize(out: vec2, a: vec2 | number[]): vec2;

        /**
         * Calculates the dot product of two vec2's
         *
         * @param a the first operand
         * @param b the second operand
         * @returns dot product of a and b
         */
        public static dot(a: vec2 | number[], b: vec2 | number[]): number;

        /**
         * Computes the cross product of two vec2's
         * Note that the cross product must by definition produce a 3D vector
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static cross(out: vec3, a: vec2 | number[], b: vec2 | number[]): vec2;

        /**
         * Performs a linear interpolation between two vec2's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @param t interpolation amount between the two inputs
         * @returns out
         */
        public static lerp(out: vec2, a: vec2 | number[], b: vec2 | number[], t: number): vec2;

        /**
         * Generates a random unit vector
         *
         * @param out the receiving vector
         * @returns out
         */
        public static random(out: vec2): vec2;

        /**
         * Generates a random vector with the given scale
         *
         * @param out the receiving vector
         * @param scale Length of the resulting vector. If ommitted, a unit vector will be returned
         * @returns out
         */
        public static random(out: vec2, scale: number): vec2;

        /**
         * Transforms the vec2 with a mat2
         *
         * @param out the receiving vector
         * @param a the vector to transform
         * @param m matrix to transform with
         * @returns out
         */
        public static transformMat2(out: vec2, a: vec2 | number[], m: mat2): vec2;

        /**
         * Transforms the vec2 with a mat2d
         *
         * @param out the receiving vector
         * @param a the vector to transform
         * @param m matrix to transform with
         * @returns out
         */
        public static transformMat2d(out: vec2, a: vec2 | number[], m: mat2d): vec2;

        /**
         * Transforms the vec2 with a mat3
         * 3rd vector component is implicitly '1'
         *
         * @param out the receiving vector
         * @param a the vector to transform
         * @param m matrix to transform with
         * @returns out
         */
        public static transformMat3(out: vec2, a: vec2 | number[], m: mat3): vec2;

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
        public static transformMat4(out: vec2, a: vec2 | number[], m: mat4): vec2;

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
        public static forEach(a: Float32Array, stride: number, offset: number, count: number,
                              fn: (a: vec2 | number[], b: vec2 | number[], arg: any) => void, arg: any): Float32Array;

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
        public static forEach(a: Float32Array, stride: number, offset: number, count: number,
                              fn: (a: vec2 | number[], b: vec2 | number[]) => void): Float32Array;

        /**
         * Returns a string representation of a vector
         *
         * @param a vector to represent as a string
         * @returns string representation of the vector
         */
        public static str(a: vec2 | number[]): string;

        /**
         * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
         *
         * @param {vec2} a The first vector.
         * @param {vec2} b The second vector.
         * @returns {boolean} True if the vectors are equal, false otherwise.
         */
        public static exactEquals (a: vec2 | number[], b: vec2 | number[]): boolean;

        /**
         * Returns whether or not the vectors have approximately the same elements in the same position.
         *
         * @param {vec2} a The first vector.
         * @param {vec2} b The second vector.
         * @returns {boolean} True if the vectors are equal, false otherwise.
         */
        public static equals (a: vec2 | number[], b: vec2 | number[]): boolean;
    }

    // vec3
    export class vec3 extends Float32Array {
        private typeVec3: number;

        /**
         * Creates a new, empty vec3
         *
         * @returns a new 3D vector
         */
        public static create(): vec3;

        /**
         * Creates a new vec3 initialized with values from an existing vector
         *
         * @param a vector to clone
         * @returns a new 3D vector
         */
        public static clone(a: vec3 | number[]): vec3;

        /**
         * Creates a new vec3 initialized with the given values
         *
         * @param x X component
         * @param y Y component
         * @param z Z component
         * @returns a new 3D vector
         */
        public static fromValues(x: number, y: number, z: number): vec3;

        /**
         * Copy the values from one vec3 to another
         *
         * @param out the receiving vector
         * @param a the source vector
         * @returns out
         */
        public static copy(out: vec3, a: vec3 | number[]): vec3;

        /**
         * Set the components of a vec3 to the given values
         *
         * @param out the receiving vector
         * @param x X component
         * @param y Y component
         * @param z Z component
         * @returns out
         */
        public static set(out: vec3, x: number, y: number, z: number): vec3;

        /**
         * Adds two vec3's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static add(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3;

        /**
         * Subtracts vector b from vector a
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static subtract(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3;

        /**
         * Subtracts vector b from vector a
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static sub(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3

        /**
         * Multiplies two vec3's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static multiply(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3;

        /**
         * Multiplies two vec3's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static mul(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3;

        /**
         * Divides two vec3's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static divide(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3;

        /**
         * Divides two vec3's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static div(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3;

        /**
         * Math.ceil the components of a vec3
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a vector to ceil
         * @returns {vec3} out
         */
        public static ceil (out: vec3, a: vec3 | number[]): vec3;

        /**
         * Math.floor the components of a vec3
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a vector to floor
         * @returns {vec3} out
         */
        public static floor (out: vec3, a: vec3 | number[]): vec3;

        /**
         * Returns the minimum of two vec3's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static min(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3;

        /**
         * Returns the maximum of two vec3's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static max(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3;

        /**
         * Math.round the components of a vec3
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a vector to round
         * @returns {vec3} out
         */
        public static round (out: vec3, a: vec3 | number[]): vec3

        /**
         * Scales a vec3 by a scalar number
         *
         * @param out the receiving vector
         * @param a the vector to scale
         * @param b amount to scale the vector by
         * @returns out
         */
        public static scale(out: vec3, a: vec3 | number[], b: number): vec3;

        /**
         * Adds two vec3's after scaling the second operand by a scalar value
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @param scale the amount to scale b by before adding
         * @returns out
         */
        public static scaleAndAdd(out: vec3, a: vec3 | number[], b: vec3 | number[], scale: number): vec3;

        /**
         * Calculates the euclidian distance between two vec3's
         *
         * @param a the first operand
         * @param b the second operand
         * @returns distance between a and b
         */
        public static distance(a: vec3 | number[], b: vec3 | number[]): number;

        /**
         * Calculates the euclidian distance between two vec3's
         *
         * @param a the first operand
         * @param b the second operand
         * @returns distance between a and b
         */
        public static dist(a: vec3 | number[], b: vec3 | number[]): number;

        /**
         * Calculates the squared euclidian distance between two vec3's
         *
         * @param a the first operand
         * @param b the second operand
         * @returns squared distance between a and b
         */
        public static squaredDistance(a: vec3 | number[], b: vec3 | number[]): number;

        /**
         * Calculates the squared euclidian distance between two vec3's
         *
         * @param a the first operand
         * @param b the second operand
         * @returns squared distance between a and b
         */
        public static sqrDist(a: vec3 | number[], b: vec3 | number[]): number;

        /**
         * Calculates the length of a vec3
         *
         * @param a vector to calculate length of
         * @returns length of a
         */
        public static length(a: vec3 | number[]): number;

        /**
         * Calculates the length of a vec3
         *
         * @param a vector to calculate length of
         * @returns length of a
         */
        public static len(a: vec3 | number[]): number;

        /**
         * Calculates the squared length of a vec3
         *
         * @param a vector to calculate squared length of
         * @returns squared length of a
         */
        public static squaredLength(a: vec3 | number[]): number;

        /**
         * Calculates the squared length of a vec3
         *
         * @param a vector to calculate squared length of
         * @returns squared length of a
         */
        public static sqrLen(a: vec3 | number[]): number;

        /**
         * Negates the components of a vec3
         *
         * @param out the receiving vector
         * @param a vector to negate
         * @returns out
         */
        public static negate(out: vec3, a: vec3 | number[]): vec3;

        /**
         * Returns the inverse of the components of a vec3
         *
         * @param out the receiving vector
         * @param a vector to invert
         * @returns out
         */
        public static inverse(out: vec3, a: vec3 | number[]): vec3;

        /**
         * Normalize a vec3
         *
         * @param out the receiving vector
         * @param a vector to normalize
         * @returns out
         */
        public static normalize(out: vec3, a: vec3 | number[]): vec3;

        /**
         * Calculates the dot product of two vec3's
         *
         * @param a the first operand
         * @param b the second operand
         * @returns dot product of a and b
         */
        public static dot(a: vec3 | number[], b: vec3 | number[]): number;

        /**
         * Computes the cross product of two vec3's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static cross(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3;

        /**
         * Performs a linear interpolation between two vec3's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @param t interpolation amount between the two inputs
         * @returns out
         */
        public static lerp(out: vec3, a: vec3 | number[], b: vec3 | number[], t: number): vec3;

        /**
         * Performs a hermite interpolation with two control points
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a the first operand
         * @param {vec3} b the second operand
         * @param {vec3} c the third operand
         * @param {vec3} d the fourth operand
         * @param {number} t interpolation amount between the two inputs
         * @returns {vec3} out
         */
        public static hermite (out: vec3, a: vec3 | number[], b: vec3 | number[], c: vec3 | number[], d: vec3 | number[], t: number): vec3;

        /**
         * Performs a bezier interpolation with two control points
         *
         * @param {vec3} out the receiving vector
         * @param {vec3} a the first operand
         * @param {vec3} b the second operand
         * @param {vec3} c the third operand
         * @param {vec3} d the fourth operand
         * @param {number} t interpolation amount between the two inputs
         * @returns {vec3} out
         */
        public static bezier (out: vec3, a: vec3 | number[], b: vec3 | number[], c: vec3 | number[], d: vec3 | number[], t: number): vec3;

        /**
         * Generates a random unit vector
         *
         * @param out the receiving vector
         * @returns out
         */
        public static random(out: vec3): vec3;

        /**
         * Generates a random vector with the given scale
         *
         * @param out the receiving vector
         * @param [scale] Length of the resulting vector. If omitted, a unit vector will be returned
         * @returns out
         */
        public static random(out: vec3, scale: number): vec3;

        /**
         * Transforms the vec3 with a mat3.
         *
         * @param out the receiving vector
         * @param a the vector to transform
         * @param m the 3x3 matrix to transform with
         * @returns out
         */
        public static transformMat3(out: vec3, a: vec3 | number[], m: mat3): vec3;

        /**
         * Transforms the vec3 with a mat4.
         * 4th vector component is implicitly '1'
         *
         * @param out the receiving vector
         * @param a the vector to transform
         * @param m matrix to transform with
         * @returns out
         */
        public static transformMat4(out: vec3, a: vec3 | number[], m: mat4): vec3;

         /**
         * Transforms the vec3 with a quat
         *
         * @param out the receiving vector
         * @param a the vector to transform
         * @param q quaternion to transform with
         * @returns out
         */
        public static transformQuat(out: vec3, a: vec3 | number[], q: quat): vec3;


        /**
         * Rotate a 3D vector around the x-axis
         * @param out The receiving vec3
         * @param a The vec3 point to rotate
         * @param b The origin of the rotation
         * @param c The angle of rotation
         * @returns out
         */
        public static rotateX(out: vec3, a: vec3 | number[], b: vec3 | number[], c: number): vec3;

        /**
         * Rotate a 3D vector around the y-axis
         * @param out The receiving vec3
         * @param a The vec3 point to rotate
         * @param b The origin of the rotation
         * @param c The angle of rotation
         * @returns out
         */
        public static rotateY(out: vec3, a: vec3 | number[], b: vec3 | number[], c: number): vec3;

        /**
         * Rotate a 3D vector around the z-axis
         * @param out The receiving vec3
         * @param a The vec3 point to rotate
         * @param b The origin of the rotation
         * @param c The angle of rotation
         * @returns out
         */
        public static rotateZ(out: vec3, a: vec3 | number[], b: vec3 | number[], c: number): vec3;

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
         * @function
         */
        public static forEach(a: Float32Array, stride: number, offset: number, count: number,
                              fn: (a: vec3 | number[], b: vec3 | number[], arg: any) => void, arg: any): Float32Array;

        /**
         * Perform some operation over an array of vec3s.
         *
         * @param a the array of vectors to iterate over
         * @param stride Number of elements between the start of each vec3. If 0 assumes tightly packed
         * @param offset Number of elements to skip at the beginning of the array
         * @param count Number of vec3s to iterate over. If 0 iterates over entire array
         * @param fn Function to call for each vector in the array
         * @returns a
         * @function
         */
        public static forEach(a: Float32Array, stride: number, offset: number, count: number,
                              fn: (a: vec3 | number[], b: vec3 | number[]) => void): Float32Array;

        /**
         * Get the angle between two 3D vectors
         * @param a The first operand
         * @param b The second operand
         * @returns The angle in radians
         */
        public static angle(a: vec3 | number[], b: vec3 | number[]): number;

        /**
         * Returns a string representation of a vector
         *
         * @param a vector to represent as a string
         * @returns string representation of the vector
         */
        public static str(a: vec3 | number[]): string;

        /**
         * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
         *
         * @param {vec3} a The first vector.
         * @param {vec3} b The second vector.
         * @returns {boolean} True if the vectors are equal, false otherwise.
         */
        public static exactEquals (a: vec3 | number[], b: vec3 | number[]): boolean

        /**
         * Returns whether or not the vectors have approximately the same elements in the same position.
         *
         * @param {vec3} a The first vector.
         * @param {vec3} b The second vector.
         * @returns {boolean} True if the vectors are equal, false otherwise.
         */
        public static equals (a: vec3 | number[], b: vec3 | number[]): boolean
    }

    // vec4
    export class vec4 extends Float32Array {
        private typeVec3: number;

        /**
         * Creates a new, empty vec4
         *
         * @returns a new 4D vector
         */
        public static create(): vec4;

        /**
         * Creates a new vec4 initialized with values from an existing vector
         *
         * @param a vector to clone
         * @returns a new 4D vector
         */
        public static clone(a: vec4 | number[]): vec4;

        /**
         * Creates a new vec4 initialized with the given values
         *
         * @param x X component
         * @param y Y component
         * @param z Z component
         * @param w W component
         * @returns a new 4D vector
         */
        public static fromValues(x: number, y: number, z: number, w: number): vec4;

        /**
         * Copy the values from one vec4 to another
         *
         * @param out the receiving vector
         * @param a the source vector
         * @returns out
         */
        public static copy(out: vec4, a: vec4 | number[]): vec4;

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
        public static set(out: vec4, x: number, y: number, z: number, w: number): vec4;

        /**
         * Adds two vec4's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static add(out: vec4, a: vec4 | number[], b: vec4 | number[]): vec4;

        /**
         * Subtracts vector b from vector a
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static subtract(out: vec4, a: vec4 | number[], b: vec4 | number[]): vec4;

        /**
         * Subtracts vector b from vector a
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static sub(out: vec4, a: vec4 | number[], b: vec4 | number[]): vec4;

        /**
         * Multiplies two vec4's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static multiply(out: vec4, a: vec4 | number[], b: vec4 | number[]): vec4;

        /**
         * Multiplies two vec4's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static mul(out: vec4, a: vec4 | number[], b: vec4 | number[]): vec4;

        /**
         * Divides two vec4's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static divide(out: vec4, a: vec4 | number[], b: vec4 | number[]): vec4;

        /**
         * Divides two vec4's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static div(out: vec4, a: vec4 | number[], b: vec4 | number[]): vec4;

        /**
         * Math.ceil the components of a vec4
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a vector to ceil
         * @returns {vec4} out
         */
        public static ceil (out: vec4, a: vec4 | number[]): vec4;

        /**
         * Math.floor the components of a vec4
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a vector to floor
         * @returns {vec4} out
         */
        public static floor (out: vec4, a: vec4 | number[]): vec4;

        /**
         * Returns the minimum of two vec4's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static min(out: vec4, a: vec4 | number[], b: vec4 | number[]): vec4;

        /**
         * Returns the maximum of two vec4's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static max(out: vec4, a: vec4 | number[], b: vec4 | number[]): vec4;

        /**
         * Math.round the components of a vec4
         *
         * @param {vec4} out the receiving vector
         * @param {vec4} a vector to round
         * @returns {vec4} out
         */
        public static round (out: vec4, a: vec4 | number[]): vec4;

        /**
         * Scales a vec4 by a scalar number
         *
         * @param out the receiving vector
         * @param a the vector to scale
         * @param b amount to scale the vector by
         * @returns out
         */
        public static scale(out: vec4, a: vec4 | number[], b: number): vec4;

        /**
         * Adds two vec4's after scaling the second operand by a scalar value
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @param scale the amount to scale b by before adding
         * @returns out
         */
        public static scaleAndAdd(out: vec4, a: vec4 | number[], b: vec4 | number[], scale: number): vec4;

        /**
         * Calculates the euclidian distance between two vec4's
         *
         * @param a the first operand
         * @param b the second operand
         * @returns distance between a and b
         */
        public static distance(a: vec4 | number[], b: vec4 | number[]): number;

        /**
         * Calculates the euclidian distance between two vec4's
         *
         * @param a the first operand
         * @param b the second operand
         * @returns distance between a and b
         */
        public static dist(a: vec4 | number[], b: vec4 | number[]): number;

        /**
         * Calculates the squared euclidian distance between two vec4's
         *
         * @param a the first operand
         * @param b the second operand
         * @returns squared distance between a and b
         */
        public static squaredDistance(a: vec4 | number[], b: vec4 | number[]): number;

        /**
         * Calculates the squared euclidian distance between two vec4's
         *
         * @param a the first operand
         * @param b the second operand
         * @returns squared distance between a and b
         */
        public static sqrDist(a: vec4 | number[], b: vec4 | number[]): number;

        /**
         * Calculates the length of a vec4
         *
         * @param a vector to calculate length of
         * @returns length of a
         */
        public static length(a: vec4 | number[]): number;

        /**
         * Calculates the length of a vec4
         *
         * @param a vector to calculate length of
         * @returns length of a
         */
        public static len(a: vec4 | number[]): number;

        /**
         * Calculates the squared length of a vec4
         *
         * @param a vector to calculate squared length of
         * @returns squared length of a
         */
        public static squaredLength(a: vec4 | number[]): number;

        /**
         * Calculates the squared length of a vec4
         *
         * @param a vector to calculate squared length of
         * @returns squared length of a
         */
        public static sqrLen(a: vec4 | number[]): number;

        /**
         * Negates the components of a vec4
         *
         * @param out the receiving vector
         * @param a vector to negate
         * @returns out
         */
        public static negate(out: vec4, a: vec4 | number[]): vec4;

        /**
         * Returns the inverse of the components of a vec4
         *
         * @param out the receiving vector
         * @param a vector to invert
         * @returns out
         */
        public static inverse(out: vec4, a: vec4 | number[]): vec4;

        /**
         * Normalize a vec4
         *
         * @param out the receiving vector
         * @param a vector to normalize
         * @returns out
         */
        public static normalize(out: vec4, a: vec4 | number[]): vec4;

        /**
         * Calculates the dot product of two vec4's
         *
         * @param a the first operand
         * @param b the second operand
         * @returns dot product of a and b
         */
        public static dot(a: vec4 | number[], b: vec4 | number[]): number;

        /**
         * Performs a linear interpolation between two vec4's
         *
         * @param out the receiving vector
         * @param a the first operand
         * @param b the second operand
         * @param t interpolation amount between the two inputs
         * @returns out
         */
        public static lerp(out: vec4, a: vec4 | number[], b: vec4 | number[], t: number): vec4;

        /**
         * Generates a random unit vector
         *
         * @param out the receiving vector
         * @returns out
         */
        public static random(out: vec4): vec4;

        /**
         * Generates a random vector with the given scale
         *
         * @param out the receiving vector
         * @param scale length of the resulting vector. If ommitted, a unit vector will be returned
         * @returns out
         */
        public static random(out: vec4, scale: number): vec4;

        /**
         * Transforms the vec4 with a mat4.
         *
         * @param out the receiving vector
         * @param a the vector to transform
         * @param m matrix to transform with
         * @returns out
         */
        public static transformMat4(out: vec4, a: vec4 | number[], m: mat4): vec4;

        /**
         * Transforms the vec4 with a quat
         *
         * @param out the receiving vector
         * @param a the vector to transform
         * @param q quaternion to transform with
         * @returns out
         */

        public static transformQuat(out: vec4, a: vec4 | number[], q: quat): vec4;

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
         * @function
         */
        public static forEach(a: Float32Array, stride: number, offset: number, count: number,
                              fn: (a: vec4 | number[], b: vec4 | number[], arg: any) => void, arg: any): Float32Array;

        /**
         * Perform some operation over an array of vec4s.
         *
         * @param a the array of vectors to iterate over
         * @param stride Number of elements between the start of each vec4. If 0 assumes tightly packed
         * @param offset Number of elements to skip at the beginning of the array
         * @param count Number of vec4s to iterate over. If 0 iterates over entire array
         * @param fn Function to call for each vector in the array
         * @returns a
         * @function
         */
        public static forEach(a: Float32Array, stride: number, offset: number, count: number,
                              fn: (a: vec4 | number[], b: vec4 | number[]) => void): Float32Array;

        /**
         * Returns a string representation of a vector
         *
         * @param a vector to represent as a string
         * @returns string representation of the vector
         */
        public static str(a: vec4 | number[]): string;

        /**
         * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
         *
         * @param {vec4} a The first vector.
         * @param {vec4} b The second vector.
         * @returns {boolean} True if the vectors are equal, false otherwise.
         */
        public static exactEquals (a: vec4 | number[], b: vec4 | number[]): boolean;

        /**
         * Returns whether or not the vectors have approximately the same elements in the same position.
         *
         * @param {vec4} a The first vector.
         * @param {vec4} b The second vector.
         * @returns {boolean} True if the vectors are equal, false otherwise.
         */
        public static equals (a: vec4 | number[], b: vec4 | number[]): boolean;
    }

    // mat2
    export class mat2 extends Float32Array {
        private typeMat2: number;

        /**
         * Creates a new identity mat2
         *
         * @returns a new 2x2 matrix
         */
        public static create(): mat2;

        /**
         * Creates a new mat2 initialized with values from an existing matrix
         *
         * @param a matrix to clone
         * @returns a new 2x2 matrix
         */
        public static clone(a: mat2): mat2;

        /**
         * Copy the values from one mat2 to another
         *
         * @param out the receiving matrix
         * @param a the source matrix
         * @returns out
         */
        public static copy(out: mat2, a: mat2): mat2;

        /**
         * Set a mat2 to the identity matrix
         *
         * @param out the receiving matrix
         * @returns out
         */
        public static identity(out: mat2): mat2;

        /**
         * Create a new mat2 with the given values
         *
         * @param {number} m00 Component in column 0, row 0 position (index 0)
         * @param {number} m01 Component in column 0, row 1 position (index 1)
         * @param {number} m10 Component in column 1, row 0 position (index 2)
         * @param {number} m11 Component in column 1, row 1 position (index 3)
         * @returns {mat2} out A new 2x2 matrix
         */
        public static fromValues(m00: number, m01: number, m10: number, m11: number): mat2;

        /**
         * Set the components of a mat2 to the given values
         *
         * @param {mat2} out the receiving matrix
         * @param {number} m00 Component in column 0, row 0 position (index 0)
         * @param {number} m01 Component in column 0, row 1 position (index 1)
         * @param {number} m10 Component in column 1, row 0 position (index 2)
         * @param {number} m11 Component in column 1, row 1 position (index 3)
         * @returns {mat2} out
         */
        public static set(out: mat2, m00: number, m01: number, m10: number, m11: number): mat2;

        /**
         * Transpose the values of a mat2
         *
         * @param out the receiving matrix
         * @param a the source matrix
         * @returns out
         */
        public static transpose(out: mat2, a: mat2): mat2;

        /**
         * Inverts a mat2
         *
         * @param out the receiving matrix
         * @param a the source matrix
         * @returns out
         */
        public static invert(out: mat2, a: mat2): mat2 | null;

        /**
         * Calculates the adjugate of a mat2
         *
         * @param out the receiving matrix
         * @param a the source matrix
         * @returns out
         */
        public static adjoint(out: mat2, a: mat2): mat2;

        /**
         * Calculates the determinant of a mat2
         *
         * @param a the source matrix
         * @returns determinant of a
         */
        public static determinant(a: mat2): number;

        /**
         * Multiplies two mat2's
         *
         * @param out the receiving matrix
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static multiply(out: mat2, a: mat2, b: mat2): mat2;

        /**
         * Multiplies two mat2's
         *
         * @param out the receiving matrix
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static mul(out: mat2, a: mat2, b: mat2): mat2;

        /**
         * Rotates a mat2 by the given angle
         *
         * @param out the receiving matrix
         * @param a the matrix to rotate
         * @param rad the angle to rotate the matrix by
         * @returns out
         */
        public static rotate(out: mat2, a: mat2, rad: number): mat2;

        /**
         * Scales the mat2 by the dimensions in the given vec2
         *
         * @param out the receiving matrix
         * @param a the matrix to rotate
         * @param v the vec2 to scale the matrix by
         * @returns out
         **/
        public static scale(out: mat2, a: mat2, v: vec2 | number[]): mat2;

        /**
         * Creates a matrix from a given angle
         * This is equivalent to (but much faster than):
         *
         *     mat2.identity(dest);
         *     mat2.rotate(dest, dest, rad);
         *
         * @param {mat2} out mat2 receiving operation result
         * @param {number} rad the angle to rotate the matrix by
         * @returns {mat2} out
         */
        public static fromRotation(out: mat2, rad: number): mat2;

        /**
         * Creates a matrix from a vector scaling
         * This is equivalent to (but much faster than):
         *
         *     mat2.identity(dest);
         *     mat2.scale(dest, dest, vec);
         *
         * @param {mat2} out mat2 receiving operation result
         * @param {vec2} v Scaling vector
         * @returns {mat2} out
         */
        public static fromScaling(out: mat2, v: vec2 | number[]): mat2;

        /**
         * Returns a string representation of a mat2
         *
         * @param a matrix to represent as a string
         * @returns string representation of the matrix
         */
        public static str(a: mat2): string;

        /**
         * Returns Frobenius norm of a mat2
         *
         * @param a the matrix to calculate Frobenius norm of
         * @returns Frobenius norm
         */
        public static frob(a: mat2): number;

        /**
         * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
         * @param L the lower triangular matrix
         * @param D the diagonal matrix
         * @param U the upper triangular matrix
         * @param a the input matrix to factorize
         */
        public static LDU(L: mat2, D: mat2, U: mat2, a: mat2): mat2;

        /**
         * Adds two mat2's
         *
         * @param {mat2} out the receiving matrix
         * @param {mat2} a the first operand
         * @param {mat2} b the second operand
         * @returns {mat2} out
         */
        public static add(out: mat2, a: mat2, b: mat2): mat2;

        /**
         * Subtracts matrix b from matrix a
         *
         * @param {mat2} out the receiving matrix
         * @param {mat2} a the first operand
         * @param {mat2} b the second operand
         * @returns {mat2} out
         */
        public static subtract (out: mat2, a: mat2, b: mat2): mat2;

        /**
         * Subtracts matrix b from matrix a
         *
         * @param {mat2} out the receiving matrix
         * @param {mat2} a the first operand
         * @param {mat2} b the second operand
         * @returns {mat2} out
         */
        public static sub (out: mat2, a: mat2, b: mat2): mat2;

        /**
         * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
         *
         * @param {mat2} a The first matrix.
         * @param {mat2} b The second matrix.
         * @returns {boolean} True if the matrices are equal, false otherwise.
         */
        public static exactEquals (a: mat2, b: mat2): boolean;

        /**
         * Returns whether or not the matrices have approximately the same elements in the same position.
         *
         * @param {mat2} a The first matrix.
         * @param {mat2} b The second matrix.
         * @returns {boolean} True if the matrices are equal, false otherwise.
         */
        public static equals (a: mat2, b: mat2): boolean;

        /**
         * Multiply each element of the matrix by a scalar.
         *
         * @param {mat2} out the receiving matrix
         * @param {mat2} a the matrix to scale
         * @param {number} b amount to scale the matrix's elements by
         * @returns {mat2} out
         */
        public static multiplyScalar (out: mat2, a: mat2, b: number): mat2

        /**
         * Adds two mat2's after multiplying each element of the second operand by a scalar value.
         *
         * @param {mat2} out the receiving vector
         * @param {mat2} a the first operand
         * @param {mat2} b the second operand
         * @param {number} scale the amount to scale b's elements by before adding
         * @returns {mat2} out
         */
        public static multiplyScalarAndAdd (out: mat2, a: mat2, b: mat2, scale: number): mat2



    }

    // mat2d
    export class mat2d extends Float32Array {
        private typeMat2d: number;

        /**
         * Creates a new identity mat2d
         *
         * @returns a new 2x3 matrix
         */
        public static create(): mat2d;

        /**
         * Creates a new mat2d initialized with values from an existing matrix
         *
         * @param a matrix to clone
         * @returns a new 2x3 matrix
         */
        public static clone(a: mat2d): mat2d;

        /**
         * Copy the values from one mat2d to another
         *
         * @param out the receiving matrix
         * @param a the source matrix
         * @returns out
         */
        public static copy(out: mat2d, a: mat2d): mat2d;

        /**
         * Set a mat2d to the identity matrix
         *
         * @param out the receiving matrix
         * @returns out
         */
        public static identity(out: mat2d): mat2d;

        /**
         * Create a new mat2d with the given values
         *
         * @param {number} a Component A (index 0)
         * @param {number} b Component B (index 1)
         * @param {number} c Component C (index 2)
         * @param {number} d Component D (index 3)
         * @param {number} tx Component TX (index 4)
         * @param {number} ty Component TY (index 5)
         * @returns {mat2d} A new mat2d
         */
        public static fromValues (a: number, b: number, c: number, d: number, tx: number, ty: number): mat2d


        /**
         * Set the components of a mat2d to the given values
         *
         * @param {mat2d} out the receiving matrix
         * @param {number} a Component A (index 0)
         * @param {number} b Component B (index 1)
         * @param {number} c Component C (index 2)
         * @param {number} d Component D (index 3)
         * @param {number} tx Component TX (index 4)
         * @param {number} ty Component TY (index 5)
         * @returns {mat2d} out
         */
        public static set (out: mat2d, a: number, b: number, c: number, d: number, tx: number, ty: number): mat2d

        /**
         * Inverts a mat2d
         *
         * @param out the receiving matrix
         * @param a the source matrix
         * @returns out
         */
        public static invert(out: mat2d, a: mat2d): mat2d | null;

        /**
         * Calculates the determinant of a mat2d
         *
         * @param a the source matrix
         * @returns determinant of a
         */
        public static determinant(a: mat2d): number;

        /**
         * Multiplies two mat2d's
         *
         * @param out the receiving matrix
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static multiply(out: mat2d, a: mat2d, b: mat2d): mat2d;

        /**
         * Multiplies two mat2d's
         *
         * @param out the receiving matrix
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static mul(out: mat2d, a: mat2d, b: mat2d): mat2d;

        /**
         * Rotates a mat2d by the given angle
         *
         * @param out the receiving matrix
         * @param a the matrix to rotate
         * @param rad the angle to rotate the matrix by
         * @returns out
         */
        public static rotate(out: mat2d, a: mat2d, rad: number): mat2d;

        /**
         * Scales the mat2d by the dimensions in the given vec2
         *
         * @param out the receiving matrix
         * @param a the matrix to translate
         * @param v the vec2 to scale the matrix by
         * @returns out
         **/
        public static scale(out: mat2d, a: mat2d, v: vec2 | number[]): mat2d;

        /**
         * Translates the mat2d by the dimensions in the given vec2
         *
         * @param out the receiving matrix
         * @param a the matrix to translate
         * @param v the vec2 to translate the matrix by
         * @returns out
         **/
        public static translate(out: mat2d, a: mat2d, v: vec2 | number[]): mat2d;

        /**
         * Creates a matrix from a given angle
         * This is equivalent to (but much faster than):
         *
         *     mat2d.identity(dest);
         *     mat2d.rotate(dest, dest, rad);
         *
         * @param {mat2d} out mat2d receiving operation result
         * @param {number} rad the angle to rotate the matrix by
         * @returns {mat2d} out
         */
        public static fromRotation (out: mat2d, rad: number): mat2d;

        /**
         * Creates a matrix from a vector scaling
         * This is equivalent to (but much faster than):
         *
         *     mat2d.identity(dest);
         *     mat2d.scale(dest, dest, vec);
         *
         * @param {mat2d} out mat2d receiving operation result
         * @param {vec2} v Scaling vector
         * @returns {mat2d} out
         */
        public static fromScaling (out: mat2d, v: vec2 | number[]): mat2d;

        /**
         * Creates a matrix from a vector translation
         * This is equivalent to (but much faster than):
         *
         *     mat2d.identity(dest);
         *     mat2d.translate(dest, dest, vec);
         *
         * @param {mat2d} out mat2d receiving operation result
         * @param {vec2} v Translation vector
         * @returns {mat2d} out
         */
        public static fromTranslation (out: mat2d, v: vec2 | number[]): mat2d

        /**
         * Returns a string representation of a mat2d
         *
         * @param a matrix to represent as a string
         * @returns string representation of the matrix
         */
        public static str(a: mat2d): string;

        /**
         * Returns Frobenius norm of a mat2d
         *
         * @param a the matrix to calculate Frobenius norm of
         * @returns Frobenius norm
         */
        public static frob(a: mat2d): number;

        /**
         * Adds two mat2d's
         *
         * @param {mat2d} out the receiving matrix
         * @param {mat2d} a the first operand
         * @param {mat2d} b the second operand
         * @returns {mat2d} out
         */
        public static add (out: mat2d, a: mat2d, b: mat2d): mat2d

        /**
         * Subtracts matrix b from matrix a
         *
         * @param {mat2d} out the receiving matrix
         * @param {mat2d} a the first operand
         * @param {mat2d} b the second operand
         * @returns {mat2d} out
         */
        public static subtract(out: mat2d, a: mat2d, b: mat2d): mat2d

        /**
         * Subtracts matrix b from matrix a
         *
         * @param {mat2d} out the receiving matrix
         * @param {mat2d} a the first operand
         * @param {mat2d} b the second operand
         * @returns {mat2d} out
         */
        public static sub(out: mat2d, a: mat2d, b: mat2d): mat2d

        /**
         * Multiply each element of the matrix by a scalar.
         *
         * @param {mat2d} out the receiving matrix
         * @param {mat2d} a the matrix to scale
         * @param {number} b amount to scale the matrix's elements by
         * @returns {mat2d} out
         */
        public static multiplyScalar (out: mat2d, a: mat2d, b: number): mat2d;

        /**
         * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
         *
         * @param {mat2d} out the receiving vector
         * @param {mat2d} a the first operand
         * @param {mat2d} b the second operand
         * @param {number} scale the amount to scale b's elements by before adding
         * @returns {mat2d} out
         */
        public static multiplyScalarAndAdd (out: mat2d, a: mat2d, b: mat2d, scale: number): mat2d

        /**
         * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
         *
         * @param {mat2d} a The first matrix.
         * @param {mat2d} b The second matrix.
         * @returns {boolean} True if the matrices are equal, false otherwise.
         */
        public static exactEquals (a: mat2d, b: mat2d): boolean;

        /**
         * Returns whether or not the matrices have approximately the same elements in the same position.
         *
         * @param {mat2d} a The first matrix.
         * @param {mat2d} b The second matrix.
         * @returns {boolean} True if the matrices are equal, false otherwise.
         */
        public static equals (a: mat2d, b: mat2d): boolean
    }

    // mat3
    export class mat3 extends Float32Array {
        private typeMat3: number;

        /**
         * Creates a new identity mat3
         *
         * @returns a new 3x3 matrix
         */
        public static create(): mat3;

        /**
         * Copies the upper-left 3x3 values into the given mat3.
         *
         * @param {mat3} out the receiving 3x3 matrix
         * @param {mat4} a   the source 4x4 matrix
         * @returns {mat3} out
         */
        public static fromMat4(out: mat3, a: mat4): mat3

        /**
         * Creates a new mat3 initialized with values from an existing matrix
         *
         * @param a matrix to clone
         * @returns a new 3x3 matrix
         */
        public static clone(a: mat3): mat3;

        /**
         * Copy the values from one mat3 to another
         *
         * @param out the receiving matrix
         * @param a the source matrix
         * @returns out
         */
        public static copy(out: mat3, a: mat3): mat3;

        /**
         * Create a new mat3 with the given values
         *
         * @param {number} m00 Component in column 0, row 0 position (index 0)
         * @param {number} m01 Component in column 0, row 1 position (index 1)
         * @param {number} m02 Component in column 0, row 2 position (index 2)
         * @param {number} m10 Component in column 1, row 0 position (index 3)
         * @param {number} m11 Component in column 1, row 1 position (index 4)
         * @param {number} m12 Component in column 1, row 2 position (index 5)
         * @param {number} m20 Component in column 2, row 0 position (index 6)
         * @param {number} m21 Component in column 2, row 1 position (index 7)
         * @param {number} m22 Component in column 2, row 2 position (index 8)
         * @returns {mat3} A new mat3
         */
        public static fromValues(m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): mat3;


        /**
         * Set the components of a mat3 to the given values
         *
         * @param {mat3} out the receiving matrix
         * @param {number} m00 Component in column 0, row 0 position (index 0)
         * @param {number} m01 Component in column 0, row 1 position (index 1)
         * @param {number} m02 Component in column 0, row 2 position (index 2)
         * @param {number} m10 Component in column 1, row 0 position (index 3)
         * @param {number} m11 Component in column 1, row 1 position (index 4)
         * @param {number} m12 Component in column 1, row 2 position (index 5)
         * @param {number} m20 Component in column 2, row 0 position (index 6)
         * @param {number} m21 Component in column 2, row 1 position (index 7)
         * @param {number} m22 Component in column 2, row 2 position (index 8)
         * @returns {mat3} out
         */
        public static set(out: mat3, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): mat3

        /**
         * Set a mat3 to the identity matrix
         *
         * @param out the receiving matrix
         * @returns out
         */
        public static identity(out: mat3): mat3;

        /**
         * Transpose the values of a mat3
         *
         * @param out the receiving matrix
         * @param a the source matrix
         * @returns out
         */
        public static transpose(out: mat3, a: mat3): mat3;
        
         /**
         * Generates a 2D projection matrix with the given bounds
         *
         * @param out the receiving matrix
         * @param width width of your gl context
         * @param height height of gl context 
         * @returns out
         */
        public static projection(out: mat3, width: number, height: number): mat3;

        /**
         * Inverts a mat3
         *
         * @param out the receiving matrix
         * @param a the source matrix
         * @returns out
         */
        public static invert(out: mat3, a: mat3): mat3 | null;

        /**
         * Calculates the adjugate of a mat3
         *
         * @param out the receiving matrix
         * @param a the source matrix
         * @returns out
         */
        public static adjoint(out: mat3, a: mat3): mat3;

        /**
         * Calculates the determinant of a mat3
         *
         * @param a the source matrix
         * @returns determinant of a
         */
        public static determinant(a: mat3): number;

        /**
         * Multiplies two mat3's
         *
         * @param out the receiving matrix
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static multiply(out: mat3, a: mat3, b: mat3): mat3;

        /**
         * Multiplies two mat3's
         *
         * @param out the receiving matrix
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static mul(out: mat3, a: mat3, b: mat3): mat3;


        /**
         * Translate a mat3 by the given vector
         *
         * @param out the receiving matrix
         * @param a the matrix to translate
         * @param v vector to translate by
         * @returns out
         */
        public static translate(out: mat3, a: mat3, v: vec3 | number[]): mat3;

        /**
         * Rotates a mat3 by the given angle
         *
         * @param out the receiving matrix
         * @param a the matrix to rotate
         * @param rad the angle to rotate the matrix by
         * @returns out
         */
        public static rotate(out: mat3, a: mat3, rad: number): mat3;

        /**
         * Scales the mat3 by the dimensions in the given vec2
         *
         * @param out the receiving matrix
         * @param a the matrix to rotate
         * @param v the vec2 to scale the matrix by
         * @returns out
         **/
        public static scale(out: mat3, a: mat3, v: vec2 | number[]): mat3;

        /**
         * Creates a matrix from a vector translation
         * This is equivalent to (but much faster than):
         *
         *     mat3.identity(dest);
         *     mat3.translate(dest, dest, vec);
         *
         * @param {mat3} out mat3 receiving operation result
         * @param {vec2} v Translation vector
         * @returns {mat3} out
         */
        public static fromTranslation(out: mat3, v: vec2 | number[]): mat3

        /**
         * Creates a matrix from a given angle
         * This is equivalent to (but much faster than):
         *
         *     mat3.identity(dest);
         *     mat3.rotate(dest, dest, rad);
         *
         * @param {mat3} out mat3 receiving operation result
         * @param {number} rad the angle to rotate the matrix by
         * @returns {mat3} out
         */
        public static fromRotation(out: mat3, rad: number): mat3

        /**
         * Creates a matrix from a vector scaling
         * This is equivalent to (but much faster than):
         *
         *     mat3.identity(dest);
         *     mat3.scale(dest, dest, vec);
         *
         * @param {mat3} out mat3 receiving operation result
         * @param {vec2} v Scaling vector
         * @returns {mat3} out
         */
        public static fromScaling(out: mat3, v: vec2 | number[]): mat3

        /**
         * Copies the values from a mat2d into a mat3
         *
         * @param out the receiving matrix
         * @param {mat2d} a the matrix to copy
         * @returns out
         **/
        public static fromMat2d(out: mat3, a: mat2d): mat3;

        /**
         * Calculates a 3x3 matrix from the given quaternion
         *
         * @param out mat3 receiving operation result
         * @param q Quaternion to create matrix from
         *
         * @returns out
         */
        public static fromQuat(out: mat3, q: quat): mat3;

        /**
         * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
         *
         * @param out mat3 receiving operation result
         * @param a Mat4 to derive the normal matrix from
         *
         * @returns out
         */
        public static normalFromMat4(out: mat3, a: mat4): mat3 | null;

        /**
         * Returns a string representation of a mat3
         *
         * @param mat matrix to represent as a string
         * @returns string representation of the matrix
         */
        public static str(mat: mat3): string;

        /**
         * Returns Frobenius norm of a mat3
         *
         * @param a the matrix to calculate Frobenius norm of
         * @returns Frobenius norm
         */
        public static frob(a: mat3): number;

        /**
         * Adds two mat3's
         *
         * @param {mat3} out the receiving matrix
         * @param {mat3} a the first operand
         * @param {mat3} b the second operand
         * @returns {mat3} out
         */
        public static add(out: mat3, a: mat3, b: mat3): mat3

        /**
         * Subtracts matrix b from matrix a
         *
         * @param {mat3} out the receiving matrix
         * @param {mat3} a the first operand
         * @param {mat3} b the second operand
         * @returns {mat3} out
         */
        public static subtract(out: mat3, a: mat3, b: mat3): mat3

        /**
         * Subtracts matrix b from matrix a
         *
         * @param {mat3} out the receiving matrix
         * @param {mat3} a the first operand
         * @param {mat3} b the second operand
         * @returns {mat3} out
         */
        public static sub(out: mat3, a: mat3, b: mat3): mat3

        /**
         * Multiply each element of the matrix by a scalar.
         *
         * @param {mat3} out the receiving matrix
         * @param {mat3} a the matrix to scale
         * @param {number} b amount to scale the matrix's elements by
         * @returns {mat3} out
         */
        public static multiplyScalar(out: mat3, a: mat3, b: number): mat3

        /**
         * Adds two mat3's after multiplying each element of the second operand by a scalar value.
         *
         * @param {mat3} out the receiving vector
         * @param {mat3} a the first operand
         * @param {mat3} b the second operand
         * @param {number} scale the amount to scale b's elements by before adding
         * @returns {mat3} out
         */
        public static multiplyScalarAndAdd(out: mat3, a: mat3, b: mat3, scale: number): mat3

        /**
         * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
         *
         * @param {mat3} a The first matrix.
         * @param {mat3} b The second matrix.
         * @returns {boolean} True if the matrices are equal, false otherwise.
         */
        public static exactEquals(a: mat3, b: mat3): boolean;

        /**
         * Returns whether or not the matrices have approximately the same elements in the same position.
         *
         * @param {mat3} a The first matrix.
         * @param {mat3} b The second matrix.
         * @returns {boolean} True if the matrices are equal, false otherwise.
         */
        public static equals(a: mat3, b: mat3): boolean
    }

    // mat4
    export class mat4 extends Float32Array {
        private typeMat4: number;

        /**
         * Creates a new identity mat4
         *
         * @returns a new 4x4 matrix
         */
        public static create(): mat4;

        /**
         * Creates a new mat4 initialized with values from an existing matrix
         *
         * @param a matrix to clone
         * @returns a new 4x4 matrix
         */
        public static clone(a: mat4): mat4;

        /**
         * Copy the values from one mat4 to another
         *
         * @param out the receiving matrix
         * @param a the source matrix
         * @returns out
         */
        public static copy(out: mat4, a: mat4): mat4;


        /**
         * Create a new mat4 with the given values
         *
         * @param {number} m00 Component in column 0, row 0 position (index 0)
         * @param {number} m01 Component in column 0, row 1 position (index 1)
         * @param {number} m02 Component in column 0, row 2 position (index 2)
         * @param {number} m03 Component in column 0, row 3 position (index 3)
         * @param {number} m10 Component in column 1, row 0 position (index 4)
         * @param {number} m11 Component in column 1, row 1 position (index 5)
         * @param {number} m12 Component in column 1, row 2 position (index 6)
         * @param {number} m13 Component in column 1, row 3 position (index 7)
         * @param {number} m20 Component in column 2, row 0 position (index 8)
         * @param {number} m21 Component in column 2, row 1 position (index 9)
         * @param {number} m22 Component in column 2, row 2 position (index 10)
         * @param {number} m23 Component in column 2, row 3 position (index 11)
         * @param {number} m30 Component in column 3, row 0 position (index 12)
         * @param {number} m31 Component in column 3, row 1 position (index 13)
         * @param {number} m32 Component in column 3, row 2 position (index 14)
         * @param {number} m33 Component in column 3, row 3 position (index 15)
         * @returns {mat4} A new mat4
         */
        public static fromValues(m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): mat4;

        /**
         * Set the components of a mat4 to the given values
         *
         * @param {mat4} out the receiving matrix
         * @param {number} m00 Component in column 0, row 0 position (index 0)
         * @param {number} m01 Component in column 0, row 1 position (index 1)
         * @param {number} m02 Component in column 0, row 2 position (index 2)
         * @param {number} m03 Component in column 0, row 3 position (index 3)
         * @param {number} m10 Component in column 1, row 0 position (index 4)
         * @param {number} m11 Component in column 1, row 1 position (index 5)
         * @param {number} m12 Component in column 1, row 2 position (index 6)
         * @param {number} m13 Component in column 1, row 3 position (index 7)
         * @param {number} m20 Component in column 2, row 0 position (index 8)
         * @param {number} m21 Component in column 2, row 1 position (index 9)
         * @param {number} m22 Component in column 2, row 2 position (index 10)
         * @param {number} m23 Component in column 2, row 3 position (index 11)
         * @param {number} m30 Component in column 3, row 0 position (index 12)
         * @param {number} m31 Component in column 3, row 1 position (index 13)
         * @param {number} m32 Component in column 3, row 2 position (index 14)
         * @param {number} m33 Component in column 3, row 3 position (index 15)
         * @returns {mat4} out
         */
        public static set(out: mat4, m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number): mat4;

        /**
         * Set a mat4 to the identity matrix
         *
         * @param out the receiving matrix
         * @returns out
         */
        public static identity(out: mat4): mat4;

        /**
         * Transpose the values of a mat4
         *
         * @param out the receiving matrix
         * @param a the source matrix
         * @returns out
         */
        public static transpose(out: mat4, a: mat4): mat4;

        /**
         * Inverts a mat4
         *
         * @param out the receiving matrix
         * @param a the source matrix
         * @returns out
         */
        public static invert(out: mat4, a: mat4): mat4 | null;

        /**
         * Calculates the adjugate of a mat4
         *
         * @param out the receiving matrix
         * @param a the source matrix
         * @returns out
         */
        public static adjoint(out: mat4, a: mat4): mat4;

        /**
         * Calculates the determinant of a mat4
         *
         * @param a the source matrix
         * @returns determinant of a
         */
        public static determinant(a: mat4): number;

        /**
         * Multiplies two mat4's
         *
         * @param out the receiving matrix
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static multiply(out: mat4, a: mat4, b: mat4): mat4;

        /**
         * Multiplies two mat4's
         *
         * @param out the receiving matrix
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static mul(out: mat4, a: mat4, b: mat4): mat4;

        /**
         * Translate a mat4 by the given vector
         *
         * @param out the receiving matrix
         * @param a the matrix to translate
         * @param v vector to translate by
         * @returns out
         */
        public static translate(out: mat4, a: mat4, v: vec3 | number[]): mat4;

        /**
         * Scales the mat4 by the dimensions in the given vec3
         *
         * @param out the receiving matrix
         * @param a the matrix to scale
         * @param v the vec3 to scale the matrix by
         * @returns out
         **/
        public static scale(out: mat4, a: mat4, v: vec3 | number[]): mat4;

        /**
         * Rotates a mat4 by the given angle
         *
         * @param out the receiving matrix
         * @param a the matrix to rotate
         * @param rad the angle to rotate the matrix by
         * @param axis the axis to rotate around
         * @returns out
         */
        public static rotate(out: mat4, a: mat4, rad: number, axis: vec3 | number[]): mat4;

        /**
         * Rotates a matrix by the given angle around the X axis
         *
         * @param out the receiving matrix
         * @param a the matrix to rotate
         * @param rad the angle to rotate the matrix by
         * @returns out
         */
        public static rotateX(out: mat4, a: mat4, rad: number): mat4;

        /**
         * Rotates a matrix by the given angle around the Y axis
         *
         * @param out the receiving matrix
         * @param a the matrix to rotate
         * @param rad the angle to rotate the matrix by
         * @returns out
         */
        public static rotateY(out: mat4, a: mat4, rad: number): mat4;

        /**
         * Rotates a matrix by the given angle around the Z axis
         *
         * @param out the receiving matrix
         * @param a the matrix to rotate
         * @param rad the angle to rotate the matrix by
         * @returns out
         */
        public static rotateZ(out: mat4, a: mat4, rad: number): mat4;

        /**
         * Creates a matrix from a vector translation
         * This is equivalent to (but much faster than):
         *
         *     mat4.identity(dest);
         *     mat4.translate(dest, dest, vec);
         *
         * @param {mat4} out mat4 receiving operation result
         * @param {vec3} v Translation vector
         * @returns {mat4} out
         */
        public static fromTranslation(out: mat4, v: vec3 | number[]): mat4

        /**
         * Creates a matrix from a vector scaling
         * This is equivalent to (but much faster than):
         *
         *     mat4.identity(dest);
         *     mat4.scale(dest, dest, vec);
         *
         * @param {mat4} out mat4 receiving operation result
         * @param {vec3} v Scaling vector
         * @returns {mat4} out
         */
        public static fromScaling(out: mat4, v: vec3 | number[]): mat4

        /**
         * Creates a matrix from a given angle around a given axis
         * This is equivalent to (but much faster than):
         *
         *     mat4.identity(dest);
         *     mat4.rotate(dest, dest, rad, axis);
         *
         * @param {mat4} out mat4 receiving operation result
         * @param {number} rad the angle to rotate the matrix by
         * @param {vec3} axis the axis to rotate around
         * @returns {mat4} out
         */
        public static fromRotation(out: mat4, rad: number, axis: vec3 | number[]): mat4

        /**
         * Creates a matrix from the given angle around the X axis
         * This is equivalent to (but much faster than):
         *
         *     mat4.identity(dest);
         *     mat4.rotateX(dest, dest, rad);
         *
         * @param {mat4} out mat4 receiving operation result
         * @param {number} rad the angle to rotate the matrix by
         * @returns {mat4} out
         */
        public static fromXRotation(out: mat4, rad: number): mat4

        /**
         * Creates a matrix from the given angle around the Y axis
         * This is equivalent to (but much faster than):
         *
         *     mat4.identity(dest);
         *     mat4.rotateY(dest, dest, rad);
         *
         * @param {mat4} out mat4 receiving operation result
         * @param {number} rad the angle to rotate the matrix by
         * @returns {mat4} out
         */
        public static fromYRotation(out: mat4, rad: number): mat4


        /**
         * Creates a matrix from the given angle around the Z axis
         * This is equivalent to (but much faster than):
         *
         *     mat4.identity(dest);
         *     mat4.rotateZ(dest, dest, rad);
         *
         * @param {mat4} out mat4 receiving operation result
         * @param {number} rad the angle to rotate the matrix by
         * @returns {mat4} out
         */
        public static fromZRotation(out: mat4, rad: number): mat4

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
        public static fromRotationTranslation(out: mat4, q: quat, v: vec3 | number[]): mat4;

        /**
         * Returns the translation vector component of a transformation
         *  matrix. If a matrix is built with fromRotationTranslation,
         *  the returned vector will be the same as the translation vector
         *  originally supplied.
         * @param  {vec3} out Vector to receive translation component
         * @param  {mat4} mat Matrix to be decomposed (input)
         * @return {vec3} out
         */
        public static getTranslation(out: vec3, mat: mat4): vec3;

        /**
         * Returns the scaling factor component of a transformation matrix. 
         * If a matrix is built with fromRotationTranslationScale with a 
         * normalized Quaternion parameter, the returned vector will be 
         * the same as the scaling vector originally supplied.
         * @param {vec3} out Vector to receive scaling factor component
         * @param {mat4} mat Matrix to be decomposed (input)
         * @return {vec3} out
         */
        public static getScaling(out: vec3, mat: mat4): vec3;

        /**
         * Returns a quaternion representing the rotational component
         *  of a transformation matrix. If a matrix is built with
         *  fromRotationTranslation, the returned quaternion will be the
         *  same as the quaternion originally supplied.
         * @param {quat} out Quaternion to receive the rotation component
         * @param {mat4} mat Matrix to be decomposed (input)
         * @return {quat} out
         */
        public static getRotation(out: quat, mat: mat4): quat;

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
        public static fromRotationTranslationScale(out: mat4, q: quat, v: vec3 | number[], s: vec3 | number[]): mat4;

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
         * @param {mat4} out mat4 receiving operation result
         * @param {quat} q Rotation quaternion
         * @param {vec3} v Translation vector
         * @param {vec3} s Scaling vector
         * @param {vec3} o The origin vector around which to scale and rotate
         * @returns {mat4} out
         */
        public static fromRotationTranslationScaleOrigin(out: mat4, q: quat, v: vec3 | number[], s: vec3 | number[], o: vec3 | number[]): mat4

        /**
         * Calculates a 4x4 matrix from the given quaternion
         *
         * @param {mat4} out mat4 receiving operation result
         * @param {quat} q Quaternion to create matrix from
         *
         * @returns {mat4} out
         */
        public static fromQuat(out: mat4, q: quat): mat4

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
        public static frustum(out: mat4, left: number, right: number,
                              bottom: number, top: number, near: number, far: number): mat4;

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
        public static perspective(out: mat4, fovy: number, aspect: number,
                                  near: number, far: number): mat4;

        /**
         * Generates a perspective projection matrix with the given field of view.
         * This is primarily useful for generating projection matrices to be used
         * with the still experimental WebVR API.
         *
         * @param {mat4} out mat4 frustum matrix will be written into
         * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
         * @param {number} near Near bound of the frustum
         * @param {number} far Far bound of the frustum
         * @returns {mat4} out
         */
        public static perspectiveFromFieldOfView(out: mat4,
                                                 fov:{upDegrees: number, downDegrees: number, leftDegrees: number, rightDegrees: number},
                                                 near: number, far: number): mat4

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
        public static ortho(out: mat4, left: number, right: number,
                            bottom: number, top: number, near: number, far: number): mat4;

        /**
         * Generates a look-at matrix with the given eye position, focal point, and up axis
         *
         * @param out mat4 frustum matrix will be written into
         * @param eye Position of the viewer
         * @param center Point the viewer is looking at
         * @param up vec3 pointing up
         * @returns out
         */
        public static lookAt(out: mat4, eye: vec3 | number[], center: vec3 | number[], up: vec3 | number[]): mat4;

        /**
         * Returns a string representation of a mat4
         *
         * @param mat matrix to represent as a string
         * @returns string representation of the matrix
         */
        public static str(mat: mat4): string;

        /**
         * Returns Frobenius norm of a mat4
         *
         * @param a the matrix to calculate Frobenius norm of
         * @returns Frobenius norm
         */
        public static frob(a: mat4): number;

        /**
         * Adds two mat4's
         *
         * @param {mat4} out the receiving matrix
         * @param {mat4} a the first operand
         * @param {mat4} b the second operand
         * @returns {mat4} out
         */
        public static add(out: mat4, a: mat4, b: mat4): mat4

        /**
         * Subtracts matrix b from matrix a
         *
         * @param {mat4} out the receiving matrix
         * @param {mat4} a the first operand
         * @param {mat4} b the second operand
         * @returns {mat4} out
         */
        public static subtract(out: mat4, a: mat4, b: mat4): mat4

        /**
         * Subtracts matrix b from matrix a
         *
         * @param {mat4} out the receiving matrix
         * @param {mat4} a the first operand
         * @param {mat4} b the second operand
         * @returns {mat4} out
         */
        public static sub(out: mat4, a: mat4, b: mat4): mat4

        /**
         * Multiply each element of the matrix by a scalar.
         *
         * @param {mat4} out the receiving matrix
         * @param {mat4} a the matrix to scale
         * @param {number} b amount to scale the matrix's elements by
         * @returns {mat4} out
         */
        public static multiplyScalar(out: mat4, a: mat4, b: number): mat4

        /**
         * Adds two mat4's after multiplying each element of the second operand by a scalar value.
         *
         * @param {mat4} out the receiving vector
         * @param {mat4} a the first operand
         * @param {mat4} b the second operand
         * @param {number} scale the amount to scale b's elements by before adding
         * @returns {mat4} out
         */
        public static multiplyScalarAndAdd (out: mat4, a: mat4, b: mat4, scale: number): mat4

        /**
         * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
         *
         * @param {mat4} a The first matrix.
         * @param {mat4} b The second matrix.
         * @returns {boolean} True if the matrices are equal, false otherwise.
         */
        public static exactEquals (a: mat4, b: mat4): boolean

        /**
         * Returns whether or not the matrices have approximately the same elements in the same position.
         *
         * @param {mat4} a The first matrix.
         * @param {mat4} b The second matrix.
         * @returns {boolean} True if the matrices are equal, false otherwise.
         */
        public static equals (a: mat4, b: mat4): boolean

    }

    // quat
    export class quat extends Float32Array {
        private typeQuat: number;

        /**
         * Creates a new identity quat
         *
         * @returns a new quaternion
         */
        public static create(): quat;

        /**
         * Creates a new quat initialized with values from an existing quaternion
         *
         * @param a quaternion to clone
         * @returns a new quaternion
         * @function
         */
        public static clone(a: quat): quat;

        /**
         * Creates a new quat initialized with the given values
         *
         * @param x X component
         * @param y Y component
         * @param z Z component
         * @param w W component
         * @returns a new quaternion
         * @function
         */
        public static fromValues(x: number, y: number, z: number, w: number): quat;

        /**
         * Copy the values from one quat to another
         *
         * @param out the receiving quaternion
         * @param a the source quaternion
         * @returns out
         * @function
         */
        public static copy(out: quat, a: quat): quat;

        /**
         * Set the components of a quat to the given values
         *
         * @param out the receiving quaternion
         * @param x X component
         * @param y Y component
         * @param z Z component
         * @param w W component
         * @returns out
         * @function
         */
        public static set(out: quat, x: number, y: number, z: number, w: number): quat;

        /**
         * Set a quat to the identity quaternion
         *
         * @param out the receiving quaternion
         * @returns out
         */
        public static identity(out: quat): quat;

        /**
         * Sets a quaternion to represent the shortest rotation from one
         * vector to another.
         *
         * Both vectors are assumed to be unit length.
         *
         * @param {quat} out the receiving quaternion.
         * @param {vec3} a the initial vector
         * @param {vec3} b the destination vector
         * @returns {quat} out
         */
        public static rotationTo (out: quat, a: vec3 | number[], b: vec3 | number[]): quat;

        /**
         * Sets the specified quaternion with values corresponding to the given
         * axes. Each axis is a vec3 and is expected to be unit length and
         * perpendicular to all other specified axes.
         *
         * @param {vec3} view  the vector representing the viewing direction
         * @param {vec3} right the vector representing the local "right" direction
         * @param {vec3} up    the vector representing the local "up" direction
         * @returns {quat} out
         */
        public static setAxes (out: quat, view: vec3 | number[], right: vec3 | number[], up: vec3 | number[]): quat



        /**
         * Sets a quat from the given angle and rotation axis,
         * then returns it.
         *
         * @param out the receiving quaternion
         * @param axis the axis around which to rotate
         * @param rad the angle in radians
         * @returns out
         **/
        public static setAxisAngle(out: quat, axis: vec3 | number[], rad: number): quat;

        /**
         * Gets the rotation axis and angle for a given
         *  quaternion. If a quaternion is created with
         *  setAxisAngle, this method will return the same
         *  values as providied in the original parameter list
         *  OR functionally equivalent values.
         * Example: The quaternion formed by axis [0, 0, 1] and
         *  angle -90 is the same as the quaternion formed by
         *  [0, 0, 1] and 270. This method favors the latter.
         * @param  {vec3} out_axis  Vector receiving the axis of rotation
         * @param  {quat} q     Quaternion to be decomposed
         * @return {number}     Angle, in radians, of the rotation
         */
        public static getAxisAngle (out_axis: vec3 | number[], q: quat): number

        /**
         * Adds two quat's
         *
         * @param out the receiving quaternion
         * @param a the first operand
         * @param b the second operand
         * @returns out
         * @function
         */
        public static add(out: quat, a: quat, b: quat): quat;

        /**
         * Multiplies two quat's
         *
         * @param out the receiving quaternion
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static multiply(out: quat, a: quat, b: quat): quat;

        /**
         * Multiplies two quat's
         *
         * @param out the receiving quaternion
         * @param a the first operand
         * @param b the second operand
         * @returns out
         */
        public static mul(out: quat, a: quat, b: quat): quat;

        /**
         * Scales a quat by a scalar number
         *
         * @param out the receiving vector
         * @param a the vector to scale
         * @param b amount to scale the vector by
         * @returns out
         * @function
         */
        public static scale(out: quat, a: quat, b: number): quat;

        /**
         * Calculates the length of a quat
         *
         * @param a vector to calculate length of
         * @returns length of a
         * @function
         */
        public static length(a: quat): number;

        /**
         * Calculates the length of a quat
         *
         * @param a vector to calculate length of
         * @returns length of a
         * @function
         */
        public static len(a: quat): number;

        /**
         * Calculates the squared length of a quat
         *
         * @param a vector to calculate squared length of
         * @returns squared length of a
         * @function
         */
        public static squaredLength(a: quat): number;

        /**
         * Calculates the squared length of a quat
         *
         * @param a vector to calculate squared length of
         * @returns squared length of a
         * @function
         */
        public static sqrLen(a: quat): number;

        /**
         * Normalize a quat
         *
         * @param out the receiving quaternion
         * @param a quaternion to normalize
         * @returns out
         * @function
         */
        public static normalize(out: quat, a: quat): quat;

        /**
         * Calculates the dot product of two quat's
         *
         * @param a the first operand
         * @param b the second operand
         * @returns dot product of a and b
         * @function
         */
        public static dot(a: quat, b: quat): number;

        /**
         * Creates a quaternion from the given euler angle x, y, z.
         *
         * @param {quat} out the receiving quaternion
         * @param {number} x Angle to rotate around X axis in degrees.
         * @param {number} y Angle to rotate around Y axis in degrees.
         * @param {number} z Angle to rotate around Z axis in degrees.
         * @returns {quat} out
         */
        public static fromEuler(out: quat, x: number, y: number, z: number): quat;

        /**
         * Performs a linear interpolation between two quat's
         *
         * @param out the receiving quaternion
         * @param a the first operand
         * @param b the second operand
         * @param t interpolation amount between the two inputs
         * @returns out
         * @function
         */
        public static lerp(out: quat, a: quat, b: quat, t: number): quat;

        /**
         * Performs a spherical linear interpolation between two quat
         *
         * @param out the receiving quaternion
         * @param a the first operand
         * @param b the second operand
         * @param t interpolation amount between the two inputs
         * @returns out
         */
        public static slerp(out: quat, a: quat, b: quat, t: number): quat;

        /**
         * Performs a spherical linear interpolation with two control points
         *
         * @param {quat} out the receiving quaternion
         * @param {quat} a the first operand
         * @param {quat} b the second operand
         * @param {quat} c the third operand
         * @param {quat} d the fourth operand
         * @param {number} t interpolation amount
         * @returns {quat} out
         */
        public static sqlerp(out: quat, a: quat, b: quat, c: quat, d: quat, t: number): quat;

        /**
         * Calculates the inverse of a quat
         *
         * @param out the receiving quaternion
         * @param a quat to calculate inverse of
         * @returns out
         */
        public static invert(out: quat, a: quat): quat;

        /**
         * Calculates the conjugate of a quat
         * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
         *
         * @param out the receiving quaternion
         * @param a quat to calculate conjugate of
         * @returns out
         */
        public static conjugate(out: quat, a: quat): quat;

        /**
         * Returns a string representation of a quaternion
         *
         * @param a quat to represent as a string
         * @returns string representation of the quat
         */
        public static str(a: quat): string;

        /**
         * Rotates a quaternion by the given angle about the X axis
         *
         * @param out quat receiving operation result
         * @param a quat to rotate
         * @param rad angle (in radians) to rotate
         * @returns out
         */
        public static rotateX(out: quat, a: quat, rad: number): quat;

        /**
         * Rotates a quaternion by the given angle about the Y axis
         *
         * @param out quat receiving operation result
         * @param a quat to rotate
         * @param rad angle (in radians) to rotate
         * @returns out
         */
        public static rotateY(out: quat, a: quat, rad: number): quat;

        /**
         * Rotates a quaternion by the given angle about the Z axis
         *
         * @param out quat receiving operation result
         * @param a quat to rotate
         * @param rad angle (in radians) to rotate
         * @returns out
         */
        public static rotateZ(out: quat, a: quat, rad: number): quat;

        /**
         * Creates a quaternion from the given 3x3 rotation matrix.
         *
         * NOTE: The resultant quaternion is not normalized, so you should be sure
         * to renormalize the quaternion yourself where necessary.
         *
         * @param out the receiving quaternion
         * @param m rotation matrix
         * @returns out
         * @function
         */
        public static fromMat3(out: quat, m: mat3): quat;

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
        public static setAxes(out: quat, view: vec3 | number[], right: vec3 | number[], up: vec3 | number[]): quat;

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
        public static rotationTo(out: quat, a: vec3 | number[], b: vec3 | number[]): quat;

        /**
         * Calculates the W component of a quat from the X, Y, and Z components.
         * Assumes that quaternion is 1 unit in length.
         * Any existing W component will be ignored.
         *
         * @param out the receiving quaternion
         * @param a quat to calculate W component of
         * @returns out
         */
        public static calculateW(out: quat, a: quat): quat;

        /**
         * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
         *
         * @param {quat} a The first vector.
         * @param {quat} b The second vector.
         * @returns {boolean} True if the quaternions are equal, false otherwise.
         */
        public static exactEquals (a: quat, b: quat): boolean;

        /**
         * Returns whether or not the quaternions have approximately the same elements in the same position.
         *
         * @param {quat} a The first vector.
         * @param {quat} b The second vector.
         * @returns {boolean} True if the quaternions are equal, false otherwise.
         */
        public static equals (a: quat, b: quat): boolean;
    }
}

declare module 'gl-matrix/src/gl-matrix/common' {
    import { glMatrix } from 'gl-matrix';
    export = glMatrix;
}

declare module 'gl-matrix/src/gl-matrix/vec2' {
    import { vec2 } from 'gl-matrix';
    export = vec2;
}

declare module 'gl-matrix/src/gl-matrix/vec3' {
    import { vec3 } from 'gl-matrix';
    export = vec3;
}

declare module 'gl-matrix/src/gl-matrix/vec4' {
    import { vec4 } from 'gl-matrix';
    export = vec4;
}

declare module 'gl-matrix/src/gl-matrix/mat2' {
    import { mat2 } from 'gl-matrix';
    export = mat2;
}

declare module 'gl-matrix/src/gl-matrix/mat2d' {
    import { mat2d } from 'gl-matrix';
    export = mat2d;
}

declare module 'gl-matrix/src/gl-matrix/mat3' {
    import { mat3 } from 'gl-matrix';
    export = mat3;
}

declare module 'gl-matrix/src/gl-matrix/mat4' {
    import { mat4 } from 'gl-matrix';
    export = mat4;
}

declare module 'gl-matrix/src/gl-matrix/quat' {
    import { quat } from 'gl-matrix';
    export = quat;
}
