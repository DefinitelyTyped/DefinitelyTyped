import { ShaderNodeObject } from "three/tsl";
import { Node, TempNode, TextureNode } from "three/webgpu";

declare class SobelOperatorNode extends TempNode {
    textureNode: TextureNode;

    constructor(textureNode: TextureNode);
}

export default SobelOperatorNode;

export const sobel: (node: Node) => ShaderNodeObject<SobelOperatorNode>;
