import { Node } from "three/webgpu";

/**
 * @module GroundedSkybox
 * @three_import import { getGroundProjectedNormal } from 'three/addons/tsl/utils/GroundedSkybox.js';
 */
/**
 * Projects the world position onto a sphere whose bottom is clipped by a ground disk,
 * then returns a vector usable for sampling an environment cube map.
 *
 * @tsl
 * @function
 * @param {Node<float>} radiusNode - The radius of the projection sphere. Must be large enough to ensure the scene's camera stays inside.
 * @param {Node<float>} heightNode - The height is how far the camera that took the photo was above the ground. A larger value will magnify the downward part of the image.
 * @return {Node<vec3>} A direction vector for sampling the environment cube map.
 */
export const getGroundProjectedNormal: (radiusNode: Node<"float">, heightNode: Node<"float">) => Node<"vec3">;
