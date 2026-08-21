import { Vector3 } from "../../math/Vector3.js";
import Node from "../core/Node.js";

/**
 * This node can be used to evaluate whether a primitive is front or back facing.
 *
 * @augments Node
 */
declare class FrontFacingNode extends Node<"bool"> {
    /**
     * Constructs a new front facing node.
     */
    constructor();
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isFrontFacingNode: boolean;
}

export default FrontFacingNode;

/**
 * TSL object that represents whether a primitive is front or back facing
 *
 * @tsl
 * @type {FrontFacingNode<bool>}
 */
export const frontFacing: FrontFacingNode;
/**
 * TSL object that represents the front facing status as a number instead of a bool.
 * `1` means front facing, `-1` means back facing.
 *
 * @tsl
 * @type {Node<float>}
 */
export const faceDirection: Node<"float">;
/**
 * Negates a vector if the rendering occurs on the back side of a face,
 * based on the material's side configuration.
 *
 * - If the material's side is `BackSide`, the vector is inverted (negated).
 * - If the material's side is `DoubleSide`, the vector is multiplied by `faceDirection`
 *   (negated only for back-facing fragments).
 * - If the material's side is `FrontSide` (default), the vector remains unchanged.
 *
 * @tsl
 * @function
 * @param {Node<vec3>} vector - The vector to process.
 * @returns {Node<vec3>} The processed vector.
 */
export const negateOnBackSide: (vector: Node<"vec3"> | Vector3) => Node<"vec3">;
/**
 * Negates a vector if the rendering occurs on the back side of a face,
 * based on the material's side configuration.
 *
 * - If the material's side is `BackSide`, the vector is inverted (negated).
 * - If the material's side is `DoubleSide`, the vector is multiplied by `faceDirection`
 *   (negated only for back-facing fragments).
 * - If the material's side is `FrontSide` (default), the vector remains unchanged.
 *
 * @tsl
 * @function
 * @deprecated since r185. Use {@link negateOnBackSide} instead.
 * @param {Node<vec3>} vector - The vector to convert.
 * @returns {Node<vec3>} The converted vector.
 */
export const directionToFaceDirection: (vector: Node<"vec3"> | Vector3) => Node<"vec3">;
