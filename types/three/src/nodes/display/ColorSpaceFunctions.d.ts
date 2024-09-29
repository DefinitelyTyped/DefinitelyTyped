import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export const sRGBToLinearSRGB: (color: NodeRepresentation) => ShaderNodeObject<Node>;

export const linearSRGBTosRGB: (color: NodeRepresentation) => ShaderNodeObject<Node>;
