import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export type OperatorNodeOp =
    | "%"
    | "&"
    | "|"
    | "^"
    | ">>"
    | "<<"
    | "=="
    | "&&"
    | "||"
    | "^^"
    | "<"
    | ">"
    | "<="
    | ">="
    | "+"
    | "-"
    | "*"
    | "/";

export default class OperatorNode extends TempNode {
    aNode: Node;
    bNode: Node;
    op: OperatorNodeOp;

    constructor(op: OperatorNodeOp, ...params: [Node, Node, ...Node[]]);
}

type Operator = (
    a: NodeRepresentation,
    b: NodeRepresentation,
    ...others: NodeRepresentation[]
) => ShaderNodeObject<OperatorNode>;

export const add: Operator;
export const sub: Operator;
export const mul: Operator;
export const div: Operator;
export const remainder: Operator;
export const equal: Operator;
export const lessThan: Operator;
export const greaterThan: Operator;
export const lessThanEqual: Operator;
export const greaterThanEqual: Operator;
export const and: Operator;
export const or: Operator;
export const not: (a: NodeRepresentation) => ShaderNodeObject<OperatorNode>;
export const xor: Operator;
export const bitAnd: Operator;
export const bitNot: (a: NodeRepresentation) => ShaderNodeObject<OperatorNode>;
export const bitOr: Operator;
export const bitXor: Operator;
export const shiftLeft: Operator;
export const shiftRight: Operator;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        add: typeof add;
        sub: typeof sub;
        mul: typeof mul;
        div: typeof div;
        remainder: typeof remainder;
        equal: typeof equal;
        lessThan: typeof lessThan;
        greaterThan: typeof greaterThan;
        lessThanEqual: typeof lessThanEqual;
        greaterThanEqual: typeof greaterThanEqual;
        and: typeof and;
        or: typeof or;
        not: typeof not;
        xor: typeof xor;
        bitAnd: typeof bitAnd;
        bitNot: typeof bitNot;
        bitOr: typeof bitOr;
        bitXor: typeof bitXor;
        shiftLeft: typeof shiftLeft;
        shiftRight: typeof shiftRight;
    }
}
