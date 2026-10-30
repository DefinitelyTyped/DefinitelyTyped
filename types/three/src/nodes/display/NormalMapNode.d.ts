import { NormalMapTypes, NormalPacking } from "../../constants.js";
import Node from "../core/Node.js";

declare class NormalMapNode extends Node<"vec3"> {
    node: Node;
    scaleNode: Node | null;

    normalMapType: NormalMapTypes;

    unpackNormalMode: NormalPacking;

    constructor(node: Node, scaleNode?: Node | null);
}

export default NormalMapNode;

export const normalMap: (node: Node, scaleNode?: Node) => NormalMapNode;
