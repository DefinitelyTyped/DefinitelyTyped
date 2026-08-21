import { NormalMapTypes, NormalPacking } from "../../constants.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";

declare class NormalMapNode extends TempNode {
    node: Node;
    scaleNode: Node | null;

    normalMapType: NormalMapTypes;

    unpackNormalMode: NormalPacking;

    constructor(node: Node, scaleNode?: Node | null);
}

export default NormalMapNode;

export const normalMap: (node: Node, scaleNode?: Node) => NormalMapNode;
