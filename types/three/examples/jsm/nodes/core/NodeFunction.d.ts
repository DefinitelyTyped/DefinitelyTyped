import NodeFunctionInput from "./NodeFunctionInput.js";

export default abstract class NodeFunction {
    isNodeFunction: true;
    type: string;
    inputs: NodeFunctionInput[];
    name: string;
    presicion: string;

    constructor(type: string, inputs: NodeFunctionInput[], name?: string, presicion?: string);

    abstract getCode(name?: string): string;
}
