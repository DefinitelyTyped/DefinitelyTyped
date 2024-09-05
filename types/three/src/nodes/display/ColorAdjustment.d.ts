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
