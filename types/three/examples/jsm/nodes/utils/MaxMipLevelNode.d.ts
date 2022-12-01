import UniformNode from '../core/UniformNode';
import { Texture } from '../../../../src/Three';

export default class MaxMipLevelNode extends UniformNode {
    texture: Texture;
    constructor(texture: Texture);
}
