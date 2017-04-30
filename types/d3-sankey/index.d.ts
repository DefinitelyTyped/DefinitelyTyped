// Type definitions for D3JS d3-sankey module 0.4
// Project: https://github.com/d3/d3-sankey/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 0.4.2

/**
 * A helper interface as an extension reference for user-provided properties of
 * nodes and links in the graph, which are not required or calculated by
 * the Sankey Layout Generator
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
     * Array of links which have this node as their source.
     * This property is calculated internally by the Sankey layout generator.
     */
    sourceLinks?: Array<SankeyLink<N, L>>;
    /**
     * Array of links which have this node as their target.
     * This property is calculated internally by the Sankey layout generator.
     */
    targetLinks?: Array<SankeyLink<N, L>>;
    /**
     * Node value calculated by Sankey Layout Generator based on values of incoming and outgoing links
     */
    value?: number;
    /**
     * Node horizontal position calculated by Sankey layout generator
     */
    x?: number;
    /**
     * Node width calculated by Sankey layout generator
     */
    dx?: number;
    /**
     * Node vertical position (depth) calculated by Sankey layout generator
     */
    y?: number;
    /**
     * Node height (vertical extent based on node value) calculated by Sankey layout generator
     */
    dy?: number;
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
     * Source node of the link. For convenience, when initializing a Sankey layout, source may be the index of the source node in the nodes array
     * passed into the Sankey layout generator. Once the layout(...) method is invoked, the numeric index will be replaced with the corresponding
     * source node object.
     */
    source: number | SankeyNode<N, L>;
    /**
     * Target node of the link. For convenience, when initializing a Sankey layout, target may be the index of the target node in the nodes array
     * passed into the Sankey layout generator. Once the layout(...) method is invoked, the numeric index will be replaced with the corresponding
     * target node object.
     */
    target: number | SankeyNode<N, L>;
    /**
     * Value of the link
     */
    value: number;
    /**
     * Link breadth calculated by Sankey layout generator based on the link value
     */
    dy?: number;
    /**
     * Vertical starting position of the link (at source node) calculated by Sankey layout generator
     */
    sy?: number;
    /**
     * Vertical end position of the link (at target node) calculated by Sankey layout generator
     */
    ty?: number;
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
 * An svg path generator factory for the link paths in a calculated Sankey Layout.
 */
export interface SankeyLinkPathGenerator<N extends SankeyExtraProperties, L extends SankeyExtraProperties> {
    /**
     * Return svg path string for a given link.
     *
     * IMPORTANT: Only invoke for link data with Sankey Layout information previously calculated.
     *
     * @param link A Sankey diagram link, for which the layout has already been calculated.
     */
    (link: SankeyLink<N, L>): string;
    /**
     * Returns the current curvature used to calculate svg paths for links.
     * The default curvature is 0.5.
     */
    curvature(): number;
    /**
     * Set the curvature used to calculate svg paths for links and return the updated link path generator.
     *
     * @param curvature Curvature to be used when calculating svg paths for links. The default curvature is 0.5.
     */
    curvature(curvature: number): this;
}

/**
 * A Sankey layout generator.
 *
 * The first generic N refers to user-defined properties contained in the node data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyNodeMinimal interface.
 *
 * The second generic L refers to user-defined properties contained in the link data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyLinkMinimal interface.
 */
export interface SankeyLayout<N extends SankeyExtraProperties, L extends SankeyExtraProperties> {
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
     * Set the node padding to the specified number and return this Sankey layout generator.
     *
     * Node padding refers to the vertical space between nodes which occupy the same horizontal space.
     *
     * @param padding Node padding in pixels, which defaults to 8.
     */
    nodePadding(padding: number): this;

    /**
     * Return the current array of nodes, which defaults to [].
     */
    nodes(): Array<SankeyNode<N, L>>;
    /**
     * Set the sankey generator's nodes to the specified array of objects and returns this sankey layout generator.
     *
     * @param nodes Array of nodes.
     */
    nodes(nodes: Array<SankeyNode<N, L>>): this;

    /**
     * Return the current array of links, which defaults to [].
     */
    links(): Array<SankeyLink<N, L>>;
    /**
     * Set the sankey generator's links to the specified array of objects and returns this sankey layout generator.
     *
     * @param links Array of links.
     */
    links(links: Array<SankeyLink<N, L>>): this;

    /**
     * Runs the sankey layout algorithm updating the nodes and links with their respective layout information and returns this sankey generator.
     *
     * @param iterations Number of passes to be used in the iterative relaxation algorithm for node placement.
     */
    layout(iterations: number): this;

    /**
     * Recalculate the depth of links and return this Sankey layout generator.
     * This methods is primarily used when a node is moved vertically, e.g. using d3-drag.
     */
    relayout(): this;

    /**
     * Return the current layout size in pixels. The size is a two element array of [width, height] which defaults to [1, 1].
     */
    size(): [number, number];
    /**
     * Set the size of the layout and return this Sankey layout generator.
     *
     * @param size A two element array of [width, height] in pixels which defaults to [1, 1].
     */
    size(size: [number, number]): this;

    /**
     * Return a Sankey link path generator for the links based on the calculated Sankey diagram layout.
     * The link path generator can be invoked as a function being passed as its argument a link object
     * with calculated layout information. It returns the computed <svg> path string for the link.
     * By default the link path generator uses a curvature of 0.5.
     */
    link(): SankeyLinkPathGenerator<N, L>;
}

/**
 * Get a Sankey layout generator.
 *
 * Invoking sankey() without generics, means the node type and link type assume no user-defined attributes, i.e.
 * only the attributes internally used by the Sankey layout generator.
 */
export function sankey(): SankeyLayout<{}, {}>;
/**
 * Get a Sankey layout generator.
 *
 * The first generic N refers to user-defined properties contained in the node data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyNodeMinimal interface.
 *
 * The second generic L refers to user-defined properties contained in the link data passed into
 * Sankey layout generator. These properties are IN EXCESS to the properties explicitly identified in the
 * SankeyLinkMinimal interface.
 */
export function sankey<N extends SankeyExtraProperties, L extends SankeyExtraProperties>(): SankeyLayout<N, L>;
