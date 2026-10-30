import Node from "../core/Node.js";

declare class BumpMapNode extends Node {
    textureNode: Node;
    scaleNode: Node | null;
    normalNode: Node;

    constructor(textureNode: Node, scaleNode?: Node | null, normalNode?: Node);
}

export default BumpMapNode;

export const bumpMap: (
    textureNode: Node,
    scaleNode?: Node | null,
    normalNode?: Node,
) => BumpMapNode;
