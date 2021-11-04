import { Edge } from "../core/Edge";
import { Graph } from "../core/Graph";
import { HeuristicPolicyEuclid } from "../extra/HeuristicPolicy";

export interface HeuristicPolicy {
    /**
     * Calculates the distance between two nodes.
     *
     * @param graph - The graph.
     * @param source - The index of the source node.
     * @param target - The index of the target node.
     * @return The euclidean distance between both nodes.
     */
    calculate(graph: Graph, source: number, target: number): number;
}

/**
 * Implementation of the AStar algorithm.
 */
export class AStar {
    /**
     * The graph.
     */
    graph: Graph | null;

    /**
     * The node index of the source node.
     * @default -1
     */
    source: number;

    /**
     * The node index of the target node.
     * @default -1
     */
    target: number;

    /**
     * Whether the search was successful or not.
     * @default false
     */
    found: boolean;

    /**
     * The heuristic of the search.
     * @default {@link HeuristicPolicyEuclid}
     */
    heuristic: HeuristicPolicy;

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
     * If the search was successful, {@link AStar#found} is set to true.
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
