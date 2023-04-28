import FunctionNode from './FunctionNode';
import TempNode from '../core/TempNode';
import Node from '../core/Node';

export default class FunctionCallNode<P extends Node[] | { [name: string]: Node }> extends TempNode {
    functionNode: FunctionNode<P>;
    parameters: { [name: string]: Node };

    constructor(functionNode?: FunctionNode<P>, parameters?: P);

    setParameters(parameters: P): this;
    getParameters(): P;
}
