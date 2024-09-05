import UniformNode from "./UniformNode.js";
declare class NodeUniform<TValue> {
    readonly isNodeUniform: true;
    name: string;
    type: string | null;
    node: UniformNode<TValue>;
    needsUpdate: boolean | undefined;
    constructor(name: string, type: string | null, node: UniformNode<TValue>);
    get value(): TValue;
    set value(val: TValue);
    get id(): number;
    get groupNode(): import("./UniformGroupNode.js").default;
}
export default NodeUniform;
