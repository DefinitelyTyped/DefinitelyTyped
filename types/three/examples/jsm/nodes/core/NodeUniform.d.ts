import { NodeValueOption } from './constants.js';
import InputNode from './InputNode.js';

export default class NodeUniform {
    isNodeUniform: true;
    name: string;
    type: string;
    node: InputNode;
    needsUpdate: boolean;
    value: NodeValueOption;

    constructor(name: string, type: string, node: InputNode, needsUpdate?: boolean);
}
