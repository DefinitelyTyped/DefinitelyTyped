import { NodeRepresentation, ShaderNodeObject } from "three/tsl";
import { TempNode, TextureNode } from "three/webgpu";

declare class SobelOperatorNode extends TempNode {
    textureNode: TextureNode;

    constructor(textureNode: TextureNode);
}

export default SobelOperatorNode;

export const sobel: (node: NodeRepresentation) => ShaderNodeObject<SobelOperatorNode>;
