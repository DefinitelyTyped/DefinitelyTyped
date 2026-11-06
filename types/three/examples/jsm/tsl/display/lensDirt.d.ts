import { Node, TextureNode } from "three/webgpu";

/**
 * Applies a lens dirt effect. The lens dirt texture is revealed wherever the
 * scene's luminance is bright. The input is typically a blurred luminance of
 * the scene, e.g. the result of a bloom pass. A wider blur reveals the dirt
 * over a larger area around bright spots.
 *
 * @tsl
 * @function
 * @param {Node<vec4>} textureNode - The node that represents the scene's blurred luminance.
 * @param {TextureNode} dirtTextureNode - The lens dirt texture.
 * @param {Node<float>} [intensity=float(1)] - Defines the intensity of the lens dirt.
 * @return {Node<vec4>} The lens dirt.
 */
export const lensDirt: (
    textureNode: Node<"vec4">,
    dirtTextureNode: TextureNode,
    intensity?: Node<"float"> | number,
) => Node<"vec4">;
