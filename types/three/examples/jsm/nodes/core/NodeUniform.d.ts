import { NodeValueOption } from './constants';
import InputNode from './InputNode';

export default class NodeUniform {
    isNodeUniform: true;
    name: string;
    type: string;
    node: InputNode;
    needsUpdate: boolean;
    value: NodeValueOption;

    constructor(name: string, type: string, node: InputNode, needsUpdate?: boolean);
}
