import { Vector3 } from "./Vector3";

/**
 * Class representing a plane in 3D space. The plane is specified in Hessian normal form.
 */
export class Plane {
    /**
     * The normal vector of the plane.
     */
    normal: Vector3;

    /**
     * The distance of the plane from the origin.
     */
    constant: number;

    /**
     * Constructs a new plane with the given values.
     *
     * @param [normal=Vector3( 0, 0, 1 )] - The normal vector of the plane.
     * @param [constant=0] - The distance of the plane from the origin.
     */
    constructor(normal?: Vector3, constant?: number);

    /**
     * Sets the given values to this plane.
     *
     * @param normal - The normal vector of the plane.
     * @param constant - The distance of the plane from the origin.
     */
    set(normal: Vector3, constant: number): this;

    /**
     * Copies all values from the given plane to this plane.
     *
     * @param plane - The plane to copy.
     */
    copy(plane: Plane): this;

    /**
     * Creates a new plane and copies all values from this plane.
     *
     * @return A new plane.
     */
    clone(): Plane;

    /**
     * Computes the signed distance from the given 3D vector to this plane.
     * The sign of the distance indicates the half-space in which the points lies.
     * Zero means the point lies on the plane.
     *
     * @param point - A point in 3D space.
     * @return The signed distance.
     */
    distanceToPoint(point: Vector3): number;

    /**
     * Sets the values of the plane from the given normal vector and a coplanar point.
     *
     * @param normal - A normalized vector.
     * @param point - A coplanar point.
     */
    fromNormalAndCoplanarPoint(normal: Vector3, point: Vector3): this;

    /**
     * Sets the values of the plane from three given coplanar points.
     *
     * @param a - A coplanar point.
     * @param b - A coplanar point.
     * @param c - A coplanar point.
     */
    fromCoplanarPoints(a: Vector3, b: Vector3, c: Vector3): this;

    /**
     * Performs a plane/plane intersection test and stores the intersection point
     * to the given 3D vector. If no intersection is detected, *null* is returned.
     *
     * Reference: Intersection of Two Planes in Real-Time Collision Detection by Christer Ericson (chapter 5.4.4)
     *
     * @param plane - The plane to test.
     * @param result - The result vector.
     */
    intersectPlane(plane: Plane, result: Vector3): Vector3;

    /**
     * Returns true if the given plane intersects this plane.
     *
     * @param plane - The plane to test.
     * @return The result of the intersection test.
     */
    intersectsPlane(plane: Plane): boolean;

    /**
     * Projects the given point onto the plane. The result is written
     * to the given vector.
     *
     * @param point - The point to project onto the plane.
     * @param result - The projected point.
     * @return The projected point.
     */
    projectPoint(point: Vector3, result: Vector3): Vector3;

    /**
     * Returns true if the given plane is deep equal with this plane.
     *
     * @param plane - The plane to test.
     * @return The result of the equality test.
     */
    equals(plane: Plane): boolean;
}
