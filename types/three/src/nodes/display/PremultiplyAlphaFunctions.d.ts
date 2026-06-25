import { Color } from "../../math/Color.js";
import { Vector3 } from "../../math/Vector3.js";
import { Vector4 } from "../../math/Vector4.js";
import Node from "../core/Node.js";

type ColorParameter = Node<"float"> | number | Node<"vec3"> | Vector3 | Node<"color"> | Color | Node<"vec4"> | Vector4;

/**
 * Premultiplies the RGB channels of a color by its alpha channel.
 *
 * This function is useful for converting a non-premultiplied alpha color
 * into a premultiplied alpha format, where the RGB values are scaled
 * by the alpha value. Premultiplied alpha is often used in graphics
 * rendering for certain operations, such as compositing and image processing.
 *
 * @tsl
 * @function
 * @param {Node<vec4>} color - The input color with non-premultiplied alpha.
 * @return {Node<vec4>} The color with premultiplied alpha.
 */
export const premultiplyAlpha: (color: ColorParameter) => Node<"vec4">;
/**
 * Unpremultiplies the RGB channels of a color by its alpha channel.
 *
 * This function is useful for converting a premultiplied alpha color
 * back into a non-premultiplied alpha format, where the RGB values are
 * divided by the alpha value. Unpremultiplied alpha is often used in graphics
 * rendering for certain operations, such as compositing and image processing.
 *
 * @tsl
 * @function
 * @param {Node<vec4>} color - The input color with premultiplied alpha.
 * @return {Node<vec4>} The color with non-premultiplied alpha.
 */
export const unpremultiplyAlpha: (color: ColorParameter) => Node<"vec4">;

export {};
