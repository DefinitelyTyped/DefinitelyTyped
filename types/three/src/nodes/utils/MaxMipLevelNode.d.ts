import { Texture } from "../../textures/Texture.js";
import TextureNode from "../accessors/TextureNode.js";
import UniformNode from "../core/UniformNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export default class MaxMipLevelNode extends UniformNode<0> {
    constructor(textureNode: TextureNode);

    get textureNode(): TextureNode;

    get texture(): Texture;
}

export const maxMipLevel: (texture: Texture) => ShaderNodeObject<MaxMipLevelNode>;
