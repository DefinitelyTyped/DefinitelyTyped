import { Node, TempNode, TextureNode } from "three/webgpu";

export default class RGBShiftNode extends TempNode {
    textureNode: TextureNode;
    amount: Node<"float">;
    angle: Node<"float">;

    constructor(textureNode: TextureNode, amount?: Node<"float"> | number, angle?: Node<"float"> | number);

    getTextureNode(): TextureNode;

    setSize(width: number, height: number): void;
}

export const rgbShift: (node: Node, amount?: Node<"float"> | number, angle?: Node<"float"> | number) => RGBShiftNode;
