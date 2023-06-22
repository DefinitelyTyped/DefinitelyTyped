import { Texture } from '../../../../src/Three';
import UniformNode from '../core/UniformNode';
import { Node } from '../Nodes';

export default class TextureNode extends UniformNode {
    isTextureNode: true;

    uvNode: Node | null;
    levelNode: Node | null;

    constructor(value: Texture, uvNode?: Node, levelNode?: Node | null);

    getDefaultUV(): Node;
}
