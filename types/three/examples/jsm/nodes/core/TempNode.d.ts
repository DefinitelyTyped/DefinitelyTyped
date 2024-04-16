import { NodeTypeOption } from "./constants.js";
import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";

export default class TempNode extends Node {
    isTempNode: true;

    constructor(type: NodeTypeOption | null);

    hasDependencies(builder: NodeBuilder): boolean;
}
