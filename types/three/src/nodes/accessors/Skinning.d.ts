import { Vector3 } from "../../math/Vector3.js";
import { SkinnedMesh } from "../../objects/SkinnedMesh.js";
import Node from "../core/Node.js";

/**
 * TSL function representing the standard skeletal animation vertex shader setup.
 * Transforms positionLocal, normalLocal, and tangentLocal in-place.
 *
 * @tsl
 * @function
 * @param {SkinnedMesh} skinnedMesh - The skinned mesh.
 */
export const skinning: (skinnedMesh: SkinnedMesh) => void;
/**
 * TSL function that computes skeletal animation for custom compute passes.
 *
 * @tsl
 * @function
 * @param {SkinnedMesh} skinnedMesh - The skinned mesh.
 * @param {Node<vec3>} [toPosition=null] - The target position node to assign.
 * @returns {Node<vec3>} The computed skinned position node.
 */
export const computeSkinning: (skinnedMesh: SkinnedMesh, toPosition?: Node<"vec3"> | Vector3 | null) => void;
