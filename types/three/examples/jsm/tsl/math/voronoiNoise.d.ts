import { Node, Vector2, Vector3 } from "three/webgpu";

/**
 * @module VoronoiNoise
 * @three_import import { voronoi2d, voronoi3d } from 'three/addons/tsl/math/voronoiNoise.js';
 */
/**
 * Generates a pseudo-random vec2 from the given coordinate.
 *
 * Reference: {@link https://www.shadertoy.com/view/MslGD8}.
 *
 * @tsl
 * @function
 * @param {Node<vec2>} p - The input coordinate.
 * @return {Node<vec2>} A pseudo-random value in the range `[0, 1]`.
 */
export const hash2d: (p: Node<"vec2"> | Vector2) => Node<"vec2">;
/**
 * Animated 2D Voronoi noise. The feature points orbit inside their cells so the
 * resulting pattern morphs over time.
 *
 * Reference: {@link https://www.shadertoy.com/view/MslGD8}.
 *
 * @tsl
 * @function
 * @param {Node<vec2>} p - The input coordinate.
 * @param {Node<float>} time - The animation time.
 * @return {Node<float>} The squared distance to the closest feature point, roughly in the range `[0, 1]`.
 */
export const voronoi2d: (p: Node<"vec2"> | Vector2, time: Node<"float"> | number) => Node<"float">;
/**
 * Generates a pseudo-random vec3 from the given coordinate.
 *
 * @tsl
 * @function
 * @param {Node<vec3>} p - The input coordinate.
 * @return {Node<vec3>} A pseudo-random value in the range `[0, 1]`.
 */
export const hash3d: (p: Node<"vec3"> | Vector3) => Node<"vec3">;
/**
 * Animated 3D Voronoi noise. Like {@link voronoi2d} but with a volumetric input
 * coordinate so the pattern can be applied to arbitrary surfaces without
 * projection artifacts. Evaluates 27 cells instead of 9 and is therefore
 * considerably more expensive than the 2D version.
 *
 * @tsl
 * @function
 * @param {Node<vec3>} p - The input coordinate.
 * @param {Node<float>} time - The animation time.
 * @return {Node<float>} The squared distance to the closest feature point, roughly in the range `[0, 1]`.
 */
export const voronoi3d: (p: Node<"vec3"> | Vector3, time: Node<"float"> | number) => Node<"float">;
