import { Texture } from '../../../../src/Three.js';
import UniformNode from '../core/UniformNode.js';
import Node from '../core/Node.js';
import { NodeRepresentation, ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class TextureNode extends UniformNode<Texture> {
    isTextureNode: true;

    uvNode: Node | null;
    levelNode: Node | null;

    constructor(value: Texture, uvNode?: Node, levelNode?: Node | null);

    getDefaultUV(): Node;
}

export const texture: (
    value: Texture,
    uvNode?: NodeRepresentation,
    levelNode?: NodeRepresentation,
) => ShaderNodeObject<TextureNode>;
export const sampler: (aTexture: Texture | TextureNode) => ShaderNodeObject<Node>;
