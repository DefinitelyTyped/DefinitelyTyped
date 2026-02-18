import { Color } from "../../../math/Color.js";
import { Matrix2 } from "../../../math/Matrix2.js";
import { Matrix3 } from "../../../math/Matrix3.js";
import { Matrix4 } from "../../../math/Matrix4.js";
import { Vector2 } from "../../../math/Vector2.js";
import { Vector3 } from "../../../math/Vector3.js";
import { Vector4 } from "../../../math/Vector4.js";
import NodeUniform from "../../../nodes/core/NodeUniform.js";
import {
    ColorUniform,
    Matrix2Uniform,
    Matrix3Uniform,
    Matrix4Uniform,
    NumberUniform,
    Vector2Uniform,
    Vector3Uniform,
    Vector4Uniform,
} from "../Uniform.js";

/**
 * A special form of Number uniform binding type.
 * It's value is managed by a node object.
 *
 * @private
 * @augments NumberUniform
 */
export class NumberNodeUniform<TNodeType> extends NumberUniform {
    /**
     * Constructs a new node-based Number uniform.
     *
     * @param {NodeUniform} nodeUniform - The node uniform.
     */
    constructor(nodeUniform: NodeUniform<TNodeType, number>);
    /**
     * The node uniform.
     *
     * @type {NodeUniform}
     */
    nodeUniform: NodeUniform<TNodeType, number>;
    /**
     * Overwritten to return the value of the node uniform.
     *
     * @return {number} The value.
     */
    getValue(): number;
    /**
     * Returns the node uniform data type.
     *
     * @return {string} The data type.
     */
    getType(): string;
}
/**
 * A special form of Vector2 uniform binding type.
 * It's value is managed by a node object.
 *
 * @private
 * @augments Vector2Uniform
 */
export class Vector2NodeUniform<TNodeType> extends Vector2Uniform {
    /**
     * Constructs a new node-based Vector2 uniform.
     *
     * @param {NodeUniform} nodeUniform - The node uniform.
     */
    constructor(nodeUniform: NodeUniform<TNodeType, Vector2>);
    /**
     * The node uniform.
     *
     * @type {NodeUniform}
     */
    nodeUniform: NodeUniform<TNodeType, Vector2>;
    /**
     * Returns the node uniform data type.
     *
     * @return {string} The data type.
     */
    getType(): string;
}
/**
 * A special form of Vector3 uniform binding type.
 * It's value is managed by a node object.
 *
 * @private
 * @augments Vector3Uniform
 */
export class Vector3NodeUniform<TNodeType> extends Vector3Uniform {
    /**
     * Constructs a new node-based Vector3 uniform.
     *
     * @param {NodeUniform} nodeUniform - The node uniform.
     */
    constructor(nodeUniform: NodeUniform<TNodeType, Vector3>);
    /**
     * The node uniform.
     *
     * @type {NodeUniform}
     */
    nodeUniform: NodeUniform<TNodeType, Vector3>;
    /**
     * Returns the node uniform data type.
     *
     * @return {string} The data type.
     */
    getType(): string;
}
/**
 * A special form of Vector4 uniform binding type.
 * It's value is managed by a node object.
 *
 * @private
 * @augments Vector4Uniform
 */
export class Vector4NodeUniform<TNodeType> extends Vector4Uniform {
    /**
     * Constructs a new node-based Vector4 uniform.
     *
     * @param {NodeUniform} nodeUniform - The node uniform.
     */
    constructor(nodeUniform: NodeUniform<TNodeType, Vector4>);
    /**
     * The node uniform.
     *
     * @type {NodeUniform}
     */
    nodeUniform: NodeUniform<TNodeType, Vector4>;
    /**
     * Returns the node uniform data type.
     *
     * @return {string} The data type.
     */
    getType(): string;
}
/**
 * A special form of Color uniform binding type.
 * It's value is managed by a node object.
 *
 * @private
 * @augments ColorUniform
 */
export class ColorNodeUniform<TNodeType> extends ColorUniform {
    /**
     * Constructs a new node-based Color uniform.
     *
     * @param {NodeUniform} nodeUniform - The node uniform.
     */
    constructor(nodeUniform: NodeUniform<TNodeType, Color>);
    /**
     * The node uniform.
     *
     * @type {NodeUniform}
     */
    nodeUniform: NodeUniform<TNodeType, Color>;
    /**
     * Returns the node uniform data type.
     *
     * @return {string} The data type.
     */
    getType(): string;
}
/**
 * A special form of Matrix2 uniform binding type.
 * It's value is managed by a node object.
 *
 * @private
 * @augments Matrix2Uniform
 */
export class Matrix2NodeUniform<TNodeType> extends Matrix2Uniform {
    /**
     * Constructs a new node-based Matrix2 uniform.
     *
     * @param {NodeUniform} nodeUniform - The node uniform.
     */
    constructor(nodeUniform: NodeUniform<TNodeType, Matrix2>);
    /**
     * The node uniform.
     *
     * @type {NodeUniform}
     */
    nodeUniform: NodeUniform<TNodeType, Matrix2>;
    /**
     * Returns the node uniform data type.
     *
     * @return {string} The data type.
     */
    getType(): string;
}
/**
 * A special form of Matrix3 uniform binding type.
 * It's value is managed by a node object.
 *
 * @private
 * @augments Matrix3Uniform
 */
export class Matrix3NodeUniform<TNodeType> extends Matrix3Uniform {
    /**
     * Constructs a new node-based Matrix3 uniform.
     *
     * @param {NodeUniform} nodeUniform - The node uniform.
     */
    constructor(nodeUniform: NodeUniform<TNodeType, Matrix3>);
    /**
     * The node uniform.
     *
     * @type {NodeUniform}
     */
    nodeUniform: NodeUniform<TNodeType, Matrix3>;
    /**
     * Returns the node uniform data type.
     *
     * @return {string} The data type.
     */
    getType(): string;
}
/**
 * A special form of Matrix4 uniform binding type.
 * It's value is managed by a node object.
 *
 * @private
 * @augments Matrix4Uniform
 */
export class Matrix4NodeUniform<TNodeType> extends Matrix4Uniform {
    /**
     * Constructs a new node-based Matrix4 uniform.
     *
     * @param {NodeUniform} nodeUniform - The node uniform.
     */
    constructor(nodeUniform: NodeUniform<TNodeType, Matrix4>);
    /**
     * The node uniform.
     *
     * @type {NodeUniform}
     */
    nodeUniform: NodeUniform<TNodeType, Matrix4>;
    /**
     * Returns the node uniform data type.
     *
     * @return {string} The data type.
     */
    getType(): string;
}

export type NodeUniformGPU =
    | NumberNodeUniform<unknown>
    | Vector2NodeUniform<unknown>
    | Vector3NodeUniform<unknown>
    | Vector4NodeUniform<unknown>
    | ColorNodeUniform<unknown>
    | Matrix3NodeUniform<unknown>
    | Matrix4NodeUniform<unknown>;
