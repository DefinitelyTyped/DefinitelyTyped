import ContextNode from "./ContextNode.js";
import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";

/**
 * A specialized context node designed to override specific target nodes within a
 * node sub-graph or flow. This allows replacing specific inputs (e.g., normal
 * and position vectors) dynamically during compilation for a specific flow node,
 * without having to reconstruct or duplicate the source nodes.
 *
 * ```js
 * // Method chaining example:
 * node.overrideNode( positionLocal, () => positionLocal.add( vec3( 1, 0, 0 ) ) );
 *
 * // Context assignment example:
 * material.contextNode = overrideNode( positionLocal, () => positionLocal.add( vec3( 1, 0, 0 ) ) );
 * ```
 *
 * @augments ContextNode
 */
declare class OverrideContextNode extends ContextNode<unknown> {
    /**
     * Constructs a new override context node.
     *
     * @param {Map<Node, Function>} overrideNodes - A map mapping target nodes to their respective override callback functions.
     * @param {Node|null} [flowNode=null] - The node whose context should be modified.
     */
    constructor(overrideNodes: Map<Node, (nodeBuilder: NodeBuilder) => Node>, flowNode?: Node | null);
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isOverrideContextNode: boolean;
}

export default OverrideContextNode;

/**
 * TSL function for creating an `OverrideContextNode` to override a single target node.
 *
 * ```js
 * material.contextNode = overrideNode( positionLocal, ( builder ) => positionLocal.add( vec3( 1, 0, 0 ) ) );
 * ```
 *
 * @tsl
 * @function
 * @param {Node} targetNode - The target node that should be overridden.
 * @param {Function|Node|null} [callback=null] - A callback function returning the overriding node (which receives the builder as its argument), or the overriding node itself.
 * @param {Node|null} [flowNode=null] - The node whose context should be modified.
 * @return {OverrideContextNode} The created override context node.
 */
export function overrideNode(
    targetNode: Node,
    callback?: ((nodeBuilder: NodeBuilder) => Node) | Node | null,
    flowNode?: Node | null,
): OverrideContextNode;

/**
 * TSL function for creating an `OverrideContextNode` to override multiple target nodes.
 *
 * ```js
 * material.contextNode = overrideNodes( [
 * 	[ positionView, customPositionView ],
 * 	[ positionViewDirection, ( builder ) => customPositionViewDirection ]
 * ] );
 * ```
 *
 * @tsl
 * @function
 * @param {Map<Node, (Function|Node)>|Array<Array<Node|Function|Node>>} overrides - The overrides mapping target nodes to callback functions or overriding nodes.
 * @param {Node|null} [flowNode=null] - The node whose context should be modified.
 * @return {OverrideContextNode} The created override context node.
 */
export function overrideNodes(
    overrides:
        | Map<Node, ((nodeBuilder: NodeBuilder) => Node) | Node | null>
        | Array<[Node, ((nodeBuilder: NodeBuilder) => Node) | Node | null]>,
    flowNode?: Node | null,
): OverrideContextNode;

declare module "./Node.js" {
    interface NodeElements {
        overrideNodes: (
            overrides:
                | Map<Node, ((nodeBuilder: NodeBuilder) => Node) | Node | null>
                | Array<[Node, ((nodeBuilder: NodeBuilder) => Node) | Node | null]>,
        ) => OverrideContextNode;
    }
}
