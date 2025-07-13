import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

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
) => ShaderNodeObject<TextureSizeNode>;
