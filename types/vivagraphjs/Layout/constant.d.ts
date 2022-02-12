import Rect = require('../Utils/rect.js');
export = constant;

declare function constant(
    graph: typeof import('../deps/ngraph.graph'),
    userSettings: { maxX: number; maxY: number; seed: string; },
): Constant;

interface Constant {
    /**
     * Attempts to layout graph within given number of iterations.
     *
     *  [iterationsCount] number of algorithm's iterations.
     *  The constant layout ignores this parameter.
     */
    run: (iterationsCount?: number) => void;
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
    isNodePinned: (node: Element) => boolean;
    pinNode: (node: Element, isPinned: boolean) => void;
    getNodePosition: (nodeId: string) => NodePosition;
    /**
     * Returns {from, to} position of a link.
     */
    getLinkPosition: (linkId: string) => { from: number; to: number; };
    /**
     * Sets position of a node to a given coordinates
     */
    setNodePosition: (nodeId: string, x: number, y: number) => void;
    /**
     * Based on argument either update default node placement callback or
     * attempts to place given node using current placement callback.
     * Setting new node callback triggers position update for all nodes.
     *
     * newPlaceNodeCallbackOrNode - if it is a function then
     * default node placement callback is replaced with new one. Node placement
     * callback has a form of function (node) {}, and is expected to return an
     * object with x and y properties set to numbers.
     *
     * Otherwise if it's not a function the argument is treated as graph node
     * and current node placement callback will be used to place it.
     */
    placeNode(newPlaceNodeCallbackOrNode: (node: Element) => NodePosition): NodePosition;
    placeNode(this: ThisType<Constant>, point: NodePosition): this;
}

interface NodePosition { x: number; y: number; }
