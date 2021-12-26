import { Matrix4 } from "./Matrix4";
import { Plane } from "./Plane";
import { Vector3 } from "./Vector3";

/**
 * Class representing a bounding sphere.
 */
export class BoundingSphere {
    /**
     * The center position of the bounding sphere.
     * @default Vector(0,0,0)
     */
    center: Vector3;

    /**
     * The radius of the bounding sphere.
     * @default 0
     */
    radius: number;

    /**
     * Constructs a new bounding sphere with the given values.
     *
     * @param [center=Vector(0,0,0)] - The center position of the bounding sphere.
     * @param [radius=0] - The radius of the bounding sphere.
     */
    constructor(center?: Vector3, radius?: number);

    /**
     * Sets the given values to this bounding sphere.
     *
     * @param center - The center position of the bounding sphere.
     * @param radius - The radius of the bounding sphere.
     */
    set(center: Vector3, radius: number): this;

    /**
     * Copies all values from the given bounding sphere to this bounding sphere.
     *
     * @param sphere - The bounding sphere to copy.
     */
    copy(sphere: BoundingSphere): this;

    /**
     * Creates a new bounding sphere and copies all values from this bounding sphere.
     *
     * @return A new bounding sphere.
     */
    clone(): BoundingSphere;

    /**
     * Ensures the given point is inside this bounding sphere and stores
     * the result in the given vector.
     *
     * @param point - A point in 3D space.
     * @param result - The result vector.
     * @return The result vector.
     */
    clampPoint(point: Vector3, result: Vector3): Vector3;

    /**
     * Returns true if the given point is inside this bounding sphere.
     *
     * @param point - A point in 3D space.
     * @return The result of the containments test.
     */
    containsPoint(point: Vector3): boolean;

    /**
     * Returns true if the given bounding sphere intersects this bounding sphere.
     *
     * @param sphere - The bounding sphere to test.
     * @return The result of the intersection test.
     */
    intersectsBoundingSphere(sphere: BoundingSphere): boolean;

    /**
     * Returns true if the given plane intersects this bounding sphere.
     *
     * Reference: Testing Sphere Against Plane in Real-Time Collision Detection
     * by Christer Ericson (chapter 5.2.2)
     *
     * @param plane - The plane to test.
     * @return The result of the intersection test.
     */
    intersectsPlane(plane: Plane): boolean;

    /**
     * Returns the normal for a given point on this bounding sphere's surface.
     *
     * @param point - The point on the surface
     * @param result - The result vector.
     * @return The result vector.
     */
    getNormalFromSurfacePoint(point: Vector3, result: Vector3): Vector3;

    /**
     * Computes a bounding sphere that encloses the given set of points.
     *
     * @param points - An array of 3D vectors representing points in 3D space.
     */
    fromPoints(points: Vector3[]): this;

    /**
     * Transforms this bounding sphere with the given 4x4 transformation matrix.
     *
     * @param matrix - The 4x4 transformation matrix.
     */
    applyMatrix4(matrix: Matrix4): this;

    /**
     * Returns true if the given bounding sphere is deep equal with this bounding sphere.
     *
     * @param sphere - The bounding sphere to test.
     * @return The result of the equality test.
     */
    equals(sphere: BoundingSphere): boolean;

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
