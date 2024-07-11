import NodeFunctionInput from "./NodeFunctionInput.js";

export default abstract class NodeFunction {
    isNodeFunction: true;
    type: string;
    inputs: NodeFunctionInput[];
    name: string;
    precision: string;

    constructor(type: string, inputs: NodeFunctionInput[], name?: string, precision?: string);

    abstract getCode(name?: string): string;
}
