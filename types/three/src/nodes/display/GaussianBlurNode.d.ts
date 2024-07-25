import { Vector2 } from "../../math/Vector2.js";
import TextureNode from "../accessors/TextureNode.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class GaussianBlurNode extends TempNode {
    textureNode: TextureNode;
    directionNode: Node | null;
    sigma: number;

    resolution: Vector2;

    constructor(textureNode: TextureNode, directionNode?: Node | null, sigma?: number);

    setSize(width: number, height: number): void;

    getTextureNode(): TextureNode;
}

export const gaussianBlur: (
    node: NodeRepresentation,
    directionNode?: NodeRepresentation | null,
    sigma?: number,
) => ShaderNodeObject<GaussianBlurNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        gaussianBlur: typeof gaussianBlur;
    }
}
