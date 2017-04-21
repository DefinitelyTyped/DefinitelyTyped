// Type definitions for D3JS d3-sankey module 0.4
// Project: https://github.com/d3/d3-sankey/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 0.4.2

export type SankeyExtraProperties = {[key: string]: any};

export interface SankeyNodeMinimal<N extends SankeyExtraProperties, L extends SankeyExtraProperties> {
    /**
     * Array of links which have this node as source.
     * This property is calculated internally by the Sankey layout generator.
     */
    sourceLinks?: SankeyLink<N, L>[];
    /**
     * Array of links which have this node as target.
     * This property is calculated internally by the Sankey layout generator.
     */
    targetLinks?: SankeyLink<N, L>[];
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

export type SankeyNode<N extends SankeyExtraProperties, L extends SankeyExtraProperties> = N & SankeyNodeMinimal<N, L>;

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
     * Link width calculated by Sankey layout generator
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

export type SankeyLink<N extends SankeyExtraProperties, L extends SankeyExtraProperties> = L & SankeyLinkMinimal<N, L>;

export interface SankeyLinkPathGenerator<N extends SankeyExtraProperties, L extends SankeyExtraProperties> {
    /**
     * Return svg path string for a given link.
     *
     * @param link A Sankey diagram link, for which the layout has already been calculated.
     */
    (link: SankeyLink<N, L>): string;
    /**
     * Returns the current curvature used to calculate svg paths for links.
     * The default curvature is 0.5.
     */
    curvature():number;
    /**
     * Set the curvature used to calculate svg paths for links and return the updated link path generator.
     *
     * @param curvature Curvature to be used when calculating svg paths for links. The default curvature is 0.5.
     */
    curvature(curvature: number): this;
}


export interface SankeyLayout<N extends SankeyExtraProperties, L extends SankeyExtraProperties> {
    /**
     * Return the current width of a node in pixels, which defaults to 24.
     */
    nodeWidth(): number;
    /**
     * Set the node width to the specified number and return this Sankey layout generator.
     *
     * @param width Width of node in pixels, which defaults to 24.
     */
    nodeWidth(width: number): this;

    /**
     * Return the current node padding in pixels, which defaults to 8.
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
     * Return the current array of nodes.
     */
    nodes(): SankeyNode<N,L>[];
    nodes(nodes: SankeyNode<N,L>[]): this;

    links(): SankeyLink<N,L>[];
    links(links: SankeyLink<N,L>[]): this;

    layout(iterations: number):this;

    /**
     * Recalculate the depth of links and return this Sankey layout generator.
     * Primarily used when a node is moved vertically.
     */
    relayout():this;

    /**
     * Get the current size of the layout in pixels. The size is a two element array of [width, height] which defaults to [1, 1].
     */
    size(): [number, number];
    /**
     * Set the size of the layout in pixels and return this Sankey layout generator.
     *
     * @param size A two element array of [width, height] in pixels which defaults to [1, 1].
     */
    size(size: [number, number]):this;

    /**
     * Obtain an svg path generator for the links of the calculated Sankey diagram layout.
     * By default the path  generator uses a curvature of 0.5.
     */
    link():SankeyLinkPathGenerator<N, L>;

}

export function sankey(): SankeyLayout<{}, {}>;
export function sankey<N extends SankeyExtraProperties, L extends SankeyExtraProperties>(): SankeyLayout<N, L>;
