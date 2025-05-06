import { NodeRepresentation, ShaderNodeObject } from "three/tsl";
import { TempNode, TextureNode } from "three/webgpu";

declare class FXAANode extends TempNode {
    textureNode: TextureNode;

    constructor(textureNode: TextureNode);
}

export default FXAANode;

export const fxaa: (node: NodeRepresentation) => ShaderNodeObject<FXAANode>;
