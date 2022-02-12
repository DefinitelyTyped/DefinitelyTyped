export = svgGraphics;
/**
 * Performs svg-based graph rendering. This module does not perform
 * layout, but only visualizes nodes and edges of the graph.
 */
declare function svgGraphics(): {
    getNodeUI: (nodeId: any) => any;
    getLinkUI: (linkId: any) => any;
    /**
     * Sets the callback that creates node representation.
     *
     * @param builderCallback a callback function that accepts graph node
     * as a parameter and must return an element representing this node.
     *
     * @returns If builderCallbackOrNode is a valid callback function, instance of this is returned;
     * Otherwise undefined value is returned
     */
    node: (builderCallback: any) => any | undefined;
    /**
     * Sets the callback that creates link representation
     *
     * @param builderCallback a callback function that accepts graph link
     * as a parameter and must return an element representing this link.
     *
     * @returns If builderCallback is a valid callback function, instance of this is returned;
     * Otherwise undefined value is returned.
     */
    link: (builderCallback: any) => any | undefined;
    /**
     * Allows to override default position setter for the node with a new
     * function. newPlaceCallback(nodeUI, position, node) is function which
     * is used by updateNodePosition().
     */
    placeNode: (newPlaceCallback: any) => any;
    placeLink: (newPlaceLinkCallback: any) => any;
    /**
     * Called every before renderer starts rendering.
     */
    beginRender: () => void;
    /**
     * Called every time when renderer finishes one step of rendering.
     */
    endRender: () => void;
    /**
     * Sets translate operation that should be applied to all nodes and links.
     */
    graphCenterChanged: (x: any, y: any) => void;
    /**
     * Default input manager listens to DOM events to process nodes drag-n-drop
     */
    inputManager: typeof domInputManager;
    translateRel: (dx: any, dy: any) => void;
    scale: (scaleFactor: any, scrollPoint: any) => number;
    resetScale: () => any;
    /**
     * Called by Viva.Graph.View.renderer to let concrete graphic output
     * provider prepare to render.
     */
    init: (container: any) => void;
    /**
     * Called by Viva.Graph.View.renderer to let concrete graphic output
     * provider release occupied resources.
     */
    release: (container: any) => void;
    /**
     * Called by Viva.Graph.View.renderer to let concrete graphic output
     * provider prepare to render given link of the graph
     *
     * @param link - model of a link
     */
    addLink: (link: any, pos: any) => any;
    /**
     * Called by Viva.Graph.View.renderer to let concrete graphic output
     * provider remove link from rendering surface.
     *
     * @param linkUI visual representation of the link created by link() execution.
     **/
    releaseLink: (link: any) => void;
    /**
     * Called by Viva.Graph.View.renderer to let concrete graphic output
     * provider prepare to render given node of the graph.
     *
     * @param nodeUI visual representation of the node created by node() execution.
     **/
    addNode: (node: any, pos: any) => any;
    /**
     * Called by Viva.Graph.View.renderer to let concrete graphic output
     * provider remove node from rendering surface.
     *
     * @param node graph's node
     **/
    releaseNode: (node: any) => void;
    renderNodes: () => void;
    renderLinks: () => void;
    /**
     * Returns root element which hosts graphics.
     */
    getGraphicsRoot: (callbackWhenReady: any) => any;
    /**
     * Returns root SVG element.
     *
     * Note: This is internal method specific to this renderer
     */
    getSvgRoot: () => any;
};
import domInputManager = require("../Input/domInputManager.js");
