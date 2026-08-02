import { Vector2 } from "../../math/Vector2.js";
import { Vector3 } from "../../math/Vector3.js";
import Node from "../core/Node.js";

/**
 * Packs a normal vector into a color value.
 *
 * @tsl
 * @function
 * @param {Node<vec3>} node - The direction to pack.
 * @return {Node<vec3>} The color.
 */
export const packNormalToRGB: (node: Node<"vec3"> | Vector3) => Node<"vec3">;

/**
 * Unpacks a color value into a normal vector.
 *
 * @tsl
 * @function
 * @param {Node<vec3>} node - The color to unpack.
 * @return {Node<vec3>} The direction.
 */
export const unpackRGBToNormal: (node: Node<"vec3"> | Node<"vec4"> | Vector3) => Node<"vec3">;

/**
 * Unpacks a tangent space normal, reconstructing the Z component by projecting the X,Y coordinates onto the hemisphere.
 * The X,Y coordinates are expected to be in the [-1, 1] range.
 *
 * @tsl
 * @function
 * @param {Node<vec2>} xy - The X,Y coordinates of the normal.
 * @return {Node<vec3>} The resulting normal.
 */
export const unpackNormal: (xy: Node<"vec2"> | Vector2) => Node<"vec3">;

/**
 * @tsl
 * @function
 * @deprecated since r185. Use {@link packNormalToRGB} instead.
 * @param {Node<vec3>} node - The direction to pack.
 * @returns {Node<vec3>}
 */
export const directionToColor: (node: Node<"vec3"> | Vector3) => Node<"vec3">;

/**
 * @tsl
 * @function
 * @deprecated since r185. Use {@link unpackRGBToNormal} instead.
 * @param {Node<vec3>} node - The color to unpack.
 * @returns {Node<vec3>}
 */
export const colorToDirection: (node: Node<"vec3"> | Node<"vec4"> | Vector3) => Node<"vec3">;
