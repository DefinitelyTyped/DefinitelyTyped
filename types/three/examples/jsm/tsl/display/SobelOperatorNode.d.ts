import { NodeRepresentation, ShaderNodeObject, TempNode, TextureNode } from "three/tsl";

declare class SobelOperatorNode extends TempNode {
    textureNode: TextureNode;

    constructor(textureNode: TextureNode);
}

export default SobelOperatorNode;

export const sobel: (node: NodeRepresentation) => ShaderNodeObject<SobelOperatorNode>;
