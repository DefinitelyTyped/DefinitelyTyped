import Node from "../core/Node.js";

declare class TextureSizeNode extends Node {
    readonly isTextureSizeNode: true;

    textureNode: Node;
    levelNode: Node | null;

    constructor(textureNode: Node, levelNode?: Node | null);
}

export default TextureSizeNode;

export const textureSize: (
    textureNode: Node,
    levelNode?: Node | null,
) => TextureSizeNode;
