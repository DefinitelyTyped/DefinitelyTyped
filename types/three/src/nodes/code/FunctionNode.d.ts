import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import NodeFunction from "../core/NodeFunction.js";
import NodeFunctionInput from "../core/NodeFunctionInput.js";
import { ProxiedObject, ProxiedTuple, ShaderNodeObject } from "../tsl/TSLCore.js";
import CodeNode, { CodeNodeInclude } from "./CodeNode.js";
import FunctionCallNode from "./FunctionCallNode.js";

export type FunctionNodeArguments = Array<Node | number> | { [name: string]: Node | number };

export default class FunctionNode<P extends Array<Node | number> | { [name: string]: Node | number }> extends CodeNode {
    constructor(code?: string, includes?: CodeNodeInclude[], language?: string);

    getInputs(builder: NodeBuilder): NodeFunctionInput[];
    getNodeFunction(builder: NodeBuilder): NodeFunction;
    call(parameters: P): FunctionCallNode<P>;
}

type FnParameters<P extends FunctionNodeArguments> = P extends readonly [...unknown[]] ? ProxiedTuple<P>
    : readonly [ProxiedObject<P>];

export const nativeFn: <P extends FunctionNodeArguments>(
    code: string,
    includes?: CodeNodeInclude[],
    language?: string,
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
) => (...params: FnParameters<P>) => ShaderNodeObject<Node>;

export const glslFn: <P extends FunctionNodeArguments>(
    code: string,
    includes?: CodeNodeInclude[],
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
) => (...params: FnParameters<P>) => ShaderNodeObject<Node>;
export const wgslFn: <P extends FunctionNodeArguments>(
    code: string,
    includes?: CodeNodeInclude[],
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
) => (...params: FnParameters<P>) => ShaderNodeObject<Node>;
