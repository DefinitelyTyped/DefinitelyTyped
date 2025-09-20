import { Camera } from "../cameras/Camera.js";
import { BufferAttribute } from "../core/BufferAttribute.js";
import { InterleavedBufferAttribute } from "../core/InterleavedBufferAttribute.js";
import { RGB } from "./Color.js";
import { Cylindrical } from "./Cylindrical.js";
import { Euler } from "./Euler.js";
import { Matrix3 } from "./Matrix3.js";
import { Matrix4 } from "./Matrix4.js";
import { QuaternionLike } from "./Quaternion.js";
import { Spherical } from "./Spherical.js";

export type Vector3Tuple = [number, number, number];

export interface Vector3Like {
    readonly x: number;
    readonly y: number;
    readonly z: number;
}

/**
 * 3D vector.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js}
 *
 * @example
 * const a = new THREE.Vector3( 1, 0, 0 );
 * const b = new THREE.Vector3( 0, 1, 0 );
 * const c = new THREE.Vector3();
 * c.crossVectors( a, b );
 */
export class Vector3 {
    constructor(x?: number, y?: number, z?: number);

    /**
     * @default 0
     */
    x: number;

    /**
     * @default 0
     */
    y: number;

    /**
     * @default 0
     */
    z: number;
    readonly isVector3: true;

    /**
     * Sets value of this vector.
     */
    set(x: number, y: number, z: number): this;

    /**
     * Sets all values of this vector.
     */
    setScalar(scalar: number): this;

    /**
     * Sets x value of this vector.
     */
    setX(x: number): this;

    /**
     * Sets y value of this vector.
     */
    setY(y: number): this;

    /**
     * Sets z value of this vector.
     */
    setZ(z: number): this;

    setComponent(index: number, value: number): this;

    getComponent(index: number): number;

    /**
     * Clones this vector.
     */
    clone(): this;

    /**
     * Copies value of v to this vector.
     */
    copy(v: Vector3Like): this;

    /**
     * Adds v to this vector.
     */
    add(v: Vector3Like): this;

    addScalar(s: number): this;

    /**
     * Sets this vector to a + b.
     */
    addVectors(a: Vector3Like, b: Vector3Like): this;

    addScaledVector(v: Vector3, s: number): this;

    /**
     * Subtracts v from this vector.
     */
    sub(v: Vector3Like): this;

    subScalar(s: number): this;

    /**
     * Sets this vector to a - b.
     */
    subVectors(a: Vector3Like, b: Vector3Like): this;

    multiply(v: Vector3Like): this;

    /**
     * Multiplies this vector by scalar s.
     */
    multiplyScalar(s: number): this;

    multiplyVectors(a: Vector3Like, b: Vector3Like): this;

    applyEuler(euler: Euler): this;

    applyAxisAngle(axis: Vector3, angle: number): this;

    applyMatrix3(m: Matrix3): this;

    applyNormalMatrix(m: Matrix3): this;

    applyMatrix4(m: Matrix4): this;

    applyQuaternion(q: QuaternionLike): this;

    project(camera: Camera): this;

    unproject(camera: Camera): this;

    transformDirection(m: Matrix4): this;

    divide(v: Vector3Like): this;

    /**
     * Divides this vector by scalar s.
     * Set vector to ( 0, 0, 0 ) if s == 0.
     */
    divideScalar(s: number): this;

    min(v: Vector3Like): this;

    max(v: Vector3Like): this;

    clamp(min: Vector3Like, max: Vector3Like): this;

    clampScalar(min: number, max: number): this;

    clampLength(min: number, max: number): this;

    floor(): this;

    ceil(): this;

    round(): this;

    roundToZero(): this;

    /**
     * Inverts this vector.
     */
    negate(): this;

    /**
     * Computes dot product of this vector and v.
     */
    dot(v: Vector3Like): number;

    /**
     * Computes squared length of this vector.
     */
    lengthSq(): number;

    /**
     * Computes length of this vector.
     */
    length(): number;

    /**
     * Computes the Manhattan length of this vector.
     *
     * see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    manhattanLength(): number;

    /**
     * Normalizes this vector.
     */
    normalize(): this;

    /**
     * Normalizes this vector and multiplies it by l.
     */
    setLength(l: number): this;
    lerp(v: Vector3Like, alpha: number): this;

    lerpVectors(v1: Vector3Like, v2: Vector3Like, alpha: number): this;

    /**
     * Sets this vector to cross product of itself and v.
     */
    cross(v: Vector3Like): this;

    /**
     * Sets this vector to cross product of a and b.
     */
    crossVectors(a: Vector3Like, b: Vector3Like): this;
    projectOnVector(v: Vector3): this;
    projectOnPlane(planeNormal: Vector3): this;
    reflect(vector: Vector3Like): this;
    angleTo(v: Vector3): number;

    /**
     * Computes distance of this vector to v.
     */
    distanceTo(v: Vector3Like): number;

    /**
     * Computes squared distance of this vector to v.
     */
    distanceToSquared(v: Vector3Like): number;

    /**
     * Computes the Manhattan length (distance) from this vector to the given vector v
     *
     * see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    manhattanDistanceTo(v: Vector3Like): number;

    setFromSpherical(s: Spherical): this;
    setFromSphericalCoords(r: number, phi: number, theta: number): this;
    setFromCylindrical(s: Cylindrical): this;
    setFromCylindricalCoords(radius: number, theta: number, y: number): this;
    setFromMatrixPosition(m: Matrix4): this;
    setFromMatrixScale(m: Matrix4): this;
    setFromMatrixColumn(matrix: Matrix4, index: number): this;
    setFromMatrix3Column(matrix: Matrix3, index: number): this;

    /**
     * Sets this vector's {@link x}, {@link y} and {@link z} components from the x, y, and z components of the specified {@link Euler Euler Angle}.
     */
    setFromEuler(e: Euler): this;

    /**
     * Sets this vector's {@link x}, {@link y} and {@link z} components from the r, g, and b components of the specified
     * {@link Color | color}.
     */
    setFromColor(color: RGB): this;

    /**
     * Checks for strict equality of this vector and v.
     */
    equals(v: Vector3Like): boolean;

    /**
     * Sets this vector's x, y and z value from the provided array or array-like.
     * @param array the source array or array-like.
     * @param offset (optional) offset into the array. Default is 0.
     */
    fromArray(array: number[] | ArrayLike<number>, offset?: number): this;

    /**
     * Returns an array [x, y, z], or copies x, y and z into the provided array.
     * @param array (optional) array to store the vector to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array?: number[], offset?: number): number[];
    toArray(array?: Vector3Tuple, offset?: 0): Vector3Tuple;

    /**
     * Copies x, y and z into the provided array-like.
     * @param array array-like to store the vector to.
     * @param offset (optional) optional offset into the array-like.
     * @return The provided array-like.
     */
    toArray(array: ArrayLike<number>, offset?: number): ArrayLike<number>;

    fromBufferAttribute(attribute: BufferAttribute | InterleavedBufferAttribute, index: number): this;

    /**
     * Sets this vector's x, y and z from Math.random
     */
    random(): this;

    randomDirection(): this;

    /**
     * Iterating through a Vector3 instance will yield its components (x, y, z) in the corresponding order.
     */
    [Symbol.iterator](): Iterator<number>;
}
