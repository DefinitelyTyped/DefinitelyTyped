import { Mesh } from "../../objects/Mesh.js";
import Node from "../core/Node.js";

/**
 * TSL function that applies the color morph targets to the given color.
 * The result is computed in the vertex stage.
 *
 * @tsl
 * @function
 * @param {Node<vec4>} color - The color to morph. Must be available in the vertex stage.
 * @returns {Node<vec4>} The morphed color.
 */
export const morphColor: (color: Node<"vec4">) => Node<"vec4">;
/**
 * TSL function representing the vertex shader morph targets blend setup.
 * Dynamically computes morph targets weights and updates positionLocal and normalLocal in-place.
 *
 * @tsl
 * @function
 * @param {Mesh} mesh - The mesh.
 */
export const morphReference: (mesh: Mesh) => void;
