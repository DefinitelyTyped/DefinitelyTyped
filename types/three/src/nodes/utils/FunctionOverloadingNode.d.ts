import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class FunctionOverloadingNode extends Node {
    functionNodes: Node[];
    parameterNodes: Node[];

    constructor(functionNodes?: Node[], ...parameterNodes: Node[]);
}

export default FunctionOverloadingNode;

export const overloadingFn: (functionNodes: Node[]) => (...params: Node[]) => ShaderNodeObject<FunctionOverloadingNode>;
