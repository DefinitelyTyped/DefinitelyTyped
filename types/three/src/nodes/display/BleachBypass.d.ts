import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export const bleach: (color: NodeRepresentation, opacity?: number) => ShaderNodeObject<Node>;
