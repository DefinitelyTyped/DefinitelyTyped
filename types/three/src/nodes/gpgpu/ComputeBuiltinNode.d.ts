import Node from "../core/Node.js";

declare class ComputeBuiltinNode extends Node {
    constructor(builtinName: string, nodeType: string);
}

export default ComputeBuiltinNode;

export const numWorkgroups: ComputeBuiltinNode;
export const workgroupId: ComputeBuiltinNode;
export const globalId: ComputeBuiltinNode;
export const localId: ComputeBuiltinNode;
export const subgroupSize: ComputeBuiltinNode;
