import { NodeRepresentation, ShaderNodeObject } from "three/tsl";
import { TempNode, TextureNode, UniformNode } from "three/webgpu";

export default class RGBShiftNode extends TempNode {
    textureNode: TextureNode;
    amount: UniformNode<number>;
    angle: UniformNode<number>;

    constructor(textureNode: TextureNode, amount?: number, angle?: number);

    getTextureNode(): TextureNode;

    setSize(width: number, height: number): void;
}

export const rgbShift: (node: NodeRepresentation, amount?: number, angle?: number) => ShaderNodeObject<RGBShiftNode>;
