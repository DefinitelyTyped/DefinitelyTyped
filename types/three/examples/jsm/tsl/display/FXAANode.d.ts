import { Node, TextureNode } from "three/webgpu";

declare class FXAANode extends Node {
    textureNode: TextureNode;

    constructor(textureNode: TextureNode);
}

export default FXAANode;

export const fxaa: (node: Node) => FXAANode;
