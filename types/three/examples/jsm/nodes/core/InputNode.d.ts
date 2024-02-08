import { NodeTypeOption } from "./constants.js";
import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";

export type Precision = "low" | "medium" | "high";

export default abstract class InputNode<Value> extends Node {
    isInputNode: true;
    value: Value;
    precision: Precision | null;

    constructor(value: Value, nodeType?: NodeTypeOption | null);

    getInputType(builder: NodeBuilder): string | null;
    setPrecision(precision: Precision): this;
}
