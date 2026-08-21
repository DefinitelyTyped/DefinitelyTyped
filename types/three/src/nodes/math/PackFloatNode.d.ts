import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";

export type PackFloatNodeEncoding = "snorm" | "unorm" | "float16";

declare class PackFloatNode extends TempNode {
    vectorNode: Node;
    encoding: PackFloatNodeEncoding;

    readonly isPackFloatNode: true;

    constructor(encoding: PackFloatNodeEncoding, vectorNode: Node);
}

export default PackFloatNode;

export const packSnorm2x16: (value: Node) => PackFloatNode;
export const packUnorm2x16: (value: Node) => PackFloatNode;
export const packHalf2x16: (value: Node) => PackFloatNode;
