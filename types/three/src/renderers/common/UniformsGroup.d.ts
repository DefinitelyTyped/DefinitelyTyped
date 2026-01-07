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
import UniformBuffer from "./UniformBuffer.js";
/**
 * This class represents a uniform buffer binding but with
 * an API that allows to maintain individual uniform objects.
 *
 * @private
 * @augments UniformBuffer
 */
declare class UniformsGroup extends UniformBuffer {
    readonly isUniformsGroup: true;
    _values: number[] | null;
    uniforms: NodeUniformGPU[];
    /**
     * Constructs a new uniforms group.
     *
     * @param {string} name - The group's name.
     */
    constructor(name?: string);
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
     * A Float32 array buffer with the uniform values.
     *
     * @type {Float32Array}
     */
    get buffer(): Float32Array;
    /**
     * The byte length of the buffer with correct buffer alignment.
     *
     * @type {number}
     */
    get byteLength(): number;
    /**
     * Updates this group by updating each uniform object of
     * the internal uniform list. The uniform objects check if their
     * values has actually changed so this method only returns
     * `true` if there is a real value change.
     *
     * @return {boolean} Whether the uniforms have been updated and
     * must be uploaded to the GPU.
     */
    update(): boolean;
    /**
     * Updates a given uniform by calling an update method matching
     * the uniforms type.
     *
     * @param {Uniform} uniform - The uniform to update.
     * @return {boolean} Whether the uniform has been updated or not.
     */
    updateByType(uniform: NodeUniformGPU): boolean | undefined;
    /**
     * Updates a given Number uniform.
     *
     * @param {NumberUniform} uniform - The Number uniform.
     * @return {boolean} Whether the uniform has been updated or not.
     */
    updateNumber(uniform: NumberNodeUniform): boolean;
    /**
     * Updates a given Vector2 uniform.
     *
     * @param {Vector2Uniform} uniform - The Vector2 uniform.
     * @return {boolean} Whether the uniform has been updated or not.
     */
    updateVector2(uniform: Vector2NodeUniform): boolean;
    /**
     * Updates a given Vector3 uniform.
     *
     * @param {Vector3Uniform} uniform - The Vector3 uniform.
     * @return {boolean} Whether the uniform has been updated or not.
     */
    updateVector3(uniform: Vector3NodeUniform): boolean;
    /**
     * Updates a given Vector4 uniform.
     *
     * @param {Vector4Uniform} uniform - The Vector4 uniform.
     * @return {boolean} Whether the uniform has been updated or not.
     */
    updateVector4(uniform: Vector4NodeUniform): boolean;
    /**
     * Updates a given Color uniform.
     *
     * @param {ColorUniform} uniform - The Color uniform.
     * @return {boolean} Whether the uniform has been updated or not.
     */
    updateColor(uniform: ColorNodeUniform): boolean;
    /**
     * Updates a given Matrix3 uniform.
     *
     * @param {Matrix3Uniform} uniform - The Matrix3 uniform.
     * @return {boolean} Whether the uniform has been updated or not.
     */
    updateMatrix3(uniform: Matrix3NodeUniform): boolean;
    /**
     * Updates a given Matrix4 uniform.
     *
     * @param {Matrix4Uniform} uniform - The Matrix4 uniform.
     * @return {boolean} Whether the uniform has been updated or not.
     */
    updateMatrix4(uniform: Matrix4NodeUniform): boolean;
    /**
     * Returns a typed array that matches the given data type.
     *
     * @private
     * @param {string} type - The data type.
     * @return {TypedArray} The typed array.
     */
    _getBufferForType(type: string | null): Int32Array | Uint32Array | Float32Array;
}
export default UniformsGroup;
