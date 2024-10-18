import { Vector2 } from "../../math/Vector2.js";
import TextureNode from "../accessors/TextureNode.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

declare class GaussianBlurNode extends TempNode {
    textureNode: TextureNode;
    directionNode: Node | null;
    sigma: number;

    resolution: Vector2;

    constructor(textureNode: TextureNode, directionNode?: Node | null, sigma?: number);

    setSize(width: number, height: number): void;

    getTextureNode(): TextureNode;
}

export default GaussianBlurNode;

export const gaussianBlur: (
    node: NodeRepresentation,
    directionNode?: NodeRepresentation | null,
    sigma?: number,
) => ShaderNodeObject<GaussianBlurNode>;
