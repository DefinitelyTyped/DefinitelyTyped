import { NodeTypeOption, NodeValueOption } from './constants.js';
import InputNode from './InputNode.js';
import NodeBuilder from './NodeBuilder.js';

export default class UniformNode extends InputNode {
    isUniformNode: true;

    constructor(value: NodeValueOption, nodeType?: NodeTypeOption | null);
    getUniformHash(builder: NodeBuilder): string;
}
