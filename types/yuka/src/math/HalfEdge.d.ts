import { Polygon } from "./Polygon";
import { Vector3 } from "./Vector3";

/**
 * Implementation of a half-edge data structure, also known as
 * {@link https://en.wikipedia.org/wiki/Doubly_connected_edge_list Doubly connected edge list}.
 */
export class HalfEdge {
    /**
     * The vertex of this half-edge. It represents the head/destination of the respective full edge.
     */
    vertex: Vector3;

    /**
     * A reference to the next half-edge.
     */
    next: HalfEdge | null;

    /**
     * A reference to the previous half-edge.
     */
    prev: HalfEdge | null;

    /**
     * A reference to the opponent half-edge.
     */
    twin: HalfEdge | null;

    /**
     * A reference to its polygon/face.
     */
    polygon: Polygon | null;

    /**
     * Constructs a new half-edge.
     *
     * @param [vertex=Vector3(0,0,0)] - The vertex of this half-edge. It represents the head/destination of the respective full edge.
     */
    constructor(vertex?: Vector3);

    /**
     * Returns the tail of this half-edge.
     * That's a reference to the previous half-edge vertex.
     *
     * @return The tail vertex.
     */
    tail(): Vector3 | null;

    /**
     * Returns the head of this half-edge.
     * That's a reference to the own vertex.
     *
     * @return The head vertex.
     */
    head(): Vector3;

    /**
     * Computes the length of this half-edge.
     *
     * @return The length of this half-edge.
     */
    length(): number;

    /**
     * Computes the squared length of this half-edge.
     *
     * @return The squared length of this half-edge.
     */
    squaredLength(): number;

    /**
     * Links the given opponent half edge with this one.
     *
     * @param edge - The opponent edge to link.
     */
    linkOpponent(edge: HalfEdge): HalfEdge;

    /**
     * Computes the direction of this half edge. The method assumes the half edge
     * has a valid reference to a previous half edge.
     *
     * @param result - The result vector.
     * @return The result vector.
     */
    getDirection(result: Vector3): Vector3;
}
