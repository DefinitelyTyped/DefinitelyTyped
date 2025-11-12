import Node from "./Node.js";
import TempNode from "./TempNode.js";

declare class ArrayNode extends TempNode {
    count: number;
    values: Node[];
    readonly isArrayNode: true;

    constructor(nodeType: string, count: number, values: Node[]);
}

export default ArrayNode;

interface ArrayFunction {
    (values: Node[]): ArrayNode;
    (nodeType: string, count: number): ArrayNode;
}

export const array: ArrayFunction;

declare module "../Nodes.js" {
    interface Node {
        toArray: (count: number) => ArrayNode;
        toArrayAssign: (count: number) => this;
    }
}
