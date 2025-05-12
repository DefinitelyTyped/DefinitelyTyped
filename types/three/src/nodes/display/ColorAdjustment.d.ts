import Node from "../core/Node.js";
import MathNode from "../math/MathNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export const grayscale: (color: NodeRepresentation) => ShaderNodeObject<Node>;

export const saturation: (
    color: NodeRepresentation,
    adjustment?: NodeRepresentation,
) => ShaderNodeObject<Node>;

export const vibrance: (
    color: NodeRepresentation,
    adjustment?: NodeRepresentation,
) => ShaderNodeObject<Node>;

export const hue: (
    color: NodeRepresentation,
    adjustment?: NodeRepresentation,
) => ShaderNodeObject<Node>;

export const luminance: (
    color: NodeRepresentation,
    luminanceCoefficients?: NodeRepresentation,
) => ShaderNodeObject<MathNode>;

export const threshold: (color: NodeRepresentation, thershold: NodeRepresentation) => ShaderNodeObject<MathNode>;

/**
 * Color Decision List (CDL) v1.2
 *
 * Compact representation of color grading information, defined by slope, offset, power, and saturation. The CDL should
 * be typically be given input in a log space (such as LogC, ACEScc, or AgX Log), and will return output in the same
 * space. Output may require clamping >=0.
 *
 * References:
 * - ASC CDL v1.2
 * - https://blender.stackexchange.com/a/55239/43930
 * - https://docs.acescentral.com/specifications/acescc/
 *
 * @param color Input (-Infinity < input < +Infinity)
 * @param slope Slope (0 ≤ slope < +Infinity)
 * @param offset Offset (-Infinity < offset < +Infinity; typically -1 < offset < 1)
 * @param power Power (0 < power < +Infinity)
 * @param saturation Saturation (0 ≤ saturation < +Infinity; typically 0 ≤ saturation < 4)
 * @param luminanceCoefficients Luminance coefficients for saturation term, typically Rec. 709
 * @return Output, -Infinity < output < +Infinity
 */
export const cdl: (
    color: NodeRepresentation,
    slope?: NodeRepresentation,
    offset?: NodeRepresentation,
    power?: NodeRepresentation,
    saturation?: NodeRepresentation,
    luminanceCoefficients?: NodeRepresentation,
) => ShaderNodeObject<Node>;
