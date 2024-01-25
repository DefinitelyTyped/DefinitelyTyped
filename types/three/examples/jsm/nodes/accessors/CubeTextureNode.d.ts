import { CubeTexture } from '../../../../src/Three.js';
import TextureNode from './TextureNode.js';
import Node from '../core/Node.js';
import { NodeRepresentation, ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class CubeTextureNode extends TextureNode {
    isCubeTextureNode: boolean;
    uvNode: Node | null;
    levelNode: Node | null;

    constructor(value: CubeTexture, uvNode?: Node | null, levelNode?: Node | null);

    getDefaultUV(): Node;
}

export const cubeTexture: (
    value: CubeTexture,
    uvNode?: NodeRepresentation,
    levelNode?: NodeRepresentation,
) => ShaderNodeObject<CubeTextureNode>;
