import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export const TBNViewMatrix: ShaderNodeObject<Node>;

export const parallaxDirection: ShaderNodeObject<Node>;
export const parallaxUV: (uv: ShaderNodeObject<Node>, scale: NodeRepresentation) => ShaderNodeObject<Node>;
