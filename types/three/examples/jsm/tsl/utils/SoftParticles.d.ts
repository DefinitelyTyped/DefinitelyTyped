import { Node } from "three/webgpu";

/**
 * Computes an opacity node for soft particles, based on the "Soft Particles" white
 * paper (NVIDIA, Tristan Lorach).
 *
 * @tsl
 * @function
 * @param {Object} [parameters={}] - The configuration parameters.
 * @param {Node<float>} [parameters.opacity=float(1)] - The sprite's base opacity, which the soft fade is multiplied with.
 * @param {Node<float>|number} [parameters.distance=1] - The world-space distance over which the sprite fades out against the scene.
 * @param {Node<float>|number} [parameters.contrast=2] - The contrast power of the fade curve. `1` is linear, higher values sharpen the transition.
 * @param {Node<float>} [parameters.viewportDepth=viewportDepthTexture()] - The opaque scene depth the particles fade against.
 * @return {Node<float>} The opacity node to assign to `material.opacityNode`.
 */
export function softParticles({ opacity, distance, contrast, viewportDepth }?: {
    opacity?: Node<"float">;
    distance?: Node<"float"> | number;
    contrast?: Node<"float"> | number;
    viewportDepth?: Node<"float">;
}): Node<"float">;
