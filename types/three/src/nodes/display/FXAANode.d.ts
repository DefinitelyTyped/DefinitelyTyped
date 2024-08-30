import TextureNode from "../accessors/TextureNode.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

declare class FXAANode extends TempNode {
    textureNode: TextureNode;

    constructor(textureNode: TextureNode);
}

export default FXAANode;

export const fxaa: (node: NodeRepresentation) => ShaderNodeObject<FXAANode>;
