import {
    ColorNodeUniform,
    Matrix3NodeUniform,
    Matrix4NodeUniform,
    NodeUniformGPU,
    NumberNodeUniform,
    Vector2NodeUniform,
    Vector3NodeUniform,
    Vector4NodeUniform,
} from "./nodes/NodeUniform.js";
import { Uniform } from "./Uniform.js";
import UniformBuffer from "./UniformBuffer.js";

/**
 * This class represents a uniform buffer binding but with
 * an API that allows to maintain individual uniform objects.
 *
 * @private
 * @augments UniformBuffer
 */
declare class UniformsGroup extends UniformBuffer {
    /**
     * Constructs a new uniforms group.
     *
     * @param {string} name - The group's name.
     */
    constructor(name: string);
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isUniformsGroup: boolean;
    /**
     * An array with the raw uniform values.
     *
     * @private
     * @type {?Array<number>}
     * @default null
     */
    private _values;
    /**
     * An array of uniform objects.
     *
     * The order of uniforms in this array must match the order of uniforms in the shader.
     *
     * @type {Array<Uniform>}
     */
    uniforms: NodeUniformGPU[];
    /**
     * A cache for the uniform update ranges.
     *
     * @private
     * @type {Map<number, {start: number, count: number}>}
     */
    private _updateRangeCache;
    /**
     * Adds a uniform's update range to this buffer.
     *
     * @param {Uniform} uniform - The uniform.
     */
    addUniformUpdateRange(uniform: Uniform<unknown>): void;
    /**
     * Adds a uniform to this group.
     *
     * @param {Uniform} uniform - The uniform to add.
     * @return {UniformsGroup} A reference to this group.
     */
    addUniform(uniform: NodeUniformGPU): this;
    /**
     * Removes a uniform from this group.
     *
     * @param {Uniform} uniform - The uniform to remove.
     * @return {UniformsGroup} A reference to this group.
     */
    removeUniform(uniform: NodeUniformGPU): this;
    /**
     * An array with the raw uniform values.
     *
     * @type {Array<number>}
     */
    get values(): number[];
    /**
     * Updates a given uniform by calling an update method matching
     * the uniforms type.
     *
     * @param {Uniform} uniform - The uniform to update.
     * @return {boolean} Whether the uniform has been updated or not.
     */
    updateByType(uniform: NodeUniformGPU): boolean;
    /**
     * Updates a given Number uniform.
     *
     * @param {NumberUniform} uniform - The Number uniform.
     * @return {boolean} Whether the uniform has been updated or not.
     */
    updateNumber(uniform: NumberNodeUniform<unknown>): boolean;
    /**
     * Updates a given Vector2 uniform.
     *
     * @param {Vector2Uniform} uniform - The Vector2 uniform.
     * @return {boolean} Whether the uniform has been updated or not.
     */
    updateVector2(uniform: Vector2NodeUniform<unknown>): boolean;
    /**
     * Updates a given Vector3 uniform.
     *
     * @param {Vector3Uniform} uniform - The Vector3 uniform.
     * @return {boolean} Whether the uniform has been updated or not.
     */
    updateVector3(uniform: Vector3NodeUniform<unknown>): boolean;
    /**
     * Updates a given Vector4 uniform.
     *
     * @param {Vector4Uniform} uniform - The Vector4 uniform.
     * @return {boolean} Whether the uniform has been updated or not.
     */
    updateVector4(uniform: Vector4NodeUniform<unknown>): boolean;
    /**
     * Updates a given Color uniform.
     *
     * @param {ColorUniform} uniform - The Color uniform.
     * @return {boolean} Whether the uniform has been updated or not.
     */
    updateColor(uniform: ColorNodeUniform<unknown>): boolean;
    /**
     * Updates a given Matrix3 uniform.
     *
     * @param {Matrix3Uniform} uniform - The Matrix3 uniform.
     * @return {boolean} Whether the uniform has been updated or not.
     */
    updateMatrix3(uniform: Matrix3NodeUniform<unknown>): boolean;
    /**
     * Updates a given Matrix4 uniform.
     *
     * @param {Matrix4Uniform} uniform - The Matrix4 uniform.
     * @return {boolean} Whether the uniform has been updated or not.
     */
    updateMatrix4(uniform: Matrix4NodeUniform<unknown>): boolean;
    /**
     * Returns a typed array that matches the given data type.
     *
     * @private
     * @param {string} type - The data type.
     * @return {TypedArray} The typed array.
     */
    private _getBufferForType;
}

export default UniformsGroup;
