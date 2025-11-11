import PropertyNode from "./PropertyNode.js";

declare class ParameterNode extends PropertyNode {
    readonly isParameterNode: true;

    constructor(nodeType: string, name?: string | null);
}

export default ParameterNode;

export const parameter: (type: string, name?: string | null) => ParameterNode;
