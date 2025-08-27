import { HierarchyNode, StratifyOperator } from "d3-hierarchy";
import { BaseType, Selection, ValueFn } from "d3-selection";
import { DefaultLinkObject, Link } from "d3-shape";
import { ZoomBehavior, ZoomTransform } from "d3-zoom";

export type NodeId = string | number;

export interface Connection {
    from: NodeId;
    to: NodeId;
    label: string;
}

export interface Point {
    x: number;
    y: number;
}

/**
 * The configuration attributes of an organization charts.
 * All of these properties are available as get / set pairs
 * of the organization chart object, per D3 standard.
 */
export interface StatePublic<Datum> {
    /**
     * Id for event handling
     */
    id: string;
    /**
     * Whether chart is drawn for the first time
     */
    firstDraw: boolean;
    /**
     * Configure svg width. default is: 800
     */
    svgWidth: number;
    /**
     * Configure svg height. default is: window.innerHeight - 100
     */
    svgHeight: number;
    /**
     * Configure zoom scale extent , if you don't want any kind of zooming, set it to [1,1]
     */
    scaleExtent: [number, number];
    /**
     * Set parent container, either CSS style selector or DOM element, for example "#my-chart"
     */
    container: string;
    /**
     * Set default font,
     * for example "Helvetica"
     */
    defaultFont: string;
    ctx: CanvasRenderingContext2D;
    /**
     * Set data, it must be an array of objects, where hierarchy is clearly defined via id and parent ID (property names are configurable)
     */
    data: Datum[] | null;
    /**
     * Configure duration of transitions
     */
    duration: number;
    /**
     * Configure exported PNG and SVG image name
     */
    imageName: string;
    /**
     * Configure if active node should be centered when expanded and collapsed
     */
    setActiveNodeCentered: boolean;
    initialExpandLevel: number;
    allowedNodesCount: {};
    /**
     * Configure if compact mode is enabled , when enabled, nodes are shown in compact positions, instead of horizontal spread
     */
    compact: boolean;
    /**
     * Configure how much root node is offset from top
     */
    rootMargin: number;
    /**
     * CSS color, for example "#2C3E50"
     */
    nodeDefaultBackground: string;
    /**
     * Sets connection data, array of objects, SAMPLE:  [{from:"145",to:"201",label:"Conflicts of interest"}]
     */
    connections: Connection[];
    /**
     * Panning and zooming values
     */
    lastTransform: ZoomTransform;
    /**
     * Configure accessor for node id, default is either odeId or id
     */
    nodeId: (node: HierarchyNode<Datum> | Datum) => NodeId | undefined;
    /**
     * Configure accessor for parent node id, default is either parentNodeId or parentId
     */
    parentNodeId: (node: HierarchyNode<Datum> | Datum) => NodeId | undefined;
    /** CSS color, for example "#2C3E50" */
    backgroundColor: string;
    zoomBehavior: ZoomBehavior<Element, Datum>;
    generateRoot: StratifyOperator<Datum>;
    svg: Selection<SVGSVGElement, string, null, undefined>;
    /** Defining arrows with markers for connections */
    defs: (state: State<Datum>, visibleConnections: Connection[]) => string;
    /**
     * You can update connections with custom styling using this function.
     * example:
     * ```javascript
     * d3.select(this)
     *    .attr("stroke", d => '#E27396')
     *    .attr('stroke-linecap', 'round')
     *    .attr("stroke-width", d => '5')
     *    .attr('pointer-events', 'none')
     *    .attr("marker-start", d => `url(#${d.from + "_" + d.to})`)
     *    .attr("marker-end", d => `url(#arrow-${d.from + "_" + d.to})`)
     * ```
     */
    connectionsUpdate: ValueFn<BaseType, Datum, void>;
    /**
     * You can access and modify actual link DOM element in runtime using this method.
     * @param node
     * @param index
     * @param nodes
     */
    linkUpdate: (node: HierarchyNode<Datum>, index: number, nodes: Array<HierarchyNode<Datum>>) => void;
    /**
     * You can access and modify actual node DOM element in runtime using this method.
     * @param node
     * @param index
     * @param nodes
     */
    nodeUpdate: (node: HierarchyNode<Datum>, index: number, nodes: Array<HierarchyNode<Datum>>) => void;
    /**
     * Custom handling of node update
     */
    nodeEnter: (node: HierarchyNode<Datum>) => void;
    /**
     * Custom handling of exit node
     * @param node
     */
    nodeExit: (node: HierarchyNode<Datum>) => void;
    /**
     * Configure each node width, use with caution, it is better to have the same value set for all nodes
     * @param node
     */
    nodeWidth: (node: HierarchyNode<Datum>) => number;
    /**
     * Configure each node height, use with caution, it is better to have the same value set for all nodes
     * @param node
     */
    nodeHeight: (node: HierarchyNode<Datum>) => number;
    /**
     * Configure margin between two siblings, use with caution, it is better to have the same value set for all nodes
     * @param node
     */
    siblingsMargin: (node: HierarchyNode<Datum>) => number;
    /**
     * Configure margin between parent and children, use with caution, it is better to have the same value set for all nodes
     * @param node
     */
    childrenMargin: (node: HierarchyNode<Datum>) => number;
    /**
     * Configure margin between two nodes, use with caution, it is better to have the same value set for all nodes
     * @param node1
     * @param node2
     */
    neighbourMargin: (node1: HierarchyNode<Datum>, node2: HierarchyNode<Datum>) => number;
    /**
     * Configure margin between two nodes in compact mode, use with caution, it is better to have the same value set for all nodes
     * @param node
     */
    compactMarginPair: (node: HierarchyNode<Datum>) => number;
    /**
     * Configure margin between two nodes in compact mode, use with caution, it is better to have the same value set for all nodes
     * @param node
     */
    compactMarginBetween: (node: HierarchyNode<Datum>) => number;
    /**
     * Configure expand & collapse button width
     * @param node
     */
    nodeButtonWidth: (node: HierarchyNode<Datum>) => number;
    /**
     * Configure expand & collapse button height
     * @param node
     */
    nodeButtonHeight: (node: HierarchyNode<Datum>) => number;
    /**
     * Configure expand & collapse button x position
     * @param node
     */
    nodeButtonX: (node: HierarchyNode<Datum>) => number;
    /**
     * Configure expand & collapse button y position
     * @param node
     */
    nodeButtonY: (node: HierarchyNode<Datum>) => number;
    /**
     * When correcting links which is not working for safari
     */
    linkYOffset: number;
    /**
     * Configure how many nodes to show when making new nodes appear
     * @param node
     */
    pagingStep: (node: HierarchyNode<Datum>) => number;
    /**
     * Configure minimum number of visible nodes , after which paging button appears
     * @param node
     */
    minPagingVisibleNodes: (node: HierarchyNode<Datum>) => number;
    createZoom: (node: HierarchyNode<Datum>) => ZoomBehavior<any, Datum>;
    /**
     * Callback for zoom & panning start
     * @param event
     */
    onZoomStart: (event: any) => void;
    /**
     * Callback for zoom & panning
     * @param event
     */
    onZoom: (event: any) => void;
    /**
     * Callback for zoom & panning end
     * @param event
     */
    onZoomEnd: (event: any) => void;

    /** Callback for node click */
    onNodeClick: (node: HierarchyNode<Datum>) => void;
    /**
     * Callback for node expand or collapse
     * @param node
     */
    onExpandOrCollapse: (node: HierarchyNode<Datum>) => void;
    /**
     * Link generator for connections
     */
    linkGroupArc: Link<any, DefaultLinkObject, [number, number]>;
    /**
     * Node HTML content generation , remember that you can access some helper methods:
     *
     * node=> node.data - to access node's original data
     * node=> node.leaves() - to access node's leaves
     * node=> node.descendants() - to access node's descendants
     * node=> node.children - to access node's children
     * node=> node.parent - to access node's parent
     * node=> node.depth - to access node's depth
     * node=> node.hierarchyHeight - to access node's hierarchy height ( Height, which d3 assigns to hierarchy nodes)
     * node=> node.height - to access node's height
     * node=> node.width - to access node's width
     *
     * You can also access additional properties to style your node:
     *
     * d=>d.data._centeredWithDescendants - when node is centered with descendants
     * d=>d.data._directSubordinatesPaging - subordinates count in paging mode
     * d=>d.data._directSubordinates - subordinates count
     * d=>d.data._totalSubordinates - total subordinates count
     * d=>d._highlighted - when node is highlighted
     * d=>d._upToTheRootHighlighted - when node is highlighted up to the root
     * d=>d._expanded - when node is expanded
     * d=>d.data._centered - when node is centered
     *
     * @param node
     * @param index
     * @param nodes
     * @param state
     */
    nodeContent: (
        node: HierarchyNode<Datum>,
        index: number,
        nodes: Array<HierarchyNode<Datum>>,
        state: State<Datum>,
    ) => string;
    /**
     * Configure layout direction , possible values are "top", "left", "right", "bottom"
     */
    layout: Layout;
    /**
     * Node expand & collapse button content and styling. You can access same helper methods as above
     * @param params
     */
    buttonContent: (params: { node: HierarchyNode<Datum>; state: State<Datum> }) => string;
    /**
     * Node paging button content and styling. You can access same helper methods as above.
     * @param node
     * @param index
     * @param nodes
     * @param state
     */
    pagingButton: (
        node: HierarchyNode<Datum>,
        index: number,
        nodes: Array<HierarchyNode<Datum>>,
        state: State<Datum>,
    ) => string;
    /**
     * You can customize/offset positions for each node and link by overriding these functions
     * For example, suppose you want to move link y position 30 px bellow in top layout. You can do it like this:
     * ```javascript
     * const layout = chart.layoutBindings();
     * layout.top.linkY = node => node.y + 30;
     * chart.layoutBindings(layout);
     * ```
     */
    layoutBindings: Record<Layout, LayoutBinding<Datum>>;
}

/**
 * Properties which are available on the State object, but not as get / set pairs.
 * These are more internal in scope, but can be used when overriding functions.
 */
export interface StateInternal<Datum> {
    readonly root: HierarchyNode<Datum>;
    readonly allNodes: ReadonlyArray<HierarchyNode<Datum>>;
}

export interface State<Datum> extends StatePublic<Datum>, StateInternal<Datum> {
    [key: string]: any;
}

export type Layout = "left" | "bottom" | "right" | "top";

export interface LayoutBinding<Datum> {
    nodeLeftX: (node: HierarchyNode<Datum>) => number;
    nodeRightX: (node: HierarchyNode<Datum>) => number;
    nodeTopY: (node: HierarchyNode<Datum>) => number;
    nodeBottomY: (node: HierarchyNode<Datum>) => number;
    nodeJoinX: (node: HierarchyNode<Datum>) => number;
    nodeJoinY: (node: HierarchyNode<Datum>) => number;
    linkJoinX: (node: HierarchyNode<Datum>) => number;
    linkJoinY: (node: HierarchyNode<Datum>) => number;
    linkX: (node: HierarchyNode<Datum>) => number;
    linkY: (node: HierarchyNode<Datum>) => number;
    linkCompactXStart: (node: HierarchyNode<Datum>) => number;
    linkCompactYStart: (node: HierarchyNode<Datum>) => number;
    compactLinkMidX: (node: HierarchyNode<Datum>, state: State<Datum>) => number;
    compactLinkMidY: (node: HierarchyNode<Datum>, state: State<Datum>) => number;
    linkParentX: (node: HierarchyNode<Datum>) => number;
    linkParentY: (node: HierarchyNode<Datum>) => number;
    buttonX: (node: HierarchyNode<Datum>) => number;
    buttonY: (node: HierarchyNode<Datum>) => number;
    /** Returns a CSS transform */
    centerTransform: (params: {
        root: number;
        rootMargin: number;
        centerY: number;
        scale: number;
        centerX: number;
        chartWidth: number;
        chartHeight: number;
    }) => string;
    compactDimension: {
        sizeColumn: (node: HierarchyNode<Datum>) => number;
        sizeRow: (node: HierarchyNode<Datum>) => number;
        reverse<T>(a: T[]): T[];
    };
    nodeFlexSize: (params: {
        height: number;
        width: number;
        siblingsMargin: number;
        childrenMargin: number;
        state: State<Datum>;
        node: HierarchyNode<Datum>;
    }) => [number, number];
    zoomTransform: (params: { centerY: number; scale: number }) => string;
    /** Swaps x and y coordinates */
    swap: (d: Point) => Point;
    nodeUpdateTransform: (params: { width: number; height: number } & Point) => string;

    diagonal(source: Point, target: Point, m: Point): string;
}

// Helper type to remove the need to explicitly declare get / set methods
export type StateGetSet<T, TSelf> =
    & { [Property in keyof StatePublic<T>]: () => StatePublic<T>[Property] }
    & { [Property in keyof StatePublic<T>]: (value: StatePublic<T>[Property]) => TSelf };

// This is separated from the implementation declaration to not have to replicate the propertied of StateGetSet
export interface OrgChart<Datum> extends StateGetSet<Datum, OrgChart<Datum>> {
}

export class OrgChart<Datum> {
    constructor();

    getChartState(): State<Datum>;

    /**
     * This method can be invoked via chart.setZoomFactor API, it zooms to particulat scale
     * @param zoomLevel
     */
    initialZoom(zoomLevel: number): this;

    initializeEnterExitUpdatePattern(): void;

    /**
     * This method retrieves passed node's children IDs (including node)
     * @param args
     * @param nodeStore
     */
    getNodeChildren(args: HierarchyNode<Datum>, nodeStore: Datum[]): Datum[];

    render(): this;

    /**
     * This function can be invoked via chart.addNode API, and it adds node in tree at runtime
     * @param node
     */
    addNode(node: Datum): this;

    /**
     * This function can be invoked via chart.removeNode API, and it removes node from tree at runtime
     * @param nodeId
     */
    removeNode(nodeId: NodeId): this;

    groupBy(
        array: HTMLCollection,
        accessor: (node: HierarchyNode<Datum>) => number,
        aggegator: any,
    ): Array<[string, unknown]>;

    calculateCompactFlexDimensions(root: HierarchyNode<Datum>): void;

    calculateCompactFlexPositions(root: HierarchyNode<Datum>): void;

    /**
     * This function basically redraws visible graph, based on nodes state
     * @param params
     */
    update(params: { x0: number; y0: number; width: number; height: number } & Partial<Point>): void;

    /**
     * This function detects whether current browser is edge
     */
    isEdge(): boolean;

    /**
     * Horizontal diagonal generation algorithm - https://observablehq.com/@bumbeishvili/curved-edges-compact-horizontal
     * @param source
     * @param target
     * @param m
     */
    hdiagonal(source: Point, target: Point, m: Point): string;

    /**
     * Vertical diagonal generation algorithm - https://observablehq.com/@bumbeishvili/curved-edges-compacty-vertical
     * @param source
     * @param target
     * @param m
     */
    diagonal(source: Point, target: Point, m: Point): string;

    restyleForeignObjectElements(): void;

    /**
     * Toggle children on click.
     * @param event
     * @param node
     */
    onButtonClick(event: any, node: HierarchyNode<Datum>): void;

    /**
     * This function changes `expanded` property to descendants
     * @param node
     * @param isExpanded
     */
    setExpansionFlagToChildren(node: HierarchyNode<Datum>, isExpanded: boolean): void;

    /**
     * Method which only expands nodes, which have property set "expanded=true"
     * @param node
     */
    expandSomeNodes(node: HierarchyNode<Datum>): void;

    /**
     * This function updates nodes state and redraws graph, usually after data change
     */
    updateNodesState(): void;

    setLayouts(params: { expandNodesFirst?: boolean }): void;

    /**
     * Function which collapses passed node and it's descendants
     * @param node
     */
    collapse(node: HierarchyNode<Datum>): void;

    /**
     * Function which expands passed node and it's descendants
     * @param node
     */
    expand(node: HierarchyNode<Datum>): void;

    /**
     * Zoom handler function
     * @param event
     * @param node
     */
    zoomed(event: any, node: HierarchyNode<Datum>): void;

    zoomTreeBounds(params: {
        x0: number;
        x1: number;
        y0: number;
        y1: number;
        params: { animate?: boolean; scale?: boolean };
    }): void;

    fit(params?: { animate?: boolean; nodes?: Iterable<HierarchyNode<Datum>>; scale?: boolean }): this;

    /**
     * Load Paging Nodes
     * @param node
     */
    loadPagingNodes(node: HierarchyNode<Datum>): void;

    /**
     * This function can be invoked via chart.setExpanded API, it expands or collapses particular node
     * @param nodeId
     * @param isExpanded
     */
    setExpanded(nodeId: NodeId, isExpanded?: boolean): this;

    setCentered(nodeId: NodeId): this;

    setHighlighted(nodeId: NodeId): this;

    setUpToTheRootHighlighted(nodeId: NodeId): this;

    clearHighlighting(): this;

    /**
     * It can take selector which would go fullscreen
     * @param element
     */
    fullscreen(element?: Element): void;

    /**
     * Zoom in exposed method
     */
    zoomIn(): void;

    /**
     * Zoom out exposed method
     */
    zoomOut(): void;

    toDataUrl(url: string, callback: (result: string | ArrayBuffer) => void): void;

    exportImg(
        params?: {
            full?: boolean;
            scale?: number;
            onLoad?: (s: string) => void;
            save?: boolean;
            backgroundColor?: string;
        },
    ): void;

    exportSvg(): this;

    expandAll(): this;

    collapseAll(): this;

    downloadImage(params?: {
        node: SVGElement;
        scale?: number;
        imageName?: string;
        isSvg?: boolean;
        save?: boolean;
        backgroundColor?: string;
        onAlreadySerialized?: () => void;
        onLoad?: (s: string) => void;
    }): void;

    /**
     * Calculate what size text will take
     * @param text
     * @param params
     */
    getTextWidth(
        text: string,
        params: { fontSize?: number; fontWeight?: number; defaultFont?: string; ctx: CanvasRenderingContext2D },
    ): number;

    /**
     * Clear after moving off from the page
     */
    clear(): void;
}
