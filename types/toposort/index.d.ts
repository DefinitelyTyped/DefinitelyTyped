/**
 * @param edges An array of directed edges describing a graph. An edge looks
 *              like this: `[node1, node2]` (vertices needn't be strings but can
 *              be of any type).
 * @returns a list of vertices, sorted from "start" to "end"
 * @throws if there are any cycles in the graph
 */
declare function toposort<T = string>(edges: ReadonlyArray<[T, T | undefined]>): T[];
declare namespace toposort {
    /**
     * This is a convenience method that allows you to define nodes that may or
     * may not be connected to any other nodes. The ordering of unconnected
     * nodes is not defined.
     * @param nodes An array of nodes
     * @param edges An array of directed edges. You don't need to mention all
     *              `nodes` here.
     * @returns a list of vertices, sorted from "start" to "end"
     * @throws if there are any cycles in the graph
     */
    function array<T = string>(
        nodes: ReadonlyArray<T>,
        edges: ReadonlyArray<[T, T | undefined]>,
    ): T[];
}
export = toposort;
