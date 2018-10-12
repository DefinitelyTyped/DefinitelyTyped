// Type definitions for d3-graphviz 2.6
// Project: https://github.com/magjac/d3-graphviz
// Definitions by: Dom Parfitt <https://github.com/DomParfitt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module 'd3-graphviz' {

    import { ZoomBehavior } from 'd3-zoom'
    import { Selection } from 'd3-selection'

    module 'd3-selection' {
        interface Selection<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {
            graphviz(options?: GraphvizOptions | boolean): Graphviz;
            selectWithoutDataPropagation(): Selection<GElement, Datum, PElement, PDatum>;
        }
    }

    /**
     * 
     * @param selector 
     * @param options 
     */
    export function graphviz(selector: string, options?: GraphvizOptions | boolean): Graphviz;

    export interface GraphvizOptions {
        useWorker?: boolean,
        engine?: string,
        totalMemory?: number,
        keyMode?: string,
        fade?: boolean,
        tweenPaths?: boolean,
        tweenShapes?: boolean,
        convertEqualSidedPolygons?: boolean,
        tweenPrecision?: number,
        growEnteringEdges?: boolean,
        zoom?: boolean,
        zoomScaleExtent?: number[],
        zoomTranslateExtent?: number[][],
        width?: number,
        height?: number,
        scale?: number,
        fit?: boolean,
    }

    export interface DotAttributes {
        style: any;
        URL: any;
        tooltip: any;
    }

    export interface EdgeOptions {
        shortening: number;
    }

    export interface NodeOptions {

    }

    export interface Graphviz {
        engine(engine: string): Graphviz; //engine should be an enum
        addImage(path: string, width: number, height: number): Graphviz; //Width & height can be strings, i.e. '100px'
        totalMemory(size: number): Graphviz;
        keyMode(keyMode: string): Graphviz; //keyMode should be an enum
        fade(enable: boolean): Graphviz;
        tweenPaths(enable: boolean): Graphviz;
        tweenShapes(enable: boolean): Graphviz;
        convertEqualSidedPolygons(enable: boolean): Graphviz;
        tweenPrecision(precision: number): Graphviz; //precision can be a string, i.e. '50%'
        growEnteringEdges(enable: boolean): Graphviz;
        zoom(enable: boolean): Graphviz;
        resetZoom(transition?: any): any;
        zoomBehavior(): ZoomBehavior<any, any> | null;
        zoomSelection(): any | null;
        zoomScaleExtent(extent?: number[]): Graphviz;
        zoomTranslateExtent(extent?: number[][]): Graphviz;
        render(callback?: Function): Graphviz;
        dot(src: any, callback?: () => void): Graphviz;
        data(): any;
        renderDot(src: string, callback?: any): Graphviz;
        transition(name: any): Graphviz;
        active(name?: any): any; //Returns a transition, what type?
        options(): GraphvizOptions;
        options(options: GraphvizOptions): Graphviz;
        width(width: number): Graphviz;
        height(height: number): Graphviz;
        scale(scale: number): Graphviz;
        fit(fit: boolean): Graphviz;
        attributer(callback: Function | null): Graphviz;
        on(typenames: string, callback?: () => void): any;
        onerror(callback: any): any;
        logEvents(enable: boolean): Graphviz;
        drawEdge(x1: number, x2: number, y1: number, y2: number, attributes?: DotAttributes, options?: EdgeOptions): Graphviz;
        updateDrawnEdge(x1: number, x2: number, y1: number, y2: number, attributes?: DotAttributes, options?: EdgeOptions): Graphviz;
        moveDrawnEdgeEndPoint(x2: number, y2: number, options?: EdgeOptions): Graphviz;
        insertDrawnEdge(name: string): Graphviz;
        removeDrawnEdge(): Graphviz;
        drawnEdgeSelection(): any;
        drawNode(x: number, y: number, nodeId: string, attributes?: DotAttributes, options?: NodeOptions): Graphviz;
        updateDrawnNode(x: number, y: number, nodeId: string, attributes?: DotAttributes, options?: NodeOptions): Graphviz;
        moveDrawnNode(x: number, y: number, options?: NodeOptions): Graphviz;
        inserDrawnNode(nodeId: string): Graphviz;
        removeDrawnNode(): Graphviz;
        drawnNodeSelection(): Selection<any, any, HTMLElement, any>;
    }
}
