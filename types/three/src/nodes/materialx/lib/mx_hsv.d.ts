import Node from "../../core/Node.js";
import { ShaderNodeObject } from "../../tsl/TSLCore.js";

export const mx_hsvtorgb: (hsv: Node) => ShaderNodeObject<Node>;

export const mx_rgbtohsv: (c_immutable: Node) => ShaderNodeObject<Node>;
