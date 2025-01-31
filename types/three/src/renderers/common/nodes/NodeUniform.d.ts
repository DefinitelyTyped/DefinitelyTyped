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
declare class NumberNodeUniform extends NumberUniform {
    nodeUniform: NodeUniform<number>;
    /**
     * Constructs a new node-based Number uniform.
     *
     * @param {NodeUniform} nodeUniform - The node uniform.
     */
    constructor(nodeUniform: NodeUniform<number>);
    /**
     * Overwritten to return the value of the node uniform.
     *
     * @return {Number} The value.
     */
    getValue(): number;
    /**
     * Returns the node uniform data type.
     *
     * @return {String} The data type.
     */
    getType(): string | null;
}
/**
 * A special form of Vector2 uniform binding type.
 * It's value is managed by a node object.
 *
 * @private
 * @augments Vector2Uniform
 */
declare class Vector2NodeUniform extends Vector2Uniform {
    nodeUniform: NodeUniform<Vector2>;
    /**
     * Constructs a new node-based Vector2 uniform.
     *
     * @param {NodeUniform} nodeUniform - The node uniform.
     */
    constructor(nodeUniform: NodeUniform<Vector2>);
    /**
     * Overwritten to return the value of the node uniform.
     *
     * @return {Vector2} The value.
     */
    getValue(): Vector2;
    /**
     * Returns the node uniform data type.
     *
     * @return {String} The data type.
     */
    getType(): string | null;
}
/**
 * A special form of Vector3 uniform binding type.
 * It's value is managed by a node object.
 *
 * @private
 * @augments Vector3Uniform
 */
declare class Vector3NodeUniform extends Vector3Uniform {
    nodeUniform: NodeUniform<Vector3>;
    /**
     * Constructs a new node-based Vector3 uniform.
     *
     * @param {NodeUniform} nodeUniform - The node uniform.
     */
    constructor(nodeUniform: NodeUniform<Vector3>);
    /**
     * Overwritten to return the value of the node uniform.
     *
     * @return {Vector3} The value.
     */
    getValue(): Vector3;
    /**
     * Returns the node uniform data type.
     *
     * @return {String} The data type.
     */
    getType(): string | null;
}
/**
 * A special form of Vector4 uniform binding type.
 * It's value is managed by a node object.
 *
 * @private
 * @augments Vector4Uniform
 */
declare class Vector4NodeUniform extends Vector4Uniform {
    nodeUniform: NodeUniform<Vector4>;
    /**
     * Constructs a new node-based Vector4 uniform.
     *
     * @param {NodeUniform} nodeUniform - The node uniform.
     */
    constructor(nodeUniform: NodeUniform<Vector4>);
    /**
     * Overwritten to return the value of the node uniform.
     *
     * @return {Vector4} The value.
     */
    getValue(): Vector4;
    /**
     * Returns the node uniform data type.
     *
     * @return {String} The data type.
     */
    getType(): string | null;
}
/**
 * A special form of Color uniform binding type.
 * It's value is managed by a node object.
 *
 * @private
 * @augments ColorUniform
 */
declare class ColorNodeUniform extends ColorUniform {
    nodeUniform: NodeUniform<Color>;
    /**
     * Constructs a new node-based Color uniform.
     *
     * @param {NodeUniform} nodeUniform - The node uniform.
     */
    constructor(nodeUniform: NodeUniform<Color>);
    /**
     * Overwritten to return the value of the node uniform.
     *
     * @return {Color} The value.
     */
    getValue(): Color;
    /**
     * Returns the node uniform data type.
     *
     * @return {String} The data type.
     */
    getType(): string | null;
}
/**
 * A special form of Matrix2 uniform binding type.
 * It's value is managed by a node object.
 *
 * @private
 * @augments Matrix2Uniform
 */
declare class Matrix2NodeUniform extends Matrix2Uniform {
    nodeUniform: NodeUniform<Matrix2>;
    /**
     * Constructs a new node-based Matrix2 uniform.
     *
     * @param {NodeUniform} nodeUniform - The node uniform.
     */
    constructor(nodeUniform: NodeUniform<Matrix2>);
    /**
     * Overwritten to return the value of the node uniform.
     *
     * @return {Matrix2} The value.
     */
    getValue(): Matrix2;
    /**
     * Returns the node uniform data type.
     *
     * @return {String} The data type.
     */
    getType(): string | null;
}
/**
 * A special form of Matrix3 uniform binding type.
 * It's value is managed by a node object.
 *
 * @private
 * @augments Matrix3Uniform
 */
declare class Matrix3NodeUniform extends Matrix3Uniform {
    nodeUniform: NodeUniform<Matrix3>;
    /**
     * Constructs a new node-based Matrix3 uniform.
     *
     * @param {NodeUniform} nodeUniform - The node uniform.
     */
    constructor(nodeUniform: NodeUniform<Matrix3>);
    /**
     * Overwritten to return the value of the node uniform.
     *
     * @return {Matrix3} The value.
     */
    getValue(): Matrix3;
    /**
     * Returns the node uniform data type.
     *
     * @return {String} The data type.
     */
    getType(): string | null;
}
/**
 * A special form of Matrix4 uniform binding type.
 * It's value is managed by a node object.
 *
 * @private
 * @augments Matrix4Uniform
 */
declare class Matrix4NodeUniform extends Matrix4Uniform {
    nodeUniform: NodeUniform<Matrix4>;
    /**
     * Constructs a new node-based Matrix4 uniform.
     *
     * @param {NodeUniform} nodeUniform - The node uniform.
     */
    constructor(nodeUniform: NodeUniform<Matrix4>);
    /**
     * Overwritten to return the value of the node uniform.
     *
     * @return {Matrix4} The value.
     */
    getValue(): Matrix4;
    /**
     * Returns the node uniform data type.
     *
     * @return {String} The data type.
     */
    getType(): string | null;
}
export {
    ColorNodeUniform,
    Matrix2NodeUniform,
    Matrix3NodeUniform,
    Matrix4NodeUniform,
    NumberNodeUniform,
    Vector2NodeUniform,
    Vector3NodeUniform,
    Vector4NodeUniform,
};
export type NodeUniformGPU =
    | NumberNodeUniform
    | Vector2NodeUniform
    | Vector3NodeUniform
    | Vector4NodeUniform
    | ColorNodeUniform
    | Matrix3NodeUniform
    | Matrix4NodeUniform;
