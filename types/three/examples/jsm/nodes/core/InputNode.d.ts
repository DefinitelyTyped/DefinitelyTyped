import { NodeTypeOption, NodeValueOption } from './constants.js';
import Node from './Node.js';
import NodeBuilder from './NodeBuilder.js';

export type Precision = 'low' | 'medium' | 'high';

export default abstract class InputNode extends Node {
    isInputNode: true;
    value: NodeValueOption;
    precision: Precision | null;

    constructor(value: NodeValueOption, nodeType?: NodeTypeOption | null);

    getInputType(builder: NodeBuilder): string | null;
    setPrecision(precision: Precision): this;
}
