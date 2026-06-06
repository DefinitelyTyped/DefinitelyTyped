import { AABB } from "./AABB";
import { BoundingSphere } from "./BoundingSphere";
import { BVH } from "./BVH";
import { ConvexHull } from "./ConvexHull";
import { Matrix4 } from "./Matrix4";
import { OBB } from "./OBB";
import { Plane } from "./Plane";
import { Vector3 } from "./Vector3";

export interface Triangle {
    /**
     * The first vertex position.
     */
    a: Vector3;
    /**
     * The second vertex position.
     */
    b: Vector3;
    /**
     * The third vertex position.
     */
    c: Vector3;
}

/**
 * Class representing a ray in 3D space.
 */
export class Ray {
    /**
     * The origin of the ray.
     */
    origin: Vector3;

    /**
     * The direction of the ray.
     */
    direction: Vector3;

    /**
     * Constructs a new ray with the given values.
     *
     * @param [origin=Vector3(0,0,0)] - The origin of the ray.
     * @param [direction=Vector3(0,0,0)] - The direction of the ray.
     */
    constructor(origin?: Vector3, direction?: Vector3);

    /**
     * Sets the given values to this ray.
     *
     * @param origin - The origin of the ray.
     * @param direction - The direction of the ray.
     */
    set(origin: Vector3, direction: Vector3): this;

    /**
     * Copies all values from the given ray to this ray.
     *
     * @param ray - The ray to copy.
     */
    copy(ray: Ray): this;

    /**
     * Creates a new ray and copies all values from this ray.
     *
     * @return A new ray.
     */
    clone(): Ray;

    /**
     * Computes a position on the ray according to the given t value
     * and stores the result in the given 3D vector. The t value has a range of
     * [0, Infinity] where 0 means the position is equal with the origin of the ray.
     *
     * @param t - A scalar value representing a position on the ray.
     * @param result - The result vector.
     * @return The result vector.
     */
    at(t: number, result: Vector3): Vector3;

    /**
     * Performs a ray/sphere intersection test and stores the intersection point
     * to the given 3D vector. If no intersection is detected, *null* is returned.
     *
     * @param sphere - A bounding sphere.
     * @param result - The result vector.
     * @return The result vector.
     */
    intersectBoundingSphere(sphere: BoundingSphere, result: Vector3): Vector3;

    /**
     * Performs a ray/sphere intersection test. Returns either true or false if
     * there is a intersection or not.
     *
     * @param sphere - A bounding sphere.
     * @return Whether there is an intersection or not.
     */
    intersectsBoundingSphere(sphere: BoundingSphere): boolean;

    /**
     * Performs a ray/AABB intersection test and stores the intersection point
     * to the given 3D vector. If no intersection is detected, *null* is returned.
     *
     * @param aabb - An AABB.
     * @param result - The result vector.
     * @return The result vector.
     */
    intersectAABB(aabb: AABB, result: Vector3): Vector3;

    /**
     * Performs a ray/AABB intersection test. Returns either true or false if
     * there is a intersection or not.
     *
     * @param aabb - An axis-aligned bounding box.
     * @return Whether there is an intersection or not.
     */
    intersectsAABB(aabb: AABB): boolean;

    /**
     * Performs a ray/plane intersection test and stores the intersection point
     * to the given 3D vector. If no intersection is detected, *null* is returned.
     *
     * @param plane - A plane.
     * @param result - The result vector.
     * @return The result vector.
     */
    intersectPlane(plane: Plane, result: Vector3): Vector3;

    /**
     * Performs a ray/plane intersection test. Returns either true or false if
     * there is a intersection or not.
     *
     * @param plane - A plane.
     * @return Whether there is an intersection or not.
     */
    intersectsPlane(plane: Plane): boolean;

    /**
     * Performs a ray/OBB intersection test and stores the intersection point
     * to the given 3D vector. If no intersection is detected, *null* is returned.
     *
     * @param obb - An orientend bounding box.
     * @param result - The result vector.
     * @return The result vector.
     */
    intersectOBB(obb: OBB, result: Vector3): Vector3;

    /**
     * Performs a ray/OBB intersection test. Returns either true or false if
     * there is a intersection or not.
     *
     * @param obb - An orientend bounding box.
     * @return Whether there is an intersection or not.
     */
    intersectsOBB(obb: OBB): boolean;

    /**
     * Performs a ray/convex hull intersection test and stores the intersection point
     * to the given 3D vector. If no intersection is detected, *null* is returned.
     * The implementation is based on "Fast Ray-Convex Polyhedron Intersection"
     * by Eric Haines, GRAPHICS GEMS II
     *
     * @param convexHull - A convex hull.
     * @param result - The result vector.
     * @return The result vector.
     */
    intersectConvexHull(convexHull: ConvexHull, result: Vector3): Vector3;

    /**
     * Performs a ray/convex hull intersection test. Returns either true or false if
     * there is a intersection or not.
     *
     * @param convexHull - A convex hull.
     * @return Whether there is an intersection or not.
     */
    intersectsConvexHull(convexHull: ConvexHull): boolean;

    /**
     * Performs a ray/triangle intersection test and stores the intersection point
     * to the given 3D vector. If no intersection is detected, *null* is returned.
     *
     * @param triangle - A triangle.
     * @param backfaceCulling - Whether back face culling is active or not.
     * @param result - The result vector.
     * @return The result vector.
     */
    intersectTriangle(triangle: Triangle, backfaceCulling: boolean, result: Vector3): Vector3;

    /**
     * Performs a ray/BVH intersection test and stores the intersection point
     * to the given 3D vector. If no intersection is detected, *null* is returned.
     *
     * @param bvh - A BVH.
     * @param result - The result vector.
     * @return The result vector.
     */
    intersectBVH(bvh: BVH, result: Vector3): Vector3;

    /**
     * Performs a ray/BVH intersection test. Returns either true or false if
     * there is a intersection or not.
     *
     * @param bvh - A BVH.
     * @return Whether there is an intersection or not.
     */
    intersectsBVH(bvh: BVH): boolean;

    /**
     * Transforms this ray by the given 4x4 matrix.
     *
     * @param m - The 4x4 matrix.
     * @return A reference to this ray.
     */
    applyMatrix4(m: Matrix4): this;

    /**
     * Returns true if the given ray is deep equal with this ray.
     *
     * @param ray - The ray to test.
     * @return The result of the equality test.
     */
    equals(ray: Ray): boolean;
}
