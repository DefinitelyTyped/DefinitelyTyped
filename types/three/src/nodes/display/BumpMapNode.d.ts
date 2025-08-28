import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class BumpMapNode extends TempNode {
    textureNode: Node;
    scaleNode: Node | null;

    constructor(textureNode: Node, scaleNode?: Node | null);
}

export default BumpMapNode;

export const bumpMap: (
    textureNode: Node,
    scaleNode?: Node | null,
) => ShaderNodeObject<BumpMapNode>;
