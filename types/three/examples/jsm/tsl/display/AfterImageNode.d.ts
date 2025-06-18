import { ShaderNodeObject } from "three/tsl";
import { Node, TempNode, TextureNode, UniformNode } from "three/webgpu";

export default class AfterImageNode extends TempNode {
    textureNode: TextureNode;
    textureNodeOld: Node;
    damp: UniformNode<number>;

    constructor(textureNode: Node, damp?: number);

    getTextureNode(): TextureNode;

    setSize(width: number, height: number): void;
}

export const afterImage: (node: Node, damp?: number) => ShaderNodeObject<AfterImageNode>;
