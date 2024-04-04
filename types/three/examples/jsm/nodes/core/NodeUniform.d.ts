import UniformNode from "./UniformNode.js";

export default class NodeUniform<Value> {
    readonly isNodeUniform: true;

    name: string;
    type: string;
    node: UniformNode<Value>;
    needsUpdate: boolean | undefined;

    constructor(name: string, type: string, node: UniformNode<Value>, needsUpdate?: boolean);

    get(): Value;
    set value(val: Value);

    get id(): number;
}
