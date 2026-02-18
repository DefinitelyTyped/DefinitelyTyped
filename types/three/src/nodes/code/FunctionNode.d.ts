import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import NodeFunction from "../core/NodeFunction.js";
import NodeFunctionInput from "../core/NodeFunctionInput.js";
import { ProxiedObject, ProxiedTuple } from "../tsl/TSLCore.js";
import CodeNode, { CodeNodeInclude } from "./CodeNode.js";

export type FunctionNodeArguments = Array<Node | number> | { [name: string]: Node | number };

export default class FunctionNode<P extends Array<Node | number> | { [name: string]: Node | number }> extends CodeNode {
    constructor(code?: string, includes?: CodeNodeInclude[], language?: string);

    getInputs(builder: NodeBuilder): NodeFunctionInput[];
    getNodeFunction(builder: NodeBuilder): NodeFunction;
}

// eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
type FnParameters<P extends FunctionNodeArguments> = P extends readonly [...unknown[]] ? ProxiedTuple<P>
    // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
    : readonly [ProxiedObject<P>];

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export const nativeFn: <P extends FunctionNodeArguments>(
    code: string,
    includes?: CodeNodeInclude[],
    language?: string,
) => (...params: FnParameters<P>) => Node;

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export const glslFn: <P extends FunctionNodeArguments>(
    code: string,
    includes?: CodeNodeInclude[],
) => (...params: FnParameters<P>) => Node;
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export const wgslFn: <P extends FunctionNodeArguments>(
    code: string,
    includes?: CodeNodeInclude[],
) => (...params: FnParameters<P>) => Node;

export {};
