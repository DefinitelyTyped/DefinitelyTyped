import { Matrix3 } from "./Matrix3";
import { Matrix4 } from "./Matrix4";
import { Quaternion } from "./Quaternion";

/**
 * Class representing a 3D vector.
 */
export class Vector3 {
    /**
     * The x component.
     */
    x: number;
    /**
     * The y component.
     */
    y: number;
    /**
     * The z component.
     */
    z: number;

    /**
     * Constructs a new 3D vector with the given values.
     *
     * @param [x=0] - The x component.
     * @param [y=0] - The y component.
     * @param [z=0] - The z component.
     */
    constructor(x?: number, y?: number, z?: number);

    /**
     * Sets the given values to this 3D vector.
     *
     * @param x - The x component.
     * @param y - The y component.
     * @param z - The z component.
     */
    set(x: number, y: number, z: number): this;

    /**
     * Copies all values from the given 3D vector to this 3D vector.
     *
     * @param v - The vector to copy.
     */
    copy(v: Vector3): this;

    /**
     * Creates a new 3D vector and copies all values from this 3D vector.
     *
     * @return A new 3D vector.
     */
    clone(): this;

    /**
     * Adds the given 3D vector to this 3D vector.
     *
     * @param v - The vector to add.
     */
    add(v: Vector3): this;

    /**
     * Adds the given scalar to this 3D vector.
     *
     * @param s - The scalar to add.
     */
    addScalar(s: number): this;

    /**
     * Adds two given 3D vectors and stores the result in this 3D vector.
     *
     * @param a - The first vector of the operation.
     * @param b - The second vector of the operation.
     */
    addVectors(a: Vector3, b: Vector3): this;

    /**
     * Subtracts the given 3D vector from this 3D vector.
     *
     * @param v - The vector to subtract.
     */
    sub(v: Vector3): this;

    /**
     * Subtracts the given scalar from this 3D vector.
     *
     * @param s - The scalar to subtract.
     */
    subScalar(s: number): this;

    /**
     * Subtracts two given 3D vectors and stores the result in this 3D vector.
     *
     * @param a - The first vector of the operation.
     * @param b - The second vector of the operation.
     */
    subVectors(a: Vector3, b: Vector3): this;

    /**
     * Multiplies the given 3D vector with this 3D vector.
     *
     * @param v - The vector to multiply.
     */
    multiply(v: Vector3): this;

    /**
     * Multiplies the given scalar with this 3D vector.
     *
     * @param s - The scalar to multiply.
     */
    multiplyScalar(s: number): this;

    /**
     * Multiplies two given 3D vectors and stores the result in this 3D vector.
     *
     * @param a - The first vector of the operation.
     * @param b - The second vector of the operation.
     */
    multiplyVectors(a: Vector3, b: Vector3): this;

    /**
     * Divides the given 3D vector through this 3D vector.
     *
     * @param v - The vector to divide.
     */
    divide(v: Vector3): this;

    /**
     * Divides the given scalar through this 3D vector.
     *
     * @param s - The scalar to multiply.
     */
    divideScalar(s: number): this;

    /**
     * Divides two given 3D vectors and stores the result in this 3D vector.
     *
     * @param a - The first vector of the operation.
     * @param b - The second vector of the operation.
     */
    divideVectors(a: Vector3, b: Vector3): this;

    /**
     * Reflects this vector along the given normal.
     *
     * @param normal - The normal vector.
     */
    reflect(normal: Vector3): this;

    /**
     * Ensures this 3D vector lies in the given min/max range.
     *
     * @param min - The min range.
     * @param max - The max range.
     */
    clamp(min: Vector3, max: Vector3): this;

    /**
     * Compares each vector component of this 3D vector and the
     * given one and stores the minimum value in this instance.
     *
     * @param v - The 3D vector to check.
     */
    min(v: Vector3): this;

    /**
     * Compares each vector component of this 3D vector and the
     * given one and stores the maximum value in this instance.
     *
     * @param v - The 3D vector to check.
     */
    max(v: Vector3): this;

    /**
     * Computes the dot product of this and the given 3D vector.
     *
     * @param v - The given 3D vector.
     * @return The results of the dot product.
     */
    dot(v: Vector3): number;

    /**
     * Computes the cross product of this and the given 3D vector and
     * stores the result in this 3D vector.
     *
     * @param v - A 3D vector.
     */
    cross(v: Vector3): this;

    /**
     * Computes the cross product of the two given 3D vectors and
     * stores the result in this 3D vector.
     *
     * @param a - The first 3D vector.
     * @param b - The second 3D vector.
     */
    crossVectors(a: Vector3, b: Vector3): this;

    /**
     * Computes the angle between this and the given vector.
     *
     * @param v - A 3D vector.
     * @return The angle in radians.
     */
    angleTo(v: Vector3): number;

    /**
     * Computes the length of this 3D vector.
     *
     * @return The length of this 3D vector.
     */
    length(): number;

    /**
     * Computes the squared length of this 3D vector.
     * Calling this method is faster than calling {@link Vector3#length},
     * since it avoids computing a square root.
     *
     * @return The squared length of this 3D vector.
     */
    squaredLength(): number;

    /**
     * Computes the manhattan length of this 3D vector.
     *
     * @return The manhattan length of this 3D vector.
     */
    manhattanLength(): number;

    /**
     * Computes the euclidean distance between this 3D vector and the given one.
     *
     * @param v - A 3D vector.
     * @return The euclidean distance between two 3D vectors.
     */
    distanceTo(v: Vector3): number;

    /**
     * Computes the squared euclidean distance between this 3D vector and the given one.
     * Calling this method is faster than calling {@link Vector3#distanceTo},
     * since it avoids computing a square root.
     *
     * @param v - A 3D vector.
     * @return The squared euclidean distance between two 3D vectors.
     */
    squaredDistanceTo(v: Vector3): number;

    /**
     * Computes the manhattan distance between this 3D vector and the given one.
     *
     * @param v - A 3D vector.
     * @return The manhattan distance between two 3D vectors.
     */
    manhattanDistanceTo(v: Vector3): number;

    /**
     * Normalizes this 3D vector.
     */
    normalize(): this;

    /**
     * Multiplies the given 4x4 matrix with this 3D vector
     *
     * @param m - A 4x4 matrix.
     */
    applyMatrix4(m: Matrix4): this;

    /**
     * Multiplies the given quaternion with this 3D vector.
     *
     * @param q - A quaternion.
     */
    applyRotation(q: Quaternion): this;

    /**
     * Extracts the position portion of the given 4x4 matrix and stores it in this 3D vector.
     *
     * @param m - A 4x4 matrix.
     */
    extractPositionFromMatrix(m: Matrix4): this;

    /**
     * Transform this direction vector by the given 4x4 matrix.
     *
     * @param m - A 4x4 matrix.
     */
    transformDirection(m: Matrix4): this;

    /**
     * Sets the components of this 3D vector from a column of a 3x3 matrix.
     *
     * @param m - A 3x3 matrix.
     * @param i - The index of the column.
     */
    fromMatrix3Column(m: Matrix3, i: number): this;

    /**
     * Sets the components of this 3D vector from a column of a 4x4 matrix.
     *
     * @param m - A 4x4 matrix.
     * @param i - The index of the column.
     */
    fromMatrix4Column(m: Matrix3, i: number): this;

    /**
     * Sets the components of this 3D vector from a spherical coordinate.
     *
     * @param radius - The radius.
     * @param phi - The polar or inclination angle in radians. Should be in the range of (−π/2, +π/2].
     * @param theta - The azimuthal angle in radians. Should be in the range of (−π, +π].
     */
    fromSpherical(radius: number, phi: number, theta: number): this;

    /**
     * Sets the components of this 3D vector from an array.
     *
     * @param array - An array.
     * @param offset - An optional offset.
     */
    fromArray(array: number[], offset?: number): this;

    /**
     * Copies all values of this 3D vector to the given array.
     *
     * @param array - An array.
     * @param offset - An optional offset.
     * @return number[] The array with the 3D vector components.
     */
    toArray(array: number[], offset?: number): number[];

    /**
     * Returns true if the given 3D vector is deep equal with this 3D vector.
     *
     * @param v - The 3D vector to test.
     * @return The result of the equality test.
     */
    equals(v: Vector3): boolean;
}
