import UniformNode from '../core/UniformNode.js';
import { Texture } from '../../../../src/Three.js';
import { TextureNode } from '../Nodes.js';

export default class MaxMipLevelNode extends UniformNode {
    textureNode: TextureNode;

    constructor(textureNode: TextureNode);

    get texture(): Texture;
}
