import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";

export default class TempNode extends Node {
    isTempNode: true;

    constructor(type: string | null);

    hasDependencies(builder: NodeBuilder): boolean;
}
