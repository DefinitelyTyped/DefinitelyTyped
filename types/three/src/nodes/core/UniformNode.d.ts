import { NodeUpdateType } from "./constants.js";
import InputNode from "./InputNode.js";
import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";
import NodeFrame from "./NodeFrame.js";
import UniformGroupNode from "./UniformGroupNode.js";
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
     * @param {any} value - The value of this node. Usually a JS primitive or three.js object (vector, matrix, color, texture).
     * @param {?string} nodeType - The node type. If no explicit type is defined, the node tries to derive the type from its value.
     */
    constructor(value: TValue, nodeType?: string | null);
    /**
     * Sets the {@link UniformNode#name} property.
     *
     * @param {string} name - The name of the uniform.
     * @return {UniformNode} A reference to this node.
     */
    setName(name: string): this;
    /**
     * Sets the {@link UniformNode#name} property.
     *
     * @deprecated
     * @param {string} name - The name of the uniform.
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
     * @return {string} The uniform hash.
     */
    getUniformHash(builder: NodeBuilder): string;
    onUpdate(callback: (frame: NodeFrame, self: this) => TValue | undefined, updateType: NodeUpdateType): this;
    getInputType(builder: NodeBuilder): string | null;
    generate(builder: NodeBuilder, output: string | null): string;
}
export default UniformNode;
/**
 * TSL function for creating a uniform node.
 *
 * @tsl
 * @function
 * @param {any|string} value - The value of this uniform or your type. Usually a JS primitive or three.js object (vector, matrix, color, texture).
 * @param {string} [type] - The node type. If no explicit type is defined, the node tries to derive the type from its value.
 * @returns {UniformNode}
 */
export declare const uniform: <TValue>(
    value: InputNode<TValue> | TValue,
    type?: Node | string,
) => import("../tsl/TSLCore.js").ShaderNodeObject<UniformNode<TValue>>;
