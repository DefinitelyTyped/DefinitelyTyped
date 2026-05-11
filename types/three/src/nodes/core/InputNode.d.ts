import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";

export type Precision = "low" | "medium" | "high";

interface InputNodeInterface<TValue> {
    isInputNode: true;
    value: TValue;
    precision: Precision | null;

    getInputType(builder: NodeBuilder): string | null;
    setPrecision(precision: Precision): this;
}

declare const InputNode: {
    new<TNodeType, TValue>(value: TValue, nodeType?: TNodeType | null): InputNode<TNodeType, TValue>;
};

type InputNode<TNodeType, TValue> = Node<TNodeType> & InputNodeInterface<TValue>;

export default InputNode;

export type { InputNode };
