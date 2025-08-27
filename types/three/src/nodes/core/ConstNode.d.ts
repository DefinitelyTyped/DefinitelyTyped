import InputNode from "./InputNode.js";
import NodeBuilder from "./NodeBuilder.js";

export default class ConstNode<Value> extends InputNode<Value> {
    isConstNode: true;
    constructor(value: Value, nodeType?: string | null);

    generateConst(builder: NodeBuilder): string;
}
