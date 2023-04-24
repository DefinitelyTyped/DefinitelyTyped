import { NodeTypeOption, NodeValueOption } from './constants';
import Node from './Node';
import NodeBuilder from './NodeBuilder';

export default abstract class InputNode extends Node {
    isInputNode: true;
    value: NodeValueOption;

    constructor(value: NodeValueOption, nodeType?: NodeTypeOption | null);

    getInputType(builder: NodeBuilder): string | null;
}
