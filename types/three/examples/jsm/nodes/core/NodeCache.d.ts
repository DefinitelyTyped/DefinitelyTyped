import Node from "./Node.js";
import { NodeData } from "./NodeBuilder.js";

export default class NodeCache {
    id: number;
    nodesData: WeakMap<Node, NodeData>;

    constructor();
}
