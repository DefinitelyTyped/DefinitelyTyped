import { HalfEdge } from "./HalfEdge";
import { Plane } from "./Plane";
import { Vector3 } from "./Vector3";

/**
 * Class for representing a planar polygon with an arbitrary amount of edges.
 */
export class Polygon {
    /**
     * The centroid of this polygon.
     */
    readonly centroid: Vector3;

    /**
     * A reference to the first half-edge of this polygon.
     */
    readonly edge: HalfEdge | null;

    /**
     * A plane abstraction of this polygon.
     */
    readonly plane: Plane;

    /**
     * Constructs a new polygon.
     */
    constructor();

    /**
     * Creates the polygon based on the given array of points in 3D space.
     * The method assumes the contour (the sequence of points) is defined
     * in CCW order.
     *
     * @param points - The array of points.
     */
    fromContour(points: Vector3[]): this;

    /**
     * Computes the centroid for this polygon.
     */
    computeCentroid(): this;

    /**
     * Returns true if the polygon contains the given point.
     *
     * @param point - The point to test.
     * @param epsilon - A tolerance value.
     * @return Whether this polygon contain the given point or not.
     */
    contains(point: Vector3, epsilon?: number): boolean;

    /**
     * Returns true if the polygon is convex.
     *
     * @param ccw - Whether the winding order is CCW or not.
     * @return Whether this polygon is convex or not.
     */
    convex(ccw?: boolean): boolean;

    /**
     * Returns true if the polygon is coplanar.
     *
     * @param [epsilon=1e-3] - A tolerance value.
     * @return Whether this polygon is coplanar or not.
     */
    coplanar(epsilon?: number): boolean;

    /**
     * Computes the signed distance from the given 3D vector to this polygon. The method
     * uses the polygon's plane abstraction in order to compute this value.
     *
     * @param point - A point in 3D space.
     * @return The signed distance from the given point to this polygon.
     */
    distanceToPoint(point: Vector3): number;

    /**
     * Determines the contour (sequence of points) of this polygon and
     * stores the result in the given array.
     *
     * @param result - The result array.
     * @return The result array.
     */
    getContour(result: Vector3[]): Vector3[];
}
