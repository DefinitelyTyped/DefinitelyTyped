import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const directionToColor: (node: Node) => ShaderNodeObject<Node>;
export const colorToDirection: (node: Node) => ShaderNodeObject<Node>;
