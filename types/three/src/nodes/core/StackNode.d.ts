import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";

declare class StackNode extends Node {
    isStackNode: true;
    nodes: Node[];
    outputNode: Node | null;

    constructor();

    add(node: Node): this;

    If(boolNode: Node, method: () => void): this;

    ElseIf(boolNode: Node, method: () => void): this;

    Else(method: () => void): this;

    /**
     * @deprecated Use {@link StackNode#ElseIf Else()} instead.
     */
    elseif(boolNode: Node, method: () => void): this;

    /**
     * @deprecated Use {@link StackNode#Else Else()} instead.
     */
    else(method: () => void): this;
}

export default StackNode;

export const stack: () => ShaderNodeObject<StackNode>;
