import TextureNode from "../accessors/TextureNode.js";
import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export default class TriplanarTexturesNode extends Node {
    textureXNode: TextureNode;
    textureYNode: TextureNode | null;
    textureZNode: TextureNode | null;

    scaleNode: ShaderNodeObject<Node>;

    positionNode: ShaderNodeObject<Node>;
    normalNode: ShaderNodeObject<Node>;

    constructor(
        textureXNode: Node,
        textureYNode?: TextureNode | null,
        textureZNode?: TextureNode | null,
        scaleNode?: ShaderNodeObject<Node>,
        positionNode?: ShaderNodeObject<Node>,
        normalNode?: ShaderNodeObject<Node>,
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
