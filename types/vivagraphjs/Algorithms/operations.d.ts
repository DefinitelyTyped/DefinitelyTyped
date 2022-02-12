export = operations;
declare function operations(): {
    /**
     * Gets graph density, which is a ratio of actual number of edges to maximum
     * number of edges. I.e. graph density 1 means all nodes are connected with each other with an edge.
     * Density 0 - graph has no edges. Runtime: O(1)
     *
     * graph represents oriented graph structure.
     * directed (optional boolean) represents if the graph should be treated as a directed graph.
     *
     * returns density of the graph if graph has nodes. NaN otherwise.
     * Returns density for undirected graph by default but returns density for directed graph if a boolean 'true' is passed along with the graph.
     */
    density: (graph: any, directed: any) => number;
};
