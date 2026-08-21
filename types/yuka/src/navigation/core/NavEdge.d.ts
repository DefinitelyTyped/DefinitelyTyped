import { Edge } from "../../graph/core/Edge";

/**
 * Class for representing navigation edges.
 */
export class NavEdge extends Edge {
    /**
     * Constructs a navigation edge.
     *
     * @param [from=-1] - The index of the from node.
     * @param [to=-1] - The index of the to node.
     * @param [cost=-1] - The cost of this edge.
     */
    constructor(from?: number, to?: number, cost?: number);
}
