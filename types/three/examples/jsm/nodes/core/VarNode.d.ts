import { OperatorNodeOp } from "../math/OperatorNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";
import Node from "./Node.js";

export default class VarNode extends Node {
    node: Node;
    name: string | null;

    constructor(node: Node, name?: string | null);

    op(op: OperatorNodeOp, ...params: Node[]): this;
    assign(...params: Node[]): this;
    add(...params: Node[]): this;
    sub(...params: Node[]): this;
    mul(...params: Node[]): this;
    div(...params: Node[]): this;
}

export const temp: (node: NodeRepresentation, name?: string | null) => ShaderNodeObject<VarNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        temp: typeof temp;
        toVar: typeof temp;
    }
}
