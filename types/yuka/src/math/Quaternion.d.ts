import { Matrix3 } from "./Matrix3";
import { Matrix4 } from "./Matrix4";
import { Vector3 } from "./Vector3";

/**
 * Class representing a quaternion.
 */
export class Quaternion {
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
     * The w component.
     */
    w: number;

    /**
     * Constructs a new quaternion with the given values.
     *
     * @param [x=0] - The x component.
     * @param [y=0] - The y component.
     * @param [z=0] - The z component.
     * @param [w=0] - The w component.
     */
    constructor(x?: number, y?: number, z?: number, w?: number);

    /**
     * Sets the given values to this quaternion.
     *
     * @param x - The x component.
     * @param y - The y component.
     * @param z - The z component.
     * @param w - The w component.
     */
    set(x: number, y: number, z: number, w: number): this;

    /**
     * Copies all values from the given quaternion to this quaternion.
     *
     * @param q - The quaternion to copy.
     */
    copy(q: Quaternion): this;

    /**
     * Creates a new quaternion and copies all values from this quaternion.
     *
     * @return A new quaternion.
     */
    clone(): Quaternion;

    /**
     * Computes the inverse of this quaternion.
     */
    inverse(): this;

    /**
     * Computes the conjugate of this quaternion.
     */
    conjugate(): this;

    /**
     * Computes the dot product of this and the given quaternion.
     *
     * @param q - The given quaternion.
     */
    dot(q: Quaternion): this;

    /**
     * Computes the length of this quaternion.
     *
     * @return The length of this quaternion.
     */
    length(): number;

    /**
     * Computes the squared length of this quaternion.
     *
     * @return The squared length of this quaternion.
     */
    squaredLength(): number;

    /**
     * Normalizes this quaternion.
     */
    normalize(): this;

    /**
     * Multiplies this quaternion with the given quaternion.
     *
     * @param q - The quaternion to multiply.
     */
    multiply(q: Quaternion): this;

    /**
     * Multiplies the given quaternion with this quaternion.
     * So the order of the multiplication is switched compared to {@link Quaternion#multiply}.
     *
     * @param q - The quaternion to multiply.
     */
    premultiply(q: Quaternion): this;

    /**
     * Multiplies two given quaternions and stores the result in this quaternion.
     *
     * @param a - The first quaternion of the operation.
     * @param b - The second quaternion of the operation.
     */
    multiplyQuaternions(a: Quaternion, b: Quaternion): this;

    /**
     * Computes the shortest angle between two rotation defined by this quaternion and the given one.
     *
     * @param q - The given quaternion.
     * @return The angle in radians.
     */
    angleTo(q: Quaternion): number;

    /**
     * Transforms this rotation defined by this quaternion towards the target rotation
     * defined by the given quaternion by the given angular step. The rotation will not overshoot.
     *
     * @param q - The target rotation.
     * @param step - The maximum step in radians.
     * @param tolerance - A tolerance value in radians to tweak the result when both rotations are considered to be equal.
     * @return Whether the given quaternion already represents the target rotation.
     */
    rotateTo(q: Quaternion, step: number, tolerance?: number): boolean;

    /**
     * Creates a quaternion that orients an object to face towards a specified target direction.
     *
     * @param localForward - Specifies the forward direction in the local space of the object.
     * @param targetDirection - Specifies the desired world space direction the object should look at.
     * @param localUp - Specifies the up direction in the local space of the object.
     */
    lookAt(localForward: Vector3, targetDirection: Vector3, localUp: Vector3): this;

    /**
     * Spherically interpolates between this quaternion and the given quaternion by t.
     * The parameter t is clamped to the range [0, 1].
     *
     * @param q - The target rotation.
     * @param t - The interpolation parameter.
     * @return A reference to this quaternion.
     */
    slerp(q: Quaternion, t: number): this;

    /**
     * Extracts the rotation of the given 4x4 matrix and stores it in this quaternion.
     *
     * @param m - A 4x4 matrix.
     * @return A reference to this quaternion.
     */
    extractRotationFromMatrix(m: Matrix4): this;

    /**
     * Sets the components of this quaternion from the given euler angle (YXZ order).
     *
     * @param x - Rotation around x axis in radians.
     * @param y - Rotation around y axis in radians.
     * @param z - Rotation around z axis in radians.
     * @return A reference to this quaternion.
     */
    fromEuler(x: number, y: number, z: number): this;

    /**
     * Returns an euler angle (YXZ order) representation of this quaternion.
     *
     * @param euler - The resulting euler angles.
     * @return The resulting euler angles.
     */
    toEuler(euler: { x: number; y: number; z: number }): { x: number; y: number; z: number };

    /**
     * Sets the components of this quaternion from the given 3x3 rotation matrix.
     *
     * @param m - The rotation matrix.
     */
    fromMatrix3(m: Matrix3): this;

    /**
     * Sets the components of this quaternion from an array.
     *
     * @param array - An array.
     * @param offset - An optional offset.
     */
    fromArray(array: number[], offset?: number): this;

    /**
     * Copies all values of this quaternion to the given array.
     *
     * @param array - An array.
     * @param offset - An optional offset.
     * @return The array with the quaternion components.
     */
    toArray(array: number[], offset?: number): number[];

    /**
     * Returns true if the given quaternion is deep equal with this quaternion.
     *
     * @param q - The quaternion to test.
     * @return The result of the equality test.
     */
    equals(q: Quaternion): boolean;
}
