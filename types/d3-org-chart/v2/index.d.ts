import { HierarchyNode } from "d3-hierarchy";
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
    id: string;
    firstDraw: boolean;
    svgWidth: number;
    svgHeight: number;
    scaleExtent: [number, number];
    /** CSS selector string, for example "#my-chart" */
    container: string;
    /** CSS color, for example "#2C3E50" */
    defaultTextFill: string;
    /** Font name, for example "Helvetica" */
    defaultFont: string;
    ctx: CanvasRenderingContext2D;
    data: Datum[] | null;
    duration: number;
    setActiveNodeCentered: boolean;
    expandLevel: number;
    compact: boolean;
    rootMargin: number;
    /** CSS color, for example "#2C3E50" */
    nodeDefaultBackground: string;
    connections: Connection[];
    lastTransform: ZoomTransform;
    /** Given a node, returns an id for equality comparisons */
    nodeId: (node: HierarchyNode<Datum> | Datum) => NodeId | undefined;
    /** Given a node, returns its parent id for equality comparisons */
    parentNodeId: (node: HierarchyNode<Datum> | Datum) => NodeId | undefined;
    /** CSS color, for example "#2C3E50" */
    backgroundColor: string;
    zoomBehavior: ZoomBehavior<Element, Datum>;
    svg: Selection<SVGSVGElement, string, null, undefined>;
    /** Return type is the string representation of a SVG <defs> element */
    defs: (state: State<Datum>, visibleConnections: Connection[]) => string;
    connectionsUpdate: ValueFn<BaseType, Datum, void>;
    linkUpdate: (node: HierarchyNode<Datum>, index: number, nodes: Array<HierarchyNode<Datum>>) => void;
    nodeUpdate: (node: HierarchyNode<Datum>, index: number, nodes: Array<HierarchyNode<Datum>>) => void;
    nodeWidth: (node: HierarchyNode<Datum>) => number;
    nodeHeight: (node: HierarchyNode<Datum>) => number;
    siblingsMargin: (node: HierarchyNode<Datum>) => number;
    childrenMargin: (node: HierarchyNode<Datum>) => number;
    neightbourMargin: (node1: HierarchyNode<Datum>, node2: HierarchyNode<Datum>) => number;
    compactMarginPair: (node: HierarchyNode<Datum>) => number;
    compactMarginBetween: (node: HierarchyNode<Datum>) => number;
    /** A function which is triggered when the node is clicked. */
    onNodeClick: (node: NodeId) => void;
    linkGroupArc: Link<any, DefaultLinkObject, [number, number]>;
    /** A function which renders the given node as HTML content. */
    nodeContent: (
        node: HierarchyNode<Datum>,
        index: number,
        nodes: Array<HierarchyNode<Datum>>,
        state: State<Datum>,
    ) => string;
    layout: Layout;
    buttonContent: (params: { node: HierarchyNode<Datum>; state: State<Datum> }) => string;
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
    diagonal(source: Point, target: Point, m: Point): string;
    /** Swaps x and y coordinates */
    swap: (d: Point) => Point;
    nodeUpdateTransform: (params: { width: number; height: number } & Point) => string;
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

    initialZoom(zoomLevel: number): this;
    initializeEnterExitUpdatePattern(): void;
    getNodeChildren(args: HierarchyNode<Datum>, nodeStore: Datum[]): Datum[];
    render(): this;
    addNode(node: Datum): this;
    removeNode(nodeId: NodeId): this;
    calculateCompactFlexDimensions(root: HierarchyNode<Datum>): void;
    calculateCompactFlexPositions(root: HierarchyNode<Datum>): void;
    update(params: { x0: number; y0: number; width: number; height: number } & Partial<Point>): void;
    /** Whether the current browser is Microsoft Edge */
    isEdge(): boolean;
    hdiagonal(source: Point, target: Point, m: Point): string;
    diagonal(source: Point, target: Point, m: Point): string;
    restyleForeignObjectElements(): void;
    onButtonClick(event: any, node: HierarchyNode<Datum>): void;
    setExpansionFlagToChildren(node: HierarchyNode<Datum>, isExpanded: boolean): void;
    expandSomeNodes(node: HierarchyNode<Datum>): void;
    updateNodesState(): void;
    setLayouts(params: { expandNodesFirst?: boolean }): void;
    collapse(node: HierarchyNode<Datum>): void;
    expand(node: HierarchyNode<Datum>): void;
    zoomed(event: any, node: HierarchyNode<Datum>): void;
    zoomTreeBounds(params: {
        x0: number;
        x1: number;
        y0: number;
        y1: number;
        params: { animate?: boolean; scale?: boolean };
    }): void;
    fit(params?: { animate?: boolean; nodes?: Iterable<HierarchyNode<Datum>>; scale?: boolean }): this;
    setExpanded(nodeId: NodeId, isExpanded?: boolean): this;
    setCentered(nodeId: NodeId): this;
    setHighlighted(nodeId: NodeId): this;
    setUpToTheRootHighlighted(nodeId: NodeId): this;
    clearHighlighting(): void;
    fullscreen(element?: Element): void;
    zoomIn(): void;
    zoomOut(): void;
    toDataUrl(url: string, callback: (result: string | ArrayBuffer) => void): void;
    exportImg(params?: { full?: boolean; scale?: number; onLoad?: (s: string) => void; save?: boolean }): void;
    exportSvg(): this;
    expandAll(): this;
    collapseAll(): this;
    downloadImage(params?: {
        node: SVGElement;
        scale?: number;
        isSvg?: boolean;
        save?: boolean;
        onAlreadySerialized?: () => void;
        onLoad?: (s: string) => void;
    }): void;
    getTextWidth(
        text: string,
        params: { fontSize?: number; fontWeight?: number; defaultFont?: string; ctx: CanvasRenderingContext2D },
    ): number;
}
