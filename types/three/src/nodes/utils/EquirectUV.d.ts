import { Vector2 } from "../../math/Vector2.js";
import { Vector3 } from "../../math/Vector3.js";
import Node from "../core/Node.js";

/**
 * TSL function for creating an equirect uv node.
 *
 * Can be used to compute texture coordinates for projecting an
 * equirectangular texture onto a mesh for using it as the scene's
 * background.
 *
 * ```js
 * scene.backgroundNode = texture( equirectTexture, equirectUV() );
 * ```
 *
 * @tsl
 * @function
 * @param {?Node<vec3>} [direction=positionWorldDirection] - A direction vector for sampling which is by default `positionWorldDirection`.
 * @returns {Node<vec2>}
 */
export const equirectUV: (direction?: Node<"vec3"> | Vector3) => Node<"vec2">;
/**
 * TSL function for creating an equirect direction node.
 *
 * Can be used to compute a direction vector from the given equirectangular
 * UV coordinates.
 *
 * @tsl
 * @function
 * @param {?Node<vec2>} [uv=UV()] - The equirectangular UV coordinates.
 * @returns {Node<vec3>} The computed direction vector.
 */
export const equirectDirection: (uv?: Node<"vec2"> | Vector2) => Node<"vec3">;
