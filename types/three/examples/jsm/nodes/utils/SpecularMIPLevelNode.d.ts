import TextureNode from "../accessors/TextureNode.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class SpecularMIPLevelNode extends Node {
    textureNode: TextureNode;
    roughnessNode: Node | null;

    constructor(textureNode: TextureNode, roughnessNode?: Node | null);
}

export const specularMIPLevel: () => ShaderNodeObject<SpecularMIPLevelNode>;
