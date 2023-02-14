import Node from '../core/Node';
import { TempNode } from '../Nodes';

/**
 * This node constructs given type from elements, like vec3(a,b,c)
 */
export default class JoinNode extends TempNode {
    nodes: Node[];
    constructor(nodes: Node[]);
}
