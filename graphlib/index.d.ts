// Type definitions for graphlib 2.1.1
// Project: https://github.com/cpettitt/graphlib
// Definitions by: Dan Vanderkam <http://danvk.org/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module "graphlib" {
  export interface GraphOptions {
    directed?: boolean;  // default: true.
    multigraph?: boolean;  // default: false.
    compound?: boolean;  // default: false.
  }

  export interface Edge {
    v: string;
    w: string;
    /** The name that uniquely identifies a multi-edge. */
    name?: string;
  }

  export class Graph {
    constructor(options?: GraphOptions);

    /**
     * Sets the default node label. This label will be assigned as default label
     * in case if no label was specified while setting a node.
     * Complexity: O(1).
     * 
     * @argument label - default node label.
     * @returns the graph, allowing this to be chained with other functions.
     */
    setDefaultNodeLabel(label: any): Graph;

    /**
     * Sets the default node label factory function. This function will be invoked
     * each time when setting a node with no label specified and returned value 
     * will be used as a label for node.
     * Complexity: O(1).
     * 
     * @argument labelFn - default node label factory function.
     * @returns the graph, allowing this to be chained with other functions.
     */
    setDefaultNodeLabel(labelFn: (v: string) => any): Graph;



    /**
     * Creates or updates the value for the node v in the graph. If label is supplied
     * it is set as the value for the node. If label is not supplied and the node was
     * created by this call then the default node label will be assigned.
     * Complexity: O(1).
     * 
     * @argument name - node name.
     * @argument label - value to set for node.
     * @returns the graph, allowing this to be chained with other functions.
     */
    setNode(name: string, label?: any): Graph;

    /**
     * Invokes setNode method for each node in names list.
     * Complexity: O(|names|).
     * 
     * @argument names - list of nodes names to be set.
     * @argument label - value to set for each node in list.
     * @returns the graph, allowing this to be chained with other functions.
     */
    setNodes(names: string[], label?: any): Graph;

    /**
     * Sets node p as a parent for node v. Method throws an exception in case of
     * invoking it in context of noncompound graph.
     * Average-case complexity: O(1).
     * 
     * @argument v - node to be child for p.
     * @argument p - node to be parent for v.
     * @returns the graph, allowing this to be chained with other functions.
     */
    setParent(v: string, p: string): Graph;

    /**
     * Gets parent node for node v.
     * Complexity: O(1).
     * 
     * @argument v - node to get parent of.
     * @returns parent node name or void if v has no parent.
     */
    parent(v: string): string | void;

    /**
     * Gets list of direct children of node v.
     * Complexity: O(1).
     * 
     * @argument v - node to get children of.
     * @returns children nodes names list.
     */
    children(v: string): string[];

    /**
     * Creates new graph with nodes filtered via filter. Edges incident to rejected node
     * are also removed. In case of compound graph, if parent is rejected by filter,
     * than all its children are rejected too.
     * Average-case complexity: O(|E|+|V|).
     * 
     * @argument filter - filtration function detecting whether the node should stay or not.
     * @returns new graph made from current and nodes filtered.
     */
    filterNodes(filter: (v: string) => boolean): Graph;

    /**
     * Sets the default edge label. This label will be assigned as default label
     * in case if no label was specified while setting an edge.
     * Complexity: O(1).
     * 
     * @argument label - default edge label.
     * @returns the graph, allowing this to be chained with other functions.
     */
    setDefaultEdgeLabel(label: any): Graph;

    /**
     * Sets the default edge label factory function. This function will be invoked
     * each time when setting an edge with no label specified and returned value 
     * will be used as a label for edge.
     * Complexity: O(1).
     * 
     * @argument labelFn - default edge label factory function.
     * @returns the graph, allowing this to be chained with other functions.
     */
    setDefaultEdgeLabel(labelFn: (v: string) => any): Graph;

    /**
     * Establish an edges path over the nodes in nodes list. If some edge is already
     * exists, it will update its label, otherwise it will create an edge between pair
     * of nodes with label provided or default label if no label provided.
     * Complexity: O(|nodes|).
     * 
     * @argument nodes - list of nodes to be connected in series.
     * @argument label - value to set for each edge between pairs of nodes.
     * @returns the graph, allowing this to be chained with other functions.
     */
    setPath(nodes: string[], label?: any): Graph;

    /**
     * Detects whether graph has a node with specified name or not.
     
     * 
     * @argument name - name of the node.
     * @returns true if graph has node with specified name, false - otherwise.
     */
    hasNode(name: string): boolean;

    /**
     * Remove the node with the name from the graph or do nothing if the node is not in
     * the graph. If the node was removed this function also removes any incident
     * edges.
     * Complexity: O(1).
     *
     * @argument name - name of the node.
     * @returns the graph, allowing this to be chained with other functions.
     */
    removeNode(name: string): Graph;

    nodes(): string[];

    /** Returns the label for this node. */
    node(name: string): any;

    /**
     * Creates or updates the label for the edge (v, w) with the optionally supplied
     * name. If label is supplied it is set as the value for the edge. If label is not
     * supplied and the edge was created by this call then the default edge label will
     * be assigned. The name parameter is only useful with multigraphs. Returns the
     * graph, allowing this to be chained with other functions. Takes O(1) time.
     */
    setEdge(v: string, w: string, label?: any, name?: string): Graph;
    setEdge(edge: Edge, label?: any): Graph;

    edges(): Edge[];

    /** Returns the label for this edge. */
    edge(v: string, w: string): any;
    edge(e: Edge): any;

    hasEdge(v: string, w: string, name?: string): boolean;
    hasEdge(edge: Edge): boolean;

    removeEdge(edge: Edge): Graph;
    removeEdge(v: string, w: string, name?: string): Graph;

    /**
     * Return all edges that point to the node v. Optionally filters those edges down to just those
     * coming from node u. Behavior is undefined for undirected graphs - use nodeEdges instead.
     * Returns undefined if node v is not in the graph. Takes O(|E|) time.
     */
    inEdges(v: string, u?: string): Edge[];

    /**
     * Return all edges that are pointed at by node v. Optionally filters those edges down to just
     * those point to w. Behavior is undefined for undirected graphs - use nodeEdges instead.
     * Returns undefined if node v is not in the graph. Takes O(|E|) time.
     */
    outEdges(v: string, w?: string): Edge[];

    /**
     * Returns all edges to or from node v regardless of direction. Optionally filters those edges
     * down to just those between nodes v and w regardless of direction. Returns undefined if node v
     * is not in the graph. Takes O(|E|) time.
     */
    nodeEdges(v: string, w?: string): Edge[];

    /**
     * Return all nodes that are predecessors of the specified node or undefined if node v is not in
     * the graph. Behavior is undefined for undirected graphs - use neighbors instead. Takes O(|V|)
     * time.
     */
    predecessors(node: string): string[];

    /**
     * Return all nodes that are successors of the specified node or undefined if node v is not in
     * the graph. Behavior is undefined for undirected graphs - use neighbors instead. Takes O(|V|)
     * time.
     */
    successors(node: string): string[];

    /**
     * Return all nodes that are predecessors or successors of the specified node or undefined if
     * node v is not in the graph. Takes O(|V|) time.
     */
    neighbors(node: string): string[];

    isDirected(): boolean;
    isMultigraph(): boolean;
    isCompound(): boolean;

    /** Sets the label for the graph to label. */
    setGraph(label: string): Graph;

    /**
     * Returns the currently assigned label for the graph. If no label has been assigned,
     * returns undefined.
     */
    graph(): string;

    /**
     * Returns the number of nodes in the graph.
     */
    nodeCount(): number;

    /**
     * Returns the number of edges in the graph.
     */
    edgeCount(): number;

    /** Returns those nodes in the graph that have no in-edges. Takes O(|V|) time. */
    sources(): string[];

    /** Returns those nodes in the graph that have no out-edges. Takes O(|V|) time. */
    sinks(): string[];
  }

  export namespace json {
    /**
     * Creates a JSONrepresentation of the graph that can be serialized to a string with
     * JSON.stringify. The graph can later be restored using json.read.
     */
    function write(g: Graph): Object;

    /**
     * Takes JSON as input and returns the graph representation. For example, if we have
     * serialized the graph in json-write to a string named str, we can restore it to a
     * graph as follows:
     *
     *   var g2 = graphlib.json.read(JSON.parse(str));
     *   g2.nodes();
     *   // ['a', 'b']
     *   g2.edges()
     *   // [ { v: 'a', w: 'b' } ]
     */
    function read(json: Object): Graph;
  }

  export interface Path {
    distance: number;
    predecessor: string;
  }

  export namespace alg {
    /**
     * Finds all connected components in a graph and returns an array of these components.
     * Each component is itself an array that contains the ids of nodes in the component.
     * This function takes O(|V|) time.
     */
    function components(g: Graph): string[][];

    /**
     * This function is an implementation of Dijkstra's algorithm which finds the shortest
     * path from source to all other nodes in g. This function returns a map of
     * v -> { distance, predecessor }. The distance property holds the sum of the weights
     * from source to v along the shortest path or Number.POSITIVE_INFINITY if there is no path
     * from source. The predecessor property can be used to walk the individual elements of the
     * path from source to v in reverse order.
     *
     * It takes an optional weightFn(e) which returns the weight of the edge e. If no weightFn
     * is supplied then each edge is assumed to have a weight of 1. This function throws an
     * Error if any of the traversed edges have a negative edge weight.
     *
     * It takes an optional edgeFn(v) which returns the ids of all edges incident to the node v
     * for the purposes of shortest path traversal. By default this function uses the g.outEdges.
     *
     * It takes O((|E| + |V|) * log |V|) time.
     */
    function dijkstra(
      graph: Graph,
      source: string,
      weightFn?: (e: Edge) => number,
      edgeFn?: (v: string) => Edge[]
    ): {[node: string]: Path};

    /**
     * This function finds the shortest path from each node to every other reachable node in
     * the graph. It is similar to alg.dijkstra, but instead of returning a single-source
     * array, it returns a mapping of of source -> alg.dijksta(g, source, weightFn, edgeFn).
     *
     * This function takes an optional weightFn(e) which returns the weight of the edge e.
     * If no weightFn is supplied then each edge is assumed to have a weight of 1. This
     * function throws an Error if any of the traversed edges have a negative edge weight.
     *
     * This function takes an optional edgeFn(u) which returns the ids of all edges incident
     * to the node u for the purposes of shortest path traversal. By default this function
     * uses g.outEdges.
     *
     * This function takes O(|V| * (|E| + |V|) * log |V|) time.
     */
    function dijkstraAll(
      graph: Graph,
      weightFn?: (e: Edge) => number,
      edgeFn?: (v: string) => Edge[]
    ): {[source: string]: {[node: string]: Path}};

    /**
     * Given a Graph, g, this function returns all nodes that are part of a cycle. As there
     * may be more than one cycle in a graph this function return an array of these cycles,
     * where each cycle is itself represented by an array of ids for each node involved in
     * that cycle.
     *
     * alg.isAcyclic is more efficient if you only need to determine whether a graph has a
     * cycle or not.
     */
    function findCycles(graph: Graph): string[][];

    /**
     * This function is an implementation of the Floyd-Warshall algorithm, which finds the
     * shortest path from each node to every other reachable node in the graph. It is similar
     * to alg.dijkstraAll, but it handles negative edge weights and is more efficient for some types
     * of graphs. This function returns a map of source -> { target -> { distance, predecessor }.
     * The distance property holds the sum of the weights from source to target along the shortest
     * path of Number.POSITIVE_INFINITY if there is no path from source. The predecessor property
     * can be used to walk the individual elements of the path from source to target in reverse
     * order.
     *
     * This function takes an optional weightFn(e) which returns the weight of the edge e. If no
     * weightFunc is supplied then each edge is assumed to have a weight of 1.
     *
     * This function takes an optional edgeFn(v) which returns the ids of all edges incident to the
     * node v for the purposes of shortest path traversal. By default this function uses the
     * outEdges function on the supplied graph.
     *
     * This algorithm takes O(|V|^3) time.
     */
    function floydWarshall(
      graph: Graph,
      weightFn?: (e: Edge) => number,
      edgeFn?: (v: string) => Edge[]
    ): {[source: string]: {[node: string]: Path}};

    /**
     * Given a Graph, g, this function returns true if the graph has no cycles and returns false if it
     * does. This algorithm returns as soon as it detects the first cycle. You can use alg.findCycles
     * to get the actual list of cycles in the graph.
     */
    function isAcyclic(graph: Graph): boolean;

    /**
     * Prim's algorithm takes a connected undirected graph and generates a minimum spanning tree. This
     * function returns the minimum spanning tree as an undirected graph. This algorithm is derived
     * from the description in "Introduction to Algorithms", Third Edition, Cormen, et al., Pg 634.
     *
     * This function takes a weightFn(e) which returns the weight of the edge e. It throws an Error if
     * the graph is not connected.
     *
     * This function takes O(|E| log |V|) time.
     */
    function prim(graph: Graph, weightFn: (e: Edge) => number): Graph;

    /**
     * This function is an implementation of Tarjan's algorithm which finds all strongly connected
     * components in the directed graph g. Each strongly connected component is composed of nodes that
     * can reach all other nodes in the component via directed edges. A strongly connected component
     * can consist of a single node if that node cannot both reach and be reached by any other
     * specific node in the graph. Components of more than one node are guaranteed to have at least
     * one cycle.
     *
     * This function returns an array of components. Each component is itself an array that contains
     * the ids of all nodes in the component.
     */
    function tarjan(graph: Graph): string[][];

    /**
     * An implementation of topological sorting.
     *
     * Given a Graph g this function returns an array of nodes such that for each edge u -> v, u
     * appears before v in the array. If the graph has a cycle it is impossible to generate such a
     * list and CycleException is thrown.
     *
     * Takes O(|V| + |E|) time.
     */
    function topsort(graph: Graph): string[];
  }
}
