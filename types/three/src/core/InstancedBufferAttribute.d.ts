import { BufferAttribute, TypedArray } from "./BufferAttribute.js";

/**
 * An instanced version of {@link THREE.BufferAttribute | BufferAttribute}.
 * @see {@link https://threejs.org/docs/index.html#api/en/core/InstancedBufferAttribute | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferAttribute.js | Source}
 */
export class InstancedBufferAttribute extends BufferAttribute {
    /**
     * Create a new instance of {@link THREE.InstancedBufferAttribute | InstancedBufferAttribute}
     * @param array
     * @param itemSize
     * @param normalized
     * @param meshPerAttribute
     */
    constructor(array: TypedArray, itemSize: number, normalized?: boolean, meshPerAttribute?: number);

    /**
     * Defines how often a value of this buffer attribute should be repeated.
     * A value of one means that each value of the instanced attribute is used for a single instance.
     * A value of two means that each value is used for two consecutive instances (and so on).
     * @defaultValue `1`
     */
    meshPerAttribute: number;

    /**
     * Read-only flag to check if a given object is of type {@link InstancedBufferAttribute}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isInstancedBufferAttribute: true;
}
