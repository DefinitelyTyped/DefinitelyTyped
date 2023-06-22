import { NodeTypeOption, NodeValueOption } from './constants';
import Node from './Node';
import NodeBuilder from './NodeBuilder';

export type Precision = 'low' | 'medium' | 'high';

export default abstract class InputNode extends Node {
    isInputNode: true;
    value: NodeValueOption;
    precision: Precision | null;

    constructor(value: NodeValueOption, nodeType?: NodeTypeOption | null);

    getInputType(builder: NodeBuilder): string | null;
    setPrecision(precision: Precision): this;
}
