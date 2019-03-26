// Type definitions for delaunator 2.0
// Project: https://github.com/mapbox/delaunator#readme
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
//                 Bradley Odell <https://github.com/BTOdell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Delaunator<P> {
    /**
     * A flat Uint32Array array of triangle vertex indices (each group of three numbers forms a triangle). All triangles are directed counterclockwise.
     */
    triangles: Uint32Array;

    /**
     * A flat Int32Array array of triangle half-edge indices that allows you to traverse the triangulation.
     * i-th half-edge in the array corresponds to vertex triangles[i] the half-edge is coming from.
     * halfedges[i] is the index of a twin half-edge in an adjacent triangle (or -1 for outer half-edges on the convex hull).
     *
     * The flat array-based data structures might be counterintuitive, but they're one of the key reasons this library is fast.
     */
    halfedges: Int32Array;

    /**
     * A circular doubly-linked list that holds a convex hull of the delaunay triangulation.
     */
    hull: Delaunator.Node;

    /**
     * Constructs a delaunay triangulation object given a typed array of point coordinates of the form: [x0, y0, x1, y1, ...].
     */
    constructor(points: ArrayLike<number>);

    /**
     * Constructs a delaunay triangulation object given an array of points (e.g. [x, y]). Duplicate points are skipped.
     */
    static from(points: ArrayLike<ArrayLike<number>>): Delaunator<ArrayLike<number>>;

    /**
     * Constructs a delaunay triangulation object given an array of custom points. Duplicate points are skipped.
     */
    static from<P>(points: ArrayLike<P>, getX: (point: P) => number, getY: (point: P) => number): Delaunator<P>;
}

declare namespace Delaunator {
    interface Node {
        i: number;
        x: number;
        y: number;
        t: number;
        prev: Node|null;
        next: Node|null;
        removed: boolean;
    }
}

export = Delaunator;
