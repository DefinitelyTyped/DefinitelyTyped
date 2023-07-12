import TempNode from '../core/TempNode.js';
import Node from '../core/Node.js';

export type OperatorNodeOp =
    | '='
    | '%'
    | '&'
    | '|'
    | '^'
    | '>>'
    | '<<'
    | '=='
    | '&&'
    | '||'
    | '^^'
    | '<'
    | '>'
    | '<='
    | '>='
    | '+'
    | '-'
    | '*'
    | '/';

export default class OperatorNode extends TempNode {
    aNode: Node;
    bNode: Node;
    op: OperatorNodeOp;

    constructor(op: OperatorNodeOp, ...params: [Node, Node, ...Node[]]);
}
