import { Graph } from "../core/Graph";

/**
 * Class for representing a heuristic for graph search algorithms based
 * on the euclidean distance. The heuristic assumes that the node have
 * a *position* property of type {@link Vector3}.
 */
export class HeuristicPolicyEuclid {
    /**
     * Calculates the euclidean distance between two nodes.
     *
     * @param graph - The graph.
     * @param source - The index of the source node.
     * @param target - The index of the target node.
     * @return The euclidean distance between both nodes.
     */
    static calculate(graph: Graph, source: number, target: number): number;
}

/**
 * Class for representing a heuristic for graph search algorithms based
 * on the squared euclidean distance. The heuristic assumes that the node
 * have a *position* property of type {@link Vector3}.
 */
export class HeuristicPolicyEuclidSquared {
    /**
     * Calculates the squared euclidean distance between two nodes.
     *
     * @param graph - The graph.
     * @param source - The index of the source node.
     * @param target - The index of the target node.
     * @return The squared euclidean distance between both nodes.
     */
    static calculate(graph: Graph, source: number, target: number): number;
}

/**
 * Class for representing a heuristic for graph search algorithms based
 * on the manhattan distance. The heuristic assumes that the node
 * have a *position* property of type {@link Vector3}.
 */
export class HeuristicPolicyManhattan {
    /**
     * Calculates the manhattan distance between two nodes.
     *
     * @param graph - The graph.
     * @param source - The index of the source node.
     * @param target - The index of the target node.
     * @return The manhattan distance between both nodes.
     */
    static calculate(graph: Graph, source: number, target: number): number;
}

/**
 * Class for representing a heuristic for graph search algorithms based
 * on Dijkstra's algorithm.
 */
export class HeuristicPolicyDijkstra {
    /**
     * This heuristic always returns *0*. The {@link AStar} algorithm
     * behaves with this heuristic exactly like {@link Dijkstra}
     *
     * @param graph - The graph.
     * @param source - The index of the source node.
     * @param target - The index of the target node.
     * @return The value 0.
     */
    static calculate(graph: Graph, source: number, target: number): number;
}
