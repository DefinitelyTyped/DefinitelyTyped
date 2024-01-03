import AttributeNode from '../core/AttributeNode.js';
import { ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class UVNode extends AttributeNode {
    isUVNode: true;
    index: number;

    constructor(index?: number);
}

export const uv: (index?: number) => ShaderNodeObject<UVNode>;
