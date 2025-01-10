import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class ComputeBuiltinNode extends Node {
    constructor(builtinName: string, nodeType: string);
}

export default ComputeBuiltinNode;

export const numWorkgroups: ShaderNodeObject<ComputeBuiltinNode>;
export const workgroupId: ShaderNodeObject<ComputeBuiltinNode>;
export const localId: ShaderNodeObject<ComputeBuiltinNode>;
export const subgroupSize: ShaderNodeObject<ComputeBuiltinNode>;
