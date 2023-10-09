import TextureNode from './TextureNode.js';
import { Node } from '../Nodes.js';
import { CubeTexture } from '../../../../src/Three.js';

export default class CubeTextureNode extends TextureNode {
    isCubeTextureNode: boolean;
    uvNode: Node | null;
    levelNode: Node | null;

    constructor(value: CubeTexture, uvNode?: Node | null, levelNode?: Node | null);

    getDefaultUV(): Node;
}
