import TextureNode from './TextureNode';
import { Node } from '../Nodes';
import { CubeTexture } from '../../../../src/Three';

export default class CubeTextureNode extends TextureNode {
    isCubeTextureNode: boolean;
    uvNode: Node | null;
    levelNode: Node | null;

    constructor(value: CubeTexture, uvNode?: Node | null, levelNode?: Node | null);

    getDefaultUV(): Node;
}
