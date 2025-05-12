import Node from "../core/Node.js";
import VarNode from "../core/VarNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const reflectView: ShaderNodeObject<Node>;
export const refractView: ShaderNodeObject<Node>;

export const reflectVector: ShaderNodeObject<VarNode>;
export const refractVector: ShaderNodeObject<VarNode>;
