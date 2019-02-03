// Type definitions for force-graph 1.x
// Project: https://github.com/vasturiano/force-graph
// Definitions by: Peter Kimberley <https://github.com/p-kimberley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function ForceGraph(element: HTMLElement): void;

declare namespace ForceGraph {
    /**
     * Interfaces
     */

    interface GraphData {
        nodes: GraphNode[];
        links: GraphLink[];
    }

    interface GraphNode {
        id: string;
        name: string;
        val: any;
    }

    interface GraphNodeObject extends GraphNode {
        x: number;
        y: number;
        index: number;
    }

    interface GraphLink {
        source: string | GraphNode;
        target: string | GraphNode;
    }

    interface GraphLinkObject extends GraphLink {
        source: GraphNode;
        target: GraphNode;
    }

    /**
     * Enums
     */

    enum LinkCurvatureType {
        Straight = 0,
        HalfLineLength = 1
    }

    /**
     * Types
     */

    type NodeAccessorFn<T> = ((node: GraphNodeObject) => T);
    type NodeCanvasCallbackFn = ((node: GraphNodeObject, canvasContext: CanvasRenderingContext2D, globalScale: number) => void);
    type NodeEventCallback = ((node: GraphNodeObject) => void);

    type LinkAccessorFn<T> = ((link: GraphLink) => T);
    type LinkCanvasCallbackFn = ((link: GraphLinkObject, canvasContext: CanvasRenderingContext2D, globalScale: number) => void);
    type LinkEventCallback = ((link: GraphLinkObject) => void);

    type DagMode = 'td' | 'bu' | 'lr' | 'rl' | 'radialout' | 'radialin';
    type ForceFn = ((node: {x: number, y: number}) => number);

    /**
     * Methods
     */
    // Data input
    function graphData(data?: GraphData[]): ForceGraph.ForceGraphObj & GraphData;
    function nodeId(id?: string): ForceGraph & string;
    function linkSource(source?: string): ForceGraph & string;
    function linkTarget(target?: string): ForceGraph & string;

    // Container layout
    function width(width?: number): ForceGraph & number;
    function height(height?: number): ForceGraph & number;
    function backgroundColor(color?: string): ForceGraph & string;

    // Node styling
    function nodeRelSize(size?: number): ForceGraph & number;
    function nodeVal(val?: number | string | NodeAccessorFn<number>): ForceGraph & (number | string | NodeAccessorFn<number>);
    function nodeLabel(label?: string | NodeAccessorFn<string>): ForceGraph & (string | NodeAccessorFn<string>);
    function nodeColor(color?: string | NodeAccessorFn<string>): ForceGraph & (string | NodeAccessorFn<string>);
    function nodeAutoColorBy(attribute?: string | NodeAccessorFn<string>): ForceGraph & (string | NodeAccessorFn<string>);
    function nodeCanvasObject(callback?: NodeCanvasCallbackFn): ForceGraph & NodeCanvasCallbackFn;

    // Link styling
    function linkLabel(label?: string | LinkAccessorFn<string>): ForceGraph & (string | LinkAccessorFn<string>);
    function linkVisibility(visible?: boolean | string | LinkAccessorFn<boolean>): ForceGraph & (boolean | string | LinkAccessorFn<boolean>);
    function linkColor(color?: string | LinkAccessorFn<string>): ForceGraph & (string | LinkAccessorFn<string>);
    function linkAutoColorBy(attribute?: string | LinkAccessorFn<string>): ForceGraph & (string | LinkAccessorFn<string>);
    function linkWidth(width?: number | string | LinkAccessorFn<number>): ForceGraph & (number | string | LinkAccessorFn<number>);
    function linkCurvature(curvature?: LinkCurvatureType | string | LinkAccessorFn<LinkCurvatureType>): ForceGraph;
    function linkCanvasObject(callback?: NodeCanvasCallbackFn): ForceGraph & NodeCanvasCallbackFn;
    function linkDirectionalArrowLength(length?: number | string | LinkAccessorFn<number>): ForceGraph & (number | string | LinkAccessorFn<number>);
    function linkDirectionalArrowColor(color?: string | LinkAccessorFn<string>): ForceGraph & (string | LinkAccessorFn<string>);
    function linkDirectionalArrowRelPos(ratio?: number | string | LinkAccessorFn<number>): ForceGraph & (number | string | LinkAccessorFn<number>);
    function linkDirectionalParticles(particleCount?: number | string | LinkAccessorFn<number>): ForceGraph & (number | string | LinkAccessorFn<number>);
    function linkDirectionalParticleSpeed(speed?: number | string | LinkAccessorFn<number>): ForceGraph & (number | string | LinkAccessorFn<number>);
    function linkDirectionalParticleWidth(width?: number | string | LinkAccessorFn<number>): ForceGraph & (number | string | LinkAccessorFn<number>);
    function linkDirectionalParticleColor(color?: string | LinkAccessorFn<string>): ForceGraph & (string | LinkAccessorFn<string>);

    // Render control
    function pauseAnimation(): ForceGraph;
    function stopAnimation(): ForceGraph; // Alias for pauseAnimation()
    function resumeAnimation(): ForceGraph;
    function centerAt(x?: number, y?: number, milliseconds?: number): ForceGraph & {x: number, y: number};
    function zoom(zoomLevel?: number, duration?: number): ForceGraph & number;

    // Force engine configuration
    function dagMode(mode?: DagMode): ForceGraph & DagMode;
    function dagLevelDistance(distance?: number): ForceGraph & number;
    function d3AlphaDecay(decay?: number): ForceGraph & number;
    function d3VelocityDecay(decay?: number): ForceGraph & number;
    function d3Force(force: 'link' | 'charge' | 'center' | string, forceFn?: ForceFn): ForceGraph & ForceFn;
    function warmupTicks(ticks?: number): ForceGraph & number;
    function cooldownTicks(ticks?: number): ForceGraph & number;
    function cooldownTime(milliseconds?: number): ForceGraph & number;
    function onEngineTick(callback: (() => void)): ForceGraph;
    function onEngineStop(callback: (() => void)): ForceGraph;

    // Interaction
    function onNodeClick(callback: NodeEventCallback): ForceGraph;
    function onNodeRightClick(callback: NodeEventCallback): ForceGraph;
    function onNodeHover(callback: NodeEventCallback): ForceGraph;
    function onNodeDrag(callback: NodeEventCallback): ForceGraph;
    function onNodeDragEnd(callback: NodeEventCallback): ForceGraph;
    function onLinkClick(callback: LinkEventCallback): ForceGraph;
    function onLinkRightClick(callback: LinkEventCallback): ForceGraph;
    function onLinkHover(callback: LinkEventCallback): ForceGraph;
    function linkHoverPrecision(precision?: number): ForceGraph & number;
    function enableNodeDrag(enable?: boolean): ForceGraph & boolean;
    function enableZoomPanInteraction(enable?: boolean): ForceGraph & boolean;
    function enablePointerInteraction(enable?: boolean): ForceGraph & boolean;
}

export = ForceGraph;
