// Type definitions for sigma.js v1.0.3
// Project: https://github.com/jacomyal/sigma.js
// Definitions by: Qinfeng Chen <https://github.com/qinfchen>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module SigmaJs{
    interface Animation {
        camera(camera: Camera, target: { [index: string]: any }, options: { [index: string]: any }): number;
    }

    interface Camera {
        angle: number;
        cameraPosition(x: number, y:number): {x: number; y: number};
        goTo(settings: { [index: string]: any }): void;
        graphPosition(x: number, y:number): {x: number; y: number};
        ratio: number;
        readPrefix: string;
        x: number;
        y: number;
    }

    interface Classes {
        configurable: Configurable;
        graph: Graph;
    }

    interface Configurable {
        new(setting: Settings): Configurable;
        new(settings: Settings[]): Configurable;
        (key: string): string;
    }

    interface CustomShapes {
        init(sigma: Sigma): void;
    }

    interface DragNodes {
        (sigma: Sigma, renderer: Renderer): DragNodes;
    }

    interface Edge {
        color?: string;
        id: string;
        size?: number;
        source: string;
        target: string;
    }

    interface JsonParser {
        (target: string, sigma: Sigma, callback: (graph: Sigma) => void): void;
    }

    interface GexfParser {
        (target: string, sigma: Sigma, callback: (graph: Sigma) => void): void;
    }

    interface Graph {
        addEdge(edge: Edge): Graph;
        addNode(node: Node): Graph;
        addMethod(name: string, method: (input: any) => any): void;
        clear(): Graph;
        degree(id: string): number;
        degree(id: string, type: string): number;
        degree(ids: string[]): number[];
        degree(ids: string[], type: string): number[];
        dropEdge(id: string): Graph;
        dropNode(id: string): Graph;
        edges(): Edge[];
        edges(id: string): Edge;
        edges(ids: string[]): Edge[];
        kill(): Graph;
        nodes(): Node[];
        nodes(id: string): Node;
        nodes(ids: string[]): Node[];
    }

    interface Miscellaneous {
        animation: Animation;
    }

    interface Node {
        color?: string;
        id: string;
        image?: any;
        label?: string;
        size?: number;
        type?: string;
        x?: number;
        y?: number;
    }

    interface Parsers {
        json: JsonParser;
        gexf: GexfParser;
    }

    interface Plugins {
        dragNodes: DragNodes;
    }

    interface Renderer {
        container: Element;
        refresh(): Sigma;
        render(): Sigma;
        resize(): Sigma;
        settings(settings: { [index: string]: any }): void;
    }

    interface RendererConfigs{
        container?: Element;
        id?: string;
        type?: string;
    }

    interface ShapeLibrary {
        enumerate(): any;
    }

    interface Sigma {
        addRenderer(): Renderer;
        addRenderer(configs: RendererConfigs): Renderer;
        bind(event: string, callback: (e: any) => void): void;
        cameras: Camera[];
        graph: Graph;
        killRenderer(renderer: string): Sigma;
        killRenderer(renderer: Renderer): Sigma;
        kill(): void;
        refresh(): void;
        renderers: Renderer[];
        settings(key: string): any;
        settings(settings: { [index: string]: any }): void;

        // forceAtlas2 layout
        configForceAtlas2(configs: { [key: string]: any }): void;
        isForceAtlas2Running(): boolean;
        killForceAtlas2(): void;
        startForceAtlas2(): void;
        startForceAtlas2(configs: { [key: string]: any }): void;
        stopForceAtlas2(): void;
    }

    interface SigmaConfigs {
        container?: Element;
        graph?: Graph;
        id?: string;
        renderers?: Renderer[];
        settings?: { [index: string]: any };
    }

    interface SigmaFactory {
        new(): Sigma;
        new(container: string): Sigma;
        new(container: Element): Sigma;
        new(configuration: SigmaConfigs): Sigma;
        classes:Classes;
        misc: Miscellaneous;
        parsers: Parsers;
        plugins: Plugins;
    }

    interface Settings {
        // Graph settings
        clone?: boolean;
        immutable?: boolean;
        verbose?: boolean;

        // Renderers settings
        defaultNodeType?: string;
        defaultEdgeType?: string;
        defaultLabelColor?: string;
        defaultEdgeColor?: string;
        defaultNodeColor?: string;
        defaultLabelSize?: string;
        edgeColor?: string;
        minArrowSize?: number;
        font?: string;
        fontStyle?: string;
        labelColor?: string;
        labelSize?: string;
        labelSizeRatio?: string;
        labelThreshold?: string;
        webglOversamplingRatio?: number;

        // hovered node customizations
        borderSize?: number;
        defaultNodeBorderColor?: string;
        hoverFont?: number;
        hoverFontStyle?: string;
        labelHoverShadow?: string;
        labelHoverShadowColor?: string;
        nodeHoverColor?: string;
        defaultNodeHoverColor?: string;
        labelHoverBGColor?: string;
        defaultHoverLabelBGColor?: string;
        labelHoverColor?: string;
        defaultLabelHoverColor?: string;
        singleHover?: boolean;

        // hovered edge customizations
        edgeHoverColor?: string;
        edgeHoverSizeRatio?: number;
        defaultEdgeHoverColor?: string;
        edgeHoverExtremities?: boolean;

        // Draw settings for labels, edges, and nodes
        drawLabels?: boolean;
        drawEdges?: boolean;
        drawNodes?: boolean;

        // Batch edge drawing
        batchEdgesDrawing?: boolean;
        hideEdgesOnMove?: boolean;
        canvasEdgesBatchSize?: number;
        webglEdgesBatchSize?: number;

        // Rescale settings
        scalingMode?: string;
        sideMargin?: number;

        // max/min node and edge size
        minEdgeSize?: number;
        maxEdgeSize?: number;
        minNodeSize?: number;
        maxNodeSize?: number;

        // Captor settings
        touchEnabled?: boolean;
        mouseEnabled?: boolean;
        mouseWheelEnabled?: boolean;
        doubleClickEnabled?: boolean;
        eventsEnabled?: boolean;
        zoomingRatio?: number;
        doubleClickZoomingRatio?: number;
        zoomMin?: number;
        zoomMax?: number;
        mouseZoomDuration?: number;
        doubleClickZoomDuration?: number;
        mouseInertiaDuration?: number;
        mouseInertiaRatio?: number;
        touchInertiaDuration?: number;
        touchInertiaRatio?: number;
        doubleClickTimeout?: number;
        doubleTapTimeout?: number;
        dragTimeout?: number;

        // Global settings
        autoResize?: boolean;
        autoRescale?: boolean;
        enableCamera?: boolean;
        enableHovering?: boolean;
        enableEdgeHovering?: boolean;
        edgeHoverPrecision?: number;
        rescaleIgnoreSize?: boolean;
        skipErrors?: boolean;

        // Camera settings
        nodesPowRatio?: number;
        edgesPowRatio?: number;

        // Animation settings
        animationsTime?: number;
    }
}

declare var sigma: SigmaJs.SigmaFactory;
declare var CustomShapes: SigmaJs.CustomShapes;
declare var ShapeLibrary: SigmaJs.CustomShapes;
