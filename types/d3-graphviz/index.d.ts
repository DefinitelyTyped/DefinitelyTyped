// Type definitions for d3-graphviz 2.6
// Project: https://github.com/magjac/d3-graphviz
// Definitions by: Dom Parfitt <https://github.com/DomParfitt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ZoomBehavior } from 'd3-zoom';
import { Selection, BaseType, ValueFn } from 'd3-selection';
import { Transition } from 'd3-transition';

/**
 * Define methods which act as extensions to d3-selection
 */
declare module 'd3-selection' {
    interface Selection<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {
        /**
         * Returns a new graphviz renderer instance on the first element in the given selection. If a graphviz renderer instance already exists
         * on that element, instead returns the existing graphviz renderer instance.
         * @param options either a GraphvizOptions object representing the options of the graphviz renderer or a boolean representing the
         *                  useWorker option.
         */
        graphviz(options?: GraphvizOptions | boolean): Graphviz<GElement, Datum, BaseType, PDatum>;

        /**
         * For each selected element, selects the first descendant element that matches the specified selector string in the same ways as
         * d3-selection.select, but does not propagate any associated data from the current element to the corresponding selected element.
         */
        selectWithoutDataPropagation(): Selection<GElement, Datum, PElement, PDatum>;
    }
}

/**
 * Creates a new graphviz renderer instance on the first element matching the given selector string. If the selector is not a string,
 * instead creates a new graphviz renderer instance on the specified node. If a graphviz renderer instance already exists on that
 * element, instead returns the existing graphviz renderer instance.
 * @param selector either a string representing a selector for a given node or an instance of a node
 * @param options the options to be applied to the graphviz renderer
 */
export function graphviz(selector: string | BaseType, options?: GraphvizOptions | boolean): Graphviz<BaseType, any, BaseType, any>;

/**
 * Interface representing the Graphviz Renderer. Methods generally return the instance of the
 * object they were called on (i.e this) in order to allow for easy method chaining.
 */
export interface Graphviz<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {
    // Options
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

    // Rendering
    /**
     * Renders an SVG graph from the specified src string and appends it to the selection the grapviz
     * renderer instance was generated on.
     * @param src a string representing a valid string in the DOT language
     * @param callback
     */
    renderDot(src: string, callback?: () => void): this;

    /**
     * Starts computation of the layout of a graph from the specified dotSrc string and saves the data for
     * rendering the SVG with {@link render} at a later stage.
     * @param src a string representing a valid string in the DOT language
     * @param callback
     */
    dot(src: string, callback?: () => void): this;

    /**
     * Starts rendering of an SVG graph from data saved by {@link dot} and appends it to the selection
     * the grapviz renderer instance was generated on.
     * @param callback
     */
    render(callback?: () => void): this;

    /**
     * Sets the Graphviz layout engine name to the specified engine string.
     * @param engine a string taking one of the following values:
     *            - circo
     *            - dot
     *            - fdp
     *            - neato
     *            - osage
     *            - patchwork
     *            - twopi
     */
    engine(engine: Engine): this;

    /**
     * Sets the callback that is called if the layout computation encounters
     * an error. If no callback is passed then it removes the existing callback.
     * @param callback the call back function triggered by an error
     */
    onerror(callback?: (errorMessage: any) => void): this;

    // Images
    /**
     * Add an image reference. Must be called before {@link renderDot} ir {@link dot}
     * are called.
     * @param path the path of the image, may be a filename, relative or absolute path or a URL
     * @param width the width of the image, if a string is used then it may specify units. Allowed
     *               units are: in, px, pc, pt, cm, or mm. If no units are given or dimensions are
     *               given as numbers, points (pt) are used.
     * @param height the height of the image, which follows the same unit rules as width.
     */
    addImage(path: string, width: number | string, height: number | string): this;

    // Creating Transitions
    /**
     * Applies the specified transition name to subsequent SVG rendering. Accepts the same arguments
     * as {@link d3-select.transition} or a function, but returns the graph renderer instance, not the
     * transition. If name is a function, it is taken to be a transition factory. A transition factory
     * is a function that returns a transition.
     * @param name either a function returning a transition, a transition object or a string naming a
     *              transition
     */
    transition(name?: () => Transition<GElement, Datum, PElement, PDatum> | string | Transition<GElement, Datum, PElement, PDatum>): this;

    /**
     * Returns the active transition on the generated graph's top level svg with the specified name,
     * if any. Returns null if there is no such active transition on the top level svg node.
     * @param name the name of the transition
     */
    active(name?: string): Transition<GElement, Datum, PElement, PDatum> | null;

    // Controlling SVG and Graph Size
    /**
     * Sets the SVG width attribute.
     * @param width the width in pixels
     */
    width(width: number): this;

    /**
     * Sets the SVG height attribute
     * @param height the height in pixels
     */
    height(height: number): this;

    /**
     * Sets whether the graph's viewbox is affected by the size of its parent SVG's size
     * @param fit true, if the graph should scale to fit its parent, false if it should
     *             remain at its original size
     */
    fit(fit: boolean): this;

    /**
     * Sets the value the graph should scale by in relation to its parent SVG. Scaling
     * only occurs if fit is set to true
     * @param scale the scale value with 1.0 being 100%, 0.5 being 50% etc.
     */
    scale(scale: number): this;

    // Control Flow
    /**
     * Adds or removes a listener to the graphviz renderer instance for the specified event typenames.
     * @param typenames
     * @param callback
     */
    on(typenames: TypeNames, callback?: () => void): this;

    /**
     * Sets whether events are logged or not.
     * @param enable true if events should be logged, false if not
     */
    logEvents(enable: boolean): this;

    // Controlling Fade
    /**
     * Sets whether fade in and out of nodes is enabled.
     * @param enable true to enable fade in and out, false to disable
     */
    fade(enable: boolean): this;

    // Controlling Animated Growth of Entering Edges
    /**
     * Sets whether animated growth of entering edges is enabled.
     * @param enable true to animate entering edges, false to disable
     */
    growEnteringEdges(enable: boolean): this;

    // Controlling Path Tweening
    /**
     * Enables or disables path tweening
     * @param enable true if path tweening should be enabled, false if it should be disabled
     */
    tweenPaths(enable: boolean): this;

    /**
     * Sets the precision of path tweening. If precision is a number, sets the precision used
     * during path tweening to precision points. The precision is the length of each path
     * segment during tweening. If instead precision is a string containing '%', sets the
     * relative precision.
     * @param precision the precision as either a number of a string containing a percentage
     */
    tweenPrecision(precision: number | string): this;

    // Controlling Shape Tweening
    /**
     * Enables or disables shape tweening during transitions. Implicitly sets path tweening
     * as enabled due to SVGs handling for them.
     * @param enable true if shape tweening should be enabled, false if it should be disabled
     */
    tweenShapes(enable: boolean): this;

    /**
     * Enables or disables conversion of polygons with an equal number of sides during shape
     * tweening.
     * @param enable true if conversion should be enabled, false if it should be disabled.
     */
    convertEqualSidedPolygons(enable: boolean): this;

    // Controlling Panning & Zooming
    /**
     * Enables or disables zooming and panning.
     * @param enable true if zooming should be enabled, false if it should be disabled.
     */
    zoom(enable: boolean): this;

    /**
     * Returns the zoom behaviour of a graph. If the zoom is disable or the graph has not
     * yet been rendered then returns null.
     */
    zoomBehavior(): ZoomBehavior<Element, Datum> | null;

    /**
     * Returns the selection to which zoom behaviour has been applied. If zoom is disabled
     * or the graph has not yet been rendered then returns null.
     */
    zoomSelection(): Element | null;

    /**
     * Sets the scale extend for zooming where the first number is the minimum allowed zoom
     * and the second is the maximum.
     * @param extent a tuple containing the minimum and maximum allowed zoom
     */
    zoomScaleExtent(extent?: [number, number]): this;

    /**
     * Sets the translate extent which restricts panning.
     * @param extent a tuple of the form ((x0, y0), (x1, y1)) where (x0, y0) is the top-left
     *               corner of the "world" and (x1, y1) is the bottom-right corner
     */
    zoomTranslateExtent(extent?: [[number, number], [number, number]]): this;

    /**
     * Resets any transformations made by panning and zooming.
     * @param transition an optional transition to apply during reset.
     */
    resetZoom(transition?: string | Transition<GElement, Datum, PElement, PDatum>): this;

    // Maintaining Object Constancy
    /**
     * Sets the key mode to the the provided mode string. Must be set before passing in
     * any DOT strings.
     * @param keyMode
     */
    keyMode(keyMode: KeyMode): this;

    // Customizing Graph Attributes
    /**
     *
     * @param callback
     */
    attributer(callback?: ValueFn<GElement, Datum, void>): this;

    // Accessing Extracted Data
    /**
     * Returns the data extracted by {@link dot} or null if none exists.
     */
    data(): Datum;

    // Modifying an Existing Graph and Animating the Changes
    // Edges
    /**
     * Draws a straight edge from (x1, y1) to (x2, y2) using coordinates relative to top level G container element of the graph.
     * @param x1 the starting x co-ordinate
     * @param y1 the starting y co-ordinate
     * @param x2 the ending x co-ordinate
     * @param y2 the ending y co-ordinate
     * @param attributes object containing DOT attributes
     * @param options object containing the options used when drawing the edge
     */
    drawEdge(x1: number, y1: number, x2: number, y2: number, attributes?: DotAttributes, options?: EdgeOptions): this;

    /**
     * Updates properties and attributes of the edge currently drawn with {@link drawEdge},
     * using the same arguments. This method cannot be used after the edge has been inserted
     * into the graph data with {@link insertDrawnEdge.}
     * @param x1 the starting x co-ordinate
     * @param y1 the starting y co-ordinate
     * @param x2 the ending x co-ordinate
     * @param y2 the ending y co-ordinate
     * @param attributes object containing DOT attributes
     * @param options object containing the options used when drawing the edge
     */
    updateDrawnEdge(x1: number, y1: number, x2: number, y2: number, attributes?: DotAttributes, options?: EdgeOptions): this;

    /**
     * Updates the end point of the edge currently drawn with {@link drawEdge},
     * accepting the same options argument. This method cannot be used after the
     * edge has been inserted into the graph data with {@link insertDrawnEdge}.
     * @param x2 the ending x co-ordinate
     * @param y2 the ending y co-ordinate
     * @param options object containing the options used when drawing the edge
     */
    moveDrawnEdgeEndPoint(x2: number, y2: number, options?: EdgeOptions): this;

    /**
     * Inserts the edge into the graph data, making it available for an animated
     * transition into a subsequent new layout.
     * @param name the name of the edge.
     */
    insertDrawnEdge(name: string): this;

    /**
     * Removes the edge currently drawn with {@link drawEdge}. This method cannot
     * be used after the edge has been inserted into the graph data with
     * {@link insertDrawnEdge}.
     */
    removeDrawnEdge(): this;

    /**
     * Returns a {@link Selection} containing the edge currently being drawn. The selection is empty
     * if no edge has been drawn or the lastest drawn edge has been inserted into the graph data with
     * {@link insertDrawnNode}.
     */
    drawnEdgeSelection(): Selection<GElement, Datum, PElement, PDatum>;

    // Nodes
    /**
     * Draws a node with the upper left corner of its bounding box at (x, y), using
     * coordinates relative to the top level G container element of the graph.
     * @param x x co-ordinate of the top-left bounding box of the node
     * @param y y co-ordinate of the top-left bounding box of the node
     * @param nodeId the ID of the node
     * @param attributes object containing DOT attributes
     * @param options object containing the options used when drawing the node, currently unused
     */
    drawNode(x: number, y: number, nodeId: string, attributes?: DotAttributes, options?: any): this;

    /**
     * Updates properties and attributes of the node currently drawn with {@link drawNode},
     * using the same arguments. This method cannot be used after the node has been inserted
     *  into the graph data with {@link insertDrawnNode}.
     * @param x x co-ordinate of the top-left bounding box of the node
     * @param y y co-ordinate of the top-left bounding box of the node
     * @param nodeId the ID of the node
     * @param attributes object containing DOT attributes
     * @param options object containing the options used when drawing the node, currently unused
     */
    updateDrawnNode(x: number, y: number, nodeId: string, attributes?: DotAttributes, options?: any): this;

    /**
     * Updates the position of the upper left corner of the node currently drawn
     * with {@link drawNode}, accepting the same options argument. This method
     * cannot be used after the node has been inserted into the graph data with
     * {@link insertDrawnNode}.
     * @param x new x co-ordinate of the top-left bounding box of the node
     * @param y new y co-ordinate of the top-left bounding box of the node
     * @param options object containing the options used when drawing the node, currently unused
     */
    moveDrawnNode(x: number, y: number, options?: any): this;

    /**
     * Inserts the node into the graph data, making it available for an animated
     * transition into a subsequent new layout.
     * @param nodeId the ID of the node
     */
    insertDrawnNode(nodeId: string): this;

    /**
     * Removes the node currently drawn with {@link drawNode}. This method cannot
     * be used after the node has been inserted into the graph data with {@link insertDrawnNode}.
     */
    removeDrawnNode(): this;

    /**
     * Returns a {@link Selection} containing the node currently being drawn. The selection is empty
     * if no node has been drawn or the lastest drawn node has been inserted into the graph data with
     * {@link insertDrawnNode}.
     */
    drawnNodeSelection(): Selection<GElement, Datum, PElement, PDatum>;

    // Large Graphs
    /**
     * Sets the total memory available to Viz.js to size bytes, which should be a power of 2.
     * @param size the size in bytes of memory allocated to Viz.js
     */
    totalMemory(size: number): this;
}

/**
 * Enum defining the valid strings that can be passed in as an engine
 */
export type Engine = 'circo' | 'dot' | 'fdp' | 'neato' | 'osage' | 'patchwork' | 'twopi';

/**
 * Enum defining the valid strings that can be passed as TypeNames
 */
export type TypeNames = 'initEnd' | 'start' | 'layoutStart' | 'layoutEnd' | 'dataExtractEnd' |
    'dataProcessPass1End' | 'dataProcessPass2End' | 'dataProcessEnd' |
    'renderStart' | 'renderEnd' | 'transitionStart' | 'transitionEnd' |
    'resotreEnd' | 'end' | string; // string included to allow for optional addition of a name, e.g. initEnd.foo

/**
 * Enum defining the valid strings that can be passed as KeyModes
 */
export type KeyMode = 'title' | 'id' | 'tag-index' | 'index';

/**
 * Interface defining the options present on the Graphviz Renderer.
 * Most map directly to methods that can be used to set their values.
 */
export interface GraphvizOptions {
    useWorker?: boolean;
    engine?: Engine;
    totalMemory?: number;
    keyMode?: KeyMode;
    fade?: boolean;
    tweenPaths?: boolean;
    tweenShapes?: boolean;
    convertEqualSidedPolygons?: boolean;
    tweenPrecision?: number | string;
    growEnteringEdges?: boolean;
    zoom?: boolean;
    zoomScaleExtent?: [number, number];
    zoomTranslateExtent?: [[number, number], [number, number]];
    width?: number;
    height?: number;
    scale?: number;
    fit?: boolean;
}

/**
 * Interface defining the attributes available per the DOT language
 */
export interface DotAttributes {
    style?: any;
    URL?: any;
    tooltip?: any;
}

/**
 * Interface defining the options available for rendering edges
 */
export interface EdgeOptions {
    shortening: number;
}
