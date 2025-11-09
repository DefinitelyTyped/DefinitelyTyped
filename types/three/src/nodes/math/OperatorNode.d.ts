import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

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
) => ShaderNodeObject<OperatorNode>;
export const sub: (
    a: OperatorNodeParameter,
    b: OperatorNodeParameter,
    ...params: OperatorNodeParameter[]
) => ShaderNodeObject<OperatorNode>;
export const mul: (
    a: OperatorNodeParameter,
    b: OperatorNodeParameter,
    ...params: OperatorNodeParameter[]
) => ShaderNodeObject<OperatorNode>;
export const div: (
    a: OperatorNodeParameter,
    b: OperatorNodeParameter,
    ...params: OperatorNodeParameter[]
) => ShaderNodeObject<OperatorNode>;
export const mod: (a: OperatorNodeParameter, b: OperatorNodeParameter) => ShaderNodeObject<OperatorNode>;
export const equal: (a: OperatorNodeParameter, b: OperatorNodeParameter) => ShaderNodeObject<OperatorNode>;
export const notEqual: (a: OperatorNodeParameter, b: OperatorNodeParameter) => ShaderNodeObject<OperatorNode>;
export const lessThan: (a: OperatorNodeParameter, b: OperatorNodeParameter) => ShaderNodeObject<OperatorNode>;
export const greaterThan: (a: OperatorNodeParameter, b: OperatorNodeParameter) => ShaderNodeObject<OperatorNode>;
export const lessThanEqual: (a: OperatorNodeParameter, b: OperatorNodeParameter) => ShaderNodeObject<OperatorNode>;
export const greaterThanEqual: (a: OperatorNodeParameter, b: OperatorNodeParameter) => ShaderNodeObject<OperatorNode>;
export const and: (
    a: OperatorNodeParameter,
    b: OperatorNodeParameter,
    ...params: OperatorNodeParameter[]
) => ShaderNodeObject<OperatorNode>;
export const or: (
    a: OperatorNodeParameter,
    b: OperatorNodeParameter,
    ...params: OperatorNodeParameter[]
) => ShaderNodeObject<OperatorNode>;
export const not: (value: OperatorNodeParameter) => ShaderNodeObject<OperatorNode>;
export const xor: (a: OperatorNodeParameter, b: OperatorNodeParameter) => ShaderNodeObject<OperatorNode>;
export const bitAnd: (a: OperatorNodeParameter, b: OperatorNodeParameter) => ShaderNodeObject<OperatorNode>;
export const bitNot: (a: OperatorNodeParameter, b: OperatorNodeParameter) => ShaderNodeObject<OperatorNode>;
export const bitOr: (a: OperatorNodeParameter, b: OperatorNodeParameter) => ShaderNodeObject<OperatorNode>;
export const bitXor: (a: OperatorNodeParameter, b: OperatorNodeParameter) => ShaderNodeObject<OperatorNode>;
export const shiftLeft: (a: OperatorNodeParameter, b: OperatorNodeParameter) => ShaderNodeObject<OperatorNode>;
export const shiftRight: (a: OperatorNodeParameter, b: OperatorNodeParameter) => ShaderNodeObject<OperatorNode>;

export const incrementBefore: (a: OperatorNodeParameter) => ShaderNodeObject<Node>;
export const decrementBefore: (a: OperatorNodeParameter) => ShaderNodeObject<Node>;
export const increment: (a: OperatorNodeParameter) => ShaderNodeObject<Node>;
export const decrement: (a: OperatorNodeParameter) => ShaderNodeObject<Node>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        add: typeof add;
        sub: typeof sub;
        mul: typeof mul;
        div: typeof div;
        mod: typeof mod;
        equal: typeof equal;
        notEqual: typeof notEqual;
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
        incrementBefore: typeof incrementBefore;
        decrementBefore: typeof decrement;
        increment: typeof increment;
        decrement: typeof decrement;
    }
}

/**
 * @deprecated "modInt()" is deprecated. Use "mod( int( ... ) )" instead.
 */
export const modInt: (a: OperatorNodeParameter, b: OperatorNodeParameter) => ShaderNodeObject<OperatorNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        /**
         * @deprecated "modInt()" is deprecated. Use "mod( int( ... ) )" instead.
         */
        modInt: typeof modInt;
    }
}
