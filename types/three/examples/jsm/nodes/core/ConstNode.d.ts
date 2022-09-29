import { NodeTypeOption, NodeValueOption } from './constants';
import InputNode from './InputNode';
import NodeBuilder from './NodeBuilder';

export default class ConstNode extends InputNode {
    isConstNode: true;
    constructor(value: NodeValueOption, nodeType?: NodeTypeOption | null);

    generateConst(builder: NodeBuilder): string;
}
