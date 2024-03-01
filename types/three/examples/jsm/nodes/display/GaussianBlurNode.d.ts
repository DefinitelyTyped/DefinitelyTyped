import { Vector2 } from "three";
import TextureNode from "../accessors/TextureNode.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class GaussianBlurNode extends TempNode {
    textureNode: TextureNode;
    sigma: number;

    directionNode: Node;

    resolution: Vector2;

    constructor(textureNode: TextureNode, sigma?: number);

    setSize(width: number, height: number): void;

    getTextureNode(): TextureNode;
}

export const gaussianBlur: (node: NodeRepresentation, sigma?: number) => ShaderNodeObject<GaussianBlurNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        gaussianBlur: typeof gaussianBlur;
    }
}
