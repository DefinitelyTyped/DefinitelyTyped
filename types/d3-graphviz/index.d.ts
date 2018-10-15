// Type definitions for d3-graphviz 2.6
// Project: https://github.com/magjac/d3-graphviz
// Definitions by: Dom Parfitt <https://github.com/DomParfitt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module 'd3-graphviz' {

    import { ZoomBehavior } from 'd3-zoom'
    import { Selection, BaseType } from 'd3-selection'
    import { Transition } from 'd3-transition'

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

    /**
     * Interface representing the Graphviz Renderer. Methods generally return the instance of the
     * object they were called on (i.e this) in order to allow for easy method chaining.
     */
    export interface Graphviz {
        //Options
        /**
         * Gets the currently set options object on the renderer
         */
        options(): GraphvizOptions;
        
        /**
         * Sets the options provided. Does not overwrite existing options that are not
         * provided in the options parameter.
         * @param options the options to set on the renderer
         */
        options(options: GraphvizOptions): this;

        //Rendering
        renderDot(src: string, callback?: any): this;
        dot(src: string, callback?: () => void): this;
        render(callback?: Function): this;
        engine(engine: Engine): this;
        onerror(callback: Function): this;

        //Images
        /**
         * 
         * @param path 
         * @param width 
         * @param height 
         */
        addImage(path: string, width: number | string, height: number | string): this;

        //Creating Transitions
        transition(name?: Function | string | Transition<BaseType, any, BaseType, any>): this;
        active(name?: string): Transition<BaseType, any, BaseType, any> | null;

        //Controlling SVG and Graph Size
        width(width: number | string): this;
        height(height: number | string): this;
        fit(fit: boolean): this;
        scale(scale: number): this;

        //Control Flow
        on(typenames: TypeNames, callback?: () => void): this;
        logEvents(enable: boolean): this;

        //Controlling Fade
        fade(enable: boolean): this;

        //Controlling Animated Growth of Entering Edges
        growEnteringEdges(enable: boolean): this;

        //Controlling Path Tweening
        tweenPaths(enable: boolean): this;
        tweenPrecision(precision: number): this; //precision can be a string, i.e. '50%'

        //Controlling Shape Tweening
        tweenShapes(enable: boolean): this;
        convertEqualSidedPolygons(enable: boolean): this;

        //Controlling Panning & Zooming
        zoom(enable: boolean): this;
        zoomBehavior(): ZoomBehavior<any, any> | null;
        zoomSelection(): Element | null;
        zoomScaleExtent(extent?: number[]): this;
        zoomTranslateExtent(extent?: number[][]): this;
        resetZoom(transition?: string | Transition<BaseType, any, BaseType, any>): this;

        //Maintaining Object Constancy
        keyMode(keyMode: KeyMode): this; //keyMode should be an enum

        //Customizing Graph Attributes
        attributer(callback: Function | null): this;

        //Accessing Extracted Data
        data(): any;
        
        //Modifying an Existing Graph and Animating the Changes
            //Edges
        drawEdge(x1: number, x2: number, y1: number, y2: number, attributes?: DotAttributes, options?: EdgeOptions): this;
        updateDrawnEdge(x1: number, x2: number, y1: number, y2: number, attributes?: DotAttributes, options?: EdgeOptions): this;
        moveDrawnEdgeEndPoint(x2: number, y2: number, options?: EdgeOptions): this;
        insertDrawnEdge(name: string): this;
        removeDrawnEdge(): this;
        drawnEdgeSelection(): Selection<any, any, HTMLElement, any>;
            //Nodes
        drawNode(x: number, y: number, nodeId: string, attributes?: DotAttributes, options?: NodeOptions): this;
        updateDrawnNode(x: number, y: number, nodeId: string, attributes?: DotAttributes, options?: NodeOptions): this;
        moveDrawnNode(x: number, y: number, options?: NodeOptions): this;
        inserDrawnNode(nodeId: string): this;
        removeDrawnNode(): this;
        drawnNodeSelection(): Selection<any, any, HTMLElement, any>;

        //Large Graphs
        totalMemory(size: number): this;
    }

    /**
     * Enum defining the valid strings that can be passed in as an engine
     */
    type Engine = 'circo' | 'dot' | 'fdp' | 'neato' | 'osage' | 'patchwork' | 'twopi';

    type TypeNames = 'initEnd' | 'start' | 'layoutStart' | 'layoutEnd' | 'dataExtractEnd' | 
                        'dataProcessPass1End' | 'dataProcessPass2End' | 'dataProcessEnd' | 
                        'renderStart' | 'renderEnd' | 'transitionStart' | 'transitionEnd' |
                        'resotreEnd' | 'end';

    type KeyMode = 'title' | 'id' | 'tag-index' | 'index';
    
    /**
     * Interface defining the options present on the Graphviz Renderer.
     * Most map directly to methods that can be used to set their values.
     */
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
        width?: number | string,
        height?: number | string,
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
