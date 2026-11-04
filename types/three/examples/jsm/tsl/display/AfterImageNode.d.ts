import { Node, TextureNode } from "three/webgpu";

export default class AfterImageNode extends Node {
    textureNode: TextureNode;
    textureNodeOld: Node;
    damp: Node;

    constructor(textureNode: Node, damp?: Node);

    getTextureNode(): TextureNode;

    setSize(width: number, height: number): void;
}

export const afterImage: (node: Node, damp?: Node | number) => AfterImageNode;
