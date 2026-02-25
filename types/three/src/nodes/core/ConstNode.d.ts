import InputNode from "./InputNode.js";
import NodeBuilder from "./NodeBuilder.js";

interface ConstNodeInterface {
    readonly isConstNode: true;

    generateConst(builder: NodeBuilder): string;
}

declare const ConstNode: {
    new<TNodeType, TValue>(value: TValue, nodeType?: TNodeType | null): ConstNode<TNodeType, TValue>;
};

type ConstNode<TNodeType, TValue> = InputNode<TNodeType, TValue> & ConstNodeInterface;

export default ConstNode;
