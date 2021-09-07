// Type definitions for d3-org-chart 2.3
// Project: https://github.com/bumbeishvili/d3-organization-chart#readme
// Definitions by: Adam Jones <https://github.com/domdomegg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { HierarchyNode } from 'd3-hierarchy';

export as namespace d3;

// TODO
export type State = any; // This corresponds to the attrs in d3-org-chart
export type NodeId = any;
export type Connection = any;

export interface Point {
    x: number;
    y: number;
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
    compactLinkMidX: (node: HierarchyNode<Datum>, state: State) => number;
    compactLinkMidY: (node: HierarchyNode<Datum>, state: State) => number;
    linkParentX: (node: HierarchyNode<Datum>) => number;
    linkParentY: (node: HierarchyNode<Datum>) => number;
    buttonX: (node: HierarchyNode<Datum>) => number;
    buttonY: (node: HierarchyNode<Datum>) => number;
    centerTransform: (params: { root: number, rootMargin: number, centerY: number, scale: number, centerX: number, chartWidth: number, chartHeight: number }) => string; // CSS transform
    compactDimension: {
        sizeColumn: (node: HierarchyNode<Datum>) => number;
        sizeRow: (node: HierarchyNode<Datum>) => number;
        reverse<T>(a: T[]): T[];
    };
    nodeFlexSize: (params: { height: number, width: number, siblingsMargin: number, childrenMargin: number, state: State, node: HierarchyNode<Datum> }) => [number, number];
    zoomTransform: (params: { centerY: number, scale: number }) => string; // CSS transform
    diagonal: unknown;
    swap: (d: Point) => Point; // swaps x and y coordinates
    nodeUpdateTransform: (params: { width: number, height: number } & Point) => string;
}

export class OrgChart<Datum> {
    constructor();

    // Getters and setters, dynamically crreated in the constructor
    // TODO: improve unknown types
    id(): string;
    id(value: string): this;
    firstDraw(): boolean;
    firstDraw(value: boolean): this;
    svgWidth(): number;
    svgWidth(value: number): this;
    svgHeight(): number;
    svgHeight(value: number): this;
    container(): string; // CSS selector string, for example "#my-chart"
    container(value: string): this;
    defaultTextFill(): string; // CSS color, for example "#2C3E50"
    defaultTextFill(value: string): this;
    defaultFont(): string; // Font name, for example "Helvetica"
    defaultFont(value: string): this;
    ctx(): CanvasRenderingContext2D;
    ctx(value: CanvasRenderingContext2D): this;
    data(): Datum[] | null;
    data(value: Datum[] | null): this;
    duration(): number;
    duration(value: number): this;
    setActiveNodeCentered(): boolean;
    setActiveNodeCentered(value: boolean): this;
    expandLevel(): number;
    expandLevel(value: number): this;
    compact(): boolean;
    compact(value: boolean): this;
    rootMargin(): number;
    rootMargin(value: number): this;
    nodeDefaultBackground(): string; // CSS color, for example "#2C3E50"
    nodeDefaultBackground(value: string): this;
    connections(): Connection[];
    connections(value: Connection[]): this;
    lastTransform(): { k: number } & Point;
    lastTransform(value: { k: number } & Point): this;
    nodeId(): (node: HierarchyNode<Datum> | Datum) => NodeId; // Given a node, returns an id for equality comparisons
    nodeId(value: (node: HierarchyNode<Datum> | Datum) => NodeId): this;
    parentNodeId(): (node: HierarchyNode<Datum>| Datum) => NodeId | undefined; // Given a node, returns it's parent id for equality comparisons
    parentNodeId(value: (node: HierarchyNode<Datum>| Datum) => NodeId | undefined): this;
    backgroundColor(): string; // CSS color, for example "#2C3E50"
    backgroundColor(value: string): this;
    zoomBehavior(): unknown;
    zoomBehavior(value: unknown): this;
    defs(): unknown;
    defs(value: unknown): this;
    connectionsUpdate(): unknown;
    connectionsUpdate(value: unknown): this;
    linkUpdate(): (node: HierarchyNode<Datum>, index: number, nodes: Array<HierarchyNode<Datum>>) => void;
    linkUpdate(value: (node: HierarchyNode<Datum>, index: number, nodes: Array<HierarchyNode<Datum>>) => void): this;
    nodeUpdate(): (node: HierarchyNode<Datum>, index: number, nodes: Array<HierarchyNode<Datum>>) => void;
    nodeUpdate(value: (node: HierarchyNode<Datum>, index: number, nodes: Array<HierarchyNode<Datum>>) => void): this;
    nodeWidth(): (node: HierarchyNode<Datum>) => number;
    nodeWidth(value: (node: HierarchyNode<Datum>) => number): this;
    nodeHeight(): (node: HierarchyNode<Datum>) => number;
    nodeHeight(value: (node: HierarchyNode<Datum>) => number): this;
    siblingsMargin(): (node: HierarchyNode<Datum>) => number;
    siblingsMargin(value: (node: HierarchyNode<Datum>) => number): this;
    childrenMargin(): (node: HierarchyNode<Datum>) => number;
    childrenMargin(value: (node: HierarchyNode<Datum>) => number): this;
    neightbourMargin(): (node1: HierarchyNode<Datum>, node2: HierarchyNode<Datum>) => number; // NB: typo to match library
    neightbourMargin(value: (node1: HierarchyNode<Datum>, node2: HierarchyNode<Datum>) => number): this;
    compactMarginPair(): (node: HierarchyNode<Datum>) => number;
    compactMarginPair(value: (node: HierarchyNode<Datum>) => number): this;
    compactMarginBetween(): (node: HierarchyNode<Datum>) => number;
    compactMarginBetween(value: (node: HierarchyNode<Datum>) => number): this;
    onNodeClick(): (node: HierarchyNode<Datum>) => void;
    onNodeClick(value: (node: HierarchyNode<Datum>) => void): this;
    linkGroupArc(): unknown;
    linkGroupArc(value: unknown): this;
    nodeContent(): (node: HierarchyNode<Datum>, index: number, nodes: Array<HierarchyNode<Datum>>, state: State) => string; // Return type is HTML content
    nodeContent(value: (node: HierarchyNode<Datum>, index: number, nodes: Array<HierarchyNode<Datum>>, state: State) => string): this;
    layout(): Layout;
    layout(value: Layout): this;
    buttonContent(): (params: { node: HierarchyNode<Datum>, state: State }) => string; // Return type is HTML content
    buttonContent(value: (params: { node: HierarchyNode<Datum>, state: State }) => string): this;
    layoutBindings(): Record<Layout, LayoutBinding<Datum>>;
    layoutBindings(value: Record<Layout, LayoutBinding<Datum>>): this;

    initialZoom(zoomLevel: number): this;
    initializeEnterExitUpdatePattern(): void;
    getNodeChildren(args: HierarchyNode<Datum>, nodeStore: Datum[]): Datum[];
    render(): this;
    addNode(node: Datum): this;
    removeNode(nodeId: NodeId): this;
    calculateCompactFlexDimensions(root: unknown): void;
    calculateCompactFlexPositions(root: unknown): void;
    update(params: { x0: number, y0: number, width: number, height: number } & Partial<Point>): void;
    isEdge(): boolean; // Whether the current browser is Microsoft Edge
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
    zoomTreeBounds(params: { x0: number, x1: number, y0: number, y1: number, params: { animate?: boolean, scale?: boolean } }): void;
    fit(params?: { animate?: boolean, nodes?: Iterable<HierarchyNode<Datum>>,  scale?: boolean }): this;
    setExpanded(nodeId: NodeId, isExpanded?: boolean): this;
    setCentered(nodeId: NodeId): this;
    setHighlighted(nodeId: NodeId): this;
    setUpToTheRootHighlighted(nodeId: NodeId): this;
    clearHighlighting(): void;
    fullscreen(element?: Element): void;
    zoomIn(): void;
    zoomOut(): void;
    toDataUrl(url: string, callback: (result: string | ArrayBuffer) => void): void;
    exportImg(params?: { full?: boolean, scale?: number, onLoad?: (s: string) => void, save?: boolean }): void;
    exportSvg(): this;
    expandAll(): void;
    collapseAll(): void;
    downloadImage(params?: { node: SVGElement, scale?: number, isSvg?: boolean, save?: boolean, onAlreadySerialized?: () => void, onLoad?: (s: string) => void }): void;
    getTextWidth(text: string, params: { fontSize?: number, fontWeight?: number, defaultFont?: string, ctx: CanvasRenderingContext2D }): number;
}
