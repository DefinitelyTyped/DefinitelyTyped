import { BoundingSphere } from "./BoundingSphere";
import { Matrix4 } from "./Matrix4";
import { Plane } from "./Plane";
import { Vector3 } from "./Vector3";

/**
 * Class representing an axis-aligned bounding box (AABB).
 */
export class AABB {
    /**
     * The minimum bounds of the AABB.
     */
    min: Vector3;

    /**
     * The maximum bounds of the AABB.
     */
    max: Vector3;

    /**
     * Constructs a new AABB with the given values.
     *
     * @param [min=Vector(0,0,0)] - The minimum bounds of the AABB.
     * @param [max=Vector(0,0,0)] - The maximum bounds of the AABB.
     */
    constructor(min?: Vector3, max?: Vector3);

    /**
     * Sets the given values to this AABB.
     *
     * @param min - The minimum bounds of the AABB.
     * @param max - The maximum bounds of the AABB.
     */
    set(min: Vector3, max: Vector3): this;

    /**
     * Copies all values from the given AABB to this AABB.
     *
     * @param aabb - The AABB to copy.
     */
    copy(aabb: AABB): this;

    /**
     * Creates a new AABB and copies all values from this AABB.
     *
     * @return A new AABB.
     */
    clone(): AABB;

    /**
     * Ensures the given point is inside this AABB and stores
     * the result in the given vector.
     *
     * @param point - A point in 3D space.
     * @param result - The result vector.
     * @return The result vector.
     */
    clampPoint(point: Vector3, result: Vector3): Vector3;

    /**
     * Returns true if the given point is inside this AABB.
     *
     * @param point - A point in 3D space.
     * @return The result of the containment test.
     */
    containsPoint(point: Vector3): boolean;

    /**
     * Expands this AABB by the given point. So after this method call,
     * the given point lies inside the AABB.
     *
     * @param point - A point in 3D space.
     */
    expand(point: Vector3): this;

    /**
     * Computes the center point of this AABB and stores it into the given vector.
     *
     * @param result - The result vector.
     * @return The result vector.
     */
    getCenter(result: Vector3): Vector3;

    /**
     * Computes the size (width, height, depth) of this AABB and stores it into the given vector.
     *
     * @param result - The result vector.
     * @return The result vector.
     */
    getSize(result: Vector3): Vector3;

    /**
     * Returns true if the given AABB intersects this AABB.
     *
     * @param aabb - The AABB to test.
     * @return The result of the intersection test.
     */
    intersectsAABB(aabb: AABB): boolean;

    /**
     * Returns true if the given bounding sphere intersects this AABB.
     *
     * @param sphere - The bounding sphere to test.
     * @return The result of the intersection test.
     */
    intersectsBoundingSphere(sphere: BoundingSphere): boolean;

    /**
     * Returns true if the given plane intersects this AABB.
     *
     * Reference: Testing Box Against Plane in Real-Time Collision Detection
     * by Christer Ericson (chapter 5.2.3)
     *
     * @param plane - The plane to test.
     * @return The result of the intersection test.
     */
    intersectsPlane(plane: Plane): boolean;

    /**
     * Returns the normal for a given point on this AABB's surface.
     *
     * @param point - The point on the surface
     * @param result - The result vector.
     * @return The result vector.
     */
    getNormalFromSurfacePoint(point: Vector3, result: Vector3): Vector3;

    /**
     * Sets the values of the AABB from the given center and size vector.
     *
     * @param center - The center point of the AABB.
     * @param size - The size of the AABB per axis.
     */
    fromCenterAndSize(center: Vector3, size: Vector3): this;

    /**
     * Computes an AABB that encloses the given set of points.
     *
     * @param points - An array of 3D vectors representing points in 3D space.
     */
    fromPoints(points: Vector3[]): this;

    /**
     * Transforms this AABB with the given 4x4 transformation matrix.
     *
     * @param matrix - The 4x4 transformation matrix.
     */
    applyMatrix4(matrix: Matrix4): this;

    /**
     * Returns true if the given AABB is deep equal with this AABB.
     *
     * @param aabb - The AABB to test.
     * @return The result of the equality test.
     */
    equals(aabb: AABB): boolean;

    /**
     * Transforms this instance into a JSON object.
     *
     * @return The JSON object.
     */
    toJSON(): { [s: string]: any };

    /**
     * Restores this instance from the given JSON object.
     *
     * @param json - The JSON object.
     */
    fromJSON(json: { [s: string]: any }): this;
}
