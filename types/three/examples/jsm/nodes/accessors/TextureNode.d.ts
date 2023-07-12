import { Texture } from '../../../../src/Three.js';
import UniformNode from '../core/UniformNode.js';
import { Node } from '../Nodes.js';

export default class TextureNode extends UniformNode {
    isTextureNode: true;

    uvNode: Node | null;
    levelNode: Node | null;

    constructor(value: Texture, uvNode?: Node, levelNode?: Node | null);

    getDefaultUV(): Node;
}
