// Type definitions for D3JS d3-sankey module 0.7
// Project: https://github.com/d3/d3-sankey/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 0.7

import { Link } from 'd3-shape';

/**
 * A helper interface as an extension reference for user-provided properties of
 * nodes and links in the graph, which are not required or calculated by
 * the Sankey layout Generator
 */
export interface SankeyExtraProperties { [key: string]: any; }

/**
 * Helper interface to define the properties of Sankey Nodes. Calculated properties may only be defined,
 * once the layout(...) method of the Sankey layout generator has been invoked.
 *
 * The first generic N refers to user-defined properties contained in the node data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyNodeMinimal interface.
 *
 * The second generic L refers to user-defined properties contained in the link data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyLinkMinimal interface.
 */
export interface SankeyNodeMinimal<N extends SankeyExtraProperties, L extends SankeyExtraProperties> {
    /**
     * Array of outgoing links which have this node as their source.
     * This property is calculated internally by the Sankey layout generator.
     */
    sourceLinks?: Array<SankeyLink<N, L>>;
    /**
     * Array of incoming links which have this node as their target.
     * This property is calculated internally by the Sankey layout generator.
     */
    targetLinks?: Array<SankeyLink<N, L>>;
    /**
     * Node's value calculated by Sankey layout Generator;
     * the sum of link.value for the node’s incoming links.
     */
    value?: number;
    /**
     * Node’s zero-based index within the array of nodes calculated by Sankey layout generator.
     */
    index?: number;
    /**
     * Node’s zero-based graph depth, derived from the graph topology calculated by Sankey layout generator.
     */
    depth?: number;
    /**
     * Node’s zero-based graph height, derived from the graph topology calculated by Sankey layout generator.
     */
    height?: number;
    /**
     * Node's minimum horizontal position (derived from the node.depth) calculated by Sankey layout generator.
     */
    x0?: number;
    /**
     * Node’s maximum horizontal position (node.x0 + sankey.nodeWidth) calculated by Sankey layout generator.
     */
    x1?: number;
    /**
     * Node's minimum vertical position calculated by Sankey layout generator.
     */
    y0?: number;
    /**
     * Node's maximum vertical position (node.y1 - node.y0 is proportional to node.value) calculated by Sankey layout generator.
     */
    y1?: number;
}

/**
 * Sankey Node type including both user-defined node data elements as well as those
 * calculated once the layout(...) method of the Sankey layout generators has been invoked.
 *
 * The first generic N refers to user-defined properties contained in the node data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyNodeMinimal interface.
 *
 * The second generic L refers to user-defined properties contained in the link data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyLinkMinimal interface.
 */
export type SankeyNode<N extends SankeyExtraProperties, L extends SankeyExtraProperties> = N & SankeyNodeMinimal<N, L>;

/**
 * Helper interface to define the properties of Sankey Links. Calculated properties may only be defined,
 * once the layout(...) method of the Sankey layout generator has been invoked.
 *
 * The first generic N refers to user-defined properties contained in the node data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyNodeMinimal interface.
 *
 * The second generic L refers to user-defined properties contained in the link data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyLinkMinimal interface.
 */
export interface SankeyLinkMinimal<N extends SankeyExtraProperties, L extends SankeyExtraProperties> {
    /**
     * Link's source node. For convenience, when initializing a Sankey layout using the default node id accessor,
     * source may be the zero-based index of the corresponding node in the nodes array
     * returned by the nodes accessor of the Sankey layout generator rather than object references. Alternatively,
     * the Sankey layout can be configured with a custom node ID accessor to resolve the source node of the link upon initialization.
     *
     * Once the Sankey generator is invoked to return the Sankey graph object,
     * the numeric index will be replaced with the corresponding source node object.
     */
    source: number | string | SankeyNode<N, L>;
    /**
     * Link's target node. For convenience, when initializing a Sankey layout using the default node id accessor,
     * target may be the zero-based index of the corresponding node in the nodes array
     * returned by the nodes accessor of the Sankey layout generator rather than object references. Alternatively,
     * the Sankey layout can be configured with a custom node ID accessor to resolve the target node of the link upon initialization.
     *
     * Once the Sankey generator is invoked to return the Sankey graph object,
     * the numeric index will be replaced with the corresponding target node object.
     */
    target: number | string | SankeyNode<N, L>;
    /**
     * Link's numeric value
     */
    value: number;
    /**
     * Link's vertical starting position (at source node) calculated by Sankey layout generator.
     */
    y0?: number;
    /**
     * Link's vertical end position (at target node) calculated by Sankey layout generator.
     */
    y1?: number;
    /**
     * Link's width (proportional to its value) calculated by Sankey layout generator.
     */
    width?: number;
    /**
     * Link's zero-based index within the array of links calculated by Sankey layout generator.
     */
    index?: number;
}

/**
 * Sankey Link type including both user-defined link data elements, those required by the Sankey layout generator,
 *  as well as those calculated once the layout(...) method of the layout generator has been invoked.
 *
 * The first generic N refers to user-defined properties contained in the node data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyNodeMinimal interface.
 *
 * The second generic L refers to user-defined properties contained in the link data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyLinkMinimal interface.
 */
export type SankeyLink<N extends SankeyExtraProperties, L extends SankeyExtraProperties> = L & SankeyLinkMinimal<N, L>;

/**
 * A Sankey Graph Object which contains the computed layout information for nodes and links.
 *
 * The first generic N refers to user-defined properties contained in the node data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyNodeMinimal interface.
 *
 * The second generic L refers to user-defined properties contained in the link data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyLinkMinimal interface.
 */
export interface SankeyGraph<N extends SankeyExtraProperties, L extends SankeyExtraProperties> {
    /**
     * Array of Sankey diagram nodes
     */
    nodes: Array<SankeyNode<N, L>>;
    /**
     * Array of Sankey diagram links
     */
    links: Array<SankeyLink<N, L>>;
}

/**
 * A Sankey layout generator.
 *
 * The first generic Data refers to the data type of the first argument passed in when invoking the
 * Sankey layout generator and internally the configured nodes/links accessor functions.
 *
 * The second generic N refers to user-defined properties contained in the node data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyNodeMinimal interface.
 *
 * The third generic L refers to user-defined properties contained in the link data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyLinkMinimal interface.
 */
export interface SankeyLayout<Data, N extends SankeyExtraProperties, L extends SankeyExtraProperties> {
    /**
     * Computes the node and link positions for the given arguments, returning a graph representing the Sankey layout.
     *
     * @param data Data object being passed as the first argument to the nodes and links accessor functions. Additional arguments will also be passed
     * to the accessor functions.
     */
    (data: Data, ...args: any[]): SankeyGraph<N, L>;

    /**
     * Recomputes the specified graph’s links’ positions, updating the following properties of each link:
     *
     * - link.sy: the link’s vertical starting position (at source node)
     * - link.ty: the link’s vertical end position (at target node)
     *
     * This method is intended to be called after computing the initial Sankey layout, for example when the diagram is repositioned interactively.
     *
     * @param graph
     */
    update(graph: SankeyGraph<N, L>): SankeyGraph<N, L>;

    /**
     * Return the current nodes accessor function, which defaults to a function returning the "nodes" property of the
     * first argument it is invoked with.
     */
    nodes(): (data: Data, ...args: any[]) => Array<SankeyNode<N, L>>;
    /**
     * Set the Sankey generator's nodes accessor to a function returning the specified array of objects and returns this Sankey layout generator.
     *
     * @param nodes Array of nodes.
     */
    nodes(nodes: Array<SankeyNode<N, L>>): this;
    /**
     * Set the Sankey generator's nodes accessor to the specified function and returns this Sankey layout generator.
     *
     * @param nodes A nodes accessor function. The function is invoked when the Sankey layout is generated, being passed any arguments passed to the Sankey generator.
     * This function must return an array of nodes.
     */
    nodes(nodes: (data: Data, ...args: any[]) => Array<SankeyNode<N, L>>): this;

    /**
     * Return the current links accessor function, which defaults to a function returning the "links" property of the
     * first argument it is invoked with.
     */
    links(): (data: Data, ...args: any[]) => Array<SankeyLink<N, L>>;
    /**
     * Set the Sankey generator's links accessor to a function returning the specified array of objects and returns this Sankey layout generator.
     *
     * @param links Array of links.
     */
    links(links: Array<SankeyLink<N, L>>): this;
    /**
     * Set the Sankey generator's links accessor to the specified function and returns this Sankey layout generator.
     *
     * @param links A links accessor function. The function is invoked when the Sankey layout is generated, being passed any arguments passed to the Sankey generator.
     * This function must return an array of links.
     */
    links(links: (data: Data, ...args: any[]) => Array<SankeyLink<N, L>>): this;

    /**
     * Return the current node id accessor.
     * The default accessor is a function being passed in a Sankey layout node and returning its numeric node.index.
     */
    nodeId(): (node: SankeyNode<N, L>) => string | number;
    /**
     * Set the node id accessor to the specified function and return this Sankey layout generator.
     *
     * The default accessor is a function being passed in a Sankey layout node and returning its numeric node.index.
     * The default id accessor allows each link’s source and target to be specified as a zero-based index into the nodes array.
     *
     * @param nodeId A node id accessor function being passed a node in the Sankey graph and returning its id.
     */
    nodeId(nodeId: (node: SankeyNode<N, L>) => string | number): this;

    /**
     * Return the current node alignment method, which defaults to d3.sankeyLeft.
     */
    nodeAlign(): (node: SankeyNode<N, L>, n: number) => number;
    /**
     * Set the node alignment method the specified function and return this Sankey layout generator.
     *
     * @param nodeAlign A node alignment function which is evaluated for each input node in order,
     * being passed the current node and the total depth n of the graph (one plus the maximum node.depth),
     * and must return an integer between 0 and n - 1 that indicates the desired horizontal position of the node in the generated Sankey diagram.
     */
    nodeAlign(nodeAlign: (node: SankeyNode<N, L>, n: number) => number): this;

    /**
     * Return the current node width, which defaults to 24.
     */
    nodeWidth(): number;
    /**
     * Set the node width to the specified number and return this Sankey layout generator.
     *
     * @param width Width of node in pixels, which defaults to 24.
     */
    nodeWidth(width: number): this;

    /**
     * Return the current node padding, which defaults to 8.
     *
     * Node padding refers to the vertical space between nodes which occupy the same horizontal space.
     */
    nodePadding(): number;
    /**
     * Set the vertical separation between nodes at each column to the specified number and return this Sankey layout generator.
     *
     * @param padding Node padding, i.e. vertical separation between nodes at each column, in pixels, which defaults to 8.
     */
    nodePadding(padding: number): this;

    /**
     * Return the current extent which defaults to [[0, 0], [1, 1]].
     */
    extent(): [[number, number], [number, number]];
    /**
     * Set the extent of the Sankey layout to the specified bounds and returns this Sankey layout generator.
     *
     * @param extent Extent bounds for the layout. The extent bounds are specified as an array [[x0, y0], [x1, y1]],
     * where x0 is the left side of the extent, y0 is the top, x1 is the right and y1 is the bottom. The default is [[0, 0], [1, 1]].
     */
    extent(extent: [[number, number], [number, number]]): this;

    /**
     * Return the current layout size in pixels. The size is a two element array of [width, height] which defaults to [1, 1].
     */
    size(): [number, number];
    /**
     * Set the size of the layout and return this Sankey layout generator.
     * This convenience method is equivalent to using extent([[0, 0], [width, height]]).
     *
     * @param size A two element array of [width, height] in pixels which defaults to [1, 1].
     */
    size(size: [number, number]): this;

    /**
     * Return the current number of relaxation iterations, which defaults to 32.
     */
    iterations(): number;
    /**
     * Set the number of relaxation iterations when generating the layout and return this Sankey layout generator.
     *
     * @param iterations Number of relaxation iterations, which defaluts to 32.
     */
    iterations(iterations: number): this;
}

/**
 * Get a Sankey layout generator.
 *
 * Invoking sankey() without generics, means the node type and link type assume no user-defined attributes, i.e.
 * only the attributes internally used by the Sankey layout generator.
 *
 * Default nodes/links accessors are assumed.
 */
export function sankey(): SankeyLayout<SankeyGraph<{}, {}>, {}, {}>;
/**
 * Get a Sankey layout generator.
 *
 * Default nodes/links accessors are assumed.
 *
 * The first generic N refers to user-defined properties contained in the node data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyNodeMinimal interface.
 *
 * The second generic L refers to user-defined properties contained in the link data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyLinkMinimal interface.
 */
export function sankey<N extends SankeyExtraProperties, L extends SankeyExtraProperties>(): SankeyLayout<SankeyGraph<N, L>, N, L>;
/**
 * Get a Sankey layout generator.
 *
 * The nodes/links accessors need to be configured to work with the data type of the first argument passed
 * in when invoking the Sankey lyout generator.
 *
 * The first generic corresponds to the data type of the first argument passed in when invoking the Sankey layout generator,
 * and its nodes/links accessors.
 *
 * The second generic N refers to user-defined properties contained in the node data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyNodeMinimal interface.
 *
 * The third generic L refers to user-defined properties contained in the link data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyLinkMinimal interface.
 */
export function sankey<Data, N extends SankeyExtraProperties, L extends SankeyExtraProperties>(): SankeyLayout<Data, N, L>;

/**
 * Compute the horizontal node position of a node in a Sankey layout with left alignment.
 * Returns (node.depth) to indicate the desired horizontal position of the node in the generated Sankey diagram.
 *
 * @param node Sankey node for which to calculate the horizontal node position.
 * @param n Total depth n of the graph  (one plus the maximum node.depth)
 */
export function sankeyLeft(node: SankeyNode<{}, {}>, n: number): number;

/**
 * Compute the horizontal node position of a node in a Sankey layout with right alignment.
 * Returns (n - 1 - node.height) to indicate the desired horizontal position of the node in the generated Sankey diagram.
 *
 * @param node Sankey node for which to calculate the horizontal node position.
 * @param n Total depth n of the graph  (one plus the maximum node.depth)
 */
export function sankeyRight(node: SankeyNode<{}, {}>, n: number): number;

/**
 * Compute the horizontal node position of a node in a Sankey layout with center alignment.
 * Like d3.sankeyLeft, except that nodes without any incoming links are moved as right as possible.
 * Returns an integer between 0 and n - 1 that indicates the desired horizontal position of the node in the generated Sankey diagram.
 *
 * @param node Sankey node for which to calculate the horizontal node position.
 * @param n Total depth n of the graph  (one plus the maximum node.depth)
 */
export function sankeyCenter(node: SankeyNode<{}, {}>, n: number): number;

/**
 * Compute the horizontal node position of a node in a Sankey layout with justified alignment.
 * Like d3.sankeyLeft, except that nodes without any outgoing links are moved to the far right.
 * Returns an integer between 0 and n - 1 that indicates the desired horizontal position of the node in the generated Sankey diagram.
 *
 * @param node Sankey node for which to calculate the horizontal node position.
 * @param n Total depth n of the graph  (one plus the maximum node.depth)
 */
export function sankeyJustify(node: SankeyNode<{}, {}>, n: number): number;

/**
 * Get a horizontal link shape suitable for a Sankey diagram.
 * Source and target accessors are pre-configured and work with the
 * default x- and y- accessors of the link shape generator.
 */
export function sankeyLinkHorizontal(): Link<any, SankeyLink<{}, {}>, [number, number]>;
/**
 * Get a horizontal link shape suitable for a Sankey diagram.
 * Source and target accessors are pre-configured and work with the
 * default x- and y- accessors of the link shape generator.
 *
 * The first generic N refers to user-defined properties contained in the node data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyNodeMinimal interface.
 *
 * The second generic L refers to user-defined properties contained in the link data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyLinkMinimal interface.
 */
export function sankeyLinkHorizontal<N extends SankeyExtraProperties, L extends SankeyExtraProperties>(): Link<any, SankeyLink<N, L>, [number, number]>;
