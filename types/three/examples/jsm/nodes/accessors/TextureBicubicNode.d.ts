import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class TextureBicubicNode extends TempNode {
    textureNode: Node;
    blurNode: Node;

    constructor(textureNode: Node, blurNode?: Node);
}

export const textureBicubic: (textureNode: Node, blurNode?: NodeRepresentation) => ShaderNodeObject<TextureBicubicNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        bicubic: typeof textureBicubic;
    }
}
