import CodeNode, { CodeNodeInclude } from './CodeNode';
import FunctionCallNode from './FunctionCallNode';
import NodeBuilder from './NodeBuilder';
import NodeFunction from './NodeFunction';
import NodeFunctionInput from './NodeFunctionInput';
import Node from './Node';

export type FunctionNodeArguments = Node[] | { [name: string]: Node };

export default class FunctionNode<P extends Node[] | { [name: string]: Node }> extends CodeNode {
    keywords: { [key: string]: Node };
    constructor(code?: string, includes?: CodeNodeInclude[]);

    getInputs(builder: NodeBuilder): NodeFunctionInput[];
    getNodeFunction(builder: NodeBuilder): NodeFunction;
    call(parameters: P): FunctionCallNode<P>;
}
