export = renderer;
/**
 * This is heart of the rendering. Class accepts graph to be rendered and rendering settings.
 * It monitors graph changes and depicts them accordingly.
 *
 * @param graph - Viva.Graph.graph() object to be rendered.
 * @param settings - rendering settings, composed from the following parts (with their defaults shown):
 *   settings = {
 *     // Represents a module that is capable of displaying graph nodes and links.
 *     // all graphics has to correspond to defined interface and can be later easily
 *     // replaced for specific needs (e.g. adding WebGL should be piece of cake as long
 *     // as WebGL has implemented required interface). See svgGraphics for example.
 *     graphics : Viva.Graph.View.svgGraphics(),
 *
 *     // Where the renderer should draw graph. Container size matters, because
 *     // renderer will attempt center graph to that size. Also graphics modules
 *     // might depend on it.
 *     container : document.body,
 *
 *     // Defines whether graph can respond to use input
 *     interactive: true,
 *
 *     // Layout algorithm to be used. The algorithm is expected to comply with defined
 *     // interface and is expected to be iterative. Renderer will use it then to calculate
 *     // graph's layout. For examples of the interface refer to Viva.Graph.Layout.forceDirected()
 *     layout : Viva.Graph.Layout.forceDirected(),
 *
 *     // Directs renderer to display links. Usually rendering links is the slowest part of this
 *     // library. So if you don't need to display links, consider settings this property to false.
 *     renderLinks : true,
 *
 *     // Number of layout iterations to run before displaying the graph. The bigger you set this number
 *     // the closer to ideal position graph will appear first time. But be careful: for large graphs
 *     // it can freeze the browser.
 *     prerender : 0
 *   }
 */
declare function renderer(graph: any, settings?: any): {
    /**
     * Performs rendering of the graph.
     *
     * @param iterationsCount if specified renderer will run only given number of iterations
     * and then stop. Otherwise graph rendering is performed indefinitely.
     *
     * Note: if rendering stopped by used started dragging nodes or new nodes were added to the
     * graph renderer will give run more iterations to reflect changes.
     */
    run: (iterationsCount?: any) => any;
    reset: () => void;
    pause: () => void;
    resume: () => void;
    rerender: () => any;
    zoomOut: () => number;
    zoomIn: () => number;
    /**
     * Returns current transformation matrix.
     */
    getTransform: () => {
        offsetX: number;
        offsetY: number;
        scale: number;
    };
    /**
     * Centers renderer at x,y graph's coordinates
     */
    moveTo: (x: any, y: any) => void;
    /**
     * Gets current graphics object
     */
    getGraphics: () => any;
    /**
     * Gets current layout.
     */
    getLayout: () => any;
    /**
     * Removes this renderer and deallocates all resources/timers
     */
    dispose: () => void;
    on: (eventName: any, callback: any) => any;
    off: (eventName: any, callback: any) => any;
};
