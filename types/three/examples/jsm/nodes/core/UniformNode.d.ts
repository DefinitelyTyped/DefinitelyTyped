import { NodeTypeOption, NodeValueOption } from './constants';
import InputNode from './InputNode';
import NodeBuilder from './NodeBuilder';

export default class UniformNode extends InputNode {
    isUniformNode: true;

    constructor(value: NodeValueOption, nodeType?: NodeTypeOption | null);
    getUniformHash(builder: NodeBuilder): string;
}
