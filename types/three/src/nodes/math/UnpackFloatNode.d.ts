import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { PackFloatNodeEncoding, PackFloatNodeLayout } from "./PackFloatNode.js";

declare class PackFloatNode extends TempNode {
    uintNode: Node;
    encoding: PackFloatNodeEncoding;
    layout: PackFloatNodeLayout;

    readonly isPackFloatNode: true;

    constructor(encoding: PackFloatNodeEncoding, uintNode: Node);
}

export default PackFloatNode;

export const unpackSnorm2x16: (value: Node) => PackFloatNode;
export const unpackUnorm2x16: (value: Node) => PackFloatNode;
export const unpackHalf2x16: (value: Node) => PackFloatNode;
export const unpackSnorm4x8: (value: Node) => PackFloatNode;
export const unpackUnorm4x8: (value: Node) => PackFloatNode;
