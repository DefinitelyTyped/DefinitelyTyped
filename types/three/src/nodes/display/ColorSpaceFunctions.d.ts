import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export const sRGBToLinear: (color: NodeRepresentation) => ShaderNodeObject<Node>;

export const LinearTosRGB: (color: NodeRepresentation) => ShaderNodeObject<Node>;
