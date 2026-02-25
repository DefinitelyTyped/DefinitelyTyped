import { Texture } from "../../textures/Texture.js";
import TextureNode from "../accessors/TextureNode.js";
import UniformNode from "../core/UniformNode.js";

export default class MaxMipLevelNode extends UniformNode<"float", number> {
    constructor(textureNode: TextureNode);

    get textureNode(): TextureNode;

    get texture(): Texture;
}

export const maxMipLevel: (texture: Texture) => MaxMipLevelNode;
