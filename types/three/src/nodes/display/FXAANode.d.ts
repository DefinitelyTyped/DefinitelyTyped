import TextureNode from "../accessors/TextureNode.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

declare class FXAANode extends TempNode {
    textureNode: TextureNode;

    constructor(textureNode: TextureNode);
}

export const fxaa: (node: NodeRepresentation) => ShaderNodeObject<FXAANode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        fxaa: typeof fxaa;
    }
}

export default FXAANode;
