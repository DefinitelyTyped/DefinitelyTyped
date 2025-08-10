import { ShaderNodeObject } from "../tsl/TSLCore.js";
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
    (values: Node[]): ShaderNodeObject<ArrayNode>;
    (nodeType: string, count: number): ShaderNodeObject<ArrayNode>;
}

export const array: ArrayFunction;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        toArray: typeof array;
    }
}
