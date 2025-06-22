import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

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

export const add: (
    a: NodeRepresentation,
    b: NodeRepresentation,
    ...params: NodeRepresentation[]
) => ShaderNodeObject<OperatorNode>;
export const sub: (
    a: NodeRepresentation,
    b: NodeRepresentation,
    ...params: NodeRepresentation[]
) => ShaderNodeObject<OperatorNode>;
export const mul: (
    a: NodeRepresentation,
    b: NodeRepresentation,
    ...params: NodeRepresentation[]
) => ShaderNodeObject<OperatorNode>;
export const div: (
    a: NodeRepresentation,
    b: NodeRepresentation,
    ...params: NodeRepresentation[]
) => ShaderNodeObject<OperatorNode>;
export const mod: (a: NodeRepresentation, b: NodeRepresentation) => ShaderNodeObject<OperatorNode>;
export const equal: (a: NodeRepresentation, b: NodeRepresentation) => ShaderNodeObject<OperatorNode>;
export const notEqual: (a: NodeRepresentation, b: NodeRepresentation) => ShaderNodeObject<OperatorNode>;
export const lessThan: (a: NodeRepresentation, b: NodeRepresentation) => ShaderNodeObject<OperatorNode>;
export const greaterThan: (a: NodeRepresentation, b: NodeRepresentation) => ShaderNodeObject<OperatorNode>;
export const lessThanEqual: (a: NodeRepresentation, b: NodeRepresentation) => ShaderNodeObject<OperatorNode>;
export const greaterThanEqual: (a: NodeRepresentation, b: NodeRepresentation) => ShaderNodeObject<OperatorNode>;
export const and: (
    a: NodeRepresentation,
    b: NodeRepresentation,
    ...params: NodeRepresentation[]
) => ShaderNodeObject<OperatorNode>;
export const or: (
    a: NodeRepresentation,
    b: NodeRepresentation,
    ...params: NodeRepresentation[]
) => ShaderNodeObject<OperatorNode>;
export const not: (value: NodeRepresentation) => ShaderNodeObject<OperatorNode>;
export const xor: (a: NodeRepresentation, b: NodeRepresentation) => ShaderNodeObject<OperatorNode>;
export const bitAnd: (a: NodeRepresentation, b: NodeRepresentation) => ShaderNodeObject<OperatorNode>;
export const bitNot: (a: NodeRepresentation, b: NodeRepresentation) => ShaderNodeObject<OperatorNode>;
export const bitOr: (a: NodeRepresentation, b: NodeRepresentation) => ShaderNodeObject<OperatorNode>;
export const bitXor: (a: NodeRepresentation, b: NodeRepresentation) => ShaderNodeObject<OperatorNode>;
export const shiftLeft: (a: NodeRepresentation, b: NodeRepresentation) => ShaderNodeObject<OperatorNode>;
export const shiftRight: (a: NodeRepresentation, b: NodeRepresentation) => ShaderNodeObject<OperatorNode>;

export const incrementBefore: (a: NodeRepresentation) => ShaderNodeObject<Node>;
export const decrementBefore: (a: NodeRepresentation) => ShaderNodeObject<Node>;
export const increment: (a: NodeRepresentation) => ShaderNodeObject<Node>;
export const decrement: (a: NodeRepresentation) => ShaderNodeObject<Node>;

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
 * @deprecated .remainder() has been renamed to .modInt().
 */
export const remainder: (
    aNode: NodeRepresentation,
    bNode: NodeRepresentation,
    ...params: NodeRepresentation[]
) => ShaderNodeObject<OperatorNode>;

/**
 * @deprecated "modInt()" is deprecated. Use "mod( int( ... ) )" instead.
 */
export const modInt: (a: NodeRepresentation, b: NodeRepresentation) => ShaderNodeObject<OperatorNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        /**
         * @deprecated .remainder() has been renamed to .modInt().
         */
        remainder: typeof remainder;
        /**
         * @deprecated "modInt()" is deprecated. Use "mod( int( ... ) )" instead.
         */
        modInt: typeof modInt;
    }
}
