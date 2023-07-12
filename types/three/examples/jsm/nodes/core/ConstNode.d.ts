import { NodeTypeOption, NodeValueOption } from './constants.js';
import InputNode from './InputNode.js';
import NodeBuilder from './NodeBuilder.js';

export default class ConstNode extends InputNode {
    isConstNode: true;
    constructor(value: NodeValueOption, nodeType?: NodeTypeOption | null);

    generateConst(builder: NodeBuilder): string;
}
