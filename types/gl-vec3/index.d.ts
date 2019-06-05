// Type definitions for gl-vec3 1.1
// Project: https://github.com/stackgl/gl-vec3
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

/**
 * Adds two number's.
 */
export function add(out: number[], a: number[], b: number[]): number[];

/**
 * Get the angle between two 3D vectors.
 */
export function angle(a: number[], b: number[]): number;

/**
 * Creates a new number initialized with values from an existing vector.
 */
export function clone(a: number[]): number[];

/**
 * Math.ceil the components of a number.
 */
export function ceil(out: number[], a: number[]): number[];

/**
 * Copy the values from one number to another.
 */
export function copy(out: number[], a: number[]): number[];

/**
 * Creates a new, empty number.
 */
export function create(): number[];

/**
 * Computes the cross product of two number's.
 */
export function cross(out: number[], a: number[], b: number[]): number[];

/**
 * Calculates the euclidian distance between two number's. Aliased as dist.
 */
export function dist(a: number[], b: number[]): number;

/**
 * Divides two number's. Aliased as div.
 */
export function div(out: number[], a: number[], b: number[]): number[];

/**
 * Calculates the dot product of two number's.
 */
export function dot(a: number[], b: number[]): number;

/**
 * Returns whether or not the vectors have approximately the same elements in the same position..
 */
export function equals(a: number[], b: number[]): boolean;

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===).
 */
export function exactEquals(a: number[], b: number[]): boolean;

/**
 * Math.floor the components of a number.
 */
export function floor(out: number[], a: number[]): number[];

/**
 * Perform some operation over an array of numbers.
 */
export function forEach(a: number[], stride: number, offset: number, count: number, fn: (a: number[], b: number[], arg: object) => number[], arg: object): number[];

/**
 * Creates a new number initialized with the given values.
 */
export function fromValues(x: number, y: number, z: number): number[];

/**
 * Returns the inverse of the components of a number.
 */
export function inverse(out: number[], a: number[]): number[];

/**
 * Calculates the length of a number. Aliased as len.
 */
export function len(a: number[]): number;

/**
 * Performs a linear interpolation between two number]'s.
 */
export function lerp(out: number[], a: number[], b: number[], t: number): number[];

/**
 * Returns the maximum of two number's.
 */
export function max(out: number[], a: number[], b: number[]): number[];

/**
 * Returns the minimum of two number's.
 */
export function min(out: number[], a: number[], b: number[]): number[];

/**
 * Multiplies two number's. Aliased as mul.
 */
export function mul(out: number[], a: number[], b: number[]): number[];

/**
 * Negates the components of a number.
 */
export function negate(out: number[], a: number[]): number[];

/**
 * Normalize a number
 */
export function normalize(out: number[], a: number[]): number[];

/**
 * Generates a random vector with the given scale.
 */
export function random(out: number[], scale: number): number[];

/**
 * Rotate a 3D vector around the x-axis.
 */
export function rotateX(out: number[], a: number[], b: number[], c: number): number[];

/**
 * Rotate a 3D vector around the y-axis.
 */
export function rotateY(out: number[], a: number[], b: number[], c: number): number[];

/**
 * Rotate a 3D vector around the z-axis.
 */
export function rotateZ(out: number[], a: number[], b: number[], c: number): number[];

/**
 * Math.round the components of a number.
 */
export function round(out: number[], a: number[]): number[];

/**
 * Scales a number by a scalar number.
 */
export function scale(out: number[], a: number[], b: number): number[];

/**
 * Adds two numbers after scaling the second operand by a scalar value.
 */
export function scaleAndAdd(out: number[], a: number[], b: number[], scale: number): number[];

/**
 * Set the components of a number to the given values.
 */
export function set(out: number[], x: number, y: number, z: number): number[];

/**
 * Calculates the squared euclidian distance between two number's. Aliased as sqrDist.
 */
export function sqrDist(a: number[], b: number[]): number[];

/**
 * Calculates the squared length of a number. Aliased as sqrLen.
 */
export function sqrLen(a: number[]): number[];

/**
 * Subtracts vector b from vector a. Aliased as sub.
 */
export function sub(out: number[], a: number[], b: number[]): number[];

/**
 * Transforms the number with a mat3.
 */
export function transformMat3(out: number[], a: number[], m: number[]): number[];

/**
 * Transforms the number with a mat4. 4th vector component is implicitly '1'.
 */
export function transformMat4(out: number[], a: number[], m: number[]): number[];

/**
 * Transforms the number with a quat.
 */
export function transformQuat(out: number[], a: number[], q: number[]): number[];
