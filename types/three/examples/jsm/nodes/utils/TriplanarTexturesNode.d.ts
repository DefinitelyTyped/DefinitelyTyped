import Node from '../core/Node';
import { PositionNode, Swizzable, TextureNode } from '../Nodes';

export default class TriplanarTexturesNode extends Node {
    textureXNode: TextureNode;
    textureYNode: TextureNode | null;
    textureZNode: TextureNode | null;

    scaleNode: Swizzable;

    positionNode: Swizzable<PositionNode>;
    normalNode: Swizzable<PositionNode>;

    constructor(
        textureXNode: Node,
        textureYNode?: TextureNode | null,
        textureZNode?: TextureNode | null,
        scaleNode?: Swizzable,
        positionNode?: Swizzable<PositionNode>,
        normalNode?: Swizzable<PositionNode>,
    );
}
