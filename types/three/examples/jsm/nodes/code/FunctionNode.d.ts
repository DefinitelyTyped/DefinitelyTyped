import CodeNode, { CodeNodeInclude } from './CodeNode';
import FunctionCallNode from './FunctionCallNode';
import NodeBuilder from '../core/NodeBuilder';
import NodeFunction from '../core/NodeFunction';
import NodeFunctionInput from '../core/NodeFunctionInput';
import Node from '../core/Node';

export type FunctionNodeArguments = Node[] | { [name: string]: Node };

export default class FunctionNode<P extends Node[] | { [name: string]: Node }> extends CodeNode {
    keywords: { [key: string]: Node };
    constructor(code?: string, includes?: CodeNodeInclude[]);

    getInputs(builder: NodeBuilder): NodeFunctionInput[];
    getNodeFunction(builder: NodeBuilder): NodeFunction;
    call(parameters: P): FunctionCallNode<P>;
}
