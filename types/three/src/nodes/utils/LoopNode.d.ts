import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import { VarNode } from "../Nodes.js";

interface LoopNodeObjectParameter {
    // TODO Expand to other types and update loop function types appropriately
    type?: "int" | "uint" | "float";
    // TODO The variable name should affect the type of the loop function
    // name?: string;
    start: number | Node;
    end: number | Node;
    condition?: string;
    update?: VarNode | number | string;
}

type LoopNodeParameter = Node | number | LoopNodeObjectParameter;

declare class LoopNode extends Node {
    params: unknown[];

    constructor(params?: unknown[]);

    getProperties(builder: NodeBuilder): unknown;
}

export default LoopNode;

interface Loop {
    (i: LoopNodeParameter, func: (inputs: { readonly i: Node }) => void): Node;
    (
        i: LoopNodeParameter,
        j: LoopNodeParameter,
        func: (inputs: { readonly i: Node; readonly j: Node }) => void,
    ): Node;
}

export const Loop: Loop;
export const Continue: () => Node;
export const Break: () => Node;
