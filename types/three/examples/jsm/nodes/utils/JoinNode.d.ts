import Node from "../core/Node.js";
import { TempNode } from "../Nodes.js";

/**
 * This node constructs given type from elements, like vec3(a,b,c)
 */
export default class JoinNode extends TempNode {
    nodes: Node[];
    constructor(nodes: Node[]);
}
