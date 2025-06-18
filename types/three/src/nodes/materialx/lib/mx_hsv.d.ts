import Node from "../../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../../tsl/TSLCore.js";

export const mx_hsvtorgb: (hsv: NodeRepresentation) => ShaderNodeObject<Node>;

export const mx_rgbtohsv: (c_immutable: NodeRepresentation) => ShaderNodeObject<Node>;
