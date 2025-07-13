import { ShaderNodeObject } from "three/tsl";
import { Node, TempNode, TextureNode, UniformNode } from "three/webgpu";

export default class RGBShiftNode extends TempNode {
    textureNode: TextureNode;
    amount: UniformNode<number>;
    angle: UniformNode<number>;

    constructor(textureNode: TextureNode, amount?: number, angle?: number);

    getTextureNode(): TextureNode;

    setSize(width: number, height: number): void;
}

export const rgbShift: (node: Node, amount?: number, angle?: number) => ShaderNodeObject<RGBShiftNode>;
