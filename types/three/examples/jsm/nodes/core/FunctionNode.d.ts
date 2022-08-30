import CodeNode from './CodeNode';
import FunctionCallNode from './FunctionCallNode';
import NodeBuilder from './NodeBuilder';
import NodeFunction from './NodeFunction';
import NodeFunctionInput from './NodeFunctionInput';
import Node from './Node';

export default class FunctionNode extends CodeNode {
    keywords: { [key: string]: Node };
    constructor(code?: string);

    getInputs(builder: NodeBuilder): NodeFunctionInput[];
    getNodeFunction(builder: NodeBuilder): NodeFunction;
    call(parameters: { [name: string]: Node }): FunctionCallNode;
}
