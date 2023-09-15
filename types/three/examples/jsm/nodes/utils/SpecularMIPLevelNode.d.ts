import { Node, TextureNode } from '../Nodes.js';

export default class SpecularMIPLevelNode extends Node {
    textureNode: TextureNode;
    roughnessNode: Node | null;

    constructor(textureNode: TextureNode, roughnessNode?: Node | null);
}
