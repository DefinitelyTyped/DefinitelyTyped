import Node from "../../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../../shadernode/ShaderNode.js";

export const mx_hsvtorgb: (hsv_immutable: NodeRepresentation) => ShaderNodeObject<Node>;
export const mx_rgbtohsv: (c_immutable: NodeRepresentation) => ShaderNodeObject<Node>;
