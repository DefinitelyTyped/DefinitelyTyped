import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { ProxiedObject, ShaderNodeObject } from "../tsl/TSLCore.js";
import FunctionNode, { FunctionNodeArguments } from "./FunctionNode.js";

export default class FunctionCallNode<P extends Array<Node | number> | { [name: string]: Node | number }>
    extends TempNode
{
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

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        call: typeof call;
    }
}
