import Node from '../core/Node.js';
import PositionNode from '../accessors/PositionNode.js';
import TextureNode from '../accessors/TextureNode.js';
import { NodeRepresentation, ShaderNodeObject } from '../shadernode/ShaderNode.js';

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
