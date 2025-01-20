import { NodeUpdateType } from "./constants.js";
import InputNode from "./InputNode.js";
import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";
import NodeFrame from "./NodeFrame.js";
import UniformGroupNode from "./UniformGroupNode.js";
/** @module UniformNode **/
/**
 * Class for representing a uniform.
 *
 * @augments InputNode
 */
declare class UniformNode<TValue> extends InputNode<TValue> {
    static get type(): string;
    readonly isUniformNode: true;
    name: string;
    groupNode: UniformGroupNode;
    /**
     * Constructs a new uniform node.
     *
     * @param {Any} value - The value of this node. Usually a JS primitive or three.js object (vector, matrix, color, texture).
     * @param {String?} nodeType - The node type. If no explicit type is defined, the node tries to derive the type from its value.
     */
    constructor(value: TValue, nodeType?: string | null);
    /**
     * Sets the {@link UniformNode#name} property.
     *
     * @param {String} name - The name of the uniform.
     * @return {UniformNode} A reference to this node.
     */
    label(name: string): this;
    /**
     * Sets the {@link UniformNode#groupNode} property.
     *
     * @param {UniformGroupNode} group - The uniform group.
     * @return {UniformNode} A reference to this node.
     */
    setGroup(group: UniformGroupNode): this;
    /**
     * Returns the {@link UniformNode#groupNode}.
     *
     * @return {UniformGroupNode} The uniform group.
     */
    getGroup(): UniformGroupNode;
    /**
     * By default, this method returns the result of {@link Node#getHash} but derived
     * classes might overwrite this method with a different implementation.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {String} The uniform hash.
     */
    getUniformHash(builder: NodeBuilder): string;
    onUpdate(callback: (frame: NodeFrame, self: this) => TValue | undefined, updateType: NodeUpdateType): this;
    generate(builder: NodeBuilder, output: string | null): string;
}
export default UniformNode;
/**
 * TSL function for creating a uniform node.
 *
 * @function
 * @param {Any} arg1 - The value of this node. Usually a JS primitive or three.js object (vector, matrix, color, texture).
 * @param {String?} arg2 - The node type. If no explicit type is defined, the node tries to derive the type from its value.
 * @returns {UniformNode}
 */
export declare const uniform: <TValue>(
    arg1: InputNode<TValue> | TValue,
    arg2?: Node | string,
) => import("../tsl/TSLCore.js").ShaderNodeObject<UniformNode<TValue>>;
