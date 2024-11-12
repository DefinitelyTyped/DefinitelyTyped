import { NodeRepresentation, ShaderNodeObject, TempNode, TextureNode } from "three/tsl";

declare class FXAANode extends TempNode {
    textureNode: TextureNode;

    constructor(textureNode: TextureNode);
}

export default FXAANode;

export const fxaa: (node: NodeRepresentation) => ShaderNodeObject<FXAANode>;
