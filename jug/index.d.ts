// Type definitions for jug
// Project: https://github.com/kaiquewdev/Graph
// Definitions by: yevt <https://github.com/yevt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/**
 * Internal structure of a vertex
 */
interface VertexStructure {
    level: number;
    edge: Array<Vertex>,
    data: VertexData,
    parent: Vertex
}

/**
 * User data of a vertex.
 */
type VertexData = Object;

/**
 * Graph constructor function.
 */
interface GraphConstructor {
    new (): Graph;
}

/**
 * Creates root node of a graph.
 */
interface Graph {
    vertex: VertexConstructor;
    init(data?: VertexData): Vertex;
}

/**
 * Vertex constructor function.
 */
interface VertexConstructor {
    new (obj?: VertexData): Vertex;
}

/**
 * Represents one node of a graph.
 */
interface Vertex {

    /**
     * Initial vertex data.
     */
    internal: VertexStructure;

    /**
     * Verify the level.
     */
    level(): number;

    /**
     * Get edge count.
     */
    edge(): number;

    /**
     * Access node.
     * @param index - edge index.
     */
    edge(index: number): Vertex;

    /**
     * Seed node.
     * @param [data] - created vertex UserData.
     */
    seed(data?: VertexData): Vertex;

    /**
     * Verify if the current node is the root.
     */
    isRoot(): boolean;

    /**
     * Set node data.
     * @param obj - data to be set.
     */
    data(obj: VertexData): Vertex;

    /**
     * Get node data.
     */
    data(): VertexData;

    /**
     * Get distance between nodes.
     * @param from
     * @param to
     */
    proximity(from: string, to: string): Array<number>;

    /**
     * Find a node.
     * @param {string} type - object type.
     * @param {Object} query - _.where query object.
     */
    find(type: string | void, query: Object): Array<VertexData>;

    /**
     * Get siblings of specified edge.
     * @param {number} index - edge index.
     */
    getSiblingsOf(index: number): Array<VertexData>;

    /**
     * Getting childs of an specified edge.
     * @param egde - target vertex;
     */
    getChildsOf(egde: number): Array<VertexData>;

    /**
     * Getting parents of an specified level and edge.
     * @param {number} level - max level.
     * @param {number} edge - edge index.
     */
    getParentsFrom(level: number, edge: number): Array<VertexData>;

    /**
     * Getting the length of childs of an specified edge.
     * @param {number} edge - edge index.
     */
    getScopeOf(edge: number): number;
}

declare var jug: Graph;

export = jug;
