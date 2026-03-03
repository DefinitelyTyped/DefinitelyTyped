import { Color } from "../../math/Color.js";
import { Matrix2 } from "../../math/Matrix2.js";
import { Matrix3 } from "../../math/Matrix3.js";
import { Matrix4 } from "../../math/Matrix4.js";
import { Vector2 } from "../../math/Vector2.js";
import { Vector3 } from "../../math/Vector3.js";
import { Vector4 } from "../../math/Vector4.js";
import { NodeUpdateType } from "./constants.js";
import InputNode from "./InputNode.js";
import NodeBuilder from "./NodeBuilder.js";
import NodeFrame from "./NodeFrame.js";
import UniformGroupNode from "./UniformGroupNode.js";

/**
 * Class for representing a uniform.
 *
 * @augments InputNode
 */
declare class UniformNodeClass<TValue> extends InputNode<unknown, TValue> {
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isUniformNode: boolean;
    /**
     * The uniform group of this uniform. By default, uniforms are
     * managed per object but they might belong to a shared group
     * which is updated per frame or render call.
     *
     * @type {UniformGroupNode}
     */
    groupNode: UniformGroupNode;
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
    getInputType(builder: NodeBuilder): string;
    generate(builder: NodeBuilder, output: string | null): string;
}

declare const UniformNode: {
    /**
     * Constructs a new uniform node.
     *
     * @param {any} value - The value of this node. Usually a JS primitive or three.js object (vector, matrix, color, texture).
     * @param {?string} nodeType - The node type. If no explicit type is defined, the node tries to derive the type from its value.
     */
    new<TNodeType, TValue>(value: TValue, nodeType?: string | null): UniformNode<TNodeType, TValue>;
};

type UniformNode<TNodeType, TValue> = UniformNodeClass<TValue> & InputNode<TNodeType, TValue>;

export default UniformNode;

interface Uniform {
    (value: number, type?: "float"): UniformNode<"float", number>;
    (value: boolean): UniformNode<"bool", boolean>;
    (value: Vector2): UniformNode<"vec2", Vector2>;
    (value: Vector3): UniformNode<"vec3", Vector3>;
    (value: Vector4): UniformNode<"vec4", Vector4>;
    (value: Matrix2): UniformNode<"mat2", Matrix2>;
    (value: Matrix3): UniformNode<"mat3", Matrix3>;
    (value: Matrix4): UniformNode<"mat4", Matrix4>;
    (value: Color): UniformNode<"color", Color>;
    <TNodeType, TValue>(value: InputNode<TNodeType, TValue>): UniformNode<TNodeType, TValue>;
}

/**
 * TSL function for creating a uniform node.
 *
 * @function
 * @param {any|string} value - The value of this uniform or your type. Usually a JS primitive or three.js object (vector, matrix, color, texture).
 * @param {string} [type] - The node type. If no explicit type is defined, the node tries to derive the type from its value.
 * @returns {UniformNode}
 */
export declare const uniform: Uniform;
