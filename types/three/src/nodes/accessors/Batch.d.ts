import { BatchedMesh } from "../../objects/BatchedMesh.js";
import VaryingNode from "../core/VaryingNode.js";

/**
 * TSL object representing a varying property for the batching color vector.
 *
 * @type {VaryingNode<vec4>}
 */
export const batchColor: VaryingNode<"vec4">;
/**
 * TSL object representing a varying property for the batch indirect index (instance ID).
 *
 * @type {VaryingNode<uint>}
 */
export const batchIndirectIndex: VaryingNode<"uint">;
/**
 * TSL function representing the vertex shader batching setup.
 * Applies the batch transformation matrix to positionLocal, normalLocal, and tangentLocal.
 * Also assigns the batch color if a color texture is present.
 *
 * @tsl
 * @function
 * @param {BatchedMesh} batchMesh - The batched mesh.
 */
export const batch: (batchMesh: BatchedMesh) => void;
