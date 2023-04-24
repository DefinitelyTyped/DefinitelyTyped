import TempNode from '../core/TempNode';
import Node from '../core/Node';

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
