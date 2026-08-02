import { Node, Vector3, Vector4 } from "three/webgpu";

/**
 * Permutation polynomial for noise generation.
 *
 * @tsl
 * @function
 * @param {Node<vec4>} x - Input vector.
 * @return {Node<vec4>} Permuted vector.
 */
export const permute: (x: Node<"vec4"> | Vector4) => Node<"vec4">;
/**
 * 3D Simplex noise implementation in TSL.
 *
 * @tsl
 * @function
 * @param {Node<vec3>} v - Input coordinate vector.
 * @return {Node<float>} Simplex noise value.
 */
export const snoise: (v: Node<"vec3"> | Vector3) => Node<"float">;
/**
 * 3D Simplex noise vector. Returns a vec3 containing three independent noise samples.
 *
 * @tsl
 * @function
 * @param {Node<vec3>} x - Input coordinate vector.
 * @return {Node<vec3>} Vector of three noise values.
 */
export const snoiseVec3: (x: Node<"vec3"> | Vector3) => Node<"vec3">;
/**
 * 3D Curl noise in TSL. Generates a divergence-free vector field from simplex noise.
 *
 * @tsl
 * @function
 * @param {Node<vec3>} p - Input coordinate vector.
 * @return {Node<vec3>} Curl noise vector.
 */
export const curlNoise: (p: Node<"vec3"> | Vector3) => Node<"vec3">;
