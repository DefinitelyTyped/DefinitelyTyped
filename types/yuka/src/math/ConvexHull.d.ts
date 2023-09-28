import { AABB } from "./AABB";
import { HalfEdge } from "./HalfEdge";
import { Polygon } from "./Polygon";
import { Polyhedron } from "./Polyhedron";
import { Vector3 } from "./Vector3";

/**
 * Class representing a convex hull. This is an implementation of the Quickhull algorithm
 * based on the presentation {@link http://media.steampowered.com/apps/valve/2014/DirkGregorius_ImplementingQuickHull.pdf Implementing QuickHull}
 * by Dirk Gregorius (Valve Software) from GDC 2014. The algorithm has an average runtime
 * complexity of O(nlog(n)), whereas in the worst case it takes O(n²).
 */
export class ConvexHull extends Polyhedron {
    /**
     * Whether faces of the convex hull should be merged or not.
     * @default true
     */
    mergeFaces: boolean;

    /**
     * Constructs a new convex hull.
     */
    constructor();

    /**
     * Returns true if the given point is inside this convex hull.
     *
     * @param point - A point in 3D space.
     * @return Whether the given point is inside this convex hull or not.
     */
    containsPoint(point: Vector3): boolean;

    /**
     * Returns true if this convex hull intersects with the given AABB.
     *
     * @param aabb - The AABB to test.
     * @return Whether this convex hull intersects with the given AABB or not.
     */
    intersectsAABB(aabb: AABB): boolean;

    /**
     * Returns true if this convex hull intersects with the given one.
     *
     * @param convexHull - The convex hull to test.
     * @return Whether this convex hull intersects with the given one or not.
     */
    intersectsConvexHull(convexHull: ConvexHull): boolean;

    /**
     * Computes a convex hull that encloses the given set of points. The computation requires
     * at least four points.
     *
     * @param points - An array of 3D vectors representing points in 3D space.
     * @return A reference to this convex hull.
     */
    fromPoints(points: Vector3[]): this;
}

export class Face extends Polygon {
    outside: Vertex | null;
    active: boolean;

    constructor(a?: Vector3, b?: Vector3, c?: Vector3);

    getEdge(i: number): HalfEdge;
}

export class Vertex {
    point: Vector3;
    prev: Vertex | null;
    next: Vertex | null;
    face: Face | null;

    constructor(point?: Vector3);
}

export class VertexList {
    head: Vertex | null;
    tail: Vertex | null;

    constructor();

    first(): Vertex | null;

    last(): Vertex | null;

    clear(): this;

    insertAfter(target: Vertex, vertex: Vertex): this;

    append(vertex: Vertex): this;

    appendChain(vertex: Vertex): this;

    remove(vertex: Vertex): this;

    removeChain(a: Vertex, b: Vertex): this;

    empty(): boolean;
}
