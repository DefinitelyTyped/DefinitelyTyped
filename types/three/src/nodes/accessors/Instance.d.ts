import { InstancedBufferAttribute } from "../../core/InstancedBufferAttribute.js";
import { InstancedMesh } from "../../objects/InstancedMesh.js";
import StorageInstancedBufferAttribute from "../../renderers/common/StorageInstancedBufferAttribute.js";
import VaryingNode from "../core/VaryingNode.js";

/**
 * TSL object representing a varying property for the instanced color vector.
 *
 * @type {VaryingNode<vec3>}
 */
export const instanceColor: VaryingNode<"vec3">;
/**
 * TSL function representing the standard instancing vertex shader setup.
 * Transforms positionLocal and normalLocal, and assigns varying color in-place.
 *
 * @tsl
 * @function
 * @param {number} count - The instance count.
 * @param {InstancedBufferAttribute|StorageInstancedBufferAttribute} matrices - The instanced transformation matrices.
 * @param {?InstancedBufferAttribute|StorageInstancedBufferAttribute} [colors=null] - The optional instanced colors.
 */
export const instance: (
    count: number,
    matrices: InstancedBufferAttribute | StorageInstancedBufferAttribute,
    colors?: InstancedBufferAttribute | StorageInstancedBufferAttribute | null,
) => void;
/**
 * TSL wrapper for applying instanced mesh rendering setup.
 *
 * @tsl
 * @function
 * @param {InstancedMesh} instancedMesh - The instanced mesh.
 */
export const instancedMesh: (instancedMesh: InstancedMesh) => void;
