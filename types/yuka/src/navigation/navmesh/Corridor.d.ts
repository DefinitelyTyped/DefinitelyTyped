import { Vector3 } from "../../math/Vector3";

export interface CorridorPortalEdge {
    left: Vector3;
    right: Vector3;
}

/**
 * A corridor is a sequence of portal edges representing a walkable way within a navigation mesh. The class is able
 * to find the shortest path through this corridor as a sequence of waypoints. It's an implementation of the so called
 * {@link http://digestingduck.blogspot.com/2010/03/simple-stupid-funnel-algorithm.html Funnel Algorithm}. Read
 * the paper {@link https://aaai.org/Papers/AAAI/2006/AAAI06-148.pdf Efficient Triangulation-Based Pathfinding} for
 * more detailed information.
 */
export class Corridor {
    /**
     * The portal edges of the corridor.
     */
    portalEdges: CorridorPortalEdge[];

    constructor();

    /**
     * Adds a portal edge defined by its left and right vertex to this corridor.
     *
     * @param left - The left point (origin) of the portal edge.
     * @param right - The right point (destination) of the portal edge.
     */
    push(left: Vector3, right: Vector3): this;

    /**
     * Generates the shortest path through the corridor as an array of 3D vectors.
     *
     * @return An array of 3D waypoints.
     */
    generate(): Vector3[];
}
