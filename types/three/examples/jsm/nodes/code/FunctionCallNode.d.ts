import FunctionNode from './FunctionNode.js';
import TempNode from '../core/TempNode.js';
import Node from '../core/Node.js';

export default class FunctionCallNode<P extends Node[] | { [name: string]: Node }> extends TempNode {
    functionNode: FunctionNode<P>;
    parameters: { [name: string]: Node };

    constructor(functionNode?: FunctionNode<P>, parameters?: P);

    setParameters(parameters: P): this;
    getParameters(): P;
}
