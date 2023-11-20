declare namespace SigmaJs {
    interface Animation {
        camera(camera: Camera, target: { [index: string]: any }, options: { [index: string]: any }): number;
    }

    interface Camera {
        angle: number;
        cameraPosition(x: number, y: number): { x: number; y: number };
        goTo(settings: { [index: string]: any }): void;
        graphPosition(x: number, y: number): { x: number; y: number };
        ratio: number;
        readPrefix: string;
        settings(setting: string): any;
        x: number;
        y: number;
    }

    interface Canvas {
        edges: { [renderType: string]: (edge: Edge, source: Node, target: Node, ...a: any[]) => void };
        labels: { [renderType: string]: (node: Node, ...a: any[]) => void };
        nodes: { [renderType: string]: (node: Node, ...a: any[]) => void };
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
        [key: string]: any;
        color?: string | undefined;
        id: string;
        size?: number | undefined;
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

    interface GraphData {
        edges: Edge[];
        nodes: Node[];
    }

    interface Image {
        clip?: number | undefined;
        scale?: number | undefined;
        url?: string | undefined;
        x?: number | undefined;
        y?: number | undefined;
    }

    interface Miscellaneous {
        animation: Animation;
    }

    interface Node {
        [key: string]: any;
        color?: string | undefined;
        id: string;
        image?: any;
        label?: string | undefined;
        size?: number | undefined;
        type?: string | undefined;
        x?: number | undefined;
        y?: number | undefined;
    }

    interface Parsers {
        json: JsonParser;
        gexf: GexfParser;
    }

    interface Plugins {
        dragNodes: DragNodes;
    }

    interface Renderer {
        container: HTMLElement;
        refresh(): Sigma;
        render(): Sigma;
        resize(): Sigma;
        settings(settings: Settings): void;
    }

    interface RendererConfigs {
        container?: Element | undefined;
        id?: string | undefined;
        type?: string | undefined;
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
        settings(settings: Settings): void;

        // forceAtlas2 layout
        configForceAtlas2(configs: { [key: string]: any }): void;
        isForceAtlas2Running(): boolean;
        killForceAtlas2(): void;
        startForceAtlas2(): void;
        startForceAtlas2(configs: { [key: string]: any }): void;
        stopForceAtlas2(): void;
    }

    interface SigmaConfigs {
        container?: Element | undefined;
        graph?: GraphData | undefined;
        id?: string | undefined;
        renderers?: Renderer[] | undefined;
        settings?: { [index: string]: any } | undefined;
    }

    interface SigmaFactory {
        new(): Sigma;
        new(container: string): Sigma;
        new(container: Element): Sigma;
        new(configuration: SigmaConfigs): Sigma;
        canvas: Canvas;
        classes: Classes;
        misc: Miscellaneous;
        parsers: Parsers;
        plugins: Plugins;
        svg: SVG;
    }

    interface Settings {
        // Graph settings
        clone?: boolean | undefined;
        immutable?: boolean | undefined;
        verbose?: boolean | undefined;

        // Renderers settings
        defaultNodeType?: string | undefined;
        defaultEdgeType?: string | undefined;
        defaultLabelColor?: string | undefined;
        defaultEdgeColor?: string | undefined;
        defaultNodeColor?: string | undefined;
        defaultLabelSize?: string | undefined;
        edgeColor?: string | undefined;
        minArrowSize?: number | undefined;
        font?: string | undefined;
        fontStyle?: string | undefined;
        labelAlignment?: string | undefined;
        labelColor?: string | undefined;
        labelSize?: string | undefined;
        labelSizeRatio?: string | undefined;
        labelThreshold?: number | undefined;
        webglOversamplingRatio?: number | undefined;

        // hovered node customizations
        borderSize?: number | undefined;
        defaultNodeBorderColor?: string | undefined;
        hoverFont?: number | undefined;
        hoverFontStyle?: string | undefined;
        labelHoverShadow?: string | undefined;
        labelHoverShadowColor?: string | undefined;
        nodeHoverColor?: string | undefined;
        defaultNodeHoverColor?: string | undefined;
        labelHoverBGColor?: string | undefined;
        defaultHoverLabelBGColor?: string | undefined;
        labelHoverColor?: string | undefined;
        defaultLabelHoverColor?: string | undefined;
        singleHover?: boolean | undefined;

        // hovered edge customizations
        edgeHoverColor?: string | undefined;
        edgeHoverSizeRatio?: number | undefined;
        defaultEdgeHoverColor?: string | undefined;
        edgeHoverExtremities?: boolean | undefined;

        // Draw settings for labels, edges, and nodes
        drawLabels?: boolean | undefined;
        drawEdges?: boolean | undefined;
        drawNodes?: boolean | undefined;

        // Batch edge drawing
        batchEdgesDrawing?: boolean | undefined;
        hideEdgesOnMove?: boolean | undefined;
        canvasEdgesBatchSize?: number | undefined;
        webglEdgesBatchSize?: number | undefined;

        // Rescale settings
        scalingMode?: string | undefined;
        sideMargin?: number | undefined;

        // max/min node and edge size
        minEdgeSize?: number | undefined;
        maxEdgeSize?: number | undefined;
        minNodeSize?: number | undefined;
        maxNodeSize?: number | undefined;

        // Captor settings
        touchEnabled?: boolean | undefined;
        mouseEnabled?: boolean | undefined;
        mouseWheelEnabled?: boolean | undefined;
        doubleClickEnabled?: boolean | undefined;
        eventsEnabled?: boolean | undefined;
        zoomingRatio?: number | undefined;
        doubleClickZoomingRatio?: number | undefined;
        zoomMin?: number | undefined;
        zoomMax?: number | undefined;
        mouseZoomDuration?: number | undefined;
        doubleClickZoomDuration?: number | undefined;
        mouseInertiaDuration?: number | undefined;
        mouseInertiaRatio?: number | undefined;
        touchInertiaDuration?: number | undefined;
        touchInertiaRatio?: number | undefined;
        doubleClickTimeout?: number | undefined;
        doubleTapTimeout?: number | undefined;
        dragTimeout?: number | undefined;

        // Global settings
        autoResize?: boolean | undefined;
        autoRescale?: any;
        enableCamera?: boolean | undefined;
        enableHovering?: boolean | undefined;
        enableEdgeHovering?: boolean | undefined;
        edgeHoverPrecision?: number | undefined;
        rescaleIgnoreSize?: boolean | undefined;
        skipErrors?: boolean | undefined;

        // Camera settings
        nodesPowRatio?: number | undefined;
        edgesPowRatio?: number | undefined;

        // Animation settings
        animationsTime?: number | undefined;
    }

    interface SVG {
        edges: {
            labels: SVGEdgeLabels;
            [renderType: string]: SVGObject<SigmaJs.Edge> | SVGEdgeLabels;
        };
        labels: { [renderType: string]: SVGObject<SigmaJs.Node> };
        nodes: { [renderType: string]: SVGObject<SigmaJs.Node> };
    }

    interface SVGEdgeLabels {
        [renderType: string]: SVGObject<SigmaJs.Edge>;
    }

    interface SVGObject<T> {
        create: (object: T, ...a: any[]) => Element;
        update: (object: T, ...a: any[]) => void;
    }
}

declare var sigma: SigmaJs.SigmaFactory;
declare var CustomShapes: SigmaJs.CustomShapes;
declare var ShapeLibrary: SigmaJs.CustomShapes;
