import PositionNode from "../accessors/PositionNode.js";
import TextureNode from "../accessors/TextureNode.js";
import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class TriplanarTexturesNode extends Node {
    textureXNode: TextureNode;
    textureYNode: TextureNode | null;
    textureZNode: TextureNode | null;

    scaleNode: ShaderNodeObject<Node>;

    positionNode: ShaderNodeObject<PositionNode>;
    normalNode: ShaderNodeObject<PositionNode>;

    constructor(
        textureXNode: Node,
        textureYNode?: TextureNode | null,
        textureZNode?: TextureNode | null,
        scaleNode?: ShaderNodeObject<Node>,
        positionNode?: ShaderNodeObject<PositionNode>,
        normalNode?: ShaderNodeObject<PositionNode>,
    );
}

export const triplanarTextures: (
    textureXNode: NodeRepresentation,
    textureYNode?: NodeRepresentation,
    textureZNode?: NodeRepresentation,
    scaleNode?: NodeRepresentation,
    positionNode?: NodeRepresentation,
    normalNode?: NodeRepresentation,
) => ShaderNodeObject<TriplanarTexturesNode>;
export const triplanarTexture: (
    texture: NodeRepresentation,
    ...params: NodeRepresentation[]
) => ShaderNodeObject<TriplanarTexturesNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        triplanarTexture: typeof triplanarTexture;
    }
}
