export = constant;
/**
 * Does not really perform any layouting algorithm but is compliant
 * with renderer interface. Allowing clients to provide specific positioning
 * callback and get static layout of the graph
 *
 * @param {Viva.Graph.graph} graph to layout
 * @param {Object} userSettings
 */
declare function constant(graph: typeof import('../deps/ngraph.graph'), userSettings: Object): {
    /**
     * Attempts to layout graph within given number of iterations.
     *
     * @param {integer} [iterationsCount] number of algorithm's iterations.
     *  The constant layout ignores this parameter.
     */
    run: (iterationsCount?: any) => void;
    /**
     * One step of layout algorithm.
     */
    step: () => boolean;
    /**
     * Returns rectangle structure {x1, y1, x2, y2}, which represents
     * current space occupied by graph.
     */
    getGraphRect: () => Rect;
    /**
     * Request to release all resources
     */
    dispose: () => void;
    isNodePinned: (node: any) => boolean;
    pinNode: (node: any, isPinned: any) => void;
    getNodePosition: (nodeId: any) => any;
    /**
     * Returns {from, to} position of a link.
     */
    getLinkPosition: (linkId: any) => {
        from: any;
        to: any;
    };
    /**
     * Sets position of a node to a given coordinates
     */
    setNodePosition: (nodeId: any, x: any, y: any) => void;
    /**
     * Based on argument either update default node placement callback or
     * attempts to place given node using current placement callback.
     * Setting new node callback triggers position update for all nodes.
     *
     * @param {Object} newPlaceNodeCallbackOrNode - if it is a function then
     * default node placement callback is replaced with new one. Node placement
     * callback has a form of function (node) {}, and is expected to return an
     * object with x and y properties set to numbers.
     *
     * Otherwise if it's not a function the argument is treated as graph node
     * and current node placement callback will be used to place it.
     */
    placeNode: (newPlaceNodeCallbackOrNode: Object) => any | {
        x: any;
        y: any;
    };
};
import Rect = require("../Utils/rect.js");
