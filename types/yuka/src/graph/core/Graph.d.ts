import { Edge } from "./Edge";
import { Node } from "./Node";

/**
 * Class representing a sparse graph implementation based on adjacency lists.
 * A sparse graph can be used to model many different types of graphs like navigation
 * graphs (pathfinding), dependency graphs (e.g. technology trees) or state graphs
 * (a representation of every possible state in a game).
 */
export class Graph<TNode extends Node = Node, TEdge extends Edge = Edge> {
    /**
     * Whether this graph is directed or not.
     * @default false
     */
    digraph: boolean;

    /**
     * Constructs a new graph.
     */
    constructor();

    /**
     * Adds a node to the graph.
     *
     * @param node - The node to add.
     */
    addNode(node: TNode): this;

    /**
     * Adds an edge to the graph.
     * If the graph is undirected, the method automatically creates the opponent edge.
     *
     * @param edge - The edge to add.
     */
    addEdge(edge: TEdge): this;

    /**
     * Returns a node for the given node index.
     * If no node is found, *null* is returned.
     *
     * @param index - The index of the node.
     */
    getNode(index: number): TNode;

    /**
     * Returns an edge for the given *from* and *to* node indices.
     * If no node is found, *null* is returned.
     *
     * @param from - The index of the from node.
     * @param to - The index of the to node.
     */
    getEdge(from: number, to: number): this;

    /**
     * Gathers all nodes of the graph and stores them into the given array.
     *
     * @param result - The result array.
     */
    getNodes(result: TNode[]): TNode[];

    /**
     * Gathers all edges leading from the given node index and stores them
     * into the given array.
     *
     * @param index - The node index.
     * @param result - The result array.
     */
    getEdgesOfNode(index: number, result: TEdge[]): TEdge[];

    /**
     * Returns the node count of the graph.
     */
    getNodeCount(): number;

    /**
     * Returns the edge count of the graph.
     */
    getEdgeCount(): number;

    /**
     * Removes the given node from the graph and all edges which are connected
     * with this node.
     *
     * @param node - The node to remove.
     */
    removeNode(node: TNode): this;

    /**
     * Removes the given edge from the graph. If the graph is undirected, the
     * method also removes the opponent edge.
     *
     * @param edge - The edge to remove.
     */
    removeEdge(edge: TEdge): this;

    /**
     * Return true if the graph has the given node index.
     *
     * @param index - The node index to test.
     */
    hasNode(index: number): boolean;

    /**
     * Return true if the graph has an edge connecting the given
     * *from* and *to* node indices.
     *
     * @param from - The index of the from node.
     * @param to - The index of the to node.
     */
    hasEdge(from: number, to: number): boolean;

    /**
     * Removes all nodes and edges from this graph.
     */
    clear(): this;

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
