import { Node, TempNode, TextureNode, UniformNode } from "three/webgpu";

export default class RGBShiftNode extends TempNode {
    textureNode: TextureNode;
    amount: UniformNode<"float", number>;
    angle: UniformNode<"float", number>;

    constructor(textureNode: TextureNode, amount?: number, angle?: number);

    getTextureNode(): TextureNode;

    setSize(width: number, height: number): void;
}

export const rgbShift: (node: Node, amount?: number, angle?: number) => RGBShiftNode;
