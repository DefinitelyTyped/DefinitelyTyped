import { Node, TextureNode } from '../Nodes';

export default class SpecularMIPLevelNode extends Node {
    textureNode: TextureNode;
    roughnessNode: Node | null;

    constructor(textureNode: TextureNode, roughnessNode?: Node | null);
}
