import TextureNode from "../accessors/TextureNode.js";
import TempNode from "../core/TempNode.js";
import UniformNode from "../core/UniformNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class RGBShiftNode extends TempNode {
    textureNode: TextureNode;
    amount: UniformNode<number>;
    angle: UniformNode<number>;

    constructor(textureNode: TextureNode, amount?: number, angle?: number);

    getTextureNode(): TextureNode;

    setSize(width: number, height: number): void;
}

export const rgbShift: (node: NodeRepresentation, amount?: number, angle?: number) => ShaderNodeObject<RGBShiftNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        rgbShift: typeof rgbShift;
    }
}
