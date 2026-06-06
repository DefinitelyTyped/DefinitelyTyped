import { AABB } from "./AABB";
import { BoundingSphere } from "./BoundingSphere";
import { Matrix3 } from "./Matrix3";
import { Plane } from "./Plane";
import { Vector3 } from "./Vector3";

/**
 * Class representing an oriented bounding box (OBB). Similar to an AABB, it's a
 * rectangular block but with an arbitrary orientation. When using {@link OBB#fromPoints},
 * the implementation tries to provide a tight-fitting oriented bounding box. In
 * many cases, the result is better than an AABB or bounding sphere but worse than a
 * convex hull. However, it's more efficient to work with OBBs compared to convex hulls.
 * In general, OBB's are a good compromise between performance and tightness.
 */
export class OBB {
    center: Vector3;
    halfSizes: Vector3;
    rotation: Matrix3;

    /**
     * Constructs a new OBB with the given values.
     *
     * @param [center=Vector3(0,0,0)] - The center of this OBB.
     * @param [halfSizes=Vector3(0,0,0)] - The half sizes of the OBB (defines its width, height and depth).
     * @param [rotation=Matrix()] - The rotation of this OBB.
     */
    constructor(center?: Vector3, halfSizes?: Vector3, rotation?: Matrix3);

    /**
     * Sets the given values to this OBB.
     *
     * @param center - The center of this OBB
     * @param halfSizes - The half sizes of the OBB (defines its width, height and depth).
     * @param rotation - The rotation of this OBB.
     */
    set(center: Vector3, halfSizes: Vector3, rotation: Matrix3): this;

    /**
     * Copies all values from the given OBB to this OBB.
     *
     * @param obb - The OBB to copy.
     */
    copy(obb: OBB): this;

    /**
     * Creates a new OBB and copies all values from this OBB.
     */
    clone(): OBB;

    /**
     * Computes the size (width, height, depth) of this OBB and stores it into the given vector.
     *
     * @param result - The result vector.
     * @return The result vector.
     */
    getSize(result: Vector3): Vector3;

    /**
     * Ensures the given point is inside this OBB and stores
     * the result in the given vector.
     *
     * Reference: Closest Point on OBB to Point in Real-Time Collision Detection
     * by Christer Ericson (chapter 5.1.4)
     *
     * @param point - A point in 3D space.
     * @param result - The result vector.
     * @return The result vector.
     */
    clampPoint(point: Vector3, result: Vector3): Vector3;

    /**
     * Returns true if the given point is inside this OBB.
     *
     * @param point - A point in 3D space.
     * @return Whether the given point is inside this OBB or not.
     */
    containsPoint(point: Vector3): boolean;

    /**
     * Returns true if the given AABB intersects this OBB.
     *
     * @param aabb - The AABB to test.
     * @return The result of the intersection test.
     */
    intersectsAABB(aabb: AABB): boolean;

    /**
     * Returns true if the given bounding sphere intersects this OBB.
     *
     * @param sphere - The bounding sphere to test.
     * @return The result of the intersection test.
     */
    intersectsBoundingSphere(sphere: BoundingSphere): boolean;

    /**
     * Returns true if the given OBB intersects this OBB.
     *
     * Reference: OBB-OBB Intersection in Real-Time Collision Detection
     * by Christer Ericson (chapter 4.4.1)
     *
     * @param obb - The OBB to test.
     * @param [epsilon=Number.EPSILON] - The epsilon (tolerance) value.
     * @return The result of the intersection test.
     */
    intersectsOBB(obb: OBB, epsilon?: number): boolean;

    /**
     * Returns true if the given plane intersects this OBB.
     *
     * Reference: Testing Box Against Plane in Real-Time Collision Detection
     * by Christer Ericson (chapter 5.2.3)
     *
     * @param plane - The plane to test.
     * @return The result of the intersection test.
     */
    intersectsPlane(plane: Plane): boolean;

    /**
     * Computes the OBB from an AABB.
     *
     * @param aabb - The AABB.
     */
    fromAABB(aabb: AABB): this;

    /**
     * Computes the minimum enclosing OBB for the given set of points. The method is an
     * implementation of {@link http://gamma.cs.unc.edu/users/gottschalk/main.pdf Collision Queries using Oriented Bounding Boxes}
     * by Stefan Gottschalk.
     * According to the dissertation, the quality of the fitting process varies from
     * the respective input. This method uses the best approach by computing the
     * covariance matrix based on the triangles of the convex hull (chapter 3.4.3).
     *
     * However, the implementation is susceptible to {@link https://en.wikipedia.org/wiki/Regular_polygon regular polygons}
     * like cubes or spheres. For such shapes, it's recommended to verify the quality
     * of the produced OBB. Consider to use an AABB or bounding sphere if the result
     * is not satisfying.
     *
     * @param points - An array of 3D vectors representing points in 3D space.
     */
    fromPoints(points: Vector3[]): this;

    /**
     * Returns true if the given OBB is deep equal with this OBB.
     *
     * @param obb - The OBB to test.
     * @return The result of the equality test.
     */
    equals(obb: OBB): boolean;

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
     * @return A reference to this OBB.
     */
    fromJSON(json: { [s: string]: any }): this;
}
