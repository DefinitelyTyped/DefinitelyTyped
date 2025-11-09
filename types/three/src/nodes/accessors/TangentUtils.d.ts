import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

/**
 * Tangent vector in view space, computed dynamically from geometry and UV derivatives.
 * Useful for normal mapping without precomputed tangents.
 *
 * Reference: http://www.thetenthplanet.de/archives/1180
 *
 * @tsl
 */
export const tangentViewFrame: ShaderNodeObject<Node>;

/**
 * Bitangent vector in view space, computed dynamically from geometry and UV derivatives.
 * Complements the tangentViewFrame for constructing the tangent space basis.
 *
 * Reference: http://www.thetenthplanet.de/archives/1180
 *
 * @tsl
 */
export const bitangentViewFrame: ShaderNodeObject<Node>;
