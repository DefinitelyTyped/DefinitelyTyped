// Type definitions for gl-matrix 2.2.2
// Project: https://github.com/toji/gl-matrix
// Definitions by: Tat <https://github.com/tatchx>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module GLM {
    interface IArray
    {
        /**
         * Must be indexable like an array
         */
        [index: number]: number;
    } 
}

// Common
declare module glMatrix {
    /**
    * Convert Degree To Radian
    * 
    * @param a Angle in Degrees
    */  
    export function toRadian(a: number): number;  
}

// vec2
declare module vec2 {
    /**
     * Creates a new, empty vec2
     *
     * @returns a new 2D vector
     */
    export function create(): GLM.IArray;
    
    /**
     * Creates a new vec2 initialized with values from an existing vector
     *
     * @param a a vector to clone
     * @returns a new 2D vector
     */
    export function clone(a: GLM.IArray): GLM.IArray;
    
    /**
     * Creates a new vec2 initialized with the given values
     *
     * @param x X component
     * @param y Y component
     * @returns a new 2D vector
     */
    export function fromValues(x: number, y: number): GLM.IArray;
    
    /**
     * Copy the values from one vec2 to another
     *
     * @param out the receiving vector
     * @param a the source vector
     * @returns out
     */
    export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Set the components of a vec2 to the given values
     *
     * @param out the receiving vector
     * @param x X component
     * @param y Y component
     * @returns out
     */
    export function set(out: GLM.IArray, x: number, y: number): GLM.IArray;
    
    /**
     * Adds two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */    
    export function add(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Subtracts vector b from vector a
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */    
    export function subtract(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Subtracts vector b from vector a
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */        
    export function sub(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Multiplies two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Multiplies two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */    
    export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Divides two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */    
    export function divide(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Divides two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */        
    export function div(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Returns the minimum of two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */    
    export function min(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Returns the maximum of two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */    
    export function max(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Scales a vec2 by a scalar number
     *
     * @param out the receiving vector
     * @param a the vector to scale
     * @param b amount to scale the vector by
     * @returns out
     */    
    export function scale(out: GLM.IArray, a: GLM.IArray, b: number): GLM.IArray;
    
    /**
     * Adds two vec2's after scaling the second operand by a scalar value
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @param scale the amount to scale b by before adding
     * @returns out
     */    
    export function scaleAndAdd(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, scale: number): GLM.IArray;
    
    /**
     * Calculates the euclidian distance between two vec2's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns distance between a and b
     */    
    export function distance(a: GLM.IArray, b: GLM.IArray): number;
    
    /**
     * Calculates the euclidian distance between two vec2's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns distance between a and b
     */
    export function dist(a: GLM.IArray, b: GLM.IArray): number;
    
    /**
     * Calculates the squared euclidian distance between two vec2's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns squared distance between a and b
     */
    export function squaredDistance(a: GLM.IArray, b: GLM.IArray): number;
    
    /**
     * Calculates the squared euclidian distance between two vec2's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns squared distance between a and b
     */
    export function sqrDist(a: GLM.IArray, b: GLM.IArray): number;
    
    /**
     * Calculates the length of a vec2
     *
     * @param a vector to calculate length of
     * @returns length of a
     */
    export function length(a: GLM.IArray): number;
    
    /**
     * Calculates the length of a vec2
     *
     * @param a vector to calculate length of
     * @returns length of a
     */
    export function len(a: GLM.IArray): number;
    
    /**
     * Calculates the squared length of a vec2
     *
     * @param a vector to calculate squared length of
     * @returns squared length of a
     */
    export function squaredLength(a: GLM.IArray): number;
    
    /**
     * Calculates the squared length of a vec2
     *
     * @param a vector to calculate squared length of
     * @returns squared length of a
     */
    export function sqrLen(a: GLM.IArray): number;  
    
    /**
     * Negates the components of a vec2
     *
     * @param out the receiving vector
     * @param a vector to negate
     * @returns out
     */
    export function negate(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Returns the inverse of the components of a vec2
     *
     * @param out the receiving vector
     * @param a vector to invert
     * @returns out
     */
    export function inverse(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Normalize a vec2
     *
     * @param out the receiving vector
     * @param a vector to normalize
     * @returns out
     */
    export function normalize(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Calculates the dot product of two vec2's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns dot product of a and b
     */
    export function dot(a: GLM.IArray, b: GLM.IArray): number;
    
    /**
     * Computes the cross product of two vec2's
     * Note that the cross product must by definition produce a 3D vector
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function cross(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Performs a linear interpolation between two vec2's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @param t interpolation amount between the two inputs
     * @returns out
     */
    export function lerp(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, t: number): GLM.IArray;
    
    /**
     * Generates a random unit vector
     *
     * @param out the receiving vector
     * @returns out
     */
    export function random(out: GLM.IArray): GLM.IArray;
    
    /**
     * Generates a random vector with the given scale
     *
     * @param out the receiving vector
     * @param scale Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns out
     */
    export function random(out: GLM.IArray, scale: number): GLM.IArray;
    
    /**
     * Transforms the vec2 with a mat2
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param m matrix to transform with
     * @returns out
     */
    export function transformMat2(out: GLM.IArray, a: GLM.IArray, m: GLM.IArray): GLM.IArray;
    
    /**
     * Transforms the vec2 with a mat2d
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param m matrix to transform with
     * @returns out
     */
    export function transformMat2d(out: GLM.IArray, a: GLM.IArray, m: GLM.IArray): GLM.IArray;
    
    /**
     * Transforms the vec2 with a mat3
     * 3rd vector component is implicitly '1'
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param m matrix to transform with
     * @returns out
     */
    export function transformMat3(out: GLM.IArray, a: GLM.IArray, m: GLM.IArray): GLM.IArray;
    
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
    export function transformMat4(out: GLM.IArray, a: GLM.IArray, m: GLM.IArray): GLM.IArray;
    
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
    export function forEach(a: GLM.IArray, stride: number, offset: number, count: number,
        fn: (a: GLM.IArray, b: GLM.IArray, arg: any) => void, arg: any): GLM.IArray;
        
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
    export function forEach(a: GLM.IArray, stride: number, offset: number, count: number,
        fn: (a: GLM.IArray, b: GLM.IArray) => void): GLM.IArray;
        
    /**
     * Returns a string representation of a vector
     *
     * @param vec vector to represent as a string
     * @returns string representation of the vector
     */
    export function str(a: GLM.IArray): string;    
}

// vec3
declare module vec3 {
    
    /**
     * Creates a new, empty vec3
     *
     * @returns a new 3D vector
     */
    export function create(): GLM.IArray;
    
    /**
     * Creates a new vec3 initialized with values from an existing vector
     *
     * @param a vector to clone
     * @returns a new 3D vector
     */
    export function clone(a: GLM.IArray): GLM.IArray;
    
    /**
     * Creates a new vec3 initialized with the given values
     *
     * @param x X component
     * @param y Y component
     * @param z Z component
     * @returns a new 3D vector
     */
    export function fromValues(x: number, y: number, z: number): GLM.IArray;
    
    /**
     * Copy the values from one vec3 to another
     *
     * @param out the receiving vector
     * @param a the source vector
     * @returns out
     */
    export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Set the components of a vec3 to the given values
     *
     * @param out the receiving vector
     * @param x X component
     * @param y Y component
     * @param z Z component
     * @returns out
     */
    export function set(out: GLM.IArray, x: number, y: number, z: number): GLM.IArray;
    
    /**
     * Adds two vec3's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function add(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Subtracts vector b from vector a
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function subtract(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Subtracts vector b from vector a
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function sub(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray
    
    /**
     * Multiplies two vec3's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Multiplies two vec3's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Divides two vec3's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function divide(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Divides two vec3's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function div(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Returns the minimum of two vec3's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function min(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Returns the maximum of two vec3's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function max(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;  
    
    /**
     * Scales a vec3 by a scalar number
     *
     * @param out the receiving vector
     * @param a the vector to scale
     * @param b amount to scale the vector by
     * @returns out
     */
    export function scale(out: GLM.IArray, a: GLM.IArray, b: number): GLM.IArray;
    
    /**
     * Adds two vec3's after scaling the second operand by a scalar value
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @param scale the amount to scale b by before adding
     * @returns out
     */
    export function scaleAndAdd(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, scale: number): GLM.IArray;
    
    /**
     * Calculates the euclidian distance between two vec3's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns distance between a and b
     */
    export function distance(a: GLM.IArray, b: GLM.IArray): number;
    
    /**
     * Calculates the euclidian distance between two vec3's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns distance between a and b
     */
    export function dist(a: GLM.IArray, b: GLM.IArray): number;
    
    /**
     * Calculates the squared euclidian distance between two vec3's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns squared distance between a and b
     */
    export function squaredDistance(a: GLM.IArray, b: GLM.IArray): number;
    
    /**
     * Calculates the squared euclidian distance between two vec3's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns squared distance between a and b
     */
    export function sqrDist(a: GLM.IArray, b: GLM.IArray): number;
    
    /**
     * Calculates the length of a vec3
     *
     * @param a vector to calculate length of
     * @returns length of a
     */
    export function length(a: GLM.IArray): number;  
    
    /**
     * Calculates the length of a vec3
     *
     * @param a vector to calculate length of
     * @returns length of a
     */
    export function len(a: GLM.IArray): number;
    
    /**
     * Calculates the squared length of a vec3
     *
     * @param a vector to calculate squared length of
     * @returns squared length of a
     */
    export function squaredLength(a: GLM.IArray): number;
    
    /**
     * Calculates the squared length of a vec3
     *
     * @param a vector to calculate squared length of
     * @returns squared length of a
     */
    export function sqrLen(a: GLM.IArray): number;  
    
    /**
     * Negates the components of a vec3
     *
     * @param out the receiving vector
     * @param a vector to negate
     * @returns out
     */
    export function negate(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Returns the inverse of the components of a vec3
     *
     * @param out the receiving vector
     * @param a vector to invert
     * @returns out
     */
    export function inverse(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Normalize a vec3
     *
     * @param out the receiving vector
     * @param a vector to normalize
     * @returns out
     */
    export function normalize(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Calculates the dot product of two vec3's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns dot product of a and b
     */
    export function dot(a: GLM.IArray, b: GLM.IArray): number;  
    
    /**
     * Computes the cross product of two vec3's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function cross(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Performs a linear interpolation between two vec3's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @param t interpolation amount between the two inputs
     * @returns out
     */
    export function lerp(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, t: number): GLM.IArray;
    
    /**
     * Generates a random unit vector
     *
     * @param out the receiving vector
     * @returns out
     */
    export function random(out: GLM.IArray): GLM.IArray;
    
    /**
     * Generates a random vector with the given scale
     *
     * @param out the receiving vector
     * @param [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns out
     */
    export function random(out: GLM.IArray, scale: number): GLM.IArray;
    
    /**
     * Rotate a 3D vector around the x-axis
     * @param out The receiving vec3
     * @param a The vec3 point to rotate
     * @param b The origin of the rotation
     * @param c The angle of rotation
     * @returns out
     */
    export function rotateX(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, c: number): GLM.IArray;
    
    /**
     * Rotate a 3D vector around the y-axis
     * @param out The receiving vec3
     * @param a The vec3 point to rotate
     * @param b The origin of the rotation
     * @param c The angle of rotation
     * @returns out
     */
    export function rotateY(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, c: number): GLM.IArray;
    
    /**
     * Rotate a 3D vector around the z-axis
     * @param out The receiving vec3
     * @param a The vec3 point to rotate
     * @param b The origin of the rotation
     * @param c The angle of rotation
     * @returns out
     */
    export function rotateZ(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, c: number): GLM.IArray;
    
    /**
     * Transforms the vec3 with a mat3.
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param m the 3x3 matrix to transform with
     * @returns out
     */
    export function transformMat3(out: GLM.IArray, a: GLM.IArray, m: GLM.IArray): GLM.IArray;
    
    /**
     * Transforms the vec3 with a mat4.
     * 4th vector component is implicitly '1'
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param m matrix to transform with
     * @returns out
     */
    export function transformMat4(out: GLM.IArray, a: GLM.IArray, m: GLM.IArray): GLM.IArray;  
    
    /**
     * Transforms the vec3 with a quat
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param q quaternion to transform with
     * @returns out
     */
    export function transformQuat(out: GLM.IArray, a: GLM.IArray, q: GLM.IArray): GLM.IArray;
    
    
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
    export function forEach(out: GLM.IArray, string: number, offset: number, count: number,
        fn: (a: GLM.IArray, b: GLM.IArray, arg: any) => void, arg: any): GLM.IArray;
        
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
    export function forEach(out: GLM.IArray, string: number, offset: number, count: number,
        fn: (a: GLM.IArray, b: GLM.IArray) => void): GLM.IArray;
        
    /**
     * Get the angle between two 3D vectors
     * @param a The first operand
     * @param b The second operand
     * @returns The angle in radians
     */
    export function angle(a: GLM.IArray, b: GLM.IArray): number;
    
    /**
     * Returns a string representation of a vector
     *
     * @param vec vector to represent as a string
     * @returns string representation of the vector
     */
    export function str(a: GLM.IArray): string;  
}

// vec4 
declare module vec4 {
    
    /**
     * Creates a new, empty vec4
     *
     * @returns a new 4D vector
     */
    export function create(): GLM.IArray;
    
    /**
     * Creates a new vec4 initialized with values from an existing vector
     *
     * @param a vector to clone
     * @returns a new 4D vector
     */
    export function clone(a: GLM.IArray): GLM.IArray;
    
    /**
     * Creates a new vec4 initialized with the given values
     *
     * @param x X component
     * @param y Y component
     * @param z Z component
     * @param w W component
     * @returns a new 4D vector
     */
    export function fromValues(x: number, y: number, z: number, w: number): GLM.IArray;
    
    /**
     * Copy the values from one vec4 to another
     *
     * @param out the receiving vector
     * @param a the source vector
     * @returns out
     */
    export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray;  
    
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
    export function set(out: GLM.IArray, x: number, y: number, z: number, w: number): GLM.IArray;  
    
    /**
     * Adds two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function add(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Subtracts vector b from vector a
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function subtract(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Subtracts vector b from vector a
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function sub(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Multiplies two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Multiplies two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Divides two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function divide(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
   
    /**
     * Divides two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function div(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;  
    
    /**
     * Returns the minimum of two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function min(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Returns the maximum of two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function max(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;  
    
    /**
     * Scales a vec4 by a scalar number
     *
     * @param out the receiving vector
     * @param a the vector to scale
     * @param b amount to scale the vector by
     * @returns out
     */
    export function scale(out: GLM.IArray, a: GLM.IArray, b: number): GLM.IArray;
    
    /**
     * Adds two vec4's after scaling the second operand by a scalar value
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @param scale the amount to scale b by before adding
     * @returns out
     */
    export function scaleAndAdd(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, scale: number): GLM.IArray;
    
    /**
     * Calculates the euclidian distance between two vec4's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns distance between a and b
     */
    export function distance(a: GLM.IArray, b: GLM.IArray): number;
    
    /**
     * Calculates the euclidian distance between two vec4's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns distance between a and b
     */
    export function dist(a: GLM.IArray, b: GLM.IArray): number;
    
    /**
     * Calculates the squared euclidian distance between two vec4's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns squared distance between a and b
     */
    export function squaredDistance(a: GLM.IArray, b: GLM.IArray): number;
    
    /**
     * Calculates the squared euclidian distance between two vec4's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns squared distance between a and b
     */
    export function sqrDist(a: GLM.IArray, b: GLM.IArray): number;
    
    /**
     * Calculates the length of a vec4
     *
     * @param a vector to calculate length of
     * @returns length of a
     */
    export function length(a: GLM.IArray): number;  
    
    /**
     * Calculates the length of a vec4
     *
     * @param a vector to calculate length of
     * @returns length of a
     */
    export function len(a: GLM.IArray): number;
    
    /**
     * Calculates the squared length of a vec4
     *
     * @param a vector to calculate squared length of
     * @returns squared length of a
     */
    export function squaredLength(a: GLM.IArray): number;
    
    /**
     * Calculates the squared length of a vec4
     *
     * @param a vector to calculate squared length of
     * @returns squared length of a
     */
    export function sqrLen(a: GLM.IArray): number;  
    
    /**
     * Negates the components of a vec4
     *
     * @param out the receiving vector
     * @param a vector to negate
     * @returns out
     */
    export function negate(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Returns the inverse of the components of a vec4
     *
     * @param out the receiving vector
     * @param a vector to invert
     * @returns out
     */
    export function inverse(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Normalize a vec4
     *
     * @param out the receiving vector
     * @param a vector to normalize
     * @returns out
     */
    export function normalize(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Calculates the dot product of two vec4's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns dot product of a and b
     */
    export function dot(a: GLM.IArray, b: GLM.IArray): number;
    
    /**
     * Performs a linear interpolation between two vec4's
     *
     * @param out the receiving vector
     * @param a the first operand
     * @param b the second operand
     * @param t interpolation amount between the two inputs
     * @returns out
     */
    export function lerp(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, t: number): GLM.IArray;
    
    /**
     * Generates a random unit vector
     *
     * @param out the receiving vector
     * @returns out
     */
    export function random(out: GLM.IArray): GLM.IArray;
    
    /**
     * Generates a random vector with the given scale
     *
     * @param out the receiving vector
     * @param Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns out
     */
    export function random(out: GLM.IArray, scale: number): GLM.IArray; 
    
    /**
     * Transforms the vec4 with a mat4.
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param m matrix to transform with
     * @returns out
     */
    export function transformMat4(out: GLM.IArray, a: GLM.IArray, mat: GLM.IArray): GLM.IArray;
    
    /**
     * Transforms the vec4 with a quat
     *
     * @param out the receiving vector
     * @param a the vector to transform
     * @param q quaternion to transform with
     * @returns out
     */
    export function transformQuat(out: GLM.IArray, a: GLM.IArray, quat: GLM.IArray): GLM.IArray;   
    
    /**
     * Perform some operation over an array of vec4s.
     *
     * @param a the array of vectors to iterate over
     * @param stride Number of elements between the start of each vec4. If 0 assumes tightly packed
     * @param offset Number of elements to skip at the beginning of the array
     * @param count Number of vec4s to iterate over. If 0 iterates over entire array
     * @param fn Function to call for each vector in the array
     * @param additional argument to pass to fn
     * @returns a
     * @function
     */
    export function forEach(out: GLM.IArray, string: number, offset: number, count: number,
        callback: (a: GLM.IArray, b: GLM.IArray, arg: any) => void, arg: any): GLM.IArray;  
        
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
    export function forEach(out: GLM.IArray, string: number, offset: number, count: number,
        callback: (a: GLM.IArray, b: GLM.IArray) => void): GLM.IArray;
        
    /**
     * Returns a string representation of a vector
     *
     * @param vec vector to represent as a string
     * @returns string representation of the vector
     */
    export function str(a: GLM.IArray): string;   
}

// mat2
declare module mat2 {
    
    /**
     * Creates a new identity mat2
     *
     * @returns a new 2x2 matrix
     */
    export function create(): GLM.IArray;
    
    /**
     * Creates a new mat2 initialized with values from an existing matrix
     *
     * @param a matrix to clone
     * @returns a new 2x2 matrix
     */
    export function clone(a: GLM.IArray): GLM.IArray;
    
    /**
     * Copy the values from one mat2 to another
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Set a mat2 to the identity matrix
     *
     * @param out the receiving matrix
     * @returns out
     */
    export function identity(out: GLM.IArray): GLM.IArray;
    
    /**
     * Transpose the values of a mat2
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function transpose(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Inverts a mat2
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function invert(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Calculates the adjugate of a mat2
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function adjoint(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Calculates the determinant of a mat2
     *
     * @param a the source matrix
     * @returns determinant of a
     */
    export function determinant(a: GLM.IArray): number;
    
    /**
     * Multiplies two mat2's
     *
     * @param out the receiving matrix
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Multiplies two mat2's
     *
     * @param out the receiving matrix
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Rotates a mat2 by the given angle
     *
     * @param out the receiving matrix
     * @param a the matrix to rotate
     * @param rad the angle to rotate the matrix by
     * @returns out
     */
    export function rotate(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray;
    
    /**
     * Scales the mat2 by the dimensions in the given vec2
     *
     * @param out the receiving matrix
     * @param a the matrix to rotate
     * @param v the vec2 to scale the matrix by
     * @returns out
     **/
    export function scale(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray;
    
    /**
     * Returns a string representation of a mat2
     *
     * @param a matrix to represent as a string
     * @returns string representation of the matrix
     */
    export function str(a: GLM.IArray): string;
    
    /**
     * Returns Frobenius norm of a mat2
     *
     * @param a the matrix to calculate Frobenius norm of
     * @returns Frobenius norm
     */
    export function frob(a: GLM.IArray): number;
    
    /**
     * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
     * @param L the lower triangular matrix 
     * @param D the diagonal matrix 
     * @param U the upper triangular matrix 
     * @param a the input matrix to factorize
     */
    export function LDU(L: GLM.IArray, D: GLM.IArray, U: GLM.IArray, a: GLM.IArray): GLM.IArray;
}

// mat2d
declare module mat2d {
    
    /**
     * Creates a new identity mat2d
     *
     * @returns a new 2x3 matrix
     */
    export function create(): GLM.IArray;
    
    /**
     * Creates a new mat2d initialized with values from an existing matrix
     *
     * @param a matrix to clone
     * @returns a new 2x3 matrix
     */
    export function clone(a: GLM.IArray): GLM.IArray;
    
    /**
     * Copy the values from one mat2d to another
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Set a mat2d to the identity matrix
     *
     * @param out the receiving matrix
     * @returns out
     */
    export function identity(out: GLM.IArray): GLM.IArray;  
    
    /**
     * Inverts a mat2d
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function invert(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Calculates the determinant of a mat2d
     *
     * @param a the source matrix
     * @returns determinant of a
     */
    export function determinant(a: GLM.IArray): number;
    
    /**
     * Multiplies two mat2d's
     *
     * @param out the receiving matrix
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Multiplies two mat2d's
     *
     * @param out the receiving matrix
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray; 
    
    /**
     * Rotates a mat2d by the given angle
     *
     * @param out the receiving matrix
     * @param a the matrix to rotate
     * @param rad the angle to rotate the matrix by
     * @returns out
     */
    export function rotate(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray; 
    
    /**
     * Scales the mat2d by the dimensions in the given vec2
     *
     * @param out the receiving matrix
     * @param a the matrix to translate
     * @param v the vec2 to scale the matrix by
     * @returns out
     **/
    export function scale(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray;
    
    /**
     * Translates the mat2d by the dimensions in the given vec2
     *
     * @param out the receiving matrix
     * @param a the matrix to translate
     * @param v the vec2 to translate the matrix by
     * @returns out
     **/
    export function translate(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray;
    
    /**
     * Returns a string representation of a mat2d
     *
     * @param a matrix to represent as a string
     * @returns string representation of the matrix
     */
    export function str(a: GLM.IArray): string;
    
    /**
     * Returns Frobenius norm of a mat2d
     *
     * @param a the matrix to calculate Frobenius norm of
     * @returns Frobenius norm
     */
    export function frob(a: GLM.IArray): number;
}

// mat3
declare module mat3 {
    
    /**
     * Creates a new identity mat3
     *
     * @returns a new 3x3 matrix
     */
    export function create(): GLM.IArray;
    
    /**
     * Creates a new mat3 initialized with values from an existing matrix
     *
     * @param a matrix to clone
     * @returns a new 3x3 matrix
     */
    export function clone(a: GLM.IArray): GLM.IArray;
    
    /**
     * Copy the values from one mat3 to another
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Set a mat3 to the identity matrix
     *
     * @param out the receiving matrix
     * @returns out
     */
    export function identity(out: GLM.IArray): GLM.IArray;
    
    /**
     * Transpose the values of a mat3
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function transpose(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Inverts a mat3
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function invert(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Calculates the adjugate of a mat3
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function adjoint(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Calculates the determinant of a mat3
     *
     * @param a the source matrix
     * @returns determinant of a
     */
    export function determinant(a: GLM.IArray): number;
    
    /**
     * Multiplies two mat3's
     *
     * @param out the receiving matrix
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Multiplies two mat3's
     *
     * @param out the receiving matrix
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Returns a string representation of a mat3
     *
     * @param mat matrix to represent as a string
     * @returns string representation of the matrix
     */
    export function str(mat: GLM.IArray): string;
    
    /**
     * Returns Frobenius norm of a mat3
     *
     * @param a the matrix to calculate Frobenius norm of
     * @returns Frobenius norm
     */
    export function frob(a: GLM.IArray): number;  
    
    /**
    * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
    *
    * @param out mat3 receiving operation result
    * @param a Mat4 to derive the normal matrix from
    *
    * @returns out
    */
    export function normalFromMat4(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
    * Calculates a 3x3 matrix from the given quaternion
    *
    * @param out mat3 receiving operation result
    * @param q Quaternion to create matrix from
    *
    * @returns out
    */
    export function fromQuat(out: GLM.IArray, q: GLM.IArray): GLM.IArray;
    
    /**
     * Copies the upper-left 3x3 values into the given mat3.
     *
     * @param out the receiving 3x3 matrix
     * @param a   the source 4x4 matrix
     * @returns out
     */
    export function fromMat4(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Scales the mat3 by the dimensions in the given vec2
     *
     * @param out the receiving matrix
     * @param a the matrix to rotate
     * @param v the vec2 to scale the matrix by
     * @returns out
     **/
    export function scale(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray;
    
    /**
     * Copies the values from a mat2d into a mat3
     *
     * @param out the receiving matrix
     * @param {mat2d} a the matrix to copy
     * @returns out
     **/
    export function fromMat2d(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Translate a mat3 by the given vector
     *
     * @param out the receiving matrix
     * @param a the matrix to translate
     * @param v vector to translate by
     * @returns out
     */
     export function translate(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray;
     
    /**
     * Rotates a mat3 by the given angle
     *
     * @param out the receiving matrix
     * @param a the matrix to rotate
     * @param rad the angle to rotate the matrix by
     * @returns out
     */
     export function rotate(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray;
}

// mat4
declare module mat4 {
    
    /**
     * Creates a new identity mat4
     *
     * @returns a new 4x4 matrix
     */
    export function create(): GLM.IArray;
    
    /**
     * Creates a new mat4 initialized with values from an existing matrix
     *
     * @param a matrix to clone
     * @returns a new 4x4 matrix
     */
    export function clone(a: GLM.IArray): GLM.IArray;
    
    /**
     * Copy the values from one mat4 to another
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Set a mat4 to the identity matrix
     *
     * @param out the receiving matrix
     * @returns out
     */
    export function identity(a: GLM.IArray): GLM.IArray;
    
    /**
     * Transpose the values of a mat4
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function transpose(out: GLM.IArray, a: GLM.IArray): GLM.IArray; 
    
    /**
     * Inverts a mat4
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function invert(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Calculates the adjugate of a mat4
     *
     * @param out the receiving matrix
     * @param a the source matrix
     * @returns out
     */
    export function adjoint(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Calculates the determinant of a mat4
     *
     * @param a the source matrix
     * @returns determinant of a
     */
    export function determinant(a: GLM.IArray): number;
    
    /**
     * Multiplies two mat4's
     *
     * @param out the receiving matrix
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Multiplies two mat4's
     *
     * @param out the receiving matrix
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Translate a mat4 by the given vector
     *
     * @param out the receiving matrix
     * @param a the matrix to translate
     * @param v vector to translate by
     * @returns out
     */
    export function translate(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray;
    
    /**
     * Scales the mat4 by the dimensions in the given vec3
     *
     * @param out the receiving matrix
     * @param a the matrix to scale
     * @param v the vec3 to scale the matrix by
     * @returns out
     **/
    export function scale(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray;
    
    /**
     * Rotates a mat4 by the given angle
     *
     * @param out the receiving matrix
     * @param a the matrix to rotate
     * @param rad the angle to rotate the matrix by
     * @param axis the axis to rotate around
     * @returns out
     */
    export function rotate(out: GLM.IArray, a: GLM.IArray, rad: number, axis: GLM.IArray): GLM.IArray;
    
    /**
     * Rotates a matrix by the given angle around the X axis
     *
     * @param out the receiving matrix
     * @param a the matrix to rotate
     * @param rad the angle to rotate the matrix by
     * @returns out
     */
    export function rotateX(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray;
    
    /**
     * Rotates a matrix by the given angle around the Y axis
     *
     * @param out the receiving matrix
     * @param a the matrix to rotate
     * @param rad the angle to rotate the matrix by
     * @returns out
     */
    export function rotateY(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray;
    
    /**
     * Rotates a matrix by the given angle around the Z axis
     *
     * @param out the receiving matrix
     * @param a the matrix to rotate
     * @param rad the angle to rotate the matrix by
     * @returns out
     */
    export function rotateZ(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray;
    
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
    export function frustum(out: GLM.IArray, left: number, right: number,
        bottom: number, top: number, near: number, far: number): GLM.IArray;
        
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
    export function perspective(out: GLM.IArray, fovy: number, aspect: number,
        near: number, far: number): GLM.IArray;
        
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
    export function ortho(out: GLM.IArray, left: number, right: number,
        bottom: number, top: number, near: number, far: number): GLM.IArray;
        
    /**
     * Generates a look-at matrix with the given eye position, focal point, and up axis
     *
     * @param out mat4 frustum matrix will be written into
     * @param eye Position of the viewer
     * @param center Point the viewer is looking at
     * @param up vec3 pointing up
     * @returns out
     */
    export function lookAt(out: GLM.IArray, eye: GLM.IArray, 
        center: GLM.IArray, up: GLM.IArray): GLM.IArray;
        
    /**
     * Returns a string representation of a mat4
     *
     * @param mat matrix to represent as a string
     * @returns string representation of the matrix
     */
    export function str(mat: GLM.IArray): string;
    
    /**
     * Returns Frobenius norm of a mat4
     *
     * @param a the matrix to calculate Frobenius norm of
     * @returns Frobenius norm
     */
    export function frob(a: GLM.IArray): number;
    
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
    export function fromRotationTranslation(out: GLM.IArray, q: GLM.IArray,
        v: GLM.IArray): GLM.IArray;
        
    /**
     * Creates a matrix from a quaternion
     *
     * @param out mat4 receiving operation result
     * @param q Rotation quaternion
     * @returns out
     */
    export function fromQuat(out: GLM.IArray, q: GLM.IArray): GLM.IArray;
}

// quat
declare module quat {
    
    /**
     * Creates a new identity quat
     *
     * @returns a new quaternion
     */
    export function create(): GLM.IArray;
    
    /**
     * Creates a new quat initialized with values from an existing quaternion
     *
     * @param a quaternion to clone
     * @returns a new quaternion
     * @function
     */
    export function clone(a: GLM.IArray): GLM.IArray;
    
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
    export function fromValues(x: number, y: number, z: number, w: number): GLM.IArray;
    
    /**
     * Copy the values from one quat to another
     *
     * @param out the receiving quaternion
     * @param a the source quaternion
     * @returns out
     * @function
     */
    export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
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
    export function set(out: GLM.IArray, x: number, y: number, z: number, w: number): GLM.IArray;
    
    /**
     * Set a quat to the identity quaternion
     *
     * @param out the receiving quaternion
     * @returns out
     */
    export function identity(out: GLM.IArray): GLM.IArray;
    
    /**
     * Sets a quat from the given angle and rotation axis,
     * then returns it.
     *
     * @param out the receiving quaternion
     * @param axis the axis around which to rotate
     * @param rad the angle in radians
     * @returns out
     **/
    export function setAxisAngle(out: GLM.IArray, axis: GLM.IArray, rad: number): GLM.IArray;
    
    /**
     * Adds two quat's
     *
     * @param out the receiving quaternion
     * @param a the first operand
     * @param b the second operand
     * @returns out
     * @function
     */
    export function add(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Multiplies two quat's
     *
     * @param out the receiving quaternion
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Multiplies two quat's
     *
     * @param out the receiving quaternion
     * @param a the first operand
     * @param b the second operand
     * @returns out
     */
    export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Scales a quat by a scalar number
     *
     * @param out the receiving vector
     * @param a the vector to scale
     * @param b amount to scale the vector by
     * @returns out
     * @function
     */
    export function scale(out: GLM.IArray, a: GLM.IArray, b: number): GLM.IArray;
    
    /**
     * Calculates the length of a quat
     *
     * @param a vector to calculate length of
     * @returns length of a
     * @function
     */
    export function length(a: GLM.IArray): number;
    
    /**
     * Calculates the length of a quat
     *
     * @param a vector to calculate length of
     * @returns length of a
     * @function
     */
    export function len(a: GLM.IArray): number;
    
    /**
     * Calculates the squared length of a quat
     *
     * @param a vector to calculate squared length of
     * @returns squared length of a
     * @function
     */
    export function squaredLength(a: GLM.IArray): number;
    
    /**
     * Calculates the squared length of a quat
     *
     * @param a vector to calculate squared length of
     * @returns squared length of a
     * @function
     */
    export function sqrLen(a: GLM.IArray): number;
    
    /**
     * Normalize a quat
     *
     * @param out the receiving quaternion
     * @param a quaternion to normalize
     * @returns out
     * @function
     */
    export function normalize(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Calculates the dot product of two quat's
     *
     * @param a the first operand
     * @param b the second operand
     * @returns dot product of a and b
     * @function
     */
    export function dot(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): number;
    
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
    export function lerp(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, t: number): GLM.IArray;
    
    /**
     * Performs a spherical linear interpolation between two quat
     *
     * @param out the receiving quaternion
     * @param a the first operand
     * @param b the second operand
     * @param t interpolation amount between the two inputs
     * @returns out
     */
    export function slerp(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, t: number): GLM.IArray;
    
    /**
     * Calculates the inverse of a quat
     *
     * @param out the receiving quaternion
     * @param a quat to calculate inverse of
     * @returns out
     */
    export function invert(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Calculates the conjugate of a quat
     * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
     *
     * @param out the receiving quaternion
     * @param a quat to calculate conjugate of
     * @returns out
     */
    export function conjugate(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
    
    /**
     * Returns a string representation of a quatenion
     *
     * @param vec vector to represent as a string
     * @returns string representation of the vector
     */
    export function str(a: GLM.IArray): string;
    
    /**
     * Rotates a quaternion by the given angle about the X axis
     *
     * @param out quat receiving operation result
     * @param a quat to rotate
     * @param rad angle (in radians) to rotate
     * @returns out
     */
    export function rotateX(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray;
    
    /**
     * Rotates a quaternion by the given angle about the Y axis
     *
     * @param out quat receiving operation result
     * @param a quat to rotate
     * @param rad angle (in radians) to rotate
     * @returns out
     */
    export function rotateY(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray;
    
    /**
     * Rotates a quaternion by the given angle about the Z axis
     *
     * @param out quat receiving operation result
     * @param a quat to rotate
     * @param rad angle (in radians) to rotate
     * @returns out
     */
    export function rotateZ(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray;
    
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
    export function fromMat3(out: GLM.IArray, m: GLM.IArray): GLM.IArray;
    
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
    export function setAxes(out: GLM.IArray, view: GLM.IArray, right: GLM.IArray, 
        up: GLM.IArray): GLM.IArray;
        
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
    export function rotationTo(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray;
    
    /**
     * Calculates the W component of a quat from the X, Y, and Z components.
     * Assumes that quaternion is 1 unit in length.
     * Any existing W component will be ignored.
     *
     * @param out the receiving quaternion
     * @param a quat to calculate W component of
     * @returns out
     */
    export function calculateW(out: GLM.IArray, a: GLM.IArray): GLM.IArray;
}