// Type definitions for force-graph 1.21
// Project: https://github.com/vasturiano/force-graph
// Definitions by: Peter Kimberley <https://github.com/p-kimberley>
//                 Noah Santschi-Cooney <https://github.com/Strum355>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function ForceGraph(): ForceGraph.ForceGraphInstance;

declare namespace ForceGraph {
    /**
     * Interfaces
     */

    interface GraphData {
        nodes: GraphNode[];
        links: GraphLink[];
    }

    interface GraphEntity {
        id: string;
    }

    interface GraphNode extends GraphEntity {
        name?: string;
        val?: any;
    }

    interface GraphNodeObject extends GraphNode {
        x: number;
        y: number;
        index: number;
    }

    interface GraphLink extends GraphEntity {
        type: string;
        source: string | GraphNode;
        target: string | GraphNode;
    }

    interface GraphLinkObject extends GraphLink {
        source: GraphNode;
        target: GraphNode;
    }

    /**
     * Types
     */

    type NodeAccessorFn<T> = (node: GraphNodeObject) => T;
    type NodeCanvasCallbackFn = (node: GraphNodeObject, canvasContext: CanvasRenderingContext2D, globalScale: number) => void;
    type NodeEventCallback = (node: GraphNodeObject) => void;

    type LinkAccessorFn<T> = (link: GraphLinkObject) => T;
    type LinkCanvasCallbackFn = (link: GraphLinkObject, canvasContext: CanvasRenderingContext2D, globalScale: number) => void;
    type LinkEventCallback = (link: GraphLinkObject) => void;

    type DagMode = 'td' | 'bu' | 'lr' | 'rl' | 'radialout' | 'radialin';
    type ForceFn = (node: { x: number, y: number }) => number;

    /**
     * Represents ForceGraph runtime object
     * @example:
     *  // Create an empty ForceGraph instance on an existing DOM element
     *  let forceGraph = ForceGraph();
     *  forceGraph(myHtmlElement);
     *  forceGraph.graphData([]);
     *
     *  // Destroy the ForceGraph instance
     *  forceGraph._destructor();
     */

    interface ForceGraphInstance {
        // Init / de-init
        (element: HTMLElement): ForceGraphInstance;
        _destructor(): void;

        // Data input
        graphData(data?: GraphData): ForceGraphInstance & GraphData;
        nodeId(id?: string): ForceGraphInstance & string;
        linkSource(source?: string): ForceGraphInstance & string;
        linkTarget(target?: string): ForceGraphInstance & string;

        // Container layout
        width(width?: number): ForceGraphInstance & number;
        height(height?: number): ForceGraphInstance & number;
        backgroundColor(color?: string): ForceGraphInstance & string;

        // Node styling
        nodeRelSize(size?: number): ForceGraphInstance & number;
        nodeVal(val?: number | string | NodeAccessorFn<number>): ForceGraphInstance & (number | string | NodeAccessorFn<number>);
        nodeLabel(label?: string | NodeAccessorFn<string | undefined>): ForceGraphInstance & (string | NodeAccessorFn<string | undefined>);
        nodeColor(color?: string | NodeAccessorFn<string>): ForceGraphInstance & (string | NodeAccessorFn<string>);
        nodeAutoColorBy(attribute?: string | NodeAccessorFn<string>): ForceGraphInstance & (string | NodeAccessorFn<string>);
        nodeCanvasObject(callback?: NodeCanvasCallbackFn): ForceGraphInstance & NodeCanvasCallbackFn;

        // Link styling
        linkLabel(label?: string | LinkAccessorFn<string | undefined>): ForceGraphInstance & (string | LinkAccessorFn<string | undefined>);
        linkVisibility(visible?: boolean | string | LinkAccessorFn<boolean>): ForceGraphInstance & (boolean | string | LinkAccessorFn<boolean>);
        linkColor(color?: string | LinkAccessorFn<string>): ForceGraphInstance & (string | LinkAccessorFn<string>);
        linkAutoColorBy(attribute?: string | LinkAccessorFn<string>): ForceGraphInstance & (string | LinkAccessorFn<string>);
        linkWidth(width?: number | string | LinkAccessorFn<number>): ForceGraphInstance & (number | string | LinkAccessorFn<number>);
        linkCurvature(curvature?: number | string | LinkAccessorFn<number>): ForceGraphInstance;
        linkCanvasObject(callback?: LinkCanvasCallbackFn): ForceGraphInstance & LinkCanvasCallbackFn;
        linkDirectionalArrowLength(length?: number | string | LinkAccessorFn<number>): ForceGraphInstance & (number | string | LinkAccessorFn<number>);
        linkDirectionalArrowColor(color?: string | LinkAccessorFn<string>): ForceGraphInstance & (string | LinkAccessorFn<string>);
        linkDirectionalArrowRelPos(ratio?: number | string | LinkAccessorFn<number>): ForceGraphInstance & (number | string | LinkAccessorFn<number>);
        linkDirectionalParticles(particleCount?: number | string | LinkAccessorFn<number>): ForceGraphInstance & (number | string | LinkAccessorFn<number>);
        linkDirectionalParticleSpeed(speed?: number | string | LinkAccessorFn<number>): ForceGraphInstance & (number | string | LinkAccessorFn<number>);
        linkDirectionalParticleWidth(width?: number | string | LinkAccessorFn<number>): ForceGraphInstance & (number | string | LinkAccessorFn<number>);
        linkDirectionalParticleColor(color?: string | LinkAccessorFn<string>): ForceGraphInstance & (string | LinkAccessorFn<string>);
        emitParticle(link: GraphLinkObject): ForceGraphInstance & (string | LinkAccessorFn<string>);

        // Render control
        pauseAnimation(): ForceGraphInstance;
        stopAnimation(): ForceGraphInstance; // Alias for pauseAnimation()
        resumeAnimation(): ForceGraphInstance;
        refresh(): ForceGraphInstance;
        centerAt(x?: number, y?: number, milliseconds?: number): ForceGraphInstance & {x: number, y: number};
        zoom(zoomLevel?: number, duration?: number): ForceGraphInstance & number;

        // Force engine configuration
        dagMode(mode?: DagMode): ForceGraphInstance & DagMode;
        dagLevelDistance(distance?: number): ForceGraphInstance & number;
        d3AlphaDecay(decay?: number): ForceGraphInstance & number;
        d3VelocityDecay(decay?: number): ForceGraphInstance & number;
        d3Force(force: 'link' | 'charge' | 'center' | string, forceFn?: ForceFn): ForceGraphInstance & ForceFn;
        d3ReheatSimulation(): ForceGraphInstance;
        warmupTicks(ticks?: number): ForceGraphInstance & number;
        cooldownTicks(ticks?: number): ForceGraphInstance & number;
        cooldownTime(milliseconds?: number): ForceGraphInstance & number;
        onEngineTick(callback: () => void): ForceGraphInstance;
        onEngineStop(callback: () => void): ForceGraphInstance;

        // Interaction
        onNodeClick(callback: NodeEventCallback): ForceGraphInstance;
        onNodeRightClick(callback: NodeEventCallback): ForceGraphInstance;
        onNodeHover(callback: (node?: GraphNodeObject, previousNode?: GraphNodeObject) => void): ForceGraphInstance;
        onNodeDrag(callback: NodeEventCallback): ForceGraphInstance;
        onNodeDragEnd(callback: NodeEventCallback): ForceGraphInstance;
        onLinkClick(callback: LinkEventCallback): ForceGraphInstance;
        onLinkRightClick(callback: LinkEventCallback): ForceGraphInstance;
        onLinkHover(callback: (link?: GraphLinkObject, previousLink?: GraphLinkObject) => void): ForceGraphInstance;
        linkHoverPrecision(precision?: number): ForceGraphInstance & number;
        enableNodeDrag(enable?: boolean): ForceGraphInstance & boolean;
        enableZoomPanInteraction(enable?: boolean): ForceGraphInstance & boolean;
        enablePointerInteraction(enable?: boolean): ForceGraphInstance & boolean;
    }
}

export default ForceGraph;
