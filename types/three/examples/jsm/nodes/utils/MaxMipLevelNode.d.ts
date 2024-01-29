import { Texture } from '../../../../src/Three.js';
import UniformNode from '../core/UniformNode.js';
import TextureNode from '../accessors/TextureNode.js';
import { ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class MaxMipLevelNode extends UniformNode<0> {
    textureNode: TextureNode;

    constructor(textureNode: TextureNode);

    get texture(): Texture;
}

export const maxMipLevel: (texture: Texture) => ShaderNodeObject<MaxMipLevelNode>;
