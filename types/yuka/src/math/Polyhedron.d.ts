import { AABB } from "./AABB";
import { HalfEdge } from "./HalfEdge";
import { Polygon } from "./Polygon";
import { Vector3 } from "./Vector3";

/**
 * Base class for polyhedra. It is primarily designed for the internal usage in Yuka.
 * Objects of this class are always build up from faces. The edges, vertices and
 * the polyhedron's centroid have to be derived from a valid face definition with the
 * respective methods.
 */
export class Polyhedron {
    /**
     * The faces of this polyhedron.
     */
    faces: Polygon[];

    /**
     * A list of unique edges (no opponent half edges).
     */
    edges: HalfEdge[];

    /**
     * A list of unique vertices.
     */
    vertices: Vector3[];

    /**
     * The centroid of this polyhedron.
     */
    centroid: Vector3;

    /**
     * Constructs a new polyhedron.
     */
    constructor();

    /**
     * Computes the centroid of this polyhedron. Assumes its faces have valid centroids.
     */
    computeCentroid(): this;

    /**
     * Computes unique vertices of this polyhedron. Assumes {@link Polyhedron#faces} is properly set.
     */
    computeUniqueVertices(): this;

    /**
     * Computes unique edges of this polyhedron. Assumes {@link Polyhedron#faces}
     * is properly set.
     */
    computeUniqueEdges(): this;

    /**
     * Configures this polyhedron so it does represent the given AABB.
     */
    fromAABB(aabb: AABB): this;
}
