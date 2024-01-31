import { Fn } from "../../code/FunctionNode.js";
import Node from "../../core/Node.js";
import { ShaderNodeObject } from "../../shadernode/ShaderNode.js";

export function mx_hsvtorgb(...params: Fn<[Node]>): ShaderNodeObject<Node>;
export function mx_rgbtohsv(...params: Fn<[Node]>): ShaderNodeObject<Node>;
