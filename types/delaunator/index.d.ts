// Type definitions for delaunator 1.0
// Project: https://github.com/mapbox/delaunator#readme
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Delaunator<T> {
    /**
     * A flat Int32Array array of triangle vertex indices (each group of three numbers forms a triangle). All triangles are directed counterclockwise.
     */
    triangles: Int32Array;

    /**
     * A flat Int32Array array of triangle half-edge indices that allows you to traverse the triangulation.
     * i-th half-edge in the array corresponds to vertex triangles[i] the half-edge is coming from.
     * halfedges[i] is the index of a twin half-edge in an adjacent triangle (or -1 for outer half-edges on the convex hull).
     *
     * The flat array-based data structures might be counterintuitive, but they're one of the key reasons this library is fast.
     */
    halfedges: Int32Array;

    /**
     * Constructs a delaunay triangulation object given an array of points ([x, y] by default). Duplicate points are skipped.
     */
    constructor(points: Delaunator.Points);
    constructor(points: T[], getX: Delaunator.GetPoint<T>, getY: Delaunator.GetPoint<T>);
}

declare namespace Delaunator {
    type Point = number[];
    type Points = Point[];
    type Triangles = Int32Array;
    type HalfEdges = Int32Array;
    type GetPoint<T> = (point: T) => number;
}
export = Delaunator;
