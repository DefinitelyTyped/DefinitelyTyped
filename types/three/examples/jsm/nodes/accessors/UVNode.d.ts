import AttributeNode from '../core/AttributeNode';

export default class UVNode extends AttributeNode {
    isUVNode: true;
    index: number;

    constructor(index?: number);
}
