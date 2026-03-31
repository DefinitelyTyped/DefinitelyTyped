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

declare module "./Node.js" {
    interface NodeElements {
        toArray: (count: number) => ArrayNode;
    }
}
