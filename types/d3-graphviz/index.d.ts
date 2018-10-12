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

    export interface Graphviz {
        //Options
        options(): GraphvizOptions;
        options(options: GraphvizOptions): Graphviz;

        //Rendering
        renderDot(src: string, callback?: any): Graphviz;
        dot(src: any, callback?: () => void): Graphviz;
        render(callback?: Function): Graphviz;
        engine(engine: Engine): Graphviz;
        onerror(callback: any): any;

        //Images
        addImage(path: string, width: number, height: number): Graphviz; //Width & height can be strings, i.e. '100px'

        //Creating Transitions
        transition(name: any): Graphviz;
        active(name?: any): any; //Returns a transition, what type?

        //Controlling SVG and Graph Size
        width(width: number): Graphviz;
        height(height: number): Graphviz;
        fit(fit: boolean): Graphviz;
        scale(scale: number): Graphviz;

        //Control Flow
        on(typenames: TypeNames, callback?: () => void): any;
        logEvents(enable: boolean): Graphviz;

        //Controlling Fade
        fade(enable: boolean): Graphviz;

        //Controlling Animated Growth of Entering Edges
        growEnteringEdges(enable: boolean): Graphviz;

        //Controlling Path Tweening
        tweenPaths(enable: boolean): Graphviz;
        tweenPrecision(precision: number): Graphviz; //precision can be a string, i.e. '50%'

        //Controlling Shape Tweening
        tweenShapes(enable: boolean): Graphviz;
        convertEqualSidedPolygons(enable: boolean): Graphviz;

        //Controlling Panning & Zooming
        zoom(enable: boolean): Graphviz;
        zoomBehavior(): ZoomBehavior<any, any> | null;
        zoomSelection(): any | null;
        zoomScaleExtent(extent?: number[]): Graphviz;
        zoomTranslateExtent(extent?: number[][]): Graphviz;
        resetZoom(transition?: any): any;

        //Maintaining Object Constancy
        keyMode(keyMode: KeyMode): Graphviz; //keyMode should be an enum

        //Customizing Graph Attributes
        attributer(callback: Function | null): Graphviz;

        //Accessing Extracted Data
        data(): any;
        
        //Modifying an Existing Graph and Animating the Changes
            //Edges
        drawEdge(x1: number, x2: number, y1: number, y2: number, attributes?: DotAttributes, options?: EdgeOptions): Graphviz;
        updateDrawnEdge(x1: number, x2: number, y1: number, y2: number, attributes?: DotAttributes, options?: EdgeOptions): Graphviz;
        moveDrawnEdgeEndPoint(x2: number, y2: number, options?: EdgeOptions): Graphviz;
        insertDrawnEdge(name: string): Graphviz;
        removeDrawnEdge(): Graphviz;
        drawnEdgeSelection(): any;
            //Nodes
        drawNode(x: number, y: number, nodeId: string, attributes?: DotAttributes, options?: NodeOptions): Graphviz;
        updateDrawnNode(x: number, y: number, nodeId: string, attributes?: DotAttributes, options?: NodeOptions): Graphviz;
        moveDrawnNode(x: number, y: number, options?: NodeOptions): Graphviz;
        inserDrawnNode(nodeId: string): Graphviz;
        removeDrawnNode(): Graphviz;
        drawnNodeSelection(): Selection<any, any, HTMLElement, any>;

        //Large Graphs
        totalMemory(size: number): Graphviz;
    }

    type Engine = 'circo' | 'dot' | 'fdp' | 'neato' | 'osage' | 'patchwork' | 'twopi';

    type TypeNames = 'initEnd' | 'start' | 'layoutStart' | 'layoutEnd' | 'dataExtractEnd' | 
                        'dataProcessPass1End' | 'dataProcessPass2End' | 'dataProcessEnd' | 
                        'renderStart' | 'renderEnd' | 'transitionStart' | 'transitionEnd' |
                        'resotreEnd' | 'end';

    type KeyMode = 'title' | 'id' | 'tag-index' | 'index';
    
    export interface GraphvizOptions {
        useWorker?: boolean,
        engine?: Engine,
        totalMemory?: number,
        keyMode?: KeyMode,
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
}
