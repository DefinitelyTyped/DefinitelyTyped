import domInputManager = require('../Input/domInputManager.js');
import ngraph = require('../deps/ngraph.graph');
import svg = require('../deps/simplesvg');

export = svgGraphics;

/* tslint:disable:no-unnecessary-generics */
interface Position { x: number; y: number; }
type NodeUI<Data, ExtraData> = ngraph.Node<Data> & { position: Position; node: Element; } & svg.SimpleSvg & ExtraData;
type LinkUI<Data, ExtraData> = ngraph.Link<Data> & { position: { from: Position; to: Position; }; link: Element; } & svg.SimpleSvg & ExtraData;

/**
 * Performs svg-based graph rendering. This module does not perform
 * layout, but only visualizes nodes and edges of the graph.
 */

declare function svgGraphics<NodeData = {}, LinkData = {}, ExtraDataNode = {}, ExtraDataLink = {}>(): SvgGraphics<NodeData, LinkData, ExtraDataNode, ExtraDataLink>;

interface SvgGraphics<NodeData = {}, LinkData = {}, ExtraDataNode = {}, ExtraDataLink = {}> {
    getNodeUI: (nodeId: ngraph.NodeId) => NodeUI<NodeData, ExtraDataNode>;
    getLinkUI: (linkId: ngraph.LinkId) => LinkUI<LinkData, ExtraDataLink>;
    /**
     * Sets the callback that creates node representation.
     *
     * builderCallback a callback function that accepts graph node
     * as a parameter and must return an element representing this node.
     *
     * returns If builderCallbackOrNode is a valid callback function, instance of this is returned;
     * Otherwise undefined value is returned
     */
    node<D = NodeData, E = ExtraDataNode>(builderCallback: (node: ngraph.Node) => { id: ngraph.Node[ 'id' ]; }): SvgGraphics<D, LinkData, E, ExtraDataLink>;
    /**
     * Sets the callback that creates link representation
     *
     * builderCallback a callback function that accepts graph link
     * as a parameter and must return an element representing this link.
     *
     * returns If builderCallback is a valid callback function, instance of this is returned;
     * Otherwise undefined value is returned.
     */
    link<D = LinkData, L = ExtraDataLink>(builderCallback: (link: ngraph.Link) => { id: ngraph.Link[ 'id' ]; }): SvgGraphics<NodeData, D, ExtraDataNode, L>;

    /**
     * Allows to override default position setter for the node with a new
     * function. newPlaceCallback(nodeUI, position, node) is function which
     * is used by updateNodePosition().
     */
    placeNode(newPlaceCallback: (nodeUI: NodeUI<NodeData, ExtraDataNode>, pos: Position) => void): this;
    placeLink(newPlaceCallback: (linkUI: LinkUI<LinkData, ExtraDataLink>, fromPos: Position, toPos: Position) => void): this;
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
    graphCenterChanged: (x: number, y: number) => void;
    /**
     * Default input manager listens to DOM events to process nodes drag-n-drop
     */
    inputManager: typeof domInputManager;
    translateRel: (dx: number, dy: number) => void;
    scale: (scaleFactor: number, scrollPoint: Position) => number;
    resetScale(): this;
    /**
     * Called by Viva.Graph.View.renderer to let concrete graphic output
     * provider prepare to render.
     */
    init: (container: Element) => void;
    /**
     * Called by Viva.Graph.View.renderer to let concrete graphic output
     * provider release occupied resources.
     */
    release: (container: Element) => void;
    /**
     * Called by Viva.Graph.View.renderer to let concrete graphic output
     * provider prepare to render given link of the graph
     *
     * link - model of a link
     */
    addLink: (link: ngraph.Link, pos: Position) => LinkUI<LinkData, ExtraDataLink>;
    /**
     * Called by Viva.Graph.View.renderer to let concrete graphic output
     * provider remove link from rendering surface.
     *
     * linkUI visual representation of the link created by link() execution.
     */
    releaseLink: (link: ngraph.Link) => void;
    /**
     * Called by Viva.Graph.View.renderer to let concrete graphic output
     * provider prepare to render given node of the graph.
     *
     * nodeUI visual representation of the node created by node() execution.
     */
    addNode: (node: ngraph.Node, pos: Position) => NodeUI<NodeData, ExtraDataNode>;
    /**
     * Called by Viva.Graph.View.renderer to let concrete graphic output
     * provider remove node from rendering surface.
     *
     * node graph's node
     */
    releaseNode: (node: ngraph.Node) => void;
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
    getSvgRoot: () => svg.SimpleSvg;
}
