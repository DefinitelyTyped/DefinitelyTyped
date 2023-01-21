// Type definitions for d3-org-chart 2.6
// Project: https://github.com/bumbeishvili/org-chart#readme
// Definitions by: Adam Jones <https://github.com/domdomegg>
//                 Matteo Gallesio <https://github.com/m-gallesio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { HierarchyNode } from 'd3-hierarchy';
import { Selection, ValueFn, BaseType } from 'd3-selection';
import { Link, DefaultLinkObject } from 'd3-shape';
import { ZoomBehavior, ZoomTransform } from 'd3-zoom';

export type NodeId = string | number;
export type Connection = any; // TODO, probably comes from d3-flextree

export interface Point {
    x: number;
    y: number;
}

// This corresponds to the attrs in d3-org-chart
export interface StatePublic<Datum> {
    id: string;
    firstDraw: boolean;
    svgWidth: number;
    svgHeight: number;
    scaleExtent: [number, number];
    container: string; // CSS selector string, for example "#my-chart"
    defaultTextFill: string; // CSS color, for example "#2C3E50"
    defaultFont: string; // Font name, for example "Helvetica"
    ctx: CanvasRenderingContext2D;
    data: Datum[] | null;
    duration: number;
    setActiveNodeCentered: boolean;
    expandLevel: number;
    compact: boolean;
    rootMargin: number;
    nodeDefaultBackground: string; // CSS color, for example "#2C3E50"
    connections: Connection[];
    lastTransform: ZoomTransform;
    nodeId: (node: HierarchyNode<Datum> | Datum) => NodeId | undefined; // Given a node, returns an id for equality comparisons
    parentNodeId: (node: HierarchyNode<Datum> | Datum) => NodeId | undefined; // Given a node, returns it's parent id for equality comparisons
    backgroundColor: string; // CSS color, for example "#2C3E50"
    zoomBehavior: ZoomBehavior<Element, Datum>;
    svg: Selection<SVGSVGElement, string, null, undefined>;
    defs: (state: State<Datum>, visibleConnections: Connection[]) => string; // string representation of a SVG <defs> element
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
    onNodeClick: (node: HierarchyNode<Datum>) => void;
    linkGroupArc: Link<any, DefaultLinkObject, [number, number]>;
    nodeContent: (
        node: HierarchyNode<Datum>,
        index: number,
        nodes: Array<HierarchyNode<Datum>>,
        state: State<Datum>,
    ) => string; // Return type is HTML content
    layout: Layout;
    buttonContent: (params: { node: HierarchyNode<Datum>; state: State<Datum>; }) => string;
    layoutBindings: Record<Layout, LayoutBinding<Datum>>;
}

// Other available properties not exposed as get / set pairs
export interface StateInternal<Datum> {
    readonly root: HierarchyNode<Datum>;
    readonly allNodes: ReadonlyArray<HierarchyNode<Datum>>;
}

export interface State<Datum> extends StatePublic<Datum>, StateInternal<Datum> {
    [key: string]: any;
}

export type Layout = 'left' | 'bottom' | 'right' | 'top';
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
    centerTransform: (params: {
        root: number;
        rootMargin: number;
        centerY: number;
        scale: number;
        centerX: number;
        chartWidth: number;
        chartHeight: number;
    }) => string; // CSS transform
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
    zoomTransform: (params: { centerY: number; scale: number; }) => string; // CSS transform
    diagonal(source: Point, target: Point, m: Point): string;
    swap: (d: Point) => Point; // swaps x and y coordinates
    nodeUpdateTransform: (params: { width: number; height: number; } & Point) => string;
}

// Helper type to remove the need to explicitly declare get / set methods
export type StateGetSet<T, TSelf> =
    & { [Property in keyof StatePublic<T>]: () => StatePublic<T>[Property]; }
    & { [Property in keyof StatePublic<T>]: (value: StatePublic<T>[Property]) => TSelf; };

export interface OrgChart<Datum> extends StateGetSet<Datum, OrgChart<Datum>> {
    getChartState(): State<Datum>;

    initialZoom(zoomLevel: number): this;
    initializeEnterExitUpdatePattern(): void;
    getNodeChildren(args: HierarchyNode<Datum>, nodeStore: Datum[]): Datum[];
    render(): this;
    addNode(node: Datum): this;
    removeNode(nodeId: NodeId): this;
    calculateCompactFlexDimensions(root: HierarchyNode<Datum>): void;
    calculateCompactFlexPositions(root: HierarchyNode<Datum>): void;
    update(params: { x0: number; y0: number; width: number; height: number; } & Partial<Point>): void;
    isEdge(): boolean; // Whether the current browser is Microsoft Edge
    hdiagonal(source: Point, target: Point, m: Point): string;
    diagonal(source: Point, target: Point, m: Point): string;
    restyleForeignObjectElements(): void;
    onButtonClick(event: any, node: HierarchyNode<Datum>): void;
    setExpansionFlagToChildren(node: HierarchyNode<Datum>, isExpanded: boolean): void;
    expandSomeNodes(node: HierarchyNode<Datum>): void;
    updateNodesState(): void;
    setLayouts(params: { expandNodesFirst?: boolean; }): void;
    collapse(node: HierarchyNode<Datum>): void;
    expand(node: HierarchyNode<Datum>): void;
    zoomed(event: any, node: HierarchyNode<Datum>): void;
    zoomTreeBounds(params: {
        x0: number;
        x1: number;
        y0: number;
        y1: number;
        params: { animate?: boolean; scale?: boolean; };
    }): void;
    fit(params?: { animate?: boolean; nodes?: Iterable<HierarchyNode<Datum>>; scale?: boolean; }): this;
    setExpanded(nodeId: NodeId, isExpanded?: boolean): this;
    setCentered(nodeId: NodeId): this;
    setHighlighted(nodeId: NodeId): this;
    setUpToTheRootHighlighted(nodeId: NodeId): this;
    clearHighlighting(): void;
    fullscreen(element?: Element): void;
    zoomIn(): void;
    zoomOut(): void;
    toDataUrl(url: string, callback: (result: string | ArrayBuffer) => void): void;
    exportImg(params?: { full?: boolean; scale?: number; onLoad?: (s: string) => void; save?: boolean; }): void;
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
        params: { fontSize?: number; fontWeight?: number; defaultFont?: string; ctx: CanvasRenderingContext2D; },
    ): number;
}

export const OrgChart: {
    new <T>(): OrgChart<T>;
};
