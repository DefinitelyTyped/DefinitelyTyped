import UniformNode from '../core/UniformNode';
import { Texture } from '../../../../src/Three';
import { TextureNode } from '../Nodes';

export default class MaxMipLevelNode extends UniformNode {
    textureNode: TextureNode;

    constructor(textureNode: TextureNode);

    get texture(): Texture;
}
