/**
 * Base class for graph edges.
 */
export class Edge {
    /**
     * The index of the *from* node.
     * @default -1
     */
    from: number;

    /**
     * The index of the *to* node.
     * @default -1
     */
    to: number;

    /**
     * The cost of this edge. This could be for example a distance or time value.
     * @default 0
     */
    cost: number;

    /**
     * Constructs a new edge.
     *
     * @param [from=-1] - The index of the from node.
     * @param [to=-1] - The index of the to node.
     * @param [cost=0] - The cost of this edge.
     */
    constructor(from?: number, to?: number, cost?: number);

    /**
     * Copies all values from the given edge to this edge.
     *
     * @param edge - The edge to copy.
     */
    copy(edge: Edge): this;

    /**
     * Creates a new edge and copies all values from this edge.
     */
    clone(): Edge;

    /**
     * Transforms this instance into a JSON object.
     */
    toJSON(): { [s: string]: any };

    /**
     * Restores this instance from the given JSON object.
     *
     * @param json - The JSON object.
     */
    fromJSON(json: { [s: string]: any }): this;
}
