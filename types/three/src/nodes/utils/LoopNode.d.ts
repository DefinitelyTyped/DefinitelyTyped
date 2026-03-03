import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import { VarNode } from "../Nodes.js";

type LoopNodeType = "int" | "uint" | "float";

interface LoopNodeObjectParameter<TNodeType extends LoopNodeType> {
    // TODO Expand to other types and update loop function types appropriately
    type?: TNodeType;
    // TODO The variable name should affect the type of the loop function
    // name?: string;
    start: Node<TNodeType> | number;
    end: Node<TNodeType> | number;
    condition?: string;
    update?: VarNode | number | string;
}

declare class LoopNode extends Node<"void"> {
    params: unknown[];

    constructor(params?: unknown[]);

    getProperties(builder: NodeBuilder): unknown;
}

export default LoopNode;

interface Loop {
    (i: number, func: (inputs: { readonly i: Node<"int"> }) => void): LoopNode;
    <TNodeType extends LoopNodeType>(
        i: LoopNodeObjectParameter<TNodeType>,
        func: (inputs: { readonly i: Node<TNodeType> }) => void,
    ): LoopNode;
    <TNodeType extends LoopNodeType>(
        i: LoopNodeObjectParameter<TNodeType>,
        j: LoopNodeObjectParameter<TNodeType>,
        func: (inputs: { readonly i: Node<TNodeType>; readonly j: Node<TNodeType> }) => void,
    ): LoopNode;
}

export const Loop: Loop;
export const Continue: () => Node;
export const Break: () => Node;
