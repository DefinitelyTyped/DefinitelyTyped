import { Edge } from "../core/Edge";
import { Graph } from "../core/Graph";

/**
 * Implementation of Dijkstra's algorithm.
 */
export class Dijkstra {
    /**
     * The graph.
     */
    graph: Graph | null;

    /**
     * The node index of the source node.
     */
    source: number;

    /**
     * The node index of the target node.
     */
    target: number;

    /**
     * Whether the search was successful or not.
     * @default false
     */
    found: boolean;

    /**
     * Constructs an AStar algorithm object.
     *
     * @param [graph=null] - The graph.
     * @param [source=-1] - The node index of the source node.
     * @param [target=-1] - The node index of the target node.
     */
    constructor(graph?: Graph | null, source?: number, target?: number);

    /**
     * Executes the graph search.
     * If the search was successful, {@link Dijkstra#found} is set to true.
     */
    search(): this;

    /**
     * Returns the shortest path from the source to the target node as an array of node indices.
     */
    getPath(): number[];

    /**
     * Returns the search tree of the algorithm as an array of edges.
     */
    getSearchTree(): Edge[];

    /**
     * Clears the internal state of the object. A new search is now possible.
     */
    clear(): this;
}
