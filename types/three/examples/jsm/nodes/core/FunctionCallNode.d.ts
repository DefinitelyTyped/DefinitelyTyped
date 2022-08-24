import FunctionNode from './FunctionNode';
import TempNode from './TempNode';
import Node from './Node';

export default class FunctionCallNode extends TempNode {
    functionNode: FunctionNode;
    parameters: { [name: string]: Node };

    constructor(functionNode?: FunctionNode, parameters?: { [name: string]: Node });

    setParameters(parameters: { [name: string]: Node }): this;
    getParameters(): { [name: string]: Node };
}
