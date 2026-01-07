import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";

export type OperatorNodeOp =
    | "%"
    | "&"
    | "|"
    | "^"
    | ">>"
    | "<<"
    | "=="
    | "!="
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

    readonly isOperatorNode: true;

    constructor(op: OperatorNodeOp, ...params: [Node, Node, ...Node[]]);
}

type OperatorNodeParameter = Node | number;

export const add: (
    a: OperatorNodeParameter,
    b: OperatorNodeParameter,
    ...params: OperatorNodeParameter[]
) => OperatorNode;
export const sub: (
    a: OperatorNodeParameter,
    b: OperatorNodeParameter,
    ...params: OperatorNodeParameter[]
) => OperatorNode;
export const mul: (
    a: OperatorNodeParameter,
    b: OperatorNodeParameter,
    ...params: OperatorNodeParameter[]
) => OperatorNode;
export const div: (
    a: OperatorNodeParameter,
    b: OperatorNodeParameter,
    ...params: OperatorNodeParameter[]
) => OperatorNode;
export const mod: (a: OperatorNodeParameter, b: OperatorNodeParameter) => OperatorNode;
export const equal: (a: OperatorNodeParameter, b: OperatorNodeParameter) => OperatorNode;
export const notEqual: (a: OperatorNodeParameter, b: OperatorNodeParameter) => OperatorNode;
export const lessThan: (a: OperatorNodeParameter, b: OperatorNodeParameter) => OperatorNode;
export const greaterThan: (a: OperatorNodeParameter, b: OperatorNodeParameter) => OperatorNode;
export const lessThanEqual: (a: OperatorNodeParameter, b: OperatorNodeParameter) => OperatorNode;
export const greaterThanEqual: (a: OperatorNodeParameter, b: OperatorNodeParameter) => OperatorNode;
export const and: (
    a: OperatorNodeParameter,
    b: OperatorNodeParameter,
    ...params: OperatorNodeParameter[]
) => OperatorNode;
export const or: (
    a: OperatorNodeParameter,
    b: OperatorNodeParameter,
    ...params: OperatorNodeParameter[]
) => OperatorNode;
export const not: (value: OperatorNodeParameter) => OperatorNode;
export const xor: (a: OperatorNodeParameter, b: OperatorNodeParameter) => OperatorNode;
export const bitAnd: (a: OperatorNodeParameter, b: OperatorNodeParameter) => OperatorNode;
export const bitNot: (a: OperatorNodeParameter, b: OperatorNodeParameter) => OperatorNode;
export const bitOr: (a: OperatorNodeParameter, b: OperatorNodeParameter) => OperatorNode;
export const bitXor: (a: OperatorNodeParameter, b: OperatorNodeParameter) => OperatorNode;
export const shiftLeft: (a: OperatorNodeParameter, b: OperatorNodeParameter) => OperatorNode;
export const shiftRight: (a: OperatorNodeParameter, b: OperatorNodeParameter) => OperatorNode;

export const incrementBefore: (a: OperatorNodeParameter) => Node;
export const decrementBefore: (a: OperatorNodeParameter) => Node;
export const increment: (a: OperatorNodeParameter) => Node;
export const decrement: (a: OperatorNodeParameter) => Node;

declare module "../Nodes.js" {
    interface Node {
        add: (
            b: OperatorNodeParameter,
            ...params: OperatorNodeParameter[]
        ) => OperatorNode;
        addAssign: (
            b: OperatorNodeParameter,
            ...params: OperatorNodeParameter[]
        ) => this;

        sub: (
            b: OperatorNodeParameter,
            ...params: OperatorNodeParameter[]
        ) => OperatorNode;
        subAssign: (
            b: OperatorNodeParameter,
            ...params: OperatorNodeParameter[]
        ) => this;

        mul: (
            b: OperatorNodeParameter,
            ...params: OperatorNodeParameter[]
        ) => OperatorNode;
        mulAssign: (
            b: OperatorNodeParameter,
            ...params: OperatorNodeParameter[]
        ) => this;

        div: (
            b: OperatorNodeParameter,
            ...params: OperatorNodeParameter[]
        ) => OperatorNode;
        divAssign: (
            b: OperatorNodeParameter,
            ...params: OperatorNodeParameter[]
        ) => this;

        mod: (
            b: OperatorNodeParameter,
        ) => OperatorNode;
        modAssign: (
            b: OperatorNodeParameter,
        ) => this;

        equal: (
            b: OperatorNodeParameter,
        ) => OperatorNode;
        equalAssign: (
            b: OperatorNodeParameter,
        ) => this;

        notEqual: (
            b: OperatorNodeParameter,
        ) => OperatorNode;
        notEqualAssign: (
            b: OperatorNodeParameter,
        ) => this;

        lessThan: (
            b: OperatorNodeParameter,
        ) => OperatorNode;
        lessThanAssign: (
            b: OperatorNodeParameter,
        ) => this;

        greaterThan: (
            b: OperatorNodeParameter,
        ) => OperatorNode;
        greaterThanAssign: (
            b: OperatorNodeParameter,
        ) => this;

        lessThanEqual: (
            b: OperatorNodeParameter,
        ) => OperatorNode;
        lessThanEqualAssign: (
            b: OperatorNodeParameter,
        ) => this;

        greaterThanEqual: (
            b: OperatorNodeParameter,
        ) => OperatorNode;
        greaterThanEqualAssign: (
            b: OperatorNodeParameter,
        ) => this;

        and: (
            b: OperatorNodeParameter,
            ...params: OperatorNodeParameter[]
        ) => OperatorNode;
        andAssign: (
            b: OperatorNodeParameter,
            ...params: OperatorNodeParameter[]
        ) => this;

        or: (
            b: OperatorNodeParameter,
            ...params: OperatorNodeParameter[]
        ) => OperatorNode;
        orAssign: (
            b: OperatorNodeParameter,
            ...params: OperatorNodeParameter[]
        ) => this;

        not: () => OperatorNode;
        notAssign: () => this;

        xor: (
            b: OperatorNodeParameter,
        ) => OperatorNode;
        xorAssign: (
            b: OperatorNodeParameter,
        ) => this;

        bitAnd: (
            b: OperatorNodeParameter,
        ) => OperatorNode;
        bitAndAssign: (
            b: OperatorNodeParameter,
        ) => this;

        bitNot: (
            b: OperatorNodeParameter,
        ) => OperatorNode;
        bitNotAssign: (
            b: OperatorNodeParameter,
        ) => this;

        bitOr: (
            b: OperatorNodeParameter,
        ) => OperatorNode;
        bitOrAssign: (
            b: OperatorNodeParameter,
        ) => this;

        bitXor: (
            b: OperatorNodeParameter,
        ) => OperatorNode;
        bitXorAssign: (
            b: OperatorNodeParameter,
        ) => this;

        shiftLeft: (
            b: OperatorNodeParameter,
        ) => OperatorNode;
        shiftLeftAssign: (
            b: OperatorNodeParameter,
        ) => this;

        shiftRight: (
            b: OperatorNodeParameter,
        ) => OperatorNode;
        shiftRightAssign: (
            b: OperatorNodeParameter,
        ) => this;

        incrementBefore: () => OperatorNode;
        incrementBeforeAssign: () => this;

        decrementBefore: () => OperatorNode;
        decrementBeforeAssign: () => this;

        increment: () => OperatorNode;
        incrementAssign: () => this;

        decrement: () => OperatorNode;
        decrementAssign: () => this;
    }
}

/**
 * @deprecated "modInt()" is deprecated. Use "mod( int( ... ) )" instead.
 */
export const modInt: (a: OperatorNodeParameter, b: OperatorNodeParameter) => OperatorNode;

declare module "../Nodes.js" {
    interface Nodes {
        /**
         * @deprecated "modInt()" is deprecated. Use "mod( int( ... ) )" instead.
         */
        modInt: (b: OperatorNodeParameter) => OperatorNode;
        /**
         * @deprecated "modInt()" is deprecated. Use "mod( int( ... ) )" instead.
         */
        modIntAssign: (b: OperatorNodeParameter) => this;
    }
}
