import FunctionNode, { FunctionNodeArguments } from './FunctionNode.js';
import TempNode from '../core/TempNode.js';
import Node from '../core/Node.js';
import { ProxiedObject, ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class FunctionCallNode<P extends Node[] | { [name: string]: Node }> extends TempNode {
    functionNode: FunctionNode<P>;
    parameters: { [name: string]: Node };

    constructor(functionNode?: FunctionNode<P>, parameters?: P);

    setParameters(parameters: P): this;
    getParameters(): P;
}

export const call: <P extends FunctionNodeArguments>(
    functionNode?: FunctionNode<P>,
    parameters?: ProxiedObject<P>,
) => ShaderNodeObject<FunctionCallNode<P>>;
