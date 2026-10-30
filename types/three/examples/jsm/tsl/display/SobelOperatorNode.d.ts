import { Node, TextureNode } from "three/webgpu";

declare class SobelOperatorNode extends Node {
    textureNode: TextureNode;

    constructor(textureNode: TextureNode);
}

export default SobelOperatorNode;

export const sobel: (node: Node) => SobelOperatorNode;
