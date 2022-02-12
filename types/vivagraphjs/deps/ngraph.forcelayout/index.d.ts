import ngraph = require('../ngraph.graph');
export = createLayout;
/**
 * Creates force based layout for a given graph.
 *
 * {ngraph.graph} graph which needs to be laid out
 * {object} physicsSettings if you need custom settings
 * for physics simulator you can pass your own settings here. If it's not passed
 * a default one will be created.
 */
declare function createLayout(
    graph: ngraph.Graph,
    physicsSettings: object,
): {
    /**
     * Performs one step of iterative layout algorithm
     *
     * returns {boolean} true if the system should be considered stable; Flase otherwise.
     * The system is stable if no further call to `step()` can improve the layout.
     */
    step: () => boolean;
    /**
     * For a given `nodeId` returns position
     */
    getNodePosition: (nodeId: string) => any;
    /**
     * Sets position of a node to a given coordinates
     * {string} nodeId node identifier
     * {number} x position of a node
     * {number} y position of a node
     * {number=} z position of node (only if applicable to body)
     */
    setNodePosition: (nodeId: string, ...args: any[]) => void;
    /**
     * returns {object} Link position by link id
     * returns {object.from} {x, y} coordinates of link start
     * returns {object.to} {x, y} coordinates of link end
     */
    getLinkPosition: (linkId: string) => object;
    /**
     * returns {object} area required to fit in the graph. object contains
     * `x1`, `y1` - top left coordinates
     * `x2`, `y2` - bottom right coordinates
     */
    getGraphRect: () => { x1: number; y1: number; x2: number; y2: number; };
    /**
     * Iterates over each body in the layout simulator and performs a callback(body, nodeId)
     */
    forEachBody: (cb: any) => void;
    pinNode: (node: any, isPinned: any) => void;
    /**
     * Checks whether given graph's node is currently pinned
     */
    isNodePinned: (node: any) => any;
    /**
     * Request to release all resources
     */
    dispose: () => void;
    /**
     * Gets physical body for a given node id. If node is not found undefined
     * value is returned.
     */
    getBody: (nodeId: any) => any;
    /**
     * Gets spring for a given edge.
     *
     * {string} linkId link identifer. If two arguments are passed then
     * this argument is treated as formNodeId
     * {string=} toId when defined this parameter denotes head of the link
     * and first argument is trated as tail of the link (fromId)
     */
    getSpring: (fromId: any, toId: any) => any;
    /**
     * [Read only] Gets current physics simulator
     */
    simulator: any;
    /**
     * Gets the graph that was used for layout
     */
    graph: typeof import('../ngraph.graph');
    /**
     * Gets amount of movement performed during last step opeartion
     */
    lastMove: number;
};
// eslint-disable-next-line no-redeclare
declare namespace createLayout {
    export { simulator };
}
declare let simulator: any;
