import TextureNode from "../accessors/TextureNode.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class SobelOperatorNode extends TempNode {
    textureNode: TextureNode;

    constructor(textureNode: TextureNode);
}

export const sobel: (node: NodeRepresentation) => ShaderNodeObject<SobelOperatorNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        sobel: typeof sobel;
    }
}
